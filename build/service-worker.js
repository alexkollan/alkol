"use strict";var precacheConfig=[["/index.html","796f7614c9278c3179a8a790e7a3b08d"],["/static/css/main.809002a4.css","ae8d8db250acf40143eeda57e0cc715a"],["/static/js/main.4f03174a.js","67952ccb88adc99157f79138ac76bd93"],["/static/media/ainb.e2058eb6.png","e2058eb685e312eee5c2f7c306794a4b"],["/static/media/alkol.3907ba7f.png","3907ba7f332eb7f9b5dd04acb3fde726"],["/static/media/codepen.0dc350c4.png","0dc350c436f9a2c8fd5982ae9080234b"],["/static/media/css3.15678ffe.svg","15678ffe04860272db359a247ec7fc08"],["/static/media/es6.1f0e4175.svg","1f0e4175b8e6b1ff953d76ddb48fc73e"],["/static/media/github.7ab01e11.png","7ab01e11a5947651da4dfc6b5d0db3a5"],["/static/media/html5.d84fde66.svg","d84fde66a018a9c27722c99989c90d94"],["/static/media/icons-16.76957eb0.ttf","76957eb0b3f1dd52766872b7dd6c04d6"],["/static/media/icons-16.c22f3806.eot","c22f3806638273bd9e764fea0a812c51"],["/static/media/icons-16.d13388be.woff","d13388bee1190a551bb5d9c9f953a779"],["/static/media/icons-20.062208ea.eot","062208ea882dd2a7e2fa8552c6f32e3b"],["/static/media/icons-20.6d716ba4.ttf","6d716ba49663310796d6cf4d6d8b65b2"],["/static/media/icons-20.f56d7d34.woff","f56d7d3470cf9d60593812561aff63c4"],["/static/media/jquery.83f792c5.svg","83f792c579f0adbb7c642cbcdaa14392"],["/static/media/js.f2bd0c0c.svg","f2bd0c0cb064f241f93ab02be9e524b0"],["/static/media/mapaSquare.66b78fb1.jpg","66b78fb103bcb3390ed01c2cbf831fc5"],["/static/media/node.89ccb090.svg","89ccb09060a7adf788ea2340c54d6d78"],["/static/media/npm.6f7aeee8.svg","6f7aeee8bb8ee61edfd134eef3152e22"],["/static/media/react.dde9e24c.svg","dde9e24c77dec7a04bb825199f3c75a1"],["/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/static/media/vscode.d352b49d.svg","d352b49d5bdf366c20cc202ac09431a0"],["/static/media/webpack.96621d3c.svg","96621d3c37d96ad3bf792fcc848d912f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});