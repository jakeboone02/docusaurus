"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["62898"],{61873:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(85893);a(67294);var n=a(90496),r=a(57335),l=a(55951),i=a(88715),c=a(69086),u=a(69879),o=a(57922);function g(e){let{title:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.d,{title:t}),(0,s.jsx)(u.Z,{tag:"doc_tags_list"})]})}function d(e){let{tags:t,title:a}=e;return(0,s.jsx)(r.FG,{className:(0,n.Z)(l.k.page.docsTagsListPage),children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,s.jsx)(o.Z,{as:"h1",children:a}),(0,s.jsx)(c.Z,{tags:t})]})})})})}function h(e){let t=(0,i.M)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{...e,title:t}),(0,s.jsx)(d,{...e,title:t})]})}},63479:function(e,t,a){a.d(t,{Z:()=>i});var s=a("85893");a("67294");var n=a("90496"),r=a("35363");let l={tag:"tag_Nd8t",tagRegular:"tagRegular_TiLs",tagWithCount:"tagWithCount_AQg7"};function i(e){let{permalink:t,label:a,count:i,description:c}=e;return(0,s.jsxs)(r.Z,{href:t,title:c,className:(0,n.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,s.jsx)("span",{children:i})]})}},69086:function(e,t,a){a.d(t,{Z:()=>c});var s=a("85893");a("67294");var n=a("88715"),r=a("63479"),l=a("57922");function i(e){let{letterEntry:t}=e;return(0,s.jsxs)("article",{children:[(0,s.jsx)(l.Z,{as:"h2",id:t.letter,children:t.letter}),(0,s.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,s.jsx)("li",{className:"tag_SyQ5",children:(0,s.jsx)(r.Z,{...e})},e.permalink))}),(0,s.jsx)("hr",{})]})}function c(e){let{tags:t}=e,a=(0,n.P)(t);return(0,s.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,s.jsx)(i,{letterEntry:e},e.letter))})}},88715:function(e,t,a){a.d(t,{M:function(){return n},P:function(){return r}});var s=a(77827);let n=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}}}]);