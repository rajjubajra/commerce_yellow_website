(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3783:function(e,i,n){Promise.resolve().then(n.bind(n,7542))},7542:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return s}});var r=n(7437),t=n(6540),d=function(){var e;let{data:i,isLoading:n,error:d}=(0,t.a)({queryKey:["getCart"],queryFn:()=>fetch("".concat("https://commerce.yellow-website.com/commerce/web","/cart?_format=json"),{credentials:"include"}).then(e=>e.json())});return d?(0,r.jsxs)("div",{children:["Error: ",d.message]}):n?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsx)("div",{children:i&&(null===(e=i[0])||void 0===e?void 0:e.map(e=>{var i,n,t,d;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:null===(i=e.order_items)||void 0===i?void 0:i.title}),(0,r.jsx)("div",{children:null===(n=e.order_items)||void 0===n?void 0:n.unit_price.formatted}),(0,r.jsx)("div",{children:null===(t=e.order_items)||void 0===t?void 0:t.quantity}),(0,r.jsx)("div",{children:null===(d=e.order_items)||void 0===d?void 0:d.total_price.formatted})]},e.uuid)}))})},c=n(23),l=n(7082);let o=new c.S({});function s(){return(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:(0,r.jsx)(l.aH,{client:o,children:(0,r.jsx)(d,{})})})}}},function(e){e.O(0,[94,971,69,744],function(){return e(e.s=3783)}),_N_E=e.O()}]);