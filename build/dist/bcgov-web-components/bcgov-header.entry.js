import{r as s,h as a,H as r,g as i}from"./p-9ae496aa.js";import{m as t}from"./p-d67e7413.js";const e=class{constructor(a){s(this,a)}componentWillLoad(){this.aTags=this.el.querySelectorAll("a[aria]"),this.imgTags=this.el.querySelectorAll("img"),this.headlineTags=this.el.querySelectorAll("div")}componentDidRender(){[{current:this.aTags,container:this.el.querySelector(".access")},{current:this.imgTags,container:this.el.querySelector(".branding-logo")},{current:this.headlineTags,container:this.el.querySelector(".hl")}].map(s=>{[].forEach.call(s.current,(function(a){t(a,s.container)}))})}render(){return a(r,null,a("header",{class:"bcgov-header"},a("div",{class:"banner"},a("a",{class:"branding-logo",href:"","aria-label":"branding logo"}),a("div",{class:"hl"}),a("div",{class:"access"}))))}get el(){return i(this)}};export{e as bcgov_header};