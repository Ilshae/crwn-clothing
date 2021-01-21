(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{126:function(n,t,e){"use strict";e.r(t);var r=e(19),a=e(17),i=e(14),c=e(93),o=e(94),u=e(0),l=e.n(u),d=e(95),m=e(6),f=e(5);function s(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 1fr!important;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(m.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return p=function(){return n},n}function b(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: 0.2s ",";\n"]);return b=function(){return n},n}function v(){var n=Object(m.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return v=function(){return n},n}var g=Object(f.d)(v()),h=f.c.article(b(),g),j=f.c.h2(p()),x=f.c.div(s());x.displayName="CollectionItemsContainer";var O=Object(r.b)(function(n,t){return{collection:Object(c.a)(t.match.params.collectionId)(n)}})(function(n){var t=n.collection,e=t.title,r=t.items;return l.a.createElement(h,null,l.a.createElement(j,null,e),l.a.createElement(x,null,r.map(function(n){return l.a.createElement(d.a,{key:n.id,item:n})})))}),w=Object(i.b)({isLoading:function(n){return!Object(c.d)(n)}}),y=Object(a.d)(Object(r.b)(w),o.a)(O);t.default=y},93:function(n,t,e){"use strict";e.d(t,"b",function(){return c}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return l});var r=e(14),a=function(n){return n.shop},i=Object(r.a)([a],function(n){return n.collections}),c=Object(r.a)([i],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),o=function(n){return Object(r.a)([i],function(t){return t?t[n]:null})},u=Object(r.a)([a],function(n){return n.isFetching}),l=Object(r.a)([a],function(n){return!!n.collections})},94:function(n,t,e){"use strict";var r=e(48),a=e(0),i=e.n(a),c=e(50);t.a=function(n){return function(t){var e=t.isLoading,a=Object(r.a)(t,["isLoading"]);return e?i.a.createElement(c.a,null):i.a.createElement(n,a)}}},95:function(n,t,e){"use strict";var r=e(0),a=e.n(r),i=e(19),c=e(23),o=e(6),u=e(5),l=e(49);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return m=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return f=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n\n    div {\n      color: #bf0d46;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    \n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n  @media screen and (max-width: 500px) {\n    width: 85vw;\n  }\n"]);return b=function(){return n},n}var v=u.c.article(b()),g=Object(u.c)(l.a)(p());g.displayName="AddButton";var h=u.c.div(s(),function(n){var t=n.imageUrl;return"url(".concat(t,")")});h.displayName="BackgroundImage";var j=u.c.div(f());j.displayName="CollectionFooterContainer";var x=u.c.span(m());x.displayName="NameContainer";var O=u.c.span(d());O.displayName="PriceContainer";t.a=Object(i.b)(null,function(n){return{addItem:function(t){return n(Object(c.a)(t))}}})(function(n){var t=n.item,e=n.addItem,r=t.name,i=t.price,c=t.imageUrl;return a.a.createElement(v,null,a.a.createElement(h,{className:"image",imageUrl:c}),a.a.createElement(j,null,a.a.createElement(x,null,r),a.a.createElement(O,null,i)),a.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))})}}]);
//# sourceMappingURL=5.cff4ce4b.chunk.js.map