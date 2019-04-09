importScripts('/app/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/app/2bf79c4847c6e681b950.js",
    "revision": "67e31c87f3dc47fa1a78fff4116020f3"
  },
  {
    "url": "/app/2ff0bdd6bcd84fb5ef44.js",
    "revision": "b9e17b52baef38e600f42c1635af8908"
  },
  {
    "url": "/app/36d444b2aea95af0b32b.js",
    "revision": "703f8d3e0d50a7b0ff2fdfa63bfd0f2d"
  },
  {
    "url": "/app/3bb043d6186af0c3f093.js",
    "revision": "6e5f1703098164f9a5d0c2140abc9a84"
  },
  {
    "url": "/app/4493c8f6f6002fc1f668.js",
    "revision": "7ca2dbb01632ef305b725ff49cea600c"
  },
  {
    "url": "/app/55aaf5a38d17508c055f.js",
    "revision": "6f5e11e138c119d46e6f4f470f1c5e27"
  },
  {
    "url": "/app/55fad57d1bf9eac6b251.js",
    "revision": "b4bcabe469b4b3908dc5b57afced3622"
  },
  {
    "url": "/app/6f6b6daaa30bc13bf9cd.js",
    "revision": "cecdfba3f64971ff8bcdbd5bd4de106f"
  },
  {
    "url": "/app/7d7a0202df01a964d2a0.js",
    "revision": "033e0a7872395a1173790eef938a03a8"
  },
  {
    "url": "/app/bd5c746264bb09a88478.js",
    "revision": "c4aef595a26e612050be4e8c1773f038"
  }
], {
  "cacheId": "NathanBland.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/app/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
