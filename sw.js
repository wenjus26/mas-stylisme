const CACHE_NAME = 'mas-stylisme-v1';
const ASSETS = [
  './',
  './index.html',
  './boutique.html',
  './details-produit.html',
  './design-sur-mesure.html',
  './academie.html',
  './application.html',
  './mon-compte.html',
  './atelier-admin.html',
  './manifest.json',
  './assets/hero_benin_fashion.png',
  './assets/tailor_kanvo_detail.png',
  './assets/collection_charcoal_kanvo.png',
  './assets/collection_gold_silk.png',
  './assets/app_showcase_mockup.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
