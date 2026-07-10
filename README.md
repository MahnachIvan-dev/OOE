# 🚀 OOE - Информационный портал

Защищённый информационный портал с форумом, каналами, новостями, голосованиями и системой ролей.

## ✨ Возможности

- **Главная страница** — 3 режима: информация / новости / голосование
- **Hero-секция** — меняющиеся картинки каждые 5 сек, логотип, настраивается из админки
- **Новости** — с доказательствами (отдельная картинка источника), лайками
- **Форум** — стиль Reddit (upvote/downvote), комментарии с лайками
- **Каналы** — верификация, подписчики, обложки, новости
- **Роли** — `admin` (полный доступ), `moder` (только новости), `user`
- **Анти-спам** — 5 одинаковых сообщений = мут на 1 час
- **Защита** — все ключи на сервере, клиент ничего не видит

---

## 📦 Структура проекта

```
ooe-portal/
├── index.html           ← HTML сайта
├── api/
│   └── data.js          ← Сервер-прокси (Vercel serverless)
├── vercel.json          ← Конфиг Vercel
└── README.md
```

---

## 📋 Структура JSON Bin

```json
{
  "users": [
    {
      "id": "строка",
      "username": "логин",
      "password": "сгенерированный_пароль",
      "phone": "+79991234567",
      "avatar": "https://cdn.jsdelivr.net/... или base64",
      "cover": "https://...",
      "status": "online|offline|busy",
      "statusText": "Занят",
      "role": "admin|moder|user",
      "isBanned": 0,
      "mutedUntil": 0,
      "badges": ["badge1", "badge2"],
      "channelId": "id канала или null",
      "subscribers": ["id пользователя", ...],
      "subscriptions": ["id пользователя", ...],
      "likedPosts": [{"id": "id поста", "vote": "up|down"}, ...],
      "likedNews": ["id новости", ...],
      "joinedAt": 1700000000,
      "lastSeen": 1700000000
    }
  ],
  "channels": [
    {
      "id": "строка",
      "ownerId": "id владельца",
      "name": "Название канала",
      "description": "Описание",
      "avatar": "URL или base64",
      "cover": "URL или base64",
      "verified": false,
      "verificationRequested": false,
      "subscribers": ["id пользователя", ...]
    }
  ],
  "news": [
    {
      "id": "строка",
      "title": "Заголовок",
      "content": "Текст новости",
      "image": "главное изображение (URL)",
      "evidenceImage": "доказательство/источник (URL)",
      "authorId": "id канала или пользователя",
      "authorType": "admin|channel",
      "status": "pending|approved|rejected",
      "likes": ["id пользователя", ...],
      "timestamp": 1700000000
    }
  ],
  "polls": [
    {
      "id": "строка",
      "question": "Вопрос",
      "options": [
        {"text": "Вариант 1", "votes": 10},
        {"text": "Вариант 2", "votes": 5}
      ],
      "votedUsers": ["id пользователя", ...],
      "status": "active|closed",
      "timestamp": 1700000000
    }
  ],
  "forumPosts": [
    {
      "id": "строка",
      "authorId": "id автора",
      "title": "Заголовок темы",
      "content": "Текст",
      "likes": ["id", ...],
      "dislikes": ["id", ...],
      "comments": [
        {
          "id": "строка",
          "userId": "id комментатора",
          "text": "Текст комментария",
          "likes": ["id", ...],
          "timestamp": 1700000000
        }
      ],
      "timestamp": 1700000000
    }
  ],
  "badges": [
    {"id": "badge1", "name": "Первопроходец", "icon": "🌟", "desc": "Регистрация"},
    {"id": "badge2", "name": "Форумчанин", "icon": "💬", "desc": "Создал тему"},
    {"id": "badge3", "name": "Голосующий", "icon": "🗳️", "desc": "Голосовал"},
    {"id": "badge4", "name": "Автор", "icon": "✍️", "desc": "Предложил новость"},
    {"id": "badge5", "name": "Вещатель", "icon": "📺", "desc": "Создал канал"},
    {"id": "badge6", "name": "Верифицирован", "icon": "✅", "desc": "Канал верифицирован"},
    {"id": "badge7", "name": "Активист", "icon": "🔥", "desc": "10+ постов"},
    {"id": "badge8", "name": "Популярный", "icon": "⭐", "desc": "50+ лайков"}
  ],
  "settings": {
    "mainPageMode": "info|news|poll",
    "logoUrl": "URL логотипа",
    "heroImages": ["url1", "url2", "url3"],
    "heroTitle": "Заголовок на главной",
    "heroSubtitle": "Подзаголовок",
    "aboutText": "Текст о портале",
    "rules": "Правила"
  }
}
```

---

## 🎨 Где менять картинки и логотип

### 1. Логотип в хедере
В `index.html` найдите:
```html
<div class="logo" onclick="App.go('home')">OOE</div>
```
Замените на:
```html
<div class="logo" onclick="App.go('home')">
  <img src="https://ваш-url/логотип.png" alt="OOE"> OOE
</div>
```

**Или** через админку: Админ-панель → Настройки → Логотип (URL или загрузить)

### 2. Логотип на главной странице (Hero)
Через админку: **Админ-панель → Настройки → Логотип**
Или в JSON Bin: `settings.logoUrl = "https://..."`

### 3. Фоновые картинки Hero
Через админку: **Админ-панель → Настройки → Картинки Hero** (по одной на строку)
Или в JSON Bin: `settings.heroImages = ["url1", "url2", "url3"]`

### 4. Обложка канала
Настройки канала → Загрузить обложку

### 5. Аватар пользователя
Профиль → Редактировать → Аватар

---

## 🚀 ПОЛНАЯ ИНСТРУКЦИЯ ПО ДЕПЛОЮ

### Шаг 1: Создайте JSON Bin

1. Зайдите на [jsonbin.io](https://jsonbin.io) → зарегистрируйтесь
2. Создайте новый Bin:
   - Name: `ooe-portal`
   - Content: скопируйте структуру JSON Bin выше (с пустыми массивами)
3. Скопируйте **BIN_ID** (из URL) и **MASTER_KEY** (в разделе API Keys)

### Шаг 2: Создайте GitHub-репозиторий для картинок

1. На GitHub: New repository
2. Name: `ooe-images` (или любое)
3. **Public** (публичный — важно для jsDelivr!)
4. Initialize with README
5. Settings → Developer settings → Personal access tokens → Tokens (classic)
6. Generate new token с правами **repo**
7. Скопируйте токен (начинается с `ghp_...`)

### Шаг 3: Создайте GitHub-репозиторий для сайта

1. New repository → name: `ooe-portal` → Public
2. Загрузите файлы:
   - `index.html`
   - `api/data.js`
   - `vercel.json`
   - `README.md`

### Шаг 4: Деплой на Vercel

1. [vercel.com](https://vercel.com) → Sign up / Sign in
2. "Add New..." → Project → Import Git Repository → выберите `ooe-portal`
3. Настройки проекта:
   - **Framework Preset**: Other
   - **Build Command**: оставьте **пустым**
   - **Output Directory**: `./` (точка и слэш)
4. **Environment Variables** (добавьте все 5):
   ```
   JSON_BIN_ID   = ваш_bin_id
   JSON_BIN_KEY  = ваш_master_key
   CLIENT_KEY    = ooe_client_key_2024
   GH_TOKEN      = ghp_ваш_токен
   GH_OWNER      = ваш_github_username
   GH_REPO       = ooe-images
   ```
5. Нажмите **Deploy**
6. Через минуту получите URL: `https://ooe-portal-XXX.vercel.app`

### Шаг 5: Настройте URL в index.html

Откройте `index.html`, найдите в самом верху блока `<script>`:
```javascript
const CFG = {
  API_URL: '',  // ← ВСТАВЬТЕ СЮДА URL ВАШЕГО СЕРВЕРА
  CLIENT_KEY: 'ooe_client_key_2024',
  ...
};
```

Замените на:
```javascript
const CFG = {
  API_URL: 'https://ooe-portal-XXX.vercel.app/api',
  CLIENT_KEY: 'ooe_client_key_2024',
  ...
};
```

Закоммитьте изменения — Vercel автоматически передеплоит.

### Шаг 6: Создайте первого админа

1. Откройте ваш сайт
2. Зарегистрируйте пользователя (получите сгенерированный пароль)
3. Зайдите в [jsonbin.io](https://jsonbin.io) → ваш bin
4. Найдите этого пользователя в массиве `users`
5. Измените:
   ```json
   "role": "user"   →   "role": "admin"
   ```
6. Сохраните bin
7. Перезагрузите сайт → теперь вы админ!

---

## 🔐 Безопасность

| Что | Где хранится |
|-----|--------------|
| `JSON_BIN_ID` | Vercel env |
| `JSON_BIN_KEY` | Vercel env |
| `GH_TOKEN` | Vercel env |
| `GH_OWNER` | Vercel env |
| `GH_REPO` | Vercel env |
| `CLIENT_KEY` | Vercel env + HTML (только для идентификации клиента) |

**Клиент видит ТОЛЬКО**:
- URL сервера
- CLIENT_KEY (можно подменить, но сервер всё равно проверяет данные)

**Клиент НЕ видит**:
- Master Key JSON Bin
- GitHub Token
- Структуру репозитория

---

## 📝 API Endpoints

### GET `/api/data` — загрузить данные
```bash
curl -H "X-Client-Key: ooe_client_key_2024" https://ваш-url/api/data
```

### POST `/api/data` — сохранить данные
```bash
curl -X POST \
  -H "X-Client-Key: ooe_client_key_2024" \
  -H "Content-Type: application/json" \
  -d '{...}' \
  https://ваш-url/api/data
```

### POST `/api/upload` — загрузить картинку в GitHub
```bash
curl -X POST \
  -H "X-Client-Key: ooe_client_key_2024" \
  -H "Content-Type: application/json" \
  -d '{"base64": "data:image/png;base64,XXX", "fileName": "test.png"}' \
  https://ваш-url/api/upload
```

### GET `/api/health` — проверка работы
```bash
curl https://ваш-url/api/health
```

---

## 👥 Система ролей

| Роль | Возможности |
|------|-------------|
| **admin** | Всё: пользователи, каналы, новости, голосования, настройки |
| **moder** | Только одобрение/отклонение новостей |
| **user** | Обычный пользователь |

**Первый пользователь НЕ становится админом автоматически!** Админ назначается вручную:
- Через JSON Bin: `role: "admin"`
- Через админ-панель: Пользователи → Роль

---

## 🛡️ Анти-спам

- Отслеживаются последние сообщения пользователя
- 5 одинаковых сообщений подряд = **автомут на 1 час**
- Работает для: комментарии, создание тем

Настройка в `index.html`:
```javascript
MAX_SAME_MESSAGES: 5,
MUTE_DURATION: 3600  // в секундах
```

---

## 🐛 Troubleshooting

### "API_URL не настроен"
Значит в `index.html` не указан `CFG.API_URL`. Укажите URL вашего сервера.

### 401 Unauthorized
`CLIENT_KEY` в HTML не совпадает с env переменной на сервере. Должен быть одинаковым.

### Новости теряются после перезагрузки
Исправлено в этой версии! Добавлена проверка успешности сохранения и перезагрузка данных с сервера.

### Картинки не загружаются на GitHub
- Проверьте `GH_TOKEN` (действителен ли)
- Репозиторий должен быть **public**
- У токена должны быть права **repo**

### Первый пользователь — не админ
Это нормально! Первый пользователь получает `role: "user"`. Чтобы сделать админом — отредактируйте JSON Bin.

---

## 📊 Как это работает

```
[Браузер] → [index.html]
              ↓
              fetch(api/data) + CLIENT_KEY
              ↓
[Сервер Vercel] → проверка CLIENT_KEY
              ↓
              запрос к JSON Bin с MASTER_KEY
              ↓
[JSON Bin]  → данные
              ↓
[Браузер] получает данные, ничего не зная о ключах!
```

Загрузка картинок:
```
[Браузер] → base64 картинки → fetch(api/upload)
              ↓
[Сервер] загружает в GitHub с GH_TOKEN
              ↓
[GitHub] сохраняет файл
              ↓
[Сервер] возвращает jsDelivr URL: https://cdn.jsdelivr.net/gh/...
              ↓
[Браузер] сохраняет URL в JSON Bin
```

---

## 🎯 Быстрый чек-лист

- [ ] Создан JSON Bin, скопированы BIN_ID и MASTER_KEY
- [ ] Создан GitHub-репозиторий для картинок (public)
- [ ] Создан GitHub Token (ghp_...)
- [ ] Загружены файлы сайта на GitHub
- [ ] Задеплоено на Vercel
- [ ] В Environment Variables добавлены все 6 ключей
- [ ] В `index.html` указан `API_URL`
- [ ] Зарегистрирован первый пользователь
- [ ] В JSON Bin изменено `role: "admin"`

Всё готово! 🚀
