"use strict";(()=>{var u=JSON.parse('{"github":{"repository":"m7medalgandy/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"********-****-****-****-************","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"XPb5ZT_M4hgch4qbj-7GR"}}');var f=["keydown","mouseover","touchmove","touchstart","scroll","click"],p={reject(){},resolve(){}},i=new Promise((r,n)=>{p={resolve:r,reject:n}});Object.assign(i,{localKey:"__is_lazied",localValue:String(!0)});Object.defineProperties(i,{lazied:{get(){try{return localStorage.getItem(this.localKey)===String(this.localValue)}catch(r){return!0}},set(r){try{r?localStorage.setItem(this.localKey,String(this.localValue)):localStorage.removeItem(this.localKey)}catch(n){}}}});var l=r=>{i.lazied=!0,p.resolve({type:r.type});for(let n of f)window.removeEventListener(n,l)};if(i.lazied)p.resolve({type:"localStorage"});else{(document.documentElement.scrollTop!==0||document.body&&document.body.scrollTop!==0)&&l({type:"scroll"});for(let r of f)window.addEventListener(r,l)}var t=u.pwa,c=(r,n)=>{if(t.logs){console.groupCollapsed.apply(console,Array.isArray(r)?r:[r]);for(let e of n)console.log.apply(console,Array.isArray(e)?e:[e]);console.groupEnd()}};if("serviceWorker"in navigator){navigator.serviceWorker.register(t.serviceWorker.source,{scope:t.serviceWorker.scope}).then(n=>{var o;let e=[];n.scope&&e.push([`Scope: ${n.scope}`]),(o=n.active)!=null&&o.scriptURL&&e.push([`Script:  ${n.active.scriptURL}`]),e.push(["Build by: Fineshop Design"],["Developer site: https://fineshopdesign.com"]),c(["%cService Worker: Registered Successfully","color: green"],e)}).catch(n=>{c(["%cService Worker: Registration Failed","color: red"],["Error:",n])});let r=n=>e=>{e.init(n).then(()=>{let o=[["Version:",e.VERSION]],s=e.config,g=e.User.PushSubscription,h=e.Notifications,d=window.location.origin;if(s){o.push(["App ID:",s.appId]),o.push(["Origin:",s.origin]),o.push(["Site Name:",s.siteName]);let a=s.userConfig;a&&(a.serviceWorkerParam&&o.push(["Scope:",d+a.serviceWorkerParam.scope]),o.push(["Script:",d+a.path+a.serviceWorkerPath]))}g.id&&o.push(["Subscription ID:",g.id]),o.push(["Notification:",h.permissionNative]),c(["%cOneSignal: Initialized Successfully","color: green"],o)}).catch(o=>{c(["%cOneSignal: Initialization Failed","color: red"],["Error:",o])})};if(t.oneSignalEnabled){let n=Object.assign({},t.oneSignalConfig);window.OneSignalDeferred=window.OneSignalDeferred||[],window.OneSignalDeferred.push(r(n)),typeof OneSignal=="undefined"&&i.then(()=>{let e=document.createElement("script");e.src=t.oneSignalSDK,e.async=!0,e.defer=!0;let o=document.getElementsByTagName("script")[0];o!=null&&o.parentNode?o.parentNode.insertBefore(e,o):document.head.appendChild(e)})}}})();
