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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "03ea293ec4c29d50e290e6ff5414fe6a"
  },
  {
    "url": "assets/css/0.styles.025369c0.css",
    "revision": "c4a3d352a687014c2000a9c379809cfb"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.f67292b7.js",
    "revision": "4dc528c79a2ccfa8a83af2a370aa2aa4"
  },
  {
    "url": "assets/js/10.dc86f455.js",
    "revision": "bfbaf08ea9db2fdf94f76fddae4f539f"
  },
  {
    "url": "assets/js/14.d6013d39.js",
    "revision": "95da81dc60edc4decf1b75a933b46150"
  },
  {
    "url": "assets/js/15.f8d280b9.js",
    "revision": "5c727e4214da20b8b806a55aa32fe0aa"
  },
  {
    "url": "assets/js/16.67438dc5.js",
    "revision": "7efe14bf9f1e17cb396c19191f68c15c"
  },
  {
    "url": "assets/js/17.138b514a.js",
    "revision": "9902c5167e4e605731b9fd1a962288bd"
  },
  {
    "url": "assets/js/18.2de3bc22.js",
    "revision": "13e88a7c2280dde59e82fef2c548696a"
  },
  {
    "url": "assets/js/19.4b9fe5b6.js",
    "revision": "a2a6c3aca61da1e440768c56b3a41131"
  },
  {
    "url": "assets/js/2.0376af32.js",
    "revision": "583e68ebb141329b92ffe1c31b2e0c62"
  },
  {
    "url": "assets/js/20.21fd635d.js",
    "revision": "698f5d5874081a068f1cc342c7ea7d5b"
  },
  {
    "url": "assets/js/21.00d7e378.js",
    "revision": "8293f927299ad499f1e93f21e5d259d2"
  },
  {
    "url": "assets/js/22.3ad11c5d.js",
    "revision": "7f3fbe9f14d42ac019b147fcf803128a"
  },
  {
    "url": "assets/js/23.93d921eb.js",
    "revision": "74e744b273b548577e2f3048386428f0"
  },
  {
    "url": "assets/js/24.b530fa92.js",
    "revision": "90526987d2bc0277432b5eff52c56150"
  },
  {
    "url": "assets/js/25.5c87df82.js",
    "revision": "e25e70e66d64ddb5cb169614bd85a97d"
  },
  {
    "url": "assets/js/26.61559d73.js",
    "revision": "10d7bbd5490c43c389b5f134f076f1d0"
  },
  {
    "url": "assets/js/27.ebec5cbb.js",
    "revision": "052d8cf1820941ce1f0829297d5aaede"
  },
  {
    "url": "assets/js/28.3f260411.js",
    "revision": "13e55fe1bc23973a8644b288f6b75b87"
  },
  {
    "url": "assets/js/29.1157efa3.js",
    "revision": "35ae4be2434599b3c552cf21981857df"
  },
  {
    "url": "assets/js/3.fbfb168a.js",
    "revision": "3653c408719257225797fa058f4e233f"
  },
  {
    "url": "assets/js/30.55df24c4.js",
    "revision": "bca866cace8f1e26286d9098b8fc837b"
  },
  {
    "url": "assets/js/31.5f8ba6da.js",
    "revision": "8a6cff56139c10f3afa94d0d1481979f"
  },
  {
    "url": "assets/js/32.01784126.js",
    "revision": "2fef13d3677d233f99eef444e75ea733"
  },
  {
    "url": "assets/js/33.552e573f.js",
    "revision": "8228c21d3b1c1e99523f069ab5cb8c3f"
  },
  {
    "url": "assets/js/34.902dd3f1.js",
    "revision": "b3e393fa204112b81d20646f862bfaef"
  },
  {
    "url": "assets/js/35.11253bc4.js",
    "revision": "361ca5acff9a123c07dbb11c69dda82a"
  },
  {
    "url": "assets/js/36.d066585e.js",
    "revision": "44c92aa23afbf0c3b5dd24ee844a0498"
  },
  {
    "url": "assets/js/37.2df21659.js",
    "revision": "0acbd04fdd337b33935d3f1140571f46"
  },
  {
    "url": "assets/js/38.f9824e70.js",
    "revision": "214b9a7a18e6b0b6a7a0414f462a1ce3"
  },
  {
    "url": "assets/js/39.35b43bf3.js",
    "revision": "f3575c464de8aedd0774ba8dad9aea41"
  },
  {
    "url": "assets/js/4.f2fd0f1a.js",
    "revision": "7e14bfe1fdf47d5227f1ee0b1e849d69"
  },
  {
    "url": "assets/js/40.9ec33cd3.js",
    "revision": "ffb140816b8b4197de3ea3a9a453790a"
  },
  {
    "url": "assets/js/41.d4405ce7.js",
    "revision": "fec6c7a1487eb318e8e49d6dc0ed3071"
  },
  {
    "url": "assets/js/42.2454948c.js",
    "revision": "470bba8212eed2d4b8a494d7dc8a9df5"
  },
  {
    "url": "assets/js/43.763f4a79.js",
    "revision": "6675f73a9074ac702e0573efb4135d3c"
  },
  {
    "url": "assets/js/44.cdc3492b.js",
    "revision": "3c3f7b716c527a6138c793a7d5e1722d"
  },
  {
    "url": "assets/js/45.b3c7b956.js",
    "revision": "386205d6d256cf6095477bc820b92168"
  },
  {
    "url": "assets/js/5.f99aa354.js",
    "revision": "caaa688374104eb9af61b781dab5edeb"
  },
  {
    "url": "assets/js/6.c5282e5a.js",
    "revision": "cf54a50b051cfa61ebbf2028958d2005"
  },
  {
    "url": "assets/js/7.22d300fd.js",
    "revision": "dad8fbd86c3af4aa1c438cdc1824c771"
  },
  {
    "url": "assets/js/8.91702e5b.js",
    "revision": "e0561ae5d95e70019af46dc85e215032"
  },
  {
    "url": "assets/js/9.be4a1788.js",
    "revision": "b31d36e80645b6e029482eda13182d99"
  },
  {
    "url": "assets/js/app.80332d4b.js",
    "revision": "3492088c027434706b9a7bbac24d0469"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.80026ea4.js",
    "revision": "63123dc6b3c6e541843e1eea75f9a3b1"
  },
  {
    "url": "assets/js/vendors~flowchart.4ed733ac.js",
    "revision": "028da27049ac50ab98ff51c70b551dea"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "82f711d9dc1ba2b0a43893d22a95152a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2d0eee42bd4c56d2f39c0b2343ee5766"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "87a5922ed74175693fbcaab0f202155d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0d16b46d6e6eaa2d04cc19f5e797a970"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "35d760484d37350d97214a672d417026"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "618c2e11266f58558f29d0f8ce2c2476"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "f56510aff81f5dd33a77c82d1505525c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c0f84cf887dc869b03830bb420c2622b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "85cf960ab60f05408669c7b0e28b6c7a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "056f8ea5eb17e5e8311aec54c78cedce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "94c83b4baeaf406cf8c49143a745bc6f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "370c200e98b1dc3b1e0c7c8b00902f8d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e4bb383f2f952bf0eff1a38330384ea6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c85ad19c8778fa7479bcfdb1e9f032ae"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "830441bbce29ce02e82e54831ea340f2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "57c249434b3b933138dd0264cc4f9b31"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cb74f33bc01eab3486e8c40fd528e869"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "66433ced653e15dbc617fb276754b229"
  },
  {
    "url": "timeline/index.html",
    "revision": "05c8bbdc5e5708ef3d03d5bb87d3b855"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "cf8e5a775466769a52262d686ab6da8c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "da3215cb00396da10797967cd7bf5353"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c891c63fcf8d792d4553b663e2c8277a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e29b218f99db7542fa1463fdc879c46d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "13046f1e0dc433cea65f13a97ebf260a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
