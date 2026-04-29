const CACHE_NAME = 'yash-portfolio-v4';
const assets = [
  '/',
  '/index.html',
  '/blog.html',
  '/style.css',
  '/main.js',
  '/yash.jpg',
  '/favicon.svg',
];

// Install Event
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activate Event
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // EXCLUDE Firebase and external APIs from caching
  if (url.hostname.includes('firebase') || 
      url.hostname.includes('firestore') || 
      url.hostname.includes('googleapis') ||
      url.hostname.includes('google-analytics') ||
      e.request.method !== 'GET') {
    return; // Let the browser handle these normally
  }

  // Strategy: Network First for HTML, CSS, JS
  if (url.pathname.endsWith('.html') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js') || url.pathname === '/') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (!res || res.status !== 200 || res.type !== 'basic') return res;
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, resClone);
          });
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Strategy: Cache First for Images, Fonts, etc.
    e.respondWith(
      caches.match(e.request).then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        return fetch(e.request).then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
  }
});

