(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1204],{70175:function(e,t,r){Promise.resolve().then(r.bind(r,49419))},49419:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(57437),s=r(2265),l=r(77687),i=r(81583),o=r(80588),n=r(4779),c=r(16104),m=r(89539),d=r.n(m),u=r(32377);class h{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let p={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},g=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},y=async(e,t,r={})=>{let a=await fetch(p.origin+e,{method:"POST",headers:r,body:t}),s=await a.text(),l=new h(a.status,s);if(a.ok)return l;throw l},b=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},f=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||0===e.languages.length,j=()=>new h(451,"Unavailable For Headless Browser"),x=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},v=e=>!e.list?.length||!e.watchVariable,P=(e,t)=>e instanceof FormData?e.get(t):e[t],k=(e,t)=>{if(v(e))return!1;x(e.list,e.watchVariable);let r=P(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},_=()=>new h(403,"Forbidden"),I=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},N=async(e,t,r)=>{let a=Number(await r.get(e)||0);return t-Date.now()+a},Z=async(e,t,r)=>{if(!t.throttle||!r)return!1;I(t.throttle,t.id);let a=t.id||e;return await N(a,t.throttle,r)>0||(await r.set(a,Date.now().toString()),!1)},S=()=>new h(429,"Too Many Requests"),T=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},q=e=>"string"==typeof e?document.querySelector(e):e;var R={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let r=g(e);p.publicKey=r.publicKey,p.blockHeadless=r.blockHeadless,p.storageProvider=r.storageProvider,p.blockList=r.blockList,p.limitRate=r.limitRate,p.origin=r.origin||t},send:async(e,t,r,a)=>{let s=g(a),l=s.publicKey||p.publicKey,i=s.blockHeadless||p.blockHeadless,o=s.storageProvider||p.storageProvider,n={...p.blockList,...s.blockList},c={...p.limitRate,...s.limitRate};return i&&w(navigator)?Promise.reject(j()):(b(l,e,t),f(r),r&&k(n,r))?Promise.reject(_()):await Z(location.pathname,c,o)?Promise.reject(S()):y("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,a)=>{let s=g(a),l=s.publicKey||p.publicKey,i=s.blockHeadless||p.blockHeadless,o=p.storageProvider||s.storageProvider,n={...p.blockList,...s.blockList},c={...p.limitRate,...s.limitRate};if(i&&w(navigator))return Promise.reject(j());let m=q(r);b(l,e,t),T(m);let d=new FormData(m);return k(n,d)?Promise.reject(_()):await Z(location.pathname,c,o)?Promise.reject(S()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",l),y("/api/v1.0/email/send-form",d))},EmailJSResponseStatus:h};let{RangePicker:D}=l.default;var E=()=>{let[e]=i.Z.useForm(),[t,r]=(0,s.useState)(""),[l,m]=(0,s.useState)(""),h=t=>{r(t),m(""),e.setFieldsValue({city:void 0})};return(0,a.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center ",children:(0,a.jsxs)(i.Z,{form:e,name:"login_form",layout:"vertical",onFinish:e=>{let t={from_name:e.fullName,country:e.country,city:e.city,address:e.address,telegram:e.telegram,email:e.email},r=new FormData;e.upload&&e.upload.forEach(e=>{r.append("upload",e)}),R.send("service_wq5ka0r","template_livp3r5",{...t,my_file:r},"9NKUqVas39RkoIC_V").then(e=>{console.log("Email sent successfully:",e),o.ZP.success("Email sent successfully")}).catch(e=>{console.error("Error sending email:",e),alert("Error sending email. Please try again.")}),console.log("Form values: ",e)},style:{padding:"24px",color:"white"},className:"w-full max-w-lg shadow-lg rounded-xl bg-opacity-90 backdrop-blur-lg",children:[(0,a.jsx)("span",{className:"text-lg",children:"Do you wanna post your billboard"}),(0,a.jsx)(i.Z.Item,{name:"fullName",label:(0,a.jsx)("label",{style:{color:"white"},children:"Username"}),style:{marginBottom:"12px"},rules:[{required:!0,message:"Please input your name!"}],children:(0,a.jsx)(n.Z,{placeholder:"Input your full name"})}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(i.Z.Item,{name:"country",label:(0,a.jsx)("label",{style:{color:"white"},children:"Country"}),rules:[{required:!0,message:"Please select your country!"}],style:{marginBottom:"12px"},className:"w-[50%]",children:(0,a.jsx)(c.Px,{value:t,onChange:e=>h(e),classes:"rounded-lg h-[30px] w-full"})}),t&&(0,a.jsx)(i.Z.Item,{name:"city",label:(0,a.jsx)("label",{style:{color:"white"},children:"City"}),rules:[{required:!0,message:"Please select your city!"}],className:"w-[50%]",children:(0,a.jsx)(c.Xz,{country:t,value:l,onChange:e=>m(e),classes:"rounded-lg h-[30px] w-full"})})]}),(0,a.jsx)(i.Z.Item,{name:"address",label:(0,a.jsx)("label",{style:{color:"white"},children:"Address"}),rules:[{required:!0,message:"Please enter your address!"}],style:{marginBottom:"12px"},children:(0,a.jsx)(n.Z,{placeholder:"Input your address"})}),(0,a.jsx)(i.Z.Item,{name:"dateRange",label:(0,a.jsx)("label",{style:{color:"white"},children:"Select Date Range"}),rules:[{required:!0,message:"Please select a date range!"}],children:(0,a.jsx)(D,{format:"YYYY-MM-DD",disabledDate:e=>e&&e<d()().startOf("day"),className:"w-full"})}),(0,a.jsx)(i.Z.Item,{name:"telegram",label:(0,a.jsx)("label",{style:{color:"white"},children:"Telegram"}),rules:[{required:!0,message:"Please enter your Telegram username!"}],style:{marginBottom:"12px"},children:(0,a.jsx)(n.Z,{placeholder:"Input your Telegram username"})}),(0,a.jsx)(i.Z.Item,{name:"email",label:(0,a.jsx)("label",{style:{color:"white"},children:"Email"}),rules:[{required:!0,message:"Please enter your email!"},{type:"email",message:"Please enter a valid email address!"}],style:{marginBottom:"12px"},children:(0,a.jsx)(n.Z,{placeholder:"Input your email address"})}),(0,a.jsx)(i.Z.Item,{style:{marginBottom:"0px"},children:(0,a.jsx)(u.Z,{content:"Submit",onclick:()=>{e.submit()}})})]})})}},32377:function(e,t,r){"use strict";var a=r(57437);r(2265),r(21472),t.Z=e=>{let{content:t,onclick:r}=e;return(0,a.jsx)("button",{className:"button-40",role:"button",onClick:r,children:(0,a.jsx)("span",{className:"text",children:t})})}},21472:function(){}},function(e){e.O(0,[8696,8497,4022,4295,9312,1583,1958,6104,7687,2971,8069,1744],function(){return e(e.s=70175)}),_N_E=e.O()}]);