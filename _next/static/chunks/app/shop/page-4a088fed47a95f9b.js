(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{3083:function(t,e,s){Promise.resolve().then(s.bind(s,8772))},8772:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var i=s(7437),n=s(7319),o=s(4642),r=s(2265),a=s(1793),u=s(5139),h=s(4614),c=s(6063),l=class extends h.l{#t;#e=void 0;#s;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,c.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,c.Ym)(e.mutationKey)!==(0,c.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#n(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#n(),this.#o()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#n(){let t=this.#s?.state??(0,a.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){u.V.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s),this.#i.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s),this.#i.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},d=s(7082),p=s(826),m=function(){let{data:t,isLoading:e,error:s}=(0,o.a)({queryKey:["getCart"],queryFn:()=>fetch("".concat(n.g.url,"/jsonapi/commerce_product/chocolates"),{credentials:"include"}).then(t=>t.json())});console.log(t);let{data:a,error:h}=(0,o.a)({queryKey:["getToken"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{headers:{"Content-Type":"application/json"}}).then(t=>t.text())});console.log("token",a,"tokenError",h);let c={"Content-Type":"application/json","csrf-token":a||""},{mutate:m,isPending:f,isError:y,isSuccess:v}=function(t,e){let s=(0,d.NL)(void 0),[i]=r.useState(()=>new l(s,t));r.useEffect(()=>{i.setOptions(t)},[i,t]);let n=r.useSyncExternalStore(r.useCallback(t=>i.subscribe(u.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),o=r.useCallback((t,e)=>{i.mutate(t,e).catch(p.Z)},[i]);if(n.error&&(0,p.L)(i.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:o,mutateAsync:n.mutate}}({mutationFn:t=>fetch("".concat(n.g.url,"/cart/add?_format=json"),{method:"POST",body:JSON.stringify(t),headers:c}).then(t=>t.json()),onSuccess:()=>{console.log("Success")},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(console.log("isError",y,"isPending ",f,"is success: ",v),s&&s.message)?(0,i.jsxs)("div",{children:["Error: ",s.message]}):e?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"Shop"}),(0,i.jsx)("button",{onClick:()=>{m([{purchased_entity_type:"commerce_product_variation",purchased_entity_id:"27",quantity:"5"}])},children:"Add to Cart"})]})}},7319:function(t,e,s){"use strict";s.d(e,{g:function(){return i}});let i={url:"https://commerce.yellow-website.com/commerce/web",uri:"https://commerce.yellow-website.com"}},1793:function(t,e,s){"use strict";s.d(e,{R:function(){return a},m:function(){return r}});var i=s(5139),n=s(2041),o=s(326),r=class extends n.F{#r;#a;#u;#h;constructor(t){super(),this.mutationId=t.mutationId,this.#a=t.defaultOptions,this.#u=t.mutationCache,this.#r=[],this.state=t.state||a(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#r.includes(t)||(this.#r.push(t),this.clearGcTimeout(),this.#u.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#r=this.#r.filter(e=>e!==t),this.scheduleGc(),this.#u.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#r.length||("pending"===this.state.status?this.scheduleGc():this.#u.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#c({type:"pending",variables:t}),await this.#u.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#c({type:"pending",context:e,variables:t})}let s=await (this.#h=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#h.promise);return await this.#u.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#u.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#c({type:"success",data:s}),s}catch(e){try{throw await this.#u.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#u.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#c({type:"error",error:e})}}}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#r.forEach(e=>{e.onMutationUpdate(t)}),this.#u.notify({mutation:this,type:"updated",action:t})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}}},function(t){t.O(0,[618,642,971,69,744],function(){return t(t.s=3083)}),_N_E=t.O()}]);