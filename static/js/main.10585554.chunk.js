(this.webpackJsonptyping_game=this.webpackJsonptyping_game||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(12),a=n.n(r),i=n(11),l=n(3),o=(n(17),n(0)),u=function(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})},d=["Dismiss","Spot","North","exempt","inflate","Pay","inn","Fly","world","Opinion","belong","Shop","solve","Rocket","policy","Exile","waiter","Broken","execute","Copper","dollar","Begin","ask","Stadium","release","Lock","money","Asset","recruit","Band","watch","fantasy","Passion","agency","full","Sweat","sick","liberty","Salmon","chief","fibre","Steel","rush","lover","Finish","fling","future","Unaware","shrink","ceiling","Unit","name","imported","Native","infect","knock","creed","Thick","marsh","tear","moment","Animal","wrestle","genetic","slide","Volume","hear","meal","doubt","Chord","exotic","fan","meat","Counter","god","means","deep","Lead","silk","safety","bounce","Arena","lend","rebel","sweep","Hiccup","slime","scale","fold","Die","embryo","trolley","east","Old","senior","dilemma","sip","rub","Heaven","economy","day","Outlook","price","limited","Diamond","flow","insure","sail","Punch","scene","peace","shame","stall","Tune","result","reactor","Love","eyebrow","piece","undress","Mouse","poison","way","clear","raw","Inspire","pen","Applied","issue","irony","history","Trouser","bathtub","thirsty","seller","Graphic","comfort","extreme","Alcohol","charge","brink","Extract","linger","work","title","hell","Create","dine","common","red","Strict","quiet","swipe","Immune","energy","fox","save","tent","Master","reveal","resort","Expand","neutral","basket","faint","boom","Impound","wording","Subway","wound","cut","Auction","bullet","station","moon","Tower","noble","stick","Lighter","see","Extinct","cell","stage","Mass","belt","similar","Clay","stake","Flush","mood","Terms"],j=function(e){var t=e.handleStart,n=e.disabled;return Object(o.jsx)("button",{onClick:t,children:n?"Start":"Reset"})},b=function(e){var t=e.newWord,n=e.inputValue,s=e.setInputValue,c=e.time,r=e.disabled,a=e.animation,i=e.handleInput,l=e.handleStart;return Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"wordarea",children:Object(o.jsx)("p",{children:t})}),Object(o.jsx)("div",{className:"time",style:{animation:null!==a?a:""},children:Object(o.jsx)("p",{children:c})}),Object(o.jsxs)("div",{className:"inputarea",children:[Object(o.jsx)("input",{type:"text",disabled:r&&r,value:n,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return i(e)},placeholder:r?"":"Start Typing...."}),Object(o.jsx)(j,{handleStart:l,disabled:r})]})]})},m=function(e){var t=e.open,n=e.correctResults,s=e.wrongResults,c=e.countCorrect;return Object(o.jsx)("div",{className:"results",id:"results",children:function(){if(t)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"title",children:Object(o.jsxs)("p",{children:["\u6b63\u7b54\u6570\uff1a ",c]})}),Object(o.jsxs)("div",{className:"resultsContainer",children:[Object(o.jsx)("div",{className:"correctResults",children:n.map((function(e,t){return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("p",{children:e})},t)}))}),Object(o.jsx)("div",{className:"wrongResults",children:s.map((function(e,t){return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("p",{children:e})},t)}))})]})]})}()})},h=n(9),O=n(10);var p=function(){var e=Object(s.useState)(d[0]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),a=Object(l.a)(r,2),j=a[0],p=a[1],f=Object(s.useState)([]),x=Object(l.a)(f,2),v=x[0],y=x[1],g=Object(s.useState)([]),w=Object(l.a)(g,2),S=w[0],k=w[1],N=Object(s.useState)(0),C=Object(l.a)(N,2),I=C[0],E=C[1],B=Object(s.useState)(30),L=Object(l.a)(B,2),R=L[0],A=L[1],T=Object(s.useState)(!0),M=Object(l.a)(T,2),V=M[0],F=M[1],P=Object(s.useState)(null),D=Object(l.a)(P,2),H=D[0],J=D[1],U=Object(s.useState)(!1),W=Object(l.a)(U,2),_=W[0],q=W[1],G=Math.floor(Math.random()*d.length);return Object(s.useEffect)((function(){R<=30&&0!==R&&!1===V?setTimeout((function(){return A((function(e){return e-1}))}),1e3):V?(A(30),J(null)):0===R&&F(!0),R<=10&&J("scaleNumber 2s infinite")}),[V,R]),Object(s.useEffect)((function(){c(d[G])}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{children:Object(o.jsx)(b,{newWord:n,inputValue:j,setInputValue:p,time:R,disabled:V,animation:H,handleInput:function(e){13===e.charCode&&""!==j.trim()&&(!function(){if(j.trim()===n)return y((function(e){return[].concat(Object(i.a)(e),[n])})),void E((function(e){return e+1}));k((function(e){return[].concat(Object(i.a)(e),[j])}))}(),c(d[G]),p(""))},handleStart:function(){F(!V),y([]),k([]),E(0),p("")}})}),Object(o.jsx)("div",{className:"icon",children:_?Object(o.jsx)(h.a,{icon:O.b,onClick:function(){_&&(document.getElementById("results").classList.remove("resultsOpen"),document.getElementById("results").classList.add("resultsClose"),q(!_))}}):Object(o.jsx)(h.a,{icon:O.a,onClick:function(){_||(document.getElementById("results").classList.remove("resultsClose"),document.getElementById("results").classList.add("resultsOpen"),q(!_))}})}),Object(o.jsx)(m,{open:_,correctResults:v,wrongResults:S,countCorrect:I})]})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.10585554.chunk.js.map