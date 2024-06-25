'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bab9fd040c4483e42da8d2074aa8f1b5",
"assets/AssetManifest.bin.json": "944ab0b465707bb3e5cd7ed3a76b79e4",
"assets/AssetManifest.json": "042f49f692da951d4ae17f0246894be8",
"assets/assets/fonts/Barlow-Bold.ttf": "7130fdb0a3f94088119aa0f96db9b08b",
"assets/assets/fonts/Barlow-Regular.ttf": "2cce8c806c2d2e03adc2b239ae316b76",
"assets/assets/fonts/Barlow-SemiBold.ttf": "ede02f48d8db5bdf524324f2ba4b9cd9",
"assets/assets/fonts/Quicksand-Medium.ttf": "30b2cad3af7f2ca3686bbb94d8c767db",
"assets/assets/images/all.png": "18b84985ba7fc53f61ba0af39309bd04",
"assets/assets/images/camera.png": "7d839276c84211099756c6c78af01fdf",
"assets/assets/images/coming_soon.jpg": "ff496af1b9e4e14f3e5e2fad2fcd4c80",
"assets/assets/images/female.png": "6cbe9a1fe87766d8463936dd3c5ef50f",
"assets/assets/images/male.png": "acc378e282e3c3faae41d42298c91b92",
"assets/assets/images/matchme.png": "08af72bd44b533db99ca1ec809f5cb0f",
"assets/assets/images/poster.png": "6c31f8a41313ee147a91adf08119c6b1",
"assets/assets/images/share.png": "b253a3edc101f5887b4d1c49efda4a01",
"assets/assets/images/update.png": "392718a740d4a6614eeba6aa258b23a3",
"assets/assets/zodiac/aquarius.png": "27c82b6ca67c6763c9a125affe670e4f",
"assets/assets/zodiac/aries.png": "ab98bdda066fb6c177b836eccaf097d4",
"assets/assets/zodiac/cancer.png": "f347d4459ab15634ed60d25035df4691",
"assets/assets/zodiac/capricornus.png": "089aaee87ee58cbc82f48f9348db523b",
"assets/assets/zodiac/gemini.png": "11bc0582c4fc66e1cfee2b7d31172318",
"assets/assets/zodiac/leo.png": "c496362d7a8559a2324fd8e02ffe3e00",
"assets/assets/zodiac/libra.png": "3c598feff14da470a8dc088c58895878",
"assets/assets/zodiac/pisces.png": "e1cb06c744b7efb0938246c0d1b28442",
"assets/assets/zodiac/sagittarius.png": "f62981c0720ea79f5b0e681611b86e2b",
"assets/assets/zodiac/scorpio.png": "abf2dc90065d773eac5bc83cf04d0b41",
"assets/assets/zodiac/taurus.png": "65181a8ecfb2c9c659eb6717e786533f",
"assets/assets/zodiac/virgo.png": "e0379be209c1fce2117169e95c2e2973",
"assets/FontManifest.json": "15de2e2601d29497386c9edfa58adeb7",
"assets/fonts/MaterialIcons-Regular.otf": "fc2112f830c647e953248c79ee6a05c8",
"assets/NOTICES": "ce6522bfed6d66a0b352420ea1c4975b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "75f1f6a94a1d501c59afc307e0e004c8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "521a10cb028d88d513c086904b89b56e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c29c5fc8de309bf168d76af820dacbed",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1068347d6a2f1c6e35fc86c82f86c496",
"/": "1068347d6a2f1c6e35fc86c82f86c496",
"main.dart.js": "8d0883704d92445d11a9401150c06bec",
"manifest.json": "4bd4f41aa56e84753de49de9da4140fe",
"version.json": "539169958ca45f11c253c19723bc04a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
