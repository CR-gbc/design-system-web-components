import{r as registerInstance,h,H as Host,g as getElement}from"./index-54307ef5.js";import{m as menuElement,a as findAncestor,k as keys}from"./utils-9a052f8d.js";var BcgovMenu=function(){function e(e){var t=this;registerInstance(this,e);this.alignment="left";this.menuId="menu";this.instructions="Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.";this.breakpoint=0;this.hamburger=true;this.active=false;this.allowHover=false;this.menuTimeOut=500;this.isSubmenu=false;this.showSubmenu=function(e,i){if(!t.isSubmenu){return}if(i){e.classList.add("expanded")}else{e.classList.remove("expanded")}e.setAttribute("aria-expanded",i?"true":"false");e.setAttribute("tabindex",i?"-1":"0");var s=e.querySelector("ul");if(null!==s){s.setAttribute("aria-hidden",i?"false":"true");if(i){var n=e.querySelector("ul > li:first-child");n.setAttribute("tabindex","0")}}}}e.prototype.componentWillLoad=function(){this.isSubmenu="UL"===this.el.parentElement.nodeName;[].forEach.call(this.el.querySelectorAll("a"),(function(e){menuElement(e)}));var e=this;this.bodyTag=document.getElementsByTagName("BODY")[0];if(!this.isSubmenu){this.isDesktop();window.addEventListener("resize",(function(){e.isDesktop()}))}};e.prototype.componentDidRender=function(){if(this.isSubmenu){this.el.setAttribute("aria-haspopup",true);this.el.setAttribute("aria-expanded",false);this.el.setAttribute("tabindex",-1);var e=this.el.closest("bcgov-menu[primary]");if(null!==e){this.allowHover=this.allowHover||e.hasAttribute("allow-hover");this.menuTimeOut=e.hasAttribute("menu-time-out")?e.getAttribute("menu-time-out"):this.menuTimeOut}}else{var t=this.el.querySelector("ul > *:first-child");if(null!==t){t.setAttribute("tabindex",0)}}};e.prototype.isDesktop=function(){var e=false;if(!this.isSubmenu){if(window.innerWidth>=this.breakpoint){if(!this.el.classList.contains("is-desktop")){this.el.classList.add("is-desktop")}if(undefined!==this.primary){if(!this.bodyTag.classList.contains("bcgov-menu-primary-is-desktop")){this.bodyTag.classList.add("bcgov-menu-primary-is-desktop")}}e=true}else{this.el.classList.remove("is-desktop");if(undefined!==this.primary){this.bodyTag.classList.remove("bcgov-menu-primary-is-desktop")}}}else{var t=findAncestor(this.el,"bcgov-menu");if(null!==t&&t.getAttribute("breakpoint")){var i=parseInt(t.getAttribute("breakpoint"));e=window.innerWidth>=i}}return e};e.prototype.onMouseEnter=function(e){if(this.isDesktop()&&this.allowHover){var t=e.target;this.showSubmenu(t,true)}};e.prototype.onMouseLeave=function(e){if(this.isDesktop()&&this.allowHover){var t=e.target;var i=this;clearTimeout(this.menuTimeOutState);this.menuTimeOutState=setTimeout((function(){i.showSubmenu(t,false)}),i.menuTimeOut);if(!this.isSubmenu){[].forEach.call(this.el.querySelectorAll("ul > *"),(function(e){e.setAttribute("tabindex",-1);e.blur()}))}}};e.prototype.onClick=function(e){var t=e.target;var i=findAncestor(t,"bcgov-menu");if(null===t.closest(".bcgov-primary-menu-close")){this.showSubmenu(i,!i.classList.contains("expanded"))}if("close-menu-mobile"===t.parentElement.getAttribute("id")){i.classList.add("target-hidden")}};e.prototype.onKeyDown=function(e){var t=e.srcElement;if(!this.isSubmenu||true){switch(e.keyCode){case keys.enter:t.querySelector("a").click();case keys.space:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,true);var i=this.el.querySelector("ul > li:first-child");i.focus();break;case keys.esc:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,false);this.el.focus();break;case keys.right:e.preventDefault();this.focusChange(t,"next");break;case keys.left:e.preventDefault();this.focusChange(t,"prev");break;case keys.up:e.preventDefault();this.focusChange(t,"up");break;case keys.down:e.preventDefault();this.focusChange(t,"down");break}}};e.prototype.focusChange=function(e,t){if(t===void 0){t="next"}var i;if(e===this.el.querySelector("ul")){i=e.querySelector("li:first-child");i=this.isDesktop()?i.nextElementSibling:i;e=i}else{if("next"===t||"down"===t){i=e.nextElementSibling}else if("prev"==t||"up"===t){i=e.previousElementSibling}}var s=null!==findAncestor(e,'ul[role="menu"]');var n=s&&("up"===t||"down"===t)||!s&&("prev"===t||"next"===t);if(!n){return}if(null!=i&&("LI"===e.nodeName||"BCGOV-MENU"===e.nodeName)){e.setAttribute("tabindex","-1");i.setAttribute("tabindex","0");i.focus()}};e.prototype.render=function(){var e="align-"+this.alignment;var t="bcgov-instructions-"+this.menuId;var i="expandable";if(this.isSubmenu){if(undefined!==this.active&&this.active){i+=" active"}return h(Host,{role:"menuitem",class:i,"aria-label":this.name},h("div",null,h("a",{href:this.href,tabindex:"-1"},this.name),h("span",null),h("slot",{name:"submenu-link"})),h("ul",{role:"menu","aria-hidden":"true"},h("slot",null)))}else{var s={role:"menubar",tabindex:"0",class:e};if(undefined!==this.primary){s["aria-labelledby"]=t}if(undefined!==this.sidebar){s["class"]+=" sidebar-menu"}return h(Host,null,h("ul",Object.assign({},s),undefined!==this.primary&&h("li",{role:"menuitem",class:"bcgov-primary-menu-close",tabindex:"-1","aria-hidden":"true","aria-labelId":"close-menu-mobile"},h("a",{href:"#","aria-label":"Close Mobile Menu",id:"close-menu-mobile"},h("span",null,"x"))),h("slot",null)),undefined!==this.primary&&h("div",{class:"sr-only","aria-hidden":"true",id:t},this.instructions))}};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{BcgovMenu as bcgov_menu};