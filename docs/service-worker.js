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
  "/pwa-plank-watch/precache-manifest.e184f98c8bf9742e25d2e5e1b76a87e4.js"
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
    "revision": "f88e972de5952b8eb9dee956766ff48b"
  },
  {
    "url": "precache-manifest.00541ee00e93c0f92c36293655163e0b.js",
    "revision": "00541ee00e93c0f92c36293655163e0b"
  },
  {
    "url": "precache-manifest.1b902225a5087dea80a3e761c9b80eaa.js",
    "revision": "1b902225a5087dea80a3e761c9b80eaa"
  },
  {
    "url": "precache-manifest.23b73b6c11e48921c18efcc58d15e753.js",
    "revision": "23b73b6c11e48921c18efcc58d15e753"
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
    "url": "precache-manifest.37b9df5123c908aab47c0da5731fc0ed.js",
    "revision": "37b9df5123c908aab47c0da5731fc0ed"
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
    "url": "precache-manifest.54ffb28dd55b16faaefc20024ac36f48.js",
    "revision": "54ffb28dd55b16faaefc20024ac36f48"
  },
  {
    "url": "precache-manifest.67e793297f9b1de8faa08881615991a4.js",
    "revision": "67e793297f9b1de8faa08881615991a4"
  },
  {
    "url": "precache-manifest.70e2f2177d976dbdb87453fc119f92e0.js",
    "revision": "70e2f2177d976dbdb87453fc119f92e0"
  },
  {
    "url": "precache-manifest.83cd1694a761f51a1979f570afcbc858.js",
    "revision": "83cd1694a761f51a1979f570afcbc858"
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
    "url": "precache-manifest.a53957f994e1d392d9acf264d27a68cc.js",
    "revision": "a53957f994e1d392d9acf264d27a68cc"
  },
  {
    "url": "precache-manifest.acea7a0def7573dc796362588266a6cc.js",
    "revision": "acea7a0def7573dc796362588266a6cc"
  },
  {
    "url": "precache-manifest.b36bd041ecba0452af7c9239ebb87e28.js",
    "revision": "b36bd041ecba0452af7c9239ebb87e28"
  },
  {
    "url": "precache-manifest.c84c6b9e44b286ff53657abe3eb6fcaa.js",
    "revision": "c84c6b9e44b286ff53657abe3eb6fcaa"
  },
  {
    "url": "precache-manifest.d5aeb56699b28d8a3f3157f2f6c58ce2.js",
    "revision": "d5aeb56699b28d8a3f3157f2f6c58ce2"
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
    "url": "service-worker.js",
    "revision": "c142a5a4fffbcea5bf770b23b8bf69f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
