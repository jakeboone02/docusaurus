"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["12837"],{98171:function(e,s,t){t.d(s,{Z:()=>n});let n=t.p+"assets/images/social-card-8ca15c1adaeb77ca302178575136a0b6.png"},93837:function(e,s,t){t.d(s,{Z:()=>n});let n=t.p+"assets/images/social-card-8ca15c1adaeb77ca302178575136a0b6.png"},55665:function(e,s,t){t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var n=t(3813),a=t(85893),r=t(80980);t(14522),t(51118),t(39468);let i={title:"Docusaurus 3.2",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-03-29T00:00:00.000Z")},o=void 0,l={image:t(98171).Z,authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Faster builds",id:"faster-builds",level:3},{value:"Faster Dev Server",id:"faster-dev-server",level:3},{value:"MDX partials table-of-contents",id:"mdx-partials-table-of-contents",level:3},{value:"Blog improvements",id:"blog-improvements",level:3},{value:"Sitemap lastmod",id:"sitemap-lastmod",level:3},{value:"Other changes",id:"other-changes",level:2}];function d(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["We are happy to announce ",(0,a.jsx)(s.strong,{children:"Docusaurus 3.2"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The upgrade should be easy: as explained in our ",(0,a.jsx)(s.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,a.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Docusaurus blog post social card",src:t(93837).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,a.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,a.jsx)(s.h3,{id:"faster-builds",children:"Faster builds"}),"\n",(0,a.jsx)(s.p,{children:"We worked hard to reduce the time it takes to build a Docusaurus site in production mode."}),"\n",(0,a.jsx)(s.p,{children:"Between v3.1.0 and v3.2.0, several changes have been made, leading to significantly faster production builds for many sites."}),"\n",(0,a.jsxs)(s.p,{children:["Let's take an example. Our benchmark on the ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/react-native-website/pull/4072",children:"React Native website upgrading to v3.2"})," reports the following results:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uD83D\uDD25 Cold builds: 95s \u27A1\uFE0F 66s (~30% faster)"}),"\n",(0,a.jsx)(s.li,{children:"\uD83D\uDD25 Incremental builds: 55s \u27A1\uFE0F 22s (~60% faster)"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The results will vary depending on your site's topology and the options you turned on, but we expect the largest sites will see the most significant improvements."}),"\n",(0,a.jsxs)(s.p,{children:["Note that this is only the beginning, and Docusaurus performance can still be significantly improved, notably the bundling time and the memory consumption. Track our ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/4765",children:"performance issue"})," for upcoming improvements."]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"What is the difference between a cold build and an incremental build?"}),(0,a.jsxs)(s.p,{children:["A cold build is when the Docusaurus caches are empty, generally after running ",(0,a.jsx)(s.code,{children:"docusaurus clear"}),"."]}),(0,a.jsxs)(s.p,{children:["An incremental build happens when you run another time the ",(0,a.jsx)(s.code,{children:"docusaurus build"}),' command. Docusaurus automatically tries to "re-use" computations from former builds to make subsequent builds faster. In practice it\'s based on ',(0,a.jsx)(s.a,{href:"https://webpack.js.org/guides/build-performance/#persistent-cache",children:"Webpack persistent caching"}),". To enable incremental builds on your CI server, you can persist the ",(0,a.jsx)(s.code,{children:"node_modules/.cache"})," folder across builds."]})]}),"\n",(0,a.jsx)(s.h3,{id:"faster-dev-server",children:"Faster Dev Server"}),"\n",(0,a.jsx)(s.p,{children:"We also worked on improving the performance of the dev server, so that you can get a faster feedback when editing Markdown/MDX files."}),"\n",(0,a.jsx)(s.p,{children:"The way we initially implemented content reloading wasn't great. For example, editing a blog post file would also trigger a useless reload of the unrelated docs plugin. From now on, when editing a plugin's content, only that plugin will reload. It's hard to measure precisely the impact of this change, but I estimate edits should appear in your browser at least 50% faster \uD83D\uDD25."}),"\n",(0,a.jsx)(s.p,{children:"We plan to keep improving the speed of our dev server, with even more granular hot reloads, ensuring we don't run useless computations that would always keep giving the same result."}),"\n",(0,a.jsx)(s.h3,{id:"mdx-partials-table-of-contents",children:"MDX partials table-of-contents"}),"\n",(0,a.jsxs)(s.p,{children:["With ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9684",children:"#9684"}),", Docusaurus is now able to render headings coming from an imported partial into the table-of-contents."]}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus and MDX allows you to ",(0,a.jsx)(s.a,{href:"/docs/markdown-features/react#importing-markdown",children:"import one Markdown file into another"}),'. We usually call the imported Markdown file a "partial", and use the ',(0,a.jsx)(s.code,{children:"_"})," prefix so that this file does not lead to the creation of a new page."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",metastring:'title="myDoc.mdx"',children:"# My Doc\n\n## Doc heading\n\nContent is imported from another MDX file:\n\nimport ImportedDoc from './\\_importedDoc.mdx';\n\n<ImportedDoc />\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",metastring:'title="_myPartial.mdx"',children:"## Partial heading\n\nSome paragraph\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Previously, the heading ",(0,a.jsx)(s.code,{children:"Partial heading"})," did not appear in the table-of-contents, but now it will!"]}),"\n",(0,a.jsx)(s.h3,{id:"blog-improvements",children:"Blog improvements"}),"\n",(0,a.jsx)(s.p,{children:"We improved the blog plugin with several new options to make it even more powerful and flexible:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9912",children:"#9912"}),": you can now display the last update time and author of a blog post, a feature the docs plugin already had."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9886",children:"#9886"}),": a new ",(0,a.jsx)(s.code,{children:"processBlogPosts"})," option allow you to filter/transform/sort blog posts."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9838",children:"#9838"}),": a new ",(0,a.jsx)(s.code,{children:"pageBasePath"})," option allows you to customize the blog pagination URL segment (",(0,a.jsx)(s.code,{children:"/blog/page/2"}),")"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"sitemap-lastmod",children:"Sitemap lastmod"}),"\n",(0,a.jsxs)(s.p,{children:["With ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9954",children:"#9954"}),", the sitemap plugin has a new ",(0,a.jsx)(s.code,{children:"lastmod"})," option that can now emit a ",(0,a.jsx)(s.code,{children:"<lastmod>"})," tag on the XML. The value is read from the Git history by default, but can be overridden with docs and blog ",(0,a.jsx)(s.code,{children:"last_update"})," front matter."]}),"\n",(0,a.jsxs)(s.p,{children:["We also made it possible to opt-out of emitting ",(0,a.jsx)(s.code,{children:"<priority>"})," and ",(0,a.jsx)(s.code,{children:"<frequency>"})," tags, which are generally ignored by crawlers (notably ",(0,a.jsx)(s.a,{href:"https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping",children:"Google"}),")."]}),"\n",(0,a.jsx)(s.p,{children:"We recommend using the following sitemap plugin config, that will become the default in Docusaurus V4:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"{\n  lastmod: 'date',\n  priority: null,\n  changefreq: null,\n}\n"})}),"\n",(0,a.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9687",children:"#9687"}),": new Vercel Analytics plugin"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9681",children:"#9681"})," and ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9442",children:"#9442"}),": ",(0,a.jsx)(s.code,{children:"docusaurus swizzle"})," and ",(0,a.jsx)(s.code,{children:"create-docusaurus"})," CLIs now ask users if they prefer to use TypeScript"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9928",children:"#9928"}),": new Icelandic translation"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9931",children:"#9928"}),": new ",(0,a.jsx)(s.code,{children:"allContentLoaded"})," plugin lifecycle (experimental)"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Check the ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"/changelog/3.2.0",children:"3.2.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},51118:function(e,s,t){t.d(s,{Z:()=>r});var n=t(85893);t(67294);var a=t(14522);function r(e){let{url:s}=e;return(0,n.jsx)("div",{style:{padding:10},children:(0,n.jsx)(a.Z,{url:s,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,n.jsx)("iframe",{src:s,title:s,style:{display:"block",width:"100%",height:300}})})})}},14522:function(e,s,t){t.d(s,{Z:()=>o});var n=t(85893);t(67294);var a=t(90496);let r="dot_giz1",i="bar_rrRL";function o(e){let{children:s,minHeight:t,url:o="http://localhost:3000",style:l,bodyStyle:c}=e;return(0,n.jsxs)("div",{className:"browserWindow_my1Q",style:{...l,minHeight:t},children:[(0,n.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,n.jsxs)("div",{className:"buttons_uHc7",children:[(0,n.jsx)("span",{className:r,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:r,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:r,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,a.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:o}),(0,n.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:i}),(0,n.jsx)("span",{className:i}),(0,n.jsx)("span",{className:i})]})})]}),(0,n.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:s})]})}},39468:function(e,s,t){t.d(s,{Z:()=>r});var n=t(85893),a=t(67294);function r(e){let{children:s="Boom!",message:t="Boom!\nSomething bad happened, but you can try again!",cause:r}=e,[i,o]=(0,a.useState)(!1);if(i)throw Error(t,{cause:r?Error(r):void 0});return(0,n.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>o(!0),children:s})}},80980:function(e,s,t){t.d(s,{Z:()=>o,a:()=>i});var n=t(67294);let a={},r=n.createContext(a);function i(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}},3813:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.2","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.2/index.mdx","source":"@site/blog/releases/3.2/index.mdx","title":"Docusaurus 3.2","description":"We are happy to announce Docusaurus 3.2.","date":"2024-03-29T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":3.475,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.2","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-03-29T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1740561303000,"lastUpdatedBy":"\u30DE\u30EB\u30B3\u30E1","prevItem":{"title":"Docusaurus 3.3","permalink":"/blog/releases/3.3"},"nextItem":{"title":"Docusaurus 3.1","permalink":"/blog/releases/3.1"}}')}}]);