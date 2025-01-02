"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["76148"],{30475:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t=n(85893);n(67294);var l=n(12549),s=n(93470),o=n(7443);function c(){let e=(0,l.ZP)();return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h2",{children:"Global data"}),(0,t.jsx)(o.Z,{src:e,collapseDepth:3})]})}},7443:function(e,a,n){n.d(a,{Z:()=>ei});var t=n("85893"),l=n("67294");let s=e=>"boolean"==typeof e||e instanceof Boolean,o=e=>"number"==typeof e||e instanceof Number,c=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,u=e=>"string"==typeof e||e instanceof String,i=e=>Array.isArray(e),d=e=>e instanceof Object&&null!==e,_=1,m=()=>_++;function b(e){let{field:a,value:n,data:t,lastElement:s,openBracket:o,closeBracket:c,level:r,style:u,shouldExpandNode:i,clickToExpandNode:d}=e,_=(0,l.useRef)(!1),[b,p,f]=function(e){let[a,n]=(0,l.useState)(e());return[a,()=>n(e=>!e),n]}(()=>i(r,n,a));(0,l.useEffect)(()=>{_.current?f(i(r,n,a)):_.current=!0},[i]);let g=b?u.collapseIcon:u.expandIcon,h=b?"collapse JSON":"expand JSON",E=function(){let e=(0,l.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),v=r+1,k=t.length-1,N=e=>{" "===e.key&&(e.preventDefault(),p())};return(0,l.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,l.createElement)("span",{className:g,onClick:p,onKeyDown:N,role:"button",tabIndex:0,"aria-label":h,"aria-expanded":b,"aria-controls":b?E:void 0}),a&&(d?(0,l.createElement)("span",{className:u.clickableLabel,onClick:p,onKeyDown:N,role:"button",tabIndex:-1},a,":"):(0,l.createElement)("span",{className:u.label},a,":")),(0,l.createElement)("span",{className:u.punctuation},o),b?(0,l.createElement)("div",{id:E},t.map((e,a)=>(0,l.createElement)(x,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===k,level:v,shouldExpandNode:i,clickToExpandNode:d}))):(0,l.createElement)("span",{className:u.collapsedContent,onClick:p,onKeyDown:N,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":h,"aria-expanded":b}),(0,l.createElement)("span",{className:u.punctuation},c),!s&&(0,l.createElement)("span",{className:u.punctuation},","))}function p(e){let{field:a,openBracket:n,closeBracket:t,lastElement:s,style:o}=e;return(0,l.createElement)("div",{className:o.basicChildStyle,role:"listitem"},a&&(0,l.createElement)("span",{className:o.label},a,":"),(0,l.createElement)("span",{className:o.punctuation},n),(0,l.createElement)("span",{className:o.punctuation},t),!s&&(0,l.createElement)("span",{className:o.punctuation},","))}function f(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,clickToExpandNode:o,level:c}=e;return 0===Object.keys(n).length?p({field:a,openBracket:"{",closeBracket:"}",lastElement:l,style:t}):b({field:a,value:n,lastElement:l||!1,level:c,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,clickToExpandNode:o,data:Object.keys(n).map(e=>[e,n[e]])})}function g(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o,clickToExpandNode:c}=e;return 0===n.length?p({field:a,openBracket:"[",closeBracket:"]",lastElement:l,style:t}):b({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,clickToExpandNode:c,data:n.map(e=>[void 0,e])})}function h(e){let{field:a,value:n,style:t,lastElement:i}=e,d=n,_=t.otherValue;return null===n?(d="null",_=t.nullValue):void 0===n?(d="undefined",_=t.undefinedValue):u(n)?(d=t.noQuotesForStringValues?n:`"${n}"`,_=t.stringValue):s(n)?(d=n?"true":"false",_=t.booleanValue):o(n)?(d=n.toString(),_=t.numberValue):c(n)?(d=`${n.toString()}n`,_=t.numberValue):d=r(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,l.createElement)("div",{className:t.basicChildStyle,role:"listitem"},a&&(0,l.createElement)("span",{className:t.label},a,":"),(0,l.createElement)("span",{className:_},d),!i&&(0,l.createElement)("span",{className:t.punctuation},","))}function x(e){let a=e.value;return i(a)?(0,l.createElement)(g,Object.assign({},e)):d(a)&&!r(a)?(0,l.createElement)(f,Object.assign({},e)):(0,l.createElement)(h,Object.assign({},e))}var E="_2IvMF _GzYRV",v="_2bkNM",k="_1MGIk",N="_2YKJg _1MGIk _1MFti",V="_3uHL6 _3eOF8",y="_2T6PJ",j="_1Gho6",S="_vGjyY",C="_1bQdo",I="_3zQKs",F="_1xvuR",P="_oLqym _f10Tu _1MFti _1LId0",M="_2AXVT _f10Tu _1MFti _1UmXx",T="_2KJWg _1pNG9 _1MFti",D="_11RoI _GzYRV",G="_17H2C _f10Tu _1MFti _1UmXx",R="_3QHg2 _f10Tu _1MFti _1LId0",L="_3fDAz _1pNG9 _1MFti",O="_2bSDX",w="_1RQEj _2bSDX _1MFti",B="_gsbQL _3eOF8",A="_LaAZe",J="_GTKgm",K="_Chy1W",Q="_2bveF",Z="_2vRm-",X="_1prJR";let W={container:E,basicChildStyle:v,label:k,clickableLabel:N,nullValue:y,undefinedValue:j,stringValue:S,booleanValue:I,numberValue:C,otherValue:F,punctuation:V,collapseIcon:P,expandIcon:M,collapsedContent:T,noQuotesForStringValues:!1},Y=()=>!0,z=e=>{let{data:a,style:n=W,shouldExpandNode:t=Y,clickToExpandNode:s=!1}=e;return(0,l.createElement)("div",{className:n.container},(0,l.createElement)(x,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:t,clickToExpandNode:s}))},H="containerParaiso_TYa3",q="basicElementParaiso_DqvR",$="labelParaiso_l3ql",U="nullValueParaiso_Ey4X",ee="undefinedValueParaiso__T3e",ea="stringValueParaiso_T6i7",en="booleanValueParaiso__TSh",et="numberValueParaiso_JGW0",el="otherValueParaiso_nnwW",es="punctuationParaiso_knwc",eo="expandIconParaiso_fAkX",ec="collapseIconParaiso_MWEp",er="collapseContentParaiso_KH36",eu={clickableLabel:W.clickableLabel,noQuotesForStringValues:!1,container:H,basicChildStyle:q,label:$,nullValue:U,undefinedValue:ee,stringValue:ea,booleanValue:en,numberValue:et,otherValue:el,punctuation:es,collapseIcon:ec,expandIcon:eo,collapsedContent:er};function ei(e){let{src:a,collapseDepth:n}=e;return(0,t.jsx)(z,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:eu})}},93470:function(e,a,n){n.d(a,{Z:()=>i});var t=n("85893");n("67294");var l=n("28289"),s=n("64152");let o="container_tECh",c="nav_sWk6",r="navlink__gTJ";function u(e){let{to:a,children:n}=e;return(0,t.jsx)(s.Z,{className:r,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function i(e){let{children:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("html",{lang:"en"}),(0,t.jsx)("title",{children:"Docusaurus debug panel"}),(0,t.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("nav",{className:c,children:[(0,t.jsx)(u,{to:"/__docusaurus/debug",children:"Config"}),(0,t.jsx)(u,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,t.jsx)(u,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,t.jsx)(u,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,t.jsx)(u,{to:"/__docusaurus/debug/content",children:"Content"}),(0,t.jsx)(u,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,t.jsx)("main",{className:o,children:a})]})]})}}}]);