(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{8871:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return t(4633)}])},491:function(e,i,t){"use strict";t.d(i,{g:function(){return n}});let n={url:"https://commerce.yellow-website.com/commerce/web",uri:"https://commerce.yellow-website.com"}},4633:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return s}});var n=t(5893),d=t(1163),o=t(1664),l=t.n(o),r=t(491),c=t(777);let u=e=>{let{id:i}=e,{data:t,isLoading:n,error:d}=(0,c.a)({queryKey:["productlist"],queryFn:()=>fetch("".concat(r.g.url,"/jsonapi/commerce_product/chocolates/").concat(i,"?include=variations"),{credentials:"include"}).then(e=>e.json())});return console.log("Product Listing: ",t),{data:t,isLoading:n,error:d}};var s=function(){var e,i,t,o,r,c;let s=(0,d.useRouter)().query.id,{data:a,isLoading:v,error:h}=u({id:"string"==typeof s?s:""});return h&&h.message?(0,n.jsxs)("div",{children:["Error: ",h.message]}):v?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("div",{className:"mx-10 my-10",children:[(0,n.jsx)("div",{children:(0,n.jsx)(l(),{href:"/",children:"Shop"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Deatails:",(0,n.jsx)("div",{children:a&&(null==a?void 0:null===(i=a.data)||void 0===i?void 0:null===(e=i.attributes)||void 0===e?void 0:e.title)}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==a?void 0:null===(r=a.data)||void 0===r?void 0:null===(o=r.attributes)||void 0===o?void 0:null===(t=o.body)||void 0===t?void 0:t.value}})}),(0,n.jsx)("div",{children:null==a?void 0:null===(c=a.included)||void 0===c?void 0:c.map(e=>{var i,t,d,o;return"commerce_product_variation--chocolate"===e.type&&(0,n.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,n.jsxs)("div",{children:["Title: ",null===(i=e.attributes)||void 0===i?void 0:i.title]}),(0,n.jsxs)("div",{children:["Sku: ",null===(t=e.attributes)||void 0===t?void 0:t.sku]}),(0,n.jsxs)("div",{children:["Price: ",null===(o=e.attributes)||void 0===o?void 0:null===(d=o.price)||void 0===d?void 0:d.formatted]})]})})})]})]})}},1163:function(e,i,t){e.exports=t(3035)}},function(e){e.O(0,[664,777,888,774,179],function(){return e(e.s=8871)}),_N_E=e.O()}]);