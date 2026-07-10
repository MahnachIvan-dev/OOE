/**
 * ============================================================
 *  OOE SERVER — Защищённый сервер-прокси
 * ============================================================
 * 
 *  ВСЯ КОНФИГУРАЦИЯ ХРАНИТСЯ ЗДЕСЬ (в переменных окружения Vercel)
 *  Клиент знает только адрес сервера и клиентский ключ.
 * 
 *  ENV переменные (Vercel → Settings → Environment Variables):
 *  -----------------------------------------------
 *  JSON_BIN_ID     - ID вашего JSON Bin
 *  JSON_BIN_KEY    - Master Key JSON Bin
 *  CLIENT_KEY      - Секретный ключ клиента
 *  GH_TOKEN        - GitHub Personal Access Token
 *  GH_OWNER        - Ваш GitHub username
 *  GH_REPO         - Имя репозитория (public)
 * ============================================================
 */

const https = require('https');

// ==================== КОНФИГУРАЦИЯ (только на сервере!) ====================
const JSON_BIN_ID  = process.env.JSON_BIN_ID  || '';
const JSON_BIN_KEY = process.env.JSON_BIN_KEY || '';
const CLIENT_KEY   = process.env.CLIENT_KEY   || 'ooe_client_key_2024';
const GH_TOKEN     = process.env.GH_TOKEN     || '';
const GH_OWNER     = process.env.GH_OWNER     || '';
const GH_REPO      = process.env.GH_REPO      || '';

// ==================== RATE LIMIT ====================
const rateLimit = new Map();
const RATE_WINDOW = 60 * 1000; // 1 минута
const RATE_MAX = 100;          // 100 запросов в минуту

function checkRate(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count++;
  return true;
}

// Очистка старых записей каждые 5 минут
setInterval(() => {
  const now = Date.now();
  for (const [ip, v] of rateLimit.entries()) {
    if (now > v.reset) rateLimit.delete(ip);
  }
}, 5 * 60 * 1000);

// ==================== ВСПОМОГАТЕЛЬНЫЕ ====================
function send(res, status, data, headers = {}) {
  const h = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Client-Key',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    ...headers
  };
  res.writeHead(status, h);
  res.end(typeof data === 'string' ? data : JSON.stringify(data));
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
        'Content-Type': 'application/json',
        ...(body ? { 'Content-Length': Buffer.byteLength(body) } : {})
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
      content: base64Content // уже очищенный от data:image/...
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
            // Возвращаем jsDelivr URL для быстрой доставки
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

// Валидация данных
function validateData(data) {
  if (!data || typeof data !== 'object') return false;
  const required = ['users', 'channels', 'news', 'polls', 'forumPosts', 'badges', 'settings'];
  for (const key of required) {
    if (data[key] === undefined) return false;
  }
  if (!Array.isArray(data.users) || !Array.isArray(data.channels)) return false;
  if (!Array.isArray(data.news) || !Array.isArray(data.polls)) return false;
  if (!Array.isArray(data.forumPosts) || !Array.isArray(data.badges)) return false;
  if (!data.settings || typeof data.settings !== 'object') return false;
  // Лимит размера 5MB
  if (JSON.stringify(data).length > 5 * 1024 * 1024) return false;
  return true;
}

// ==================== MAIN HANDLER (Vercel serverless) ====================
module.exports = async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return send(res, 204, '');
  }

  // Rate limit
  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (!checkRate(ip)) {
    return send(res, 429, { error: 'Too many requests. Try again later.' });
  }

  // Проверка клиентского ключа
  const clientKey = req.headers['x-client-key'];
  if (clientKey !== CLIENT_KEY) {
    return send(res, 401, { error: 'Unauthorized' });
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
      if (!validateData(req.body)) {
        return send(res, 400, { error: 'Invalid data structure' });
      }
      await jsonBinRequest('PUT', req.body);
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
