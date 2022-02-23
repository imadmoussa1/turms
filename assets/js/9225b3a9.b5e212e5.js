"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4446],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=s,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],o={sidebar_position:2,sidebar_label:"Config"},l="Config",c={unversionedId:"config",id:"config",title:"Config",description:"Turms relies on and complies with graphql-config and searches",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/turms/docs/config",editUrl:"https://github.com/jhnnsrs/turms/edit/master/website/docs/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Config"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/turms/docs/intro"},next:{title:"Plugins",permalink:"/turms/docs/design/plugins"}},u=[{value:"Turms Config",id:"turms-config",children:[],level:3},{value:"Central Config",id:"central-config",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config"},"Config"),(0,a.kt)("p",null,"Turms relies on and complies with ",(0,a.kt)("a",{parentName:"p",href:"https://www.graphql-config.com/docs/user/user-introduction"},"graphql-config")," and searches\nyour current working dir for the graphql-config file, it currently supports the following formats:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","graphql.config.yaml"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".graphqlrc.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"projects:\n  default:\n    schema: http://api.spacex.land/graphql/\n    documents: graphql/**.graphql\n    extensions:\n      turms: # path for configuration for turms\n        out_dir: examples/api\n        stylers:\n          - type: turms.stylers.capitalize.Capitalizer\n          - type: turms.stylers.snake.SnakeNodeName\n        plugins:\n          - type: turms.plugins.enums.EnumsPlugin\n          - type: turms.plugins.inputs.InputsPlugin\n          - type: turms.plugins.fragments.FragmentsPlugin\n          - type: turms.plugins.operation.OperationsPlugin\n          - type: turms.plugins.funcs.OperationsFuncPlugin\n        processors:\n          - type: turms.processor.black.BlackProcessor\n          - type: turms.processor.isort.IsortProcessor\n        scalar_definitions:\n          uuid: str\n          timestamptz: str\n          Date: str\n")),(0,a.kt)("p",null,"By default turms requires the projects tree structure, to support multiple schemas within a same project.\nThis means you have to follow that structure (for now) to specify your configuration:"),(0,a.kt)("h3",{id:"turms-config"},"Turms Config"),(0,a.kt)("p",null,"Turms config consists about basic settings like scalar_definitions, output paths but provides sections\nfor the configuration of plugins, processors and styles (see doc) The general structure follow this pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'projects:\n  default:\n    schema: http://api.spacex.land/graphql/\n    documents: "graphql/**.graphql"\n    extensions:\n      turms: # Turms section\n      stylers: # styler section (every item is a styler, that applies its style in sucession)\n        - type: turms.stylers.capitalize.Capitalizer # the path to the styler class (as in python modules)\n      plugins: # plugin section (every item is a plugin, that generates its part of the AST tree)\n        - type: "turms.plugins.enums.EnumsPlugin" # the module path\n          skip_underscore: True # a configuration item of this specific plugin (enum)\n        - type: "turms.plugins.fragments.FragmentPlugin" # the module path\n          fragment_bases: # a configuration item of this specific plugin (fragment)\n            - pydantic.BaseModel\n      stylers: # styler section (every item is a styler, that applies its style in sucession)\n        - type: turms.stylers.capitalize.Capitalizer # the path to the styler class (as in python modules)\n')),(0,a.kt)("h2",{id:"central-config"},"Central Config"),(0,a.kt)("p",null,"As pydantic lovers, configuration is handled by pydantic models, here is an example\nof the configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'file="turms section"',file:'"turms','section"':!0},'projects:\n  default:\n    schema: # A url for intrsopection, or glob if loading locally\n    documents: # A glob of documents for the generation of queries, subs, fragments\n    extensions:\n      turms:\n        domain: #str = "default"\n        out_dir: # str = "api" the root of the generated schema\n        generated_name:  #str = "schema.py"\n        object_bases: #List[str] = ["pydantic.BaseModel"] The base class for objects\n        interface_bases: # Optional[List[str]] = None (A different base clas for interfaces. Defaults to object_bases\n        allways_resolve_interfaces: # bool = True if set to true, the abstrac abse for interfaces is part of the union\n        scalar_definitions = #{} A map of grpahql scalars and their python equivalent\n        freeze: bool = False # SHould we generate frozen (fake immutability) classes\n        additional_bases = {} # A map of graphql type and additional bases (see traits)\n\n')),(0,a.kt)("p",null,"You can (and actually have to) define python equivalents for graphql scalars that are not\npart of the standard library (str, int, bool, float). You can easily do this by providing\nscalar definitions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scalar_definitions:\n  $GRAPHQL_TYPE: path.to.your.scalar\n  DateTime: datetime.datetime\n")),(0,a.kt)("p",null,"This scalar you adhere to the pydantic Field specification and can provide validators"))}f.isMDXComponent=!0}}]);