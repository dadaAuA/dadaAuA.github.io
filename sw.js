"use strict";var precacheConfig=[["/404.html","ada090b4a91963def4a863a8750823b2"],["/archives/2022/01/index.html","1c6c4668bd3bce81dc81ab3ac934069d"],["/archives/2022/index.html","bcc60a7ca58e661a389a65353f33f407"],["/archives/index.html","19f5e9e9a055fa743fd5c3b838be4a01"],["/css/first.css","a612147fc01694fc2c751a122d4c6606"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","a06d9186fb5fbd0ee4f69854effb7041"],["/index.html","17a926288e24985ecca8f3e089baeadd"],["/js/app.js","847e0b17095ca9aac4c51f4782a32a57"],["/js/iconfontInkss.js","f5d1775fcfe8f85508c40c16a6337119"],["/js/plugins/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","ac2eff45f2196210798a758e07573f42"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/thirdparty/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/thirdparty/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/posts/16107.html","e720494f3002505eb3a23ca2811078dd"],["/sw-register.js","c2abaa967f02970c48d06bf346fd8d25"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));