(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4476:function(i,l,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return d(4109)}])},4109:function(i,l,d){"use strict";d.r(l),d.d(l,{default:function(){return p}});var n=d(5893),e=d(1664),t=d.n(e),o=function(){return(0,n.jsx)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:"Loading..."})},r=d(7294),u=function(i){return(0,n.jsxs)("div",{className:"fixed top-0 z-50 w-full h-screen flex justify-center items-center",children:["Page Error: ",i.message]})},v=d(491),s=d(777);function a(){let{data:i,isLoading:l,error:d}=(0,s.a)({queryKey:["getSession"],queryFn:()=>fetch("".concat(v.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}}).then(i=>i.text())}),n="".concat(v.g.url,"/jsonapi/carts"),e={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",token:null!=i?i:""};console.log("token loading",l);let{data:t,isLoading:o,isError:r}=(0,s.a)({queryKey:["getCart"],queryFn:()=>fetch(n,{headers:e}).then(i=>i.json())});return console.log("CART REPORT: ",t,r,o,d),{data:t,isError:r,isLoading:o,tokenError:d}}var c=function(){let[i,l]=(0,r.useState)([]),{data:d,isError:e,isLoading:t}=a();return((0,r.useEffect)(()=>{d&&l(null==d?void 0:d.data)},[d]),e)?(0,n.jsx)(u,{}):t?(0,n.jsx)(o,{}):(0,n.jsx)("div",{children:i&&(null==i?void 0:i.map(i=>{var l,d,e,t,o,r,u,v,s,a;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Email: ",null===(l=i.attributes)||void 0===l?void 0:l.mail]}),(0,n.jsxs)("div",{children:["Order sub Total: ",null===(t=i.attributes)||void 0===t?void 0:null===(e=t.order_total)||void 0===e?void 0:null===(d=e.subtotal)||void 0===d?void 0:d.number]}),(0,n.jsxs)("div",{children:["Order Total: ",null===(u=i.attributes)||void 0===u?void 0:null===(r=u.order_total)||void 0===r?void 0:null===(o=r.total)||void 0===o?void 0:o.number]}),(0,n.jsxs)("div",{children:["Store Id: ",null==i?void 0:null===(a=i.relationships)||void 0===a?void 0:null===(s=a.store_id)||void 0===s?void 0:null===(v=s.data)||void 0===v?void 0:v.id]}),(0,n.jsxs)("div",{children:["Type: ",null==i?void 0:i.type]})]},i.id)}))})},h=function(){let[i,l]=(0,r.useState)([]),{data:d,isError:e,isLoading:t}=a(),o=(i,l)=>{var d,n,e;let t=i&&(null==i?void 0:i.find(i=>i.id===l));return{sku:null==t?void 0:null===(d=t.attributes)||void 0===d?void 0:d.sku,weight:parseInt(null===(n=t.attributes)||void 0===n?void 0:n.weight.number),unit:null===(e=t.attributes)||void 0===e?void 0:e.weight.unit}};return(0,r.useEffect)(()=>{var i,n,e,t,r,u,v,s,a,c,h;let p=[];console.log("to be set data: ",d&&(null==d?void 0:null===(e=d.data[0])||void 0===e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(i=n.order_items)||void 0===i?void 0:i.data)),d&&(null==d?void 0:d.data)&&(null==d?void 0:null===(t=d.data[0])||void 0===t?void 0:t.relationships)&&(null==d?void 0:null===(u=d.data[0])||void 0===u?void 0:null===(r=u.relationships)||void 0===r?void 0:r.order_items)&&(null==d?void 0:null===(s=d.data[0])||void 0===s?void 0:null===(v=s.relationships.order_items)||void 0===v?void 0:v.data)&&p.push(...null==d?void 0:null===(h=d.data[0])||void 0===h?void 0:null===(c=h.relationships)||void 0===c?void 0:null===(a=c.order_items)||void 0===a?void 0:a.data),console.log("set in an Array: ",p);let x=[];p.length>0&&(null==p||p.map(i=>{var l,n,e,t,r,u,v,s,a,c,h,p,j,_,f;let m=null==d?void 0:null===(l=d.included)||void 0===l?void 0:l.find(l=>l.id===i.id);x.push({id:null==m?void 0:m.id,order_id:null==m?void 0:null===(e=m.relationships)||void 0===e?void 0:null===(n=e.order_id)||void 0===n?void 0:n.data,order_item_id:null==m?void 0:null===(t=m.attributes)||void 0===t?void 0:t.drupal_internal__order_item_id,quantity:parseInt(null==m?void 0:null===(r=m.attributes)||void 0===r?void 0:r.quantity,10),title:null==m?void 0:null===(u=m.attributes)||void 0===u?void 0:u.title,currency_code:null==m?void 0:null===(s=m.attributes)||void 0===s?void 0:null===(v=s.unit_price)||void 0===v?void 0:v.currency_code,unit_price:parseInt(null==m?void 0:null===(c=m.attributes)||void 0===c?void 0:null===(a=c.unit_price)||void 0===a?void 0:a.number,10),total_price:parseInt(null==m?void 0:null===(p=m.attributes)||void 0===p?void 0:null===(h=p.total_price)||void 0===h?void 0:h.number,10),variations:o(d&&(null==d?void 0:d.included),null==m?void 0:null===(f=m.relationships)||void 0===f?void 0:null===(_=f.purchased_entity)||void 0===_?void 0:null===(j=_.data)||void 0===j?void 0:j.id)})})),l(x)},[d]),(0,n.jsx)("div",{className:"border p-2",children:null==i?void 0:i.map(i=>{var l,d,e;return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,n.jsxs)("div",{className:"text-sm",children:[(0,n.jsxs)("div",{className:"text-xs",children:["id:",null==i?void 0:i.id]}),(0,n.jsxs)("div",{children:["Order Item Id: ",null==i?void 0:i.order_item_id]}),(0,n.jsxs)("div",{children:["Title: ",null==i?void 0:i.title]}),(0,n.jsxs)("div",{children:["SKU: ",null==i?void 0:null===(l=i.variations)||void 0===l?void 0:l.sku]})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Quantity: ",null==i?void 0:i.quantity]}),(0,n.jsxs)("div",{children:["Unit Price: ",null==i?void 0:i.unit_price]}),(0,n.jsxs)("div",{children:["Weight: ",null==i?void 0:null===(d=i.variations)||void 0===d?void 0:d.weight]}),(0,n.jsx)("div",{children:null==i?void 0:null===(e=i.variations)||void 0===e?void 0:e.unit})]}),(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsxs)("div",{children:["Total Price: ",null==i?void 0:i.total_price]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Update"}),(0,n.jsx)("div",{children:"Delete"})]})]},null==i?void 0:i.id)})})},p=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Shopping Cart"}),(0,n.jsx)(t(),{href:"/",children:"Home"}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(h,{})})]})}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=4476)}),_N_E=i.O()}]);