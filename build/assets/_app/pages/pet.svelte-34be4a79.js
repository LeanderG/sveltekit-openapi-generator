var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(e,n,i)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,o=(t,o)=>{for(var s in o||(o={}))n.call(o,s)&&a(t,s,o[s]);if(e)for(var s of e(o))i.call(o,s)&&a(t,s,o[s]);return t};import{S as s,i as r,s as c,t as u,g as d,f as h,h as p,G as f,d as l}from"../chunks/vendor-4e0cc74e.js";const w="http://localhost/api/v3".replace(/\/+$/,"");class g extends Error{constructor(t,e){super(e),this.field=t,this.name="RequiredError"}}class y{constructor(t={}){this.configuration=t}get basePath(){return null!=this.configuration.basePath?this.configuration.basePath:w}get fetchApi(){return this.configuration.fetchApi||window.fetch.bind(window)}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||m}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){const t=this.configuration.apiKey;if(t)return"function"==typeof t?t:()=>t}get accessToken(){const t=this.configuration.accessToken;if(t)return"function"==typeof t?t:()=>t}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}}function m(t,e=""){return Object.keys(t).map((n=>{const i=e+(e.length?`[${n}]`:n),a=t[n];if(a instanceof Array){const t=a.map((t=>encodeURIComponent(String(t)))).join(`&${encodeURIComponent(i)}=`);return`${encodeURIComponent(i)}=${t}`}return a instanceof Date?`${encodeURIComponent(i)}=${encodeURIComponent(a.toISOString())}`:a instanceof Object?m(a,i):`${encodeURIComponent(i)}=${encodeURIComponent(String(a))}`})).filter((t=>t.length>0)).join("&")}class P{constructor(t,e=(t=>t)){this.raw=t,this.transformer=e}async value(){return this.transformer(await this.raw.json())}}class T{constructor(t){this.raw=t}async value(){}}class I extends class{constructor(t=new y){this.configuration=t,this.fetchApi=async(t,e)=>{let n={url:t,init:e};for(const a of this.middleware)a.pre&&(n=await a.pre(o({fetch:this.fetchApi},n))||n);let i=await this.configuration.fetchApi(n.url,n.init);for(const a of this.middleware)a.post&&(i=await a.post({fetch:this.fetchApi,url:t,init:e,response:i.clone()})||i);return i},this.middleware=t.middleware}withMiddleware(...t){const e=this.clone();return e.middleware=e.middleware.concat(...t),e}withPreMiddleware(...t){const e=t.map((t=>({pre:t})));return this.withMiddleware(...e)}withPostMiddleware(...t){const e=t.map((t=>({post:t})));return this.withMiddleware(...e)}async request(t){const{url:e,init:n}=this.createFetchParams(t),i=await this.fetchApi(e,n);if(i.status>=200&&i.status<300)return i;throw i}createFetchParams(t){let e=this.configuration.basePath+t.path;void 0!==t.query&&0!==Object.keys(t.query).length&&(e+="?"+this.configuration.queryParamsStringify(t.query));const n="undefined"!=typeof FormData&&t.body instanceof FormData||t.body instanceof URLSearchParams||(i=t.body,"undefined"!=typeof Blob&&i instanceof Blob)?t.body:JSON.stringify(t.body);var i;const a=Object.assign({},this.configuration.headers,t.headers);return{url:e,init:{method:t.method,headers:a,body:n,credentials:this.configuration.credentials}}}clone(){const t=new(0,this.constructor)(this.configuration);return t.middleware=this.middleware.slice(),t}}{async addPetRaw(t){if(null===t.pet||void 0===t.pet)throw new g("pet","Required parameter requestParameters.pet was null or undefined when calling addPet.");const e={"Content-Type":"application/json"};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?e.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):e.Authorization=this.configuration.accessToken);const n=await this.request({path:"/pet",method:"POST",headers:e,query:{},body:t.pet});return new P(n)}async addPet(t){const e=await this.addPetRaw(t);return await e.value()}async deletePetRaw(t){if(null===t.petId||void 0===t.petId)throw new g("petId","Required parameter requestParameters.petId was null or undefined when calling deletePet.");const e={};void 0!==t.apiKey&&null!==t.apiKey&&(e.api_key=String(t.apiKey)),this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?e.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):e.Authorization=this.configuration.accessToken);const n=await this.request({path:"/pet/{petId}".replace("{petId}",encodeURIComponent(String(t.petId))),method:"DELETE",headers:e,query:{}});return new T(n)}async deletePet(t){await this.deletePetRaw(t)}async findPetsByStatusRaw(t){const e={};void 0!==t.status&&(e.status=t.status);const n={};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?n.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):n.Authorization=this.configuration.accessToken);const i=await this.request({path:"/pet/findByStatus",method:"GET",headers:n,query:e});return new P(i)}async findPetsByStatus(t){const e=await this.findPetsByStatusRaw(t);return await e.value()}async findPetsByTagsRaw(t){const e={};t.tags&&(e.tags=t.tags);const n={};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?n.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):n.Authorization=this.configuration.accessToken);const i=await this.request({path:"/pet/findByTags",method:"GET",headers:n,query:e});return new P(i)}async findPetsByTags(t){const e=await this.findPetsByTagsRaw(t);return await e.value()}async getPetByIdRaw(t){if(null===t.petId||void 0===t.petId)throw new g("petId","Required parameter requestParameters.petId was null or undefined when calling getPetById.");const e={};this.configuration&&this.configuration.apiKey&&(e.api_key=this.configuration.apiKey("api_key")),this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?e.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):e.Authorization=this.configuration.accessToken);const n=await this.request({path:"/pet/{petId}".replace("{petId}",encodeURIComponent(String(t.petId))),method:"GET",headers:e,query:{}});return new P(n)}async getPetById(t){const e=await this.getPetByIdRaw(t);return await e.value()}async updatePetRaw(t){if(null===t.pet||void 0===t.pet)throw new g("pet","Required parameter requestParameters.pet was null or undefined when calling updatePet.");const e={"Content-Type":"application/json"};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?e.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):e.Authorization=this.configuration.accessToken);const n=await this.request({path:"/pet",method:"PUT",headers:e,query:{},body:t.pet});return new P(n)}async updatePet(t){const e=await this.updatePetRaw(t);return await e.value()}async updatePetWithFormRaw(t){if(null===t.petId||void 0===t.petId)throw new g("petId","Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.");const e={};void 0!==t.name&&(e.name=t.name),void 0!==t.status&&(e.status=t.status);const n={};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?n.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):n.Authorization=this.configuration.accessToken);const i=await this.request({path:"/pet/{petId}".replace("{petId}",encodeURIComponent(String(t.petId))),method:"POST",headers:n,query:e});return new T(i)}async updatePetWithForm(t){await this.updatePetWithFormRaw(t)}async uploadFileRaw(t){if(null===t.petId||void 0===t.petId)throw new g("petId","Required parameter requestParameters.petId was null or undefined when calling uploadFile.");const e={};void 0!==t.additionalMetadata&&(e.additionalMetadata=t.additionalMetadata);const n={"Content-Type":"application/octet-stream"};this.configuration&&this.configuration.accessToken&&("function"==typeof this.configuration.accessToken?n.Authorization=this.configuration.accessToken("petstore_auth",["write:pets","read:pets"]):n.Authorization=this.configuration.accessToken);const i=await this.request({path:"/pet/{petId}/uploadImage".replace("{petId}",encodeURIComponent(String(t.petId))),method:"POST",headers:n,query:e,body:t.body});return new P(i)}async uploadFile(t){const e=await this.uploadFileRaw(t);return await e.value()}}var v,k,q,b,R,A;(k=v||(v={})).Available="available",k.Pending="pending",k.Sold="sold",(b=q||(q={})).Placed="placed",b.Approved="approved",b.Delivered="delivered",(A=R||(R={})).Available="available",A.Pending="pending",A.Sold="sold";function S(t){let e,n,i=JSON.stringify(t[0])+"";return{c(){e=u("Hello!\r\n"),n=u(i)},l(t){e=d(t,"Hello!\r\n"),n=d(t,i)},m(t,i){h(t,e,i),h(t,n,i)},p(t,[e]){1&e&&i!==(i=JSON.stringify(t[0])+"")&&p(n,i)},i:f,o:f,d(t){t&&l(e),t&&l(n)}}}var O=function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function r(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}c((i=i.apply(t,e||[])).next())}))};const z=({fetch:t})=>O(void 0,void 0,void 0,(function*(){const e=(t=>{const e=new y({fetchApi:t,basePath:"https://petstore3.swagger.io/api/v3"});return new I(e)})(t);console.log("test");const n=yield e.getPetById({petId:100});return console.log("test2",{pet:n}),{props:{pet:n}}}));function B(t,e,n){let{pet:i}=e;return t.$$set=t=>{"pet"in t&&n(0,i=t.pet)},[i]}export default class extends s{constructor(t){super(),r(this,t,B,S,c,{pet:0})}}export{z as load};
