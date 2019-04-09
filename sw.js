importScripts('/framework/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/framework/194b72fcd0e10d8301b3.js",
    "revision": "26a9639030ae2111a041bd29143b64a8"
  },
  {
    "url": "/framework/575c874379c1fe58ea79.js",
    "revision": "1990eed94e095cabe0e5c48e3e468f3f"
  },
  {
    "url": "/framework/8c4a8f7c9f68c10a7ca9.js",
    "revision": "6c17a292e560ef8c2d78107fb8906ecd"
  },
  {
    "url": "/framework/950bada5b39f02787ed4.js",
    "revision": "2f42b53814db369184ae1d31dca2fee8"
  },
  {
    "url": "/framework/ac2f37f61ab7569bed8e.js",
    "revision": "25b47dec5a5588411f28f17f4a94195c"
  },
  {
    "url": "/framework/b4a5cb60cffa2ca46899.js",
    "revision": "2b197d10d3986bd09adb6ed84cffdb32"
  },
  {
    "url": "/framework/cba277142249cd9acc00.js",
    "revision": "ba2b6ae315675b8c76ea7be29763d773"
  },
  {
    "url": "/framework/ea0c8f163ad57e535873.js",
    "revision": "465951cac8b7087bdc0e3dd74cc020a7"
  },
  {
    "url": "/framework/f941c16bb1cfa212ccb6.js",
    "revision": "20e864793607e7c8147631db4526409a"
  },
  {
    "url": "/framework/ff79a8c278a4b8c9e621.js",
    "revision": "2bfa52eb2fb554a60dd9483eb9c7ca87"
  }
], {
  "cacheId": "nathanbland.dev",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/framework/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
