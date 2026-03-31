const CACHE_NAME = 'tapcarta-cache-v1-1-4-test-disabled';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', () => {
  // V1.1.4 TEST
  // Service worker volontairement désactivé pour diagnostic Samsung Internet.
  // Aucun fetch intercepté, aucun cache utilisé.
});
