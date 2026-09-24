/* Service Worker — Malachie 4 Projections v3 (hors-ligne progressif) */
const CACHE = 'm4p-v3b' /* v3b : compteurs + embarquement complet */;
const SHELL = ['./', './index.html', './manifest.json',
  './assets/logo.png', './assets/logo-192.png', './assets/apple-touch-icon.png',
  './data/bible.js', './data/chants.js', './data/brochures-index.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
/* brochures embarquées à la demande puis gardées en cache (usage 100 % hors-ligne ensuite) */
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit =>
      hit || fetch(e.request).then(rep => {
        if (e.request.method === 'GET') {
          const copie = rep.clone();
          caches.open(CACHE).then(c => c.put(e.request, copie));
        }
        return rep;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
