(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{8871:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return i(5862)}])},491:function(t,e,i){"use strict";i.d(e,{g:function(){return s}});let s={url:"https://commerce.yellow-website.com/commerce/web",uri:"https://commerce.yellow-website.com"}},3524:function(t,e,i){"use strict";i.d(e,{S:function(){return r}});var s=i(491),n=i(777);let r=()=>{let{data:t,isLoading:e,error:i}=(0,n.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(s.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return console.log(t,e,i),{token:t,tokenLoading:e,tokenError:i}}},5862:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return p}});var s=i(5893),n=i(1163),r=i(1664),o=i.n(r),u=i(491),l=i(777);let c=t=>{let{id:e}=t,{data:i,isLoading:s,error:n}=(0,l.a)({queryKey:["productlist"],queryFn:()=>fetch("".concat(u.g.url,"/jsonapi/commerce_product/chocolates/").concat(e,"?include=variations"),{credentials:"include"}).then(t=>t.json())});return console.log("Product Listing: ",i),{data:i,isLoading:s,error:n}};var a=i(3524),d=i(202),h=i(8029),v=(t,e)=>{let{title:i}=e;console.log(i);let{token:n,tokenError:r}=(0,a.S)(),o=(0,d.NL)(),l={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=n?n:""},{mutate:c,isPending:v,isError:p,isSuccess:m}=(0,h.D)({mutationFn:t=>fetch("".concat(u.g.url,"/jsonapi/cart/add"),{method:"POST",body:JSON.stringify(t),headers:l}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),o.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"m-2",onClick:()=>{var e,i;c({data:[{type:null==t?void 0:null===(e=t.items)||void 0===e?void 0:e.type,id:null==t?void 0:null===(i=t.items)||void 0===i?void 0:i.id,meta:{quantity:1,combine:!0}}]})},children:i})})},p=function(){var t,e,i,r,u,l;let a=(0,n.useRouter)().query.id,{data:d,isLoading:h,error:p}=c({id:"string"==typeof a?a:""}),m={btntitle:"Click Me!"};return p&&p.message?(0,s.jsxs)("div",{children:["Error: ",p.message]}):h?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsxs)("div",{className:"mx-10 my-10",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o(),{href:"/",children:"Shop"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Deatails:",(0,s.jsx)("div",{children:d&&(null==d?void 0:null===(e=d.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:t.title)}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null==d?void 0:null===(u=d.data)||void 0===u?void 0:null===(r=u.attributes)||void 0===r?void 0:null===(i=r.body)||void 0===i?void 0:i.value}})}),(0,s.jsx)("div",{children:null==d?void 0:null===(l=d.included)||void 0===l?void 0:l.map(t=>{var e,i,n,r;return(null==t?void 0:t.type)==="commerce_product_variation--chocolate"&&(0,s.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,s.jsxs)("div",{children:["Title: ",null==t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.title]}),(0,s.jsxs)("div",{children:["Sku: ",null==t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.sku]}),(0,s.jsxs)("div",{children:["Price: ",null==t?void 0:null===(r=t.attributes)||void 0===r?void 0:null===(n=r.price)||void 0===n?void 0:n.formatted]}),(0,s.jsx)("div",{children:(0,s.jsx)(v,{items:t,title:m.btntitle})})]})})})]})]})}},1163:function(t,e,i){t.exports=i(3035)},8029:function(t,e,i){"use strict";i.d(e,{D:function(){return d}});var s=i(7294),n=i(9289),r=i(7037),o=i(7506),u=i(4139),l=class extends o.l{#t;#e=void 0;#i;#s;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(t){this.#n(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#n(),this.#r()}mutate(t,e){return this.#s=e,this.#i?.removeObserver(this),this.#i=this.#t.getMutationCache().build(this.#t,this.options),this.#i.addObserver(this),this.#i.execute(t)}#n(){let t=this.#i?.state??(0,n.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){r.V.batch(()=>{if(this.#s&&this.hasListeners()){let e=this.#e.variables,i=this.#e.context;t?.type==="success"?(this.#s.onSuccess?.(t.data,e,i),this.#s.onSettled?.(t.data,null,e,i)):t?.type==="error"&&(this.#s.onError?.(t.error,e,i),this.#s.onSettled?.(void 0,t.error,e,i))}this.listeners.forEach(t=>{t(this.#e)})})}},c=i(202),a=i(6290);function d(t,e){let i=(0,c.NL)(e),[n]=s.useState(()=>new l(i,t));s.useEffect(()=>{n.setOptions(t)},[n,t]);let o=s.useSyncExternalStore(s.useCallback(t=>n.subscribe(r.V.batchCalls(t)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),u=s.useCallback((t,e)=>{n.mutate(t,e).catch(a.Z)},[n]);if(o.error&&(0,a.L)(n.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}}},function(t){t.O(0,[664,777,888,774,179],function(){return t(t.s=8871)}),_N_E=t.O()}]);