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
  "/pwa-plank-watch/precache-manifest.e493fd3e3e15934b35b64e0ffa4e8485.js"
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
    "revision": "0ac8d3806a1dcec600116128f4dd65fa"
  },
  {
    "url": "precache-manifest.0b58ad4cfb8c0873de6f88f24bb29bfa.js",
    "revision": "0b58ad4cfb8c0873de6f88f24bb29bfa"
  },
  {
    "url": "precache-manifest.2b8a642bbe5406d335a35e67fa620c3f.js",
    "revision": "2b8a642bbe5406d335a35e67fa620c3f"
  },
  {
    "url": "precache-manifest.63e4a72234c5db647eb056ee24564ef2.js",
    "revision": "63e4a72234c5db647eb056ee24564ef2"
  },
  {
    "url": "precache-manifest.7efd988642290751f7fb669c850ce06d.js",
    "revision": "7efd988642290751f7fb669c850ce06d"
  },
  {
    "url": "precache-manifest.8fc1e26981d1c0b0a32b97ad5705a316.js",
    "revision": "8fc1e26981d1c0b0a32b97ad5705a316"
  },
  {
    "url": "precache-manifest.a6a55fa578f903ce63bf66a20eb9ac0b.js",
    "revision": "a6a55fa578f903ce63bf66a20eb9ac0b"
  },
  {
    "url": "precache-manifest.ac6c517a2a04d8d57bd92e21fe203bfb.js",
    "revision": "ac6c517a2a04d8d57bd92e21fe203bfb"
  },
  {
    "url": "precache-manifest.c3b369dc004a140c20997ace0f9247a7.js",
    "revision": "c3b369dc004a140c20997ace0f9247a7"
  },
  {
    "url": "precache-manifest.cbeb23334a46bf40a0fa14dcbfbe2fc1.js",
    "revision": "cbeb23334a46bf40a0fa14dcbfbe2fc1"
  },
  {
    "url": "precache-manifest.eb5e21c45fc03b89365478b9d37f2ac5.js",
    "revision": "eb5e21c45fc03b89365478b9d37f2ac5"
  },
  {
    "url": "precache-manifest.f509dde3e736160c92bc42ec5a9738a7.js",
    "revision": "f509dde3e736160c92bc42ec5a9738a7"
  },
  {
    "url": "service-worker.js",
    "revision": "4f0958cf13d6f38b47368d869ccc57a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
