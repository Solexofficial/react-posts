(this["webpackJsonpreact-posts"]=this["webpackJsonpreact-posts"]||[]).push([[0],{23:function(e,t,n){e.exports={myModal:"MyModal_myModal__21qZI",myModalContent:"MyModal_myModalContent__2y5Yo",active:"MyModal_active__3PvCS"}},35:function(e,t,n){},36:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__1-mun"}},37:function(e,t,n){e.exports={myInput:"MyInput_myInput__1y09o"}},40:function(e,t,n){e.exports={loader:"Loader_loader__3CQGJ",rotate:"Loader_rotate__K0hmy"}},77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),s=n.n(a),o=n(4),u=n(14),i=n(2),j=Object(c.createContext)(null),l=n(1),b=function(){return Object(l.jsx)("h1",{children:"This is page About"})},d=n(7),p=n(43),O=n(36),h=n.n(O),f=["children"],x=function(e){var t=e.children,n=Object(p.a)(e,f);return Object(l.jsx)("button",Object(d.a)(Object(d.a)({className:h.a.myBtn},n),{},{children:t}))},v=n(37),m=n.n(v),g=r.a.forwardRef((function(e,t){return Object(l.jsx)("input",Object(d.a)({ref:t,className:m.a.myInput},e))})),y=function(){var e=Object(c.useContext)(j).setIsAuth;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(!0),localStorage.setItem("auth","true")},children:[Object(l.jsx)(g,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}),Object(l.jsx)(g,{type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)(x,{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},_=n(6),C=n.n(_),k=n(12),w=n(38),I=n(39),S=n(22),M=n.n(S),N=function(){function e(){Object(w.a)(this,e)}return Object(I.a)(e,null,[{key:"getAll",value:function(){var e=Object(k.a)(C.a.mark((function e(){var t,n,c,r=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,M.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByPostId",value:function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=n(40),A=n.n(P),B=function(){return Object(l.jsx)("div",{className:A.a.loader})},L=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),u=Object(o.a)(s,2),i=u[0],j=u[1],l=function(){var t=Object(k.a)(C.a.mark((function t(){var n=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e.apply(void 0,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0.message);case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[l,r,i]},q=function(){var e=Object(i.h)(),t=Object(c.useState)({}),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),u=Object(o.a)(s,2),j=u[0],b=u[1],d=L(function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getById(t);case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(o.a)(d,3),O=p[0],h=p[1],f=(p[2],L(function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getCommentsByPostId(t);case 2:n=e.sent,b(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),x=Object(o.a)(f,3),v=x[0],m=x[1];x[2];return Object(c.useEffect)((function(){O(e.id),v(e.id)}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["\u0412\u044b \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0441\u0442\u0430 c ID: ",e.id," "]}),h?Object(l.jsx)(B,{}):Object(l.jsxs)("div",{children:[r.id," ",r.title]}),Object(l.jsx)("h1",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),m?Object(l.jsx)(B,{}):Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsxs)("div",{style:{marginTop:15},children:[Object(l.jsx)("h5",{children:e.email}),Object(l.jsx)("div",{children:e.body})]},e.id)}))})]})},E=n(17),F=function(e){var t=e.option,n=e.defaultValue,c=e.value,r=e.onChange;return Object(l.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},children:[Object(l.jsx)("option",{value:"",disabled:!0,children:n}),t.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},V=function(e){var t=e.filter,n=e.setFilter;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",value:t.query,onChange:function(e){return n(Object(d.a)(Object(d.a)({},t),{},{query:e.target.value}))}}),Object(l.jsx)(F,{value:t.sort,onChange:function(e){return n(Object(d.a)(Object(d.a)({},t),{},{sort:e}))},defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",option:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})},D=function(e){var t=e.create,n=Object(c.useState)({title:"",body:""}),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)(g,{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.title,onChange:function(e){return s(Object(d.a)(Object(d.a)({},a),{},{title:e.target.value}))}}),Object(l.jsx)(g,{type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.body,onChange:function(e){return s(Object(d.a)(Object(d.a)({},a),{},{body:e.target.value}))}}),Object(l.jsx)(x,{onClick:function(e){e.preventDefault();var n=Object(d.a)(Object(d.a)({},a),{},{id:Date.now()});t(n),s({title:"",body:""})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})},J=n(80),T=n(79),R=function(e){var t=Object(i.g)();return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"post__content",children:[Object(l.jsxs)("strong",{children:[e.post.id,". ",e.post.title]}),Object(l.jsx)("div",{children:e.post.body})]}),Object(l.jsxs)("div",{className:"post__btns",children:[Object(l.jsx)(x,{onClick:function(){return t.push("/posts/".concat(e.post.id))},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),Object(l.jsx)(x,{onClick:function(){return e.removePost(e.post)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},G=function(e){var t=e.posts,n=e.title,c=e.removePost;return t.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:n}),Object(l.jsx)(J.a,{children:t.map((function(e,t){return Object(l.jsx)(T.a,{timeout:500,classNames:"post",children:Object(l.jsx)(R,{post:e,number:t+1,removePost:c})},e.id)}))})]}):Object(l.jsx)("h1",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b!"})},K=n(23),Q=n.n(K),Y=function(e){var t=e.children,n=e.visible,c=e.setVisible,r=[Q.a.myModal];return n&&r.push(Q.a.active),Object(l.jsx)("div",{className:r.join(" "),onClick:function(){return c(!1)},children:Object(l.jsx)("div",{className:Q.a.myModalContent,onClick:function(e){return e.stopPropagation()},children:t})})},Z=function(e,t){return Math.ceil(e/t)},z=function(e){var t=e.totalPages,n=e.page,r=e.changePage,a=Object(c.useMemo)((function(){return function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t)}),[t]);return Object(l.jsx)("div",{className:"page__wrapper",children:a.map((function(e){return Object(l.jsx)("span",{className:n===e?"page page__current":"page",onClick:function(){return r(e)},children:e},e)}))})},H=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return console.log("sorting!"),t?Object(E.a)(e.sort((function(e,n){return e[t].localeCompare(n[t])}))):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))}),[n,r])},U=(n(35),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({sort:"",query:""}),s=Object(o.a)(a,2),u=s[0],i=s[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),d=b[0],p=b[1],O=Object(c.useState)(0),h=Object(o.a)(O,2),f=h[0],v=h[1],m=Object(c.useState)(10),g=Object(o.a)(m,2),y=g[0],_=g[1],w=Object(c.useState)(1),I=Object(o.a)(w,2),S=I[0],M=I[1],P=H(n,u.sort,u.query),A=Object(c.useRef)(),q=L(function(){var e=Object(k.a)(C.a.mark((function e(t,c){var a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAll(t,c);case 2:a=e.sent,r([].concat(Object(E.a)(n),Object(E.a)(a.data))),s=a.headers["x-total-count"],v(Z(s,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),J=Object(o.a)(q,3),T=J[0],R=J[1],K=J[2];!function(e,t,n,r){var a=Object(c.useRef)();Object(c.useEffect)((function(){n||(a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&r()})),a.current.observe(e.current))}),[n])}(A,S<f,R,(function(){M(S+1)})),Object(c.useEffect)((function(){T(y,S)}),[S,y]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{style:{marginTop:"30px"},onClick:function(){return p(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(l.jsx)(Y,{visible:d,setVisible:p,children:Object(l.jsx)(D,{create:function(e){r([].concat(Object(E.a)(n),[e])),p(!1)}})}),Object(l.jsx)("hr",{style:{margin:"15px 0"}}),Object(l.jsx)("div",{children:Object(l.jsx)(V,{filter:u,setFilter:i})}),Object(l.jsx)(F,{value:y,onChange:function(e){return _(e)},defaultValue:"\u041a\u043e\u043b-\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",option:[{value:5,name:"5"},{value:10,name:"10"},{value:25,name:"25"},{value:-1,name:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}]}),K&&Object(l.jsxs)("h1",{children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ",K]}),R&&Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(l.jsx)(B,{})}),Object(l.jsx)(G,{posts:P,removePost:function(e){r(n.filter((function(t){return t.id!==e.id})))},title:"\u041f\u043e\u0441\u0442\u044b JS"}),Object(l.jsx)("div",{ref:A,style:{height:20,background:"red"}}),Object(l.jsx)(z,{totalPages:f,page:S,changePage:function(e){M(e)}})]})}),W=[{path:"/about",component:b,exact:!0},{path:"/posts",component:U,exact:!0},{path:"/posts/:id",component:q,exact:!0}],X=[{path:"/login",component:y,exact:!0}],$=function(){var e=Object(c.useContext)(j),t=e.isAuth;return e.isLoading?Object(l.jsx)(B,{}):t?Object(l.jsxs)(i.d,{children:[W.map((function(e){return Object(l.jsx)(i.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(l.jsx)(i.a,{to:"/posts"})]}):Object(l.jsxs)(i.d,{children:[X.map((function(e){return Object(l.jsx)(i.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(l.jsx)(i.a,{to:"/login"})]})},ee=function(){var e=Object(c.useContext)(j).setIsAuth;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)("div",{className:"navbar__links",children:[Object(l.jsx)(u.b,{to:"/about",children:"About"}),Object(l.jsx)(u.b,{to:"/posts",children:"Posts"})]}),Object(l.jsx)(x,{onClick:function(){e(!1),localStorage.removeItem("auth")},children:"\u0412\u044b\u0439\u0442\u0438"})]})})},te=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(o.a)(a,2),i=s[0],b=s[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&r(!0),b(!1)}),[]),Object(l.jsx)(j.Provider,{value:{isAuth:n,setIsAuth:r,isLoading:i},children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(ee,{}),Object(l.jsx)($,{})]})})};s.a.render(Object(l.jsx)(te,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.d210cb1d.chunk.js.map