"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7495],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=a(t),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,u(u({ref:n},c),{},{components:t})):r.createElement(f,u({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,u=new Array(i);u[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,u[1]=o;for(var a=2;a<i;a++)u[a]=t[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87076:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return d}});var r=t(87462),s=t(63366),i=(t(67294),t(3905)),u=["components"],o={sidebar_position:1,sidebar_label:"Enums"},l="Enums",a={unversionedId:"plugins/enums",id:"plugins/enums",title:"Enums",description:"Enums generates python enums from Graphql Enums",source:"@site/docs/plugins/enums.md",sourceDirName:"plugins",slug:"/plugins/enums",permalink:"/turms/docs/plugins/enums",editUrl:"https://github.com/jhnnsrs/turms/edit/master/website/docs/plugins/enums.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Enums"},sidebar:"tutorialSidebar",previous:{title:"Traits",permalink:"/turms/docs/design/traits"},next:{title:"InputType",permalink:"/turms/docs/plugins/inputtype"}},c=[{value:"Default Configuration",id:"default-configuration",children:[{value:"Code Example",id:"code-example",children:[],level:4}],level:3}],p={toc:c};function d(e){var n=e.components,t=(0,s.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enums"},"Enums"),(0,i.kt)("p",null,"Enums generates python enums from Graphql Enums"),(0,i.kt)("h3",{id:"default-configuration"},"Default Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'project:\n  default:\n    schema: ...\n    extensions:\n      turms:\n        plugins:\n          - type: turms.plugins.enums.EnumsPlugin\n            skip_underscore: True\n            prepend: ""\n            append: ""\n')),(0,i.kt)("h4",{id:"code-example"},"Code Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Order_by(str, Enum):\n    """column ordering options"""\n\n    asc = "asc"\n    "in the ascending order, nulls last"\n    asc_nulls_first = "asc_nulls_first"\n    "in the ascending order, nulls first"\n    asc_nulls_last = "asc_nulls_last"\n    "in the ascending order, nulls last"\n    desc = "desc"\n    "in the descending order, nulls first"\n    desc_nulls_first = "desc_nulls_first"\n    "in the descending order, nulls first"\n    desc_nulls_last = "desc_nulls_last"\n    "in the descending order, nulls last"\n')))}d.isMDXComponent=!0}}]);