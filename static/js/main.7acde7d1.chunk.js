(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(4),c=n.n(s),u=(n(14),n(5)),h=n(6),r=n(7),o=n(2),b=n(9),m=n(8),l=(n(15),n(0)),j=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).state={item:"",items:[]},t.handleInputChange=t.handleInputChange.bind(Object(o.a)(t)),t.sumbitItem=t.sumbitItem.bind(Object(o.a)(t)),t}return Object(r.a)(n,[{key:"sumbitItem",value:function(){var t=this.state.item,e=this.state.items;e.push(t),this.setState({items:e})}},{key:"handleInputChange",value:function(t){var e=t.target.name,n=t.target.value;this.setState(Object(u.a)({},e,n))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h2",{children:"TO DO LIST"}),Object(l.jsx)("input",{type:"text",name:"item",onChange:this.handleInputChange}),Object(l.jsx)("button",{onClick:this.sumbitItem,children:"Sumbit it!"}),this.state.items.map((function(t){return Object(l.jsx)("p",{children:t})}))]})}}]),n}(a.a.Component),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.7acde7d1.chunk.js.map