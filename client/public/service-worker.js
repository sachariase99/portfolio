const cacheName = 'cache-v1';

// Installation Event: Caching static assets
self.addEventListener('install', event => {
    console.log('Installing');
    event.waitUntil(
        // Open a cache with the specified cacheName
        caches.open(cacheName).then(cache => {
            console.log('Caching');
            // Add specified static assets to the cache
            return cache.addAll([
                '/',
                '/index.html',
                '/static/css/main.css',
                '/static/js/main.js',
                '/images/logo.png',
            ]);
        })
    );
});

// Activation Event: Remove old caches
self.addEventListener('activate', event => {
    console.log('Activating');
    event.waitUntil(
        // Get a list of all cache names
        caches.keys().then(cacheNames => {
            return Promise.all(
                // Iterate through each cache name
                cacheNames.map(existingCacheName => {
                    // Check if the cache name is not the current cacheName
                    if (existingCacheName !== cacheName) {
                        console.log('Deleting old cache', existingCacheName);
                        // Delete the old cache
                        return caches.delete(existingCacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event: Serve cached assets or fetch from the network
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching', event.request.url);
    event.respondWith(
        // Try to match the request with a cached response
        caches.match(event.request).then(response => {
            // Return the cached response, or fetch from the network if not found in the cache
            return response || fetch(event.request);
        })
    );
});