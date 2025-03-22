"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[2624],{76572:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(65736),n=t(69307),o=t(94333),s=t(10431),i=t(9818),c=t(86020),d=t(81921),l=t(14599),m=t(17844),p=t(7295),u=t(91978),y=t(81514);const{performanceIndicators:f}=(0,u.O3)("dataEndpoints",{performanceIndicators:[]});class h extends n.Component{renderMenu(){const{hiddenBlocks:e,isFirst:r,isLast:t,onMove:o,onRemove:s,onTitleBlur:i,onTitleChange:d,onToggleHiddenBlock:m,titleInput:p,controls:u}=this.props;return(0,y.jsx)(c.EllipsisMenu,{label:(0,a.__)("Choose which analytics to display and the section name","woocommerce"),placement:"bottom-end",renderContent:({onToggle:h})=>(0,y.jsxs)(n.Fragment,{children:[(0,y.jsx)(c.MenuTitle,{children:(0,a.__)("Display stats:","woocommerce")}),f.map(((r,t)=>{const a=!e.includes(r.stat);return(0,y.jsx)(c.MenuItem,{checked:a,isCheckbox:!0,isClickable:!0,onInvoke:()=>{m(r.stat)(),(0,l.recordEvent)("dash_indicators_toggle",{status:a?"off":"on",key:r.stat})},children:r.label},t)})),(0,y.jsx)(u,{onToggle:h,onMove:o,onRemove:s,isFirst:r,isLast:t,onTitleBlur:i,onTitleChange:d,titleInput:p})]})})}renderList(){const{query:e,primaryRequesting:r,secondaryRequesting:t,primaryError:n,secondaryError:o,primaryData:i,secondaryData:m,userIndicators:u,defaultDateRange:f}=this.props;if(r||t)return(0,y.jsx)(c.SummaryListPlaceholder,{numberOfItems:u.length});if(n||o)return null;const h=(0,s.getPersistedQuery)(e),{compare:g}=(0,d.getDateParamsFromQuery)(e,f),_="previous_period"===g?(0,a.__)("Previous period:","woocommerce"):(0,a.__)("Previous year:","woocommerce"),{formatAmount:k,getCurrencyConfig:b}=this.context,v=b();return(0,y.jsx)(c.SummaryList,{children:()=>u.map(((e,r)=>{const{primaryValue:t,secondaryValue:a,delta:n,reportUrl:o,reportUrlType:s}=(0,p.Z)({indicator:e,primaryData:i,secondaryData:m,currency:v,formatAmount:k,persistedQuery:h});return(0,y.jsx)(c.SummaryNumber,{href:o,hrefType:s,label:e.label,value:t,prevLabel:_,prevValue:a,delta:n,onLinkClickCallback:()=>{(0,l.recordEvent)("dash_indicators_click",{key:e.stat})}},r)}))})}render(){const{userIndicators:e,title:r}=this.props;return(0,y.jsxs)(n.Fragment,{children:[(0,y.jsx)(c.SectionHeader,{title:r||(0,a.__)("Store Performance","woocommerce"),menu:this.renderMenu()}),e.length>0&&(0,y.jsx)("div",{className:"woocommerce-dashboard__store-performance",children:this.renderList()})]})}}h.contextType=m.CurrencyContext;const g=(0,o.compose)((0,i.withSelect)(((e,r)=>{const{hiddenBlocks:t,query:a,filters:n}=r,o=f.filter((e=>!t.includes(e.stat))),s={hiddenBlocks:t,userIndicators:o,indicators:f};if(0===o.length)return s;const i=(0,p.A)(e,o,a,n);return{...s,...i}})))(h)},7295:(e,r,t)=>{t.d(r,{A:()=>p,Z:()=>m});var a=t(76292),n=t.n(a),o=t(92819),s=t(81921),i=t(67221),c=t(10431),d=t(81595),l=t(74617);const m=({indicator:e,primaryData:r,secondaryData:t,currency:a,formatAmount:n,persistedQuery:s})=>{const i=(0,o.find)(r.data,(r=>r.stat===e.stat)),m=(0,o.find)(t.data,(r=>r.stat===e.stat));if(!i||!m)return{};const p=i._links&&i._links.report[0]&&i._links.report[0].href||"",u=function(e,r,t){return e?"/jetpack"===e?(0,l.getAdminLink)("admin.php?page=jetpack#/dashboard"):(0,c.getNewPath)(r,e,{chart:t.chart}):""}(p,s,i),y="/jetpack"===p?"wp-admin":"wc-admin",f="currency"===i.format,h=(0,d.calculateDelta)(i.value,m.value);return{primaryValue:f?n(i.value):(0,d.formatValue)(a,i.format,i.value),secondaryValue:f?n(m.value):(0,d.formatValue)(a,m.format,m.value),delta:h,reportUrl:u,reportUrlType:y}},p=(e,r,t,a)=>{const{getReportItems:o,getReportItemsError:c,isResolving:d}=e(i.REPORTS_STORE_NAME),{woocommerce_default_date_range:l}=e(i.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),m=(0,s.getCurrentDates)(t,l),p=m.primary.before,u=m.secondary.before,y=r.map((e=>e.stat)).join(","),f=(0,i.getFilterQuery)({filters:a,query:t}),h={...f,after:(0,s.appendTimestamp)(m.primary.after,"start"),before:(0,s.appendTimestamp)(p,p.isSame(n()(),"day")?"now":"end"),stats:y},g={...f,after:(0,s.appendTimestamp)(m.secondary.after,"start"),before:(0,s.appendTimestamp)(u,u.isSame(n()(),"day")?"now":"end"),stats:y};return{primaryData:o("performance-indicators",h),primaryError:c("performance-indicators",h)||null,primaryRequesting:d("getReportItems",["performance-indicators",h]),secondaryData:o("performance-indicators",g),secondaryError:c("performance-indicators",g)||null,secondaryRequesting:d("getReportItems",["performance-indicators",g]),defaultDateRange:l}}}}]);