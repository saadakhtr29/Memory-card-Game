self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return Promise.all([
        cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/manifest.json'
        ]),
        fetch('/images/')
          .then(response => response.text())
          .then(html => {
            const images = Array.from(html.matchAll(/href="([^"]+)"/g), m => m[1]);
            return cache.addAll(images.map(image => `/images/${image}`));
          })
      ]);
    })
  );
});