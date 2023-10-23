const cacheName = 'cache-v2';

self.addEventListener('install', event => {
    console.log('Installing');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Caching');
            return cache.addAll([
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
                '/logo/android-launchericon-144-144.png',
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activating');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(existingCacheName => {
                    if (existingCacheName !== cacheName) {
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
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});