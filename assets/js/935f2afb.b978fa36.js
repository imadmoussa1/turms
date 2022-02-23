"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/turms/docs/intro","docId":"intro"},{"type":"link","label":"Config","href":"/turms/docs/config","docId":"config"},{"type":"category","label":"Design","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Plugins","href":"/turms/docs/design/plugins","docId":"design/plugins"},{"type":"link","label":"Processors","href":"/turms/docs/design/processors","docId":"design/processors"},{"type":"link","label":"Stylers","href":"/turms/docs/design/stylers","docId":"design/stylers"},{"type":"link","label":"Traits","href":"/turms/docs/design/traits","docId":"design/traits"}]},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Enums","href":"/turms/docs/plugins/enums","docId":"plugins/enums"},{"type":"link","label":"InputType","href":"/turms/docs/plugins/inputtype","docId":"plugins/inputtype"},{"type":"link","label":"Fragments","href":"/turms/docs/plugins/fragments","docId":"plugins/fragments"},{"type":"link","label":"Operations","href":"/turms/docs/plugins/operations","docId":"plugins/operations"},{"type":"link","label":"Operations Funcs","href":"/turms/docs/plugins/operationsfuncs","docId":"plugins/operationsfuncs"}]},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"config","href":"/turms/docs/reference/config","docId":"reference/config"},{"type":"link","label":"console","href":"/turms/docs/reference/console","docId":"reference/console"},{"type":"link","label":"errors","href":"/turms/docs/reference/errors","docId":"reference/errors"},{"type":"link","label":"globals","href":"/turms/docs/reference/globals","docId":"reference/globals"},{"type":"link","label":"helpers","href":"/turms/docs/reference/helpers","docId":"reference/helpers"},{"type":"link","label":"registry","href":"/turms/docs/reference/registry","docId":"reference/registry"},{"type":"link","label":"run","href":"/turms/docs/reference/run","docId":"reference/run"},{"type":"link","label":"utils","href":"/turms/docs/reference/utils","docId":"reference/utils"},{"type":"category","label":"cli","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"gen","href":"/turms/docs/reference/cli/gen","docId":"reference/cli/gen"},{"type":"link","label":"main","href":"/turms/docs/reference/cli/main","docId":"reference/cli/main"},{"type":"link","label":"watch","href":"/turms/docs/reference/cli/watch","docId":"reference/cli/watch"}]},{"type":"category","label":"plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"base","href":"/turms/docs/reference/plugins/base","docId":"reference/plugins/base"},{"type":"link","label":"enums","href":"/turms/docs/reference/plugins/enums","docId":"reference/plugins/enums"},{"type":"link","label":"fragments","href":"/turms/docs/reference/plugins/fragments","docId":"reference/plugins/fragments"},{"type":"link","label":"funcs","href":"/turms/docs/reference/plugins/funcs","docId":"reference/plugins/funcs"},{"type":"link","label":"inputs","href":"/turms/docs/reference/plugins/inputs","docId":"reference/plugins/inputs"},{"type":"link","label":"operation","href":"/turms/docs/reference/plugins/operation","docId":"reference/plugins/operation"}]},{"type":"category","label":"processor","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"base","href":"/turms/docs/reference/processor/base","docId":"reference/processor/base"},{"type":"link","label":"black","href":"/turms/docs/reference/processor/black","docId":"reference/processor/black"},{"type":"link","label":"isort","href":"/turms/docs/reference/processor/isort","docId":"reference/processor/isort"}]},{"type":"category","label":"stylers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"appender","href":"/turms/docs/reference/stylers/appender","docId":"reference/stylers/appender"},{"type":"link","label":"base","href":"/turms/docs/reference/stylers/base","docId":"reference/stylers/base"},{"type":"link","label":"capitalize","href":"/turms/docs/reference/stylers/capitalize","docId":"reference/stylers/capitalize"},{"type":"link","label":"snake","href":"/turms/docs/reference/stylers/snake","docId":"reference/stylers/snake"}]},{"type":"category","label":"types","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"object","href":"/turms/docs/reference/types/object","docId":"reference/types/object"},{"type":"link","label":"operation","href":"/turms/docs/reference/types/operation","docId":"reference/types/operation"},{"type":"link","label":"scalar","href":"/turms/docs/reference/types/scalar","docId":"reference/types/scalar"},{"type":"link","label":"utils","href":"/turms/docs/reference/types/utils","docId":"reference/types/utils"}]}]},{"type":"link","label":"Turms \u2764\ufe0f Rath","href":"/turms/docs/turms","docId":"turms"}]},"docs":{"config":{"id":"config","title":"Config","description":"Turms relies on and complies with graphql-config and searches","sidebar":"tutorialSidebar"},"design/plugins":{"id":"design/plugins","title":"Plugins","description":"Plugins are the heart of turms. They are generating the actual","sidebar":"tutorialSidebar"},"design/processors":{"id":"design/processors","title":"Processors","description":"Processors sit at the end of the processing pipeline and are responsible for performaing string","sidebar":"tutorialSidebar"},"design/stylers":{"id":"design/stylers","title":"Stylers","description":"Stylers apply specific code styles to your code. e.g snakecasing field names, capitalizing","sidebar":"tutorialSidebar"},"design/traits":{"id":"design/traits","title":"traits","description":"Traits","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Quick Start","description":"Let\'s discover Turms in less than 5 minutes.","sidebar":"tutorialSidebar"},"plugins/enums":{"id":"plugins/enums","title":"Enums","description":"Enums generates python enums from Graphql Enums","sidebar":"tutorialSidebar"},"plugins/fragments":{"id":"plugins/fragments","title":"Fragments","description":"Enums generates python objects from Graphql Fragments","sidebar":"tutorialSidebar"},"plugins/inputtype":{"id":"plugins/inputtype","title":"Enums","description":"Enums generates python objects from Graphql InputTypes","sidebar":"tutorialSidebar"},"plugins/operations":{"id":"plugins/operations","title":"Operations","description":"Operations generates python wrappers for graphql operations (Subscription, Mutation, Query)","sidebar":"tutorialSidebar"},"plugins/operationsfuncs":{"id":"plugins/operationsfuncs","title":"Operations Funcs","description":"Operations Funcs generated fully typed python functions that can call other functions (for example your GQL Clients execute function) and returns the typed response.","sidebar":"tutorialSidebar"},"reference/cli/gen":{"id":"reference/cli/gen","title":"cli.gen","description":"","sidebar":"tutorialSidebar"},"reference/cli/main":{"id":"reference/cli/main","title":"cli.main","description":"","sidebar":"tutorialSidebar"},"reference/cli/watch":{"id":"reference/cli/watch","title":"cli.watch","description":"","sidebar":"tutorialSidebar"},"reference/config":{"id":"reference/config","title":"config","description":"","sidebar":"tutorialSidebar"},"reference/console":{"id":"reference/console","title":"console","description":"","sidebar":"tutorialSidebar"},"reference/errors":{"id":"reference/errors","title":"errors","description":"","sidebar":"tutorialSidebar"},"reference/globals":{"id":"reference/globals","title":"globals","description":"","sidebar":"tutorialSidebar"},"reference/helpers":{"id":"reference/helpers","title":"helpers","description":"import\\\\_string","sidebar":"tutorialSidebar"},"reference/plugins/base":{"id":"reference/plugins/base","title":"plugins.base","description":"Plugin Objects","sidebar":"tutorialSidebar"},"reference/plugins/enums":{"id":"reference/plugins/enums","title":"plugins.enums","description":"","sidebar":"tutorialSidebar"},"reference/plugins/fragments":{"id":"reference/plugins/fragments","title":"plugins.fragments","description":"","sidebar":"tutorialSidebar"},"reference/plugins/funcs":{"id":"reference/plugins/funcs","title":"plugins.funcs","description":"","sidebar":"tutorialSidebar"},"reference/plugins/inputs":{"id":"reference/plugins/inputs","title":"plugins.inputs","description":"","sidebar":"tutorialSidebar"},"reference/plugins/operation":{"id":"reference/plugins/operation","title":"plugins.operation","description":"","sidebar":"tutorialSidebar"},"reference/processor/base":{"id":"reference/processor/base","title":"processor.base","description":"","sidebar":"tutorialSidebar"},"reference/processor/black":{"id":"reference/processor/black","title":"processor.black","description":"","sidebar":"tutorialSidebar"},"reference/processor/isort":{"id":"reference/processor/isort","title":"processor.isort","description":"","sidebar":"tutorialSidebar"},"reference/registry":{"id":"reference/registry","title":"registry","description":"","sidebar":"tutorialSidebar"},"reference/run":{"id":"reference/run","title":"run","description":"","sidebar":"tutorialSidebar"},"reference/stylers/appender":{"id":"reference/stylers/appender","title":"stylers.appender","description":"","sidebar":"tutorialSidebar"},"reference/stylers/base":{"id":"reference/stylers/base","title":"stylers.base","description":"","sidebar":"tutorialSidebar"},"reference/stylers/capitalize":{"id":"reference/stylers/capitalize","title":"stylers.capitalize","description":"","sidebar":"tutorialSidebar"},"reference/stylers/snake":{"id":"reference/stylers/snake","title":"stylers.snake","description":"","sidebar":"tutorialSidebar"},"reference/types/object":{"id":"reference/types/object","title":"types.object","description":"GraphQLObject Objects","sidebar":"tutorialSidebar"},"reference/types/operation":{"id":"reference/types/operation","title":"types.operation","description":"OperationMeta Objects","sidebar":"tutorialSidebar"},"reference/types/scalar":{"id":"reference/types/scalar","title":"types.scalar","description":"","sidebar":"tutorialSidebar"},"reference/types/utils":{"id":"reference/types/utils","title":"types.utils","description":"clean\\\\_dict","sidebar":"tutorialSidebar"},"reference/utils":{"id":"reference/utils","title":"utils","description":"","sidebar":"tutorialSidebar"},"turms":{"id":"turms","title":"Turms \u2764\ufe0f Rath","description":"What is raths?","sidebar":"tutorialSidebar"}}}')}}]);