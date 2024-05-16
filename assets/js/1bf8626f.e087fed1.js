"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={slug:"/config",sidebar_position:3,title:"Example Configuration"},i=void 0,s={unversionedId:"example_config",id:"version-0.8.0/example_config",title:"Example Configuration",description:"The Juno binary uses reasonable defaults and can be used without configuration.",source:"@site/versioned_docs/version-0.8.0/example_config.md",sourceDirName:".",slug:"/config",permalink:"/0.8.0/config",draft:!1,tags:[],version:"0.8.0",sidebarPosition:3,frontMatter:{slug:"/config",sidebar_position:3,title:"Example Configuration"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/0.8.0/"},next:{title:"Database Snapshots",permalink:"/0.8.0/snapshots"}},l={},p=[],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Juno binary uses reasonable defaults and can be used without configuration.\nFor basic fine-tuning, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--db-path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-port")," options are usually sufficient."),(0,r.kt)("p",null,"All available options are in the YAML file below with their default values.\nProvide the config using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--config <filename>")," option (Juno looks in ",(0,r.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME")," by default)."),(0,r.kt)("p",null,"Juno can also be configured using command line params by prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," to the option name (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"--log-level info"),").\nCommand line params override values in the configuration file. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Enable colored logs\ncolour: true\n\n# Path to the database.\n# Juno uses `$XDG_DATA_HOME/juno` by default, which is usually something like the value below on Linux.\ndb-path: /home/<user>/.local/share/juno\n\n# Websocket endpoint of the Ethereum node used to verify the L2 chain.\n# If using Infura, it looks something like `wss://mainnet.infura.io/ws/v3/your-infura-project-id`\neth-node: ""\n\n# Enables the HTTP RPC server.\nhttp: false\n# Interface on which the HTTP RPC server will listen for requests.\nhttp-host: localhost\n# Port on which the HTTP RPC server will listen for requests.\nhttp-port: 6060\n\n# The options below are similar to the HTTP RPC options above.\nws: false # Websocket RPC server\nws-host: localhost\nws-port: 6061\npprof: false\npprof-host: localhost\npprof-port: 6062\nmetrics: false\nmetrics-host: localhost\nmetrics-port: 9090\ngrpc: false\ngrpc-host: localhost\ngrpc-port: 6064\n\n# Options: debug, info, warn, error\nlog-level: info\n\n# Options: mainnet, goerli, goerli2, integration, sepolia, sepolia-integration\nnetwork: mainnet\n\n# How often to fetch the pending block when synced to the head of the chain.\n# Provide a duration like 5s (five seconds) or 10m (10 minutes).\n# Disabled by default.\npending-poll-interval: 0s\n\n# Experimental p2p options; there is currently no standardized Starknet p2p testnet.\np2p: false # Enable the p2p server\np2p-addr: "" # Source address\np2p-boot-peers: "" # Boot nodes\n\n# Determines the memory allocated for database caching (in MB).\ndb-cache-size: 8\n\n# The maximum number of VM instances for concurrent RPC calls.\nmax-vms: 48\n\n# Maximum number of requests to queue for RPC calls.\nmax-vm-queue: 96\n\n# GRPC URL of a remote Juno node.\nremote-db: ""\n\n# Maximum number of blocks to scan in a single starknet_getEvents call.\nrpc-max-block-scan: 18446744073709551615\n')))}f.isMDXComponent=!0}}]);