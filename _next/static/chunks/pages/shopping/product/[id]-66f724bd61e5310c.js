(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{5282:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shopping/product/[id]",function(){return i(1616)}])},9903:function(t,e,i){"use strict";var s=i(5893);i(7294),e.Z=function(t){let{title:e}=t;return(0,s.jsx)("div",{className:"w-full my-10 px-10",children:(0,s.jsx)("h2",{className:"text-3xl",children:e})})}},3491:function(t,e,i){"use strict";i.r(e);var s=i(5893),n=i(7294),o=i(5675),l=i.n(o),r=i(491);e.default=function(t){let{inc:e}=t,[i,o]=(0,n.useState)([]),[d,u]=(0,n.useState)(0);return console.log("image array",i),(0,n.useEffect)(()=>{let t=[],i=[];console.log("fileArr",i),e&&e.map(t=>{"file--file"===t.type&&i.push({...t})});let s=t=>{var e,s;let n=i.find(e=>(null==e?void 0:e.id)===t);return console.log("OBJectct: ",n),n&&(null==n?void 0:null===(s=n.attributes)||void 0===s?void 0:null===(e=s.uri)||void 0===e?void 0:e.url)};e&&(null==e||e.map(e=>{var i,n,o,l,r,d,u,a,c,h,v,p,m,f,g;return"media--image"===e.type&&t.push({id:e.id,width:null==e?void 0:null===(l=e.relationships)||void 0===l?void 0:null===(o=l.field_media_image)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:null===(i=n.meta)||void 0===i?void 0:i.width,height:null===(a=e.relationships)||void 0===a?void 0:null===(u=a.field_media_image)||void 0===u?void 0:null===(d=u.data)||void 0===d?void 0:null===(r=d.meta)||void 0===r?void 0:r.height,alt:null===(p=e.relationships)||void 0===p?void 0:null===(v=p.field_media_image)||void 0===v?void 0:null===(h=v.data)||void 0===h?void 0:null===(c=h.meta)||void 0===c?void 0:c.alt,url:s(null==e?void 0:null===(g=e.relationships)||void 0===g?void 0:null===(f=g.field_media_image)||void 0===f?void 0:null===(m=f.data)||void 0===m?void 0:m.id)})})),o(t)},[e]),console.log("Card Image",e),(0,s.jsx)("div",{className:"flex",children:i&&(null==i?void 0:i.map((t,e)=>e===d?(0,s.jsx)("div",{className:"w-full order-2",children:(0,s.jsx)(l(),{className:"p-2 border w-full md:w-96 h-96 object-cover",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id):(0,s.jsx)("div",{className:"w-28 order-1 cursor-pointer",onClick:()=>u(e),children:(0,s.jsx)(l(),{className:"w-28 h-28 object-cover p-2 border",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id)))})}},1616:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var s=i(5893),n=i(1163),o=i(491),l=i(777);let r=t=>{let{id:e}=t,i="".concat(o.g.url,"/jsonapi/commerce_product/physical/").concat(e).concat("?include=image_media.field_media_image,variations"),s={headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},{data:n,isLoading:r,error:d}=(0,l.a)({queryKey:["product"],queryFn:()=>fetch(i,s).then(t=>t.json())});return{data:n,isLoading:r,error:d}},d=()=>{let{data:t,isLoading:e,error:i}=(0,l.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(o.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:e,tokenError:i}};var u=i(202),a=i(7294),c=i(9289),h=i(7037),v=i(7506),p=i(4139),m=class extends v.l{#t;#e=void 0;#i;#s;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,p.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,p.Ym)(e.mutationKey)!==(0,p.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(t){this.#n(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#n(),this.#o()}mutate(t,e){return this.#s=e,this.#i?.removeObserver(this),this.#i=this.#t.getMutationCache().build(this.#t,this.options),this.#i.addObserver(this),this.#i.execute(t)}#n(){let t=this.#i?.state??(0,c.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){h.V.batch(()=>{if(this.#s&&this.hasListeners()){let e=this.#e.variables,i=this.#e.context;t?.type==="success"?(this.#s.onSuccess?.(t.data,e,i),this.#s.onSettled?.(t.data,null,e,i)):t?.type==="error"&&(this.#s.onError?.(t.error,e,i),this.#s.onSettled?.(void 0,t.error,e,i))}this.listeners.forEach(t=>{t(this.#e)})})}},f=i(6290),g=function(t,e){console.log("Item: ",t),console.log("Title: ",e);let{token:i,tokenError:n}=d(),l=(0,u.NL)(),r={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=i?i:""},c="".concat(o.g.url,"/jsonapi/cart/add"),{mutate:v,isPending:p,isError:g,isSuccess:x}=function(t,e){let i=(0,u.NL)(void 0),[s]=a.useState(()=>new m(i,t));a.useEffect(()=>{s.setOptions(t)},[s,t]);let n=a.useSyncExternalStore(a.useCallback(t=>s.subscribe(h.V.batchCalls(t)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=a.useCallback((t,e)=>{s.mutate(t,e).catch(f.Z)},[s]);if(n.error&&(0,f.L)(s.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:o,mutateAsync:n.mutate}}({mutationFn:t=>fetch(c,{method:"POST",body:JSON.stringify(t),headers:r}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),l.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"m-2",onClick:()=>{var e,i;v({data:[{type:null==t?void 0:null===(e=t.item)||void 0===e?void 0:e.type,id:null==t?void 0:null===(i=t.item)||void 0===i?void 0:i.id,meta:{quantity:1,combine:!0}}]})},children:"Add to Cart"})})},x=i(9903),y=i(3491),b=function(){var t,e,i,o,l,d;let{data:u,isLoading:a,error:c}=r({id:(0,n.useRouter)().query.id});console.log("Product: ",u);let h={data:[{title:"Add To Cart"}]};return c&&c.message?(0,s.jsxs)("div",{children:["Error: ",c.message]}):a?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsxs)("div",{className:"mx-10 my-10",children:[(0,s.jsx)(x.Z,{title:"Product Details"}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Deatails:",(0,s.jsx)("div",{children:u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:t.title)}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null==u?void 0:null===(l=u.data)||void 0===l?void 0:null===(o=l.attributes)||void 0===o?void 0:null===(i=o.body)||void 0===i?void 0:i.value}})}),(0,s.jsx)("div",{children:(0,s.jsx)(y.default,{inc:u&&(null==u?void 0:u.included)})}),(0,s.jsx)("div",{children:null==u?void 0:null===(d=u.included)||void 0===d?void 0:d.map(t=>{var e,i,n,o;return"commerce_product_variation--physical"===t.type&&(0,s.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,s.jsxs)("div",{children:["Title: ",null==t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.title]}),(0,s.jsxs)("div",{children:["Sku: ",null==t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.sku]}),(0,s.jsxs)("div",{children:["Price: ",null==t?void 0:null===(o=t.attributes)||void 0===o?void 0:null===(n=o.price)||void 0===n?void 0:n.formatted]}),(0,s.jsx)("div",{children:(0,s.jsx)(g,{item:t,title:h})})]},t.id)})})]})]})}},1163:function(t,e,i){t.exports=i(3035)}},function(t){t.O(0,[675,888,774,179],function(){return t(t.s=5282)}),_N_E=t.O()}]);