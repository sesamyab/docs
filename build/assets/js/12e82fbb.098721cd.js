"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[294],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,f=h["".concat(c,".").concat(d)]||h[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6791:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="Oauth 2",u={unversionedId:"authentication/oauth2/oauth2",id:"authentication/oauth2/oauth2",title:"Oauth 2",description:"OAuth is an open standard to authorization. OAuth provides client applications a \u2018secure delegated access\u2019 to server resources on behalf of a resource owner. It specifies a process for resource owners to authorize third-party access to their server resources without sharing their credentials.",source:"@site/docs/authentication/oauth2/oauth2.md",sourceDirName:"authentication/oauth2",slug:"/authentication/oauth2/",permalink:"/docs/authentication/oauth2/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scopes",permalink:"/docs/authentication/scopes"},next:{title:"Implicit Grant",permalink:"/docs/authentication/oauth2/implicit-grant"}},p={},l=[{value:"Grant types",id:"grant-types",level:2},{value:"State",id:"state",level:2}],h={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oauth-2"},"Oauth 2"),(0,o.kt)("p",null,"OAuth is an open standard to authorization. OAuth provides client applications a \u2018secure delegated access\u2019 to server resources on behalf of a resource owner. It specifies a process for resource owners to authorize third-party access to their server resources without sharing their credentials."),(0,o.kt)("p",null,"A technical specification of OAuth 2.0 is described in the standard ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC 6749"),". A non-technical simple specification is given in this guide and Wikipedia."),(0,o.kt)("h2",{id:"grant-types"},"Grant types"),(0,o.kt)("p",null,"The services supports three different grant types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implicit Grant. Used for single page applications and web components."),(0,o.kt)("li",{parentName:"ul"},"Code Grant. Used for web servers, apps and integrations."),(0,o.kt)("li",{parentName:"ul"},"Client Credentials. User for services and not for requests on behalf of a user.")),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"When creating Oauth2 requests it's possiblet to pass a state to the request which serves two functions. When the user is redirected back to your app, whatever value you include as the state will also be included in the redirect. This gives your app a chance to persist data between the user being directed to the authorization server and back again, such as using the state parameter as a session key. This may be used to indicate what action in the app to perform after authorization is complete, for example, indicating which of your app\u2019s pages to redirect to after authorization."),(0,o.kt)("p",null,"The state parameter also serves as a CSRF protection mechanism if it contains a random value per request. When the user is redirected back to your app, double check that the state value matches what you set it to originally."))}d.isMDXComponent=!0}}]);