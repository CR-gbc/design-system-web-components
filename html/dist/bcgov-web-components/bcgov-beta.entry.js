import{r as t,h as s,g as a,H as i}from"./p-100c0da1.js";const e=class{constructor(s){t(this,s),this.content="This Application is currently in Beta Phase",this.label="Beta"}componentWillLoad(){this.content=this.el.textContent||this.content,this.el.innerHTML=this.label}render(){return s(i,{class:"bcgov-beta","aria-label":this.content,role:"alert",tabindex:"0"})}get el(){return a(this)}};export{e as bcgov_beta};