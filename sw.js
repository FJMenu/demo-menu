const CACHE_NAME = 'tapcarta-cache-v1-1-5';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', () => {
  // V1.1.5 :
  // service worker minimal pour valider la PWA,
  // sans interception fetch, sans stratégie de cache agressive.
});
