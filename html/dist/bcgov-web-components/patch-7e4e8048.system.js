System.register(["./index-8cd3b36a.system.js"],(function(r,e){"use strict";var t,n,s,o,i,c;return{setters:[function(r){t=r.C;n=r.p;s=r.w;o=r.a;i=r.d;c=r.N}],execute:function(){var a=function(){};var u=typeof Deno!=="undefined";var f=!u&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var p=u&&Deno.build.os==="windows";var m=f?process.cwd:u?Deno.cwd:function(){return"/"};var l=f?process.exit:u?Deno.exit:a;var d=function(r){return"__sc_import_"+r.replace(/\s|-/g,"_")};var v=r("a",(function(){if(!(t&&t.supports&&t.supports("color","var(--c)"))){return e.import("./css-shim-f9d004f5.system.js").then((function(){if(n.$cssShim$=s.__cssshim){return n.$cssShim$.i()}else{return 0}}))}return o()}));var h=r("p",(function(){{n.$cssShim$=s.__cssshim}var r=Array.from(i.querySelectorAll("script")).find((function(r){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(r.src)||r.getAttribute("data-stencil-namespace")===c}));var t=r["data-opts"]||{};if("onbeforeload"in r&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,s.location.href)).href;{w(t.resourcesUrl,r)}if(!s.customElements){return e.import("./dom-1dc0a966.system.js").then((function(){return t}))}}return o(t)}));var w=function(r,e){var t=d(c);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(o){var n=new Map;s[t]=function(o){var c=new URL(o,r).href;var a=n.get(c);if(!a){var u=i.createElement("script");u.type="module";u.crossOrigin=e.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+c+"'; window."+t+".m = m;"],{type:"application/javascript"}));a=new Promise((function(r){u.onload=function(){r(s[t].m);u.remove()}}));n.set(c,a);i.head.appendChild(u)}return a}}}}}}));