// Service Workers Events: install, activate, message; Functional Events: fetch, sync, push.

// 2. Install and activate: populating your cache
this.addEventListener('install', function (event) {
    event.waitUntil( // only if success sw will be install
        caches.open('v1').then(function (cache) { // create new cache
            return cache.addAll([
                '/JS_algorithms/nice_skills/service_workers/',
                // ... put all files we need in cache
            ])
        })
    )
});

// 3. What to do with cache resourses
this.addEventListener('fetch', function (event) { // will invoke each time when needed data requested
    var response;
    event.respondWith(caches.match(event.request).then(function () {
            return fetch(event.request)
        }).then(function (r) {
            response = r;
            caches.open('v1').then(function (cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        }).catch(function () {
            return caches.match('/JS_algorithms/nice_skills/service_workers/')
        }));
});

// 4. Clear unnecessary information from cache
this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});