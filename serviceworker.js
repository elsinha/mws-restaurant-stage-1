const CACHE = 'cache';
let urlCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/img',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/js/register.js'
];

self.addEventListener('install', function(event) {
  console.log('installing');
  caches.open(CACHE).then(function(cache) {
    console.log('cache');
    return cache.addAll(urlCache);
  });
});

self.addEventListener('fetch', function(event) {
  console.log('fetch');
  event.waitUntil(
    event.respondWith(
      caches.match(event.request).then(response => {
        console.log('match');
        return response || fetch(event.request).then(resp => {
          return caches.open(CACHE).then(cache => {
            cache.put(event.request, resp.clone());
            return resp;
          });
        });
      })
    )
  );
});

//excertp from
// ttps://developer.mozilla.org/en-US/docs/Web/API/Cache/match
