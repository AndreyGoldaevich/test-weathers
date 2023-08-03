(function(){var e={1723:function(e,t,a){"use strict";a.r(t);var i=a(8081),n=a.n(i),s=a(3645),o=a.n(s),r=o()(n());r.push([e.id,".add-city[data-v-25cdf2aa]{font-family:sans-serif;width:240px;padding:16px;box-shadow:0 4px 10px rgba(0,0,0,.2)}.add-city .add-city-title[data-v-25cdf2aa]{margin-top:0}",""]),t["default"]=r},7019:function(e,t,a){"use strict";a.r(t);var i=a(8081),n=a.n(i),s=a(3645),o=a.n(s),r=o()(n());r.push([e.id,".weather-input{border:none;background-color:#f5f5f5;padding:8px 16px}.weather-input:focus{outline:none}::-moz-placeholder{opacity:.4}::placeholder{opacity:.4}",""]),t["default"]=r},2960:function(e,t,a){"use strict";a.r(t);var i=a(8081),n=a.n(i),s=a(3645),o=a.n(s),r=o()(n());r.push([e.id,".settings-item[data-v-7d09820e]{display:flex;align-items:center;justify-content:space-between;padding:16px 8px;background-color:#eee;cursor:pointer;transition:.2s ease}.settings-item[data-v-7d09820e]:not(:last-child){margin-bottom:8px}.settings-item[data-v-7d09820e]:hover{background-color:#ddd}.settings-item .settings-item__title[data-v-7d09820e]{display:flex;align-items:center}.settings-item .settings-item__delete[data-v-7d09820e]{border:none;background:unset;cursor:pointer;transition:.2s ease}.settings-item .settings-item__delete[data-v-7d09820e]:hover{transform:scale(1.2)}",""]),t["default"]=r},7583:function(e,t,a){"use strict";a.r(t);var i=a(8081),n=a.n(i),s=a(3645),o=a.n(s),r=o()(n());r.push([e.id,".settings-btn{position:absolute;border:none;background:unset;cursor:pointer;top:8px;right:8px;opacity:.1;transition:.3s ease}.settings-btn:hover{opacity:1}.settings-modal{position:absolute;background:#fff;width:calc(100% - 32px);top:0;left:0;padding:16px;box-shadow:0 4px 10px rgba(0,0,0,.2)}.settings-modal .settings-modal__title{margin-top:0}.settings-modal .settings-list{list-style:none;padding:0}.settings-modal .settings-close{border:none;background:unset;position:absolute;padding:0;top:8px;right:8px;cursor:pointer;opacity:.3;transition:.3s ease}.settings-modal .settings-close:hover{opacity:1}.add-city .add-city-actions{display:flex}.add-city .add-city-actions .add-city-btn{border:none;background:unset;width:25%;cursor:pointer;transition:.2s ease}.add-city .add-city-actions .add-city-btn:hover{transform:scale(1.2)}.add-city .error-message{color:red}",""]),t["default"]=r},4010:function(e,t,a){"use strict";a.r(t);var i=a(8081),n=a.n(i),s=a(3645),o=a.n(s),r=o()(n());r.push([e.id,"weather-widjet{position:relative}weather-widjet .preloader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:auto}.weather-app{margin:20% auto;font-family:sans-serif;position:relative;width:-moz-fit-content;width:fit-content}.weather-app .weather-container:not(:last-child){margin-bottom:16px}.weather-app .weather-container .weather-content{width:240px;padding:8px 16px;box-shadow:0 4px 10px rgba(0,0,0,.2);transition:.4s ease-in-out}.weather-app .weather-container .weather-content:hover{box-shadow:0 4px 20px rgba(0,0,0,.4)}.weather-app .weather-container .weather-temp{display:flex;align-items:center;justify-content:center}.weather-app .weather-container .weather-temp .weather-temp__text{font-size:32px}.weather-app .weather-container .weather-block{display:flex;align-items:center;justify-content:space-between}.weather-app .weather-container .weather-block .weather-item{display:flex;align-items:center}.weather-app .weather-container .weather-block .weather-item span{padding-left:4px}.slide-fade-enter-active{transition:all .3s ease-out}.slide-fade-leave-active{transition:all .4s cubic-bezier(1,.5,.8,1)}.slide-fade-enter-from,.slide-fade-leave-to{transform:translateY(-20px);opacity:0}",""]),t["default"]=r},3548:function(e,t,a){"use strict";var i=a(9242),n=a(3396),s=(a(7658),a(7139)),o=a(4870),r=a(6088),l=(0,n.aZ)({__name:"BaseIcon",props:{icon:{type:String,required:!0},width:{type:String,default:28},height:{type:String,default:28}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(r.JO),{icon:e.icon,width:e.width,height:e.height},null,8,["icon","width","height"]))}});const d=l;var c=d;const u=()=>localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[],p=e=>localStorage.setItem("cities",JSON.stringify(e)),h={class:"settings-item"},m={class:"settings-item__title"};var g=(0,n.aZ)({__name:"SettingsItem",props:{city:{type:Object,required:!0}},emits:["getCities","synchronizeLists"],setup(e,{emit:t}){const a=e=>{const a=u();a.find(((t,i)=>t.id===e?a.splice(i,1):null)),p(a),t("getCities"),t("synchronizeLists")};return(t,i)=>((0,n.wg)(),(0,n.iD)("li",h,[(0,n._)("div",m,[(0,n.Wm)(c,{icon:"iconamoon:menu-burger-horizontal",width:"20",height:"20",style:{"margin-right":"8px"}}),(0,n.Uk)(" "+(0,s.zw)(e.city.name),1)]),(0,n._)("button",{class:"settings-item__delete",onClick:i[0]||(i[0]=t=>a(e.city.id))},[(0,n.Wm)(c,{icon:"bi:trash-fill",width:"20",height:"20"})])]))}}),f=(a(609),a(89));const v=(0,f.Z)(g,[["__scopeId","data-v-7d09820e"]]);var w=v;const y=["placeholder","value"];var b=(0,n.aZ)({__name:"BaseInput",props:{modelValue:{type:String,required:!1},placeholder:{type:String,default:"Text"}},emits:["update:modelValue"],setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("input",{type:"text",placeholder:e.placeholder,class:"weather-input",value:e.modelValue,onInput:a[0]||(a[0]=e=>t.$emit("update:modelValue",e.target.value))},null,40,y))}});a(3370);const _=b;var x=_,k=a(6983),S=a.n(k),C=a(4161);const M={key:0,class:"settings-modal"},W=(0,n._)("h4",{class:"settings-modal__title"},"Settings",-1),z={class:"settings-list"},j={class:"add-city"},O=(0,n._)("h4",null,"Add location",-1),Z=["onSubmit"],V={type:"submit",class:"add-city-btn"},D={key:0,class:"error-message"};var H=(0,n.aZ)({__name:"TheSettings",props:{citiesWeather:{type:Array,required:!0}},emits:["getCities"],setup(e,{emit:t}){const a=e,r=(0,o.iH)(""),l=(0,o.iH)(!1),d=(0,o.iH)({status:!1,message:""}),h=(0,o.iH)(a.citiesWeather),m=()=>{d.value={status:!1,message:""}},g=()=>{m(),l.value=!l.value},f=()=>{h.value=u()},v=async()=>{const e=[...a.citiesWeather];await C.Z.get(`http://api.openweathermap.org/data/2.5/weather?q=${r.value}&units=metric&lang=en&appid=efb3f138bcc5828f7116e4381f313dd8`).then((i=>{const n=a.citiesWeather.find((e=>e.id===i.data.id));void 0===n?(e.push(i.data),p(e),r.value="",h.value=e,m(),t("getCities")):d.value={status:!0,message:"This city has already been added"}})).catch((()=>{d.value={status:!0,message:"This city doesn't exist."}}))},y=()=>{p(h.value),t("getCities")};return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("button",{onClick:g,class:"settings-btn"},[(0,n.Wm)(c,{icon:"bi:gear",class:"settings"})]),(0,n.Wm)(i.uT,{name:"slide-fade"},{default:(0,n.w5)((()=>[l.value?((0,n.wg)(),(0,n.iD)("div",M,[W,(0,n._)("ul",z,[(0,n.Wm)((0,o.SU)(S()),{modelValue:h.value,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value=e),"item-key":"id",onEnd:y},{item:(0,n.w5)((({element:a})=>[(0,n.Wm)(w,{city:a,onGetCities:t[0]||(t[0]=t=>e.$emit("getCities")),onSynchronizeLists:f},null,8,["city"])])),_:1},8,["modelValue"])]),(0,n._)("div",j,[O,(0,n._)("form",{onSubmit:(0,i.iM)(v,["prevent"]),class:"add-city-actions"},[(0,n.Wm)(x,{placeholder:"City name",class:"add-city-input",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),onInput:t[3]||(t[3]=e=>d.value=!1)},null,8,["modelValue"]),(0,n._)("button",V,[(0,n.Wm)(c,{icon:"material-symbols:subdirectory-arrow-left-rounded"})])],40,Z),d.value.status?((0,n.wg)(),(0,n.iD)("p",D,(0,s.zw)(d.value.message),1)):(0,n.kq)("",!0)]),(0,n._)("button",{class:"settings-close",onClick:g},[(0,n.Wm)(c,{icon:"icon-park-outline:close"})])])):(0,n.kq)("",!0)])),_:1})],64))}});a(9425);const I=H;var T=I;const q=e=>((0,n.dD)("data-v-25cdf2aa"),e=e(),(0,n.Cn)(),e),$={class:"add-city"},P=q((()=>(0,n._)("h4",{class:"add-city-title"},"Add location",-1))),U=["onSubmit"],A={type:"submit",class:"add-city-btn"},E={key:0,class:"error-message"};var G=(0,n.aZ)({__name:"AddCity",emits:["getCities"],setup(e,{emit:t}){const a=(0,o.iH)(""),r=(0,o.iH)({status:!1,message:""}),l=async()=>{await C.Z.get(`http://api.openweathermap.org/data/2.5/weather?q=${a.value}&units=metric&lang=en&appid=efb3f138bcc5828f7116e4381f313dd8`).then((e=>{p([e.data]),a.value="",r.value={status:!1,message:""},t("getCities")})).catch((()=>{r.value={status:!0,message:"This city doesn't exist."}}))};return(e,t)=>((0,n.wg)(),(0,n.iD)("div",$,[P,(0,n._)("form",{onSubmit:(0,i.iM)(l,["prevent"]),class:"add-city-actions"},[(0,n.Wm)(x,{placeholder:"City name",class:"add-city-input",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onInput:t[1]||(t[1]=e=>r.value=!1)},null,8,["modelValue"]),(0,n._)("button",A,[(0,n.Wm)(c,{icon:"material-symbols:subdirectory-arrow-left-rounded"})])],40,U),r.value.status?((0,n.wg)(),(0,n.iD)("p",E,(0,s.zw)(r.value.message),1)):(0,n.kq)("",!0)]))}});a(9288);const J=(0,f.Z)(G,[["__scopeId","data-v-25cdf2aa"]]);var L=J;const Y={key:0,class:"weather-app"},B={class:"weather-content"},F={class:"weather-temp"},N=["src"],K={class:"weather-temp__text"},Q={class:"weather-block"},R={class:"weather-item"},X={class:"weather-item"},ee={class:"weather-block"},te={class:"weather-item"},ae={class:"weather-item"};var ie=(0,n.aZ)({__name:"TheWidget",setup(e){const t=(0,o.iH)([]),a=navigator.geolocation,i=(0,o.iH)(!1),r=()=>{t.value=u()},l=e=>e/1e3+"km";return(0,n.bv)((async()=>{r(),0===t.value.length&&(i.value=!1,a.getCurrentPosition((async e=>{const a=e.coords.latitude,n=e.coords.longitude,s=await C.Z.get(`http://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${n}&units=metric&lang=en&appid=efb3f138bcc5828f7116e4381f313dd8`).then((e=>e.data));p([s]),t.value.push(s),i.value=!0})))})),(e,a)=>0!==t.value.length?((0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"weather-container",key:e.id},[(0,n._)("div",B,[(0,n._)("h4",null,(0,s.zw)(e.name)+", "+(0,s.zw)(e.sys.country),1),(0,n._)("p",F,[(0,n._)("img",{src:`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,alt:""},null,8,N),(0,n._)("b",K,(0,s.zw)(Math.round(e.main.temp))+"°С",1)]),(0,n._)("p",null,"Feels like "+(0,s.zw)(e.main.feels_like)+"°С. "+(0,s.zw)(e.weather[0].description),1),(0,n._)("p",Q,[(0,n._)("div",R,[(0,n.Wm)(c,{icon:"mdi-navigation",style:{transform:"rotate(-35deg)","margin-left":"-6px"}}),(0,n._)("span",null,(0,s.zw)(e.wind.speed)+"m/s SSE",1)]),(0,n._)("div",X,[(0,n.Wm)(c,{icon:"healthicons:blood-pressure-outline"}),(0,n._)("span",null,(0,s.zw)(e.main.pressure)+"hPa",1)])]),(0,n._)("p",ee,[(0,n._)("div",te," Humidity: "+(0,s.zw)(e.main.humidity)+"% ",1),(0,n._)("div",ae," Visibility: "+(0,s.zw)(l(e.visibility)),1)])])])))),128)),(0,n.Wm)(T,{citiesWeather:t.value,onGetCities:r},null,8,["citiesWeather"])])):((0,n.wg)(),(0,n.j4)(L,{key:2,onGetCities:r}))}});a(8704);const ne=ie;var se=ne,oe=(0,n.aZ)({__name:"App",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(se))}});const re=oe;var le=re;(0,i.ri)(le).mount("weather-widget")},9288:function(e,t,a){var i=a(1723);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(7037).Z;n("71685acb",i,!0,{sourceMap:!1,shadowMode:!1})},3370:function(e,t,a){var i=a(7019);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(7037).Z;n("44ecd57e",i,!0,{sourceMap:!1,shadowMode:!1})},609:function(e,t,a){var i=a(2960);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(7037).Z;n("d08e13c8",i,!0,{sourceMap:!1,shadowMode:!1})},9425:function(e,t,a){var i=a(7583);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(7037).Z;n("3dc92b32",i,!0,{sourceMap:!1,shadowMode:!1})},8704:function(e,t,a){var i=a(4010);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(7037).Z;n("a2b9fdde",i,!0,{sourceMap:!1,shadowMode:!1})}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={id:i,exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],r=i[1],l=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var c=l(a)}for(t&&t(i);d<o.length;d++)s=o[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunktest"]=self["webpackChunktest"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3548)}));i=a.O(i)})();
//# sourceMappingURL=app.bundle.js.map