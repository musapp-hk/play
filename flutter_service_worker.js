'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d34215de62bf174105ffe6289024aa2b",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "79b886173eca027c0ce248404ff9b2ce",
"assets/media/background.png": "7271dec8fb4104ad26ec1f5548257293",
"assets/media/poker/PNG/2C.png": "0a48263729daa80b56ba18c2482e5b51",
"assets/media/poker/PNG/2D.png": "0e8c294520f1be95a40c1d9d302a190f",
"assets/media/poker/PNG/2H.png": "db77d5d6defe8e81b18eb1594f15f7a9",
"assets/media/poker/PNG/2S.png": "b4e06a288dafc7a28fc8be028c3faebb",
"assets/media/poker/PNG/3C.png": "12747e00c9f3984451f5d754fa4f8ad1",
"assets/media/poker/PNG/3D.png": "20418187c06b51de258a4268134f35eb",
"assets/media/poker/PNG/3H.png": "aa2de2c0a0520a6b0a57fadcd4121cf7",
"assets/media/poker/PNG/3S.png": "13dd1518b0ab07f72f93aa10ea353995",
"assets/media/poker/PNG/4C.png": "d70a0c58d7b9c68159554b7283a4a192",
"assets/media/poker/PNG/4D.png": "7002045b7df34df24bf8b79e341d9242",
"assets/media/poker/PNG/4H.png": "431167b1637dc9b5763bde8be583e7fb",
"assets/media/poker/PNG/4S.png": "470f888d287078cd23cace28067fc2d6",
"assets/media/poker/PNG/5C.png": "dec510e9598db54182c409978c5e9b6c",
"assets/media/poker/PNG/5D.png": "b1dd71ea4b797ca91465f76a287792df",
"assets/media/poker/PNG/5H.png": "e15fd48d5ba4be6e6997049d16c5055f",
"assets/media/poker/PNG/5S.png": "56693b97b623c726247270ee3ad656be",
"assets/media/poker/PNG/6C.png": "2f98bcff43f566e5f39c5f1d18cb1344",
"assets/media/poker/PNG/6D.png": "cf754716fba868f66a5ba868666460e3",
"assets/media/poker/PNG/6H.png": "8641d65b0938b661cc8d3253b2f16b70",
"assets/media/poker/PNG/6S.png": "af73045b7eacd1197d54e947958d9476",
"assets/media/poker/PNG/7C.png": "92b2bca40b87c1f85e99d40b7de74d5c",
"assets/media/poker/PNG/7D.png": "1e85b25fd8b58bc5268354a7962c1cc8",
"assets/media/poker/PNG/7H.png": "af154f911e0a018802f7ea249d79152d",
"assets/media/poker/PNG/7S.png": "0251b037f117cb2e5a42f43d4f915eee",
"assets/media/poker/PNG/AC.png": "aee54d1fbff09b56b959f32691e89ae4",
"assets/media/poker/PNG/AD.png": "f30a1be487e1c8fac6569905a4443d25",
"assets/media/poker/PNG/AH.png": "461901096d66611aafcb2e32838b1057",
"assets/media/poker/PNG/AS.png": "8cd675b6a4ba5ef5f1659cc559bba0eb",
"assets/media/poker/PNG/blue_back.png": "2280f45dec97adabd14c7fe6557e5482",
"assets/media/poker/PNG/gray_back.png": "388e981664e0592d8643f823a34d40c9",
"assets/media/poker/PNG/green_back.png": "9d0e49f0bddad8eea33adc29f8bb1904",
"assets/media/poker/PNG/JC.png": "68d5ae1b179a7b8a38028ad6f662a6e4",
"assets/media/poker/PNG/JD.png": "e41dd276e22daed03b1095ad469ad2aa",
"assets/media/poker/PNG/JH.png": "3b1e28051dc4e5ed4b842697054737ed",
"assets/media/poker/PNG/JS.png": "2da14624ef6daef4b3b8447c3379c9c2",
"assets/media/poker/PNG/KC.png": "32f0887e805bf43a36b679c3a9a7c0c0",
"assets/media/poker/PNG/KD.png": "71d620f69b6e8b2ac9885c887e334419",
"assets/media/poker/PNG/KH.png": "f2e0f190511b2aba613fc42fd1abdc30",
"assets/media/poker/PNG/KS.png": "0fa4e7e395ae7c0563ca06e576f325ff",
"assets/media/poker/PNG/purple_back.png": "12fb9201e9563f6f611cc575649e96bf",
"assets/media/poker/PNG/QC.png": "74f8ebbdaf540ebbe1453d726d0de241",
"assets/media/poker/PNG/QD.png": "b44f148e708230e923eae4e12cc7bdf7",
"assets/media/poker/PNG/QH.png": "c7e9cabef734a3be964e38c549845740",
"assets/media/poker/PNG/QS.png": "302cdff464cdc8b75320a4d19ed8c616",
"assets/media/poker/PNG/red_back.png": "f8033fff38b5f03fc00bfb0c41c86898",
"assets/media/poker/PNG/yellow_back.png": "eb792f809c35c51c50fb24329c1a37b4",
"assets/media/poker-background.jpg": "fb3edb9b647a5d7c22a0108a297885dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "305634e56b391c1323db4f870117c8e7",
"/": "305634e56b391c1323db4f870117c8e7",
"main.dart.js": "50afc0f5f4064aeba81d5813d3fc1f67",
"manifest.json": "4edb3dd870974265082b29e12ed2c022"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
