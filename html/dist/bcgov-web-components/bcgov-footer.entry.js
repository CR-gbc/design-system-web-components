import{r as o,c as t,h as s,H as r}from"./p-100c0da1.js";const e=class{constructor(t){o(this,t),this.logo="gov_bc_logo_white.png"}getImage(){if(""===this.logo)return"";{let o=t(`../../assets/${this.logo}`);return s("img",{class:"footer-logo",src:o,alt:"Logo"})}}render(){return s(r,Object.assign({},{role:"footer",className:"bcgov-footer"}),s("slot",null),this.getImage())}};export{e as bcgov_footer};