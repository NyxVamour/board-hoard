"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[2502],{27631:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var r=o(69307),s=o(69596),c=o.n(s),a=o(65736),l=o(92694);const n=(0,l.applyFilters)("woocommerce_admin_stock_report_advanced_filters",{filters:{},title:(0,a._x)("Products Match <select/> Filters","A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),i=(0,l.applyFilters)("woocommerce_admin_stock_report_filters",[{label:(0,a.__)("Show","woocommerce"),staticParams:["paged","per_page"],param:"type",showFilters:()=>!0,filters:[{label:(0,a.__)("All products","woocommerce"),value:"all"},{label:(0,a.__)("Out of stock","woocommerce"),value:"outofstock"},{label:(0,a.__)("Low stock","woocommerce"),value:"lowstock"},{label:(0,a.__)("In stock","woocommerce"),value:"instock"},{label:(0,a.__)("On backorder","woocommerce"),value:"onbackorder"}]},{label:(0,a.__)("Filter by","woocommerce"),staticParams:["paged","per_page"],param:"filter",showFilters:()=>Object.keys(n.filters).length,filters:[{label:(0,a.__)("All Products","woocommerce"),value:"all"},{label:(0,a.__)("Advanced Filters","woocommerce"),value:"advanced"}]}]);var m=o(22629),u=o(86020),d=o(10431),_=o(81595),p=o(74617),k=o(17844),w=o(66777),b=o(91978),y=o(81514);const h=(0,b.O3)("stockStatuses",{});class f extends r.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,a.__)("Product / Variation","woocommerce"),key:"title",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,a.__)("SKU","woocommerce"),key:"sku",isSortable:!0},{label:(0,a.__)("Status","woocommerce"),key:"stock_status",isSortable:!0,defaultSort:!0},{label:(0,a.__)("Stock","woocommerce"),key:"stock_quantity",isSortable:!0}]}getRowsContent(e=[]){const{query:t}=this.props,o=(0,d.getPersistedQuery)(t);return e.map((e=>{const{id:t,manage_stock:r,parent_id:s,sku:c,stock_quantity:l,stock_status:n,low_stock_amount:i}=e,k=(0,m.decodeEntities)(e.name),w=(0,d.getNewPath)(o,"/analytics/products",{filter:"single_product",products:s||t}),b=(0,y.jsx)(u.Link,{href:w,type:"wc-admin",children:k}),f=(0,p.getAdminLink)("post.php?action=edit&post="+(s||t));var g,v,C;return[{display:b,value:k},{display:c,value:c},{display:(g=n,C=i,(v=l)&&g&&v<=C==="instock"?(0,y.jsx)(u.Link,{href:f,type:"wp-admin",children:(0,a._x)("Low","Indication of a low quantity","woocommerce")}):(0,y.jsx)(u.Link,{href:f,type:"wp-admin",children:h[n]})),value:h[n]},{display:r?(0,_.formatValue)(this.context.getCurrencyConfig(),"number",l):(0,a.__)("N/A","woocommerce"),value:l}]}))}getSummary(e){const{products:t=0,outofstock:o=0,lowstock:r=0,instock:s=0,onbackorder:c=0}=e,l=this.context.getCurrencyConfig();return[{label:(0,a._n)("Product","Products",t,"woocommerce"),value:(0,_.formatValue)(l,"number",t)},{label:(0,a.__)("Out of stock","woocommerce"),value:(0,_.formatValue)(l,"number",o)},{label:(0,a.__)("Low stock","woocommerce"),value:(0,_.formatValue)(l,"number",r)},{label:(0,a.__)("On backorder","woocommerce"),value:(0,_.formatValue)(l,"number",c)},{label:(0,a.__)("In stock","woocommerce"),value:(0,_.formatValue)(l,"number",s)}]}render(){const{advancedFilters:e,filters:t,query:o}=this.props;return(0,y.jsx)(w.Z,{endpoint:"stock",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products","outofstock","lowstock","instock","onbackorder"],query:o,tableQuery:{orderby:o.orderby||"stock_status",order:o.order||"asc",type:o.type||"all"},title:(0,a.__)("Stock","woocommerce"),filters:t,advancedFilters:e})}}f.contextType=k.CurrencyContext;const g=f;var v=o(56739);class C extends r.Component{render(){const{query:e,path:t}=this.props;return(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(v.Z,{query:e,path:t,showDatePicker:!1,filters:i,advancedFilters:n,report:"stock"}),(0,y.jsx)(g,{query:e,filters:i,advancedFilters:n})]})}}C.propTypes={query:c().object.isRequired}}}]);