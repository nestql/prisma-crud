"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||c[d]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),l=t(6010),o=t(2389),s=t(7392),i=t(7094),u=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function f(e){var n,t;const{lazy:o,block:f,defaultValue:d,values:m,groupId:h,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,s.l)(g,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===d?d:null!=(n=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==T&&!g.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:k}=(0,i.U)(),[C,S]=(0,a.useState)(T),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=x[h];null!=e&&e!==C&&g.some((n=>n.value===e))&&S(e)}const _=e=>{const n=e.currentTarget,t=w.indexOf(n),r=g[t].value;r!==C&&(O(n),S(r),null!=h&&k(h,String(r)))},L=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=w.indexOf(e.currentTarget)+1;t=null!=(r=w[n])?r:w[0];break}case"ArrowLeft":{var a;const n=w.indexOf(e.currentTarget)-1;t=null!=(a=w[n])?a:w[w.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":f},y)},g.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>w.push(e),onKeyDown:L,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function d(e){const n=(0,o.Z)();return a.createElement(f,(0,r.Z)({key:String(n)},e))}},5711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),o=t(5162);const s={title:"Overriding plural form of model name",sidebar_label:"Custom plural form",sidebar_position:15},i=void 0,u={unversionedId:"advanced/override-plural",id:"advanced/override-plural",title:"Overriding plural form of model name",description:'In some cases, the noun used as the model name might not have a proper plural form. For example, the word "fish" is not pluralized to "fishes". In such cases, you can override the plural form by adding a plural argument to the @@TypeGraphQL.type comment attribute, e.g.:',source:"@site/../docs/advanced/override-plural.mdx",sourceDirName:"advanced",slug:"/advanced/override-plural",permalink:"/docs/advanced/override-plural",draft:!1,editUrl:"https://github.com/nestql/prisma-crud/edit/main/docs/../docs/advanced/override-plural.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Overriding plural form of model name",sidebar_label:"Custom plural form",sidebar_position:15},sidebar:"docs",previous:{title:"Prisma context key",permalink:"/docs/advanced/custom-prisma-context-key"}},p={},c=[],f={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In some cases, the noun used as the model name might not have a proper plural form. For example, the word "fish" is not pluralized to "fishes". In such cases, you can override the plural form by adding a ',(0,a.kt)("inlineCode",{parentName:"p"},"plural")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@@TypeGraphQL.type")," comment attribute, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},'// highlight-next-line\n/// @@TypeGraphQL.type(plural: "StaffMembers")\nmodel Staff {\n  id   Int    @id @default(autoincrement())\n  name String @unique\n}\n')),(0,a.kt)("p",null,"This way, the generated resolvers for ",(0,a.kt)("inlineCode",{parentName:"p"},"Staff")," model will use the plural form of ",(0,a.kt)("inlineCode",{parentName:"p"},"StaffMembers"),", so that it won't generate anymore actions named ",(0,a.kt)("inlineCode",{parentName:"p"},"findManyStaff")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"findUniqueStaff")," as it would do by default, e.g.:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"plural",label:"Overridden plural",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@TypeGraphQL.Resolver(_of => Staff)\nexport class StaffCrudResolver {\n  @TypeGraphQL.Query(_returns => [Staff], {\n    nullable: false,\n  })\n  // highlight-next-line\n  async staffMembers(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: FindManyStaffArgs,\n  ): Promise<Staff[]> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).staff.findMany({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n\n  @TypeGraphQL.Query(_returns => Staff, {\n    nullable: true,\n  })\n  // highlight-next-line\n  async staff(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: FindUniqueStaffArgs,\n  ): Promise<Staff | null> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).staff.findUnique({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"default",label:"Default",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@TypeGraphQL.Resolver(_of => Staff)\nexport class StaffCrudResolver {\n  @TypeGraphQL.Query(_returns => [Staff], {\n    nullable: false,\n  })\n  // highlight-next-line\n  async findManyStaff(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: FindManyStaffArgs,\n  ): Promise<Staff[]> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).staff.findMany({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n\n  @TypeGraphQL.Query(_returns => Staff, {\n    nullable: true,\n  })\n  // highlight-next-line\n  async findUniqueStaff(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: FindUniqueStaffArgs,\n  ): Promise<Staff | null> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).staff.findUnique({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n}\n")))))}d.isMDXComponent=!0}}]);