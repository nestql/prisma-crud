"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||p;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const p={},i="Examples",o={unversionedId:"examples",id:"examples",title:"Examples",description:"In the GitHub repository you can find a few examples of using the TypeGraphQL Prisma integration:",source:"@site/../docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/docs/examples",draft:!1,editUrl:"https://github.com/nestql/prisma-crud/edit/main/docs/../docs/examples.md",tags:[],version:"current",frontMatter:{}},s={},l=[],m={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"examples"},"Examples"),(0,n.kt)("p",null,"In the GitHub repository you can find a few examples of using the TypeGraphQL Prisma integration:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Prototyping")," - the workflow of using the generator that creates TypeGraphQL artifacts from Prisma schema and creating a GraphQL schema with all CRUD operation"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/nestql/prisma-crud/tree/main/examples/1-prototyping"},"https://github.com/nestql/prisma-crud/tree/main/examples/1-prototyping"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Basic")," - demonstrating how you can create custom methods or custom fields"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/nestql/prisma-crud/tree/main/examples/2-basic"},"https://github.com/nestql/prisma-crud/tree/main/examples/2-basic"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Picking Actions")," - demonstrating how you can choose certain Prisma actions to be exposed in the GraphQL schema"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/nestql/prisma-crud/tree/main/examples/3-picking-actions"},"https://github.com/nestql/prisma-crud/tree/main/examples/3-picking-actions"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Nest JS")," - showcase of combining ",(0,n.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"typegraphql-nestjs")," to expose TypeGraphQL-Prisma2 artifacts as GraphQL schema using Nest JS"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/nestql/prisma-crud/tree/main/examples/4-nest-js"},"https://github.com/nestql/prisma-crud/tree/main/examples/4-nest-js")))),(0,n.kt)("p",null,"To run some example, simply go to the subdirectory, install the dependencies (",(0,n.kt)("inlineCode",{parentName:"p"},"npm i"),") and then start the server (",(0,n.kt)("inlineCode",{parentName:"p"},"npm start"),")."),(0,n.kt)("p",null,"Each subdirectory contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"examples.gql")," file with a predefined GraphQL queries that you can use in GraphQL Playground (",(0,n.kt)("a",{parentName:"p",href:"http://localhost:4000"},(0,n.kt)("inlineCode",{parentName:"a"},"http://localhost:4000")),") and play with them by modifying it's shape and data."))}c.isMDXComponent=!0}}]);