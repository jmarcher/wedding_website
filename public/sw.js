function showNotification(message) {
    if (Notification.permission === 'granted') {
        self.getRegistration().then(function (registration) {
            registration.showNotification('Vibration Sample', {
                body: message,
                icon: '../images/touch/chrome-touch-icon-192x192.png',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: 'vibration-sample'
            });
        });
    }
}

// Listen for install event, set callback
self.addEventListener('install', function (event) {
    var offlinePage = new Request('offline.html');
    event.waitUntil(fetch(offlinePage).then(function (response) {
        return caches.open('joaquin_rebecca_offline').then(function (cache) {
            return cache.put(offlinePage, response);
        });
    }));
});
self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function (event) {
    // Do not use cache. Online mode only
    event.respondWith(fetch(event.request).catch(function (error) {
        return caches.open('joaquin_rebecca_offline').then(function (cache) {
            return cache.match('offline.html');
        })
    }));
});

self.addEventListener('push', function (event) {
    if (event.data) {
          var options = {
              body: event.data.text(),
              icon: '/assets/images/joaquin_und_rebecca_turists.png',
              vibrate: [100, 50, 100],
              data: {
                  dateOfArrival: Date.now(),
                  primaryKey: '2'
              },
              actions: [{
                      action: 'explore',
                      title: 'Explore this new world',
                      icon: 'images/checkmark.png'
                  },
                  {
                      action: 'close',
                      title: 'Close',
                      icon: 'images/xmark.png'
                  },
              ]
          };
          event.waitUntil(
              self.registration.showNotification('Hello world!', options)
          );
          
        console.log('This push event has data: ', event.data.text());
    } else {
        console.log('This push event has no data.');
    }
});