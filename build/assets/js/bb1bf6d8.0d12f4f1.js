"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},c="Getting Started",l={unversionedId:"access/getting-started",id:"access/getting-started",title:"Getting Started",description:"Sesamy Access makes it possible to sell single episodes, seasons and bundles of shows.",source:"@site/docs/access/getting-started.md",sourceDirName:"access",slug:"/access/getting-started",permalink:"/docs/access/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Indexing",permalink:"/docs/news-widget/indexing/"},next:{title:"API",permalink:"/docs/access/api"}},u={},d=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How does the customer buy the product?",id:"how-does-the-customer-buy-the-product",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Sesamy Access makes it possible to sell single episodes, seasons and bundles of shows."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Access fetches content from one or many rss feeds and creates unique user feeds that contains all the content that a user has access to. The publisher can define the different products and the level of access directly in the podcast hosting services they are already using, so there are no extra work required with uploading the files to a separate service and keeping them in sync."),(0,i.kt)("h2",{id:"how-does-the-customer-buy-the-product"},"How does the customer buy the product?"),(0,i.kt)("p",null,"As RSS is a open standard with many different implementations, much like html, there are many different ways solve thing depending on which client the user is using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The most effective way is to mention in the podcast that they can purchase the episode or become a member at the publisher website, where you can user our widget to make the integration easy."),(0,i.kt)("li",{parentName:"ul"},"By adding a payment link in the feed some podcasts client will show a button, typically labeled support, which can point to a checkout. See ",(0,i.kt)("a",{parentName:"li",href:"https://indieweb.org/payment"},"this link")," for more information."),(0,i.kt)("li",{parentName:"ul"},"By adding a link element in the feed, which some clients will show."),(0,i.kt)("li",{parentName:"ul"},"By adding a html link in the description of the feed and the episodes.")),(0,i.kt)("p",null,"The changes to the feed above can typically be done with your existing podcast host."))}h.isMDXComponent=!0}}]);