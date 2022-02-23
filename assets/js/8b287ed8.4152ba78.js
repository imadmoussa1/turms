"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3838],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26162:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],c={sidebar_position:1,sidebar_label:"Processors"},a="Processors",l={unversionedId:"design/processors",id:"design/processors",title:"Processors",description:"Processors sit at the end of the processing pipeline and are responsible for performaing string",source:"@site/docs/design/processors.md",sourceDirName:"design",slug:"/design/processors",permalink:"/turms/docs/design/processors",editUrl:"https://github.com/jhnnsrs/turms/edit/master/website/docs/design/processors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Processors"},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/turms/docs/design/plugins"},next:{title:"Stylers",permalink:"/turms/docs/design/stylers"}},p=[{value:"Included Processors",id:"included-processors",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"processors"},"Processors"),(0,s.kt)("p",null,"Processors sit at the end of the processing pipeline and are responsible for performaing string\noperations on the generated code."),(0,s.kt)("h2",{id:"included-processors"},"Included Processors"),(0,s.kt)("p",null,"Turms comes included with two processors that rely on external dependencies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Black")," Applys the black codestyle"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ISort")," Sort the imports according to isort")))}d.isMDXComponent=!0}}]);