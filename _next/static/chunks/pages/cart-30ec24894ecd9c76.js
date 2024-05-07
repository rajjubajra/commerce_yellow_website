(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return e(6292)}])},3524:function(t,i,e){"use strict";e.d(i,{S:function(){return o}});var n=e(491),s=e(777);let o=()=>{let{data:t,isLoading:i,error:e}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:i,tokenError:e}}},6292:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return f}});var n=e(5893),s=e(1664),o=e.n(s),l=function(){return(0,n.jsx)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:"Loading..."})},r=e(7294),d=function(t){return(0,n.jsxs)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:["Page Error: ",t.message]})},u=e(491),a=e(777);function c(){let{data:t,isLoading:i,error:e}=(0,a.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(u.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}}).then(t=>t.text())}),n="".concat(u.g.url,"/jsonapi/carts"),s={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",token:null!=t?t:""};console.log("token loading",i);let{data:o,isLoading:l,isError:r}=(0,a.a)({queryKey:["getCart"],queryFn:()=>fetch(n,{headers:s}).then(t=>t.json())});return console.log("CART REPORT: ",o,r,l,e),{data:o,isError:r,isLoading:l,tokenError:e}}var v=function(){let[t,i]=(0,r.useState)([]),{data:e,isError:s,isLoading:o}=c();return((0,r.useEffect)(()=>{e&&i(null==e?void 0:e.data)},[e]),s)?(0,n.jsx)(d,{}):o?(0,n.jsx)(l,{}):(0,n.jsx)("div",{children:t&&(null==t?void 0:t.map(t=>{var i,e,s,o,l,r,d,u,a,c;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Email: ",null===(i=t.attributes)||void 0===i?void 0:i.mail]}),(0,n.jsxs)("div",{children:["Order sub Total: ",null===(o=t.attributes)||void 0===o?void 0:null===(s=o.order_total)||void 0===s?void 0:null===(e=s.subtotal)||void 0===e?void 0:e.number]}),(0,n.jsxs)("div",{children:["Order Total: ",null===(d=t.attributes)||void 0===d?void 0:null===(r=d.order_total)||void 0===r?void 0:null===(l=r.total)||void 0===l?void 0:l.number]}),(0,n.jsxs)("div",{children:["Store Id: ",null==t?void 0:null===(c=t.relationships)||void 0===c?void 0:null===(a=c.store_id)||void 0===a?void 0:null===(u=a.data)||void 0===u?void 0:u.id]}),(0,n.jsxs)("div",{children:["Type: ",null==t?void 0:t.type]})]},t.id)}))})},h=e(3524),p=e(202),m=e(8029),x=function(t){let{cartId:i,item:e}=t;console.log("cartId",i),console.log("Item: ",e);let{token:s,tokenError:o}=(0,h.S)(),l=(0,p.NL)(),r={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=s?s:""},d="".concat(u.g.url,"/jsonapi/carts/").concat(i,"/items/").concat(null==e?void 0:e.id),{mutate:a,isPending:c,isError:v,isSuccess:x}=(0,m.D)({mutationFn:t=>fetch(d,{method:"PATCH",body:JSON.stringify(t),headers:r}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),l.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"m-2",onClick:()=>{var t;a({data:[{data:{type:null==e?void 0:null===(t=e.order_id)||void 0===t?void 0:t.type,id:null==e?void 0:e.id,attributes:{quantity:1}}}]})},children:"Add One more"})})},b=function(){let[t,i]=(0,r.useState)([]),{data:e,isError:s,isLoading:o}=c(),[l,d]=(0,r.useState)(0),[u,a]=(0,r.useState)(""),[v,h]=(0,r.useState)(""),p=(t,i)=>{var e,n,s;let o=t&&(null==t?void 0:t.find(t=>t.id===i));return{sku:null==o?void 0:null===(e=o.attributes)||void 0===e?void 0:e.sku,weight:parseInt(null===(n=o.attributes)||void 0===n?void 0:n.weight.number),unit:null===(s=o.attributes)||void 0===s?void 0:s.weight.unit}};return(0,r.useEffect)(()=>{var t,n,s,o,l,r,d,u,a,c,v;let h=[];console.log("to be set data: ",e&&(null==e?void 0:null===(s=e.data[0])||void 0===s?void 0:null===(n=s.relationships)||void 0===n?void 0:null===(t=n.order_items)||void 0===t?void 0:t.data)),e&&(null==e?void 0:e.data)&&(null==e?void 0:null===(o=e.data[0])||void 0===o?void 0:o.relationships)&&(null==e?void 0:null===(r=e.data[0])||void 0===r?void 0:null===(l=r.relationships)||void 0===l?void 0:l.order_items)&&(null==e?void 0:null===(u=e.data[0])||void 0===u?void 0:null===(d=u.relationships.order_items)||void 0===d?void 0:d.data)&&h.push(...null==e?void 0:null===(v=e.data[0])||void 0===v?void 0:null===(c=v.relationships)||void 0===c?void 0:null===(a=c.order_items)||void 0===a?void 0:a.data),console.log("set in an Array: ",h);let m=[];h.length>0&&(null==h||h.map(t=>{var i,n,s,o,l,r,d,u,a,c,v,h,x,b,f;let j=null==e?void 0:null===(i=e.included)||void 0===i?void 0:i.find(i=>i.id===t.id);m.push({id:null==j?void 0:j.id,order_id:null==j?void 0:null===(s=j.relationships)||void 0===s?void 0:null===(n=s.order_id)||void 0===n?void 0:n.data,order_item_id:null==j?void 0:null===(o=j.attributes)||void 0===o?void 0:o.drupal_internal__order_item_id,quantity:parseInt(null==j?void 0:null===(l=j.attributes)||void 0===l?void 0:l.quantity,10),title:null==j?void 0:null===(r=j.attributes)||void 0===r?void 0:r.title,currency_code:null==j?void 0:null===(u=j.attributes)||void 0===u?void 0:null===(d=u.unit_price)||void 0===d?void 0:d.currency_code,unit_price:parseInt(null==j?void 0:null===(c=j.attributes)||void 0===c?void 0:null===(a=c.unit_price)||void 0===a?void 0:a.number,10),total_price:parseInt(null==j?void 0:null===(h=j.attributes)||void 0===h?void 0:null===(v=h.total_price)||void 0===v?void 0:v.number,10),variations:p(e&&(null==e?void 0:e.included),null==j?void 0:null===(f=j.relationships)||void 0===f?void 0:null===(b=f.purchased_entity)||void 0===b?void 0:null===(x=b.data)||void 0===x?void 0:x.id)})})),i(m)},[e]),(0,n.jsx)("div",{className:"border p-2",children:null==t?void 0:t.map(t=>{var i,s,o,l;return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,n.jsxs)("div",{className:"text-sm border p-2 m-1",children:[(0,n.jsxs)("div",{className:"text-xs",children:["id:",null==t?void 0:t.id]}),(0,n.jsxs)("div",{children:["Order Item Id: ",null==t?void 0:t.order_item_id]}),(0,n.jsxs)("div",{children:["Title: ",null==t?void 0:t.title]}),(0,n.jsxs)("div",{children:["SKU: ",null==t?void 0:null===(i=t.variations)||void 0===i?void 0:i.sku]})]}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{children:["Quantity: ",null==t?void 0:t.quantity]}),(0,n.jsxs)("div",{children:["Unit Price: ",null==t?void 0:t.unit_price]}),(0,n.jsxs)("div",{children:["Weight: ",null==t?void 0:null===(s=t.variations)||void 0===s?void 0:s.weight," ",null==t?void 0:null===(o=t.variations)||void 0===o?void 0:o.unit]})]}),(0,n.jsx)("div",{className:"flex gap-1 border p-2 m-1",children:(0,n.jsxs)("div",{children:["Total Price: ",null==t?void 0:t.total_price]})}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsx)("div",{className:"my-1 px-4 py-2 border",children:(0,n.jsx)(x,{cartId:null==e?void 0:null===(l=e.data[0])||void 0===l?void 0:l.id,item:t})}),(0,n.jsx)("div",{className:"my-1 px-4 py-2 border",children:"Delete"})]})]},null==t?void 0:t.id)})})},f=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Shopping Cart"}),(0,n.jsx)(o(),{href:"/",children:"Home"}),(0,n.jsx)("div",{children:(0,n.jsx)(v,{})}),(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(b,{})})]})}},8029:function(t,i,e){"use strict";e.d(i,{D:function(){return c}});var n=e(7294),s=e(9289),o=e(7037),l=e(7506),r=e(4139),d=class extends l.l{#t;#i=void 0;#e;#n;constructor(t,i){super(),this.#t=t,this.setOptions(i),this.bindMethods(),this.#s()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let i=this.options;this.options=this.#t.defaultMutationOptions(t),(0,r.VS)(this.options,i)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#e,observer:this}),i?.mutationKey&&this.options.mutationKey&&(0,r.Ym)(i.mutationKey)!==(0,r.Ym)(this.options.mutationKey)?this.reset():this.#e?.state.status==="pending"&&this.#e.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#e?.removeObserver(this)}onMutationUpdate(t){this.#s(),this.#o(t)}getCurrentResult(){return this.#i}reset(){this.#e?.removeObserver(this),this.#e=void 0,this.#s(),this.#o()}mutate(t,i){return this.#n=i,this.#e?.removeObserver(this),this.#e=this.#t.getMutationCache().build(this.#t,this.options),this.#e.addObserver(this),this.#e.execute(t)}#s(){let t=this.#e?.state??(0,s.R)();this.#i={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){o.V.batch(()=>{if(this.#n&&this.hasListeners()){let i=this.#i.variables,e=this.#i.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,i,e),this.#n.onSettled?.(t.data,null,i,e)):t?.type==="error"&&(this.#n.onError?.(t.error,i,e),this.#n.onSettled?.(void 0,t.error,i,e))}this.listeners.forEach(t=>{t(this.#i)})})}},u=e(202),a=e(6290);function c(t,i){let e=(0,u.NL)(i),[s]=n.useState(()=>new d(e,t));n.useEffect(()=>{s.setOptions(t)},[s,t]);let l=n.useSyncExternalStore(n.useCallback(t=>s.subscribe(o.V.batchCalls(t)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),r=n.useCallback((t,i)=>{s.mutate(t,i).catch(a.Z)},[s]);if(l.error&&(0,a.L)(s.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:r,mutateAsync:l.mutate}}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=4476)}),_N_E=t.O()}]);