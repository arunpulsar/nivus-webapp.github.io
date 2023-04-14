self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('ri-app-offline').then(function(cache) {
        return cache.addAll([
          '/ri-app/',
          '/ri-app/index.html',
          '/ri-app/index.js',
          '/ri-app/sw.js',
          '/ri-app/css/element.css',
          '/ri-app/css/font-awesome.min.css',
          '/ri-app/css/jquery-impromptu.css',
          '/ri-app/css/jura.css',
          '/ri-app/css/normalize.min.css',
          '/ri-app/css/skel-noscript.css',
          '/ri-app/css/slider.css',
          '/ri-app/css/style.css',
          '/ri-app/css/style-desktop.css',
          '/ri-app/css/style-lr.css',
          '/ri-app/fonts/fontawesome-webfont.eot',
          '/ri-app/fonts/fontawesome-webfont.svg',
          '/ri-app/fonts/fontawesome-webfont.ttf',
          '/ri-app/fonts/fontawesome-webfont.woff',
          '/ri-app/fonts/fontawesome-webfont.woff2',
          '/ri-app/fonts/segoeui.ttf',
          '/ri-app/fonts/segoeui.woff',
          '/ri-app/fonts/segoeui.woff2',
          '/ri-app/fonts/segoeuibold.ttf',
          '/ri-app/fonts/segoeuibold.woff',
          '/ri-app/fonts/segoeuibold.woff2',
          '/ri-app/fonts/segoeuisemibold.ttf',
          '/ri-app/fonts/segoeuisemibold.woff',
          '/ri-app/fonts/segoeuisemibold.woff2',
          '/ri-app/js/bootstrap.min.js',
          '/ri-app/js/chart.js',
          '/ri-app/js/ekko-lightbox.js',
          '/ri-app/js/jquery-2.1.1.min.js',
          '/ri-app/js/jquery-impromptu.js',
		      '/ri-app/js/lang.js',
          '/ri-app/js/script-lr2.js',
          '/ri-app/js/slider.js',
          '/ri-app/img/pulsaricon-rgb64_2.png',
          '/ri-app/img/nivuslogo_white1.png',
          '/ri-app/img/tank1.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', e => {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(response => response || fetch(e.request))
     );
   });