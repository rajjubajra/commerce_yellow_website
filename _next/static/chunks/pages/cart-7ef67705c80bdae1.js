(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(i,l,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return d(1287)}])},1287:function(i,l,d){"use strict";d.r(l),d.d(l,{default:function(){return x}});var n=d(5893),e=d(1664),o=d.n(e),t=function(){return(0,n.jsx)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:"Loading..."})},r=d(7294),u=function(i){return(0,n.jsxs)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:["Page Error: ",i.message]})},v=d(491),a=d(777);function s(){let{data:i,isLoading:l,error:d}=(0,a.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(v.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}}).then(i=>i.text())}),n="".concat(v.g.url,"/jsonapi/carts"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",token:null!=i?i:""};console.log("token loading",l);let{data:o,isLoading:t,isError:r}=(0,a.a)({queryKey:["getCart"],queryFn:()=>fetch(n,{headers:e}).then(i=>i.json())});return console.log("CART REPORT: ",o,r,t,d),{data:o,isError:r,isLoading:t,tokenError:d}}var c=function(){let[i,l]=(0,r.useState)([]),{data:d,isError:e,isLoading:o}=s();return((0,r.useEffect)(()=>{d&&l(null==d?void 0:d.data)},[d]),e)?(0,n.jsx)(u,{}):o?(0,n.jsx)(t,{}):(0,n.jsx)("div",{children:i&&(null==i?void 0:i.map(i=>{var l,d,e,o,t,r,u,v,a,s;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Email: ",null===(l=i.attributes)||void 0===l?void 0:l.mail]}),(0,n.jsxs)("div",{children:["Order sub Total: ",null==i?void 0:null===(o=i.attributes)||void 0===o?void 0:null===(e=o.order_total)||void 0===e?void 0:null===(d=e.subtotal)||void 0===d?void 0:d.number]}),(0,n.jsxs)("div",{children:["Order Total: ",null==i?void 0:null===(u=i.attributes)||void 0===u?void 0:null===(r=u.order_total)||void 0===r?void 0:null===(t=r.total)||void 0===t?void 0:t.number]}),(0,n.jsxs)("div",{children:["Store Id: ",null==i?void 0:null===(s=i.relationships)||void 0===s?void 0:null===(a=s.store_id)||void 0===a?void 0:null===(v=a.data)||void 0===v?void 0:v.id]}),(0,n.jsxs)("div",{children:["Type: ",null==i?void 0:i.type]})]},i.id)}))})},h=function(){return(0,n.jsx)("div",{className:"w-full flex justify-center mt-28",children:(0,n.jsx)("div",{children:"Your Cart is empty"})})},p=function(){var i,l;let[d,e]=(0,r.useState)([]),{data:t,isError:u,isLoading:a}=s(),c=(i,l)=>{var d,n,e;let o=i&&(null==i?void 0:i.find(i=>i.id===l));return{sku:null==o?void 0:null===(d=o.attributes)||void 0===d?void 0:d.sku,weight:parseInt(null===(n=o.attributes)||void 0===n?void 0:n.weight.number),unit:null===(e=o.attributes)||void 0===e?void 0:e.weight.unit}};return(0,r.useEffect)(()=>{var i,l,d,n,o,r,u,v,a,s,h;let p=[];console.log("to be set data: ",t&&(null==t?void 0:null===(d=t.data[0])||void 0===d?void 0:null===(l=d.relationships)||void 0===l?void 0:null===(i=l.order_items)||void 0===i?void 0:i.data)),t&&(null==t?void 0:t.data)&&(null==t?void 0:null===(n=t.data[0])||void 0===n?void 0:n.relationships)&&(null==t?void 0:null===(r=t.data[0])||void 0===r?void 0:null===(o=r.relationships)||void 0===o?void 0:o.order_items)&&(null==t?void 0:null===(v=t.data[0])||void 0===v?void 0:null===(u=v.relationships.order_items)||void 0===u?void 0:u.data)&&p.push(...null==t?void 0:null===(h=t.data[0])||void 0===h?void 0:null===(s=h.relationships)||void 0===s?void 0:null===(a=s.order_items)||void 0===a?void 0:a.data),console.log("set in an Array: ",p);let x=[];p.length>0&&(null==p||p.map(i=>{var l,d,n,e,o,r,u,v,a,s,h,p,m,j,_;let f=null==t?void 0:null===(l=t.included)||void 0===l?void 0:l.find(l=>l.id===i.id);x.push({id:null==f?void 0:f.id,order_id:null==f?void 0:null===(n=f.relationships)||void 0===n?void 0:null===(d=n.order_id)||void 0===d?void 0:d.data,type:null==f?void 0:f.type,order_item_id:null==f?void 0:null===(e=f.attributes)||void 0===e?void 0:e.drupal_internal__order_item_id,quantity:parseInt(null==f?void 0:null===(o=f.attributes)||void 0===o?void 0:o.quantity,10),title:null==f?void 0:null===(r=f.attributes)||void 0===r?void 0:r.title,currency_code:null==f?void 0:null===(v=f.attributes)||void 0===v?void 0:null===(u=v.unit_price)||void 0===u?void 0:u.currency_code,unit_price:parseInt(null==f?void 0:null===(s=f.attributes)||void 0===s?void 0:null===(a=s.unit_price)||void 0===a?void 0:a.number,10),total_price:parseInt(null==f?void 0:null===(p=f.attributes)||void 0===p?void 0:null===(h=p.total_price)||void 0===h?void 0:h.number,10),variations:c(t&&(null==t?void 0:t.included),null==f?void 0:null===(_=f.relationships)||void 0===_?void 0:null===(j=_.purchased_entity)||void 0===j?void 0:null===(m=j.data)||void 0===m?void 0:m.id)})})),e(x)},[t]),(0,n.jsxs)("div",{className:"border p-2",children:[d&&d.length>0?null==d?void 0:d.map(i=>{var l,d,e,r,u,v,a,s;return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,n.jsxs)("div",{className:"text-sm border p-2 m-1",children:[(0,n.jsxs)("div",{className:"text-xs",children:["id:",null==i?void 0:i.id]}),(0,n.jsxs)("div",{children:["Order Item Id: ",null==i?void 0:i.order_item_id]}),(0,n.jsxs)("div",{children:["Title: ",null==i?void 0:i.title]}),(0,n.jsxs)("div",{children:["SKU: ",null==i?void 0:null===(l=i.variations)||void 0===l?void 0:l.sku]})]}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{children:["Quantity: ",null==i?void 0:i.quantity]}),(0,n.jsxs)("div",{children:["Unit Price: ",null==i?void 0:i.unit_price]}),(0,n.jsxs)("div",{children:["Weight: ",null==i?void 0:null===(d=i.variations)||void 0===d?void 0:d.weight," ",null==i?void 0:null===(e=i.variations)||void 0===e?void 0:e.unit]})]}),(0,n.jsx)("div",{className:"flex gap-1 border p-2 m-1",children:(0,n.jsxs)("div",{children:["Total Price: ",null==i?void 0:i.total_price]})}),(0,n.jsxs)("div",{className:"border p-2 m-1",children:[(0,n.jsxs)("div",{className:"my-1 px-4 py-2 flex gap-4 border",children:[(0,n.jsx)(o(),{className:"p-4 border",href:"/cart/".concat(null==t?void 0:null===(r=t.data[0])||void 0===r?void 0:r.id,"?itemId=").concat(null==i?void 0:i.id,"&type=").concat(null==i?void 0:null===(u=i.order_id)||void 0===u?void 0:u.type,"&qty=").concat(null==i?void 0:i.quantity,"&add=",!0),children:"[ + ]"}),(null==i?void 0:i.quantity)>0&&(0,n.jsx)(o(),{className:"p-4 border",href:"/cart/".concat(null==t?void 0:null===(v=t.data[0])||void 0===v?void 0:v.id,"?itemId=").concat(null==i?void 0:i.id,"&type=").concat(null==i?void 0:null===(a=i.order_id)||void 0===a?void 0:a.type,"&qty=").concat(null==i?void 0:i.quantity,"&add=",!1),children:"[ - ]"})]}),(0,n.jsx)(o(),{className:"p-4 border",href:"/cart/".concat(null==t?void 0:null===(s=t.data[0])||void 0===s?void 0:s.id,"?itemId=").concat(null==i?void 0:i.id,"&type=").concat(null==i?void 0:i.type,"&delete=",!0),children:"Delete"})]})]},null==i?void 0:i.id)}):(0,n.jsx)(h,{}),d&&d.length>0&&(0,n.jsx)("div",{children:(0,n.jsx)(o(),{href:"".concat(v.g.url,"/checkout/").concat(null===(l=t.data[0])||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.drupal_internal__order_id,"/order_information"),children:"Checkout"})})]})},x=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Shopping Cart"}),(0,n.jsx)(o(),{href:"/",children:"Home"}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(p,{})})]})}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=4476)}),_N_E=i.O()}]);