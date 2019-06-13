/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/pwa-plank-watch/precache-manifest.6d8d9532e3cd654abf639e8b275b3b0b.js"
);

workbox.core.setCacheNameDetails({prefix: "pwa-plank-watch"});

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "dd0265d317bbb7b1b5596d5273482116"
  },
  {
    "url": "precache-manifest.00541ee00e93c0f92c36293655163e0b.js",
    "revision": "00541ee00e93c0f92c36293655163e0b"
  },
  {
    "url": "precache-manifest.06fddf5f14d9e7521a24f88579f8a954.js",
    "revision": "06fddf5f14d9e7521a24f88579f8a954"
  },
  {
    "url": "precache-manifest.0d8ae30e8f4db55b258c6ea2504792ce.js",
    "revision": "0d8ae30e8f4db55b258c6ea2504792ce"
  },
  {
    "url": "precache-manifest.0f7260e4c71e43a4c170da9217d62202.js",
    "revision": "0f7260e4c71e43a4c170da9217d62202"
  },
  {
    "url": "precache-manifest.10180cad1f801aa8fe7bd4f54d4866c1.js",
    "revision": "10180cad1f801aa8fe7bd4f54d4866c1"
  },
  {
    "url": "precache-manifest.18fe9f750f48508a7997ebe398c29d34.js",
    "revision": "18fe9f750f48508a7997ebe398c29d34"
  },
  {
    "url": "precache-manifest.1a0ffa11b869f4def6da777aad262c5a.js",
    "revision": "1a0ffa11b869f4def6da777aad262c5a"
  },
  {
    "url": "precache-manifest.1b41813a913129786b671bd521b673ea.js",
    "revision": "1b41813a913129786b671bd521b673ea"
  },
  {
    "url": "precache-manifest.1b6a4ba05a8bbce1f58ba41fe455eb77.js",
    "revision": "1b6a4ba05a8bbce1f58ba41fe455eb77"
  },
  {
    "url": "precache-manifest.1b902225a5087dea80a3e761c9b80eaa.js",
    "revision": "1b902225a5087dea80a3e761c9b80eaa"
  },
  {
    "url": "precache-manifest.1cfd05838a74128cc09d236eb3b723a1.js",
    "revision": "1cfd05838a74128cc09d236eb3b723a1"
  },
  {
    "url": "precache-manifest.23b73b6c11e48921c18efcc58d15e753.js",
    "revision": "23b73b6c11e48921c18efcc58d15e753"
  },
  {
    "url": "precache-manifest.250e3f00b346becf6c192b3d206e47cd.js",
    "revision": "250e3f00b346becf6c192b3d206e47cd"
  },
  {
    "url": "precache-manifest.25b5ec120c7cbe76c0dc63e4ebb1c5ec.js",
    "revision": "25b5ec120c7cbe76c0dc63e4ebb1c5ec"
  },
  {
    "url": "precache-manifest.30863c9d1dbc36155fb091228a0094f2.js",
    "revision": "30863c9d1dbc36155fb091228a0094f2"
  },
  {
    "url": "precache-manifest.30867238697b9adccab583393deac2d7.js",
    "revision": "30867238697b9adccab583393deac2d7"
  },
  {
    "url": "precache-manifest.334ea2f3d8a9e986f676a0b0df33515e.js",
    "revision": "334ea2f3d8a9e986f676a0b0df33515e"
  },
  {
    "url": "precache-manifest.3596f5ad1b01cec9cef5b3741aa33b4c.js",
    "revision": "3596f5ad1b01cec9cef5b3741aa33b4c"
  },
  {
    "url": "precache-manifest.368db9b5d96e228f605375cbf590dcac.js",
    "revision": "368db9b5d96e228f605375cbf590dcac"
  },
  {
    "url": "precache-manifest.370a7b133c2d763cdada0c8e5abe4328.js",
    "revision": "370a7b133c2d763cdada0c8e5abe4328"
  },
  {
    "url": "precache-manifest.37b9df5123c908aab47c0da5731fc0ed.js",
    "revision": "37b9df5123c908aab47c0da5731fc0ed"
  },
  {
    "url": "precache-manifest.48ee05b035eca2bfcbab3999cf9870d1.js",
    "revision": "48ee05b035eca2bfcbab3999cf9870d1"
  },
  {
    "url": "precache-manifest.49d3e8c914d37be078275d9948ddc673.js",
    "revision": "49d3e8c914d37be078275d9948ddc673"
  },
  {
    "url": "precache-manifest.4e0ad75fe717a999decc633396b12ef2.js",
    "revision": "4e0ad75fe717a999decc633396b12ef2"
  },
  {
    "url": "precache-manifest.4fbba964ee3fb369750ec8cbea0ba0da.js",
    "revision": "4fbba964ee3fb369750ec8cbea0ba0da"
  },
  {
    "url": "precache-manifest.549a598118a9a65d7a7d14a703da6362.js",
    "revision": "549a598118a9a65d7a7d14a703da6362"
  },
  {
    "url": "precache-manifest.54ffb28dd55b16faaefc20024ac36f48.js",
    "revision": "54ffb28dd55b16faaefc20024ac36f48"
  },
  {
    "url": "precache-manifest.5b11c9e279465ae4d6ea851c7c7ffca4.js",
    "revision": "5b11c9e279465ae4d6ea851c7c7ffca4"
  },
  {
    "url": "precache-manifest.67e793297f9b1de8faa08881615991a4.js",
    "revision": "67e793297f9b1de8faa08881615991a4"
  },
  {
    "url": "precache-manifest.68b03b51267626121310311fff078e56.js",
    "revision": "68b03b51267626121310311fff078e56"
  },
  {
    "url": "precache-manifest.6b8964b83f2789bf98431aa15db33bd3.js",
    "revision": "6b8964b83f2789bf98431aa15db33bd3"
  },
  {
    "url": "precache-manifest.6db66f7561be27fb1516d497f99e8056.js",
    "revision": "6db66f7561be27fb1516d497f99e8056"
  },
  {
    "url": "precache-manifest.70e2f2177d976dbdb87453fc119f92e0.js",
    "revision": "70e2f2177d976dbdb87453fc119f92e0"
  },
  {
    "url": "precache-manifest.77f4f51d651e4057c8d60b36d55d4b68.js",
    "revision": "77f4f51d651e4057c8d60b36d55d4b68"
  },
  {
    "url": "precache-manifest.783ae7a3493681b62af1ec368b318f54.js",
    "revision": "783ae7a3493681b62af1ec368b318f54"
  },
  {
    "url": "precache-manifest.7a01eed1f49db9d495ffaf28d7b7d9fa.js",
    "revision": "7a01eed1f49db9d495ffaf28d7b7d9fa"
  },
  {
    "url": "precache-manifest.83cd1694a761f51a1979f570afcbc858.js",
    "revision": "83cd1694a761f51a1979f570afcbc858"
  },
  {
    "url": "precache-manifest.88d488d1bb0221d05ab48fe64aa973f2.js",
    "revision": "88d488d1bb0221d05ab48fe64aa973f2"
  },
  {
    "url": "precache-manifest.8d66c30222942922927fae4e595a439f.js",
    "revision": "8d66c30222942922927fae4e595a439f"
  },
  {
    "url": "precache-manifest.942537b14ecb5ac7eca7bacf71950c41.js",
    "revision": "942537b14ecb5ac7eca7bacf71950c41"
  },
  {
    "url": "precache-manifest.94a343e9286f3206304f909c9780f2c9.js",
    "revision": "94a343e9286f3206304f909c9780f2c9"
  },
  {
    "url": "precache-manifest.95597d582ead5cddc46e07083a757887.js",
    "revision": "95597d582ead5cddc46e07083a757887"
  },
  {
    "url": "precache-manifest.9b771bceec2b6cbc407c4385c32fba71.js",
    "revision": "9b771bceec2b6cbc407c4385c32fba71"
  },
  {
    "url": "precache-manifest.9bcc76cf05e75ddfe7abbc3c4878ac85.js",
    "revision": "9bcc76cf05e75ddfe7abbc3c4878ac85"
  },
  {
    "url": "precache-manifest.a53957f994e1d392d9acf264d27a68cc.js",
    "revision": "a53957f994e1d392d9acf264d27a68cc"
  },
  {
    "url": "precache-manifest.a86e165fa922c3cf5c91eda60920a757.js",
    "revision": "a86e165fa922c3cf5c91eda60920a757"
  },
  {
    "url": "precache-manifest.a9577437991aa50f67ad0b7f47e13aaf.js",
    "revision": "a9577437991aa50f67ad0b7f47e13aaf"
  },
  {
    "url": "precache-manifest.abb95c6a8dea3fb6791629b9ac28e767.js",
    "revision": "abb95c6a8dea3fb6791629b9ac28e767"
  },
  {
    "url": "precache-manifest.acea7a0def7573dc796362588266a6cc.js",
    "revision": "acea7a0def7573dc796362588266a6cc"
  },
  {
    "url": "precache-manifest.aed0890c7b17d7e0fbd6a330c9c1524a.js",
    "revision": "aed0890c7b17d7e0fbd6a330c9c1524a"
  },
  {
    "url": "precache-manifest.b36bd041ecba0452af7c9239ebb87e28.js",
    "revision": "b36bd041ecba0452af7c9239ebb87e28"
  },
  {
    "url": "precache-manifest.b52dd207163f7b884ab1c5709bc5847d.js",
    "revision": "b52dd207163f7b884ab1c5709bc5847d"
  },
  {
    "url": "precache-manifest.b78db7981b977ffba562752dd3c8feaa.js",
    "revision": "b78db7981b977ffba562752dd3c8feaa"
  },
  {
    "url": "precache-manifest.bbac5c8cf28afd9a3a2ef422bb7efd5f.js",
    "revision": "bbac5c8cf28afd9a3a2ef422bb7efd5f"
  },
  {
    "url": "precache-manifest.c3090a8b41297eab84d8614148446ea0.js",
    "revision": "c3090a8b41297eab84d8614148446ea0"
  },
  {
    "url": "precache-manifest.c84c6b9e44b286ff53657abe3eb6fcaa.js",
    "revision": "c84c6b9e44b286ff53657abe3eb6fcaa"
  },
  {
    "url": "precache-manifest.cb77297164d8ed0eec378678058aec6f.js",
    "revision": "cb77297164d8ed0eec378678058aec6f"
  },
  {
    "url": "precache-manifest.d247325f6207104d989e443fb448a92c.js",
    "revision": "d247325f6207104d989e443fb448a92c"
  },
  {
    "url": "precache-manifest.d5291abc70e1dcf511a2798b29cb1736.js",
    "revision": "d5291abc70e1dcf511a2798b29cb1736"
  },
  {
    "url": "precache-manifest.d5aeb56699b28d8a3f3157f2f6c58ce2.js",
    "revision": "d5aeb56699b28d8a3f3157f2f6c58ce2"
  },
  {
    "url": "precache-manifest.df4055afcb6c0d2bf5c1266cebd182c4.js",
    "revision": "df4055afcb6c0d2bf5c1266cebd182c4"
  },
  {
    "url": "precache-manifest.e0ceb6fda3ef7cc6218299995816d620.js",
    "revision": "e0ceb6fda3ef7cc6218299995816d620"
  },
  {
    "url": "precache-manifest.e184f98c8bf9742e25d2e5e1b76a87e4.js",
    "revision": "e184f98c8bf9742e25d2e5e1b76a87e4"
  },
  {
    "url": "precache-manifest.e3c3e52979d6a53a85e3225f5f1682f7.js",
    "revision": "e3c3e52979d6a53a85e3225f5f1682f7"
  },
  {
    "url": "precache-manifest.e3cec8151b9b298ba69424ed6929edd7.js",
    "revision": "e3cec8151b9b298ba69424ed6929edd7"
  },
  {
    "url": "precache-manifest.e949882b0b6be880f48b45b7fd7f35ea.js",
    "revision": "e949882b0b6be880f48b45b7fd7f35ea"
  },
  {
    "url": "precache-manifest.fac06a1ad30f8f11c1a47868baae0046.js",
    "revision": "fac06a1ad30f8f11c1a47868baae0046"
  },
  {
    "url": "precache-manifest.fc2a4b54bf10ae9ebee03d9e3209de27.js",
    "revision": "fc2a4b54bf10ae9ebee03d9e3209de27"
  },
  {
    "url": "precache-manifest.fe0569a1bd4c5d907e0763fdc6da8d95.js",
    "revision": "fe0569a1bd4c5d907e0763fdc6da8d95"
  },
  {
    "url": "service-worker.js",
    "revision": "84a1030672a8cd62a8b062c9719f7bff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
