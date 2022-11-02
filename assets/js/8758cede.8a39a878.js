"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[86],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Unchecked scalars input",sidebar_position:8},o=void 0,p={unversionedId:"advanced/unchecked-scalars",id:"advanced/unchecked-scalars",title:"Unchecked scalars input",description:"GraphQL does not support input unions, hence it's not possible to support both normal inputs and unchecked scalars input at the same time like the Prisma does.",source:"@site/../docs/advanced/unchecked-scalars.md",sourceDirName:"advanced",slug:"/advanced/unchecked-scalars",permalink:"/docs/advanced/unchecked-scalars",draft:!1,editUrl:"https://github.com/nestql/prisma-crud/edit/main/docs/../docs/advanced/unchecked-scalars.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Unchecked scalars input",sidebar_position:8},sidebar:"docs",previous:{title:"Renaming field",permalink:"/docs/advanced/renaming-field"},next:{title:"Simple inputs",permalink:"/docs/advanced/simple-inputs"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL does not support input unions, hence it's not possible to support both normal inputs and unchecked scalars input at the same time like the Prisma does."),(0,a.kt)("p",null,"If you prefer simplicity over more sophisticated solutions like ",(0,a.kt)("inlineCode",{parentName:"p"},"connectOrCreate"),", you can to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"useUncheckedScalarInputs")," generator option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{4}","{4}":!0},'generator typegraphql {\n  provider                 = "typegraphql-prisma"\n  output                   = "../prisma/generated/type-graphql"\n  useUncheckedScalarInputs = true\n}\n')),(0,a.kt)("p",null,'This way there will be generate input classes with relation id fields, instead of the normal "nested" inputs for creating/updating relations, e.g.:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@TypeGraphQL.InputType({\n  isAbstract: true,\n})\nexport class PostUncheckedCreateInput {\n  @TypeGraphQL.Field(_type => String, {\n    nullable: false,\n  })\n  title!: string;\n\n  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {\n    nullable: false,\n  })\n  authorId!: number;\n\n  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {\n    nullable: true,\n  })\n  editorId?: number | undefined;\n}\n")))}u.isMDXComponent=!0}}]);