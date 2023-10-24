const cacheName = 'cache-v3'; // Cache version

// Event listener for the 'install' event
self.addEventListener('install', event => {
    // Log that the service worker is installing
    console.log('Installing');

    // Wait until the cache is opened and assets are added
    event.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            console.log('Caching');
            try {
                const resources = [
                    // Cache the following assets
                    '/',
                    '/index.html',
                    '/static/js/bundle.js',
                    '/manifest.json',
                ];
                await cache.addAll(resources);
            } catch (error) {
                console.error('Failed to cache one or more resources:', error);
            }
        })()
    );
});

// Event listener for the 'activate' event
self.addEventListener('activate', event => {
    // Log that the service worker is activating
    console.log('Activating');

    // Wait until caches are checked and old caches are deleted
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                // Iterate through existing cache names
                cacheNames.map(existingCacheName => {
                    if (existingCacheName !== cacheName) {
                        // Log and delete old caches
                        console.log('Deleting old cache', existingCacheName);
                        return caches.delete(existingCacheName);
                    }
                })
            ).then(() => {
                // After deleting old caches, you can call the limitCacheSize function
                limitCacheSize(cacheName, 30);  // Limit the cache size to 30 items
            });
        })
    );
});

// Event listener for the 'fetch' event
self.addEventListener('fetch', event => {
    // Log that the service worker is fetching a resource
    console.log('Service Worker: Fetching', event.request.url);

    // Respond to the fetch event
    event.respondWith(
        caches.match(event.request).then(response => {
            // Check if the requested resource is in the cache
            if (response) {
                return response;
            }

            // If the requested resource is not in the cache, return a custom fallback page
            return fetch(event.request).then(networkResponse => {
                // If not in the cache, add it to the cache and limit cache size
                return caches.open(cacheName).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    limitCacheSize(cacheName, 30);  // Limit the cache size to 30 items
                    return networkResponse;
                });
            }).catch(error => {
                // If the network request fails, return a custom fallback page
                return caches.match('/fallback/fallback.html');
            });
        })
    );
});


// Function to limit the cache size
const limitCacheSize = (cacheName, numberOfAllowedFiles) => {
    caches.open(cacheName).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > numberOfAllowedFiles) {
                // Delete the oldest cached files until the limit is met
                cache.delete(keys[0]).then(() => limitCacheSize(cacheName, numberOfAllowedFiles));
            }
        });
    });
}