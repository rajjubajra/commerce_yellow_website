(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{5282:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shopping/product/[id]",function(){return i(6212)}])},9903:function(t,e,i){"use strict";var n=i(5893);i(7294),e.Z=function(t){let{title:e}=t;return(0,n.jsx)("div",{className:"w-full my-10 px-10",children:(0,n.jsx)("h2",{className:"text-3xl",children:e})})}},3524:function(t,e,i){"use strict";i.d(e,{S:function(){return o}});var n=i(491),s=i(777);let o=()=>{let{data:t,isLoading:e,error:i}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:e,tokenError:i}}},3491:function(t,e,i){"use strict";i.r(e);var n=i(5893),s=i(7294),o=i(5675),l=i.n(o),r=i(491);e.default=function(t){let{inc:e}=t,[i,o]=(0,s.useState)([]),[a,u]=(0,s.useState)(0);return console.log("image array",i),(0,s.useEffect)(()=>{let t=[],i=[];console.log("fileArr",i),e&&e.map(t=>{"file--file"===t.type&&i.push({...t})});let n=t=>{var e,n;let s=i.find(e=>(null==e?void 0:e.id)===t);return console.log("OBJectct: ",s),s&&(null==s?void 0:null===(n=s.attributes)||void 0===n?void 0:null===(e=n.uri)||void 0===e?void 0:e.url)};e&&(null==e||e.map(e=>{var i,s,o,l,r,a,u,d,c,v,h,p,m,f,g;return"media--image"===e.type&&t.push({id:e.id,width:null==e?void 0:null===(l=e.relationships)||void 0===l?void 0:null===(o=l.field_media_image)||void 0===o?void 0:null===(s=o.data)||void 0===s?void 0:null===(i=s.meta)||void 0===i?void 0:i.width,height:null===(d=e.relationships)||void 0===d?void 0:null===(u=d.field_media_image)||void 0===u?void 0:null===(a=u.data)||void 0===a?void 0:null===(r=a.meta)||void 0===r?void 0:r.height,alt:null===(p=e.relationships)||void 0===p?void 0:null===(h=p.field_media_image)||void 0===h?void 0:null===(v=h.data)||void 0===v?void 0:null===(c=v.meta)||void 0===c?void 0:c.alt,url:n(null==e?void 0:null===(g=e.relationships)||void 0===g?void 0:null===(f=g.field_media_image)||void 0===f?void 0:null===(m=f.data)||void 0===m?void 0:m.id)})})),o(t)},[e]),console.log("Card Image",e),(0,n.jsx)("div",{className:"flex",children:i&&(null==i?void 0:i.map((t,e)=>e===a?(0,n.jsx)("div",{className:"w-full order-2",children:(0,n.jsx)(l(),{className:"p-2 border w-full md:w-96 h-96 object-cover",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id):(0,n.jsx)("div",{className:"w-28 order-1 cursor-pointer",onClick:()=>u(e),children:(0,n.jsx)(l(),{className:"w-28 h-28 object-cover p-2 border",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id)))})}},6212:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var n=i(5893),s=i(1163),o=i(491),l=i(777);let r=t=>{let{id:e}=t,i="".concat(o.g.url,"/jsonapi/commerce_product/physical/").concat(e).concat("?include=image_media.field_media_image,variations"),n={headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},{data:s,isLoading:r,error:a}=(0,l.a)({queryKey:["product"],queryFn:()=>fetch(i,n).then(t=>t.json())});return{data:s,isLoading:r,error:a}};var a=i(3524),u=i(202),d=i(8029),c=function(t,e){console.log("Item: ",t),console.log("Title: ",e);let{token:i,tokenError:s}=(0,a.S)(),l=(0,u.NL)(),r={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=i?i:""},c="".concat(o.g.url,"/jsonapi/cart/add"),{mutate:v,isPending:h,isError:p,isSuccess:m}=(0,d.D)({mutationFn:t=>fetch(c,{method:"POST",body:JSON.stringify(t),headers:r}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),l.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"m-2",onClick:()=>{var e,i;v({data:[{type:null==t?void 0:null===(e=t.item)||void 0===e?void 0:e.type,id:null==t?void 0:null===(i=t.item)||void 0===i?void 0:i.id,meta:{quantity:1,combine:!0}}]})},children:"Add to Cart"})})},v=i(9903),h=i(3491),p=function(){let{userId:t}=function(){let t="".concat(o.g.url,"/jsonapi"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},i=async()=>{var i,n,s,o;let l=await fetch(t,{headers:e}),r=await l.json();return null==r?void 0:null===(o=r.meta)||void 0===o?void 0:null===(s=o.links)||void 0===s?void 0:null===(n=s.me)||void 0===n?void 0:null===(i=n.meta)||void 0===i?void 0:i.id},{data:n,isLoading:s,isError:r}=(0,l.a)({queryKey:["userId"],queryFn:i});return{userId:n,isLoading:s,isError:r}}();console.log("User Id: ",t);let{data:e,isError:i,isLoading:s}=function(t){let{id:e}=t;console.log("userId in useUser :",e);let i="".concat(o.g.url,"/jsonapi/user/user/").concat(e),n={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},s=async()=>{try{let t=await fetch(i,{headers:n});return await t.json()}catch(t){return console.error("Error fetching user detail:",t),null}},{data:r,isLoading:a,isError:u}=(0,l.a)({queryKey:["userDetail"],queryFn:s});return{data:r,isLoading:a,isError:u}}({id:t});return console.log("User details: ",e,s,i),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"User"}),(0,n.jsx)("div",{children:"Name:"}),(0,n.jsx)("div",{children:"Email:"}),(0,n.jsx)("div",{children:"Tel:"})]})},m=function(){var t,e,i,o,l,a;let{data:u,isLoading:d,error:m}=r({id:(0,s.useRouter)().query.id});console.log("Product: ",u);let f={data:[{title:"Add To Cart"}]};return m&&m.message?(0,n.jsxs)("div",{children:["Error: ",m.message]}):d?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("div",{className:"mx-10 my-10",children:[(0,n.jsx)(p,{}),(0,n.jsx)(v.Z,{title:"Product Details"}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Deatails:",(0,n.jsx)("div",{children:u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:t.title)}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==u?void 0:null===(l=u.data)||void 0===l?void 0:null===(o=l.attributes)||void 0===o?void 0:null===(i=o.body)||void 0===i?void 0:i.value}})}),(0,n.jsx)("div",{children:(0,n.jsx)(h.default,{inc:u&&(null==u?void 0:u.included)})}),(0,n.jsx)("div",{children:null==u?void 0:null===(a=u.included)||void 0===a?void 0:a.map(t=>{var e,i,s,o;return"commerce_product_variation--physical"===t.type&&(0,n.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,n.jsxs)("div",{children:["Title: ",null==t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.title]}),(0,n.jsxs)("div",{children:["Sku: ",null==t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.sku]}),(0,n.jsxs)("div",{children:["Price: ",null==t?void 0:null===(o=t.attributes)||void 0===o?void 0:null===(s=o.price)||void 0===s?void 0:s.formatted]}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{item:t,title:f})})]},t.id)})})]})]})}},1163:function(t,e,i){t.exports=i(3035)},8029:function(t,e,i){"use strict";i.d(e,{D:function(){return c}});var n=i(7294),s=i(9289),o=i(7037),l=i(7506),r=i(4139),a=class extends l.l{#t;#e=void 0;#i;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#s()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,r.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,r.Ym)(e.mutationKey)!==(0,r.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(t){this.#s(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#s(),this.#o()}mutate(t,e){return this.#n=e,this.#i?.removeObserver(this),this.#i=this.#t.getMutationCache().build(this.#t,this.options),this.#i.addObserver(this),this.#i.execute(t)}#s(){let t=this.#i?.state??(0,s.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){o.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,i=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,i),this.#n.onSettled?.(t.data,null,e,i)):t?.type==="error"&&(this.#n.onError?.(t.error,e,i),this.#n.onSettled?.(void 0,t.error,e,i))}this.listeners.forEach(t=>{t(this.#e)})})}},u=i(202),d=i(6290);function c(t,e){let i=(0,u.NL)(e),[s]=n.useState(()=>new a(i,t));n.useEffect(()=>{s.setOptions(t)},[s,t]);let l=n.useSyncExternalStore(n.useCallback(t=>s.subscribe(o.V.batchCalls(t)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),r=n.useCallback((t,e)=>{s.mutate(t,e).catch(d.Z)},[s]);if(l.error&&(0,d.L)(s.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:r,mutateAsync:l.mutate}}}},function(t){t.O(0,[675,888,774,179],function(){return t(t.s=5282)}),_N_E=t.O()}]);