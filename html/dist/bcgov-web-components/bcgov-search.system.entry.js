System.register(["./index-0e836bd9.system.js"],(function(e){"use strict";var t,s,i,n;return{setters:[function(e){t=e.r;s=e.h;i=e.H;n=e.g}],execute:function(){var r=e("bcgov_search",function(){function e(e){t(this,e);this.breakpoint=0}e.prototype.componentWillLoad=function(){var e=this;e.isSearchMobile();window.addEventListener("resize",(function(){e.isSearchMobile()}))};e.prototype.isSearchMobile=function(){if(window.innerWidth>=this.breakpoint){if(!this.el.classList.contains("is-search-desktop")){this.el.classList.add("is-search-desktop")}}else{this.el.classList.remove("is-search-desktop")}};e.prototype.onKeyPress=function(e){if(e.which===10||e.which===13){e.target.closest("form").submit()}};e.prototype.render=function(){return s(i,{class:"bcgov-search"},s("div",{class:"search-container"},s("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}())}}}));