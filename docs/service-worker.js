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
  "/pwa-plank-watch/precache-manifest.0b58ad4cfb8c0873de6f88f24bb29bfa.js"
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
    "revision": "4c7c9eb2ed5e204d4b102633a1fffd6f"
  },
  {
    "url": "precache-manifest.a6f7b6675b9b983ccfde286e97f3c5af.js",
    "revision": "a6f7b6675b9b983ccfde286e97f3c5af"
  },
  {
    "url": "service-worker.js",
    "revision": "8e7640bad25115c199544871079b175a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
