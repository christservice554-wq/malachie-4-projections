/* Service Worker — Malachie 4 Projections v3e
   Stratégie : pages HTML = RÉSEAU D'ABORD (mises à jour toujours reçues),
   données (Bible/chants/brochures/assets) = cache d'abord (hors-ligne garanti) */
const CACHE = 'm4p-v3h';
const SHELL = ['./', './index.html', './manifest.json',
  './assets/logo.png', './assets/logo-192.png', './assets/apple-touch-icon.png',
  './data/bible.js', './data/chants.js', './data/brochures-index.js', './assets/fonts/NotoSerif.ttf'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const chemin = new URL(e.request.url).pathname;
  const estPage = /(\.html?|\/)$/.test(chemin) && !chemin.includes('/data/');
  if (estPage) {
    /* RÉSEAU D'ABORD : une nouvelle version d'app arrive toujours */
    e.respondWith(
      fetch(e.request).then(rep => {
        const copie = rep.clone();
        caches.open(CACHE).then(c => c.put(e.request, copie));
        return rep;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }
  /* cache d'abord pour les données */
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
