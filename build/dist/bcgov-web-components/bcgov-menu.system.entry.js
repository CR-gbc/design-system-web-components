System.register(["./p-9de5bc1f.system.js","./p-ad65929c.system.js"],(function(e){"use strict";var t,i,s,n,r,u,a;return{setters:[function(e){t=e.r;i=e.h;s=e.H;n=e.g},function(e){r=e.m;u=e.a;a=e.k}],execute:function(){var o=e("bcgov_menu",function(){function e(e){var i=this;t(this,e);this.alignment="left";this.menuId="menu";this.instructions="Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.";this.breakpoint=0;this.hamburger=true;this.isSubmenu=false;this.showSubmenu=function(e,t){if(!i.isSubmenu){return}if(t){e.classList.add("expanded")}else{e.classList.remove("expanded")}e.setAttribute("aria-expanded",t?"true":"false");e.setAttribute("tabindex",t?"-1":"0");e.setAttribute("aria-selected",t?"true":"false");var s=e.querySelector("ul");if(null!==s){s.setAttribute("aria-hidden",t?"false":"true");if(t){var n=e.querySelector("ul > li:first-child");n.setAttribute("tabindex","0");n.focus()}else{i.el.focus()}}}}e.prototype.componentWillLoad=function(){this.isSubmenu="UL"===this.el.parentElement.nodeName;[].forEach.call(this.el.querySelectorAll("a"),(function(e){r(e)}));var e=this;if(!this.isSubmenu){this.isDesktop();window.addEventListener("resize",(function(){e.isDesktop()}))}};e.prototype.componentDidRender=function(){if(this.isSubmenu){this.el.setAttribute("aria-haspopup",true);this.el.setAttribute("aria-expanded",false);this.el.setAttribute("aria-selected",false);this.el.setAttribute("tabindex",0)}else{var e=this.el.querySelector("ul > *:first-child");if(null!==e){e.setAttribute("tabindex",0)}}};e.prototype.isDesktop=function(){var e=false;if(!this.isSubmenu){if(window.innerWidth>=this.breakpoint){if(!this.el.classList.contains("is-desktop")){this.el.classList.add("is-desktop")}e=true}else{this.el.classList.remove("is-desktop")}}else{var t=u(this.el,"bcgov-menu");if(null!==t&&t.getAttribute("breakpoint")){var i=parseInt(t.getAttribute("breakpoint"));e=window.innerWidth>=i}}return e};e.prototype.onMouseEnter=function(e){if(this.isDesktop()){var t=e.target;this.showSubmenu(t,true)}};e.prototype.onMouseLeave=function(e){if(this.isDesktop()){var t=e.target;this.showSubmenu(t,false)}};e.prototype.onClick=function(e){if(!this.isDesktop()){var t=e.target;var i=t.parentElement;this.showSubmenu(i,!i.classList.contains("expanded"))}};e.prototype.onKeyDown=function(e){var t=e.srcElement;if(!this.isSubmenu||true){switch(e.keyCode){case a.enter:t.querySelector("a").click();case a.space:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,true);break;case a.esc:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,false);break;case a.right:e.preventDefault();this.focusChange(t,"next");break;case a.left:e.preventDefault();this.focusChange(t,"prev");break;case a.up:e.preventDefault();this.focusChange(t,"up");break;case a.down:e.preventDefault();this.focusChange(t,"down");break}}};e.prototype.focusChange=function(e,t){if(t===void 0){t="next"}if(this.isSubmenu){return}var i;if("next"===t||"down"===t){i=e.nextElementSibling}else if("prev"==t||"up"===t){i=e.previousElementSibling}var s=null!==u(e,'ul[role="menu"]');var n=s&&("up"===t||"down"===t)||!s&&("prev"===t||"next"===t);if(!n){return}if(null!=i&&("LI"===e.nodeName||"BCGOV-MENU"===e.nodeName)){e.setAttribute("tabindex","-1");i.setAttribute("tabindex","0");i.focus()}};e.prototype.render=function(){var e="align-"+this.alignment;var t="bcgov-instructions-"+this.menuId;if(this.isSubmenu){return i(s,{role:"menuitem",class:"expandable","aria-label":this.name},i("a",{href:this.href,tabindex:"-1"},this.name),i("ul",{role:"menu","aria-hidden":"true"},i("slot",null)))}else{if(undefined!==this.primary){return i(s,null,i("ul",{role:"menubar",tabindex:"0",class:e,"aria-labelledby":t},i("slot",null)),i("div",{class:"sr-only","aria-hidden":"true",id:t},this.instructions))}else{return i(s,null,i("ul",{role:"menubar",class:e},i("slot",null)))}}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return e}())}}}));