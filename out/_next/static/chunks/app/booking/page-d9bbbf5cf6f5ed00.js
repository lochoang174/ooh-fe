(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8355],{545:function(e,s,l){Promise.resolve().then(l.bind(l,1424))},1424:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return I}});var t=l(57437),n=l(2265),r=l(38302),a=l(28683),i=l(24806),o=l(77687),c=l(81583),d=l(80588),h=l(27583),x=l(4779),u=l(29916),m=l(89539),p=l.n(m),j=l(39296),b=l(43089),g=l(59549),f=l(95925),w=l(46432);let{RangePicker:y}=o.default;var v=e=>{let s,{billboard:l,isVisible:n,onCancel:i}=e,o=(0,j.m)(),m=(0,b.x)(),[v]=c.Z.useForm(),{data:k,writeContract:N}=(0,g.S)();switch(console.log(m),m){case f.lG.BAOBAB:s=f.Ye,f.gE;break;case f.lG.MOONBEAM:s=f.Ye,f.Y_;break;default:throw Error("Network not supported")}let Z=async e=>{o.address&&(await N({abi:w.W,address:s,functionName:"booking_OOH_NFT",args:[o.address,l.ownerWallet,l.address,BigInt(1),BigInt(l.tokenId)]}),d.ZP.success("Booking success"),i())};return(0,t.jsxs)(h.Z,{title:"Booking Form",open:n,onCancel:i,footer:null,width:700,className:"custom-modal",children:[(0,t.jsxs)(r.Z,{gutter:16,children:[(0,t.jsx)(a.Z,{span:12,children:(0,t.jsx)("img",{src:l.imageUrl,alt:"Billboard",style:{width:"100%"}})}),(0,t.jsx)(a.Z,{span:12,children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Address:"})," ",(0,t.jsx)("strong",{children:l.address})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Country:"})," ",(0,t.jsx)("strong",{children:l.country})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"City:"})," ",(0,t.jsx)("strong",{children:l.city})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Start Date:"})," ",(0,t.jsx)("strong",{children:l.startDate})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"End Date:"})," ",(0,t.jsx)("strong",{children:l.endDate})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Size:"})," ",(0,t.jsx)("strong",{children:l.size})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Price:"})," ",(0,t.jsx)("strong",{children:l.price})]})]})})]}),(0,t.jsxs)(r.Z,{gutter:16,style:{marginTop:"20px"},children:[(0,t.jsxs)(a.Z,{span:12,children:[(0,t.jsxs)("p",{children:["Owner Name: ",(0,t.jsx)("strong",{children:l.owner})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Wallet Address:"})," ",(0,t.jsx)("strong",{children:l.ownerWallet})]})]}),(0,t.jsx)(a.Z,{span:12,children:(0,t.jsxs)(c.Z,{layout:"vertical",onFinish:Z,children:[(0,t.jsx)(c.Z.Item,{label:"Customer wallet",name:"customerWallet",initialValue:o.address,rules:[{required:!0,message:"Please input customer wallet!"}],children:(0,t.jsx)(x.Z,{placeholder:"Enter customer wallet"})}),(0,t.jsx)(c.Z.Item,{name:"dateRange",label:(0,t.jsx)("label",{style:{color:"black"},children:"Select Date Range"}),rules:[{required:!0,message:"Please select a date range!"}],children:(0,t.jsx)(y,{format:"YYYY-MM-DD",disabledDate:e=>e&&e<p()().startOf("day"),className:"w-full"})}),(0,t.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:"Submit"})]})})]})]})},k=e=>{let{billboard:s,onBooking:l}=e,[r,a]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"bg-white/60 text-black shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 h-[290px] w-[300px]",children:[(0,t.jsx)("img",{alt:"billboard",src:s.imageUrl,className:"w-full h-40 object-cover bg-transparent"}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h3",{className:"text-sm overflow-hidden h-[22px]",children:s.address}),(0,t.jsxs)("p",{className:"",children:["Rental Price: ",s.price,"/day"]}),(0,t.jsx)("button",{className:"mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200",onClick:()=>{a(!0)},children:"Booking"})]}),(0,t.jsx)(v,{billboard:s,isVisible:r,onCancel:()=>{a(!1)}})]})},N=e=>{let{dataCard:s}=e,[l,o]=(0,n.useState)(1),c=e=>{console.log("Booking billboard with ID:",e)},d=s.slice((l-1)*6,6*l);return(0,t.jsxs)("div",{className:"mt-[64px] w-full overflow-hidden flex flex-col  items-center",children:[(0,t.jsx)(r.Z,{gutter:[32,32],className:"flex-grow w-full p-3",children:d.map(e=>(0,t.jsx)(a.Z,{xs:24,sm:12,md:12,lg:8,children:(0,t.jsx)(k,{billboard:e,onBooking:()=>c(e.id)})},e.id))}),(0,t.jsx)(i.Z,{current:l,pageSize:6,total:s.length,onChange:e=>o(e),style:{marginTop:"5px",textAlign:"center"}})]})},Z=l(8739),B=l(16104),C=e=>{let{onFilter:s}=e,[l,r]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),[o,d]=(0,n.useState)([500,2e4]),[h,x]=(0,n.useState)([100,1e3]);return(0,t.jsx)("div",{className:"h-full flex flex-col p-4 rounded-lg text-white justify-center",children:(0,t.jsxs)(c.Z,{layout:"vertical",onFinish:()=>{s({country:l||void 0,region:a||void 0,priceRange:o||void 0,sizeRange:h||void 0})},children:[(0,t.jsx)(c.Z.Item,{name:"country",label:(0,t.jsx)("label",{style:{color:"white"},children:"Country"}),style:{marginBottom:"12px"},children:(0,t.jsx)(B.Px,{value:l,onChange:e=>{r(e),i("")},classes:"rounded-lg h-[30px] w-full"})}),l&&(0,t.jsx)(c.Z.Item,{name:"city",label:(0,t.jsx)("label",{style:{color:"white"},children:"City"}),style:{marginBottom:"12px"},children:(0,t.jsx)(B.Xz,{country:l,value:a,onChange:e=>i(e),classes:"rounded-lg h-[30px] w-full"})}),(0,t.jsxs)(c.Z.Item,{label:(0,t.jsx)("label",{style:{color:"white"},children:"Price Range"}),children:[(0,t.jsx)(Z.Z,{range:!0,step:100,min:500,max:2e4,defaultValue:o,onChange:e=>d(e)}),(0,t.jsxs)("div",{className:"flex justify-between text-white",children:[(0,t.jsxs)("span",{children:["$",o[0]]}),(0,t.jsxs)("span",{children:["$",o[1]]})]})]}),(0,t.jsxs)(c.Z.Item,{label:(0,t.jsx)("label",{style:{color:"white"},children:"Billboard Size (sq.ft.)"}),children:[(0,t.jsx)(Z.Z,{range:!0,step:10,min:50,max:1e3,defaultValue:h,onChange:e=>x(e)}),(0,t.jsxs)("div",{className:"flex justify-between text-white",children:[(0,t.jsxs)("span",{children:[h[0]," sq.ft."]}),(0,t.jsxs)("span",{children:[h[1]," sq.ft."]})]})]}),(0,t.jsx)(c.Z.Item,{children:(0,t.jsx)(u.ZP,{type:"primary",variant:"solid",color:"default",htmlType:"submit",block:!0,children:"Search"})})]})})},S=e=>{let{data:s}=e,[l,r]=(0,n.useState)(s);return(0,t.jsxs)("div",{className:"w-full min-h-screen flex",children:[(0,t.jsx)("div",{className:"w-[20%] backdrop-blur-lg",children:(0,t.jsx)(C,{onFilter:e=>{let{country:l,region:t,priceRange:n,sizeRange:a}=e;r(s.filter(e=>{let s=!l||e.country===l,r=!t||e.city===t,a=!n||e.price>=n[0]&&e.price<=n[1];return s&&r&&a}))}})}),(0,t.jsx)("div",{className:"w-[80%]",children:(0,t.jsx)(N,{dataCard:l})})]})},A=l(31723),E=l(58959),I=()=>{let e;let s=(0,j.m)(),l=(0,b.x)(),[r]=c.Z.useForm(),{data:a,writeContract:i}=(0,g.S)(),[o,d]=(0,n.useState)([]),[h,x]=(0,n.useState)(!0);switch(l){case f.lG.BAOBAB:e=f.Ye,f.gE;break;case f.lG.MOONBEAM:e=f.Ye,f.Y_;break;default:throw Error("Network not supported")}(0,n.useEffect)(()=>{u()},[]);let u=async()=>{if(x(!0),s.address&&e)try{let s=await (0,A.L)(E.v,{abi:w.W,address:e,functionName:"getTokenIdNewestOOH_NFT",args:[]}),l=Number(s),t=[];console.log(l);for(let s=0;s<Number(l);s++){let l=await (0,A.L)(E.v,{abi:w.W,address:e,functionName:"tokenURI",args:[BigInt(s)]}),n=await fetch(l),r={...await n.json(),tokenId:s};t.push(r)}d(t)}catch(e){console.error("Error reading contract: ",e)}finally{x(!1)}else console.log("Account or tokenAddress not available"),x(!1)};return s.isConnected?(0,t.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center",children:h?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsx)(S,{data:o})}):(0,t.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center",children:"You need to connect your wallet"})}},58959:function(e,s,l){"use strict";l.d(s,{v:function(){return r}});var t=l(25634),n=l(945);let r=(0,t._)({chains:[{id:1287,name:"Moonbase Alpha",network:"Moonbase Alpha",nativeCurrency:{name:"Moonbase Alpha",symbol:"DEV",decimals:18},rpcUrls:{default:{http:["https://rpc.api.moonbase.moonbeam.network"],websocket:["wss://rpc.api.moonbase.moonbeam.network"]},public:{http:["https://rpc.api.moonbase.moonbeam.network"],websocket:["wss://rpc.api.moonbase.moonbeam.network"]}},blockExplorers:{default:{name:"Moonbase Alpha",url:"https://moonbase.moonscan.io/"}},testnet:!0}],transports:{1287:(0,n.d)("https://rpc.api.moonbase.moonbeam.network")}})}},function(e){e.O(0,[8696,8497,4022,4295,4544,6765,9312,1583,7757,1958,7583,6949,6104,8376,7687,4416,2971,8069,1744],function(){return e(e.s=545)}),_N_E=e.O()}]);