(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(i,d,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return l(4109)}])},4109:function(i,d,l){"use strict";l.r(d),l.d(d,{default:function(){return p}});var n=l(5893),e=l(1664),t=l.n(e),o=function(){return(0,n.jsx)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:"Loading..."})},r=l(7294),s=function(i){return(0,n.jsxs)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:["Page Error: ",i.message]})},u=l(491),v=l(777);function a(){let{data:i,isLoading:d,error:l}=(0,v.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(u.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}}).then(i=>i.text())}),n="".concat(u.g.url,"/jsonapi/carts"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",token:null!=i?i:""};console.log("token loading",d);let{data:t,isLoading:o,isError:r}=(0,v.a)({queryKey:["getCart"],queryFn:()=>fetch(n,{headers:e}).then(i=>i.json())});return console.log("CART REPORT: ",t,r,o,l),{data:t,isError:r,isLoading:o,tokenError:l}}var c=function(){let[i,d]=(0,r.useState)([]),{data:l,isError:e,isLoading:t}=a();return((0,r.useEffect)(()=>{l&&d(null==l?void 0:l.data)},[l]),e)?(0,n.jsx)(s,{}):t?(0,n.jsx)(o,{}):(0,n.jsx)("div",{children:i&&(null==i?void 0:i.map(i=>{var d,l,e,t,o,r,s,u,v,a;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Email: ",null===(d=i.attributes)||void 0===d?void 0:d.mail]}),(0,n.jsxs)("div",{children:["Order sub Total: ",null===(t=i.attributes)||void 0===t?void 0:null===(e=t.order_total)||void 0===e?void 0:null===(l=e.subtotal)||void 0===l?void 0:l.number]}),(0,n.jsxs)("div",{children:["Order Total: ",null===(s=i.attributes)||void 0===s?void 0:null===(r=s.order_total)||void 0===r?void 0:null===(o=r.total)||void 0===o?void 0:o.number]}),(0,n.jsxs)("div",{children:["Store Id: ",null==i?void 0:null===(a=i.relationships)||void 0===a?void 0:null===(v=a.store_id)||void 0===v?void 0:null===(u=v.data)||void 0===u?void 0:u.id]}),(0,n.jsxs)("div",{children:["Type: ",null==i?void 0:i.type]})]},i.id)}))})},h=function(){let[i,d]=(0,r.useState)([]),{data:l,isError:e,isLoading:o}=a(),[s,u]=(0,r.useState)(0),[v,c]=(0,r.useState)(""),[h,p]=(0,r.useState)(""),x=(i,d)=>{var l,n,e;let t=i&&(null==i?void 0:i.find(i=>i.id===d));return{sku:null==t?void 0:null===(l=t.attributes)||void 0===l?void 0:l.sku,weight:parseInt(null===(n=t.attributes)||void 0===n?void 0:n.weight.number),unit:null===(e=t.attributes)||void 0===e?void 0:e.weight.unit}};return(0,r.useEffect)(()=>{var i,n,e,t,o,r,s,u,v,a,c;let h=[];console.log("to be set data: ",l&&(null==l?void 0:null===(e=l.data[0])||void 0===e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(i=n.order_items)||void 0===i?void 0:i.data)),l&&(null==l?void 0:l.data)&&(null==l?void 0:null===(t=l.data[0])||void 0===t?void 0:t.relationships)&&(null==l?void 0:null===(r=l.data[0])||void 0===r?void 0:null===(o=r.relationships)||void 0===o?void 0:o.order_items)&&(null==l?void 0:null===(u=l.data[0])||void 0===u?void 0:null===(s=u.relationships.order_items)||void 0===s?void 0:s.data)&&h.push(...null==l?void 0:null===(c=l.data[0])||void 0===c?void 0:null===(a=c.relationships)||void 0===a?void 0:null===(v=a.order_items)||void 0===v?void 0:v.data),console.log("set in an Array: ",h);let p=[];h.length>0&&(null==h||h.map(i=>{var d,n,e,t,o,r,s,u,v,a,c,h,m,j,_;let f=null==l?void 0:null===(d=l.included)||void 0===d?void 0:d.find(d=>d.id===i.id);p.push({id:null==f?void 0:f.id,order_id:null==f?void 0:null===(e=f.relationships)||void 0===e?void 0:null===(n=e.order_id)||void 0===n?void 0:n.data,order_item_id:null==f?void 0:null===(t=f.attributes)||void 0===t?void 0:t.drupal_internal__order_item_id,quantity:parseInt(null==f?void 0:null===(o=f.attributes)||void 0===o?void 0:o.quantity,10),title:null==f?void 0:null===(r=f.attributes)||void 0===r?void 0:r.title,currency_code:null==f?void 0:null===(u=f.attributes)||void 0===u?void 0:null===(s=u.unit_price)||void 0===s?void 0:s.currency_code,unit_price:parseInt(null==f?void 0:null===(a=f.attributes)||void 0===a?void 0:null===(v=a.unit_price)||void 0===v?void 0:v.number,10),total_price:parseInt(null==f?void 0:null===(h=f.attributes)||void 0===h?void 0:null===(c=h.total_price)||void 0===c?void 0:c.number,10),variations:x(l&&(null==l?void 0:l.included),null==f?void 0:null===(_=f.relationships)||void 0===_?void 0:null===(j=_.purchased_entity)||void 0===j?void 0:null===(m=j.data)||void 0===m?void 0:m.id)})})),d(p)},[l]),(0,n.jsx)("div",{className:"border p-2",children:null==i?void 0:i.map(i=>{var d,e,o,r;return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,n.jsxs)("div",{className:"text-sm border p-2 m-1",children:[(0,n.jsxs)("div",{className:"text-xs",children:["id:",null==i?void 0:i.id]}),(0,n.jsxs)("div",{children:["Order Item Id: ",null==i?void 0:i.order_item_id]}),(0,n.jsxs)("div",{children:["Title: ",null==i?void 0:i.title]}),(0,n.jsxs)("div",{children:["SKU: ",null==i?void 0:null===(d=i.variations)||void 0===d?void 0:d.sku]})]}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{children:["Quantity: ",null==i?void 0:i.quantity]}),(0,n.jsxs)("div",{children:["Unit Price: ",null==i?void 0:i.unit_price]}),(0,n.jsxs)("div",{children:["Weight: ",null==i?void 0:null===(e=i.variations)||void 0===e?void 0:e.weight," ",null==i?void 0:null===(o=i.variations)||void 0===o?void 0:o.unit]})]}),(0,n.jsx)("div",{className:"flex gap-1 border p-2 m-1",children:(0,n.jsxs)("div",{children:["Total Price: ",null==i?void 0:i.total_price]})}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsx)("div",{className:"my-1 px-4 py-2 border",children:(0,n.jsx)(t(),{href:"/cart/".concat(null==l?void 0:null===(r=l.data[0])||void 0===r?void 0:r.id,"?itemId=").concat(null==i?void 0:i.id),children:"Add item"})}),(0,n.jsx)("div",{className:"my-1 px-4 py-2 border",children:"Delete"})]})]},null==i?void 0:i.id)})})},p=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Shopping Cart"}),(0,n.jsx)(t(),{href:"/",children:"Home"}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(h,{})})]})}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=4476)}),_N_E=i.O()}]);