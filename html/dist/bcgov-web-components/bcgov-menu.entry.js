import{r as e,h as t,H as s,g as i}from"./p-100c0da1.js";import{m as n,a,k as o}from"./p-6bcf279c.js";const r=class{constructor(t){e(this,t),this.alignment="left",this.menuId="menu",this.instructions="Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.",this.breakpoint=0,this.hamburger=!0,this.active=!1,this.isSubmenu=!1,this.showSubmenu=(e,t)=>{if(!this.isSubmenu)return;t?e.classList.add("expanded"):e.classList.remove("expanded"),e.setAttribute("aria-expanded",t?"true":"false"),e.setAttribute("tabindex",t?"-1":"0"),e.setAttribute("aria-selected",t?"true":"false");const s=e.querySelector("ul");if(null!==s)if(s.setAttribute("aria-hidden",t?"false":"true"),t){const t=e.querySelector("ul > li:first-child");t.setAttribute("tabindex","-1"),t.focus()}else this.el.focus()}}componentWillLoad(){this.isSubmenu="UL"===this.el.parentElement.nodeName,[].forEach.call(this.el.querySelectorAll("a"),function(e){n(e)});const e=this;this.isSubmenu||(this.isDesktop(),window.addEventListener("resize",function(){e.isDesktop()}))}componentDidRender(){if(this.isSubmenu)this.el.setAttribute("aria-haspopup",!0),this.el.setAttribute("aria-expanded",!1),this.el.setAttribute("aria-selected",!1),this.el.setAttribute("tabindex",-1);else{const e=this.el.querySelector("ul > *:first-child");null!==e&&e.setAttribute("tabindex",0)}}isDesktop(){let e=!1;if(this.isSubmenu){let t=a(this.el,"bcgov-menu");if(null!==t&&t.getAttribute("breakpoint")){const s=parseInt(t.getAttribute("breakpoint"));e=window.innerWidth>=s}}else window.innerWidth>=this.breakpoint?(this.el.classList.contains("is-desktop")||this.el.classList.add("is-desktop"),e=!0):this.el.classList.remove("is-desktop");return e}onMouseEnter(e){this.isDesktop()&&this.showSubmenu(e.target,!0)}onMouseLeave(e){this.isDesktop()&&this.showSubmenu(e.target,!1)}onClick(e){if(!this.isDesktop()){const t=a(e.target,"bcgov-menu");this.showSubmenu(t,!t.classList.contains("expanded"))}}onKeyDown(e){const t=e.srcElement;switch(e.keyCode){case o.enter:t.querySelector("a").click();case o.space:e.preventDefault(),e.stopPropagation(),this.showSubmenu(this.el,!0);break;case o.esc:e.preventDefault(),e.stopPropagation(),this.showSubmenu(this.el,!1);break;case o.right:e.preventDefault(),this.focusChange(t,"next");break;case o.left:e.preventDefault(),this.focusChange(t,"prev");break;case o.up:e.preventDefault(),this.focusChange(t,"up");break;case o.down:e.preventDefault(),this.focusChange(t,"down")}}focusChange(e,t="next"){if(this.isSubmenu)return;let s;"next"===t||"down"===t?s=e.nextElementSibling:"prev"!=t&&"up"!==t||(s=e.previousElementSibling);const i=null!==a(e,'ul[role="menu"]');(i&&("up"===t||"down"===t)||!i&&("prev"===t||"next"===t))&&(null==s||"LI"!==e.nodeName&&"BCGOV-MENU"!==e.nodeName||(e.setAttribute("tabindex","-1"),s.setAttribute("tabindex","0"),s.focus()))}render(){const e="align-"+this.alignment,i="bcgov-instructions-"+this.menuId;let n="expandabler";if(this.isSubmenu)return void 0!==this.active&&(n+=" active"),t(s,{role:"menuitem",class:n,"aria-label":this.name},t("div",null,t("a",{href:this.href,tabindex:"-1"},this.name),t("slot",{name:"submenu-link"})),t("ul",{role:"menu","aria-hidden":"true"},t("slot",null)));{const n={role:"menubar",tabindex:"0",class:e};return void 0!==this.primary&&(n["aria-labelledby"]=i),void 0!==this.sidebar&&(n.class+=" sidebar-menu"),t(s,null,t("ul",Object.assign({},n),t("slot",null)),void 0!==this.primary&&t("div",{class:"sr-only","aria-hidden":"true",id:i},this.instructions))}}get el(){return i(this)}};export{r as bcgov_menu};