(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{5561:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shopping/[id]",function(){return i(5734)}])},9903:function(t,e,i){"use strict";var n=i(5893);i(7294),e.Z=function(t){let{title:e}=t;return(0,n.jsx)("div",{className:"w-full my-10 px-10",children:(0,n.jsx)("h2",{className:"text-3xl",children:e})})}},3524:function(t,e,i){"use strict";i.d(e,{S:function(){return s}});var n=i(491),o=i(777);let s=()=>{let{data:t,isLoading:e,error:i}=(0,o.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(n.g.url,"/session/token"),{credentials:"include"}).then(t=>t.text())});return{token:t,tokenLoading:e,tokenError:i}}},5734:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var n=i(5893),o=i(1163),s=i(491),l=i(777);let r=t=>{let{id:e}=t,i="".concat(s.g.url,"/jsonapi/commerce_product/physical/").concat(e).concat("?include=image_media.field_media_image,variations"),n={headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},{data:o,isLoading:r,error:d}=(0,l.a)({queryKey:["product"],queryFn:()=>fetch(i,n).then(t=>t.json())});return{data:o,isLoading:r,error:d}};var d=i(7294),a=i(3524),u=i(202),c=i(8029);function v(){let t="".concat(s.g.url,"/jsonapi"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},i=async()=>{let i=await fetch(t,{headers:e});return await i.json()},{data:n,isLoading:o,isError:r}=(0,l.a)({queryKey:["userId"],queryFn:i});return{data:n,isLoading:o,isError:r}}var h=function(t,e){let[i,o]=(0,d.useState)("");console.log("User ID: ",i);let{data:l}=v();(0,d.useEffect)(()=>{var t,e,i,n;l&&o(null==l?void 0:null===(n=l.meta)||void 0===n?void 0:null===(i=n.links)||void 0===i?void 0:null===(e=i.me)||void 0===e?void 0:null===(t=e.meta)||void 0===t?void 0:t.id)},[l]),console.log("Item: ",t),console.log("Title: ",e);let{token:r,tokenError:h}=(0,a.S)(),p=(0,u.NL)(),m={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","Commerce-Cart-Token":null!=r?r:""},f="".concat(s.g.url,"/jsonapi/cart/add"),{mutate:g,isPending:j,isError:x,isSuccess:y}=(0,c.D)({mutationFn:t=>fetch(f,{method:"POST",body:JSON.stringify(t),headers:m}).then(t=>t.json()),onSuccess:()=>{console.log("Success"),p.invalidateQueries({queryKey:["cartItems"]})},onError:t=>{console.log("Error",t)},onSettled:()=>{console.log("Settled")}});return(0,n.jsx)("div",{children:i&&(0,n.jsx)("button",{className:"m-2",onClick:()=>{var e,i;g({data:[{type:null==t?void 0:null===(e=t.item)||void 0===e?void 0:e.type,id:null==t?void 0:null===(i=t.item)||void 0===i?void 0:i.id,meta:{quantity:1,combine:!0}}]})},children:"Add to Cart"})})},p=i(9903),m=i(5675),f=i.n(m),g=function(t){let{inc:e}=t,[i,o]=(0,d.useState)([]),[l,r]=(0,d.useState)(0);return console.log("image array",i),(0,d.useEffect)(()=>{let t=[],i=[];console.log("fileArr",i),e&&e.map(t=>{"file--file"===t.type&&i.push({...t})});let n=t=>{var e,n;let o=i.find(e=>(null==e?void 0:e.id)===t);return console.log("OBJectct: ",o),o&&(null==o?void 0:null===(n=o.attributes)||void 0===n?void 0:null===(e=n.uri)||void 0===e?void 0:e.url)};e&&(null==e||e.map(e=>{var i,o,s,l,r,d,a,u,c,v,h,p,m,f,g;return"media--image"===e.type&&t.push({id:e.id,width:null==e?void 0:null===(l=e.relationships)||void 0===l?void 0:null===(s=l.field_media_image)||void 0===s?void 0:null===(o=s.data)||void 0===o?void 0:null===(i=o.meta)||void 0===i?void 0:i.width,height:null===(u=e.relationships)||void 0===u?void 0:null===(a=u.field_media_image)||void 0===a?void 0:null===(d=a.data)||void 0===d?void 0:null===(r=d.meta)||void 0===r?void 0:r.height,alt:null===(p=e.relationships)||void 0===p?void 0:null===(h=p.field_media_image)||void 0===h?void 0:null===(v=h.data)||void 0===v?void 0:null===(c=v.meta)||void 0===c?void 0:c.alt,url:n(null==e?void 0:null===(g=e.relationships)||void 0===g?void 0:null===(f=g.field_media_image)||void 0===f?void 0:null===(m=f.data)||void 0===m?void 0:m.id)})})),o(t)},[e]),console.log("Card Image",e),(0,n.jsx)("div",{className:"flex",children:i&&(null==i?void 0:i.map((t,e)=>e===l?(0,n.jsx)("div",{className:"w-full order-2",children:(0,n.jsx)(f(),{className:"p-2 border w-full md:w-96 h-96 object-cover",src:"".concat(s.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id):(0,n.jsx)("div",{className:"w-28 order-1 cursor-pointer",onClick:()=>r(e),children:(0,n.jsx)(f(),{className:"w-28 h-28 object-cover p-2 border",src:"".concat(s.g.uri).concat(null==t?void 0:t.url),width:t.width,height:t.height,alt:t.alt})},t.id)))})},j=i(1664),x=i.n(j),y=i(59),b=i(6324),_=function(){var t,e,i,o,r,a;let[u,c]=(0,d.useState)("");console.log("loadded id",u);let{data:h,isLoading:p,isError:m}=v();console.log("User Id: ",h),(0,d.useEffect)(()=>{var t,e,i,n;h?c(null===(n=h.meta)||void 0===n?void 0:null===(i=n.links)||void 0===i?void 0:null===(e=i.me)||void 0===e?void 0:null===(t=e.meta)||void 0===t?void 0:t.id):c("")},[h]);let{data:f,isError:g,isLoading:j}=function(t){let{id:e}=t;console.log("userId in useUser :",e);let i="".concat(s.g.url,"/jsonapi/user/user/").concat(e),n={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},o=async()=>{if(e)try{let t=await fetch(i,{headers:n});return await t.json()}catch(t){return console.error("Error fetching user detail:",t),null}},{data:r,isLoading:d,isError:a}=(0,l.a)({queryKey:["userDetail"],queryFn:o});return{data:r,isLoading:d,isError:a}}({id:u});return(console.log("User details: ",f,j,g),j&&p)?(0,n.jsx)(y.default,{}):g&&m?(0,n.jsx)(b.default,{}):(0,n.jsx)("div",{children:u?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["User: ",(0,n.jsx)("span",{children:null==f?void 0:null===(e=f.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:t.name})]}),(0,n.jsxs)("div",{children:["Name: ",(0,n.jsx)("span",{className:"capitalize",children:null==f?void 0:null===(o=f.data)||void 0===o?void 0:null===(i=o.attributes)||void 0===i?void 0:i.display_name})]}),(0,n.jsxs)("div",{children:["Email: ",(0,n.jsx)("span",{children:null==f?void 0:null===(a=f.data)||void 0===a?void 0:null===(r=a.attributes)||void 0===r?void 0:r.mail})]}),(0,n.jsx)("div",{children:"Tel:"})]}):(0,n.jsxs)("div",{children:["Please ",(0,n.jsx)(x(),{className:"font-bold",href:"".concat(s.g.url,"/user/login"),children:"login"})," to purchase items"]})})};function w(){var t,e,i,s,l,d;let a=(0,o.useRouter)().query.id,{data:u,isLoading:c,error:v}=r({id:a});console.log("Product: ",u,"Id",a);let m={data:[{title:"Add To Cart"}]};return v&&v.message?(0,n.jsxs)("div",{children:["Error: ",v.message]}):c?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("div",{className:"mx-10 my-10",children:[(0,n.jsx)(_,{}),(0,n.jsx)(p.Z,{title:"Product Details"}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:["Product Details:",(0,n.jsx)("div",{children:u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:t.title)}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==u?void 0:null===(l=u.data)||void 0===l?void 0:null===(s=l.attributes)||void 0===s?void 0:null===(i=s.body)||void 0===i?void 0:i.value}})}),(0,n.jsx)("div",{children:(0,n.jsx)(g,{inc:u&&(null==u?void 0:u.included)})}),(0,n.jsx)("div",{children:null==u?void 0:null===(d=u.included)||void 0===d?void 0:d.map(t=>{var e,i,o,s;return"commerce_product_variation--physical"===t.type&&(0,n.jsxs)("div",{className:"p-2 m-4 border w-auto text-center",children:[(0,n.jsxs)("div",{children:["Title: ",null==t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.title]}),(0,n.jsxs)("div",{children:["Sku: ",null==t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.sku]}),(0,n.jsxs)("div",{children:["Price: ",null==t?void 0:null===(s=t.attributes)||void 0===s?void 0:null===(o=s.price)||void 0===o?void 0:o.formatted]}),(0,n.jsx)("div",{children:(0,n.jsx)(h,{item:t,title:m})})]},t.id)})})]})]})}},1163:function(t,e,i){t.exports=i(3035)},8029:function(t,e,i){"use strict";i.d(e,{D:function(){return c}});var n=i(7294),o=i(9289),s=i(7037),l=i(7506),r=i(4139),d=class extends l.l{#t;#e=void 0;#i;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,r.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,r.Ym)(e.mutationKey)!==(0,r.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(t){this.#o(),this.#s(t)}getCurrentResult(){return this.#e}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#o(),this.#s()}mutate(t,e){return this.#n=e,this.#i?.removeObserver(this),this.#i=this.#t.getMutationCache().build(this.#t,this.options),this.#i.addObserver(this),this.#i.execute(t)}#o(){let t=this.#i?.state??(0,o.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#s(t){s.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,i=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,i),this.#n.onSettled?.(t.data,null,e,i)):t?.type==="error"&&(this.#n.onError?.(t.error,e,i),this.#n.onSettled?.(void 0,t.error,e,i))}this.listeners.forEach(t=>{t(this.#e)})})}},a=i(202),u=i(6290);function c(t,e){let i=(0,a.NL)(e),[o]=n.useState(()=>new d(i,t));n.useEffect(()=>{o.setOptions(t)},[o,t]);let l=n.useSyncExternalStore(n.useCallback(t=>o.subscribe(s.V.batchCalls(t)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),r=n.useCallback((t,e)=>{o.mutate(t,e).catch(u.Z)},[o]);if(l.error&&(0,u.L)(o.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:r,mutateAsync:l.mutate}}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=5561)}),_N_E=t.O()}]);