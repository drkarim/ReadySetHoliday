// Holiday Lists service worker: keeps the app available offline.
// Serves the cached copy instantly and refreshes it in the background when online.
const CACHE = 'holiday-lists-v3';
const CORE = ['./', './index.html'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's HTTP cache so a new version is really new.
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // Published lists (short links): always try the network first so edits show up, fall back to the cache offline.
  if (url.pathname.includes('/lists/')) {
    e.respondWith(caches.open(CACHE).then(cache => fetch(req, { cache: 'no-store' }).then(res => {
      if (res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => cache.match(req).then(hit => hit || Response.error()))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true }) ||
      (req.mode === 'navigate' ? await cache.match('./index.html') : undefined);
    const key = url.origin + url.pathname;
    const fresh = fetch(key, { cache: 'no-cache' }).then(res => {
      if (res.ok) cache.put(key, res.clone());
      return res;
    }).catch(() => hit);
    if (hit) { e.waitUntil(fresh.catch(() => {})); return hit; }
    return fresh;
  }));
});
