"use strict";(self.webpackChunksheet_uploader_docs=self.webpackChunksheet_uploader_docs||[]).push([[955],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(4996),u=["components"],c={id:"Introduction",slug:"/",sidebar_position:1},s="Introduction",l={unversionedId:"Introduction",id:"version-0.1/Introduction",isDocsHomePage:!1,title:"Introduction",description:"SheetAble is an easy to use music sheet organiser for all the music enthusiasts out there.",source:"@site/versioned_docs/version-0.1/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/0.1/",editUrl:"https://github.com/SheetAble/SheetAble-Documentations/edit/main/versioned_docs/version-0.1/introduction.mdx",tags:[],version:"0.1",sidebarPosition:1,frontMatter:{id:"Introduction",slug:"/",sidebar_position:1},sidebar:"version-0.1/tutorialSidebar",next:{title:"Installation",permalink:"/docs/0.1/Installation/installation"}},f=[],d={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"SheetAble is an easy to use music sheet organiser for all the music enthusiasts out there.\nCurrently the only client is on the web, but the goal was from the beginning on to have SheetAble available on all devices with the functionality to make notes onto your pdfs and have them stored on your home server.\nIt is still consultation if there should be a Desktop app ontop of the Website as a further client. If you'd like to share your opion on that topic or many more go ahead and join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/QnFbxyPbRj"},"Discord Server"),"."),(0,i.kt)("img",{src:(0,a.Z)("img/SheetAbleShowcase.gif"),alt:"Release",class:"showcase-img"}))}p.isMDXComponent=!0}}]);