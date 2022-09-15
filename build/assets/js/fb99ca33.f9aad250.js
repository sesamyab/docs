"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[515],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:4},l="Unlocking Content",c={unversionedId:"news-widget/unlocking-content",id:"news-widget/unlocking-content",title:"Unlocking Content",description:"When a user has purchased a post the unlocked content can be displayed using the sesamy-content-container component. The content can either be embedded directly on the page or fetched from the server using a signed url.",source:"@site/docs/news-widget/unlocking-content.md",sourceDirName:"news-widget",slug:"/news-widget/unlocking-content",permalink:"/docs/news-widget/unlocking-content",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Passes",permalink:"/docs/news-widget/passes"},next:{title:"sesamy-login",permalink:"/docs/news-widget/web-components/sesamy-login"}},p={},u=[{value:"Signed link validation",id:"signed-link-validation",level:2},{value:"Validation of the signature",id:"validation-of-the-signature",level:2},{value:"Signed link with pass",id:"signed-link-with-pass",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unlocking-content"},"Unlocking Content"),(0,a.kt)("p",null,"When a user has purchased a post the unlocked content can be displayed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sesamy-content-container")," component. The content can either be embedded directly on the page or fetched from the server using a signed url."),(0,a.kt)("p",null,"The signed url's can for instance be shared in a order confirmation email and renders a page without any further authentication. To avoid that the signed links are being distributed that have a limited expiery."),(0,a.kt)("p",null,"The signed url's requires that the cms hosting the content can validate the signature and serve the locked content for valid requests."),(0,a.kt)("h2",{id:"signed-link-validation"},"Signed link validation"),(0,a.kt)("p",null,"The links consists of four parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Url of the content"),(0,a.kt)("li",{parentName:"ul"},"Optional information, such as the publishers product id"),(0,a.kt)("li",{parentName:"ul"},"Expire timestamp"),(0,a.kt)("li",{parentName:"ul"},"Signature of the previous parts of the url")),(0,a.kt)("p",null,"This is a sample of a signed link:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://test.example.com/test-article?se=TIMESTAMP&si=PUBLISHER_PRODUCT_ID&ss=RSA_256_HASH")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"https://test.example.com/test-article")," is the url of purchased article, ",(0,a.kt)("inlineCode",{parentName:"p"},"se=1656098737770")," is the expire of the url and ",(0,a.kt)("inlineCode",{parentName:"p"},"ss=...")," is the signature."),(0,a.kt)("p",null,"If a publisher provided a Publihser Content ID in the metatags this ID will also be passed as a ",(0,a.kt)("inlineCode",{parentName:"p"},"sp")," querystring parameter in the signed link:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://test.example.com/test-article?sp=PUBLISHER_CONTENT_ID&se=TIMESTAMP&si=PUBLISHER_PRODUCT_ID&ss=RSA_256_HASH")),(0,a.kt)("h2",{id:"validation-of-the-signature"},"Validation of the signature"),(0,a.kt)("p",null,"The urls are signed with a ",(0,a.kt)("inlineCode",{parentName:"p"},"RSA256")," asymetric key that can be verified with the public Sesamy key. The public key is published in a jwks-format here: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://assets.sesamy.com/vault-jwks.json")),(0,a.kt)("p",null,"This is an example of how to verify the signed url in node-js with typescript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { verify, createPublicKey, KeyObject } from 'crypto';\nimport jwkToPem from 'jwk-to-pem';\n\nasync function fetchPublicKey() {\nconst response = await fetch('https://assets.sesamy.com/vault-jwks.json');\n\n    if (!response.ok) {\n        throw new Error('Failed to fetch public key');\n    }\n\n    return response.json();\n\n}\n\nasync function getPublicKey() {\nconst jwks = await fetchPublicKey();\n\n    const pemKey = jwkToPem(jwks);\n    return createPublicKey(pemKey);\n\n}\n\nasync function verifySignature(signedUrl: string) {\nconst publicKey = await getPublicKey();\n\n    const [url, signature] = signedUrl.split('&ss=');\n    if (!verify('RSA-SHA256', Buffer.from(url), publicKey, Buffer.from(signature, 'base64'))) {\n        throw new Error('Signature not valid');\n    }\n\n}\n\n")),(0,a.kt)("h3",{id:"signed-link-with-pass"},"Signed link with pass"),(0,a.kt)("p",null,"If an article is part of a pass (for instance an subscription) the signed link will be for the pass rather than the article. This way a signed link can be reused for all articles within a subscription until the link is expired. In this case the backend need to validate that article is part of the pass before serving the content."),(0,a.kt)("p",null,"The signed link is passed to he backend as a pass query string (the signature is shortened for brevity):\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://test.example.com/test-article?pass=https%3A%2F%2Ftest.example.com%2Fsubscription%3Fse%3D1656098737770%26si%3D113%26ss%3DPTKUZ...")))}h.isMDXComponent=!0}}]);