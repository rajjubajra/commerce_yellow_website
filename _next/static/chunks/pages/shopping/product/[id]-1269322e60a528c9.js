(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{5282:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shopping/product/[id]",function(){return e(6212)}])},9903:function(t,i,e){"use strict";var n=e(5893);e(7294),i.Z=function(t){let{title:i}=t;return(0,n.jsx)("div",{className:"w-full my-10 px-10",children:(0,n.jsx)("h2",{className:"text-3xl",children:i})})}},3524:function(t,i,e){"use strict";e.d(i,{S:function(){return o}});var n=e(491),s=e(777);let o=()=>{let{data:t,isLoading:i,error:e}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:i,tokenError:e}}},3491:function(t,i,e){"use strict";e.r(i);var n=e(5893),s=e(7294),o=e(5675),l=e.n(o),r=e(491);i.default=function(t){let{inc:i}=t,[e,o]=(0,s.useState)([]),[a,d]=(0,s.useState)(0);return console.log("image array",e),(0,s.useEffect)(()=>{let t=[],e=[];console.log("fileArr",e),i&&i.map(t=>{"file--file"===t.type&&e.push({...t})});let n=t=>{var i,n;let s=e.find(i=>(null==i?void 0:i.id)===t);return console.log("OBJectct: ",s),s&&(null==s?void 0:null===(n=s.attributes)||void 0===n?void 0:null===(i=n.uri)||void 0===i?void 0:i.url)};i&&(null==i||i.map(i=>{var e,s,o,l,r,a,d,u,c,v,h,p,m,f,g;return"media--image"===i.type&&t.push({id:i.id,width:null==i?void 0:null===(l=i.relationships)||void 0===l?void 0:null===(o=l.field_media_image)||void 0===o?void 0:null===(s=o.data)||void 0===s?void 0:null===(e=s.meta)||void 0===e?void 0:e.width,height:null===(u=i.relationships)||void 0===u?void 0:null===(d=u.field_media_image)||void 0===d?void 0:null===(a=d.data)||void 0===a?void 0:null===(r=a.meta)||void 0===r?void 0:r.height,alt:null===(p=i.relationships)||void 0===p?void 0:null===(h=p.field_media_image)||void 0===h?void 0:null===(v=h.data)||void 0===v?void 0:null===(c=v.meta)||void 0===c?void 0:c.alt,url:n(null==i?void 0:null===(g=i.relationships)||void 0===g?void 0:null===(f=g.field_media_image)||void 0===f?void 0:null===(m=f.data)||void 0===m?void 0:m.id)})})),o(t)},[i]),console.log("Card Image",i),(0,n.jsx)("div",{className:"flex",children:e&&(null==e?void 0:e.map((t,i)=>i===a?(0,n.jsx)("div",{className:"w-full order-2",children:(0,n.jsx)(l(),{className:"p-2 border w-full md:w-96 h-96 object-cover",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id):(0,n.jsx)("div",{className:"w-28 order-1 cursor-pointer",onClick:()=>d(i),children:(0,n.jsx)(l(),{className:"w-28 h-28 object-cover p-2 border",src:"".concat(r.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id)))})}},6212:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return j}});var n=e(5893),s=e(1163),o=e(491),l=e(777);let r=t=>{let{id:i}=t,e="".concat(o.g.url,"/jsonapi/commerce_product/physical/").concat(i).concat("?include=image_media.field_media_image,variations"),n={headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},{data:s,isLoading:r,error:a}=(0,l.a)({queryKey:["product"],queryFn:()=>fetch(e,n).then(t=>t.json())});return{data:s,isLoading:r,error:a}};var a=e(3524),d=e(202),u=e(8029);function c(){let t="".concat(o.g.url,"/jsonapi"),i={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},e=async()=>{var e,n,s,o;let l=await fetch(t,{headers:i}),r=await l.json();return null==r?void 0:null===(o=r.meta)||void 0===o?void 0:null===(s=o.links)||void 0===s?void 0:null===(n=s.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id},{data:n,isLoading:s,isError:r}=(0,l.a)({queryKey:["userId"],queryFn:e});return{userId:n,isLoading:s,isError:r}}var v=function(t,i){let{userId:e}=c();console.log("Item: ",t),console.log("Title: ",i);let{token:s,tokenError:l}=(0,a.S)(),r=(0,d.NL)(),v={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=s?s:""},h="".concat(o.g.url,"/jsonapi/cart/add"),{mutate:p,isPending:m,isError:f,isSuccess:g}=(0,u.D)({mutationFn:t=>fetch(h,{method:"POST",body:JSON.stringify(t),headers:v}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),r.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,n.jsx)("div",{children:e&&(0,n.jsx)("button",{className:"m-2",onClick:()=>{var i,e;p({data:[{type:null==t?void 0:null===(i=t.item)||void 0===i?void 0:i.type,id:null==t?void 0:null===(e=t.item)||void 0===e?void 0:e.id,meta:{quantity:1,combine:!0}}]})},children:"Add to Cart"})})},h=e(9903),p=e(3491),m=e(1664),f=e.n(m),g=function(){var t,i,e,s,r,a;let{userId:d}=c();console.log("User Id: ",d);let{data:u,isError:v,isLoading:h}=function(t){let{id:i}=t;console.log("userId in useUser :",i);let e="".concat(o.g.url,"/jsonapi/user/user/").concat(i),n={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},s=async()=>{if(i)try{let t=await fetch(e,{headers:n});return await t.json()}catch(t){return console.error("Error fetching user detail:",t),null}},{data:r,isLoading:a,isError:d}=(0,l.a)({queryKey:["userDetail"],queryFn:s});return{data:r,isLoading:a,isError:d}}({id:d});return console.log("User details: ",u,h,v),(0,n.jsx)("div",{children:(null==u?void 0:u.data)&&d?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["User: ",(0,n.jsx)("span",{children:null==u?void 0:null===(i=u.data)||void 0===i?void 0:null===(t=i.attributes)||void 0===t?void 0:t.name})]}),(0,n.jsxs)("div",{children:["Name: ",(0,n.jsx)("span",{className:"capitalize",children:null==u?void 0:null===(s=u.data)||void 0===s?void 0:null===(e=s.attributes)||void 0===e?void 0:e.display_name})]}),(0,n.jsxs)("div",{children:["Email: ",(0,n.jsx)("span",{children:null==u?void 0:null===(a=u.data)||void 0===a?void 0:null===(r=a.attributes)||void 0===r?void 0:r.mail})]}),(0,n.jsx)("div",{children:"Tel:"})]}):(0,n.jsxs)("div",{children:["Please ",(0,n.jsx)(f(),{className:"font-bold",href:"".concat(o.g.url,"/user/login"),children:"login"})," to purchase items"]})})},j=function(){var t,i,e,o,l,a;let{data:d,isLoading:u,error:c}=r({id:(0,s.useRouter)().query.id});console.log("Product: ",d);let m={data:[{title:"Add To Cart"}]};return c&&c.message?(0,n.jsxs)("div",{children:["Error: ",c.message]}):u?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("div",{className:"mx-10 my-10",children:[(0,n.jsx)(g,{}),(0,n.jsx)(h.Z,{title:"Product Details"}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Deatails:",(0,n.jsx)("div",{children:d&&(null==d?void 0:null===(i=d.data)||void 0===i?void 0:null===(t=i.attributes)||void 0===t?void 0:t.title)}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==d?void 0:null===(l=d.data)||void 0===l?void 0:null===(o=l.attributes)||void 0===o?void 0:null===(e=o.body)||void 0===e?void 0:e.value}})}),(0,n.jsx)("div",{children:(0,n.jsx)(p.default,{inc:d&&(null==d?void 0:d.included)})}),(0,n.jsx)("div",{children:null==d?void 0:null===(a=d.included)||void 0===a?void 0:a.map(t=>{var i,e,s,o;return"commerce_product_variation--physical"===t.type&&(0,n.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,n.jsxs)("div",{children:["Title: ",null==t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.title]}),(0,n.jsxs)("div",{children:["Sku: ",null==t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.sku]}),(0,n.jsxs)("div",{children:["Price: ",null==t?void 0:null===(o=t.attributes)||void 0===o?void 0:null===(s=o.price)||void 0===s?void 0:s.formatted]}),(0,n.jsx)("div",{children:(0,n.jsx)(v,{item:t,title:m})})]},t.id)})})]})]})}},1163:function(t,i,e){t.exports=e(3035)},8029:function(t,i,e){"use strict";e.d(i,{D:function(){return c}});var n=e(7294),s=e(9289),o=e(7037),l=e(7506),r=e(4139),a=class extends l.l{#t;#i=void 0;#e;#n;constructor(t,i){super(),this.#t=t,this.setOptions(i),this.bindMethods(),this.#s()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let i=this.options;this.options=this.#t.defaultMutationOptions(t),(0,r.VS)(this.options,i)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#e,observer:this}),i?.mutationKey&&this.options.mutationKey&&(0,r.Ym)(i.mutationKey)!==(0,r.Ym)(this.options.mutationKey)?this.reset():this.#e?.state.status==="pending"&&this.#e.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#e?.removeObserver(this)}onMutationUpdate(t){this.#s(),this.#o(t)}getCurrentResult(){return this.#i}reset(){this.#e?.removeObserver(this),this.#e=void 0,this.#s(),this.#o()}mutate(t,i){return this.#n=i,this.#e?.removeObserver(this),this.#e=this.#t.getMutationCache().build(this.#t,this.options),this.#e.addObserver(this),this.#e.execute(t)}#s(){let t=this.#e?.state??(0,s.R)();this.#i={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){o.V.batch(()=>{if(this.#n&&this.hasListeners()){let i=this.#i.variables,e=this.#i.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,i,e),this.#n.onSettled?.(t.data,null,i,e)):t?.type==="error"&&(this.#n.onError?.(t.error,i,e),this.#n.onSettled?.(void 0,t.error,i,e))}this.listeners.forEach(t=>{t(this.#i)})})}},d=e(202),u=e(6290);function c(t,i){let e=(0,d.NL)(i),[s]=n.useState(()=>new a(e,t));n.useEffect(()=>{s.setOptions(t)},[s,t]);let l=n.useSyncExternalStore(n.useCallback(t=>s.subscribe(o.V.batchCalls(t)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),r=n.useCallback((t,i)=>{s.mutate(t,i).catch(u.Z)},[s]);if(l.error&&(0,u.L)(s.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:r,mutateAsync:l.mutate}}}},function(t){t.O(0,[675,888,774,179],function(){return t(t.s=5282)}),_N_E=t.O()}]);