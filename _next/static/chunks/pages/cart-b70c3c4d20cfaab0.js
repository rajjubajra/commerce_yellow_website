(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return s(7723)}])},491:function(t,e,s){"use strict";s.d(e,{g:function(){return r}});let r={url:"https://commerce.yellow-website.com/commerce/web",uri:"https://commerce.yellow-website.com"}},3524:function(t,e,s){"use strict";s.d(e,{S:function(){return n}});var r=s(491),i=s(777);let n=()=>{let{data:t,isLoading:e,error:s}=(0,i.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(r.g.url,"/session/token"),{credentials:"include"}).then(t=>t.json())});return console.log(t,e,s),{token:t,tokenLoading:e,tokenError:s}}},7723:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var r=s(5893),i=s(7294),n=s(491),o=s(202),u=s(8029),c=s(3524),a=s(777),d=s(1664),l=s.n(d),h=function(){var t,e,s;let{token:d,tokenError:h}=(0,c.S)();console.log("TOKEN : ",d,"TOKEN ERROR: ",h);let{cartItems:m,cartError:p,cartItemLoading:v}=function(){let{data:t,isLoading:e,error:s}=(0,a.a)({queryKey:["getCart"],queryFn:()=>fetch("".concat(n.g.url,"/cart?_format=json"),{credentials:"include"}).then(t=>t.json())});return console.log(t,e,s),{cartItems:t,cartItemLoading:e,cartError:s}}(),f=(0,o.NL)(),b={"Content-Type":"application/json","csrf-token":d||""},[x,g]=(0,i.useState)();(0,i.useEffect)(()=>{g(m[0].order_id)},[m]);let{mutate:j,isPending:y,isError:O,isSuccess:_}=(0,u.D)({mutationFn:t=>fetch("".concat(n.g.url,"/cart/").concat(x,"/items?_format=json"),{method:"POST",body:JSON.stringify(t),headers:b}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),f.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return p?(0,r.jsxs)("div",{children:["Error: (",p.message,")"]}):v?(0,r.jsx)("div",{children:"Loading..."}):(console.log("Data[0]: ",m[0]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(l(),{href:"/",children:"Home"})}),(0,r.jsx)("h3",{className:"text-2xl",children:"Shopping Cart:"}),(0,r.jsxs)("div",{className:"border p-2",children:[(0,r.jsxs)("div",{children:["UUID: ",null===(t=m[0])||void 0===t?void 0:t.uuid]}),(0,r.jsxs)("div",{children:["Order Id: ",m[0].order_id]})]}),m[0].order_items.map((t,e)=>(0,r.jsxs)("div",{className:"border m-2 p-2",children:[(0,r.jsxs)("div",{children:["Order ID: ",t.order_id]}),(0,r.jsxs)("div",{children:["UUID: ",t.uuid]}),(0,r.jsxs)("div",{children:["Product Name: ",t.title]}),(0,r.jsxs)("div",{children:["Unite Price: ",t.unit_price.formatted]}),(0,r.jsxs)("div",{children:["Product Quantity: ",t.quantity]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"number",name:"updateQty",required:!0})}),(0,r.jsxs)("div",{children:["Total Price: ",t.total_price.formatted]})]},e)),(0,r.jsx)("div",{className:"flex gap-6",children:(0,r.jsxs)("div",{className:"border p-2",children:[(0,r.jsxs)("div",{children:["Order Number: ",null===(e=m[0])||void 0===e?void 0:e.order_number]}),(0,r.jsxs)("div",{children:["Sub Total: ",m[0].order_total.subtotal.formatted]}),(0,r.jsxs)("div",{children:["Total Amount: ",null===(s=m[0])||void 0===s?void 0:s.total_price.formatted]})]})})]}))}},8029:function(t,e,s){"use strict";s.d(e,{D:function(){return l}});var r=s(7294),i=s(9289),n=s(7037),o=s(7506),u=s(4139),c=class extends o.l{#t;#e=void 0;#s;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#n()}mutate(t,e){return this.#r=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,i.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#n(t){n.V.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#r.onSuccess?.(t.data,e,s),this.#r.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#r.onError?.(t.error,e,s),this.#r.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},a=s(202),d=s(6290);function l(t,e){let s=(0,a.NL)(e),[i]=r.useState(()=>new c(s,t));r.useEffect(()=>{i.setOptions(t)},[i,t]);let o=r.useSyncExternalStore(r.useCallback(t=>i.subscribe(n.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=r.useCallback((t,e)=>{i.mutate(t,e).catch(d.Z)},[i]);if(o.error&&(0,d.L)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}}},function(t){t.O(0,[664,777,888,774,179],function(){return t(t.s=4476)}),_N_E=t.O()}]);