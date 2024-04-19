"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={slug:"/config",sidebar_position:3,title:"Example Configuration"},i=void 0,l={unversionedId:"example_config",id:"example_config",title:"Example Configuration",description:"The Juno binary uses reasonable defaults and can be used without configuration.",source:"@site/docs/example_config.md",sourceDirName:".",slug:"/config",permalink:"/next/config",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/config",sidebar_position:3,title:"Example Configuration"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/next/"},next:{title:"Database Snapshots",permalink:"/next/snapshots"}},s={},p=[],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Juno binary uses reasonable defaults and can be used without configuration.\nFor basic fine-tuning, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-path")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-port")," options are usually sufficient."),(0,o.kt)("p",null,"All available options are in the YAML file below with their default values.\nProvide the config using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config <filename>")," option (Juno looks in ",(0,o.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME")," by default)."),(0,o.kt)("p",null,"Juno can also be configured using command line params by prepending ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," to the option name (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level info"),").\nCommand line params override values in the configuration file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Enable colored logs\ncolour: true\n\n# Path to the database.\n# Juno uses `$XDG_DATA_HOME/juno` by default, which is usually something like the value below on Linux.\ndb-path: /home/<user>/.local/share/juno\n\n# Websocket endpoint of the Ethereum node used to verify the L2 chain.\n# If using Infura, it looks something like `wss://mainnet.infura.io/ws/v3/your-infura-project-id`\neth-node: ""\n\n# Enables the HTTP RPC server.\nhttp: false\n# Interface on which the HTTP RPC server will listen for requests.\nhttp-host: localhost\n# Port on which the HTTP RPC server will listen for requests.\nhttp-port: 6060\n\n# The options below are similar to the HTTP RPC options above.\nws: false # Websocket RPC server\nws-host: localhost\nws-port: 6061\npprof: false\npprof-host: localhost\npprof-port: 6062\nmetrics: false\nmetrics-host: localhost\nmetrics-port: 9090\ngrpc: false\ngrpc-host: localhost\ngrpc-port: 6064\n\n# Options: debug, info, warn, error\nlog-level: info\n\n# Options: mainnet, goerli, goerli2, integration\nnetwork: mainnet\n\n# How often to fetch the pending block when synced to the head of the chain.\n# Provide a duration like 5s (five seconds) or 10m (10 minutes).\n# Disabled by default.\npending-poll-interval: 0s\n\n# Experimental p2p options; there is currently no standardized Starknet p2p testnet.\np2p: false # Enable the p2p server\np2p-addr: "" # Source address\np2p-boot-peers: "" # Boot nodes\n')))}f.isMDXComponent=!0}}]);