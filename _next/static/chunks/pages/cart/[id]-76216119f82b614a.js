(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4464:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart/[id]",function(){return s(4029)}])},3524:function(t,e,s){"use strict";s.d(e,{S:function(){return r}});var n=s(491),i=s(777);let r=()=>{let{data:t,isLoading:e,error:s}=(0,i.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:e,tokenError:s}}},4029:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var n=s(5893),i=s(1163),r=s(491),o=s(3524),u=s(202),a=s(8029),c=s(7294),l=function(t){let{cartId:e,itemId:s,type:l,qty:h,add:d}=t;console.log("cartId",e),console.log("Item: ",l),console.log("Qty: ",h),console.log("add",d);let p=(0,i.useRouter)(),{token:m,tokenError:f}=(0,o.S)(),y=(0,u.NL)(),g={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=m?m:""},v="".concat(r.g.url,"/jsonapi/carts/").concat(e,"/items/").concat(s),{mutate:b,isPending:E,isError:S,isSuccess:O}=(0,a.D)({mutationFn:t=>fetch(v,{method:"PATCH",body:JSON.stringify(t),headers:g}).then(t=>t.json()),onSuccess:t=>{console.log("Success : ",t),y.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,c.useEffect)(()=>{d?b({data:{type:l,id:s,attributes:{quantity:h+1}}}):b({data:{type:l,id:s,attributes:{quantity:Math.max(h-1,0)}}})},[s,b,h,l,d]),(0,c.useEffect)(()=>{if(O){let t=setTimeout(()=>{p.push("/cart")},100);return()=>clearInterval(t)}},[O,p]),(0,n.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:E?"Updating...":"Success..."})},h=function(t){let{cartId:e,itemId:s,type:l}=t;console.log("cartId :",e),console.log("Type: ",l),console.log("itemId :",s);let h=(0,i.useRouter)(),{token:d,tokenError:p}=(0,o.S)(),m=(0,u.NL)(),f={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=d?d:""},y="".concat(r.g.url,"/jsonapi/carts/").concat(e,"/items"),{mutate:g,isPending:v,isError:b,isSuccess:E}=(0,a.D)({mutationFn:t=>fetch(y,{method:"DELETE",body:JSON.stringify(t),headers:f}).then(t=>t.json()),onSuccess:t=>{console.log("Delete Message : ",t),m.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return console.log("query error :",b),(0,c.useEffect)(()=>{g({data:[{type:l,id:s}]})},[]),(0,c.useEffect)(()=>{if(E){let t=setTimeout(()=>{h.push("/cart")},100);return()=>clearInterval(t)}},[E,h]),(0,n.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:v?"Deleting...":"Deleted."})},d=function(){let t=(0,i.useRouter)(),e=t.query.id,{itemId:s}=t.query,{type:r}=t.query,o=parseInt(t.query.qty||"0"),u="true"===t.query.add,a="true"===t.query.delete;return(0,n.jsx)("div",{className:"md:px-20 px-5 py-10",children:a?(0,n.jsx)(h,{cartId:e,itemId:s,type:r}):(0,n.jsx)(l,{cartId:e,itemId:s,type:r,qty:o,add:u})})}},1163:function(t,e,s){t.exports=s(3035)},8029:function(t,e,s){"use strict";s.d(e,{D:function(){return h}});var n=s(7294),i=s(9289),r=s(7037),o=s(7506),u=s(4139),a=class extends o.l{#t;#e=void 0;#s;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#r()}mutate(t,e){return this.#n=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,i.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){r.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,s),this.#n.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#n.onError?.(t.error,e,s),this.#n.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},c=s(202),l=s(6290);function h(t,e){let s=(0,c.NL)(e),[i]=n.useState(()=>new a(s,t));n.useEffect(()=>{i.setOptions(t)},[i,t]);let o=n.useSyncExternalStore(n.useCallback(t=>i.subscribe(r.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=n.useCallback((t,e)=>{i.mutate(t,e).catch(l.Z)},[i]);if(o.error&&(0,l.L)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=4464)}),_N_E=t.O()}]);