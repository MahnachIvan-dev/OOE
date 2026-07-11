<!DOCTYPE html>
<html lang="ru" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="ООИ - Организация Объединённых Империй. Информационный портал цифровых империй, союзов и организаций.">
<meta name="keywords" content="ООИ, империи, союзы, организации, новости, форум">
<meta name="author" content="ООИ Portal">
<meta property="og:title" content="ООИ - Организация Объединённых Империй">
<meta property="og:description" content="Сообщество цифровых империй, союзов и организаций">
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230066ff'/%3E%3Cstop offset='100%25' stop-color='%2300d4ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='48' fill='url(%23grad)'/%3E%3Ctext x='50' y='68' font-size='50' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3E👑%3C/text%3E%3C/svg%3E">
<link rel="alternate icon" type="image/png" href="https://cdn.jsdelivr.net/gh/MahnachIvan-dev/-ooe-image@main/a7KlP-removebg-preview.png">
<link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/MahnachIvan-dev/-ooe-image@main/a7KlP-removebg-preview.png">
<meta name="theme-color" content="#0066ff">
<meta name="msapplication-TileColor" content="#0066ff">
<title>ООИ - Организация Объединённых Империй</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
:root {
  --grad-main: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  --grad-accent: linear-gradient(135deg, #1e3a8a, #3b82f6);
  --grad-empire: linear-gradient(135deg, #ffd700, #ff8c00);
  --grad-org: linear-gradient(135deg, #8b5cf6, #ec4899);
  --grad-news: linear-gradient(135deg, #ef4444, #f59e0b);
  --grad-alliance: linear-gradient(135deg, #10b981, #06b6d4);
  --radius: 14px;
  --radius-sm: 10px;
  --shadow: 0 4px 20px rgba(0, 100, 255, 0.08);
  --shadow-lg: 0 10px 40px rgba(0, 100, 255, 0.15);
  --header-h: 68px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="dark"] {
  --bg-primary: #0a0f1a; --bg-secondary: #0f1829; --bg-card: #161f33;
  --bg-input: #1c2540; --bg-hover: #253150;
  --text-primary: #e8f0ff; --text-secondary: #a8b8d8; --text-muted: #6b7a9a;
  --border: #253150; --accent: #3b82f6; --accent-light: #60a5fa;
  --online: #10b981; --danger: #ef4444; --warning: #f59e0b; --verified: #00d4ff;
}
[data-theme="light"] {
  --bg-primary: #f0f7ff; --bg-secondary: #ffffff; --bg-card: #ffffff;
  --bg-input: #e6f0ff; --bg-hover: #cce0ff;
  --text-primary: #0f172a; --text-secondary: #475569; --text-muted: #64748b;
  --border: #cbd5e1; --accent: #2563eb; --accent-light: #3b82f6;
  --online: #10b981; --danger: #dc2626; --warning: #d97706; --verified: #0ea5e9;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary); color: var(--text-primary);
  min-height: 100vh; transition: var(--transition);
  line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
button { cursor: pointer; font-family: inherit; border: none; background: none; }
input, textarea, select { font-family: inherit; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 5px; }

/* Animated background */
.animated-bg {
  position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none;
}
.animated-bg::before, .animated-bg::after {
  content: ''; position: absolute;
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%);
  animation: float 20s infinite ease-in-out;
}
.animated-bg::before { top: -200px; left: -200px; }
.animated-bg::after {
  bottom: -200px; right: -200px;
  background: radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%);
  animation-delay: -10s;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 100px) scale(0.9); }
}

/* Header */
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: var(--header-h); background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; padding: 0 24px;
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(0, 100, 255, 0.06);
}
.logo {
  display: flex; align-items: center; gap: 10px;
  font-size: 26px; font-weight: 900; letter-spacing: 2px;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  cursor: pointer; position: relative;
}
.logo img { height: 40px; border-radius: 8px; }
.nav-links { display: flex; gap: 6px; margin-left: 40px; }
.nav-link {
  padding: 9px 18px; border-radius: 24px;
  color: var(--text-secondary); font-weight: 600; font-size: 14px;
  cursor: pointer; transition: var(--transition);
}
.nav-link:hover { background: var(--bg-hover); color: var(--text-primary); }
.nav-link.active {
  background: var(--grad-main); color: #fff;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}
.header-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.icon-btn {
  width: 42px; height: 42px; border-radius: 50%;
  background: var(--bg-input); color: var(--text-primary);
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition); font-size: 16px;
  border: 1px solid var(--border);
}
.icon-btn:hover {
  background: var(--accent); color: #fff;
  transform: translateY(-2px) scale(1.05);
  border-color: var(--accent);
}
.user-menu {
  display: flex; align-items: center; gap: 10px;
  padding: 4px 16px 4px 4px; border-radius: 30px;
  background: var(--bg-input); cursor: pointer;
  transition: var(--transition); border: 1px solid var(--border);
}
.user-menu:hover { border-color: var(--accent); }
.user-menu img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; }
.user-menu span { font-weight: 700; font-size: 14px; }
.login-btn {
  padding: 10px 22px; border-radius: 30px;
  background: var(--grad-main); color: #fff;
  font-weight: 700; font-size: 14px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  display: flex; align-items: center; gap: 6px;
  transition: var(--transition);
}
.login-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5); }
.hamburger { display: none; color: var(--text-primary); font-size: 22px; padding: 8px; }

/* Search */
.search-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(10,15,26,0.9); backdrop-filter: blur(10px);
  display: none; align-items: flex-start; justify-content: center;
  padding-top: 100px;
}
.search-overlay.active { display: flex; animation: fadeIn 0.2s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.search-box {
  width: 90%; max-width: 600px;
  background: var(--bg-card); border-radius: var(--radius);
  border: 2px solid var(--accent); box-shadow: 0 0 30px rgba(59,130,246,0.3);
  padding: 20px;
}
.search-input {
  width: 100%; padding: 14px 20px;
  background: var(--bg-input); border: 1px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text-primary);
  outline: none; font-size: 16px;
}
.search-input:focus { border-color: var(--accent); }
.search-results { margin-top: 15px; max-height: 400px; overflow-y: auto; }
.search-result {
  display: flex; align-items: center; gap: 12px;
  padding: 12px; border-radius: var(--radius-sm);
  cursor: pointer; transition: var(--transition);
}
.search-result:hover { background: var(--bg-hover); }
.search-result img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.search-result-info { flex: 1; }
.search-result-name { font-weight: 700; font-size: 14px; }
.search-result-meta { font-size: 12px; color: var(--text-muted); }

/* Hero */
.hero {
  position: relative; min-height: 500px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-secondary);
}
.hero-slides { position: absolute; inset: 0; }
.hero-slide {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  opacity: 0; transition: opacity 1.5s ease;
}
.hero-slide.active { opacity: 1; }
.hero-slide::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(10,15,26,0.9) 0%, rgba(0,102,255,0.5) 100%);
}
.hero-content {
  position: relative; z-index: 2;
  text-align: center; padding: 100px 24px 80px; max-width: 900px;
}
.hero-logo { margin-bottom: 28px; }
.hero-logo img {
  height: 100px; margin: 0 auto;
  filter: drop-shadow(0 10px 30px rgba(59,130,246,0.5));
  animation: floatLogo 3s ease-in-out infinite;
}
@keyframes floatLogo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.hero h1 {
  font-size: 54px; font-weight: 900; color: #fff;
  margin-bottom: 20px; line-height: 1.1;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
  animation: fadeInUp 0.8s ease;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero p { font-size: 20px; color: rgba(255,255,255,0.9); margin-bottom: 32px; }
.hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.hero-dots {
  position: absolute; bottom: 30px; left: 50%;
  transform: translateX(-50%); display: flex; gap: 8px; z-index: 3;
}
.hero-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: rgba(255,255,255,0.4); cursor: pointer;
  transition: var(--transition);
}
.hero-dot.active { background: #fff; width: 30px; border-radius: 5px; }

/* Stats */
.stats-section { padding: 60px 0; }
.stats-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}
.stat-card {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); padding: 32px 24px;
  text-align: center; transition: var(--transition);
  position: relative; overflow: hidden;
}
.stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--grad-main);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.6s ease;
}
.stat-card:hover::before { transform: scaleX(1); }
.stat-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); border-color: var(--accent); }
.stat-icon {
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--grad-main);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px; font-size: 24px; color: #fff;
}
.stat-num {
  font-size: 36px; font-weight: 900;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.stat-label { color: var(--text-muted); font-size: 14px; margin-top: 4px; }

.container { max-width: 1200px; margin: 0 auto; padding: 24px; }
.main-wrapper { margin-top: var(--header-h); min-height: calc(100vh - var(--header-h)); }

.card {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); padding: 24px; margin-bottom: 20px;
  box-shadow: var(--shadow); transition: var(--transition);
}
.card:hover { box-shadow: var(--shadow-lg); border-color: rgba(59, 130, 246, 0.3); }
.card-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border);
}
.card-title {
  font-size: 18px; font-weight: 800;
  display: flex; align-items: center; gap: 10px;
}
.card-title i { color: var(--accent); }

.btn {
  padding: 11px 22px; border-radius: 30px;
  font-weight: 700; font-size: 14px;
  display: inline-flex; align-items: center; gap: 8px;
  transition: var(--transition);
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--grad-main); color: #fff; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); }
.btn-primary:hover { box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5); }
.btn-outline { background: transparent; border: 2px solid var(--accent); color: var(--accent); }
.btn-outline:hover { background: var(--accent); color: #fff; }
.btn-danger { background: var(--danger); color: #fff; }
.btn-success { background: var(--online); color: #fff; }
.btn-warning { background: var(--warning); color: #fff; }
.btn-sm { padding: 7px 14px; font-size: 13px; }
.btn-icon { width: 38px; height: 38px; padding: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

/* Channel type buttons */
.btn-type-empire { background: var(--grad-empire); color: #000; font-weight: 800; }
.btn-type-org { background: var(--grad-org); color: #fff; font-weight: 800; }
.btn-type-news { background: var(--grad-news); color: #fff; font-weight: 800; }
.btn-type-alliance { background: var(--grad-alliance); color: #fff; font-weight: 800; }

.form-group { margin-bottom: 18px; }
.form-group label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); }
.form-input {
  width: 100%; padding: 12px 16px;
  background: var(--bg-input); border: 1px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text-primary);
  outline: none; transition: var(--transition); font-size: 15px;
}
.form-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15); }
textarea.form-input { resize: vertical; min-height: 100px; }
.file-upload {
  border: 2px dashed var(--border); border-radius: var(--radius);
  padding: 28px; text-align: center; cursor: pointer;
  color: var(--text-muted); transition: var(--transition);
}
.file-upload:hover { border-color: var(--accent); color: var(--accent); background: rgba(59,130,246,0.05); }
.file-upload i { font-size: 28px; margin-bottom: 8px; display: block; }

/* Type selector */
.type-selector {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 18px;
}
.type-option {
  padding: 16px; border-radius: var(--radius-sm);
  border: 2px solid var(--border); cursor: pointer;
  text-align: center; transition: var(--transition);
  background: var(--bg-input);
}
.type-option:hover { border-color: var(--accent); }
.type-option.selected { border-color: var(--accent); background: rgba(59,130,246,0.1); }
.type-option-icon { font-size: 32px; margin-bottom: 8px; }
.type-option-name { font-weight: 700; font-size: 14px; }
.type-option-desc { font-size: 11px; color: var(--text-muted); margin-top: 4px; }

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7);
  z-index: 200; display: none; align-items: center; justify-content: center;
  backdrop-filter: blur(8px);
}
.modal-overlay.active { display: flex; }
.modal {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); padding: 28px;
  width: 90%; max-width: 500px; max-height: 85vh; overflow-y: auto;
  box-shadow: var(--shadow-lg); animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9) translateY(-20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.modal-header h2 {
  font-size: 22px; font-weight: 800;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.modal-close {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--bg-input); color: var(--text-primary);
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.modal-close:hover { background: var(--danger); color: #fff; transform: rotate(90deg); }

.auth-container {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0a0f1a 0%, #1e3a8a 50%, #0891b2 100%);
  padding: 20px; position: relative; overflow: hidden;
}
.auth-container::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3), transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.3), transparent 50%);
  animation: pulse 4s ease infinite;
}
@keyframes pulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
.auth-box {
  position: relative; background: var(--bg-card); border-radius: 20px;
  border: 1px solid var(--border); padding: 40px;
  width: 100%; max-width: 420px; box-shadow: var(--shadow-lg);
  animation: modalIn 0.5s ease;
}
.auth-box h1 {
  text-align: center; margin-bottom: 8px; font-size: 36px; font-weight: 900;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
}
.auth-box .subtitle { text-align: center; color: var(--text-muted); margin-bottom: 28px; }
.auth-toggle { text-align: center; margin-top: 20px; color: var(--text-muted); font-size: 14px; }
.auth-toggle a { color: var(--accent); font-weight: 700; cursor: pointer; }

/* News */
.news-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;
}
.news-item {
  background: var(--bg-card); border-radius: var(--radius);
  overflow: hidden; border: 1px solid var(--border);
  transition: var(--transition); display: flex; flex-direction: column;
}
.news-item:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--accent); }
.news-img { width: 100%; height: 200px; object-fit: cover; background: var(--grad-accent); }
.news-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
.news-category {
  display: inline-block; padding: 4px 12px; border-radius: 20px;
  background: var(--grad-main); color: #fff; font-size: 11px;
  font-weight: 800; text-transform: uppercase; margin-bottom: 12px;
  width: fit-content;
}
.news-title { font-size: 18px; font-weight: 800; margin-bottom: 10px; }
.news-meta {
  display: flex; gap: 16px; font-size: 13px; color: var(--text-muted);
  margin-bottom: 12px; flex-wrap: wrap; align-items: center;
}
.news-author {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--accent); font-weight: 600; cursor: pointer;
}
.news-author img { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; }
.verified-badge-inline { color: var(--verified); font-size: 14px; }
.news-excerpt { color: var(--text-secondary); font-size: 14px; line-height: 1.6; flex: 1; }
.news-evidence {
  margin-top: 12px; padding: 12px; border-radius: var(--radius-sm);
  background: var(--bg-input); border-left: 3px solid var(--accent); font-size: 13px;
}
.news-evidence img { max-height: 150px; border-radius: 6px; margin-top: 8px; cursor: pointer; }
.news-actions {
  display: flex; gap: 12px; margin-top: 16px; padding-top: 16px;
  border-top: 1px solid var(--border);
}
.action-btn {
  display: flex; align-items: center; gap: 6px;
  color: var(--text-muted); padding: 6px 12px; border-radius: 20px;
  font-size: 13px; font-weight: 600; transition: var(--transition);
}
.action-btn:hover { background: var(--bg-input); color: var(--accent); }
.action-btn.liked { color: var(--danger); }

/* Forum */
.forum-feed { max-width: 700px; margin: 0 auto; }
.forum-post {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); margin-bottom: 14px;
  transition: var(--transition); padding: 18px;
}
.forum-post:hover { border-color: var(--accent); box-shadow: 0 0 0 1px rgba(59,130,246,0.3); }
.forum-post-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.forum-post-header img {
  width: 44px; height: 44px; border-radius: 50%; object-fit: cover;
  border: 2px solid var(--border);
}
.forum-post-user { flex: 1; }
.forum-post-name { font-weight: 700; display: flex; align-items: center; gap: 6px; cursor: pointer; }
.forum-post-name:hover { color: var(--accent); }
.forum-post-meta { font-size: 13px; color: var(--text-muted); }
.forum-post-title {
  font-size: 18px; font-weight: 800; margin-bottom: 8px;
  cursor: pointer; line-height: 1.3;
}
.forum-post-title:hover { color: var(--accent); }
.forum-post-text {
  color: var(--text-secondary); margin-bottom: 14px;
  white-space: pre-wrap; word-break: break-word; line-height: 1.6;
}

/* Reactions */
.reactions-bar {
  display: flex; gap: 6px; flex-wrap: wrap;
  padding: 10px 0; border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border); margin-bottom: 10px;
}
.reaction-btn {
  display: flex; align-items: center; gap: 4px;
  padding: 4px 10px; border-radius: 20px;
  background: var(--bg-input); border: 1px solid var(--border);
  color: var(--text-muted); font-size: 13px;
  transition: var(--transition);
}
.reaction-btn:hover { border-color: var(--accent); transform: scale(1.05); }
.reaction-btn.active { background: rgba(59,130,246,0.15); border-color: var(--accent); color: var(--accent); }
.reaction-emoji { font-size: 16px; }

.forum-post-actions {
  display: flex; justify-content: space-around;
  padding-top: 10px; max-width: 500px;
}
.forum-action {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 16px; border-radius: 20px;
  color: var(--text-muted); font-size: 13px; font-weight: 600;
  transition: var(--transition);
}
.forum-action:hover { background: rgba(59,130,246,0.1); color: var(--accent); }
.forum-action.like:hover { background: rgba(16,185,129,0.1); color: var(--online); }
.forum-action.dislike:hover { background: rgba(239,68,68,0.1); color: var(--danger); }
.forum-action.active-like { color: var(--online); }
.forum-action.active-dislike { color: var(--danger); }
.vote-counter { font-weight: 700; min-width: 20px; text-align: center; }

.forum-comments { padding: 0 18px 18px 18px; border-top: 1px solid var(--border); }
.comment {
  display: flex; gap: 12px; padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.comment:last-child { border-bottom: none; }
.comment-avatar {
  width: 36px; height: 36px; border-radius: 50%; object-fit: cover;
  flex-shrink: 0; border: 1px solid var(--border);
}
.comment-body { flex: 1; min-width: 0; }
.comment-header { font-size: 13px; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.comment-author { font-weight: 700; cursor: pointer; }
.comment-author:hover { color: var(--accent); }
.comment-time { color: var(--text-muted); font-size: 12px; }
.comment-reply-to {
  font-size: 12px; color: var(--accent); cursor: pointer;
  padding: 4px 10px; background: rgba(59,130,246,0.1);
  border-radius: 12px; margin-bottom: 6px;
  display: inline-flex; align-items: center; gap: 6px;
}
.comment-text { font-size: 14px; color: var(--text-secondary); word-break: break-word; }
.comment-actions { display: flex; gap: 14px; margin-top: 6px; }
.comment-actions button {
  color: var(--text-muted); font-size: 12px; font-weight: 600;
  display: flex; align-items: center; gap: 4px; transition: var(--transition);
}
.comment-actions button:hover { color: var(--accent); }
.comment-actions button.liked { color: var(--danger); }
.comment-replies {
  margin-left: 20px; margin-top: 8px;
  padding-left: 16px; border-left: 2px solid var(--border);
}
.reply-indicator {
  background: rgba(59,130,246,0.1); border: 1px solid var(--accent);
  border-radius: var(--radius-sm); padding: 8px 12px;
  margin-bottom: 10px; display: flex; align-items: center;
  justify-content: space-between; font-size: 13px;
}
.reply-indicator-text { color: var(--accent); font-weight: 600; }
.reply-indicator-close { color: var(--text-muted); cursor: pointer; padding: 4px 8px; border-radius: 50%; }
.reply-indicator-close:hover { background: var(--bg-hover); color: var(--danger); }

/* Channel cards with type */
.channel-type-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;
}
.channel-card {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); overflow: hidden;
  transition: var(--transition); cursor: pointer;
  position: relative;
}
.channel-card:hover { border-color: var(--accent); transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.channel-card[data-type="empire"]::after { content: '👑'; position: absolute; top: 10px; right: 10px; font-size: 20px; }
.channel-card[data-type="organization"]::after { content: '🏛️'; position: absolute; top: 10px; right: 10px; font-size: 20px; }
.channel-card[data-type="news"]::after { content: '📰'; position: absolute; top: 10px; right: 10px; font-size: 20px; }
.channel-card[data-type="alliance"]::after { content: '🤝'; position: absolute; top: 10px; right: 10px; font-size: 20px; }
.channel-cover { height: 90px; background: var(--grad-main); background-size: cover; background-position: center; }
.channel-card[data-type="empire"] .channel-cover { background: var(--grad-empire); }
.channel-card[data-type="organization"] .channel-cover { background: var(--grad-org); }
.channel-card[data-type="news"] .channel-cover { background: var(--grad-news); }
.channel-card[data-type="alliance"] .channel-cover { background: var(--grad-alliance); }
.channel-body { padding: 16px; text-align: center; position: relative; }
.channel-avatar {
  width: 70px; height: 70px; border-radius: 50%; object-fit: cover;
  border: 4px solid var(--bg-card); margin: -50px auto 12px;
  background: var(--bg-input);
}
.channel-name { font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 6px; }
.channel-verified { color: var(--verified); font-size: 16px; }
.channel-desc { font-size: 13px; color: var(--text-muted); margin: 8px 0; }
.channel-type-badge {
  display: inline-block; padding: 3px 10px; border-radius: 12px;
  font-size: 11px; font-weight: 800; text-transform: uppercase;
  margin-bottom: 8px;
}
.channel-type-badge.empire { background: var(--grad-empire); color: #000; }
.channel-type-badge.organization { background: var(--grad-org); color: #fff; }
.channel-type-badge.news { background: var(--grad-news); color: #fff; }
.channel-type-badge.alliance { background: var(--grad-alliance); color: #fff; }
.channel-subs { font-size: 13px; color: var(--text-muted); }

/* Alliance section */
.alliance-code-box {
  background: var(--bg-input); border: 2px dashed var(--accent);
  border-radius: var(--radius); padding: 20px;
  text-align: center; margin: 16px 0;
}
.alliance-code {
  font-family: 'Courier New', monospace;
  font-size: 28px; font-weight: 900; letter-spacing: 4px;
  color: var(--accent); margin: 10px 0;
  padding: 10px; background: var(--bg-primary);
  border-radius: var(--radius-sm); display: inline-block;
}
.alliance-members {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px; margin-top: 16px;
}
.alliance-member {
  display: flex; align-items: center; gap: 10px;
  padding: 12px; background: var(--bg-input);
  border-radius: var(--radius-sm); cursor: pointer;
  transition: var(--transition);
}
.alliance-member:hover { background: var(--bg-hover); transform: translateX(4px); }
.alliance-member img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.alliance-member-info { flex: 1; }
.alliance-member-name { font-weight: 700; font-size: 14px; }
.alliance-member-meta { font-size: 11px; color: var(--text-muted); }

/* Accordion for channels section */
.accordion {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); margin-bottom: 16px;
  overflow: hidden;
}
.accordion-header {
  padding: 18px 24px; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between;
  font-weight: 800; font-size: 18px; transition: var(--transition);
}
.accordion-header:hover { background: var(--bg-hover); }
.accordion-header-left { display: flex; align-items: center; gap: 12px; }
.accordion-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; color: #fff;
}
.accordion-count {
  padding: 3px 10px; border-radius: 20px;
  background: var(--bg-input); color: var(--text-muted);
  font-size: 12px; font-weight: 700;
}
.accordion-arrow { transition: transform 0.3s ease; }
.accordion.open .accordion-arrow { transform: rotate(180deg); }
.accordion-content {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease;
}
.accordion.open .accordion-content { max-height: 5000px; }
.accordion-body { padding: 0 24px 24px; }

/* Profile */
.profile-header {
  background: var(--bg-card); border-radius: var(--radius);
  overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border);
}
.profile-cover { height: 200px; background: var(--grad-main); background-size: cover; background-position: center; }
.profile-info {
  display: flex; gap: 20px; padding: 0 24px 24px;
  margin-top: -50px; position: relative; flex-wrap: wrap;
}
.profile-avatar-wrap { position: relative; }
.profile-avatar {
  width: 120px; height: 120px; border-radius: 50%; object-fit: cover;
  border: 4px solid var(--bg-card); background: var(--bg-input);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.online-dot {
  position: absolute; bottom: 8px; right: 8px;
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--online); border: 3px solid var(--bg-card);
  box-shadow: 0 0 10px var(--online);
}
.offline-dot {
  position: absolute; bottom: 8px; right: 8px;
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--text-muted); border: 3px solid var(--bg-card);
}
.profile-details { flex: 1; padding-top: 60px; min-width: 200px; }
.profile-name {
  font-size: 26px; font-weight: 900;
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.verified-badge { color: var(--verified); }
.role-badge {
  padding: 3px 10px; border-radius: 20px; font-size: 11px;
  font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;
}
.role-badge.admin { background: rgba(239,68,68,0.2); color: var(--danger); border: 1px solid var(--danger); }
.role-badge.moder { background: rgba(245,158,11,0.2); color: var(--warning); border: 1px solid var(--warning); }
.role-badge.user { background: rgba(59,130,246,0.2); color: var(--accent); border: 1px solid var(--accent); }
.profile-status {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 12px; border-radius: 20px; font-size: 13px;
  background: var(--bg-input); color: var(--text-muted); margin-top: 8px;
}
.profile-status.online { color: var(--online); background: rgba(16,185,129,0.1); }
.profile-stats { display: flex; gap: 24px; margin-top: 14px; flex-wrap: wrap; }
.profile-stat { text-align: center; }
.profile-stat-num { font-size: 20px; font-weight: 800; color: var(--accent); }
.profile-stat-label { font-size: 12px; color: var(--text-muted); }
.profile-actions { margin-left: auto; padding-top: 60px; display: flex; gap: 8px; flex-wrap: wrap; }

/* Alliance info in profile */
.alliance-info-box {
  margin-top: 14px; padding: 12px 16px;
  background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1));
  border: 1px solid var(--online); border-radius: var(--radius-sm);
  display: flex; align-items: center; gap: 12px; cursor: pointer;
  transition: var(--transition);
}
.alliance-info-box:hover { background: rgba(16,185,129,0.15); transform: translateX(4px); }
.alliance-info-box img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.alliance-info-label { font-size: 11px; color: var(--text-muted); text-transform: uppercase; }
.alliance-info-name { font-weight: 700; color: var(--online); }

.admin-tabs {
  display: flex; gap: 6px; background: var(--bg-card);
  padding: 6px; border-radius: var(--radius); border: 1px solid var(--border);
  margin-bottom: 24px; flex-wrap: wrap;
}
.admin-tab {
  padding: 10px 18px; border-radius: var(--radius-sm);
  color: var(--text-secondary); font-weight: 700;
  transition: var(--transition); font-size: 14px;
}
.admin-tab:hover { background: var(--bg-hover); color: var(--text-primary); }
.admin-tab.active { background: var(--grad-main); color: #fff; }
.admin-table { width: 100%; border-collapse: collapse; background: var(--bg-card); border-radius: var(--radius); overflow: hidden; }
.admin-table th {
  padding: 14px 16px; text-align: left; font-size: 12px;
  text-transform: uppercase; letter-spacing: 1px;
  color: var(--text-muted); background: var(--bg-input);
  border-bottom: 2px solid var(--border);
}
.admin-table td { padding: 14px 16px; border-bottom: 1px solid var(--border); font-size: 14px; }
.admin-table tr:hover td { background: var(--bg-hover); }
.status-pill { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; }
.status-pill.online { background: rgba(16,185,129,0.2); color: var(--online); }
.status-pill.offline { background: rgba(100,116,139,0.2); color: var(--text-muted); }
.status-pill.banned { background: rgba(239,68,68,0.2); color: var(--danger); }
.status-pill.muted { background: rgba(245,158,11,0.2); color: var(--warning); }
.status-pill.pending { background: rgba(245,158,11,0.2); color: var(--warning); }

.poll-option {
  position: relative; padding: 14px 18px; margin-bottom: 10px;
  border-radius: var(--radius-sm); border: 2px solid var(--border);
  cursor: pointer; transition: var(--transition); overflow: hidden;
}
.poll-option:hover:not(.voted) { border-color: var(--accent); background: rgba(59,130,246,0.05); }
.poll-option.voted { border-color: var(--accent); cursor: default; }
.poll-bar {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(59,130,246,0.2), transparent);
  transition: width 0.6s ease;
}
.poll-content { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; }
.poll-votes { font-weight: 800; color: var(--accent); }

.toast-container { position: fixed; bottom: 24px; right: 24px; z-index: 500; display: flex; flex-direction: column; gap: 10px; }
.toast {
  padding: 14px 22px; border-radius: var(--radius-sm);
  color: #fff; font-size: 14px; font-weight: 600;
  display: flex; align-items: center; gap: 10px;
  animation: toastIn 0.3s ease; min-width: 280px; box-shadow: var(--shadow-lg);
}
.toast.success { background: var(--online); }
.toast.error { background: var(--danger); }
.toast.warning { background: var(--warning); color: #000; }
.toast.info { background: var(--accent); }
@keyframes toastIn { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }

.footer { background: var(--bg-secondary); border-top: 1px solid var(--border); padding: 48px 24px 24px; margin-top: 60px; }
.footer-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; }
.footer h4 {
  margin-bottom: 14px; font-size: 16px; font-weight: 800;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.footer p, .footer a { color: var(--text-muted); font-size: 14px; line-height: 1.8; }
.footer a:hover { color: var(--accent); cursor: pointer; }
.footer-bottom { max-width: 1200px; margin: 32px auto 0; padding-top: 24px; border-top: 1px solid var(--border); text-align: center; color: var(--text-muted); font-size: 13px; }

.faq-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 10px; overflow: hidden; }
.faq-q { padding: 18px 22px; cursor: pointer; font-weight: 700; display: flex; justify-content: space-between; align-items: center; }
.faq-q:hover { background: var(--bg-hover); }
.faq-q i { transition: transform 0.3s ease; }
.faq-a { padding: 0 22px; max-height: 0; overflow: hidden; transition: all 0.3s ease; color: var(--text-secondary); }
.faq-item.open .faq-a { max-height: 500px; padding: 0 22px 20px; }
.faq-item.open .faq-q i { transform: rotate(180deg); }

.section-title {
  font-size: 32px; font-weight: 900; margin-bottom: 24px;
  background: var(--grad-main);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* Activity feed */
.activity-feed { margin-top: 20px; }
.activity-item {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; background: var(--bg-card);
  border-radius: var(--radius-sm); margin-bottom: 8px;
  border: 1px solid var(--border); transition: var(--transition);
}
.activity-item:hover { border-color: var(--accent); transform: translateX(4px); }
.activity-icon {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: #fff; flex-shrink: 0;
}
.activity-icon.join { background: var(--grad-alliance); }
.activity-icon.post { background: var(--grad-main); }
.activity-icon.news { background: var(--grad-news); }
.activity-icon.empire { background: var(--grad-empire); }
.activity-text { flex: 1; font-size: 14px; }
.activity-text strong { color: var(--accent); }
.activity-time { font-size: 12px; color: var(--text-muted); }

/* Mobile nav */
.mobile-nav {
  position: fixed; inset: 0; z-index: 150;
  background: rgba(0,0,0,0.6); backdrop-filter: blur(6px);
  visibility: hidden; opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.mobile-nav.active { visibility: visible; opacity: 1; }
.mobile-nav-content {
  width: 280px; height: 100%; background: var(--bg-secondary);
  padding: 80px 24px 24px; overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-nav.active .mobile-nav-content { transform: translateX(0); }
.mobile-nav-close {
  position: absolute; top: 20px; right: 20px;
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--bg-input); color: var(--text-primary);
  font-size: 18px; transition: var(--transition); z-index: 10;
}
.mobile-nav-close:hover { background: var(--danger); color: #fff; transform: rotate(90deg); }
.mobile-nav-item {
  padding: 14px 16px; border-radius: var(--radius-sm);
  font-weight: 700; cursor: pointer; font-size: 15px;
  display: flex; align-items: center; gap: 12px;
  transition: var(--transition); margin-bottom: 4px;
}
.mobile-nav-item:hover { background: var(--bg-hover); color: var(--accent); transform: translateX(4px); }
.mobile-nav-item i { width: 20px; text-align: center; color: var(--accent); }

/* Scroll to top button */
.scroll-top {
  position: fixed; bottom: 30px; right: 30px; z-index: 50;
  width: 50px; height: 50px; border-radius: 50%;
  background: var(--grad-main); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; cursor: pointer;
  box-shadow: 0 4px 20px rgba(59,130,246,0.4);
  opacity: 0; pointer-events: none; transition: var(--transition);
}
.scroll-top.visible { opacity: 1; pointer-events: all; }
.scroll-top:hover { transform: translateY(-4px); }

.avatar-sm { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.avatar-md { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.text-center { text-align: center; }
.text-muted { color: var(--text-muted); }
.mt-16 { margin-top: 16px; }
.mt-24 { margin-top: 24px; }
.mb-16 { margin-bottom: 16px; }
.mb-24 { margin-bottom: 24px; }
.hidden { display: none !important; }
.flex-between { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.empty-state { text-align: center; padding: 50px 20px; color: var(--text-muted); }
.empty-state i { font-size: 50px; margin-bottom: 14px; opacity: 0.4; display: block; }
.img-preview { max-width: 100%; max-height: 180px; border-radius: var(--radius-sm); margin-top: 12px; }

.badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; }
.badge-item {
  text-align: center; padding: 18px 12px;
  background: var(--bg-input); border-radius: var(--radius);
  border: 1px solid var(--border); transition: var(--transition);
}
.badge-item:hover { border-color: var(--accent); transform: translateY(-3px); }
.badge-item.locked { opacity: 0.35; filter: grayscale(1); }
.badge-icon { font-size: 36px; margin-bottom: 8px; }
.badge-name { font-size: 12px; font-weight: 700; }

.login-required {
  background: var(--bg-card); border-radius: var(--radius);
  border: 1px solid var(--border); padding: 60px 40px;
  text-align: center; max-width: 500px; margin: 60px auto;
}
.login-required i { font-size: 64px; margin-bottom: 20px; color: var(--accent); }
.login-required h2 { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
.login-required p { color: var(--text-muted); margin-bottom: 24px; }

@media (max-width: 900px) {
  .nav-links { display: none; }
  .hamburger { display: block; }
  .hero h1 { font-size: 36px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .type-selector { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .news-grid, .channel-type-grid, .stats-grid, .alliance-members { grid-template-columns: 1fr; }
  .profile-info { flex-direction: column; align-items: center; text-align: center; }
  .profile-details { padding-top: 16px; }
  .profile-actions { margin-left: 0; padding-top: 12px; justify-content: center; }
  .profile-stats { justify-content: center; }
  .header { padding: 0 16px; }
  .container { padding: 16px; }
  .section-title { font-size: 24px; }
  .user-menu span { display: none; }
  .hero h1 { font-size: 28px; }
  .hero-logo img { height: 70px; }
  .stat-num { font-size: 28px; }
}

.loading-overlay {
  position: fixed; inset: 0; background: rgba(10,15,26,0.9);
  z-index: 1000; display: flex; align-items: center; justify-content: center;
  color: #fff; flex-direction: column; gap: 16px;
}
.spinner {
  width: 50px; height: 50px; border: 4px solid rgba(255,255,255,0.2);
  border-top-color: var(--accent); border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.main-wrapper > .container { animation: pageIn 0.4s ease; }
@keyframes pageIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
</head>
<body>

<div class="animated-bg"></div>

<div id="authScreen" class="auth-container">
  <div class="auth-box">
    <h1>ООИ</h1>
    <p class="subtitle">Организация Объединённых Империй</p>
    <div id="loginForm">
      <div class="form-group">
        <label>Логин</label>
        <input type="text" class="form-input" id="loginUser" placeholder="Введите логин" autocomplete="username">
      </div>
      <div class="form-group">
        <label>Пароль</label>
        <input type="password" class="form-input" id="loginPass" placeholder="Введите пароль" onkeydown="if(event.key==='Enter')App.login()">
      </div>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="App.login()">
        <i class="fas fa-sign-in-alt"></i> Войти
      </button>
      <p class="auth-toggle">Нет аккаунта? <a onclick="App.showReg()">Регистрация</a></p>
    </div>
    <div id="regForm" class="hidden">
      <div class="form-group">
        <label>Логин</label>
        <input type="text" class="form-input" id="regUser" placeholder="Придумайте логин">
      </div>
      <div class="form-group">
        <label>Телефон</label>
        <input type="tel" class="form-input" id="regPhone" placeholder="+7...">
      </div>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="App.register()">
        <i class="fas fa-crown"></i> Присоединиться
      </button>
      <p class="auth-toggle">Есть аккаунт? <a onclick="App.showLog()">Войти</a></p>
    </div>
  </div>
</div>

<div id="appScreen" class="hidden">
  <header class="header">
    <button class="hamburger" onclick="App.toggleMobile()"><i class="fas fa-bars"></i></button>
    <div class="logo" onclick="App.go('home')">ООИ</div>
    <nav class="nav-links" id="navLinks"></nav>
    <div class="header-right">
      <button class="icon-btn" onclick="App.toggleSearch()" title="Поиск"><i class="fas fa-search"></i></button>
      <button class="icon-btn" onclick="App.toggleTheme()" title="Тема"><i id="themeIcon" class="fas fa-moon"></i></button>
      <div id="headerAuth"></div>
    </div>
  </header>

  <div class="search-overlay" id="searchOverlay" onclick="App.onSearchOverlay(event)">
    <div class="search-box">
      <input type="text" class="search-input" id="searchInput" placeholder="Поиск пользователей, каналов, новостей..." oninput="App.doSearch(this.value)">
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>

  <div class="mobile-nav" id="mobileNav" onclick="App.onMobileOverlay(event)">
    <div class="mobile-nav-content" id="mobileNavContent"></div>
  </div>

  <main class="main-wrapper" id="main"></main>

  <footer class="footer">
    <div class="footer-grid">
      <div>
        <h4>О портале</h4>
        <p>ООИ — Организация Объединённых Империй. Сообщество цифровых государств и организаций.</p>
      </div>
      <div>
        <h4>Навигация</h4>
        <p><a onclick="App.go('home')">Главная</a></p>
        <p><a onclick="App.go('news')">Новости</a></p>
        <p><a onclick="App.go('forum')">Форум</a></p>
        <p><a onclick="App.go('channels')">Каналы</a></p>
      </div>
      <div>
        <h4>Типы каналов</h4>
        <p>👑 Империи</p>
        <p>🏛️ Организации</p>
        <p>📰 Новостники</p>
        <p>🤝 Союзы</p>
      </div>
      <div>
        <h4>Контакты</h4>
        <p>© 2024 ООО</p>
        <p>Все права защищены</p>
      </div>
    </div>
    <div class="footer-bottom">© 2024 ООО — Организация Объединённых Империй</div>
  </footer>
</div>

<button class="scroll-top" id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="Наверх">
  <i class="fas fa-arrow-up"></i>
</button>

<div class="modal-overlay" id="modal"><div class="modal" id="modalBody"></div></div>
<div class="toast-container" id="toasts"></div>
<input type="file" id="fileInput" accept="image/*" style="display:none">
<input type="file" id="fileInput2" accept="image/*" style="display:none">

<div id="loadingOverlay" class="loading-overlay hidden">
  <div class="spinner"></div>
  <div>Загрузка...</div>
</div>

<script>
const CFG = {
  API_URL: 'https://ooe-nu.vercel.app/api',
  DEF_AVATAR: 'https://api.dicebear.com/7.x/initials/svg?seed=',
  MAX_SAME_MESSAGES: 5,
  MUTE_DURATION: 3600
};

const esc = s => {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
};
const genId = () => Date.now().toString(36) + Math.random().toString(36).substr(2,9);
const genPass = () => Math.random().toString(36).substr(2,6) + Math.random().toString(36).substr(2,4);
const genAllianceCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};
const timeAgo = ts => {
  const d = Date.now()/1000 - ts;
  if (d < 60) return 'только что';
  if (d < 3600) return Math.floor(d/60) + ' мин назад';
  if (d < 86400) return Math.floor(d/3600) + ' ч назад';
  if (d < 604800) return Math.floor(d/86400) + ' дн назад';
  return new Date(ts*1000).toLocaleDateString('ru-RU');
};

const CHANNEL_TYPES = {
  empire: { name: 'Империя', icon: '👑', plural: 'Империи', desc: 'Цифровое государство' },
  organization: { name: 'Организация', icon: '🏛️', plural: 'Организации', desc: 'Объединение по интересам' },
  news: { name: 'Новостник', icon: '📰', plural: 'Новостники', desc: 'Источник новостей' },
  alliance: { name: 'Союз', icon: '🤝', plural: 'Союзы', desc: 'Объединение империй' }
};

const REACTIONS = [
  { key: 'like', emoji: '👍', name: 'Нравится' },
  { key: 'love', emoji: '❤️', name: 'Любовь' },
  { key: 'laugh', emoji: '😂', name: 'Смешно' },
  { key: 'wow', emoji: '😮', name: 'Удивительно' },
  { key: 'sad', emoji: '😢', name: 'Грустно' },
  { key: 'angry', emoji: '😡', name: 'Злюсь' }
];

const API = {
  async load() {
    if (!CFG.API_URL) return null;
    try {
      const r = await fetch(`${CFG.API_URL}/data`);
      if (r.ok) return await r.json();
      return null;
    } catch (e) { return null; }
  },
  async save(data) {
    if (!CFG.API_URL) return false;
    try {
      const r = await fetch(`${CFG.API_URL}/data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return r.ok;
    } catch (e) { return false; }
  },
  async uploadImage(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result;
        if (CFG.API_URL) {
          try {
            const r = await fetch(`${CFG.API_URL}/upload`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ base64, fileName: file.name })
            });
            if (r.ok) {
              const result = await r.json();
              if (result.url) return resolve(result.url);
            }
          } catch (e) {}
        }
        resolve(base64);
      };
      reader.readAsDataURL(file);
    });
  }
};

const App = {
  data: null,
  user: null,
  page: 'home',
  heroSlide: 0,
  heroInterval: null,
  pendingFile: null,
  pendingFile2: null,
  recentMessages: [],
  isSaving: false,
  replyTo: null,
  selectedChannelType: 'empire',

  async load() {
    const fresh = await API.load();
    if (fresh) {
      this.data = fresh;
      try { localStorage.setItem('ooi_data', JSON.stringify(this.data)); } catch(e) {}
    } else {
      const cached = localStorage.getItem('ooi_data');
      if (cached) {
        try { this.data = JSON.parse(cached); } catch(e) {}
      }
    }
    if (!this.data) this.data = this.defaultData();
  },

  async save() {
    if (this.isSaving) return false;
    this.isSaving = true;
    try {
      try { localStorage.setItem('ooi_data', JSON.stringify(this.data)); } catch(e) {}
      const ok = await API.save(this.data);
      if (!ok) {
        this.toast('Ошибка сохранения', 'error');
        return false;
      }
      await this.load();
      if (this.user) {
        const u = this.data.users.find(x => x.id === this.user.id);
        if (u) this.user = u;
      }
      return true;
    } finally {
      this.isSaving = false;
    }
  },

  defaultData() {
    return {
      users: [], channels: [], news: [], polls: [], forumPosts: [], activities: [],
      badges: [
        {id:'badge1',name:'Первопроходец',icon:'🌟',desc:'Зарегистрировался на портале'},
        {id:'badge2',name:'Форумчанин',icon:'💬',desc:'Создал тему на форуме'},
        {id:'badge3',name:'Голосующий',icon:'🗳️',desc:'Участвовал в голосовании'},
        {id:'badge4',name:'Автор',icon:'✍️',desc:'Предложил новость'},
        {id:'badge5',name:'Основатель',icon:'👑',desc:'Создал канал'},
        {id:'badge6',name:'Верифицирован',icon:'✅',desc:'Канал верифицирован'},
        {id:'badge7',name:'Активист',icon:'🔥',desc:'10+ постов на форуме'},
        {id:'badge8',name:'Популярный',icon:'⭐',desc:'50+ лайков'},
        {id:'badge9',name:'Дипломат',icon:'🤝',desc:'Вступил в союз'},
        {id:'badge10',name:'Союзник',icon:'⚔️',desc:'Основал союз'}
      ],
      settings: {
        mainPageMode: 'info', logoUrl: '',
        communityLink: 'https://t.me/your_community',
        heroImages: [
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600'
        ],
        heroTitle: 'Организация Объединённых Империй',
        heroSubtitle: 'Сообщество цифровых государств и союзов',
        aboutText: 'ООИ — современная платформа объединения цифровых империй, организаций и союзов.',
        rules: '1. Уважайте других\n2. Без спама\n3. Без нарушений'
      }
    };
  },

  addActivity(type, text) {
    if (!this.data.activities) this.data.activities = [];
    this.data.activities.unshift({
      id: genId(), type, text,
      userId: this.user?.id,
      timestamp: Date.now()/1000
    });
    this.data.activities = this.data.activities.slice(0, 50);
  },

  async login() {
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value;
    if (!u || !p) return this.toast('Заполните все поля', 'error');
    this.showLoading();
    await this.load();
    this.hideLoading();
    const user = this.data.users.find(x => x.username.toLowerCase() === u.toLowerCase() && x.password === p);
    if (!user) return this.toast('Неверный логин или пароль', 'error');
    if (user.isBanned) return this.toast('Аккаунт заблокирован', 'error');
    user.status = 'online';
    user.lastSeen = Date.now()/1000;
    this.user = user;
    localStorage.setItem('ooi_uid', user.id);
    await this.save();
    this.toast('Добро пожаловать!', 'success');
    this.showApp();
  },

  async register() {
    const u = document.getElementById('regUser').value.trim();
    const ph = document.getElementById('regPhone').value.trim();
    if (!u) return this.toast('Введите логин', 'error');
    if (u.length < 3) return this.toast('Минимум 3 символа', 'error');
    if (ph.length < 5) return this.toast('Введите телефон', 'error');
    this.showLoading();
    await this.load();
    this.hideLoading();
    if (this.data.users.find(x => x.username.toLowerCase() === u.toLowerCase())) {
      return this.toast('Логин занят', 'error');
    }
    const pass = genPass();
    const user = {
      id: genId(), username: u, password: pass, phone: ph,
      avatar: CFG.DEF_AVATAR + encodeURIComponent(u),
      cover: '', status: 'online', statusText: 'Новичок',
      role: 'user', isBanned: 0, mutedUntil: 0,
      badges: ['badge1'], channelId: null,
      subscribers: [], subscriptions: [],
      likedPosts: [], likedNews: [],
      joinedAt: Date.now()/1000, lastSeen: Date.now()/1000
    };
    this.data.users.push(user);
    this.user = user;
    localStorage.setItem('ooi_uid', user.id);
    const saved = await this.save();
    if (!saved) { this.data.users.pop(); return this.toast('Ошибка', 'error'); }
    alert(`✅ Добро пожаловать в ООО!\n\n🔑 Ваш пароль: ${pass}\n\n⚠️ Сохраните его!`);
    this.toast('Добро пожаловать!', 'success');
    this.showApp();
  },

  logout() {
    if (this.user) {
      this.user.status = 'offline';
      this.user.lastSeen = Date.now()/1000;
      this.save();
    }
    this.user = null;
    localStorage.removeItem('ooi_uid');
    this.updateHeader();
    this.updateNav();
    this.go('home');
  },

  showLog() { document.getElementById('loginForm').classList.remove('hidden'); document.getElementById('regForm').classList.add('hidden'); },
  showReg() { document.getElementById('loginForm').classList.add('hidden'); document.getElementById('regForm').classList.remove('hidden'); },

  async init() {
    if (!CFG.API_URL) {
      document.body.innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a0f1a;color:#fff;text-align:center;padding:20px;"><div><h1>API_URL не настроен</h1></div></div>`;
      return;
    }
    await this.load();
    const uid = localStorage.getItem('ooi_uid');
    if (uid && this.data) {
      const u = this.data.users.find(x => x.id === uid);
      if (u && !u.isBanned) {
        this.user = u;
        u.status = 'online';
        u.lastSeen = Date.now()/1000;
        this.save();
      }
    }
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');
    this.updateHeader();
    this.updateNav();
    this.go('home');
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('scrollTop');
      if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    });
  },

  showApp() {
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');
    this.updateHeader();
    this.updateNav();
    this.go('home');
  },

  updateHeader() {
    const authDiv = document.getElementById('headerAuth');
    if (!authDiv) return;
    if (this.user) {
      authDiv.innerHTML = `
        <button class="user-menu" onclick="App.go('profile')">
          <img src="${esc(this.user.avatar || CFG.DEF_AVATAR + encodeURIComponent(this.user.username))}" alt="" onerror="this.src='${CFG.DEF_AVATAR}u'">
          <span>${esc(this.user.username)}</span>
        </button>
      `;
    } else {
      authDiv.innerHTML = `<button class="login-btn" onclick="App.showAuthPrompt()"><i class="fas fa-sign-in-alt"></i> Войти</button>`;
    }
  },

  updateNav() {
    const nav = document.getElementById('navLinks');
    const mobileNav = document.getElementById('mobileNavContent');
    if (!nav) return;
    const isAuth = !!this.user;
    const role = this.user?.role || 'user';
    
    nav.innerHTML = `
      <span class="nav-link" data-page="home" onclick="App.go('home')">Главная</span>
      <span class="nav-link" data-page="news" onclick="App.go('news')">Новости</span>
      <span class="nav-link" data-page="forum" onclick="App.go('forum')">Форум</span>
      <span class="nav-link" data-page="channels" onclick="App.go('channels')">Каналы</span>
    `;
    
    let mobileHtml = `<button class="mobile-nav-close" onclick="App.toggleMobile()"><i class="fas fa-times"></i></button>`;
    mobileHtml += `<div class="mobile-nav-item" onclick="App.go('home');App.toggleMobile()"><i class="fas fa-home"></i> Главная</div>`;
    if (isAuth) {
      mobileHtml += `<div class="mobile-nav-item" onclick="App.go('news');App.toggleMobile()"><i class="fas fa-newspaper"></i> Новости</div>`;
      mobileHtml += `<div class="mobile-nav-item" onclick="App.go('forum');App.toggleMobile()"><i class="fas fa-comments"></i> Форум</div>`;
      mobileHtml += `<div class="mobile-nav-item" onclick="App.go('channels');App.toggleMobile()"><i class="fas fa-layer-group"></i> Каналы</div>`;
      mobileHtml += `<div class="mobile-nav-item" onclick="App.go('badges');App.toggleMobile()"><i class="fas fa-medal"></i> Достижения</div>`;
      mobileHtml += `<div class="mobile-nav-item" onclick="App.go('profile');App.toggleMobile()"><i class="fas fa-user"></i> Профиль</div>`;
      if (role === 'admin' || role === 'moder') {
        mobileHtml += `<div class="mobile-nav-item" onclick="App.go('admin');App.toggleMobile()"><i class="fas fa-shield-alt"></i> Админ</div>`;
      }
      mobileHtml += `<div class="mobile-nav-item" onclick="App.logout();App.toggleMobile()"><i class="fas fa-sign-out-alt"></i> Выйти</div>`;
    } else {
      mobileHtml += `<div class="mobile-nav-item" onclick="App.showAuthPrompt();App.toggleMobile()"><i class="fas fa-sign-in-alt"></i> Войти</div>`;
    }
    if (mobileNav) mobileNav.innerHTML = mobileHtml;
  },

  showAuthPrompt() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('regForm').classList.add('hidden');
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('authScreen').classList.remove('hidden');
  },

  showLoading() { document.getElementById('loadingOverlay').classList.remove('hidden'); },
  hideLoading() { document.getElementById('loadingOverlay').classList.add('hidden'); },

  requireAuth() {
    if (!this.user) {
      this.toast('Войдите или зарегистрируйтесь', 'warning');
      this.showAuthPrompt();
      return false;
    }
    return true;
  },

  toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
      setTimeout(() => document.getElementById('searchInput').focus(), 100);
    } else {
      document.getElementById('searchInput').value = '';
      document.getElementById('searchResults').innerHTML = '';
    }
  },
  onSearchOverlay(e) { if (e.target.id === 'searchOverlay') this.toggleSearch(); },

  doSearch(query) {
    const results = document.getElementById('searchResults');
    if (!query || query.length < 2) { results.innerHTML = ''; return; }
    const q = query.toLowerCase();
    let html = '';
    
    const users = this.data.users.filter(u => u.username.toLowerCase().includes(q)).slice(0, 3);
    if (users.length) {
      html += `<div class="text-muted" style="padding:8px 12px;font-size:12px;text-transform:uppercase;">Пользователи</div>`;
      html += users.map(u => `
        <div class="search-result" onclick="App.goSearchResult('profile','${u.id}')">
          <img src="${esc(u.avatar || CFG.DEF_AVATAR + encodeURIComponent(u.username))}" onerror="this.src='${CFG.DEF_AVATAR}u'">
          <div class="search-result-info">
            <div class="search-result-name">${esc(u.username)}</div>
            <div class="search-result-meta">@${esc(u.username)}</div>
          </div>
        </div>
      `).join('');
    }
    
    const channels = this.data.channels.filter(c => c.name.toLowerCase().includes(q)).slice(0, 3);
    if (channels.length) {
      html += `<div class="text-muted" style="padding:8px 12px;font-size:12px;text-transform:uppercase;">Каналы</div>`;
      html += channels.map(c => {
        const t = CHANNEL_TYPES[c.type || 'empire'];
        return `
          <div class="search-result" onclick="App.goSearchResult('channel','${c.id}')">
            <img src="${esc(c.avatar || CFG.DEF_AVATAR + encodeURIComponent(c.name))}" onerror="this.src='${CFG.DEF_AVATAR}c'">
            <div class="search-result-info">
              <div class="search-result-name">${t.icon} ${esc(c.name)} ${c.verified?'<i class="fas fa-check-circle verified-badge-inline"></i>':''}</div>
              <div class="search-result-meta">${t.name} · ${(c.subscribers||[]).length} подписчиков</div>
            </div>
          </div>
        `;
      }).join('');
    }
    
    if (this.user) {
      const news = this.data.news.filter(n => n.status === 'approved' && n.title.toLowerCase().includes(q)).slice(0, 3);
      if (news.length) {
        html += `<div class="text-muted" style="padding:8px 12px;font-size:12px;text-transform:uppercase;">Новости</div>`;
        html += news.map(n => `
          <div class="search-result" onclick="App.goSearchResult('news','')">
            <img src="${esc(n.image || CFG.DEF_AVATAR + 'news')}" style="border-radius:8px;">
            <div class="search-result-info">
              <div class="search-result-name">${esc(n.title)}</div>
              <div class="search-result-meta">📰 ${timeAgo(n.timestamp)}</div>
            </div>
          </div>
        `).join('');
      }
    }
    
    if (!html) html = `<div class="text-muted text-center" style="padding:30px;">Ничего не найдено</div>`;
    results.innerHTML = html;
  },

  goSearchResult(type, id) {
    this.toggleSearch();
    if (type === 'news') this.go('news');
    else this.go(type + '/' + id);
  },

  go(page, param) {
    if (this.heroInterval) { clearInterval(this.heroInterval); this.heroInterval = null; }
    const authRequired = ['news', 'forum', 'forumpost', 'channels', 'channel', 'profile', 'badges', 'admin'];
    if (authRequired.includes(page) && !this.user) {
      this.toast('Войдите или зарегистрируйтесь', 'warning');
      this.showAuthPrompt();
      return;
    }
    this.page = page;
    this.replyTo = null;
    document.querySelectorAll('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    if (page.includes('/')) { [page, param] = page.split('/'); }
    const m = document.getElementById('main');
    switch (page) {
      case 'home': this.renderHome(m); break;
      case 'news': this.renderNews(m); break;
      case 'forum': this.renderForum(m); break;
      case 'forumpost': this.renderForumPost(m, param); break;
      case 'channels': this.renderChannels(m); break;
      case 'channel': this.renderChannel(m, param); break;
      case 'profile': this.renderProfile(m, param); break;
      case 'badges': this.renderBadges(m); break;
      case 'admin': this.renderAdmin(m); break;
      default: this.renderHome(m);
    }
    window.scrollTo(0, 0);
  },

  renderHome(c) {
    const s = this.data.settings;
    const imgs = s.heroImages || [];
    const mode = s.mainPageMode || 'info';
    const logo = s.logoUrl;
    const isAuth = !!this.user;
    
    const latestNews = this.data.news.filter(n => n.status === 'approved').sort((a,b) => b.timestamp - a.timestamp).slice(0,2);
    
    let featured = '';
    if (mode === 'poll') {
      const poll = this.data.polls.find(p => p.status === 'active');
      if (poll) {
        if (isAuth) featured = this.renderPollCard(poll);
        else featured = this.renderLoginRequired('голосовать', 'Войдите, чтобы участвовать');
      } else featured = '<div class="card"><div class="empty-state"><i class="fas fa-poll"></i><p>Нет голосований</p></div></div>';
    } else if (mode === 'news' && latestNews[0]) {
      const n = latestNews[0];
      featured = `
        <div class="card">
          <div class="card-header"><span class="card-title"><i class="fas fa-fire"></i> Главная новость</span></div>
          ${n.image ? `<img src="${esc(n.image)}" style="width:100%;max-height:320px;object-fit:cover;border-radius:var(--radius);margin-bottom:16px;" onerror="this.style.display='none'">` : ''}
          <h2 style="margin-bottom:10px;">${esc(n.title)}</h2>
          <p class="text-muted mb-16" style="font-size:13px;"><i class="fas fa-clock"></i> ${timeAgo(n.timestamp)}</p>
          <p style="color:var(--text-secondary);line-height:1.8;white-space:pre-wrap;">${esc(n.content)}</p>
        </div>
      `;
    } else {
      featured = `
        <div class="card">
          <div class="card-header"><span class="card-title"><i class="fas fa-info-circle"></i> О портале</span></div>
          <p style="color:var(--text-secondary);line-height:1.8;white-space:pre-wrap;">${esc(s.aboutText || 'Добро пожаловать!')}</p>
        </div>
      `;
    }
    
    // Лента активности удалена

    c.innerHTML = `
      <div class="hero">
        <div class="hero-slides">
          ${imgs.map((img,i) => `<div class="hero-slide ${i===0?'active':''}" style="background-image:url('${esc(img)}')"></div>`).join('')}
        </div>
        <div class="hero-content">
          ${logo ? `<div class="hero-logo"><img src="${esc(logo)}" alt="ООИ" onerror="this.style.display='none'"></div>` : ''}
          <h1>${esc(s.heroTitle || 'ООИ')}</h1>
          <p>${esc(s.heroSubtitle || 'Сообщество империй')}</p>
          <div class="hero-btns">
            <button class="btn btn-primary" style="background:#fff;color:var(--accent);" onclick="App.go('news')">
              <i class="fas fa-newspaper"></i> Новости
            </button>
            <button class="btn btn-outline" style="border-color:#fff;color:#fff;" onclick="App.go('forum')">
              <i class="fas fa-comments"></i> Форум
            </button>
            <button class="btn btn-primary" onclick="App.go('channels')">
              <i class="fas fa-layer-group"></i> Каналы
            </button>
            ${!isAuth ? `<button class="btn btn-primary" onclick="App.showAuthPrompt()"><i class="fas fa-sign-in-alt"></i> Присоединиться</button>` : ''}
          </div>
        </div>
        <div class="hero-dots">
          ${imgs.map((_,i) => `<div class="hero-dot ${i===0?'active':''}" onclick="App.setHeroSlide(${i})"></div>`).join('')}
        </div>
      </div>
      
      <div class="container">
        ${featured}
        
        <section style="padding:40px 0;">
          <h2 class="section-title">📰 Последние новости</h2>
          ${latestNews.length === 0 ? `<div class="empty-state"><i class="fas fa-newspaper"></i><p>Новостей пока нет</p></div>` : `
            <div class="news-grid">${latestNews.map(n => this.newsCard(n)).join('')}</div>
          `}
          ${latestNews.length > 0 ? `
            <div class="text-center mt-24">
              <button class="btn btn-outline" onclick="App.go('news')">Все новости <i class="fas fa-arrow-right"></i></button>
            </div>
          ` : ''}
        </section>
        
        <section class="stats-section">
          <h2 class="section-title text-center" style="display:block;">📊 Статистика портала</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-users"></i></div>
              <div class="stat-num" data-count="${this.data.users.length}">0</div>
              <div class="stat-label">Пользователей</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-layer-group"></i></div>
              <div class="stat-num" data-count="${this.data.channels.length}">0</div>
              <div class="stat-label">Каналов</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-newspaper"></i></div>
              <div class="stat-num" data-count="${this.data.news.filter(n=>n.status==='approved').length}">0</div>
              <div class="stat-label">Новостей</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-handshake"></i></div>
              <div class="stat-num" data-count="${this.data.channels.filter(c=>c.type==='alliance').length}">0</div>
              <div class="stat-label">Союзов</div>
            </div>
          </div>
        </section>
        
        <section style="padding:40px 0;">
          <h2 class="section-title">Частые вопросы</h2>
          <div class="faq-item">
            <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
              Какие типы каналов существуют? <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-a">
              <p>👑 <b>Империи</b> — цифровые государства</p>
              <p>🏛️ <b>Организации</b> — объединения по интересам</p>
              <p>📰 <b>Новостники</b> — источники новостей (могут предлагать новости после верификации)</p>
              <p>🤝 <b>Союзы</b> — объединения империй с секретным кодом для вступления</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
              Как вступить в союз? <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-a">Вам нужна империя. На странице своей империи нажмите "Вступить в союз" и введите секретный код, который вам даст владелец союза.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
              Как получить верификацию? <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-a">Создайте канал и запросите верификацию. Администратор рассмотрит заявку.</div>
          </div>
        </section>
        
        <section style="padding:40px 0;">
          <h2 class="section-title">Правила</h2>
          <div class="card">
            <pre style="white-space:pre-wrap;font-family:inherit;color:var(--text-secondary);line-height:1.8;">${esc(s.rules || '')}</pre>
          </div>
        </section>
      </div>
    `;
    
    if (imgs.length > 1) {
      this.heroInterval = setInterval(() => {
        this.setHeroSlide((this.heroSlide + 1) % imgs.length);
      }, 5000);
    }
    this.animateCounters();
  },

  animateCounters() {
    setTimeout(() => {
      document.querySelectorAll('.stat-num[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = target / 90;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current);
        }, 16);
      });
    }, 200);
  },

  renderLoginRequired(action, message) {
    return `
      <div class="login-required">
        <i class="fas fa-lock"></i>
        <h2>Требуется вход</h2>
        <p>${esc(message || 'Войдите, чтобы ' + action)}</p>
        <button class="btn btn-primary" onclick="App.showAuthPrompt()"><i class="fas fa-sign-in-alt"></i> Войти</button>
      </div>
    `;
  },

  setHeroSlide(idx) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides[this.heroSlide]) slides[this.heroSlide].classList.remove('active');
    if (dots[this.heroSlide]) dots[this.heroSlide].classList.remove('active');
    this.heroSlide = idx;
    if (slides[idx]) slides[idx].classList.add('active');
    if (dots[idx]) dots[idx].classList.add('active');
  },

  renderPollCard(poll) {
    const total = poll.options.reduce((s,o) => s + (o.votes||0), 0);
    const voted = poll.votedUsers?.includes(this.user.id);
    return `
      <div class="card">
        <div class="card-header"><span class="card-title"><i class="fas fa-poll"></i> Голосование</span></div>
        <h3 style="margin-bottom:18px;">${esc(poll.question)}</h3>
        <p class="text-muted mb-16" style="font-size:13px;">Голосов: ${total}</p>
        ${poll.options.map((o,i) => {
          const pct = total > 0 ? Math.round(o.votes/total*100) : 0;
          return `
            <div class="poll-option ${voted?'voted':''}" onclick="${!voted?`App.vote('${poll.id}',${i})`:''}">
              <div class="poll-bar" style="width:${voted?pct:0}%"></div>
              <div class="poll-content">
                <span>${esc(o.text)}</span>
                ${voted ? `<span class="poll-votes">${pct}%</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  async vote(pollId, idx) {
    if (!this.requireAuth()) return;
    const poll = this.data.polls.find(p => p.id === pollId);
    if (!poll || poll.status !== 'active') return;
    if (!poll.votedUsers) poll.votedUsers = [];
    if (poll.votedUsers.includes(this.user.id)) return this.toast('Уже голосовали', 'warning');
    poll.options[idx].votes = (poll.options[idx].votes||0) + 1;
    poll.votedUsers.push(this.user.id);
    if (!(this.user.badges||[]).includes('badge3')) this.user.badges.push('badge3');
    await this.save();
    this.toast('Голос учтён!', 'success');
    this.go(this.page);
  },

  newsCard(n) {
    let authorName = 'Администрация', authorAvatar = CFG.DEF_AVATAR + 'admin', verified = false, channelType = 'empire';
    if (n.authorType === 'channel') {
      const ch = this.data.channels.find(c => c.id === n.authorId);
      if (ch) {
        authorName = ch.name;
        authorAvatar = ch.avatar || CFG.DEF_AVATAR + encodeURIComponent(ch.name);
        verified = ch.verified;
        channelType = ch.type || 'empire';
      }
    } else if (n.authorType === 'admin') {
      const u = this.data.users.find(x => x.id === n.authorId);
      if (u) { authorName = u.username; authorAvatar = u.avatar || CFG.DEF_AVATAR + encodeURIComponent(u.username); }
    }
    const likes = n.likes || [];
    const isLiked = this.user && likes.includes(this.user.id);
    const typeInfo = CHANNEL_TYPES[channelType];
    
    return `
      <article class="news-item">
        ${n.image ? `<img class="news-img" src="${esc(n.image)}" onerror="this.style.display='none'">` : ''}
        <div class="news-body">
          <span class="news-category">📰 Новости</span>
          <h3 class="news-title">${esc(n.title)}</h3>
          <div class="news-meta">
            <span class="news-author" onclick="App.goChannelByNews('${n.id}')">
              <img src="${esc(authorAvatar)}" onerror="this.src='${CFG.DEF_AVATAR}u'">
              ${typeInfo.icon} ${esc(authorName)}
              ${verified ? '<i class="fas fa-check-circle verified-badge-inline"></i>' : ''}
            </span>
            <span><i class="fas fa-clock"></i> ${timeAgo(n.timestamp)}</span>
          </div>
          <p class="news-excerpt">${esc(n.content).substring(0,180)}${n.content.length > 180 ? '...' : ''}</p>
          ${n.evidenceImage ? `
            <div class="news-evidence">
              <strong><i class="fas fa-check-double"></i> Источник:</strong>
              <img src="${esc(n.evidenceImage)}" onclick="window.open(this.src,'_blank')" onerror="this.style.display='none'">
            </div>
          ` : ''}
          <div class="news-actions">
            <button class="action-btn ${isLiked?'liked':''}" onclick="App.likeNews('${n.id}')">
              <i class="fas fa-heart"></i> ${likes.length}
            </button>
            <button class="action-btn" onclick="App.shareNews()"><i class="fas fa-share"></i> Поделиться</button>
          </div>
        </div>
      </article>
    `;
  },

  goChannelByNews(newsId) {
    const n = this.data.news.find(x => x.id === newsId);
    if (!n || n.authorType !== 'channel') return;
    this.go('channel/' + n.authorId);
  },

  async likeNews(newsId) {
    if (!this.requireAuth()) return;
    const n = this.data.news.find(x => x.id === newsId);
    if (!n) return;
    if (!n.likes) n.likes = [];
    const idx = n.likes.indexOf(this.user.id);
    if (idx >= 0) n.likes.splice(idx, 1); else n.likes.push(this.user.id);
    await this.save();
    this.go(this.page);
  },

  shareNews() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      this.toast('Ссылка скопирована!', 'success');
    }
  },

  renderNews(c) {
    const news = this.data.news.filter(n => n.status === 'approved').sort((a,b) => b.timestamp - a.timestamp);
    const userChannel = this.data.channels.find(ch => ch.ownerId === this.user.id && ch.verified && (ch.type === 'news' || ch.type === 'empire'));
    const canSuggest = !!userChannel;
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <div class="flex-between mb-24" style="flex-wrap:wrap;">
          <h1 class="section-title" style="margin:0;">📰 Новости</h1>
          ${canSuggest ? `<button class="btn btn-primary" onclick="App.modal('suggestNews')"><i class="fas fa-plus"></i> Предложить новость</button>` : ''}
        </div>
        ${!canSuggest ? `
          <div class="card mb-24" style="text-align:center; padding:20px;">
            <p class="text-muted"><i class="fas fa-info-circle"></i> Чтобы предлагать новости, создайте верифицированный канал типа "Новостник" или "Империя"</p>
          </div>
        ` : ''}
        ${news.length === 0 ? `<div class="empty-state"><i class="fas fa-newspaper"></i><p>Новостей пока нет</p></div>` : `
          <div class="news-grid">${news.map(n => this.newsCard(n)).join('')}</div>
        `}
      </div>
    `;
  },

  renderForum(c) {
    const posts = this.data.forumPosts.sort((a,b) => b.timestamp - a.timestamp);
    const isMuted = this.user.mutedUntil > Date.now()/1000;
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <div class="flex-between mb-24" style="flex-wrap:wrap;">
          <h1 class="section-title" style="margin:0;">💬 Форум</h1>
          ${!isMuted ? `<button class="btn btn-primary" onclick="App.modal('newPost')"><i class="fas fa-plus"></i> Создать тему</button>` : `<span class="status-pill muted">Замучены</span>`}
        </div>
        <div class="forum-feed">
          ${posts.length === 0 ? `<div class="empty-state"><i class="fas fa-comments"></i><p>Форум пуст</p></div>` : posts.map(p => this.forumPostCard(p)).join('')}
        </div>
      </div>
    `;
  },

  forumPostCard(p) {
    const author = this.data.users.find(u => u.id === p.authorId);
    const likes = p.likes || [];
    const dislikes = p.dislikes || [];
    const userVote = this.user.likedPosts?.find(x => x.id === p.id)?.vote;
    const score = likes.length - dislikes.length;
    const comments = p.comments || [];
    const reactions = p.reactions || {};
    const canDelete = this.user && (this.user.id === p.authorId || this.user.role === 'admin');
    
    return `
      <div class="forum-post">
        <div class="forum-post-header">
          <img src="${esc(author?.avatar || CFG.DEF_AVATAR + 'u')}" onerror="this.src='${CFG.DEF_AVATAR}u'" onclick="App.go('profile/${p.authorId}')">
          <div class="forum-post-user">
            <div class="forum-post-name" onclick="App.go('profile/${p.authorId}')">
              ${esc(author?.username || '?')}
              ${author?.role==='admin'?'<span class="role-badge admin">АДМИН</span>':author?.role==='moder'?'<span class="role-badge moder">МОДЕР</span>':''}
            </div>
            <div class="forum-post-meta">@${esc(author?.username || 'user')} · ${timeAgo(p.timestamp)}</div>
          </div>
          ${canDelete ? `<button class="btn btn-sm btn-outline" onclick="App.deleteForumPost('${p.id}')"><i class="fas fa-trash"></i></button>` : ''}
        </div>
        <h3 class="forum-post-title" onclick="App.go('forumpost/${p.id}')">${esc(p.title)}</h3>
        <p class="forum-post-text">${esc(p.content).substring(0,400)}${p.content.length > 400 ? '...' : ''}</p>
        
        <div class="reactions-bar">
          ${REACTIONS.map(r => {
            const count = reactions[r.key] || 0;
            const myReaction = this.user && p.userReactions && p.userReactions[this.user.id];
            return `
              <button class="reaction-btn ${myReaction===r.key?'active':''}" onclick="App.reactToPost('${p.id}','${r.key}')">
                <span class="reaction-emoji">${r.emoji}</span>
                ${count > 0 ? `<span>${count}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
        
        <div class="forum-post-actions">
          <button class="forum-action like ${userVote==='up'?'active-like':''}" onclick="App.votePost('${p.id}','up')">
            <i class="fas fa-arrow-up"></i>
            <span class="vote-counter">${likes.length || ''}</span>
          </button>
          <button class="forum-action dislike ${userVote==='down'?'active-dislike':''}" onclick="App.votePost('${p.id}','down')">
            <i class="fas fa-arrow-down"></i>
            <span class="vote-counter">${dislikes.length || ''}</span>
          </button>
          <button class="forum-action" onclick="App.go('forumpost/${p.id}')">
            <i class="fas fa-comment"></i> ${comments.length}
          </button>
          <button class="forum-action" onclick="App.shareNews()"><i class="fas fa-share"></i></button>
          <span class="forum-action" style="cursor:default;color:${score>0?'var(--online)':score<0?'var(--danger)':'var(--text-muted)'};font-weight:700;">
            ${score > 0 ? '+' : ''}${score}
          </span>
        </div>
      </div>
    `;
  },

  async reactToPost(postId, reaction) {
    if (!this.requireAuth()) return;
    const p = this.data.forumPosts.find(x => x.id === postId);
    if (!p) return;
    if (!p.reactions) p.reactions = {};
    if (!p.userReactions) p.userReactions = {};
    
    const currentReaction = p.userReactions[this.user.id];
    if (currentReaction === reaction) {
      p.reactions[reaction] = Math.max(0, (p.reactions[reaction] || 0) - 1);
      delete p.userReactions[this.user.id];
    } else {
      if (currentReaction) {
        p.reactions[currentReaction] = Math.max(0, (p.reactions[currentReaction] || 0) - 1);
      }
      p.reactions[reaction] = (p.reactions[reaction] || 0) + 1;
      p.userReactions[this.user.id] = reaction;
    }
    await this.save();
    this.go(this.page);
  },

  async votePost(postId, dir) {
    if (!this.requireAuth()) return;
    const p = this.data.forumPosts.find(x => x.id === postId);
    if (!p) return;
    if (!p.likes) p.likes = [];
    if (!p.dislikes) p.dislikes = [];
    if (!this.user.likedPosts) this.user.likedPosts = [];
    const existing = this.user.likedPosts.find(x => x.id === postId);
    if (existing) {
      if (existing.vote === 'up') p.likes = p.likes.filter(id => id !== this.user.id);
      if (existing.vote === 'down') p.dislikes = p.dislikes.filter(id => id !== this.user.id);
      if (existing.vote === dir) {
        this.user.likedPosts = this.user.likedPosts.filter(x => x.id !== postId);
      } else {
        existing.vote = dir;
        if (dir === 'up') p.likes.push(this.user.id);
        else p.dislikes.push(this.user.id);
      }
    } else {
      this.user.likedPosts.push({id: postId, vote: dir});
      if (dir === 'up') p.likes.push(this.user.id);
      else p.dislikes.push(this.user.id);
    }
    await this.save();
    this.go(this.page, this.page.includes('/') ? this.page.split('/')[1] : null);
  },

  async deleteForumPost(postId) {
    const p = this.data.forumPosts.find(x => x.id === postId);
    if (!p) return;
    if (this.user.id !== p.authorId && this.user.role !== 'admin') return this.toast('Нет прав', 'error');
    if (!confirm('Удалить тему?')) return;
    this.data.forumPosts = this.data.forumPosts.filter(x => x.id !== postId);
    const saved = await this.save();
    if (saved) { this.toast('Удалено', 'success'); this.go('forum'); }
  },

  renderForumPost(c, id) {
    const p = this.data.forumPosts.find(x => x.id === id);
    if (!p) return c.innerHTML = '<div class="container"><div class="empty-state">Тема не найдена</div></div>';
    const author = this.data.users.find(u => u.id === p.authorId);
    const likes = p.likes || [];
    const dislikes = p.dislikes || [];
    const userVote = this.user.likedPosts?.find(x => x.id === p.id)?.vote;
    const score = likes.length - dislikes.length;
    const comments = p.comments || [];
    const reactions = p.reactions || {};
    const isMuted = this.user.mutedUntil > Date.now()/1000;
    const canDelete = this.user.id === p.authorId || this.user.role === 'admin';
    
    const mainComments = comments.filter(cm => !cm.replyTo);
    const replies = comments.filter(cm => cm.replyTo);
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <div class="flex-between mb-24">
          <button class="btn btn-outline btn-sm" onclick="App.go('forum')"><i class="fas fa-arrow-left"></i> Назад</button>
          ${canDelete ? `<button class="btn btn-danger btn-sm" onclick="App.deleteForumPost('${p.id}')"><i class="fas fa-trash"></i> Удалить тему</button>` : ''}
        </div>
        
        <div class="forum-feed">
          <div class="forum-post">
            <div class="forum-post-header">
              <img src="${esc(author?.avatar || CFG.DEF_AVATAR + 'u')}" onerror="this.src='${CFG.DEF_AVATAR}u'" onclick="App.go('profile/${p.authorId}')">
              <div class="forum-post-user">
                <div class="forum-post-name" onclick="App.go('profile/${p.authorId}')">
                  ${esc(author?.username || '?')}
                  ${author?.role==='admin'?'<span class="role-badge admin">АДМИН</span>':author?.role==='moder'?'<span class="role-badge moder">МОДЕР</span>':''}
                </div>
                <div class="forum-post-meta">@${esc(author?.username || 'user')} · ${timeAgo(p.timestamp)}</div>
              </div>
            </div>
            <h2 style="margin-bottom:16px;font-size:22px;">${esc(p.title)}</h2>
            <p style="color:var(--text-secondary);line-height:1.8;white-space:pre-wrap;">${esc(p.content)}</p>
            
            <div class="reactions-bar">
              ${REACTIONS.map(r => {
                const count = reactions[r.key] || 0;
                const myReaction = this.user && p.userReactions && p.userReactions[this.user.id];
                return `
                  <button class="reaction-btn ${myReaction===r.key?'active':''}" onclick="App.reactToPost('${p.id}','${r.key}')">
                    <span class="reaction-emoji">${r.emoji}</span>
                    <span>${count}</span>
                  </button>
                `;
              }).join('')}
            </div>
            
            <div class="forum-post-actions">
              <button class="forum-action like ${userVote==='up'?'active-like':''}" onclick="App.votePost('${p.id}','up')">
                <i class="fas fa-arrow-up"></i> ${likes.length}
              </button>
              <button class="forum-action dislike ${userVote==='down'?'active-dislike':''}" onclick="App.votePost('${p.id}','down')">
                <i class="fas fa-arrow-down"></i> ${dislikes.length}
              </button>
              <span class="forum-action" style="cursor:default;color:${score>0?'var(--online)':score<0?'var(--danger)':'var(--text-muted)'};font-weight:700;">
                ${score > 0 ? '+' : ''}${score}
              </span>
            </div>
          </div>
          
          <div class="card" style="margin-top:20px;">
            <div class="card-header">
              <span class="card-title"><i class="fas fa-comments"></i> Комментарии (${comments.length})</span>
            </div>
            
            ${mainComments.map(cm => this.renderComment(cm, replies, p.id)).join('')}
            
            ${!isMuted ? `
              <div id="replyIndicator"></div>
              <div style="display:flex;gap:10px;margin-top:20px;padding-top:20px;border-top:1px solid var(--border);">
                <img class="avatar-md" src="${esc(this.user.avatar || CFG.DEF_AVATAR + encodeURIComponent(this.user.username))}" onerror="this.src='${CFG.DEF_AVATAR}u'">
                <div style="flex:1;">
                  <textarea class="form-input" id="commentInput" placeholder="Написать комментарий..." style="min-height:60px;"></textarea>
                  <button class="btn btn-primary btn-sm mt-16" onclick="App.addComment('${p.id}')">
                    <i class="fas fa-paper-plane"></i> Отправить
                  </button>
                </div>
              </div>
            ` : `<p class="text-muted text-center" style="padding:20px;"><i class="fas fa-volume-mute"></i> Вы замучены</p>`}
          </div>
        </div>
      </div>
    `;
  },

  renderComment(cm, allReplies, postId) {
    const cmA = this.data.users.find(u => u.id === cm.userId);
    const cmLikes = cm.likes || [];
    const cmLiked = cmLikes.includes(this.user?.id);
    const commentReplies = allReplies.filter(r => r.replyTo === cm.id);
    let replyInfo = '';
    if (cm.replyTo) {
      const parentComment = this.data.forumPosts.flatMap(p => p.comments || []).find(c => c.id === cm.replyTo);
      if (parentComment) {
        const parentUser = this.data.users.find(u => u.id === parentComment.userId);
        replyInfo = `<div class="comment-reply-to"><i class="fas fa-reply"></i> Ответ для @${esc(parentUser?.username || 'user')}</div>`;
      }
    }
    return `
      <div class="comment">
        <img class="comment-avatar" src="${esc(cmA?.avatar || CFG.DEF_AVATAR + 'u')}" onerror="this.src='${CFG.DEF_AVATAR}u'" onclick="App.go('profile/${cm.userId}')">
        <div class="comment-body">
          ${replyInfo}
          <div class="comment-header">
            <span class="comment-author" onclick="App.go('profile/${cm.userId}')">${esc(cmA?.username || '?')}</span>
            ${cmA?.role==='admin'?'<span class="role-badge admin" style="font-size:9px;padding:2px 6px;">АДМИН</span>':cmA?.role==='moder'?'<span class="role-badge moder" style="font-size:9px;padding:2px 6px;">МОДЕР</span>':''}
            <span class="comment-time">${timeAgo(cm.timestamp)}</span>
          </div>
          <p class="comment-text">${esc(cm.text)}</p>
          <div class="comment-actions">
            <button class="${cmLiked?'liked':''}" onclick="App.likeComment('${postId}','${cm.id}')">
              <i class="fas fa-heart"></i> ${cmLikes.length}
            </button>
            ${this.user ? `<button onclick="App.setReply('${cm.id}','${esc(cmA?.username || '?')}')"><i class="fas fa-reply"></i> Ответить</button>` : ''}
          </div>
          ${commentReplies.length > 0 ? `
            <div class="comment-replies">
              ${commentReplies.map(r => this.renderComment(r, allReplies, postId)).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  setReply(commentId, username) {
    if (!this.requireAuth()) return;
    this.replyTo = { commentId, username };
    const indicator = document.getElementById('replyIndicator');
    if (indicator) {
      indicator.innerHTML = `
        <div class="reply-indicator">
          <div class="reply-indicator-text"><i class="fas fa-reply"></i> Ответ для @${esc(username)}</div>
          <div class="reply-indicator-close" onclick="App.cancelReply()"><i class="fas fa-times"></i></div>
        </div>
      `;
    }
    const input = document.getElementById('commentInput');
    if (input) input.focus();
  },

  cancelReply() {
    this.replyTo = null;
    const indicator = document.getElementById('replyIndicator');
    if (indicator) indicator.innerHTML = '';
  },

  async likeComment(postId, commentId) {
    const p = this.data.forumPosts.find(x => x.id === postId);
    if (!p) return;
    const c = p.comments.find(x => x.id === commentId);
    if (!c) return;
    if (!c.likes) c.likes = [];
    const idx = c.likes.indexOf(this.user.id);
    if (idx >= 0) c.likes.splice(idx, 1); else c.likes.push(this.user.id);
    await this.save();
    this.go('forumpost/' + postId);
  },

  checkSpam(text, postId) {
    const now = Date.now()/1000;
    const same = this.recentMessages.filter(m => m.userId === this.user.id && m.postId === postId && m.text === text && now - m.time < 3600);
    if (same.length >= CFG.MAX_SAME_MESSAGES - 1) return true;
    this.recentMessages.push({userId: this.user.id, postId, text, time: now});
    this.recentMessages = this.recentMessages.filter(m => now - m.time < 3600);
    return false;
  },

  async addComment(postId) {
    const input = document.getElementById('commentInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    if (text.length > 2000) return this.toast('Слишком длинно', 'error');
    if (this.checkSpam(text, postId)) {
      this.user.mutedUntil = Date.now()/1000 + CFG.MUTE_DURATION;
      await this.save();
      this.toast('🚫 Мут на 1 час', 'error');
      this.go('forumpost/' + postId);
      return;
    }
    const p = this.data.forumPosts.find(x => x.id === postId);
    if (!p) return;
    if (!p.comments) p.comments = [];
    const comment = {
      id: genId(), userId: this.user.id,
      text, likes: [], timestamp: Date.now()/1000
    };
    if (this.replyTo) comment.replyTo = this.replyTo.commentId;
    p.comments.push(comment);
    const saved = await this.save();
    if (saved) {
      this.replyTo = null;
      this.toast('Комментарий добавлен', 'success');
      this.go('forumpost/' + postId);
    } else {
      p.comments.pop();
    }
  },

  // --- CHANNELS WITH FILTERS ---
  channelsFilter: 'verified', // 'verified' | 'all' | 'normal'
  
  renderChannels(c) {
    const channels = this.data.channels;
    const hasChannel = channels.some(ch => ch.ownerId === this.user.id);
    
    // Фильтрация
    const filter = this.channelsFilter;
    let filteredChannels = channels;
    if (filter === 'verified') {
      filteredChannels = channels.filter(ch => ch.verified);
    } else if (filter === 'normal') {
      filteredChannels = channels.filter(ch => !ch.verified);
    }
    
    // Группировка для аккордеона
    const empires = channels.filter(ch => (ch.type || 'empire') === 'empire');
    const orgs = channels.filter(ch => ch.type === 'organization');
    const newsChannels = channels.filter(ch => ch.type === 'news');
    const alliances = channels.filter(ch => ch.type === 'alliance');
    
    const verifiedCount = channels.filter(ch => ch.verified).length;
    const normalCount = channels.filter(ch => !ch.verified).length;
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <!-- Заголовок и кнопка создания -->
        <div class="flex-between mb-24" style="flex-wrap:wrap;gap:12px;">
          <h1 class="section-title" style="margin:0;"><i class="fas fa-layer-group"></i> Каналы</h1>
          ${!hasChannel ? `<button class="btn btn-primary" onclick="App.modal('newChannel')"><i class="fas fa-plus"></i> Создать канал</button>` : ''}
        </div>
        
        <!-- Быстрый выбор типа -->
        <div class="card mb-24" style="text-align:center;">
          <p class="text-muted" style="margin-bottom:12px;">Выберите тип канала для создания:</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-type-empire" onclick="App.selectedChannelType='empire';App.modal('newChannel')">👑 Империя</button>
            <button class="btn btn-type-org" onclick="App.selectedChannelType='organization';App.modal('newChannel')">🏛️ Организация</button>
            <button class="btn btn-type-news" onclick="App.selectedChannelType='news';App.modal('newChannel')">📰 Новостник</button>
            <button class="btn btn-type-alliance" onclick="App.selectedChannelType='alliance';App.modal('newChannel')">🤝 Союз</button>
          </div>
        </div>
        
        <!-- ФИЛЬТРЫ -->
        <div class="card mb-24">
          <div class="flex-between" style="flex-wrap:wrap;gap:12px;">
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn ${filter==='verified'?'btn-primary':'btn-outline'} btn-sm" onclick="App.channelsFilter='verified';App.renderChannels(document.getElementById('main'))">
                <i class="fas fa-check-circle"></i> Верифицированные <span style="background:rgba(255,255,255,0.2);padding:2px 8px;border-radius:10px;margin-left:4px;">${verifiedCount}</span>
              </button>
              <button class="btn ${filter==='all'?'btn-primary':'btn-outline'} btn-sm" onclick="App.channelsFilter='all';App.renderChannels(document.getElementById('main'))">
                <i class="fas fa-layer-group"></i> Все <span style="background:rgba(255,255,255,0.2);padding:2px 8px;border-radius:10px;margin-left:4px;">${channels.length}</span>
              </button>
              <button class="btn ${filter==='normal'?'btn-primary':'btn-outline'} btn-sm" onclick="App.channelsFilter='normal';App.renderChannels(document.getElementById('main'))">
                <i class="fas fa-clock"></i> Обычные <span style="background:rgba(255,255,255,0.2);padding:2px 8px;border-radius:10px;margin-left:4px;">${normalCount}</span>
              </button>
            </div>
            <div class="text-muted" style="font-size:13px;">
              Показано: <strong>${filteredChannels.length}</strong> из <strong>${channels.length}</strong>
            </div>
          </div>
        </div>
        
        <!-- ПОЛНЫЙ СПИСОК КАНАЛОВ -->
        <section style="padding:20px 0;">
          <h2 class="section-title">${filter === 'verified' ? '✅ Верифицированные каналы' : filter === 'normal' ? '📋 Обычные каналы' : '🌟 Все каналы'}</h2>
          ${filteredChannels.length === 0 ? `
            <div class="empty-state">
              <i class="fas fa-${filter==='verified'?'check-circle':filter==='normal'?'clock':'layer-group'}"></i>
              <p>${filter==='verified'?'Верифицированных каналов пока нет':filter==='normal'?'Нет обычных каналов':'Каналов пока нет'}</p>
            </div>
          ` : `
            <div class="channel-type-grid">
              ${filteredChannels.sort((a,b) => {
                // Верифицированные сначала
                if (a.verified && !b.verified) return -1;
                if (!a.verified && b.verified) return 1;
                return 0;
              }).map(ch => this.channelCard(ch)).join('')}
            </div>
          `}
        </section>
        
        <!-- РАСПРЕДЕЛЕНИЕ ПО ПОДГРУППАМ -->
        <section style="padding:40px 0;">
          <h2 class="section-title">📂 Категории каналов</h2>
          
          <!-- ИМПЕРИИ -->
          <div class="accordion ${empires.length ? 'open' : ''}">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
              <div class="accordion-header-left">
                <div class="accordion-icon" style="background:var(--grad-empire);color:#000;">👑</div>
                <span>Империи</span>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="accordion-count">${empires.length}</span>
                <i class="fas fa-chevron-down accordion-arrow"></i>
              </div>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                ${empires.length === 0 ? '<p class="text-muted">Империй пока нет</p>' : `
                  <div class="channel-type-grid">
                    ${empires.map(ch => this.channelCard(ch)).join('')}
                  </div>
                `}
              </div>
            </div>
          </div>
          
          <!-- ОРГАНИЗАЦИИ -->
          <div class="accordion">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
              <div class="accordion-header-left">
                <div class="accordion-icon" style="background:var(--grad-org);">🏛️</div>
                <span>Организации</span>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="accordion-count">${orgs.length}</span>
                <i class="fas fa-chevron-down accordion-arrow"></i>
              </div>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                ${orgs.length === 0 ? '<p class="text-muted">Организаций пока нет</p>' : `
                  <div class="channel-type-grid">
                    ${orgs.map(ch => this.channelCard(ch)).join('')}
                  </div>
                `}
              </div>
            </div>
          </div>
          
          <!-- НОВОСТНИКИ -->
          <div class="accordion">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
              <div class="accordion-header-left">
                <div class="accordion-icon" style="background:var(--grad-news);">📰</div>
                <span>Новостники</span>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="accordion-count">${newsChannels.length}</span>
                <i class="fas fa-chevron-down accordion-arrow"></i>
              </div>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                ${newsChannels.length === 0 ? '<p class="text-muted">Новостников пока нет</p>' : `
                  <div class="channel-type-grid">
                    ${newsChannels.map(ch => this.channelCard(ch)).join('')}
                  </div>
                `}
              </div>
            </div>
          </div>
          
          <!-- СОЮЗЫ -->
          <div class="accordion">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
              <div class="accordion-header-left">
                <div class="accordion-icon" style="background:var(--grad-alliance);">🤝</div>
                <span>Союзы</span>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="accordion-count">${alliances.length}</span>
                <i class="fas fa-chevron-down accordion-arrow"></i>
              </div>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                ${alliances.length === 0 ? '<p class="text-muted">Союзов пока нет</p>' : `
                  <div class="channel-type-grid">
                    ${alliances.map(ch => this.channelCard(ch)).join('')}
                  </div>
                `}
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  },

  channelCard(ch) {
    const type = ch.type || 'empire';
    const typeInfo = CHANNEL_TYPES[type];
    const isSub = (ch.subscribers||[]).includes(this.user.id);
    const memberCount = type === 'alliance' ? (ch.members||[]).length : (ch.subscribers||[]).length;
    
    return `
      <div class="channel-card" data-type="${type}" onclick="App.go('channel/${ch.id}')">
        <div class="channel-cover" ${ch.cover?`style="background-image:url('${esc(ch.cover)}');background-size:cover;"`:''}></div>
        <div class="channel-body">
          <img class="channel-avatar" src="${esc(ch.avatar || CFG.DEF_AVATAR + encodeURIComponent(ch.name))}" onerror="this.src='${CFG.DEF_AVATAR}ch'">
          <span class="channel-type-badge ${type}">${typeInfo.icon} ${typeInfo.name}</span>
          <div class="channel-name">
            ${esc(ch.name)}
            ${ch.verified?'<i class="fas fa-check-circle channel-verified"></i>':''}
          </div>
          <p class="channel-desc">${esc(ch.description||'').substring(0,60)}</p>
          <p class="channel-subs"><i class="fas fa-users"></i> ${memberCount} ${type==='alliance'?'членов':'подписчиков'}</p>
          ${ch.allianceId ? `
            <p style="font-size:12px;color:var(--online);margin-top:6px;">
              🤝 В союзе: ${esc(this.data.channels.find(c=>c.id===ch.allianceId)?.name || '—')}
            </p>
          ` : ''}
        </div>
      </div>
    `;
  },

  renderChannel(c, id) {
    const ch = this.data.channels.find(x => x.id === id);
    if (!ch) return c.innerHTML = '<div class="container"><div class="empty-state">Канал не найден</div></div>';
    
    const type = ch.type || 'empire';
    const typeInfo = CHANNEL_TYPES[type];
    const owner = this.data.users.find(u => u.id === ch.ownerId);
    const isOwner = ch.ownerId === this.user.id;
    const isSub = (ch.subscribers||[]).includes(this.user.id);
    const news = this.data.news.filter(n => n.authorId === ch.id && n.status === 'approved');
    
    // Для империй: показываем союз, в котором состоит
    let allianceInfo = '';
    if (type === 'empire' && ch.allianceId) {
      const alliance = this.data.channels.find(c => c.id === ch.allianceId);
      if (alliance) {
        allianceInfo = `
          <div class="alliance-info-box" onclick="App.go('channel/${alliance.id}')">
            <img src="${esc(alliance.avatar || CFG.DEF_AVATAR + encodeURIComponent(alliance.name))}" onerror="this.src='${CFG.DEF_AVATAR}a'">
            <div>
              <div class="alliance-info-label">🤝 Состоит в союзе</div>
              <div class="alliance-info-name">${esc(alliance.name)} ${alliance.verified?'<i class="fas fa-check-circle"></i>':''}</div>
            </div>
            <i class="fas fa-chevron-right text-muted" style="margin-left:auto;"></i>
          </div>
        `;
      }
    }
    
    // Для союзов: показываем код (только владельцу) и список членов
    let allianceSection = '';
    if (type === 'alliance') {
      const members = (ch.members || []).map(mId => this.data.channels.find(c => c.id === mId)).filter(Boolean);
      
      if (isOwner) {
        allianceSection = `
          <div class="card mt-24">
            <div class="card-header">
              <span class="card-title"><i class="fas fa-key"></i> Код для вступления</span>
              <button class="btn btn-sm btn-outline" onclick="App.regenerateAllianceCode('${ch.id}')">
                <i class="fas fa-sync"></i> Обновить
              </button>
            </div>
            <div class="alliance-code-box">
              <p class="text-muted" style="margin-bottom:10px;">🔒 Этот код виден только вам. Делитесь им с теми, кого хотите принять в союз.</p>
              <div class="alliance-code" onclick="App.copyCode('${ch.allianceCode}')">${esc(ch.allianceCode || '------')}</div>
              <p class="text-muted" style="margin-top:10px;font-size:12px;">Нажмите, чтобы скопировать</p>
            </div>
          </div>
        `;
      }
      
      allianceSection += `
        <div class="card mt-24">
          <div class="card-header">
            <span class="card-title"><i class="fas fa-users"></i> Члены союза (${members.length})</span>
          </div>
          ${members.length === 0 ? '<p class="text-muted text-center">Пока нет членов</p>' : `
            <div class="alliance-members">
              ${members.map(m => `
                <div class="alliance-member" onclick="App.go('channel/${m.id}')">
                  <img src="${esc(m.avatar || CFG.DEF_AVATAR + encodeURIComponent(m.name))}" onerror="this.src='${CFG.DEF_AVATAR}m'">
                  <div class="alliance-member-info">
                    <div class="alliance-member-name">${esc(m.name)} ${m.verified?'<i class="fas fa-check-circle verified-badge-inline"></i>':''}</div>
                    <div class="alliance-member-meta">${CHANNEL_TYPES[m.type||'empire'].icon} ${CHANNEL_TYPES[m.type||'empire'].name}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }
    
    // Кнопки действий
    let actionsHtml = '';
    if (isOwner) {
      actionsHtml = `
        ${!ch.verified && !ch.verificationRequested ? `<button class="btn btn-outline btn-sm" onclick="App.requestVerify('${ch.id}')"><i class="fas fa-check-circle"></i> Верификация</button>` : ''}
        ${ch.verificationRequested && !ch.verified ? '<span class="status-pill pending">На проверке</span>' : ''}
        ${ch.verified && (type==='news' || type==='empire') ? `<button class="btn btn-primary btn-sm" onclick="App.modal('suggestNews')"><i class="fas fa-newspaper"></i> Новость</button>` : ''}
        <button class="btn btn-outline btn-sm" onclick="App.modal('editChannel')"><i class="fas fa-cog"></i></button>
        <button class="btn btn-danger btn-sm" onclick="App.deleteChannel('${ch.id}')"><i class="fas fa-trash"></i></button>
      `;
    } else {
      if (type === 'alliance') {
        // Для союза - только просмотр (вступить могут только империи)
        actionsHtml = `
          <div class="text-muted text-center" style="padding:10px;">
            <i class="fas fa-info-circle"></i> Чтобы вступить в союз, создайте империю и используйте код
          </div>
        `;
      } else if (type === 'empire' && this.user.channelId) {
        // Для империи: если у пользователя есть своя империя и союз доступен - показать "Вступить в союз"
        actionsHtml = `
          <button class="btn ${isSub?'btn-danger':'btn-primary'} btn-sm" onclick="App.toggleSub('${ch.id}')">
            <i class="fas fa-${isSub?'sign-out-alt':'sign-in-alt'}"></i> ${isSub?'Отписаться':'Подписаться'}
          </button>
        `;
      } else {
        actionsHtml = `
          <button class="btn ${isSub?'btn-danger':'btn-primary'} btn-sm" onclick="App.toggleSub('${ch.id}')">
            <i class="fas fa-${isSub?'bell-slash':'bell'}"></i> ${isSub?'Отписаться':'Подписаться'}
          </button>
        `;
      }
    }
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <div class="profile-header">
          <div class="profile-cover" ${ch.cover?`style="background-image:url('${esc(ch.cover)}');background-size:cover;"`:''}></div>
          <div class="profile-info">
            <div class="profile-avatar-wrap">
              <img class="profile-avatar" src="${esc(ch.avatar || CFG.DEF_AVATAR + encodeURIComponent(ch.name))}" onerror="this.src='${CFG.DEF_AVATAR}ch'">
            </div>
            <div class="profile-details">
              <h2 class="profile-name">
                <span class="channel-type-badge ${type}" style="font-size:13px;">${typeInfo.icon} ${typeInfo.name}</span>
                ${esc(ch.name)}
                ${ch.verified?'<i class="fas fa-check-circle verified-badge"></i>':''}
              </h2>
              <p class="text-muted" style="font-size:13px;">Владелец: ${esc(owner?.username||'?')}</p>
              <div class="profile-stats">
                <div class="profile-stat">
                  <div class="profile-stat-num">${type==='alliance'?(ch.members||[]).length:(ch.subscribers||[]).length}</div>
                  <div class="profile-stat-label">${type==='alliance'?'Членов':'Подписчиков'}</div>
                </div>
                <div class="profile-stat"><div class="profile-stat-num">${news.length}</div><div class="profile-stat-label">Новостей</div></div>
              </div>
              <p class="text-muted mt-16">${esc(ch.description||'')}</p>
              ${allianceInfo}
            </div>
            <div class="profile-actions">
              ${actionsHtml}
              ${type === 'empire' && isOwner ? `<button class="btn btn-type-alliance btn-sm" onclick="App.modal('joinAlliance')"><i class="fas fa-handshake"></i> Вступить в союз</button>` : ''}
            </div>
          </div>
        </div>
        
        ${allianceSection}
        
        ${news.length > 0 ? `
          <h2 class="section-title mt-24">Новости канала</h2>
          <div class="news-grid">${news.map(n => this.newsCard(n)).join('')}</div>
        ` : ''}
      </div>
    `;
  },

  async copyCode(code) {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(code);
      this.toast('Код скопирован!', 'success');
    }
  },

  async regenerateAllianceCode(chId) {
    const ch = this.data.channels.find(c => c.id === chId);
    if (!ch || ch.ownerId !== this.user.id) return;
    ch.allianceCode = genAllianceCode();
    await this.save();
    this.toast('Новый код сгенерирован!', 'success');
    this.go('channel/' + chId);
  },

  async toggleSub(chId) {
    const ch = this.data.channels.find(x => x.id === chId);
    if (!ch) return;
    if (!ch.subscribers) ch.subscribers = [];
    const idx = ch.subscribers.indexOf(this.user.id);
    if (idx >= 0) { ch.subscribers.splice(idx, 1); this.toast('Отписались', 'info'); }
    else { ch.subscribers.push(this.user.id); this.toast('Подписались!', 'success'); }
    await this.save();
    this.go('channel/' + chId);
  },

  requestVerify(chId) {
    const ch = this.data.channels.find(x => x.id === chId);
    if (!ch) return;
    
    const communityLink = (this.data.settings && this.data.settings.communityLink) || 'https://t.me/your_community';
    
    this.openModal(`
      <div class="modal-header">
        <h2>🔒 Верификация канала</h2>
        <button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button>
      </div>
      
      <div style="text-align:center;padding:20px 0;">
        <div style="font-size:64px;margin-bottom:16px;">🛡️</div>
        <h3 style="margin-bottom:12px;">Подтверждение прав</h3>
        <p class="text-muted" style="margin-bottom:20px;line-height:1.6;">
          Для получения верификации канала <strong>${esc(ch.name)}</strong> необходимо подтвердить свои права.
        </p>
        
        <div class="card" style="text-align:left;background:var(--bg-input);border-left:4px solid var(--accent);">
          <p style="margin-bottom:12px;"><strong>📋 Инструкция:</strong></p>
          <ol style="padding-left:20px;line-height:1.8;color:var(--text-secondary);">
            <li>Зайдите в наше сообщество</li>
            <li>Подтвердите свои права на канал</li>
            <li>Дождитесь одобрения администратора</li>
          </ol>
        </div>
        
        <a href="${esc(communityLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top:20px;width:100%;justify-content:center;font-size:16px;">
          <i class="fas fa-users"></i> Зайти в сообщество
        </a>
        
        <p class="text-muted" style="margin-top:16px;font-size:13px;">
          <i class="fas fa-info-circle"></i> После подтверждения отправьте заявку на верификацию
        </p>
      </div>
      
      <div style="display:flex;gap:10px;margin-top:20px;">
        <button class="btn btn-outline" style="flex:1;" onclick="App.closeModal()">Отмена</button>
        <button class="btn btn-primary" style="flex:1;" onclick="App.submitVerifyRequest('${chId}')">
          <i class="fas fa-paper-plane"></i> Отправить заявку
        </button>
      </div>
    `);
  },
  
  async submitVerifyRequest(chId) {
    const ch = this.data.channels.find(x => x.id === chId);
    if (!ch) return;
    ch.verificationRequested = true;
    await this.save();
    this.closeModal();
    this.toast('✅ Заявка на верификацию отправлена!', 'success');
    this.go('channel/' + chId);
  },

  async deleteChannel(chId) {
    if (!confirm('Удалить канал безвозвратно?')) return;
    this.data.channels = this.data.channels.filter(c => c.id !== chId);
    this.user.channelId = null;
    await this.save();
    this.toast('Канал удалён', 'success');
    this.go('channels');
  },

  renderProfile(c, uid) {
    uid = uid || this.user.id;
    const u = this.data.users.find(x => x.id === uid);
    if (!u) return c.innerHTML = '<div class="container"><div class="empty-state">Пользователь не найден</div></div>';
    
    const isOwn = u.id === this.user.id;
    const channel = this.data.channels.find(ch => ch.ownerId === u.id);
    const role = u.role || 'user';
    const isSubscribed = (u.subscribers || []).includes(this.user.id);
    const postCount = this.data.forumPosts.filter(p => p.authorId === u.id).length;
    const newsCount = channel ? this.data.news.filter(n => n.authorId === channel.id).length : 0;
    
    const roleLabel = role === 'admin' ? 'АДМИН' : role === 'moder' ? 'МОДЕР' : 'ПОЛЬЗОВАТЕЛЬ';
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <div class="profile-header">
          <div class="profile-cover" ${u.cover?`style="background-image:url('${esc(u.cover)}');background-size:cover;"`:''}></div>
          <div class="profile-info">
            <div class="profile-avatar-wrap">
              <img class="profile-avatar" src="${esc(u.avatar || CFG.DEF_AVATAR + encodeURIComponent(u.username))}" onerror="this.src='${CFG.DEF_AVATAR}u'">
              ${u.status === 'online' ? '<div class="online-dot"></div>' : '<div class="offline-dot"></div>'}
            </div>
            <div class="profile-details">
              <h2 class="profile-name">
                ${esc(u.username)}
                <span class="role-badge ${role}">${roleLabel}</span>
              </h2>
              <div class="profile-status ${u.status==='online'?'online':''}">
                <i class="fas fa-circle" style="font-size:8px;"></i>
                ${u.status==='online'?'В сети':u.statusText||'Не в сети'}
              </div>
              <div class="profile-stats">
                <div class="profile-stat"><div class="profile-stat-num">${postCount}</div><div class="profile-stat-label">Постов</div></div>
                <div class="profile-stat"><div class="profile-stat-num">${(u.subscribers||[]).length}</div><div class="profile-stat-label">Подписчиков</div></div>
                <div class="profile-stat"><div class="profile-stat-num">${(u.subscriptions||[]).length}</div><div class="profile-stat-label">Подписок</div></div>
                ${channel ? `<div class="profile-stat"><div class="profile-stat-num">${newsCount}</div><div class="profile-stat-label">Новостей</div></div>` : ''}
              </div>
              <p class="text-muted mt-16" style="font-size:13px;"><i class="fas fa-calendar"></i> На портале с ${new Date(u.joinedAt*1000).toLocaleDateString('ru-RU')}</p>
            </div>
            <div class="profile-actions">
              ${isOwn ? `
                <button class="btn btn-outline btn-sm" onclick="App.modal('editProfile')"><i class="fas fa-pen"></i> Редактировать</button>
                ${role === 'admin' || role === 'moder' ? `<button class="btn btn-primary btn-sm" onclick="App.go('admin')"><i class="fas fa-shield-alt"></i> Админ</button>` : ''}
                <button class="btn btn-danger btn-sm" onclick="App.logout()"><i class="fas fa-sign-out-alt"></i></button>
              ` : `
                <button class="btn ${isSubscribed?'btn-danger':'btn-primary'} btn-sm" onclick="App.toggleUserSub('${u.id}')">
                  <i class="fas fa-${isSubscribed?'user-minus':'user-plus'}"></i> ${isSubscribed?'Отписаться':'Подписаться'}
                </button>
              `}
            </div>
          </div>
        </div>
        
        ${channel ? `
          <div class="card" style="cursor:pointer;" onclick="App.go('channel/${channel.id}')">
            <div style="display:flex;align-items:center;gap:14px;">
              <img src="${esc(channel.avatar||CFG.DEF_AVATAR+encodeURIComponent(channel.name))}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;" onerror="this.src='${CFG.DEF_AVATAR}ch'">
              <div style="flex:1;">
                <div style="font-weight:800;display:flex;align-items:center;gap:8px;">
                  <span class="channel-type-badge ${channel.type||'empire'}">${CHANNEL_TYPES[channel.type||'empire'].icon} ${CHANNEL_TYPES[channel.type||'empire'].name}</span>
                  ${esc(channel.name)} ${channel.verified?'<i class="fas fa-check-circle verified-badge"></i>':''}
                </div>
                <p class="text-muted" style="font-size:13px;">${(channel.subscribers||[]).length} подписчиков</p>
              </div>
              <i class="fas fa-chevron-right text-muted"></i>
            </div>
          </div>
        ` : isOwn ? `
          <div class="card text-center">
            <p class="text-muted mb-16">У вас ещё нет канала</p>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <button class="btn btn-type-empire btn-sm" onclick="App.selectedChannelType='empire';App.modal('newChannel')">👑 Империя</button>
              <button class="btn btn-type-org btn-sm" onclick="App.selectedChannelType='organization';App.modal('newChannel')">🏛️ Организация</button>
              <button class="btn btn-type-news btn-sm" onclick="App.selectedChannelType='news';App.modal('newChannel')">📰 Новостник</button>
              <button class="btn btn-type-alliance btn-sm" onclick="App.selectedChannelType='alliance';App.modal('newChannel')">🤝 Союз</button>
            </div>
          </div>
        ` : ''}
        
        <div class="card">
          <div class="card-header"><span class="card-title"><i class="fas fa-medal"></i> Достижения (${(u.badges||[]).length}/${this.data.badges.length})</span></div>
          <div class="badge-grid">
            ${this.data.badges.map(b => `
              <div class="badge-item ${(u.badges||[]).includes(b.id)?'':'locked'}">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${esc(b.name)}</div>
                <p class="text-muted" style="font-size:11px;margin-top:4px;">${esc(b.desc)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  async toggleUserSub(uid) {
    const u = this.data.users.find(x => x.id === uid);
    if (!u) return;
    if (!u.subscribers) u.subscribers = [];
    if (!this.user.subscriptions) this.user.subscriptions = [];
    const idx = u.subscribers.indexOf(this.user.id);
    if (idx >= 0) {
      u.subscribers.splice(idx, 1);
      this.user.subscriptions = this.user.subscriptions.filter(x => x !== uid);
      this.toast('Отписались', 'info');
    } else {
      u.subscribers.push(this.user.id);
      this.user.subscriptions.push(uid);
      this.toast('Подписались!', 'success');
    }
    await this.save();
    this.go('profile/' + uid);
  },

  renderBadges(c) {
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <h1 class="section-title">🏆 Все достижения</h1>
        <div class="badge-grid">
          ${this.data.badges.map(b => `
            <div class="badge-item ${(this.user.badges||[]).includes(b.id)?'':'locked'}">
              <div class="badge-icon">${b.icon}</div>
              <div class="badge-name">${esc(b.name)}</div>
              <p class="text-muted" style="font-size:11px;margin-top:4px;">${esc(b.desc)}</p>
              ${(this.user.badges||[]).includes(b.id) ? '<p style="color:var(--online);font-size:11px;margin-top:4px;"><i class="fas fa-check"></i> Получено</p>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  adminTab: 'users',
  renderAdmin(c) {
    const role = this.user.role;
    if (role !== 'admin' && role !== 'moder') {
      return c.innerHTML = '<div class="container"><div class="empty-state"><i class="fas fa-lock"></i><p>Доступ запрещён</p></div></div>';
    }
    const tab = this.adminTab;
    const isAdmin = role === 'admin';
    let content = '';
    if (tab === 'users' && isAdmin) content = this.adminUsers();
    else if (tab === 'channels' && isAdmin) content = this.adminChannels();
    else if (tab === 'news') content = this.adminNews();
    else if (tab === 'polls' && isAdmin) content = this.adminPolls();
    else if (tab === 'settings' && isAdmin) content = this.adminSettings();
    else if (!isAdmin) { this.adminTab = 'news'; content = this.adminNews(); }
    
    c.innerHTML = `
      <div class="container" style="padding-top:32px;">
        <h1 class="section-title">Админ-панель ${role === 'moder' ? '(Модератор)' : ''}</h1>
        <div class="admin-tabs">
          ${isAdmin ? `<button class="admin-tab ${tab==='users'?'active':''}" onclick="App.adminTab='users';App.go('admin')"><i class="fas fa-users"></i> Пользователи</button>` : ''}
          ${isAdmin ? `<button class="admin-tab ${tab==='channels'?'active':''}" onclick="App.adminTab='channels';App.go('admin')"><i class="fas fa-layer-group"></i> Каналы</button>` : ''}
          <button class="admin-tab ${tab==='news'?'active':''}" onclick="App.adminTab='news';App.go('admin')"><i class="fas fa-newspaper"></i> Новости</button>
          ${isAdmin ? `<button class="admin-tab ${tab==='polls'?'active':''}" onclick="App.adminTab='polls';App.go('admin')"><i class="fas fa-poll"></i> Голосования</button>` : ''}
          ${isAdmin ? `<button class="admin-tab ${tab==='settings'?'active':''}" onclick="App.adminTab='settings';App.go('admin')"><i class="fas fa-cog"></i> Настройки</button>` : ''}
        </div>
        ${content}
      </div>
    `;
  },

  adminUsers() {
    return `
      <div class="card" style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr><th>Пользователь</th><th>Роль</th><th>Статус</th><th>Действия</th></tr></thead>
          <tbody>
            ${this.data.users.map(u => {
              const r = u.role || 'user';
              const isBanned = u.isBanned;
              const isMuted = u.mutedUntil > Date.now()/1000;
              return `
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img class="avatar-sm" src="${esc(u.avatar||CFG.DEF_AVATAR+encodeURIComponent(u.username))}" onerror="this.src='${CFG.DEF_AVATAR}u'">
                      <div>
                        <div style="font-weight:700;">${esc(u.username)}</div>
                        <div class="text-muted" style="font-size:12px;">${esc(u.phone||'')}</div>
                      </div>
                    </div>
                  </td>
                  <td><span class="role-badge ${r}">${r.toUpperCase()}</span></td>
                  <td>
                    ${isBanned?'<span class="status-pill banned">Бан</span>':
                      isMuted?'<span class="status-pill muted">Мут</span>':
                      u.status==='online'?'<span class="status-pill online">Онлайн</span>':'<span class="status-pill offline">Офлайн</span>'}
                  </td>
                  <td>
                    ${u.id !== this.user.id ? `
                      <div style="display:flex;gap:5px;flex-wrap:wrap;">
                        <select class="form-input" style="padding:6px 10px;font-size:12px;width:auto;" onchange="App.setRole('${u.id}',this.value)">
                          <option value="user" ${r==='user'?'selected':''}>Пользователь</option>
                          <option value="moder" ${r==='moder'?'selected':''}>Модер</option>
                          <option value="admin" ${r==='admin'?'selected':''}>Админ</option>
                        </select>
                        <button class="btn ${isBanned?'btn-success':'btn-danger'} btn-sm btn-icon" onclick="App.toggleBan('${u.id}')"><i class="fas fa-${isBanned?'unlock':'ban'}"></i></button>
                        <button class="btn btn-warning btn-sm btn-icon" onclick="App.mute('${u.id}')"><i class="fas fa-volume-mute"></i></button>
                      </div>
                    ` : '<span class="text-muted">Вы</span>'}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  adminChannels() {
    const pending = this.data.channels.filter(c => c.verificationRequested && !c.verified);
    return `
      ${pending.length > 0 ? `
        <div class="card mb-24">
          <div class="card-header"><span class="card-title" style="color:var(--warning);"><i class="fas fa-clock"></i> Заявки на верификацию (${pending.length})</span></div>
          ${pending.map(ch => {
            const owner = this.data.users.find(u => u.id === ch.ownerId);
            const typeInfo = CHANNEL_TYPES[ch.type || 'empire'];
            return `
              <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg-input);border-radius:var(--radius-sm);margin-bottom:10px;">
                <img class="avatar-md" src="${esc(ch.avatar||CFG.DEF_AVATAR+encodeURIComponent(ch.name))}" onerror="this.src='${CFG.DEF_AVATAR}ch'">
                <div style="flex:1;">
                  <strong>${typeInfo.icon} ${esc(ch.name)}</strong>
                  <p class="text-muted" style="font-size:13px;">Тип: ${typeInfo.name} · Владелец: ${esc(owner?.username||'?')}</p>
                </div>
                <button class="btn btn-success btn-sm" onclick="App.verifyChannel('${ch.id}',true)"><i class="fas fa-check"></i></button>
                <button class="btn btn-danger btn-sm" onclick="App.verifyChannel('${ch.id}',false)"><i class="fas fa-times"></i></button>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
      <div class="card">
        <div class="card-header"><span class="card-title">Все каналы (${this.data.channels.length})</span></div>
        ${this.data.channels.map(ch => {
          const typeInfo = CHANNEL_TYPES[ch.type || 'empire'];
          return `
            <div style="display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--border);">
              <img class="avatar-sm" src="${esc(ch.avatar||CFG.DEF_AVATAR+encodeURIComponent(ch.name))}" onerror="this.src='${CFG.DEF_AVATAR}ch'">
              <span style="flex:1;font-weight:600;">${typeInfo.icon} ${esc(ch.name)} ${ch.verified?'<i class="fas fa-check-circle verified-badge"></i>':''}</span>
              <span class="channel-type-badge ${ch.type||'empire'}">${typeInfo.name}</span>
              <span class="text-muted">${(ch.subscribers||[]).length} подп.</span>
            </div>
          `;
        }).join('')}
        ${this.data.channels.length === 0 ? '<p class="text-muted">Каналов нет</p>' : ''}
      </div>
    `;
  },

  adminNews() {
    const pending = this.data.news.filter(n => n.status === 'pending');
    const approved = this.data.news.filter(n => n.status === 'approved');
    return `
      <div class="card">
        <div class="card-header">
          <span class="card-title"><i class="fas fa-newspaper"></i> Новости</span>
          ${this.user.role === 'admin' ? `<button class="btn btn-primary btn-sm" onclick="App.modal('createNews')"><i class="fas fa-plus"></i> Создать</button>` : ''}
        </div>
        ${pending.length > 0 ? `
          <h4 style="color:var(--warning);margin-bottom:12px;">Ожидают (${pending.length})</h4>
          ${pending.map(n => {
            let author = '?';
            if (n.authorType === 'channel') {
              const ch = this.data.channels.find(c => c.id === n.authorId);
              if (ch) author = CHANNEL_TYPES[ch.type||'empire'].icon + ' ' + ch.name;
            }
            return `
              <div style="padding:14px;background:var(--bg-input);border-radius:var(--radius-sm);margin-bottom:10px;">
                <div class="flex-between">
                  <div style="flex:1;min-width:0;">
                    <strong>${esc(n.title)}</strong>
                    <p class="text-muted" style="font-size:13px;">От: ${esc(author)} · ${timeAgo(n.timestamp)}</p>
                    <p style="font-size:14px;margin-top:8px;">${esc(n.content).substring(0,150)}...</p>
                    ${n.image ? `<img src="${esc(n.image)}" style="max-height:100px;border-radius:6px;margin-top:8px;" onerror="this.style.display='none'">` : ''}
                  </div>
                  <div style="display:flex;flex-direction:column;gap:5px;">
                    <button class="btn btn-success btn-sm btn-icon" onclick="App.approveNews('${n.id}',true)"><i class="fas fa-check"></i></button>
                    <button class="btn btn-danger btn-sm btn-icon" onclick="App.approveNews('${n.id}',false)"><i class="fas fa-times"></i></button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        ` : '<p class="text-muted mb-16">Нет ожидающих</p>'}
        <h4 style="margin:20px 0 12px;">Опубликованные (${approved.length})</h4>
        ${approved.slice(0,15).map(n => `
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
            <span style="flex:1;font-weight:500;">${esc(n.title)}</span>
            <span class="text-muted" style="font-size:13px;">${timeAgo(n.timestamp)}</span>
            <button class="btn btn-danger btn-sm btn-icon" onclick="App.deleteNews('${n.id}')"><i class="fas fa-trash"></i></button>
          </div>
        `).join('')}
      </div>
    `;
  },

  adminPolls() {
    return `
      <div class="card">
        <div class="card-header">
          <span class="card-title"><i class="fas fa-poll"></i> Голосования</span>
          <button class="btn btn-primary btn-sm" onclick="App.modal('createPoll')"><i class="fas fa-plus"></i> Создать</button>
        </div>
        ${this.data.polls.length === 0 ? '<p class="text-muted">Нет голосований</p>' : this.data.polls.map(p => {
          const total = p.options.reduce((s,o) => s + (o.votes||0), 0);
          return `
            <div style="padding:14px;background:var(--bg-input);border-radius:var(--radius-sm);margin-bottom:10px;">
              <div class="flex-between">
                <div>
                  <strong>${esc(p.question)}</strong>
                  <p class="text-muted" style="font-size:13px;">
                    <span class="status-pill ${p.status==='active'?'online':'offline'}">${p.status}</span> · ${total} голосов
                  </p>
                </div>
                <div style="display:flex;gap:5px;">
                  ${p.status==='active'?`<button class="btn btn-outline btn-sm" onclick="App.closePoll('${p.id}')"><i class="fas fa-lock"></i></button>`:''}
                  <button class="btn btn-danger btn-sm btn-icon" onclick="App.deletePoll('${p.id}')"><i class="fas fa-trash"></i></button>
                </div>
              </div>
              <div style="margin-top:10px;">
                ${p.options.map(o => {
                  const pct = total > 0 ? Math.round(o.votes/total*100) : 0;
                  return `<div style="font-size:13px;margin:3px 0;">${esc(o.text)}: <strong>${o.votes||0}</strong> (${pct}%)</div>`;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  adminSettings() {
    const s = this.data.settings;
    return `
      <div class="card">
        <div class="card-header"><span class="card-title"><i class="fas fa-cog"></i> Настройки</span></div>
        <div class="form-group">
          <label>Режим главной</label>
          <select class="form-input" id="setMode">
            <option value="info" ${s.mainPageMode==='info'?'selected':''}>Информация</option>
            <option value="news" ${s.mainPageMode==='news'?'selected':''}>Новость</option>
            <option value="poll" ${s.mainPageMode==='poll'?'selected':''}>Голосование</option>
          </select>
        </div>
        <div class="form-group">
          <label>Логотип (URL)</label>
          <input class="form-input" id="setLogo" value="${esc(s.logoUrl||'')}">
          <div class="file-upload" onclick="document.getElementById('fileInput').click()" style="margin-top:8px;">
            <i class="fas fa-upload"></i><div>Загрузить логотип</div>
          </div>
          <div id="logoPreview"></div>
        </div>
        <div class="form-group">
          <label>Заголовок Hero</label>
          <input class="form-input" id="setTitle" value="${esc(s.heroTitle||'')}">
        </div>
        <div class="form-group">
          <label>Подзаголовок</label>
          <input class="form-input" id="setSubtitle" value="${esc(s.heroSubtitle||'')}">
        </div>
        <div class="form-group">
          <label><i class="fas fa-users"></i> Ссылка на сообщество (для верификации)</label>
          <input class="form-input" id="setCommunityLink" value="${esc(s.communityLink||'')}" placeholder="https://t.me/your_community">
          <small class="text-muted" style="font-size:12px;">Эта ссылка будет показана пользователям при запросе верификации канала</small>
        </div>
        <div class="form-group">
          <label>Картинки Hero (по одной на строку)</label>
          <textarea class="form-input" id="setImages" rows="4">${(s.heroImages||[]).join('\n')}</textarea>
        </div>
        <div class="form-group">
          <label>О портале</label>
          <textarea class="form-input" id="setAbout">${esc(s.aboutText||'')}</textarea>
        </div>
        <div class="form-group">
          <label>Правила</label>
          <textarea class="form-input" id="setRules">${esc(s.rules||'')}</textarea>
        </div>
        <button class="btn btn-primary" onclick="App.saveSettings()"><i class="fas fa-save"></i> Сохранить</button>
      </div>
    `;
  },

  async setRole(uid, role) {
    if (this.user.role !== 'admin') { this.toast('Только админ', 'error'); this.go('admin'); return; }
    if (uid === this.user.id) { this.toast('Нельзя свою роль', 'error'); return; }
    const u = this.data.users.find(x => x.id === uid);
    if (!u) return;
    u.role = role;
    await this.save();
    this.toast('Роль изменена', 'success');
    this.go('admin');
  },

  async toggleBan(uid) {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const u = this.data.users.find(x => x.id === uid);
    if (!u) return;
    u.isBanned = u.isBanned ? 0 : 1;
    if (u.isBanned) u.status = 'offline';
    await this.save();
    this.toast(u.isBanned?'Забанен':'Разбанен', u.isBanned?'warning':'success');
    this.go('admin');
  },
  async mute(uid) {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const u = this.data.users.find(x => x.id === uid);
    if (!u) return;
    u.mutedUntil = Date.now()/1000 + CFG.MUTE_DURATION;
    await this.save();
    this.toast('Замучен на 1 час', 'warning');
    this.go('admin');
  },
  async verifyChannel(chId, approve) {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const ch = this.data.channels.find(x => x.id === chId);
    if (!ch) return;
    if (approve) {
      ch.verified = true;
      ch.verificationRequested = false;
      const owner = this.data.users.find(u => u.id === ch.ownerId);
      if (owner && !(owner.badges||[]).includes('badge6')) owner.badges.push('badge6');
    } else {
      ch.verificationRequested = false;
    }
    await this.save();
    this.toast(approve?'Верифицирован':'Отклонено', approve?'success':'warning');
    this.go('admin');
  },
  async approveNews(nId, approve) {
    const n = this.data.news.find(x => x.id === nId);
    if (!n) return;
    n.status = approve ? 'approved' : 'rejected';
    await this.save();
    this.toast(approve?'Опубликовано':'Отклонено', approve?'success':'warning');
    this.go('admin');
  },
  async deleteNews(nId) {
    if (!confirm('Удалить?')) return;
    this.data.news = this.data.news.filter(n => n.id !== nId);
    await this.save();
    this.toast('Удалено', 'success');
    this.go('admin');
  },
  async closePoll(pId) {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const p = this.data.polls.find(x => x.id === pId);
    if (!p) return;
    p.status = 'closed';
    await this.save();
    this.toast('Закрыто', 'info');
    this.go('admin');
  },
  async deletePoll(pId) {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    if (!confirm('Удалить?')) return;
    this.data.polls = this.data.polls.filter(p => p.id !== pId);
    await this.save();
    this.toast('Удалено', 'success');
    this.go('admin');
  },
  async saveSettings() {
    this.data.settings.mainPageMode = document.getElementById('setMode').value;
    this.data.settings.logoUrl = document.getElementById('setLogo').value;
    this.data.settings.heroTitle = document.getElementById('setTitle').value;
    this.data.settings.heroSubtitle = document.getElementById('setSubtitle').value;
    this.data.settings.communityLink = document.getElementById('setCommunityLink').value;
    this.data.settings.heroImages = document.getElementById('setImages').value.split('\n').map(s=>s.trim()).filter(Boolean);
    this.data.settings.aboutText = document.getElementById('setAbout').value;
    this.data.settings.rules = document.getElementById('setRules').value;
    const saved = await this.save();
    if (saved) { this.toast('Сохранено!', 'success'); this.go('admin'); }
  },

  // --- MODALS ---
  modal(type) {
    if (!this.requireAuth()) return;
    let html = '';
    switch (type) {
      case 'editProfile':
        html = `
          <div class="modal-header"><h2>Редактировать профиль</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group">
            <label>Аватар</label>
            <div class="file-upload" onclick="document.getElementById('fileInput').click()"><i class="fas fa-camera"></i><div>Загрузить</div></div>
            <div id="imgPreview"></div>
          </div>
          <div class="form-group">
            <label>Обложка</label>
            <div class="file-upload" onclick="document.getElementById('fileInput2').click()"><i class="fas fa-image"></i><div>Загрузить</div></div>
            <div id="imgPreview2"></div>
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select class="form-input" id="mStatus">
              <option value="online" ${this.user.status==='online'?'selected':''}>В сети</option>
              <option value="offline" ${this.user.status==='offline'?'selected':''}>Не в сети</option>
              <option value="busy" ${this.user.status==='busy'?'selected':''}>Занят</option>
            </select>
          </div>
          <div class="form-group">
            <label>Текст статуса</label>
            <input class="form-input" id="mStatusText" value="${esc(this.user.statusText||'')}">
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="App.saveProfile()"><i class="fas fa-save"></i> Сохранить</button>
        `;
        break;
        
      case 'newChannel':
        const type = this.selectedChannelType || 'empire';
        const typeInfo = CHANNEL_TYPES[type];
        html = `
          <div class="modal-header"><h2>${typeInfo.icon} Создать ${typeInfo.name.toLowerCase()}</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          
          <div class="form-group">
            <label>Тип канала</label>
            <div class="type-selector">
              ${Object.entries(CHANNEL_TYPES).map(([k, v]) => `
                <div class="type-option ${k===type?'selected':''}" onclick="App.selectChannelType('${k}')">
                  <div class="type-option-icon">${v.icon}</div>
                  <div class="type-option-name">${v.name}</div>
                  <div class="type-option-desc">${v.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="form-group"><label>Название</label><input class="form-input" id="mChName"></div>
          <div class="form-group"><label>Описание</label><textarea class="form-input" id="mChDesc"></textarea></div>
          
          <div class="form-group">
            <label>Аватар</label>
            <div class="file-upload" onclick="document.getElementById('fileInput').click()"><i class="fas fa-image"></i><div>Загрузить</div></div>
            <div id="imgPreview"></div>
          </div>
          <div class="form-group">
            <label>Обложка</label>
            <div class="file-upload" onclick="document.getElementById('fileInput2').click()"><i class="fas fa-image"></i><div>Загрузить обложку</div></div>
            <div id="imgPreview2"></div>
          </div>
          
          ${type === 'alliance' ? `
            <div class="alliance-code-box">
              <p class="text-muted"><i class="fas fa-key"></i> Код для вступления будет сгенерирован автоматически</p>
            </div>
          ` : ''}
          
          <button class="btn btn-primary" style="width:100%" onclick="App.createChannel()"><i class="fas fa-plus"></i> Создать</button>
        `;
        break;
        
      case 'editChannel':
        const ch = this.data.channels.find(c => c.ownerId === this.user.id);
        if (!ch) return;
        const chType = ch.type || 'empire';
        const chTypeInfo = CHANNEL_TYPES[chType];
        html = `
          <div class="modal-header"><h2>${chTypeInfo.icon} Настройки</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group"><label>Название</label><input class="form-input" id="mChName" value="${esc(ch.name)}"></div>
          <div class="form-group"><label>Описание</label><textarea class="form-input" id="mChDesc">${esc(ch.description||'')}</textarea></div>
          <div class="form-group">
            <label>Аватар</label>
            <div class="file-upload" onclick="document.getElementById('fileInput').click()"><i class="fas fa-camera"></i><div>Загрузить</div></div>
            <div id="imgPreview"></div>
          </div>
          <div class="form-group">
            <label>Обложка</label>
            <div class="file-upload" onclick="document.getElementById('fileInput2').click()"><i class="fas fa-image"></i><div>Загрузить</div></div>
            <div id="imgPreview2"></div>
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="App.saveChannel('${ch.id}')"><i class="fas fa-save"></i> Сохранить</button>
        `;
        break;
        
      case 'joinAlliance':
        const userCh = this.data.channels.find(c => c.ownerId === this.user.id && (c.type || 'empire') === 'empire');
        if (!userCh) {
          html = `
            <div class="modal-header"><h2>Вступление в союз</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
            <div class="empty-state"><i class="fas fa-crown"></i><p>Чтобы вступить в союз, создайте империю</p></div>
          `;
        } else if (userCh.allianceId) {
          const currentAlliance = this.data.channels.find(c => c.id === userCh.allianceId);
          html = `
            <div class="modal-header"><h2>🤝 Вы уже в союзе</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
            <div style="text-align:center;padding:20px;">
              <p class="text-muted mb-16">Ваша империя состоит в союзе:</p>
              <div style="font-weight:800;font-size:20px;color:var(--online);margin-bottom:20px;">${esc(currentAlliance?.name || '—')}</div>
              <button class="btn btn-danger" onclick="App.leaveAlliance('${userCh.id}')"><i class="fas fa-sign-out-alt"></i> Покинуть союз</button>
            </div>
          `;
        } else {
          html = `
            <div class="modal-header"><h2>🤝 Вступить в союз</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
            <p class="text-muted mb-16">Введите секретный код, который вам дал владелец союза</p>
            <div class="form-group">
              <label>Код союза</label>
              <input class="form-input" id="mAllianceCode" placeholder="ABC123" style="text-align:center;font-family:monospace;font-size:20px;letter-spacing:4px;text-transform:uppercase;">
            </div>
            <button class="btn btn-primary" style="width:100%" onclick="App.joinAlliance()"><i class="fas fa-handshake"></i> Вступить</button>
          `;
        }
        break;
        
      case 'newPost':
        html = `
          <div class="modal-header"><h2>Новая тема</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group"><label>Заголовок</label><input class="form-input" id="mPostTitle"></div>
          <div class="form-group"><label>Содержание</label><textarea class="form-input" id="mPostContent" rows="6"></textarea></div>
          <button class="btn btn-primary" style="width:100%" onclick="App.createPost()"><i class="fas fa-paper-plane"></i> Создать</button>
        `;
        break;
        
      case 'suggestNews':
        html = `
          <div class="modal-header"><h2>📰 Предложить новость</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group"><label>Заголовок</label><input class="form-input" id="mNewsTitle"></div>
          <div class="form-group"><label>Текст</label><textarea class="form-input" id="mNewsContent" rows="5"></textarea></div>
          <div class="form-group">
            <label>Главное изображение</label>
            <div class="file-upload" onclick="document.getElementById('fileInput').click()"><i class="fas fa-image"></i><div>Загрузить</div></div>
            <div id="imgPreview"></div>
          </div>
          <div class="form-group">
            <label>Доказательство (опционально)</label>
            <div class="file-upload" onclick="document.getElementById('fileInput2').click()"><i class="fas fa-check-double"></i><div>Загрузить</div></div>
            <div id="imgPreview2"></div>
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="App.suggestNews()"><i class="fas fa-paper-plane"></i> Отправить</button>
        `;
        break;
        
      case 'createNews':
        html = `
          <div class="modal-header"><h2>Создать новость</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group"><label>Заголовок</label><input class="form-input" id="mNewsTitle"></div>
          <div class="form-group"><label>Текст</label><textarea class="form-input" id="mNewsContent" rows="5"></textarea></div>
          <div class="form-group">
            <label>Изображение</label>
            <div class="file-upload" onclick="document.getElementById('fileInput').click()"><i class="fas fa-image"></i><div>Загрузить</div></div>
            <div id="imgPreview"></div>
          </div>
          <div class="form-group">
            <label>Доказательство</label>
            <div class="file-upload" onclick="document.getElementById('fileInput2').click()"><i class="fas fa-check-double"></i><div>Загрузить</div></div>
            <div id="imgPreview2"></div>
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="App.createNewsAdmin()"><i class="fas fa-plus"></i> Опубликовать</button>
        `;
        break;
        
      case 'createPoll':
        html = `
          <div class="modal-header"><h2>Создать голосование</h2><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button></div>
          <div class="form-group"><label>Вопрос</label><input class="form-input" id="mPollQ"></div>
          <div id="pollOpts">
            <div class="form-group"><label>Вариант 1</label><input class="form-input poll-opt"></div>
            <div class="form-group"><label>Вариант 2</label><input class="form-input poll-opt"></div>
          </div>
          <button class="btn btn-outline btn-sm mb-16" onclick="App.addPollOpt()"><i class="fas fa-plus"></i> Добавить</button>
          <button class="btn btn-primary" style="width:100%" onclick="App.createPoll()"><i class="fas fa-poll"></i> Запустить</button>
        `;
        break;
    }
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modal').classList.add('active');
    this.bindFileInputs();
  },

  selectChannelType(type) {
    this.selectedChannelType = type;
    this.modal('newChannel');
  },

  async joinAlliance() {
    const code = (document.getElementById('mAllianceCode').value || '').trim().toUpperCase();
    if (!code) return this.toast('Введите код', 'error');
    
    const userCh = this.data.channels.find(c => c.ownerId === this.user.id && (c.type || 'empire') === 'empire');
    if (!userCh) return this.toast('У вас нет империи', 'error');
    if (userCh.allianceId) return this.toast('Вы уже в союзе', 'error');
    
    const alliance = this.data.channels.find(c => c.type === 'alliance' && c.allianceCode === code);
    if (!alliance) return this.toast('Неверный код', 'error');
    
    // Добавляем империю в союз
    if (!alliance.members) alliance.members = [];
    alliance.members.push(userCh.id);
    userCh.allianceId = alliance.id;
    
    // Достижения
    if (!(this.user.badges||[]).includes('badge9')) this.user.badges.push('badge9');
    
    // Активность
    this.addActivity('join', `<strong>${esc(this.user.username)}</strong> вступил в союз <strong>${esc(alliance.name)}</strong>`);
    
    const saved = await this.save();
    if (saved) {
      this.closeModal();
      this.toast(`🤝 Вы вступили в союз "${alliance.name}"!`, 'success');
      this.go('channel/' + alliance.id);
    }
  },

  async leaveAlliance(chId) {
    const ch = this.data.channels.find(c => c.id === chId);
    if (!ch) return;
    if (!confirm('Покинуть союз?')) return;
    
    const alliance = this.data.channels.find(c => c.id === ch.allianceId);
    if (alliance && alliance.members) {
      alliance.members = alliance.members.filter(id => id !== ch.id);
    }
    ch.allianceId = null;
    
    const saved = await this.save();
    if (saved) {
      this.closeModal();
      this.toast('Вы покинули союз', 'info');
      this.go('channel/' + ch.id);
    }
  },

  bindFileInputs() {
    const f1 = document.getElementById('fileInput');
    const f2 = document.getElementById('fileInput2');
    if (f1) {
      f1.onchange = async e => {
        const f = e.target.files[0]; if (!f) return;
        this.pendingFile = f;
        const prev = document.getElementById('imgPreview') || document.getElementById('logoPreview');
        if (prev) {
          const reader = new FileReader();
          reader.onload = () => { prev.innerHTML = `<img src="${reader.result}" class="img-preview">`; };
          reader.readAsDataURL(f);
        }
        if (document.getElementById('setLogo')) {
          this.toast('Загрузка...', 'info');
          const url = await API.uploadImage(f);
          document.getElementById('setLogo').value = url;
          this.toast('Загружено!', 'success');
          this.pendingFile = null;
        }
      };
    }
    if (f2) {
      f2.onchange = e => {
        const f = e.target.files[0]; if (!f) return;
        this.pendingFile2 = f;
        const prev = document.getElementById('imgPreview2');
        if (prev) {
          const reader = new FileReader();
          reader.onload = () => { prev.innerHTML = `<img src="${reader.result}" class="img-preview">`; };
          reader.readAsDataURL(f);
        }
      };
    }
  },

  openModal(html) {
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modal').classList.add('active');
  },
  
  closeModal() {
    document.getElementById('modal').classList.remove('active');
    this.pendingFile = null;
    this.pendingFile2 = null;
  },

  async saveProfile() {
    this.user.status = document.getElementById('mStatus').value;
    this.user.statusText = document.getElementById('mStatusText').value;
    if (this.pendingFile) { this.user.avatar = await API.uploadImage(this.pendingFile); }
    if (this.pendingFile2) { this.user.cover = await API.uploadImage(this.pendingFile2); }
    this.pendingFile = null; this.pendingFile2 = null;
    const saved = await this.save();
    if (saved) {
      this.updateHeader();
      this.closeModal();
      this.toast('Сохранено!', 'success');
      this.go('profile');
    }
  },

  async createChannel() {
    const name = document.getElementById('mChName').value.trim();
    if (!name) return this.toast('Введите название', 'error');
    if (this.data.channels.some(c => c.ownerId === this.user.id)) return this.toast('У вас уже есть канал', 'error');
    
    const type = this.selectedChannelType || 'empire';
    let avatar = CFG.DEF_AVATAR + encodeURIComponent(name);
    let cover = '';
    
    if (this.pendingFile) { avatar = await API.uploadImage(this.pendingFile); }
    if (this.pendingFile2) { cover = await API.uploadImage(this.pendingFile2); }
    
    const ch = {
      id: genId(), ownerId: this.user.id,
      name, description: document.getElementById('mChDesc').value.trim(),
      avatar, cover, type,
      verified: false, verificationRequested: false,
      subscribers: []
    };
    
    if (type === 'alliance') {
      ch.allianceCode = genAllianceCode();
      ch.members = [];
      if (!(this.user.badges||[]).includes('badge10')) this.user.badges.push('badge10');
    }
    
    this.data.channels.push(ch);
    this.user.channelId = ch.id;
    if (!(this.user.badges||[]).includes('badge5')) this.user.badges.push('badge5');
    
    this.addActivity('empire', `<strong>${esc(this.user.username)}</strong> создал ${CHANNEL_TYPES[type].name.toLowerCase()} <strong>${esc(name)}</strong>`);
    
    const saved = await this.save();
    this.pendingFile = null; this.pendingFile2 = null;
    
    if (saved) {
      this.closeModal();
      this.toast(`${CHANNEL_TYPES[type].icon} Канал создан!`, 'success');
      this.go('channel/' + ch.id);
    } else {
      this.data.channels.pop();
      this.user.channelId = null;
    }
  },

  async saveChannel(chId) {
    const ch = this.data.channels.find(c => c.id === chId);
    if (!ch) return;
    ch.name = document.getElementById('mChName').value.trim() || ch.name;
    ch.description = document.getElementById('mChDesc').value.trim();
    if (this.pendingFile) { ch.avatar = await API.uploadImage(this.pendingFile); }
    if (this.pendingFile2) { ch.cover = await API.uploadImage(this.pendingFile2); }
    this.pendingFile = null; this.pendingFile2 = null;
    const saved = await this.save();
    if (saved) { this.closeModal(); this.toast('Сохранено!', 'success'); this.go('channel/' + chId); }
  },

  async createPost() {
    const title = document.getElementById('mPostTitle').value.trim();
    const content = document.getElementById('mPostContent').value.trim();
    if (!title || !content) return this.toast('Заполните поля', 'error');
    if (this.checkSpam(title + content, 'forum')) {
      this.user.mutedUntil = Date.now()/1000 + CFG.MUTE_DURATION;
      await this.save();
      return this.toast('🚫 Мут', 'error');
    }
    const post = {
      id: genId(), authorId: this.user.id,
      title, content,
      likes: [], dislikes: [], comments: [],
      reactions: {}, userReactions: {},
      timestamp: Date.now()/1000
    };
    this.data.forumPosts.push(post);
    if (!(this.user.badges||[]).includes('badge2')) this.user.badges.push('badge2');
    this.addActivity('post', `<strong>${esc(this.user.username)}</strong> создал тему <strong>${esc(title)}</strong>`);
    const saved = await this.save();
    if (saved) { this.closeModal(); this.toast('Создано!', 'success'); this.go('forum'); }
    else { this.data.forumPosts.pop(); }
  },

  async suggestNews() {
    const title = document.getElementById('mNewsTitle').value.trim();
    const content = document.getElementById('mNewsContent').value.trim();
    if (!title || !content) return this.toast('Заполните поля', 'error');
    const ch = this.data.channels.find(c => c.ownerId === this.user.id && c.verified && (c.type === 'news' || c.type === 'empire'));
    if (!ch) return this.toast('Нужен верифицированный канал', 'error');
    
    let img = '', evidence = '';
    if (this.pendingFile) { img = await API.uploadImage(this.pendingFile); }
    if (this.pendingFile2) { evidence = await API.uploadImage(this.pendingFile2); }
    
    const news = {
      id: genId(), title, content,
      image: img, evidenceImage: evidence,
      authorId: ch.id, authorType: 'channel',
      status: 'pending', likes: [], timestamp: Date.now()/1000
    };
    this.data.news.push(news);
    if (!(this.user.badges||[]).includes('badge4')) this.user.badges.push('badge4');
    this.addActivity('news', `<strong>${esc(this.user.username)}</strong> предложил новость <strong>${esc(title)}</strong>`);
    
    const saved = await this.save();
    this.pendingFile = null; this.pendingFile2 = null;
    
    if (saved) { this.closeModal(); this.toast('Отправлено!', 'success'); this.go('news'); }
    else {
      const idx = this.data.news.findIndex(n => n.id === news.id);
      if (idx >= 0) this.data.news.splice(idx, 1);
    }
  },

  async createNewsAdmin() {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const title = document.getElementById('mNewsTitle').value.trim();
    const content = document.getElementById('mNewsContent').value.trim();
    if (!title || !content) return this.toast('Заполните поля', 'error');
    
    let img = '', evidence = '';
    if (this.pendingFile) { img = await API.uploadImage(this.pendingFile); }
    if (this.pendingFile2) { evidence = await API.uploadImage(this.pendingFile2); }
    
    this.data.news.push({
      id: genId(), title, content,
      image: img, evidenceImage: evidence,
      authorId: this.user.id, authorType: 'admin',
      status: 'approved', likes: [], timestamp: Date.now()/1000
    });
    this.addActivity('news', `<strong>${esc(this.user.username)}</strong> опубликовал новость <strong>${esc(title)}</strong>`);
    
    const saved = await this.save();
    this.pendingFile = null; this.pendingFile2 = null;
    if (saved) { this.closeModal(); this.toast('Опубликовано!', 'success'); this.go('admin'); }
  },

  addPollOpt() {
    const c = document.getElementById('pollOpts');
    const n = c.querySelectorAll('.poll-opt').length + 1;
    const d = document.createElement('div');
    d.className = 'form-group';
    d.innerHTML = `<label>Вариант ${n}</label><input class="form-input poll-opt">`;
    c.appendChild(d);
  },

  async createPoll() {
    if (this.user.role !== 'admin') return this.toast('Только админ', 'error');
    const q = document.getElementById('mPollQ').value.trim();
    const opts = [...document.querySelectorAll('.poll-opt')].map(i => i.value.trim()).filter(Boolean);
    if (!q || opts.length < 2) return this.toast('Нужен вопрос и 2 варианта', 'error');
    this.data.polls.forEach(p => { if (p.status === 'active') p.status = 'closed'; });
    this.data.polls.push({
      id: genId(), question: q,
      options: opts.map(t => ({text: t, votes: 0})),
      votedUsers: [], status: 'active', timestamp: Date.now()/1000
    });
    this.data.settings.mainPageMode = 'poll';
    const saved = await this.save();
    if (saved) { this.closeModal(); this.toast('Запущено!', 'success'); this.go('admin'); }
  },

  toggleTheme() {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    localStorage.setItem('ooi_theme', t);
    document.getElementById('themeIcon').className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  },

  toggleMobile() { document.getElementById('mobileNav').classList.toggle('active'); },
  onMobileOverlay(e) { if (e.target.id === 'mobileNav') document.getElementById('mobileNav').classList.remove('active'); },

  toast(msg, type = 'info') {
    const c = document.getElementById('toasts');
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.innerHTML = `<i class="fas fa-${type==='success'?'check-circle':type==='error'?'exclamation-circle':type==='warning'?'exclamation-triangle':'info-circle'}"></i> ${esc(msg)}`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }
};

document.getElementById('modal').onclick = e => { if (e.target.id === 'modal') App.closeModal(); };
const savedTheme = localStorage.getItem('ooi_theme') || 'dark';
document.documentElement.dataset.theme = savedTheme;
document.getElementById('themeIcon').className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
App.init();
</script>
</body>
</html>
