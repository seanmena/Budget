self.addEventListener('install', event => {
    console.log('Service worker installed');
    event.waitUntil(caches.open('budget-cache').then(cache => {
      return cache.addAll(['.', 'index.html', 'manifest.json']);
    }));
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });