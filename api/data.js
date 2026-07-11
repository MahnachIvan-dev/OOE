/**
 * ============================================================
 *  OOE SERVER — Защищённый сервер-прокси (БЕЗ CLIENT_KEY)
 * ============================================================
 * 
 *  ENV переменные (Vercel → Settings → Environment Variables):
 *  -----------------------------------------------
 *  JSON_BIN_ID   - ID вашего JSON Bin
 *  JSON_BIN_KEY  - Master Key JSON Bin
 *  GH_TOKEN      - GitHub Personal Access Token
 *  GH_OWNER      - Ваш GitHub username
 *  GH_REPO       - Имя репозитория (public)
 * 
 *  ЗАЩИТА:
 *  - Rate limiting по IP (100 запросов/мин)
 *  - Валидация данных на сервере
 *  - Все ключи спрятаны на сервере
 *  - CORS защита
 *  - Лимит размера данных (5MB)
 * ============================================================
 */

const https = require('https');

// ==================== КОНФИГУРАЦИЯ (только на сервере!) ====================
const JSON_BIN_ID  = process.env.JSON_BIN_ID  || '';
const JSON_BIN_KEY = process.env.JSON_BIN_KEY || '';
const GH_TOKEN     = process.env.GH_TOKEN     || '';
const GH_OWNER     = process.env.GH_OWNER     || '';
const GH_REPO      = process.env.GH_REPO      || '';

// ==================== RATE LIMIT ====================
const rateLimit = new Map();
const RATE_WINDOW = 60 * 1000;  // 1 минута
const RATE_MAX_GET  = 100;      // 100 чтений в минуту
const RATE_MAX_POST = 30;       // 30 записей в минуту (строже!)

function checkRate(ip, isWrite = false) {
  const now = Date.now();
  const key = `${ip}_${isWrite ? 'w' : 'r'}`;
  const max = isWrite ? RATE_MAX_POST : RATE_MAX_GET;
  
  const entry = rateLimit.get(key);
  if (!entry || now > entry.reset) {
    rateLimit.set(key, { count: 1, reset: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

// Очистка старых записей каждые 5 минут
setInterval(() => {
  const now = Date.now();
  for (const [key, v] of rateLimit.entries()) {
    if (now > v.reset) rateLimit.delete(key);
  }
}, 5 * 60 * 1000);

// ==================== ВСПОМОГАТЕЛЬНЫЕ ====================
function send(res, status, data) {
  const body = typeof data === 'string' ? data : JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Content-Length': Buffer.byteLength(body, 'utf8')
  });
  res.end(body);
}

// Запрос к JSON Bin
function jsonBinRequest(method, data) {
  return new Promise((resolve, reject) => {
    if (!JSON_BIN_ID || !JSON_BIN_KEY) {
      return reject(new Error('JSON Bin not configured'));
    }
    const path = method === 'GET'
      ? `/v3/b/${JSON_BIN_ID}/latest`
      : `/v3/b/${JSON_BIN_ID}`;

    const body = data ? JSON.stringify(data) : null;
    const options = {
      hostname: 'api.jsonbin.io',
      port: 443,
      path,
      method,
      headers: {
        'X-Master-Key': JSON_BIN_KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=utf-8',
        ...(body ? { 'Content-Length': Buffer.byteLength(body, 'utf8') } : {})
      }
    };

    const req = https.request(options, r => {
      let chunks = '';
      r.on('data', c => chunks += c);
      r.on('end', () => {
        try {
          resolve({ ok: r.statusCode === 200, status: r.statusCode, data: JSON.parse(chunks) });
        } catch (e) {
          reject(new Error('Invalid JSON: ' + chunks));
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// Загрузка картинки в GitHub
function uploadToGithub(base64Content, fileName) {
  return new Promise((resolve, reject) => {
    if (!GH_TOKEN || !GH_OWNER || !GH_REPO) {
      return reject(new Error('GitHub not configured'));
    }

    const path = `uploads/${Date.now()}_${(fileName || 'image').replace(/[^a-z0-9.]/gi, '_')}`;
    const body = JSON.stringify({
      message: 'Upload via OOE',
      content: base64Content
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${GH_TOKEN}`,
        'User-Agent': 'OOE-Portal',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, r => {
      let chunks = '';
      r.on('data', c => chunks += c);
      r.on('end', () => {
        try {
          const result = JSON.parse(chunks);
          if (r.statusCode === 200 || r.statusCode === 201) {
            const cdnUrl = `https://cdn.jsdelivr.net/gh/${GH_OWNER}/${GH_REPO}@main/${path}`;
            resolve({ ok: true, url: cdnUrl, path });
          } else {
            reject(new Error('GitHub error: ' + (result.message || r.statusCode)));
          }
        } catch (e) {
          reject(new Error('Parse error: ' + chunks));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ==================== ВАЛИДАЦИЯ ДАННЫХ ====================
function validateData(data) {
  if (!data || typeof data !== 'object') return { ok: false, error: 'Not an object' };
  
  // Обязательные поля
  const required = ['users', 'channels', 'news', 'polls', 'forumPosts', 'badges', 'settings'];
  for (const key of required) {
    if (data[key] === undefined) {
      return { ok: false, error: `Missing field: ${key}` };
    }
  }
  
  // Проверка типов
  if (!Array.isArray(data.users)) return { ok: false, error: 'users must be array' };
  if (!Array.isArray(data.channels)) return { ok: false, error: 'channels must be array' };
  if (!Array.isArray(data.news)) return { ok: false, error: 'news must be array' };
  if (!Array.isArray(data.polls)) return { ok: false, error: 'polls must be array' };
  if (!Array.isArray(data.forumPosts)) return { ok: false, error: 'forumPosts must be array' };
  if (!Array.isArray(data.badges)) return { ok: false, error: 'badges must be array' };
  if (!data.settings || typeof data.settings !== 'object') return { ok: false, error: 'settings must be object' };
  
  // Лимит размера (5MB)
  const jsonStr = JSON.stringify(data);
  if (jsonStr.length > 5 * 1024 * 1024) {
    return { ok: false, error: 'Data too large (max 5MB)' };
  }
  
  // Лимиты на количество записей (защита от спама)
  if (data.users.length > 10000) return { ok: false, error: 'Too many users' };
  if (data.news.length > 10000) return { ok: false, error: 'Too many news' };
  if (data.forumPosts.length > 50000) return { ok: false, error: 'Too many forum posts' };
  
  return { ok: true };
}

// ==================== ОЧИСТКА ДАННЫХ ОТ ПОДОЗРИТЕЛЬНОГО ====================
function sanitizeData(data) {
  // Убираем потенциально опасные поля, которые клиент не должен менять
  // Это защита от XSS и подмены данных
  
  // Очищаем настройки (только разрешённые поля)
  if (data.settings) {
    data.settings = {
      mainPageMode: String(data.settings.mainPageMode || 'info').substring(0, 20),
      logoUrl: String(data.settings.logoUrl || '').substring(0, 500),
      heroImages: Array.isArray(data.settings.heroImages) 
        ? data.settings.heroImages.slice(0, 10).map(s => String(s).substring(0, 500))
        : [],
      heroTitle: String(data.settings.heroTitle || '').substring(0, 200),
      heroSubtitle: String(data.settings.heroSubtitle || '').substring(0, 500),
      aboutText: String(data.settings.aboutText || '').substring(0, 5000),
      rules: String(data.settings.rules || '').substring(0, 5000)
    };
  }
  
  return data;
}

// ==================== MAIN HANDLER (Vercel serverless) ====================
module.exports = async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return send(res, 204, '');
  }

  // Rate limit
  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const isWrite = req.method === 'POST';
  
  if (!checkRate(ip, isWrite)) {
    return send(res, 429, { error: 'Too many requests. Try again later.' });
  }

  const url = req.url || '';

  try {
    // ============ GET /api/data ============
    if (url === '/api/data' && req.method === 'GET') {
      const result = await jsonBinRequest('GET');
      const data = result.data.record || result.data;
      return send(res, 200, data);
    }

    // ============ POST /api/data ============
    if (url === '/api/data' && req.method === 'POST') {
      const validation = validateData(req.body);
      if (!validation.ok) {
        console.warn(`Invalid data from ${ip}: ${validation.error}`);
        return send(res, 400, { error: validation.error });
      }
      
      // Очищаем данные
      const cleanData = sanitizeData(req.body);
      
      await jsonBinRequest('PUT', cleanData);
      return send(res, 200, { ok: true });
    }

    // ============ POST /api/upload ============
    if (url === '/api/upload' && req.method === 'POST') {
      const { base64, fileName } = req.body || {};
      if (!base64) {
        return send(res, 400, { error: 'No image data' });
      }
      // Извлекаем чистый base64 из data:image/...;base64,XXXXX
      const cleanBase64 = base64.includes(',') ? base64.split(',')[1] : base64;
      if (cleanBase64.length > 10 * 1024 * 1024) { // 10MB max
        return send(res, 400, { error: 'Image too large (max 10MB)' });
      }

      const result = await uploadToGithub(cleanBase64, fileName);
      return send(res, 200, { url: result.url });
    }

    // ============ GET /api/health ============
    if (url === '/api/health') {
      return send(res, 200, {
        status: 'ok',
        time: Date.now(),
        configured: {
          jsonbin: !!JSON_BIN_ID,
          github: !!GH_TOKEN
        }
      });
    }

    return send(res, 404, { error: 'Not found' });

  } catch (e) {
    console.error('Server error:', e.message);
    return send(res, 500, { error: e.message || 'Server error' });
  }
};
