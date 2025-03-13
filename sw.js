self.addEventListener("install", (event) => {
  event.waitUntil(
   caches.open("app-cache").then((cache) => {
      return cache.addAll([
       "/jaobywatel/",
        "/jaobywatel/index.html",
        "/jaobywatel/style.css",
        "/jaobywatel/script.js",
       "/jaobywatel/icon-192.png",
        "/jaobywatel/icon-512.png"
      ]);
   })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
     return response || fetch(event.request);
    })
  );
});
