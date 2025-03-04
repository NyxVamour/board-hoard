"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[2953],{48088:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var o=s(65736),r=s(55609),a=s(69307),i=s(94333),n=s(9818),c=s(86020),l=s(67221),m=s(14599),d=s(82625),p=s(66143),h=s(69596),u=s.n(h),g=s(92819),_=s(81514);class w extends a.Component{constructor(e){super(e),(0,p.Z)(this,"renderInput",(()=>{const{handleChange:e,name:t,inputText:s,inputType:o,options:a,value:i,component:n}=this.props,{disabled:c}=this.state;switch(o){case"checkboxGroup":return a.map((e=>e.options.length>0&&(0,_.jsxs)("div",{className:"woocommerce-setting__options-group","aria-labelledby":t+"-label",children:[e.label&&(0,_.jsx)("span",{className:"woocommerce-setting__options-group-label",children:e.label}),this.renderCheckboxOptions(e.options)]},e.key)));case"checkbox":return this.renderCheckboxOptions(a);case"button":return(0,_.jsx)(r.Button,{isSecondary:!0,onClick:this.handleInputCallback,disabled:c,children:s});case"component":const o=n;return(0,_.jsx)(o,{value:i,onChange:e,...this.props});case"select":return(0,_.jsx)(r.SelectControl,{options:a,value:i,onChange:s=>e({target:{name:t,type:"select",value:s}})});default:const l=(0,g.uniqueId)(t);return(0,_.jsx)("input",{id:l,type:"text",name:t,onChange:e,value:i,placeholder:s,disabled:c})}})),(0,p.Z)(this,"handleInputCallback",(()=>{const{createNotice:e,callback:t}=this.props;if("function"==typeof t)return new Promise(((s,o)=>{this.setState({disabled:!0}),t(s,o,e)})).then((()=>{this.setState({disabled:!1})})).catch((()=>{this.setState({disabled:!1})}))})),this.state={disabled:!1}}renderCheckboxOptions(e){const{handleChange:t,name:s,value:o}=this.props,{disabled:a}=this.state;return e.map((e=>(0,_.jsx)(r.CheckboxControl,{label:e.label,name:s,checked:o&&o.includes(e.value),onChange:o=>t({target:{checked:o,name:s,type:"checkbox",value:e.value}}),disabled:a},s+"-"+e.value)))}render(){const{helpText:e,label:t,name:s}=this.props;return(0,_.jsxs)("div",{className:"woocommerce-setting",children:[(0,_.jsx)("div",{className:"woocommerce-setting__label",id:s+"-label",children:t}),(0,_.jsxs)("div",{className:"woocommerce-setting__input",children:[this.renderInput(),e&&(0,_.jsx)("span",{className:"woocommerce-setting__help",children:e})]})]})}}w.propTypes={callback:u().func,handleChange:u().func.isRequired,helpText:u().oneOfType([u().string,u().array]),inputText:u().string,inputType:u().oneOf(["button","checkbox","checkboxGroup","text","component","select"]),label:u().string.isRequired,name:u().string.isRequired,options:u().arrayOf(u().shape({value:u().string,label:u().string,description:u().string,key:u().string,options:u().array})),value:u().oneOfType([u().string,u().array])};const v=(0,i.compose)((0,n.withDispatch)((e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}})))(w);var I=s(76292),S=s.n(I);const b=(e,t,s)=>{const o={};if(s&&(o.skip_existing=!0),"all"!==t.label)if("custom"===t.label){const s=S()().diff(S()(t.date,e),"days",!0);o.days=Math.floor(s)}else o.days=parseInt(t.label,10);return o};var x=s(96483);const C=(0,i.compose)([(0,n.withSelect)((e=>{const{getFormSettings:t}=e(l.IMPORT_STORE_NAME),{period:s,skipPrevious:o}=t();return{selectedPeriod:s,skipChecked:o}})),(0,n.withDispatch)((e=>{const{updateImportation:t,setImportStarted:s}=e(l.IMPORT_STORE_NAME),{createNotice:o}=e("core/notices");return{createNotice:o,setImportStarted:s,updateImportation:t}}))])((function({clearStatusAndTotalsCache:e,createNotice:t,dateFormat:s,importDate:i,onImportStarted:n,selectedPeriod:c,stopImport:l,skipChecked:d,status:p,setImportStarted:h,updateImportation:u}){const g=(e,s,o=!1)=>{u(e,o).then((e=>{"success"===e.status?t("success",e.message):(t("error",s),h(!1),l())})).catch((e=>{e&&e.message&&(t("error",e.message),h(!1),l())}))},w=()=>{const e=(0,x.addQueryArgs)("/wc-analytics/reports/import",b(s,c,d)),t=(0,o.__)("There was a problem rebuilding your report data.","woocommerce");g(e,t,!0),n()},v=()=>{l();const e=(0,o.__)("There was a problem stopping your current import.","woocommerce");g("/wc-analytics/reports/import/cancel",e)},I=()=>{const e=(0,o.__)("There was a problem deleting your previous data.","woocommerce");g("/wc-analytics/reports/import/delete",e),(0,m.recordEvent)("analytics_import_delete_previous"),h(!1)},S=()=>{h(!1),e()};return(0,_.jsx)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions",children:(()=>{const e="ready"!==p;return["initializing","customers","orders","finalizing"].includes(p)?(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(r.Button,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:v,children:(0,o.__)("Stop Import","woocommerce")}),(0,_.jsxs)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help",children:[(0,o.__)("Imported data will not be lost if the import is stopped.","woocommerce"),(0,_.jsx)("br",{}),(0,o.__)("Navigating away from this page will not affect the import.","woocommerce")]})]}):["ready","nothing"].includes(p)?i?(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(r.Button,{isPrimary:!0,onClick:w,disabled:e,children:(0,o.__)("Start","woocommerce")}),(0,_.jsx)(r.Button,{isSecondary:!0,onClick:I,children:(0,o.__)("Delete Previously Imported Data","woocommerce")})]}):(0,_.jsx)(a.Fragment,{children:(0,_.jsx)(r.Button,{isPrimary:!0,onClick:w,disabled:e,children:(0,o.__)("Start","woocommerce")})}):("error"===p&&t("error",(0,o.__)("Something went wrong with the importation process.","woocommerce")),(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(r.Button,{isSecondary:!0,onClick:S,children:(0,o.__)("Re-import Data","woocommerce")}),(0,_.jsx)(r.Button,{isSecondary:!0,onClick:I,children:(0,o.__)("Delete Previously Imported Data","woocommerce")})]}))})()})}));var k=s(81921);const N=(0,n.withDispatch)((e=>{const{setImportPeriod:t}=e(l.IMPORT_STORE_NAME);return{setImportPeriod:t}}))((function({dateFormat:e,disabled:t,setImportPeriod:s,value:a}){const i=t=>{t.date&&t.date.isValid?s(t.date.format(e),!0):s(t.text,!0)},n=t=>t.isValid()&&a.date.length===e.length?t.isAfter(new Date,"day")?k.dateValidationMessages.future:null:k.dateValidationMessages.invalid;return(0,_.jsxs)("div",{className:"woocommerce-settings-historical-data__columns",children:[(0,_.jsx)("div",{className:"woocommerce-settings-historical-data__column",children:(0,_.jsx)(r.SelectControl,{label:(0,o.__)("Import historical data","woocommerce"),value:a.label,disabled:t,onChange:e=>{s(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})}),"custom"===a.label&&(()=>{const s=S()(a.date,e);return(0,_.jsxs)("div",{className:"woocommerce-settings-historical-data__column",children:[(0,_.jsx)("div",{className:"woocommerce-settings-historical-data__column-label",children:(0,o.__)("Beginning on","woocommerce")}),(0,_.jsx)(c.DatePicker,{date:s.isValid()?s.toDate():null,dateFormat:e,disabled:t,error:n(s),isInvalidDate:e=>S()(e).isAfter(new Date,"day"),onUpdate:i,text:a.date})]})})()]})})),y=function({label:e,progress:t,total:s}){const r=(0,o.sprintf)((0,o.__)("Imported %(label)s","woocommerce"),{label:e}),a=(0,g.isNil)(s)?null:(0,o.sprintf)((0,o.__)("%(progress)s of %(total)s","woocommerce"),{progress:t||0,total:s});return(0,_.jsxs)("div",{className:"woocommerce-settings-historical-data__progress",children:[(0,_.jsx)("span",{className:"woocommerce-settings-historical-data__progress-label",children:r}),a&&(0,_.jsx)("span",{className:"woocommerce-settings-historical-data__progress-label",children:a}),(0,_.jsx)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:s,value:t||0})]})};var T=s(92694);const f=function({importDate:e,status:t}){const s=(0,T.applyFilters)("woocommerce_admin_import_status",{nothing:(0,o.__)("Nothing To Import","woocommerce"),ready:(0,o.__)("Ready To Import","woocommerce"),initializing:[(0,o.__)("Initializing","woocommerce"),(0,_.jsx)(r.Spinner,{},"spinner")],customers:[(0,o.__)("Importing Customers","woocommerce"),(0,_.jsx)(r.Spinner,{},"spinner")],orders:[(0,o.__)("Importing Orders","woocommerce"),(0,_.jsx)(r.Spinner,{},"spinner")],finalizing:[(0,o.__)("Finalizing","woocommerce"),(0,_.jsx)(r.Spinner,{},"spinner")],finished:-1===e?(0,o.__)("All historical data imported","woocommerce"):(0,o.sprintf)((0,o.__)("Historical data from %s onward imported","woocommerce"),S()(e).format("YYYY-MM-DD"))});return(0,_.jsxs)("span",{className:"woocommerce-settings-historical-data__status",children:[(0,o.__)("Status:","woocommerce")+" ",s[t]]})},j=(0,n.withDispatch)((e=>{const{setSkipPrevious:t}=e(l.IMPORT_STORE_NAME);return{setSkipPrevious:t}}))((function({checked:e,disabled:t,setSkipPrevious:s}){return(0,_.jsx)(r.CheckboxControl,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:e,disabled:t,label:(0,o.__)("Skip previously imported customers and orders","woocommerce"),onChange:e=>{s(e)}})}));class P extends a.Component{render(){const{customersProgress:e,customersTotal:t,dateFormat:s,importDate:r,inProgress:i,lastImportStartTimestamp:n,clearStatusAndTotalsCache:l,ordersProgress:m,ordersTotal:d,onImportStarted:p,period:h,stopImport:u,skipChecked:g,status:w}=this.props;return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(c.SectionHeader,{title:(0,o.__)("Import historical data","woocommerce")}),(0,_.jsx)("div",{className:"woocommerce-settings__wrapper",children:(0,_.jsx)("div",{className:"woocommerce-setting",children:(0,_.jsxs)("div",{className:"woocommerce-setting__input",children:[(0,_.jsx)("span",{className:"woocommerce-setting__help",children:(0,o.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.","woocommerce")}),"finished"!==w&&(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(N,{dateFormat:s,disabled:i,value:h}),(0,_.jsx)(j,{disabled:i,checked:g}),(0,_.jsx)(y,{label:(0,o.__)("Registered Customers","woocommerce"),progress:e,total:t}),(0,_.jsx)(y,{label:(0,o.__)("Orders and Refunds","woocommerce"),progress:m,total:d})]}),(0,_.jsx)(f,{importDate:r,status:w})]})})}),(0,_.jsx)(C,{clearStatusAndTotalsCache:l,dateFormat:s,importDate:r,lastImportStartTimestamp:n,onImportStarted:p,stopImport:u,status:w})]})}}const E=(0,n.withSelect)(((e,t)=>{const{getImportError:s,getImportStatus:o,getImportTotals:r}=e(l.IMPORT_STORE_NAME),{activeImport:a,cacheNeedsClearing:i,dateFormat:n,inProgress:c,onImportStarted:m,onImportFinished:d,period:p,startStatusCheckInterval:h,skipChecked:u}=t,_=b(n,p,u),{customers:w,orders:v,lastImportStartTimestamp:I}=r(_),{customers:S,imported_from:x,is_importing:C,orders:k}=o(I),{imported:N,total:y}=S||{},{imported:T,total:f}=k||{},j=Boolean(s(I)||s(_));Boolean(!I&&!c&&!0===C)&&m();const P=Boolean(c&&!i&&!1===C&&(y>0||f>0)&&N===y&&T===f);let E={customersTotal:w,isError:j,ordersTotal:v};a&&(E={cacheNeedsClearing:i,customersProgress:N,customersTotal:(0,g.isNil)(y)?w:y,inProgress:c,isError:j,ordersProgress:T,ordersTotal:(0,g.isNil)(f)?v:f});const A=(({cacheNeedsClearing:e,customersProgress:t,customersTotal:s,isError:o,inProgress:r,ordersProgress:a,ordersTotal:i})=>o?"error":r?(0,g.isNil)(t)||(0,g.isNil)(a)||(0,g.isNil)(s)||(0,g.isNil)(i)||e?"initializing":t<s?"customers":a<i?"orders":"finalizing":s>0||i>0?t===s&&a===i?"finished":"ready":"nothing")(E);return"initializing"===A&&h(),P&&d(),{...E,importDate:x,status:A}}))(P);class A extends a.Component{constructor(){super(...arguments),this.dateFormat=(0,o.__)("MM/DD/YYYY","woocommerce"),this.intervalId=-1,this.lastImportStopTimestamp=0,this.cacheNeedsClearing=!0,this.onImportFinished=this.onImportFinished.bind(this),this.onImportStarted=this.onImportStarted.bind(this),this.clearStatusAndTotalsCache=this.clearStatusAndTotalsCache.bind(this),this.stopImport=this.stopImport.bind(this),this.startStatusCheckInterval=this.startStatusCheckInterval.bind(this),this.cancelStatusCheckInterval=this.cancelStatusCheckInterval.bind(this)}startStatusCheckInterval(){this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval((()=>{this.clearCache("getImportStatus")}),3*l.SECOND))}cancelStatusCheckInterval(){clearInterval(this.intervalId),this.intervalId=-1}clearCache(e,t){const{invalidateResolution:s,lastImportStartTimestamp:o}=this.props;s(e,["getImportStatus"===e?o:t]).then((()=>{this.cacheNeedsClearing=!1}))}stopImport(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}onImportFinished(){const{debouncedSpeak:e}=this.props;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}onImportStarted(){const{notes:e,setImportStarted:t,updateNote:s}=this.props,o=e.find((e=>"wc-admin-historical-data"===e.name));o&&s(o.id,{status:"actioned"}),t(!0)}clearStatusAndTotalsCache(){const{selectedPeriod:e,skipChecked:t}=this.props,s=b(this.dateFormat,e,t);this.clearCache("getImportTotals",s),this.clearCache("getImportStatus")}isImportationInProgress(){const{lastImportStartTimestamp:e}=this.props;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}render(){const{activeImport:e,createNotice:t,lastImportStartTimestamp:s,selectedPeriod:o,skipChecked:r}=this.props;return(0,_.jsx)(E,{activeImport:e,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:t,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:s,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:o,skipChecked:r,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}const D=(0,i.compose)([(0,n.withSelect)((e=>{const{getNotes:t}=e(l.NOTES_STORE_NAME),{getImportStarted:s,getFormSettings:o}=e(l.IMPORT_STORE_NAME),r=t({page:1,per_page:l.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),{activeImport:a,lastImportStartTimestamp:i}=s(),{period:n,skipPrevious:c}=o();return{activeImport:a,lastImportStartTimestamp:i,notes:r,selectedPeriod:n,skipChecked:c}})),(0,n.withDispatch)((e=>{const{updateNote:t}=e(l.NOTES_STORE_NAME),{invalidateResolution:s,setImportStarted:o}=e(l.IMPORT_STORE_NAME);return{invalidateResolution:s,setImportStarted:o,updateNote:t}})),r.withSpokenMessages])(A),O=(0,i.compose)((0,n.withDispatch)((e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}})))((({createNotice:e,query:t})=>{const{settingsError:s,isRequesting:i,isDirty:n,persistSettings:p,updateAndPersistSettings:h,updateSettings:u,wcAdminSettings:g}=(0,l.useSettings)("wc_admin",["wcAdminSettings"]),w=(0,a.useRef)(!1);(0,a.useEffect)((()=>{function e(e){if(n)return e.returnValue=(0,o.__)("You have unsaved changes. If you proceed, they will be lost.","woocommerce"),e.returnValue}return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)}),[n]),(0,a.useEffect)((()=>{i?w.current=!0:!i&&w.current&&(s?e("error",(0,o.__)("There was an error saving your settings. Please try again.","woocommerce")):e("success",(0,o.__)("Your settings have been successfully saved.","woocommerce")),w.current=!1)}),[i,s,e]);const I=e=>{const{checked:t,name:s,type:o,value:r}=e.target,a={...g};a[s]="checkbox"===o?t?[...a[s],r]:a[s].filter((e=>e!==r)):r,u("wcAdminSettings",a)};return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(c.SectionHeader,{title:(0,o.__)("Analytics settings","woocommerce")}),(0,_.jsxs)("div",{className:"woocommerce-settings__wrapper",children:[Object.keys(d.vc).map((e=>(0,_.jsx)(v,{handleChange:I,value:g[e],name:e,...d.vc[e]},e))),(0,_.jsxs)("div",{className:"woocommerce-settings__actions",children:[(0,_.jsx)(r.Button,{isSecondary:!0,onClick:()=>{if(window.confirm((0,o.__)("Are you sure you want to reset all settings to default values?","woocommerce"))){const e=Object.keys(d.vc).reduce(((e,t)=>(e[t]=d.vc[t].defaultValue,e)),{});h("wcAdminSettings",e),(0,m.recordEvent)("analytics_settings_reset_defaults")}},children:(0,o.__)("Reset defaults","woocommerce")}),(0,_.jsx)(r.Button,{isPrimary:!0,isBusy:i,onClick:()=>{p(),(0,m.recordEvent)("analytics_settings_save",g),t.period=void 0,t.compare=void 0,t.before=void 0,t.after=void 0,t.interval=void 0,t.type=void 0,window.wpNavMenuUrlUpdate(t)},children:(0,o.__)("Save settings","woocommerce")})]})]}),"true"===t.import?(0,_.jsx)(c.ScrollTo,{offset:"-56",children:(0,_.jsx)(D,{createNotice:e})}):(0,_.jsx)(D,{createNotice:e})]})}))}}]);