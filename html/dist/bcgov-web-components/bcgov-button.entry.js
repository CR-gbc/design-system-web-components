import{r as n,h as t,H as i,g as e}from"./p-100c0da1.js";function a(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function o(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},e=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),e.forEach(function(t){r(n,t,i[t])})}return n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var i=[],e=!0,a=!1,r=void 0;try{for(var o,s=n[Symbol.iterator]();!(e=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);e=!0);}catch(n){a=!0,r=n}finally{try{e||null==s.return||s.return()}finally{if(a)throw r}}return i}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f={},l={};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(l=document)}catch(n){}var c=(f.navigator||{}).userAgent,u=void 0===c?"":c,m=f,d=l,g=!!d.documentElement&&!!d.head&&"function"==typeof d.addEventListener&&"function"==typeof d.createElement,h=(~u.indexOf("MSIE")||u.indexOf("Trident/"),"fa"),p="svg-inline--fa",v="data-fa-i2svg",b={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w=m.FontAwesomeConfig||{};d&&"function"==typeof d.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var t=s(n,2),i=t[1],e=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=d.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(t[0]));null!=e&&(w[i]=e)});var y=o({},{familyPrefix:h,replacementClass:p,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},w);y.autoReplaceSvg||(y.observeMutations=!1);var k=o({},y);m.FontAwesomeConfig=k;var x=m||{};x.___FONT_AWESOME___||(x.___FONT_AWESOME___={}),x.___FONT_AWESOME___.styles||(x.___FONT_AWESOME___.styles={}),x.___FONT_AWESOME___.hooks||(x.___FONT_AWESOME___.hooks={}),x.___FONT_AWESOME___.shims||(x.___FONT_AWESOME___.shims=[]);var z=x.___FONT_AWESOME___,M=[];g&&((d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState)||d.addEventListener("DOMContentLoaded",function n(){d.removeEventListener("DOMContentLoaded",n),M.map(function(n){return n()})}));var C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},O="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function I(){for(var n=12,t="";n-- >0;)t+=O[62*Math.random()|0];return t}function j(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L(n){return Object.keys(n||{}).reduce(function(t,i){return t+"".concat(i,": ").concat(n[i],";")},"")}function A(n){return n.size!==C.size||n.x!==C.x||n.y!==C.y||n.rotate!==C.rotate||n.flipX||n.flipY}function D(n){var t=n.transform,i=n.iconWidth,e={transform:"translate(".concat(n.containerWidth/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)");return{outer:e,inner:{transform:"".concat(a," ").concat(r," ").concat(o)},path:{transform:"translate(".concat(i/2*-1," -256)")}}}var E={x:0,y:0,width:"100%",height:"100%"};function P(n){return n.attributes&&(n.attributes.fill||!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(n.attributes.fill="black"),n}function S(n){var t=n.icons,i=t.main,e=t.mask,a=n.prefix,r=n.iconName,s=n.transform,f=n.symbol,l=n.title,c=n.maskId,u=n.titleId,m=n.extra,d=n.watchable,g=void 0!==d&&d,h=e.found?e:i,p=h.width,b=h.height,w="fa-w-".concat(Math.ceil(p/b*16)),y=[k.replacementClass,r?"".concat(k.familyPrefix,"-").concat(r):"",w].filter(function(n){return-1===m.classes.indexOf(n)}).concat(m.classes).join(" "),x={children:[],attributes:o({},m.attributes,{"data-prefix":a,"data-icon":r,class:y,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})};g&&(x.attributes[v]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||I())},children:[l]});var z=o({},x,{prefix:a,iconName:r,main:i,mask:e,maskId:c,transform:s,symbol:f,styles:m.styles}),M=e.found&&i.found?function(){var n,t=z.children,i=z.attributes,e=z.main,a=z.mask,r=z.maskId,s=e.icon,f=a.icon,l=D({transform:z.transform,containerWidth:a.width,iconWidth:e.width}),c={tag:"rect",attributes:o({},E,{fill:"white"})},u=s.children?{children:s.children.map(P)}:{},m={tag:"g",attributes:o({},l.inner),children:[P(o({tag:s.tag,attributes:o({},s.attributes,l.path)},u))]},d={tag:"g",attributes:o({},l.outer),children:[m]},g="mask-".concat(r||I()),h="clip-".concat(r||I()),p={tag:"mask",attributes:o({},E,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[c,d]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:(n=f,"g"===n.tag?n.children:[n])},p]};return t.push(v,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(g,")")},E)}),{children:t,attributes:i}}():function(){var n=z.children,t=z.attributes,i=z.main,e=z.transform,a=L(z.styles);if(a.length>0&&(t.style=a),A(e)){var r=D({transform:e,containerWidth:i.width,iconWidth:i.width});n.push({tag:"g",attributes:o({},r.outer),children:[{tag:"g",attributes:o({},r.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:o({},i.icon.attributes,r.path)}]}]})}else n.push(i.icon);return{children:n,attributes:t}}(),C=M.attributes;return z.children=M.children,z.attributes=C,f?function(){var n=z.iconName,t=z.children,i=z.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o({},z.attributes,{id:!0===i?"".concat(z.prefix,"-").concat(k.familyPrefix,"-").concat(n):i}),children:t}]}]}():function(){var n=z.children,t=z.main,i=z.mask,e=z.attributes,a=z.styles,r=z.transform;if(A(r)&&t.found&&!i.found){var s={x:t.width/t.height/2,y:.5};e.style=L(o({},a,{"transform-origin":"".concat(s.x+r.x/16,"em ").concat(s.y+r.y/16,"em")}))}return[{tag:"svg",attributes:e,children:n}]}()}var T=function(n,t,i,e){var a,r,o,s=Object.keys(n),f=s.length,l=void 0!==e?function(n,t){return function(i,e,a,r){return n.call(t,i,e,a,r)}}(t,e):t;for(void 0===i?(a=1,o=n[s[0]]):(a=0,o=i);a<f;a++)o=l(o,n[r=s[a]],r,n);return o};function R(n,t){var i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,e=void 0!==i&&i,a=Object.keys(t).reduce(function(n,i){var e=t[i];return e.icon?n[e.iconName]=e.icon:n[i]=e,n},{});"function"!=typeof z.hooks.addPack||e?z.styles[n]=o({},z.styles[n]||{},a):z.hooks.addPack(n,a),"fas"===n&&R("fa",t)}var N=z.styles,B=z.shims,X=function(){var n=function(n){return T(N,function(t,i,e){return t[e]=T(i,n,{}),t},{})};n(function(n,t,i){return t[3]&&(n[t[3]]=i),n}),n(function(n,t,i){var e=t[2];return n[i]=i,e.forEach(function(t){n[t]=i}),n});var t="far"in N;T(B,function(n,i){var e=i[1];return"far"!==e||t||(e="fas"),n[i[0]]={prefix:e,iconName:i[2]},n},{})};function H(n,t,i){if(n&&n[t]&&n[t][i])return{prefix:t,iconName:i,icon:n[t][i]}}function W(n){var t=n.tag,i=n.attributes,e=void 0===i?{}:i,a=n.children,r=void 0===a?[]:a;return"string"==typeof n?j(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce(function(t,i){return t+"".concat(i,'="').concat(j(n[i]),'" ')},"").trim()}(e),">").concat(r.map(W).join(""),"</").concat(t,">")}function U(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}X(),(U.prototype=Object.create(Error.prototype)).constructor=U;var Y={fill:"currentColor"},V={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},$=(o({},Y,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),o({},V,{attributeName:"opacity"}));function _(n){var t=n[0],i=n[1],e=s(n.slice(4),1)[0];return{found:!0,width:t,height:i,icon:Array.isArray(e)?{tag:"g",attributes:{class:"".concat(k.familyPrefix,"-").concat(b.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat(b.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat(b.PRIMARY),fill:"currentColor",d:e[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:e}}}}o({},Y,{cx:"256",cy:"364",r:"28"}),o({},V,{attributeName:"r",values:"28;14;28;28;14;28;"}),o({},$,{values:"1;0;1;1;0;1;"}),o({},Y,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),o({},$,{values:"1;0;0;0;0;1;"}),o({},Y,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),o({},$,{values:"0;0;1;1;0;0;"});var q='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function F(){k.autoAddCss&&!Z&&(function(n){if(n&&g){var t=d.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var i=d.head.childNodes,e=null,a=i.length-1;a>-1;a--){var r=i[a],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=r)}d.head.insertBefore(t,e)}}(function(){var n=h,t=p,i=k.familyPrefix,e=k.replacementClass,a=q;if(i!==n||e!==t){var r=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(r,".".concat(i,"-")).replace(o,"--".concat(i,"-")).replace(s,".".concat(e))}return a}()),Z=!0)}function G(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(n){return W(n)})}}),Object.defineProperty(n,"node",{get:function(){if(g){var t=d.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function K(n){var t=n.prefix,i=void 0===t?"fa":t,e=n.iconName;if(e)return H(Q.definitions,i,e)||H(z.styles,i,e)}var J,Q=new(function(){function n(){!function(t){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.definitions={}}var t,i;return t=n,(i=[{key:"add",value:function(){for(var n=this,t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(t){n.definitions[t]=o({},n.definitions[t]||{},a[t]),R(t,a[t]),X()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(function(t){var e=i[t],a=e.prefix,r=e.iconName,o=e.icon;n[a]||(n[a]={}),n[a][r]=o}),n}}])&&a(t.prototype,i),n}()),Z=!1,nn=(J=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.transform,e=void 0===i?C:i,a=t.symbol,r=void 0!==a&&a,s=t.mask,f=void 0===s?null:s,l=t.maskId,c=void 0===l?null:l,u=t.title,m=void 0===u?null:u,d=t.titleId,g=void 0===d?null:d,h=t.classes,p=void 0===h?[]:h,v=t.attributes,b=void 0===v?{}:v,w=t.styles,y=void 0===w?{}:w;if(n){var x=n.prefix,z=n.iconName,M=n.icon;return G(o({type:"icon"},n),function(){return F(),k.autoA11y&&(m?b["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(g||I()):(b["aria-hidden"]="true",b.focusable="false")),S({icons:{main:_(M),mask:f?_(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:z,transform:o({},C,e),symbol:r,title:m,maskId:c,titleId:g,extra:{attributes:b,styles:y,classes:p}})})}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(n||{}).icon?n:K(n||{}),e=t.mask;return e&&(e=(e||{}).icon?e:K(e||{})),J(i,o({},t,{mask:e}))}),tn={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};const en=class{constructor(t){n(this,t),this.link="button",this.active="false",this.eventHandler=this.eventHandlerFunction,this.buttonStyle="primary",this.target=null,this.dataTarget=null,this.breakpoint=700}eventHandlerFunction(){}componentDidRender(){this.eventHandler(this.el);const n=this.el.getAttribute("button-style");if("search"===n||"search-inline"===n){Q.add(tn);const n=this.el.querySelector("button"),t=nn(tn).html[0];n.innerHTML=`<span class="bcgov-svg-icon">${t}</span><span class="bcgov-button-text">${n.innerHTML}</span>`}}componentWillLoad(){if(null!==this.dataTarget){const n=this;this.breakpoint=this.getParentBreakpoint(),this.el.setAttribute("data-breakpoint",`${this.breakpoint}`);const t=document.getElementById(this.dataTarget);null!==t&&("false"===this.active&&t.classList.add("target-hidden"),window.addEventListener("click",function(t){const i=t.srcElement,e=n.el.querySelector("button");null===i.closest("bcgov-menu")&&i.parentElement!==n.el&&e.getAttribute("aria-expanded",!0)})),this.isDesktop(),window.addEventListener("resize",function(){n.isDesktop()})}}getParentBreakpoint(){let n="0";if(null!==this.dataTarget){const t=document.getElementById(this.dataTarget);null!==t&&t.hasAttribute("breakpoint")&&(n=t.getAttribute("breakpoint"))}return parseInt(n)}isDesktop(){return window.innerWidth>=this.breakpoint?this.el.classList.add("is-desktop"):this.el.classList.remove("is-desktop"),!1}onClick(){if(null!==this.dataTarget){const n=document.getElementById(this.dataTarget),t=this.el.querySelector("button");null!==n&&(void 0!==t&&t.hasAttribute("aria-expanded")&&t.setAttribute("aria-expanded",n.classList.contains("target-hidden")?"true":"false"),n.classList.contains("target-hidden")?n.classList.remove("target-hidden"):n.classList.add("target-hidden"))}}render(){let n={class:`${this.buttonStyle}`};return["hamburger","search"].includes(this.buttonStyle)?(n["aria-expanded"]=this.active,t(i,{"data-target":this.dataTarget,class:"bcgov-button"},t("button",Object.assign({},n),t("div",null),t("slot",null)))):"button"===this.link?("search-inline"==this.buttonStyle&&(n.type="submit"),t(i,{class:"bcgov-button"},t("button",Object.assign({},n),t("slot",null)))):(n.href=this.link,n.target=this.target,n.role="button",t(i,{class:"bcgov-button"},t("a",Object.assign({},n),t("slot",null))))}get el(){return e(this)}};export{en as bcgov_button};