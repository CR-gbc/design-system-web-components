import{r as registerInstance,h,H as Host,g as getElement}from"./index-54307ef5.js";var BcgovSearch=function(){function e(e){registerInstance(this,e);this.breakpoint=0}e.prototype.componentWillLoad=function(){var e=this;e.isSearchMobile();window.addEventListener("resize",(function(){e.isSearchMobile()}))};e.prototype.isSearchMobile=function(){if(window.innerWidth>=this.breakpoint){if(!this.el.classList.contains("is-search-desktop")){this.el.classList.add("is-search-desktop")}}else{this.el.classList.remove("is-search-desktop")}};e.prototype.onKeyPress=function(e){if(e.which===10||e.which===13){e.target.closest("form").submit()}};e.prototype.render=function(){return h(Host,{class:"bcgov-search"},h("div",{class:"search-container"},h("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{BcgovSearch as bcgov_search};