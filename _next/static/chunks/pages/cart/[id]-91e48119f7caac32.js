(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4464:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart/[id]",function(){return s(3676)}])},3524:function(t,e,s){"use strict";s.d(e,{S:function(){return r}});var n=s(491),i=s(777);let r=()=>{let{data:t,isLoading:e,error:s}=(0,i.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:e,tokenError:s}}},3676:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var n=s(5893),i=s(1163),r=s(491),u=s(3524),o=s(202),a=s(8029),c=s(7294),h=function(t){let{cartId:e,itemId:s,type:h,qty:l,update:d}=t;console.log("cartId",e),console.log("Item: ",h),console.log("Qty: ",l),console.log("update",d);let p=(0,i.useRouter)(),{token:f,tokenError:m}=(0,u.S)(),y=(0,o.NL)(),b={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=f?f:""},g="".concat(r.g.url,"/jsonapi/carts/").concat(e,"/items/").concat(s),{mutate:v,isPending:O,isError:M,isSuccess:S}=(0,a.D)({mutationFn:t=>fetch(g,{method:"PATCH",body:JSON.stringify(t),headers:b}).then(t=>t.json()),onSuccess:t=>{console.log("Success : ",t),y.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,c.useEffect)(()=>{d?v({data:{type:h,id:s,attributes:{quantity:l+1}}}):v({data:{type:h,id:s,attributes:{quantity:l-1}}})},[]),(0,c.useEffect)(()=>{let t=setTimeout(()=>{p.push("/cart")},2e3);return()=>clearInterval(t)},[]),(0,n.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:"Updating..."})},l=function(){let t=(0,i.useRouter)(),e=t.query.id,{itemId:s}=t.query,{type:r}=t.query,u=parseInt(t.query.qty||"0"),o=t.query.update;return(0,n.jsx)(h,{cartId:e,itemId:s,type:r,qty:u,update:o})}},1163:function(t,e,s){t.exports=s(3035)},8029:function(t,e,s){"use strict";s.d(e,{D:function(){return l}});var n=s(7294),i=s(9289),r=s(7037),u=s(7506),o=s(4139),a=class extends u.l{#t;#e=void 0;#s;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,o.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(e.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#r()}mutate(t,e){return this.#n=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,i.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){r.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,s),this.#n.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#n.onError?.(t.error,e,s),this.#n.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},c=s(202),h=s(6290);function l(t,e){let s=(0,c.NL)(e),[i]=n.useState(()=>new a(s,t));n.useEffect(()=>{i.setOptions(t)},[i,t]);let u=n.useSyncExternalStore(n.useCallback(t=>i.subscribe(r.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),o=n.useCallback((t,e)=>{i.mutate(t,e).catch(h.Z)},[i]);if(u.error&&(0,h.L)(i.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:o,mutateAsync:u.mutate}}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=4464)}),_N_E=t.O()}]);