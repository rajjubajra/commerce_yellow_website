"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{9555:function(t,e,s){s.d(e,{j:function(){return n}});var i=s(4614),r=s(6063),n=new class extends i.l{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},5139:function(t,e,s){s.d(e,{V:function(){return i}});var i=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}()},7211:function(t,e,s){s.d(e,{N:function(){return n}});var i=s(4614),r=s(6063),n=new class extends i.l{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}}},4668:function(t,e,s){s.d(e,{A:function(){return u},z:function(){return o}});var i=s(6063),r=s(5139),n=s(326),a=s(2041),u=class extends a.F{#r;#n;#a;#u;#o;#h;#c;constructor(t){super(),this.#c=!1,this.#h=t.defaultOptions,this.setOptions(t.options),this.#o=[],this.#a=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#r=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#r,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.#h,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#o.length||"idle"!==this.state.fetchStatus||this.#a.remove(this)}setData(t,e){let s=(0,i.oE)(this.state.data,t,this.options);return this.#l({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#l({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#r)}isActive(){return this.#o.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.#o.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#o.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.#o.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.#o.includes(t)||(this.#o.push(t),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#o.includes(t)&&(this.#o=this.#o.filter(e=>e!==t),this.#o.length||(this.#u&&(this.#c?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#o.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.#o.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,r={queryKey:this.queryKey,meta:this.meta},a=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#c=!0,s.signal)})};a(r);let u={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==i.CN?(this.#c=!1,this.options.persister)?this.options.persister(this.options.queryFn,r,this):this.options.queryFn(r):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};a(u),this.options.behavior?.onFetch(u,this),this.#n=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==u.fetchOptions?.meta)&&this.#l({type:"fetch",meta:u.fetchOptions?.meta});let o=t=>{(0,n.DV)(t)&&t.silent||this.#l({type:"error",error:t}),(0,n.DV)(t)||(this.#a.config.onError?.(t,this),this.#a.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#u=(0,n.Mz)({fn:u.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#a.config.onSuccess?.(t,this),this.#a.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.#u.promise}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...o(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,n.DV)(s)&&s.revert&&this.#n)return{...this.#n,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.#o.forEach(t=>{t.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:t})})}};function o(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},23:function(t,e,s){s.d(e,{S:function(){return y}});var i=s(6063),r=s(4668),n=s(5139),a=s(4614),u=class extends a.l{constructor(t={}){super(),this.config=t,this.#d=new Map}#d;build(t,e,s){let n=e.queryKey,a=e.queryHash??(0,i.Rm)(n,e),u=this.get(a);return u||(u=new r.A({cache:this,queryKey:n,queryHash:a,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(n)}),this.add(u)),u}add(t){this.#d.has(t.queryHash)||(this.#d.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#d.get(t.queryHash);e&&(t.destroy(),e===t&&this.#d.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#d.get(t)}getAll(){return[...this.#d.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},o=s(2041),h=s(326),c=class extends o.F{#o;#h;#f;#u;constructor(t){super(),this.mutationId=t.mutationId,this.#h=t.defaultOptions,this.#f=t.mutationCache,this.#o=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#h,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#o.includes(t)||(this.#o.push(t),this.clearGcTimeout(),this.#f.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#o=this.#o.filter(e=>e!==t),this.scheduleGc(),this.#f.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#o.length||("pending"===this.state.status?this.scheduleGc():this.#f.remove(this))}continue(){return this.#u?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#l({type:"pending",variables:t}),await this.#f.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#l({type:"pending",context:e,variables:t})}let s=await (this.#u=(0,h.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#u.promise);return await this.#f.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#f.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#l({type:"success",data:s}),s}catch(e){try{throw await this.#f.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#f.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#l({type:"error",error:e})}}}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,h.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#o.forEach(e=>{e.onMutationUpdate(t)}),this.#f.notify({mutation:this,type:"updated",action:t})})}},l=class extends a.l{constructor(t={}){super(),this.config=t,this.#p=[],this.#y=0}#p;#y;#m;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#y,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#p.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#p=this.#p.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.#p.forEach(t=>{this.remove(t)})})}getAll(){return this.#p}find(t){let e={exact:!0,...t};return this.#p.find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.#p.filter(e=>(0,i.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#m=(this.#m??Promise.resolve()).then(()=>{let t=this.#p.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(i.ZT)),Promise.resolve()))}).then(()=>{this.#m=void 0}),this.#m}},d=s(9555),f=s(7211);function p(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var y=class{#v;#f;#h;#b;#g;#O;#C;#R;constructor(t={}){this.#v=t.queryCache||new u,this.#f=t.mutationCache||new l,this.#h=t.defaultOptions||{},this.#b=new Map,this.#g=new Map,this.#O=0}mount(){this.#O++,1===this.#O&&(this.#C=d.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onFocus())}),this.#R=f.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onOnline())}))}unmount(){this.#O--,0===this.#O&&(this.#C?.(),this.#C=void 0,this.#R?.(),this.#R=void 0)}isFetching(t){return this.#v.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#f.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#v.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#v.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let r=this.defaultQueryOptions({queryKey:t}),n=this.#v.get(r.queryHash),a=n?.state.data,u=(0,i.SE)(e,a);if(void 0!==u)return this.#v.build(this,r).setData(u,{...s,manual:!0})}setQueriesData(t,e,s){return n.V.batch(()=>this.#v.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state}removeQueries(t){let e=this.#v;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#v,i={type:"active",...t};return n.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(n.V.batch(()=>this.#v.findAll(t).map(t=>t.cancel(s)))).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#v.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#v.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#v.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let r=async()=>{let s;let r=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],u=t.state.data?.pageParams||[],o=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},c=t.options.queryFn&&t.options.queryFn!==i.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),l=async(e,s,r)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:s,direction:r?"backward":"forward",meta:t.options.meta};h(n);let a=await c(n),{maxPages:u}=t.options,l=r?i.Ht:i.VX;return{pages:l(e.pages,a,u),pageParams:l(e.pageParams,s,u)}};if(n&&a.length){let t="backward"===n,e={pages:a,pageParams:u},i=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:p)(r,e);s=await l(e,i,t)}else{s=await l({pages:[],pageParams:[]},u[0]??r.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=p(r,s);s=await l(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return f.N.isOnline()?this.#f.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#v}getMutationCache(){return this.#f}getDefaultOptions(){return this.#h}setDefaultOptions(t){this.#h=t}setQueryDefaults(t,e){this.#b.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#b.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#g.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#g.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#h.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===i.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#h.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#v.clear(),this.#f.clear()}}},2041:function(t,e,s){s.d(e,{F:function(){return r}});var i=s(6063),r=class{#w;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#w=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#w&&(clearTimeout(this.#w),this.#w=void 0)}}},326:function(t,e,s){s.d(e,{DV:function(){return h},Kw:function(){return u},Mz:function(){return c}});var i=s(9555),r=s(7211),n=s(6063);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||r.N.isOnline()}var o=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof o}function c(t){let e,s,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{s=t,h=e}),p=()=>!i.j.isFocused()||"always"!==t.networkMode&&!r.N.isOnline(),y=i=>{d||(d=!0,t.onSuccess?.(i),e?.(),s(i))},m=s=>{d||(d=!0,t.onError?.(s),e?.(),h(s))},v=()=>new Promise(s=>{e=t=>{let e=d||!p();return e&&s(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let s=t.retry??(n.sk?0:3),i=t.retryDelay??a,r="function"==typeof i?i(l,e):i,u=!0===s||"number"==typeof s&&l<s||"function"==typeof s&&s(l,e);if(c||!u){m(e);return}l++,t.onFail?.(l,e),(0,n._v)(r).then(()=>{if(p())return v()}).then(()=>{c?m(e):b()})})}};return u(t.networkMode)?b():v().then(b),{promise:f,cancel:e=>{d||(m(new o(e)),t.abort?.())},continue:()=>e?.()?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},4614:function(t,e,s){s.d(e,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6063:function(t,e,s){s.d(e,{CN:function(){return C},Ht:function(){return O},Kp:function(){return u},PN:function(){return a},Rm:function(){return c},SE:function(){return n},VS:function(){return f},VX:function(){return g},X7:function(){return h},Ym:function(){return l},ZT:function(){return r},_v:function(){return v},_x:function(){return o},oE:function(){return b},sk:function(){return i},to:function(){return d}});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function o(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:u}=t;if(a){if(i){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function h(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(l(e.options.mutationKey)!==l(n))return!1}else if(!d(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>y(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!d(t[s],e[s]))}function f(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(m(s)&&s.hasOwnProperty("isPrototypeOf"))}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return new Promise(e=>{setTimeout(e,t)})}function b(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=p(e)&&p(s);if(i||y(e)&&y(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),u=a.length,o=i?[]:{},h=0;for(let n=0;n<u;n++){let u=i?n:a[n];!i&&void 0===e[u]&&void 0===s[u]&&r.includes(u)?(o[u]=void 0,h++):(o[u]=t(e[u],s[u]),o[u]===e[u]&&void 0!==e[u]&&h++)}return n===u&&h===n?e:o}return s}(t,e):e}function g(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function O(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var C=Symbol()},7082:function(t,e,s){s.d(e,{NL:function(){return a},aH:function(){return u}});var i=s(2265),r=s(7437),n=i.createContext(void 0),a=t=>{let e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=t=>{let{client:e,children:s}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(n.Provider,{value:e,children:s})}},6540:function(t,e,s){let i;s.d(e,{a:function(){return F}});var r=s(6063),n=s(5139),a=s(9555),u=s(4614),o=s(4668),h=class extends u.l{constructor(t,e){super(),this.options=e,this.#S=t,this.#q=null,this.bindMethods(),this.setOptions(e)}#S;#F=void 0;#Q=void 0;#E=void 0;#P;#T;#q;#D;#I;#M;#A;#k;#x;#U=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#F.addObserver(this),c(this.#F,this.options)?this.#K():this.updateResult(),this.#j())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#F,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#F,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#V(),this.#L(),this.#F.removeObserver(this)}setOptions(t,e){let s=this.options,i=this.#F;if(this.options=this.#S.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.#N(),this.#F.setOptions(this.options),s._defaulted&&!(0,r.VS)(this.options,s)&&this.#S.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#F,observer:this});let n=this.hasListeners();n&&d(this.#F,i,this.options,s)&&this.#K(),this.updateResult(e),n&&(this.#F!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#H();let a=this.#_();n&&(this.#F!==i||this.options.enabled!==s.enabled||a!==this.#x)&&this.#G(a)}getOptimisticResult(t){let e=this.#S.getQueryCache().build(this.#S,t),s=this.createResult(e,t);return(0,r.VS)(this.getCurrentResult(),s)||(this.#E=s,this.#T=this.options,this.#P=this.#F.state),s}getCurrentResult(){return this.#E}trackResult(t,e){let s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),e?.(i),t[i])})}),s}trackProp(t){this.#U.add(t)}getCurrentQuery(){return this.#F}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#S.defaultQueryOptions(t),s=this.#S.getQueryCache().build(this.#S,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#K({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#E))}#K(t){this.#N();let e=this.#F.fetch(this.options,t);return t?.throwOnError||(e=e.catch(r.ZT)),e}#H(){if(this.#V(),r.sk||this.#E.isStale||!(0,r.PN)(this.options.staleTime))return;let t=(0,r.Kp)(this.#E.dataUpdatedAt,this.options.staleTime);this.#A=setTimeout(()=>{this.#E.isStale||this.updateResult()},t+1)}#_(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#F):this.options.refetchInterval)??!1}#G(t){this.#L(),this.#x=t,!r.sk&&!1!==this.options.enabled&&(0,r.PN)(this.#x)&&0!==this.#x&&(this.#k=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.#K()},this.#x))}#j(){this.#H(),this.#G(this.#_())}#V(){this.#A&&(clearTimeout(this.#A),this.#A=void 0)}#L(){this.#k&&(clearInterval(this.#k),this.#k=void 0)}createResult(t,e){let s;let i=this.#F,n=this.options,a=this.#E,u=this.#P,h=this.#T,l=t!==i?t.state:this.#Q,{state:p}=t,y={...p},m=!1;if(e._optimisticResults){let s=this.hasListeners(),r=!s&&c(t,e),a=s&&d(t,i,e,n);(r||a)&&(y={...y,...(0,o.z)(p.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:g}=y;if(e.select&&void 0!==y.data){if(a&&y.data===u?.data&&e.select===this.#D)s=this.#I;else try{this.#D=e.select,s=e.select(y.data),s=(0,r.oE)(a?.data,s,e),this.#I=s,this.#q=null}catch(t){this.#q=t}}else s=y.data;if(void 0!==e.placeholderData&&void 0===s&&"pending"===g){let t;if(a?.isPlaceholderData&&e.placeholderData===h?.placeholderData)t=a.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#M?.state.data,this.#M):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#q=null}catch(t){this.#q=t}void 0!==t&&(g="success",s=(0,r.oE)(a?.data,t,e),m=!0)}this.#q&&(v=this.#q,s=this.#I,b=Date.now(),g="error");let O="fetching"===y.fetchStatus,C="pending"===g,R="error"===g,w=C&&O,S=void 0!==s;return{status:g,fetchStatus:y.fetchStatus,isPending:C,isSuccess:"success"===g,isError:R,isInitialLoading:w,isLoading:w,data:s,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>l.dataUpdateCount||y.errorUpdateCount>l.errorUpdateCount,isFetching:O,isRefetching:O&&!C,isLoadingError:R&&!S,isPaused:"paused"===y.fetchStatus,isPlaceholderData:m,isRefetchError:R&&S,isStale:f(t,e),refetch:this.refetch}}updateResult(t){let e=this.#E,s=this.createResult(this.#F,this.options);if(this.#P=this.#F.state,this.#T=this.options,void 0!==this.#P.data&&(this.#M=this.#F),(0,r.VS)(s,e))return;this.#E=s;let i={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#U.size)return!0;let i=new Set(s??this.#U);return this.options.throwOnError&&i.add("error"),Object.keys(this.#E).some(t=>this.#E[t]!==e[t]&&i.has(t))})()&&(i.listeners=!0),this.#Z({...i,...t})}#N(){let t=this.#S.getQueryCache().build(this.#S,this.options);if(t===this.#F)return;let e=this.#F;this.#F=t,this.#Q=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#j()}#Z(t){n.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#E)}),this.#S.getQueryCache().notify({query:this.#F,type:"observerResultsUpdated"})})}};function c(t,e){return!1!==e.enabled&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&l(t,e,e.refetchOnMount)}function l(t,e,s){if(!1!==e.enabled){let i="function"==typeof s?s(t):s;return"always"===i||!1!==i&&f(t,e)}return!1}function d(t,e,s,i){return(t!==e||!1===i.enabled)&&(!s.suspense||"error"!==t.state.status)&&f(t,s)}function f(t,e){return!1!==e.enabled&&t.isStaleByTime(e.staleTime)}var p=s(2265);s(7437);var y=p.createContext((i=!1,{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i})),m=()=>p.useContext(y),v=s(7082),b=p.createContext(!1),g=()=>p.useContext(b);b.Provider;var O=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},C=t=>{p.useEffect(()=>{t.clearReset()},[t])},R=t=>{var e;let{result:s,errorResetBoundary:i,throwOnError:r,query:n}=t;return s.isError&&!i.isReset()&&!s.isFetching&&n&&(e=[s.error,n],"function"==typeof r?r(...e):!!r)},w=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},S=(t,e)=>t?.suspense&&e.isPending,q=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function F(t,e){return function(t,e,s){let i=(0,v.NL)(s),r=g(),a=m(),u=i.defaultQueryOptions(t);u._optimisticResults=r?"isRestoring":"optimistic",w(u),O(u,a),C(a);let[o]=p.useState(()=>new e(i,u)),h=o.getOptimisticResult(u);if(p.useSyncExternalStore(p.useCallback(t=>{let e=r?()=>void 0:o.subscribe(n.V.batchCalls(t));return o.updateResult(),e},[o,r]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),p.useEffect(()=>{o.setOptions(u,{listeners:!1})},[u,o]),S(u,h))throw q(u,o,a);if(R({result:h,errorResetBoundary:a,throwOnError:u.throwOnError,query:i.getQueryCache().get(u.queryHash)}))throw h.error;return u.notifyOnChangeProps?h:o.trackResult(h)}(t,h,e)}}}]);