(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{4918:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return t(5153)}])},491:function(e,n,t){"use strict";t.d(n,{g:function(){return r}});let r={url:"https://commerce.yellow-website.com/commerce/web",uri:"https://commerce.yellow-website.com"}},5153:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),c=t(1664),i=t.n(c),o=t(491),s=t(777),l=function(){var e;let{data:n,error:t,isLoading:c}=function(){let{data:e,isLoading:n,error:t}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(o.g.url,"/session/token"),{credentials:"include"}).then(e=>e.text())}),r={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=e?e:""},{data:c,isLoading:i,error:l}=(0,s.a)({queryKey:["productlist"],queryFn:()=>fetch("".concat(o.g.url,"/jsonapi/commerce_product/chocolates"),{headers:r}).then(e=>e.json())});return console.log("Product Listing: ",c),{data:c,isLoading:i,error:l}}();return t&&t.message?(0,r.jsxs)("div",{children:["Error: ",t.message]}):c?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(i(),{href:"/",children:"Shop"})}),(0,r.jsx)("div",{className:"flex flex-col gap-4",children:n&&(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.map(e=>(0,r.jsxs)("div",{className:"border p-4 h-24",children:[(0,r.jsx)("div",{className:"mb-2",children:e.attributes.title}),(0,r.jsx)(i(),{href:"/product/".concat(e.id),className:"py-2 px-4 border border-gray-700 text-center w-36",children:"View Item"})]},e.id)))})]})}}},function(e){e.O(0,[664,777,888,774,179],function(){return e(e.s=4918)}),_N_E=e.O()}]);