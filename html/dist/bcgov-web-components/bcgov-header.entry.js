import{r as s,c as t,h as a,H as o,g as e}from"./p-100c0da1.js";import{f as n}from"./p-6bcf279c.js";const r=class{constructor(t){s(this,t),this.href="https://www2.gov.bc.ca/gov/content/home",this.logo="gov_bc_logo.svg"}componentWillLoad(){}componentDidRender(){const s=this;[].forEach.call(this.el.querySelectorAll("*[aria]"),function(s){s.classList.add("access")}),[].forEach.call(this.el.querySelectorAll("img"),function(t){const a=document.createElement("div");if(a.classList.add("banner"),void 0!==s.href&&""!==s.href){const o=document.createElement("a");o.classList.add("branding-logo"),o.setAttribute("aria-label","branding logo"),o.setAttribute("href",s.href),o.appendChild(t.cloneNode(!0)),a.appendChild(o)}else a.appendChild(t.cloneNode(!0));t.replaceWith(a)}),[].forEach.call(this.el.querySelectorAll("*[aria] a"),function(s){s.setAttribute("aria",""),n(s)})}getImage(){if(""===this.logo)return"";{let s=t(`./assets/${this.logo}`),o=a("img",{class:"header-logo",src:s,alt:"Logo"});return""!==this.href&&(o=a("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},o)),a("div",{class:"banner"},o)}}render(){return a(o,{class:"bcgov-header"},a("header",null,this.getImage(),a("slot",null)))}static get assetsDirs(){return["../../assets"]}get el(){return e(this)}};export{r as bcgov_header};