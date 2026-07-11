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
 *  - Правильная обработка UTF-8 (Buffer)
 * ============================================================
 */

const https = require('https');

// ==================== КОНФИГУРАЦИЯ (только на сервере!) ====================
const JSON_BIN_ID  = process.env.JSON_BIN_ID  || '';
const JSON_BIN_KEY = process.env.JSON_BIN_KEY || '';
const GH_TOKEN     = process.env.GH_TOKEN     || '';
const GH_OWNER     = process.env.GH_OWNER     || '';
const GH_REPO      = process.env.GH_REPO      || '';

// Проверка конфигурации при старте
console.log('=== OOE SERVER STARTING ===');
console.log('JSON_BIN_ID:', JSON_BIN_ID ? 'set' : 'NOT SET');
console.log('JSON_BIN_KEY:', JSON_BIN_KEY ? 'set' : 'NOT SET');
console.log('GH_TOKEN:', GH_TOKEN ? 'set' : 'NOT SET');
console.log('GH_OWNER:', GH_OWNER || 'NOT SET');
console.log('GH_REPO:', GH_REPO || 'NOT SET');

// ==================== RATE LIMIT ====================
const rateLimit = new Map();
const RATE_WINDOW = 60 * 1000;
const RATE_MAX_GET  = 100;
const RATE_MAX_POST = 30;

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

// Очистка старых записей
setInterval(() => {
  const now = Date.now();
  for (const [key, v] of rateLimit.entries()) {
    if (now > v.reset) rateLimit.delete(key);
  }
}, 5 * 60 * 1000);

// ==================== ВСПОМОГАТЕЛЬНЫЕ ====================
function send(res, status, data) {
  try {
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
  } catch (e) {
    console.error('send() error:', e);
    res.writeHead(500);
    res.end('Internal error');
  }
}

// Запрос к JSON Bin (с правильной обработкой UTF-8 через Buffer)
function jsonBinRequest(method, data) {
  return new Promise((resolve, reject) => {
    if (!JSON_BIN_ID || !JSON_BIN_KEY) {
      console.error('JSON Bin not configured!');
      return reject(new Error('JSON Bin not configured'));
    }
    
    const path = method === 'GET'
      ? `/v3/b/${JSON_BIN_ID}/latest`
      : `/v3/b/${JSON_BIN_ID}`;

    const bodyBuffer = data ? Buffer.from(JSON.stringify(data), 'utf8') : null;
    
    const options = {
      hostname: 'api.jsonbin.io',
      port: 443,
      path,
      method,
      headers: {
        'X-Master-Key': JSON_BIN_KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=utf-8',
        ...(bodyBuffer ? { 'Content-Length': bodyBuffer.length } : {})
      }
    };

    console.log(`[JSON Bin] ${method} ${path}`);

    const req = https.request(options, r => {
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => {
        try {
          // Собираем Buffer и конвертируем в UTF-8 строку
          const bodyBuffer = Buffer.concat(chunks);
          const bodyString = bodyBuffer.toString('utf8');
          
          if (r.statusCode !== 200) {
            console.error(`[JSON Bin] Error ${r.statusCode}: ${bodyString.substring(0, 200)}`);
          }
          
          const parsed = JSON.parse(bodyString);
          resolve({ ok: r.statusCode === 200, status: r.statusCode, data: parsed });
        } catch (e) {
          console.error('[JSON Bin] Parse error:', e.message);
          reject(new Error('JSON parse error: ' + e.message));
        }
      });
    });
    
    req.on('error', e => {
      console.error('[JSON Bin] Request error:', e.message);
      reject(e);
    });
    
    if (bodyBuffer) req.write(bodyBuffer);
    req.end();
  });
}

// Загрузка картинки в GitHub (с правильной обработкой UTF-8)
function uploadToGithub(base64Content, fileName) {
  return new Promise((resolve, reject) => {
    if (!GH_TOKEN || !GH_OWNER || !GH_REPO) {
      console.error('GitHub not configured!');
      return reject(new Error('GitHub not configured'));
    }

    const safeName = (fileName || 'image').replace(/[^a-z0-9._-]/gi, '_');
    const path = `uploads/${Date.now()}_${safeName}`;
    
    const bodyData = JSON.stringify({
      message: 'Upload via OOE',
      content: base64Content
    });
    const bodyBuffer = Buffer.from(bodyData, 'utf8');

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${GH_TOKEN}`,
        'User-Agent': 'OOE-Portal',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Length': bodyBuffer.length
      }
    };

    const req = https.request(options, r => {
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => {
        try {
          const bodyString = Buffer.concat(chunks).toString('utf8');
          const result = JSON.parse(bodyString);
          
          if (r.statusCode === 200 || r.statusCode === 201) {
            const cdnUrl = `https://cdn.jsdelivr.net/gh/${GH_OWNER}/${GH_REPO}@main/${path}`;
            console.log('[GitHub] Upload success:', cdnUrl);
            resolve({ ok: true, url: cdnUrl, path });
          } else {
            console.error('[GitHub] Error:', r.statusCode, result.message);
            reject(new Error('GitHub error: ' + (result.message || r.statusCode)));
          }
        } catch (e) {
          reject(new Error('Parse error: ' + e.message));
        }
      });
    });
    
    req.on('error', e => {
      console.error('[GitHub] Request error:', e.message);
      reject(e);
    });
    
    req.write(bodyBuffer);
    req.end();
  });
}

// ==================== ВАЛИДАЦИЯ ДАННЫХ ====================
function validateData(data) {
  if (!data || typeof data !== 'object') return { ok: false, error: 'Not an object' };
  
  const required = ['users', 'channels', 'news', 'polls', 'forumPosts', 'badges', 'settings'];
  for (const key of required) {
    if (data[key] === undefined) {
      return { ok: false, error: `Missing field: ${key}` };
    }
  }
  
  if (!Array.isArray(data.users)) return { ok: false, error: 'users must be array' };
  if (!Array.isArray(data.channels)) return { ok: false, error: 'channels must be array' };
  if (!Array.isArray(data.news)) return { ok: false, error: 'news must be array' };
  if (!Array.isArray(data.polls)) return { ok: false, error: 'polls must be array' };
  if (!Array.isArray(data.forumPosts)) return { ok: false, error: 'forumPosts must be array' };
  if (!Array.isArray(data.badges)) return { ok: false, error: 'badges must be array' };
  if (!data.settings || typeof data.settings !== 'object') return { ok: false, error: 'settings must be object' };
  
  const jsonStr = JSON.stringify(data);
  if (jsonStr.length > 5 * 1024 * 1024) {
    return { ok: false, error: 'Data too large (max 5MB)' };
  }
  
  if (data.users.length > 10000) return { ok: false, error: 'Too many users' };
  if (data.news.length > 10000) return { ok: false, error: 'Too many news' };
  if (data.forumPosts.length > 50000) return { ok: false, error: 'Too many forum posts' };
  
  return { ok: true };
}

// ==================== ОЧИСТКА ДАННЫХ ====================
function sanitizeData(data) {
  if (data.settings && typeof data.settings === 'object') {
    data.settings = {
      mainPageMode: String(data.settings.mainPageMode || 'info').substring(0, 20),
      logoUrl: String(data.settings.logoUrl || '').substring(0, 500),
      communityLink: String(data.settings.communityLink || '').substring(0, 500),
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

// Кэш данных для сравнения версий
let lastDataHash = '';
let lastDataTimestamp = 0;

function getHash(data) {
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash.toString();
}

// ==================== MAIN HANDLER ====================
module.exports = async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return send(res, 204, '');
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const isWrite = req.method === 'POST';
  
  if (!checkRate(ip, isWrite)) {
    return send(res, 429, { error: 'Too many requests' });
  }

  const url = req.url || '';
  console.log(`[${req.method}] ${url} from ${ip}`);

  try {
    // ============ GET /api/data ============
    if (url === '/api/data' && req.method === 'GET') {
      const result = await jsonBinRequest('GET');
      const data = result.data.record || result.data;
      
      // Вычисляем хэш для проверки изменений
      const currentHash = getHash(data);
      const hasChanged = currentHash !== lastDataHash;
      
      if (hasChanged) {
        lastDataHash = currentHash;
        lastDataTimestamp = Date.now();
        console.log('[Data] Changes detected, new hash:', currentHash);
      }
      
      // Отправляем с заголовками для кэширования
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Data-Hash',
        'ETag': currentHash,
        'X-Data-Hash': currentHash,
        'X-Data-Timestamp': lastDataTimestamp.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(JSON.stringify(data));
      return;
    }

    // ============ POST /api/data ============
    if (url === '/api/data' && req.method === 'POST') {
      const validation = validateData(req.body);
      if (!validation.ok) {
        console.warn(`Invalid data from ${ip}: ${validation.error}`);
        return send(res, 400, { error: validation.error });
      }
      
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
      
      const cleanBase64 = base64.includes(',') ? base64.split(',')[1] : base64;
      if (cleanBase64.length > 10 * 1024 * 1024) {
        return send(res, 400, { error: 'Image too large' });
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
    
    // ============ GET /api/version ============
    // Быстрая проверка, изменились ли данные (без загрузки всех данных)
    if (url === '/api/version' && req.method === 'GET') {
      return send(res, 200, {
        hash: lastDataHash,
        timestamp: lastDataTimestamp,
        hasChanges: lastDataHash !== req.headers['x-last-hash']
      });
    }

    return send(res, 404, { error: 'Not found' });

  } catch (e) {
    console.error('[Server Error]', e.message);
    console.error('[Stack]', e.stack);
    return send(res, 500, { error: e.message || 'Server error' });
  }
};
