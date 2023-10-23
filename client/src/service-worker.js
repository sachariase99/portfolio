const cacheName = 'cache-v1'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/'
            ])
        })
    )
})