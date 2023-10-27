const cacheName = 'cache-v4'; // Cache version

// Event listener for the 'install' event
self.addEventListener('install', event => {
    // Log that the service worker is installing
    console.log('Installing');

    // Wait until the cache is opened and assets are added
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            // Log that we are caching assets
            console.log('Caching');
            return cache.addAll([
                // Cache the following assets
                '/',
                '/index.html',
                '/images/Avatar.png',
                '/static/js/bundle.js',
                '/static/media/JannickAvatar.c6b01ce117b441ca64f4.png',
                '/static/media/Jannick.28e1053f8db6882505a1.jpg',
                '/static/media/CodeIcon.575af008878ffae52c142b0e714f3111.svg',
                '/static/media/Logo.199def0cd275e38f1b42.png',
                '/static/media/DesignIcon.f57e5e9fab71dab089f2367fc9983ab7.svg',
                '/static/media/ProjectsIcon.0914bb1496e5afc107cf7a8c73f5e59b.svg',
                '/static/media/cucode.c82c5734549efcdf8853.png',
                '/static/media/T-Shop.3072f3b1fc4cdcbd8b54.jpg',
                '/static/media/spicy.2b9d3d264de3ee864d21.jpg',
                '/static/media/globalGoals.0aec8e12fbcc916a3fce.png',
                '/static/media/GPT-3.26ca2970fdbcb2a86e12.jpg',
                '/manifest.json',
                '/Logo.png',
                '/logo/android-launchericon-144-144.png'
            ]);
        })
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
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching', event.request.url);

    if (event.request.method !== 'GET') {
        // Do not cache POST requests, just fetch them from the network
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(networkResponse => {
                return caches.open(cacheName).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    limitCacheSize(cacheName, 30);
                    return networkResponse;
                });
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
};