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
  "/precache-manifest.d5aeb56699b28d8a3f3157f2f6c58ce2.js"
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
    "revision": "3eeb0096714e4247da5a00488d7713db"
  },
  {
    "url": "precache-manifest.70e2f2177d976dbdb87453fc119f92e0.js",
    "revision": "70e2f2177d976dbdb87453fc119f92e0"
  },
  {
    "url": "service-worker.js",
    "revision": "cdaccfcd75916e4d0acea5c0899b4f2b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
