(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(19),c=t(14),i=t(104),u=t.n(i),o=t(105),m=t.n(o),d=function(e){var n=e.price,t=100*n;return r.a.createElement(u.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(n),amount:t,panelLabel:"Pay Now",token:function(e){m()({url:"payment",method:"post",data:{amount:t,token:e}}).then(function(e){alert("succesful payment")}).catch(function(e){console.log("Payment Error: ",JSON.parse(e)),alert("There was an issue with your payment! Please make sure you use the provided credit card.")})},stripeKey:"pk_test_51HsBj7E1gngEBdOJAeecjW1trv6PA2Z3oHhxYuBOkpWxt0jBggVN23iXi7mSSaB7HduB4kypr4zg9JOoIwhwIaVc00cNXUeKBl"})},s=t(23),p=t(51),f=Object(l.b)(null,function(e){return{clearItem:function(n){return e(Object(s.c)(n))},addItem:function(n){return e(Object(s.a)(n))},removeItem:function(n){return e(Object(s.d)(n))}}})(function(e){var n=e.cartItem,t=e.clearItem,a=e.addItem,l=e.removeItem,c=n.name,i=n.imageUrl,u=n.price,o=n.quantity;return r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement("img",{src:i,alt:"item"})),r.a.createElement(p.e,null,c),r.a.createElement(p.c,null,r.a.createElement("div",{onClick:function(){return l(n)}},"\u276e"),r.a.createElement("span",null,o),r.a.createElement("div",{onClick:function(){return a(n)}},"\u276f")),r.a.createElement(p.e,null,u),r.a.createElement(p.d,{onClick:function(){return t(n)}},"\u2715"))}),E=t(25),h=t(6),b=t(7);function g(){var e=Object(h.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: #bf0d46;\n"]);return g=function(){return e},e}function v(){var e=Object(h.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return v=function(){return e},e}function w(){var e=Object(h.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(h.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return y=function(){return e},e}function x(){var e=Object(h.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]);return x=function(){return e},e}var O=b.c.div(x()),j=b.c.div(y()),k=b.c.div(w()),I=b.c.div(v()),P=b.c.div(g());t.d(n,"CheckoutPage",function(){return B});var B=function(e){var n=e.cartItems,t=e.total;return r.a.createElement(O,null,r.a.createElement(j,null,r.a.createElement(k,null,r.a.createElement("span",null,"Product")),r.a.createElement(k,null,r.a.createElement("span",null,"Description")),r.a.createElement(k,null,r.a.createElement("span",null,"Quantity")),r.a.createElement(k,null,r.a.createElement("span",null,"Price")),r.a.createElement(k,null,r.a.createElement("span",null,"Remove"))),n.map(function(e){return r.a.createElement(f,{key:e.id,cartItem:e})}),r.a.createElement(I,null,"TOTAL: $",t),r.a.createElement(P,null,"Github Pages does not allow payments to send but the functionality is here :) ",r.a.createElement("br",null),r.a.createElement("br",null),"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(d,{price:t}))},C=Object(c.b)({cartItems:E.b,total:E.d});n.default=Object(l.b)(C)(B)}}]);
//# sourceMappingURL=6.84bce3d1.chunk.js.map