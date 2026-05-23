// Unique Version Control Matrix Identifier Layer
const CACHE_NAME = 'tarjuman-v1';

// Static App Routing Pipeline Asset Node Array
const STATIC_ASSETS = [
  'home.html',
  'about.html',
  'order.html',
  'support.html',
  'manifest.json',
  'assets/icon-192.png',
  'assets/icon-512.png'
];

// SW Installation Lifecycle Worker Trigger Block
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Hydrating System Resource Cache Architecture');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Cache Sanitization Layer - Flushes Corrupted or Deprecated Ledger Versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Purging Deprecated Cache Ledger:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network Interception Gateway Hook (Cache First Operational Model)
self.addEventListener('fetch', (event) => {
  // Exclude third-party dynamic live-chat integrations like Tawk.to from offline interception
  if (event.request.url.includes('tawk.to') || event.request.url.includes('whatsapp')) {
    return; 
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Yield instant asset return via local storage layer
      }
      return fetch(event.request).catch(() => {
        // Fallback interface logic if network completely disconnects
        return caches.match('home.html');
      });
    })
  );
});