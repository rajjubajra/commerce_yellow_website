(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(i,d,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return l(4109)}])},4109:function(i,d,l){"use strict";l.r(d),l.d(d,{default:function(){return h}});var n=l(5893),e=l(1664),o=l.n(e),t=function(){return(0,n.jsx)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:"Loading..."})},r=l(7294),u=function(i){return(0,n.jsxs)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:["Page Error: ",i.message]})},v=l(491),s=l(777);function a(){let{data:i,isLoading:d,error:l}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(v.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}}).then(i=>i.text())}),n="".concat(v.g.url,"/jsonapi/carts"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",token:null!=i?i:""};console.log("token loading",d);let{data:o,isLoading:t,isError:r}=(0,s.a)({queryKey:["getCart"],queryFn:()=>fetch(n,{headers:e}).then(i=>i.json())});return console.log("CART REPORT: ",o,r,t,l),{data:o,isError:r,isLoading:t,tokenError:l}}var c=function(){let[i,d]=(0,r.useState)([]),{data:l,isError:e,isLoading:o}=a();return((0,r.useEffect)(()=>{l&&d(null==l?void 0:l.data)},[l]),e)?(0,n.jsx)(u,{}):o?(0,n.jsx)(t,{}):(0,n.jsx)("div",{children:i&&(null==i?void 0:i.map(i=>{var d,l,e,o,t,r,u,v,s,a;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Email: ",null===(d=i.attributes)||void 0===d?void 0:d.mail]}),(0,n.jsxs)("div",{children:["Order sub Total: ",null===(o=i.attributes)||void 0===o?void 0:null===(e=o.order_total)||void 0===e?void 0:null===(l=e.subtotal)||void 0===l?void 0:l.number]}),(0,n.jsxs)("div",{children:["Order Total: ",null===(u=i.attributes)||void 0===u?void 0:null===(r=u.order_total)||void 0===r?void 0:null===(t=r.total)||void 0===t?void 0:t.number]}),(0,n.jsxs)("div",{children:["Store Id: ",null==i?void 0:null===(a=i.relationships)||void 0===a?void 0:null===(s=a.store_id)||void 0===s?void 0:null===(v=s.data)||void 0===v?void 0:v.id]}),(0,n.jsxs)("div",{children:["Type: ",null==i?void 0:i.type]})]},i.id)}))})},p=function(){let[i,d]=(0,r.useState)([]),{data:l,isError:e,isLoading:t}=a(),u=(i,d)=>{var l,n,e;let o=i&&(null==i?void 0:i.find(i=>i.id===d));return{sku:null==o?void 0:null===(l=o.attributes)||void 0===l?void 0:l.sku,weight:parseInt(null===(n=o.attributes)||void 0===n?void 0:n.weight.number),unit:null===(e=o.attributes)||void 0===e?void 0:e.weight.unit}};return(0,r.useEffect)(()=>{var i,n,e,o,t,r,v,s,a,c,p;let h=[];console.log("to be set data: ",l&&(null==l?void 0:null===(e=l.data[0])||void 0===e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(i=n.order_items)||void 0===i?void 0:i.data)),l&&(null==l?void 0:l.data)&&(null==l?void 0:null===(o=l.data[0])||void 0===o?void 0:o.relationships)&&(null==l?void 0:null===(r=l.data[0])||void 0===r?void 0:null===(t=r.relationships)||void 0===t?void 0:t.order_items)&&(null==l?void 0:null===(s=l.data[0])||void 0===s?void 0:null===(v=s.relationships.order_items)||void 0===v?void 0:v.data)&&h.push(...null==l?void 0:null===(p=l.data[0])||void 0===p?void 0:null===(c=p.relationships)||void 0===c?void 0:null===(a=c.order_items)||void 0===a?void 0:a.data),console.log("set in an Array: ",h);let x=[];h.length>0&&(null==h||h.map(i=>{var d,n,e,o,t,r,v,s,a,c,p,h,m,j,_;let f=null==l?void 0:null===(d=l.included)||void 0===d?void 0:d.find(d=>d.id===i.id);x.push({id:null==f?void 0:f.id,order_id:null==f?void 0:null===(e=f.relationships)||void 0===e?void 0:null===(n=e.order_id)||void 0===n?void 0:n.data,order_item_id:null==f?void 0:null===(o=f.attributes)||void 0===o?void 0:o.drupal_internal__order_item_id,quantity:parseInt(null==f?void 0:null===(t=f.attributes)||void 0===t?void 0:t.quantity,10),title:null==f?void 0:null===(r=f.attributes)||void 0===r?void 0:r.title,currency_code:null==f?void 0:null===(s=f.attributes)||void 0===s?void 0:null===(v=s.unit_price)||void 0===v?void 0:v.currency_code,unit_price:parseInt(null==f?void 0:null===(c=f.attributes)||void 0===c?void 0:null===(a=c.unit_price)||void 0===a?void 0:a.number,10),total_price:parseInt(null==f?void 0:null===(h=f.attributes)||void 0===h?void 0:null===(p=h.total_price)||void 0===p?void 0:p.number,10),variations:u(l&&(null==l?void 0:l.included),null==f?void 0:null===(_=f.relationships)||void 0===_?void 0:null===(j=_.purchased_entity)||void 0===j?void 0:null===(m=j.data)||void 0===m?void 0:m.id)})})),d(x)},[l]),(0,n.jsx)("div",{className:"border p-2",children:null==i?void 0:i.map(i=>{var d,e,t,r,u,v,s;return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,n.jsxs)("div",{className:"text-sm border p-2 m-1",children:[(0,n.jsxs)("div",{className:"text-xs",children:["id:",null==i?void 0:i.id]}),(0,n.jsxs)("div",{children:["Order Item Id: ",null==i?void 0:i.order_item_id]}),(0,n.jsxs)("div",{children:["Title: ",null==i?void 0:i.title]}),(0,n.jsxs)("div",{children:["SKU: ",null==i?void 0:null===(d=i.variations)||void 0===d?void 0:d.sku]})]}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{children:["Quantity: ",null==i?void 0:i.quantity]}),(0,n.jsxs)("div",{children:["Unit Price: ",null==i?void 0:i.unit_price]}),(0,n.jsxs)("div",{children:["Weight: ",null==i?void 0:null===(e=i.variations)||void 0===e?void 0:e.weight," ",null==i?void 0:null===(t=i.variations)||void 0===t?void 0:t.unit]})]}),(0,n.jsx)("div",{className:"flex gap-1 border p-2 m-1",children:(0,n.jsxs)("div",{children:["Total Price: ",null==i?void 0:i.total_price]})}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{className:"my-1 px-4 py-2 flex gap-4 border",children:[(0,n.jsx)(o(),{className:"p-4 border",href:"/cart/".concat(null==l?void 0:null===(r=l.data[0])||void 0===r?void 0:r.id,"?itemId=").concat(null==i?void 0:i.id,"&type=").concat(null==i?void 0:null===(u=i.order_id)||void 0===u?void 0:u.type,"&qty=").concat(null==i?void 0:i.quantity,"&update=",!0),children:"[ + ]"}),(null==i?void 0:i.quantity)>0&&(0,n.jsx)(o(),{className:"p-4 border",href:"/cart/".concat(null==l?void 0:null===(v=l.data[0])||void 0===v?void 0:v.id,"?itemId=").concat(null==i?void 0:i.id,"&type=").concat(null==i?void 0:null===(s=i.order_id)||void 0===s?void 0:s.type,"&qty=").concat(null==i?void 0:i.quantity,"&update=",!1),children:"[ - ]"})]}),(0,n.jsx)("div",{className:"my-1 px-4 py-2 border",children:"Delete"})]})]},null==i?void 0:i.id)})})},h=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Shopping Cart"}),(0,n.jsx)(o(),{href:"/",children:"Home"}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(p,{})})]})}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=4476)}),_N_E=i.O()}]);