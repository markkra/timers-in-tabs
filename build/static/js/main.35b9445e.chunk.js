(this["webpackJsonptimer-tabs"]=this["webpackJsonptimer-tabs"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(14),n(3)),i=(n(15),function(e){var t=e.display;return r.a.createElement("div",null,t)}),o=function(e){var t=e.clickHandler,n=e.label;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},n))},s=n(8),m=n(7),f=n.n(m);function d(e){var t=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem(e))||[]})),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),o=i[0],m=i[1],d=Object(a.useState)(1e3),b=Object(u.a)(d,1)[0],E=Object(a.useState)(!1),v=Object(u.a)(E,2),O=v[0],g=v[1],w=Object(a.useRef)(0);function h(e){return new Date(e)}Object(a.useEffect)((function(){return window.localStorage.setItem(e,JSON.stringify(r)),function(){return window.localStorage.setItem(e,JSON.stringify(r))}}),[r,e]);var j=Object(a.useCallback)((function(e){for(var t,n=0,a=0;a<e.length;a+=2){var r=h(e[a]),c=e[a+1];n+=(c&&h(c)||new Date)-r}w.current=n,m((t=w.current,f()(t,{leading:!0})))}),[w]);return Object(a.useEffect)((function(){j(r),g(r.length%2!==0)}),[j,r]),function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e})),Object(a.useEffect)((function(){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}),[t])}((function(){j(r)}),O?b:null),Object(a.useDebugValue)(o),{timeDisplay:o,handleClick:function(){return c([].concat(Object(s.a)(r),[new Date]))},handleReset:function(){return c([])},getLabel:function(){return 0===r.length?"Start":r.length%2===0?"Resume":"Pause"}}}function b(e){var t=d(e.uniqueTimerId),n=t.timeDisplay,a=t.handleClick,c=t.handleReset,l=t.getLabel;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{display:n}),r.a.createElement(o,{clickHandler:a,label:l()}),r.a.createElement(o,{clickHandler:c,label:"Reset"}))}var E=n(1),v=(n(20),"selectedIndex");var O=function(){var e=Object(a.useState)((function(){return Number(window.localStorage.getItem(v))||0})),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){window.localStorage.setItem(v,n)}),[n]),r.a.createElement("div",{className:"container"},r.a.createElement(E.d,{onSelect:function(e,t){c(e)},selectedIndex:n},r.a.createElement(E.b,null,r.a.createElement(E.a,null,"Timer 1"),r.a.createElement(E.a,null,"Timer 2"),r.a.createElement(E.a,null,"Timer 3")),r.a.createElement(E.c,null,r.a.createElement("div",{className:"App-header"},r.a.createElement(b,{uniqueTimerId:"timer1"}))),r.a.createElement(E.c,null,r.a.createElement("div",{className:"App-header"},r.a.createElement(b,{uniqueTimerId:"timer2"}))),r.a.createElement(E.c,null,r.a.createElement("div",{className:"App-header"},r.a.createElement(b,{uniqueTimerId:"timer3"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.35b9445e.chunk.js.map