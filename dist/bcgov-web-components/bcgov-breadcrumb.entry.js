import{r,h as s,H as t,g as e}from"./core-7e0712cf.js";import{b as a}from"./utils-923a28b7.js";const o=class{constructor(s){r(this,s)}componentWillLoad(){[].forEach.call(this.el.querySelectorAll("a, span"),(function(r){a(r)}))}render(){return s(t,{"aria-label":"Breadcrumb",role:"nav",class:"bcgov-breadcrumb"},s("ol",{itemscope:!0,itemtype:"http://schema.org/BreadcrumbList"},s("slot",null)))}get el(){return e(this)}};export{o as bcgov_breadcrumb};