(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{1998:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/who-we-are",function(){return e(3912)}])},9903:function(n,t,e){"use strict";var u=e(5893);e(7294),t.Z=function(n){let{title:t}=n;return(0,u.jsx)("div",{className:"w-full my-10 px-10",children:(0,u.jsx)("h2",{className:"text-3xl",children:t})})}},8096:function(n,t,e){"use strict";e.d(t,{c:function(){return a}});var u=e(491),i=e(777);function a(){let n="".concat(u.g.url,"/jsonapi/node/aboutus"),t={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},e=async()=>{let e=await fetch(n,{headers:t});return await e.json()},{data:a,isLoading:l,isError:o}=(0,i.a)({queryKey:["aboutus"],queryFn:e});return{data:a,isLoading:l,isError:o}}},3912:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var u=e(5893),i=e(9903),a=e(8096),l=e(6324),o=e(59),s=function(){var n;let{data:t,isError:e,isLoading:i}=(0,a.c)();return(console.log("about us ",t),i)?(0,u.jsx)(o.default,{}):e?(0,u.jsx)(l.default,{}):(0,u.jsx)("div",{children:t&&(null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.map(n=>{var t,e;return(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"aboutus",dangerouslySetInnerHTML:{__html:null==n?void 0:null===(e=n.attributes)||void 0===e?void 0:null===(t=e.body)||void 0===t?void 0:t.value}})},n.id)}))})},r=function(){return(0,u.jsxs)("div",{className:"w-full px-20 py-20 bg-slate-100 font-light",children:[(0,u.jsx)(i.Z,{title:"Whow we are"}),(0,u.jsx)(s,{})]})}}},function(n){n.O(0,[888,774,179],function(){return n(n.s=1998)}),_N_E=n.O()}]);