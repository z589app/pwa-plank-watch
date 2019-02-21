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
  "/pwa-plank-watch/precache-manifest.4fbba964ee3fb369750ec8cbea0ba0da.js"
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
    "revision": "51352d7316d2ddfa497e1362139b8ea1"
  },
  {
    "url": "precache-manifest.1b902225a5087dea80a3e761c9b80eaa.js",
    "revision": "1b902225a5087dea80a3e761c9b80eaa"
  },
  {
    "url": "precache-manifest.30867238697b9adccab583393deac2d7.js",
    "revision": "30867238697b9adccab583393deac2d7"
  },
  {
    "url": "precache-manifest.70e2f2177d976dbdb87453fc119f92e0.js",
    "revision": "70e2f2177d976dbdb87453fc119f92e0"
  },
  {
    "url": "precache-manifest.8d66c30222942922927fae4e595a439f.js",
    "revision": "8d66c30222942922927fae4e595a439f"
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
    "url": "precache-manifest.d5aeb56699b28d8a3f3157f2f6c58ce2.js",
    "revision": "d5aeb56699b28d8a3f3157f2f6c58ce2"
  },
  {
    "url": "service-worker.js",
    "revision": "28246aa6460f7d440aca61eb3df32d21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
