'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "89e212ec140998506dff02a75919a000",
"splash/img/light-2x.png": "d0b70318c739dfe17b2b8dadd2338ac6",
"splash/img/dark-4x.png": "63d7d38bffa8138e8f722db6f2f25083",
"splash/img/light-3x.png": "da5ea44847db9f94167cca3a921e705a",
"splash/img/dark-3x.png": "da5ea44847db9f94167cca3a921e705a",
"splash/img/light-4x.png": "63d7d38bffa8138e8f722db6f2f25083",
"splash/img/dark-2x.png": "d0b70318c739dfe17b2b8dadd2338ac6",
"splash/img/dark-1x.png": "44764c644a16178ed296bdcc0c3193f4",
"splash/img/light-1x.png": "44764c644a16178ed296bdcc0c3193f4",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "431cc28dc41c04d8be4413234333e68d",
"index.html": "a3825af7598a9548803db104fa27afc5",
"/": "a3825af7598a9548803db104fa27afc5",
"main.dart.js": "62c138a7ed4bd935b9685750295e17a1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "d49970d756270615d8859f10b34b4cc0",
"icons/Icon-192.png": "95da0f64923e23f27ef0fd04202654fc",
"icons/Icon-maskable-192.png": "95da0f64923e23f27ef0fd04202654fc",
"icons/Icon-maskable-512.png": "57acbb64100e2fdcd5f7256cbbe5938f",
"icons/Icon-512.png": "57acbb64100e2fdcd5f7256cbbe5938f",
"manifest.json": "72246ffb09ed7f9db840b56b268c6cae",
"assets/AssetManifest.json": "49bdc1ac79e0b79aa84e3668a7997f49",
"assets/NOTICES": "a0093fe8df8d7f259bb294fa75cac2ab",
"assets/FontManifest.json": "1219a7c45f1ab164ab489843b3006609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "5e48fdb891782e1d5a46fd4443a002d6",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/images/Protek-Duo.png": "f740ac3289d0f7dce956e20491f0c793",
"assets/assets/images/Positioning%2520and%2520Monitoring1.png": "44a4d79f8738422dc632943d66739244",
"assets/assets/images/Positioning%2520and%2520Monitoring2.png": "c4a9ab79371d0ee27661b76b48b764c7",
"assets/assets/images/Impella%2520Devices.png": "c5267cd4eab50788e8f90c2def767780",
"assets/assets/images/equations/Calc%25204%2520equations.png": "7ae059cc70429de3ca39de5c8b79a01f",
"assets/assets/images/equations/Calc%25203%2520equations.png": "723193919ca7454d5c71644cd66270ca",
"assets/assets/images/equations/Calc%25205%2520equations.png": "832dbffcc256a46d171c0d23221b73c8",
"assets/assets/images/equations/Calc%25208%2520equations.png": "2f24a19e6e07c851b478c5dccc3a9e46",
"assets/assets/images/equations/Calc%25207%2520equations.png": "d7548bfa34b01b32a53a0d0b000deb7e",
"assets/assets/images/equations/Calc%25209%2520equations.png": "3ed2204ee9b7459c8fb566de459fbcb3",
"assets/assets/images/equations/Calc%25206%2520equations.png": "c80696ac5cbc58c561b500c967f598de",
"assets/assets/images/equations/Calc%25201%2520equations.png": "67b08a71d1739b075ff8d2046b4e2dde",
"assets/assets/images/Hemodynamic.png": "94fb786a14b13354029caaf3249fb683",
"assets/assets/images/RCH.png": "004c684217fc9f076d531924cf59cb97",
"assets/assets/images/ic_launcher_color.png": "34c1155d142629fd82533d07957f8d2c",
"assets/assets/images/logoBgLargeTrans.png": "bc9aa98c80e8752ad949d782334637ea",
"assets/assets/images/Purge%2520System.png": "18af4ded23bf6fb700ba2e6d7111b828",
"assets/assets/images/Pathophysiology.png": "3ac9da8b71da87cb3b5f269456609722",
"assets/assets/images/bgMob.png": "f923cada5600ff3573cbe7bba51cc72d",
"assets/assets/images/splash.png": "9508bb72eebb702ee932d546d9d38fca",
"assets/assets/images/bgWeb.png": "4fa6f3c6ec510f97a7788bfd74dbc21a",
"assets/assets/images/Impella%2520Console.png": "39406a788b412982d87a79bb1c1e442d",
"assets/assets/images/Anticoagulation.png": "a0c5408726e86c7ee35a738d3e200a85",
"assets/assets/images/team/umesh.png": "b7e08935b7607f5d265caedac64ce2fe",
"assets/assets/images/team/parsuram.jpg": "33a11b8f70155620cc2f7f81a7a4edfb",
"assets/assets/images/team/serro.jpg": "bc2edb9ac61e49f194db9e4d5f72e336",
"assets/assets/images/team/gennaro.png": "bfeb9cf1b26fa2b73d8c33bb14372632",
"assets/assets/images/team/andriy.jpg": "3690980de0609ca58603bb570c0a3fab",
"assets/assets/images/team/kini.jpg": "4604fa55799fbaada1115c869d564f8a",
"assets/assets/images/logo.png": "9fb9662422fc6f176bc134c1cd737279",
"assets/assets/images/ic_launcher.png": "f38988f186a5c6ecff2e85675cc58a6b",
"assets/assets/images/Impella%2520Catheter.png": "decdad88aa6e14fb6d67409ee67b59b7",
"assets/assets/images/Impella%25205.0.png": "f8f30076b4677fd8bf52f1ed0e141f82",
"assets/assets/images/Impella%2520RP.png": "00cc1d3cba815e820dd2c8c2b0a935be",
"assets/assets/images/Tandem-Heart.png": "d45a1595ed75a5d0aae8aaaf79d48471",
"assets/assets/images/ecmo.png": "63622db4eaa1c9356ba1a5b87c82899a",
"assets/assets/images/Mechanism%2520of%2520Action.png": "796cc05a3c174c9a359976659a39b151",
"assets/assets/images/logo_s.png": "f536eca5c2155482aa5aa1e10c39928e",
"assets/assets/images/logoBgLarge.png": "4729cff14079d0094436a1f8614f6aa5",
"assets/assets/images/logo.svg": "f8e0035f02bb8f874cef84f5b717bd3e",
"assets/assets/images/HemodynamicProfiles.png": "d0d7ba98239b7631c1dd1de44fa247ea",
"assets/assets/images/bgWeb.svg": "bbea55fec0bb68f1d42259ab7ff7f9b8",
"assets/assets/images/bgMob.svg": "5fac5ebc58bb72013521ba9dbb2b132e",
"assets/assets/json/calculator/calculator.json": "c8d9156db74a18cfc946d8d8a5b34c61",
"assets/assets/json/dm_algo/mcs_decision_algo.json": "5b00b6391f9bfb12e5bea66de12e6a11",
"assets/assets/json/dm_algo/weaning_algo.json": "55967a3224df20f8df72e8ac1a5f4d5b",
"assets/assets/json/dm_algo/algo_home.json": "aadd8881815e56b6a327c1287d91abde",
"assets/assets/json/more/more_home.json": "470f1f83a221694781161b46611fce64",
"assets/assets/json/more/privacy.json": "8578108745a451a795ed9ff98957c02e",
"assets/assets/json/more/references.json": "98f9eba8272ed617749ea5dd474cc72b",
"assets/assets/json/more/terms.json": "1116115331d816f765bf9462e5506799",
"assets/assets/json/more/contact.json": "155be6d0689194d9b42adec506b1440f",
"assets/assets/json/more/about.json": "0b8dd7442f693c7f2b8764d2e9358f17",
"assets/assets/json/more/team.json": "359eda067cd4f6a7a8c61adbbe75fb08",
"assets/assets/json/basic_search_algo/basic_search_algo_home.json": "c67f5cd465809b396bb117127f86b752",
"assets/assets/json/basic_search_algo/search_algo.json": "5681344a4ef98bef2e5dfb94feeacc3e",
"assets/assets/icons/ic_phone.svg": "6f0000ac36e5d22bd3e0aed86a48699b",
"assets/assets/icons/ic_mail.svg": "075dc2e07f3dbb7e492bf60345acc6fc",
"assets/assets/icons/ic_dot.svg": "2aa8201603cce41d11f21ea130177948",
"assets/assets/icons/ic_UnSelected_checkbox.svg": "d7c33ee40dafa0d8b7a284f83834c594",
"assets/assets/icons/ic_weaning_mcq.svg": "df4796176c5a1519051f7fe227f901ee",
"assets/assets/icons/ic_breadcrumb_home.svg": "e3f73167e55d1e7eea48be753eb7afb4",
"assets/assets/icons/ic_backArrow.svg": "4a1621d405052e8a2b57c643dc49dd8e",
"assets/assets/icons/ic_pp.svg": "c5c1a7c752154a2bde3a42e7526b8fbb",
"assets/assets/icons/ic_info.svg": "74259ee17658b583b0378e01ff822468",
"assets/assets/icons/ic_team.svg": "dbbb46e1282cef178ddd3ed1cacc69ac",
"assets/assets/icons/ic_more_bottom.svg": "662af3ba3f639446fa625595aae8e311",
"assets/assets/icons/ic_search_bottom.svg": "1bd9ff3dc1f31e67143bfc3ac65319e7",
"assets/assets/icons/ic_fax.svg": "a32b5e9c14be91c40dc698f8a01c65c1",
"assets/assets/icons/ic_home.svg": "1f639cf1a71f277723a471e4b4c8edd5",
"assets/assets/icons/ic_dmalgo_mcq.svg": "46a485986f53814f8188f00764373f8a",
"assets/assets/icons/ic_algo_bottom.svg": "e3a71f67cc4215cacbbb45e7d6042da8",
"assets/assets/icons/ic_about.svg": "2f15c2dd44bda88d777d7c562bcac9e9",
"assets/assets/icons/ic_back_arrow.png": "091100ae60fbc82bffe9b3721dc2dca6",
"assets/assets/icons/logo.png": "cf00b02e17761dea5c1da4ec5be1ebbe",
"assets/assets/icons/ic_cal_rounded_arrow.svg": "6c66d07bcc894c3d9bc7ac6bf2768f60",
"assets/assets/icons/ic_cardio_logo.svg": "30d93f38ac6c1bbe19827b2d029fa80e",
"assets/assets/icons/ic_tc.svg": "bd38bebe04c0c79daddaace04788987b",
"assets/assets/icons/ic_logo.svg": "0f84d719c49c153700c47138906de884",
"assets/assets/icons/cardio_logo.png": "35daaf909ea153d977362db498da9677",
"assets/assets/icons/ic_selected_checkbox.svg": "cdc5f1cdb305f962a4a338c8ec873fbb",
"assets/assets/icons/ic_calculator.svg": "33f55cad2edcceee59c57d0f1d949886",
"assets/assets/icons/ic_loc.svg": "ddd7af6bdefcaf2f3ecbfe078611ffbe",
"assets/assets/icons/ic_references.svg": "2696d47d65bede55040b45bcfe645210",
"assets/assets/icons/ic_contact.svg": "7e5db42ddf5f96646a380fb693745cd6",
"assets/assets/icons/ic_arrow.svg": "c000d15c0be2900308676fe68b770ad7",
"assets/assets/icons/ic_search.svg": "0ef297791696e9cf7d44db0f139c6e3e",
"assets/assets/icons/logo_s.png": "a79b4408dc60fbe125a66a53f984c485",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
