"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5418],{39358:function(e,t,s){s.d(t,{Z:function(){return g}});var r,n=s(2346),a=s(98601),l=s(92379),o=s(68306),i=s(62984),c=s(15478),d=s(15174),u=s(30853),m=s(47563),x=s(651);function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach(function(t){(0,a.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let b=(0,o.vU)({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function g(e){let{buttonText:t,shouldChangeText:s=!0,iconClassName:r="icon-sm",onCopy:n,className:a}=e,{0:o,1:c}=(0,l.useState)(!1),p=(0,d.Z)(),g=(0,l.useCallback)(e=>{e.stopPropagation(),n(),c(!0),setTimeout(()=>{p()&&c(!1)},2e3)},[p,n]),j=t;return s&&o?j=(0,x.jsx)(i.Z,h({},b.copied)):!0===t&&(j=(0,x.jsx)(i.Z,h({},b.copy))),(0,x.jsxs)(x.Fragment,{children:[!o&&(0,x.jsx)(u.u,{label:(0,x.jsx)(i.Z,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:(0,x.jsxs)(f,{onClick:g,className:a,children:[(0,x.jsx)(m.TIy,{className:r}),j]})}),o&&(0,x.jsxs)(f,{className:a,children:[(0,x.jsx)(m.$As,{className:r}),j]})]})}let f=c.Z.button(r||(r=(0,n.Z)(["flex gap-1 items-center"])))},65418:function(e,t,s){s.r(t),s.d(t,{DebugConversation:function(){return em},DebugConversationSidebar:function(){return eu},default:function(){return el},downloadMessages:function(){return ex}});var r,n,a,l,o,i=s(2346),c=s(98601),d=s(16757),u=(s(34095),s(55963)),m=s(52531),x=(s(2721),s(93951)),p=s(92745),h=s(22433),b=s(93180),g=s(46900),f=s(30757),j=(s(56032),s(42420)),v=s(79746),y=s(2423),w=s.n(y),N=s(38482),C=s.n(N),k=s(92379),O=s(75172),S=s(62984),P=s(68306),_=s(67526),T=s(75853),Z=s(15478),I=s(11550),D=s(39358),F=s(94273),R=s(75130),L=s(651);function M(e){let{children:t,sidebarOpen:s,onClose:r}=e;return(0,L.jsx)(F.u.Root,{show:s,as:k.Fragment,children:(0,L.jsxs)(R.V,{as:"div",className:"relative z-10",onClose:r,children:[(0,L.jsx)("div",{className:"fixed inset-0"}),(0,L.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,L.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,L.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,L.jsx)(F.u.Child,{as:k.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,L.jsx)(R.V.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:(0,L.jsx)("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}var E=s(30853),U=s(30115),A=s(47563),z=s(24434),V=s(73468),Q=s(89678),B=s.n(Q),J=s(13859),G=s.n(J),q=s(24740),$=s(88815);function X(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function Y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?X(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):X(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function H(e){var t;let{clientThreadId:s}=e,{rebaseSystemMessageContent:r,showDebugConversationTurns:n}=(0,$.N)(),{0:a,1:l}=(0,k.useState)(()=>r?JSON.stringify(r,null,2):void 0),{0:o,1:i}=(0,k.useState)(!!r),c=(0,p.u9)(s,p.tQ.getThreadCurrentLeafId(s)),m=G()(c,e=>e.content.content_type===d.PX.SystemContent),x=null!==(t=null==m?void 0:m.content)&&void 0!==t?t:null,h=(0,k.useMemo)(()=>B()(e=>{try{e?$.N.setState({rebaseSystemMessageContent:Y(Y({},JSON.parse(e)),{},{content_type:d.PX.SystemContent})}):$.N.setState({rebaseSystemMessageContent:null}),q.m.closeAll()}catch(e){q.m.danger("The System Message is not valid JSON")}},500),[]);return(0,k.useEffect)(()=>{o?h(a):(h.cancel(),$.N.setState({rebaseSystemMessageContent:null}))},[h,o,a]),(0,L.jsxs)("div",{className:"flex flex-col gap-3 px-4",children:[(0,L.jsxs)("div",{children:[(0,L.jsxs)("div",{className:"flex justify-between",children:[(0,L.jsx)(E.u,{label:"Enable to apply this system message to the current conversation.",children:(0,L.jsx)(u.Z,{id:"enabled",label:"Enabled",checked:o,onChange:e=>i(e.currentTarget.checked)})}),(0,L.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:n,onChange:()=>{$.N.setState({showDebugConversationTurns:!n})}})]}),(0,L.jsx)(I.z,{disabled:!x,className:"mt-2",onClick:()=>{l(x?JSON.stringify(x,null,2):"")},size:"small",children:"Load active system message"})]}),(0,L.jsxs)("div",{children:[(0,L.jsx)("label",{className:"text-sm",children:"System Message"}),(0,L.jsx)(K,{disabled:!o,placeholder:x?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:e=>l(e.target.value)})]})]})}let K=Z.Z.textarea(r||(r=(0,i.Z)(["w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary"])));var W=s(19841);function ee(e){let{clientThreadId:t}=e,{0:s,1:r}=(0,k.useState)([]),n=p.tQ.getThreadCurrentLeafId(t),a=p.tQ.getThreadConversationTurns(t,n),l=e=>{let s=p.tQ.getTree(t).getLeafFromNode(e);p.tQ.setThreadCurrentLeafId(t,s.id)},o=e=>{r(e=>[...e,n]),l(e)};return(0,L.jsxs)(L.Fragment,{children:[s.length>0&&(0,L.jsxs)(I.z,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{l(s[s.length-1]),r(e=>e.slice(0,-1))},children:[(0,L.jsx)(A.eF8,{className:"icon-sm"}),"Go back to ",s[s.length-1]]}),(0,L.jsx)("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:a.map((e,s)=>{let r;let n=e.messages[0].nodeId,a=p.tQ.getTree(t),l=0!==s?a.getParent(n):null,i=null!=l?l.children.findIndex(e=>n===e):0,c=null!=l?l.children:[],u=c.slice(0,i),m=c.slice(i+1);switch(e.role){case d.uU.User:r="bg-blue-500";break;case d.uU.Assistant:r="bg-gray-600";break;default:r="bg-gray-400"}return(0,L.jsxs)("div",{className:(0,W.default)("relative p-2",r),children:[(0,L.jsx)("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:u.map(e=>(0,L.jsx)(et,{variantId:e,onChangeItemInView:o},e))}),(0,L.jsx)("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:m.map(e=>(0,L.jsx)(et,{variantId:e,onChangeItemInView:o},e))}),(0,L.jsx)("div",{className:"flex flex-col gap-2",children:e.messages.map(e=>(0,L.jsxs)("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[(0,L.jsx)("div",{className:"font-semibold",children:e.nodeId}),(0,L.jsx)("div",{className:"italic text-token-text-tertiary",children:e.message.author.role}),(0,L.jsx)("div",{children:(0,h.RR)(e.message)})]},e.nodeId))})]},s)})})]})}function et(e){let{variantId:t,onChangeItemInView:s}=e;return(0,L.jsx)("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{s(t)},children:(0,L.jsx)("span",{className:"bg-gray-200 p-2",children:t})},t)}function es(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function er(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?es(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):es(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let en=C()(()=>Promise.all([s.e(3904),s.e(3674)]).then(s.bind(s,16476)).then(e=>e.default),{ssr:!1,loadableGenerated:{webpack:()=>[16476]}}),ea=C()(()=>s.e(1583).then(s.bind(s,51583)).then(e=>e.FramesViewer),{ssr:!1,loadableGenerated:{webpack:()=>[51583]}});function el(e){let{children:t,title:s,icon:r,isOpen:n,slideOver:a,onClose:l}=e,o=(0,L.jsxs)(eg,{children:[(0,L.jsxs)("div",{className:"flex items-start justify-between",children:[(0,L.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[(0,L.jsx)(r,{className:"icon-sm"}),s]}),(0,L.jsx)("div",{className:"mr-2 mt-2 flex h-7 items-center",children:(0,L.jsx)(U.P,{onClick:l})})]}),t]});return a?(0,L.jsx)(M,{sidebarOpen:n,onClose:l,children:o}):n?o:null}function eo(e){let{nodes:t,setDebugNodeIndex:s,setFrameSrc:r}=e,n=t.map((e,t)=>{var n;let a=e.message,{role:l,name:o}=a.author,i=w()(a,"metadata.__internal.model_id"),c=w()(a,"metadata.__internal.agent.settings.completion_api.engine"),u=w()(a,"metadata.__internal.model_experiment_name"),m=w()(a,"metadata.__internal.model_experiment_treatment"),x=w()(a,"metadata.__internal.normalized_model_side"),p=w()(a,"metadata.__internal.model_experiment_group_name"),b=w()(a,"metadata.__internal.model_experiment_group_params"),f=w()(a,"metadata.__internal.model_experiment_override"),j=w()(a,"metadata.__internal.model_experiment_eval_seq"),v=null===(n=w()(a,"metadata.__internal.raw_tokens"))||void 0===n?void 0:n.length,y=w()(a,"metadata.request_id"),N=g.U.getAudio(a),C=g.U.getAudioAssetPointers(a),k=g.U.getFrameAssetPointers(a);return(0,L.jsxs)(ej,{role:"button",onClick:()=>s(t),children:[(0,L.jsxs)("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[l,o&&o!==l&&" (".concat(o,")"),a.recipient&&" -> ",(0,h.Ej)(a)]}),(a.author.role!==d.uU.System||y)&&(0,L.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(0,L.jsxs)("div",{children:["ID: ",a.id]}),e.id!==a.id&&(0,L.jsxs)("div",{children:["UI Node ID: ",e.id]}),(0,L.jsxs)("div",{children:["Req ID: ",y||"Reload page to see ID"]})]}),(0,L.jsx)("div",{className:"line-clamp-6",children:(0,h.RR)(a)}),(v||i||c||u||m||x||p||b||f||j)&&(0,L.jsxs)("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[void 0!==v&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Tokens Count:"})," ",v]}),i&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Model ID:"})," ",i]}),c&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Engine:"})," ",c]}),u&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Experiment:"})," ",u]}),m&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Treatment:"})," ",m]}),x&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Normalized Side:"})," ",x]}),p&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Group Name:"})," ",p]}),b&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Group Params:"}),(0,L.jsx)("div",{children:JSON.stringify(b,null,2)})]}),f&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Above Params are Overridden By:"})," ",f]}),j&&(0,L.jsxs)("div",{children:[(0,L.jsx)("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),N.length||C.length?(0,L.jsxs)("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[(0,L.jsx)(eh,{frameAssets:k,setFrameSrc:r},t),N.map((e,t)=>(0,L.jsx)(eb,{audio:e},t)),C.map((e,t)=>(0,L.jsx)(eb,{assetPointer:e},t))]}):null]},a.id)});return(0,L.jsx)(ef,{children:n})}let ei=e=>(0,L.jsx)(_.c.Input,er(er({},e),{},{inputClassName:"focus:ring-0"}));function ec(){let e=(0,$.N)(),t=(0,V.ZP)().map(e=>({label:e.name,options:e.options.map(e=>({label:"".concat(e.value," (").concat(e.name,")"),value:e.value}))}));return(0,L.jsxs)("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold ",children:[(0,L.jsx)(u.Z,{id:"force-paragen",label:"Force Parallel Gen",checked:e.forceParagen,onChange:()=>{$.N.setState({forceParagen:!e.forceParagen})}}),(0,L.jsx)(T.Z,{options:t,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!e.forceParagen,isLoading:0===t.length,value:e.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:ei},onChange:e=>{$.N.setState({forceParagenModel:null!=e?e:$.J})}}),(0,L.jsx)(u.Z,{id:"force-paragen",label:"Force Nulligen",checked:e.forceNulligen,onChange:()=>{$.N.setState({forceNulligen:!e.forceNulligen})}}),(0,L.jsx)(u.Z,{id:"force-indepth-feedback",label:"Force Indepth Feedback with prompt:",checked:e.forceIndepthFeedback,onChange:()=>{$.N.setState({forceIndepthFeedback:!e.forceIndepthFeedback})}}),(0,L.jsx)(m.B1,{id:"force-indepth-feedback-prompt",value:e.forceIndepthFeedbackPrompt,disabled:!e.forceIndepthFeedback,className:"font-weight-normal font-mono text-xs",onChange:e=>{$.N.setState({forceIndepthFeedbackPrompt:e.target.value})}}),(0,L.jsx)(u.Z,{id:"force-rate-limit",label:"Force Rate Limit",checked:e.forceRateLimit,onChange:()=>{$.N.setState({forceRateLimit:!e.forceRateLimit})}}),(0,L.jsx)(u.Z,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:e.resetRateLimits,onChange:()=>{$.N.setState({resetRateLimits:!e.resetRateLimits})}}),(0,L.jsx)(E.u,{label:"Enabling this will show debug conversation messages in the chat",children:(0,L.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:e.showDebugConversationTurns,onChange:()=>{$.N.setState({showDebugConversationTurns:!e.showDebugConversationTurns})}})})]})}let ed=Z.Z.div(n||(n=(0,i.Z)(["px-3 pb-2 text-xs font-semibold uppercase border-b-2 ",""])),e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"});function eu(e){let{clientThreadId:t,isOpen:s,slideOver:r,onClose:n}=e,a=(0,O.Z)(),l=(0,x.hz)(),{0:o,1:i}=(0,k.useState)("conversation");return null!=l&&l.includes("debug")?(0,L.jsx)(el,{icon:A.reV,title:a.formatMessage(ev.debugTitle),isOpen:s,slideOver:r,onClose:n,children:(0,L.jsxs)(f.fC,{orientation:"vertical",defaultValue:o,onValueChange:e=>i(e),children:[(0,L.jsxs)(f.aV,{className:"flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold",children:[(0,L.jsx)(f.xz,{value:"conversation",children:(0,L.jsx)(ed,{$isSelected:"conversation"===o,children:"Conversation"})}),(0,L.jsx)(f.xz,{value:"system-message-editor",className:"p-4",children:(0,L.jsx)(ed,{$isSelected:"system-message-editor"===o,children:"System Message Editor"})})]}),(0,L.jsx)(f.VY,{value:"conversation",children:(0,L.jsx)(em,{clientThreadId:t})}),(0,L.jsx)(f.VY,{value:"system-message-editor",children:(0,L.jsx)(H,{clientThreadId:t})})]})}):null}function em(e){let{clientThreadId:t}=e,s=(0,O.Z)(),r=p.tQ.getThreadCurrentLeafId(t),n=(0,p.Fe)(t,r),{0:a,1:l}=(0,k.useState)(),o=(0,x.hz)(),i=(0,k.useCallback)(()=>{l(void 0)},[]),c=(0,k.useCallback)(()=>{let e=p.tQ.getTree(t);(0,v.v)(e.getTextFromThread(r))},[r,t]),{0:d,1:u}=(0,k.useState)(!1),{0:m,1:h}=(0,k.useState)(void 0);return null!=o&&o.includes("debug")?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:(0,L.jsx)(ep,{clientThreadId:t,messages:n.map(e=>e.message)})}),!1,(0,L.jsxs)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[(0,L.jsx)("div",{children:(0,L.jsx)(D.Z,{onCopy:c,buttonText:s.formatMessage(ev.copyText)})}),(0,L.jsxs)("button",{className:"flex items-center justify-center gap-2",onClick:()=>u(!0),children:[(0,L.jsx)(A.aAc,{className:"icon-sm rotate-90"}),"View tree"]})]}),(0,L.jsx)(ec,{}),(0,L.jsx)(eo,{nodes:n,setDebugNodeIndex:l,setFrameSrc:h}),void 0!==a&&(0,L.jsx)(z.Z,{className:"min-w-[80vw]",isOpen:!0,onClose:i,type:"success",children:(0,L.jsx)("div",{className:"max-h-[80vh] overflow-auto",children:(0,L.jsx)(en,{json:n[a].message})})},"DebugMessageModal-".concat(a)),d&&(0,L.jsx)(z.Z,{isOpen:!0,onClose:()=>u(!1),type:"success",size:"custom",noPadding:!0,children:(0,L.jsx)(ee,{clientThreadId:t})},"DebugTreeViewer"),m&&(0,L.jsx)(z.Z,{size:"normal",isOpen:!0,onClose:()=>h(void 0),type:"success",children:(0,L.jsx)("img",{src:m,alt:"debug image"})},"DebugFrameViewer")]}):null}function ex(e,t){let s=new Blob([JSON.stringify({conversation_id:p.tQ.getServerThreadId(e),messages:t},null,2)],{type:"application/json"}),r=URL.createObjectURL(s),n=document.createElement("a");n.href=r,n.download="messages-".concat(p.tQ.getServerThreadId(e),".json"),n.click(),URL.revokeObjectURL(r)}function ep(e){let{clientThreadId:t,messages:s}=e,r=(0,k.useCallback)(()=>{ex(t,s)},[t,s]);return(0,L.jsx)(I.z,{onClick:r,color:"primary",size:"small",icon:A._8t,children:(0,L.jsx)(S.Z,er({},ev.downloadRawConversation))})}function eh(e){let{0:t,1:s}=(0,k.useState)([]),r=(0,j.NL)(),{frameAssets:n}=e;return(0,k.useEffect)(()=>{async function e(){return Promise.all(n.map(async e=>{let{image_asset_pointer:t,timestamp:s}=e;return{src:(await b.j.fetch(r,{asset:t})).url,timestamp:s}}))}n.length>0&&e().then(s)},[n,r]),(0,L.jsx)(ea,{frames:t,setFrameSrc:e.setFrameSrc})}function eb(e){let t=eb.useAssetPointerSource(e.assetPointer),s=eb.useAudioSource(e.audio),r=null!=t?t:s;return r?(0,L.jsx)("audio",{controls:!0,src:r,className:"w-full"}):null}eb.useAssetPointerSource=e=>{let{0:t,1:s}=(0,k.useState)(null),r=(0,j.NL)();return(0,k.useEffect)(()=>{e&&b.j.fetch(r,{asset:e}).then(e=>{s(e.url)})},[r,e]),t},eb.useAudioSource=e=>{let{0:t,1:s}=(0,k.useState)(null);return(0,k.useEffect)(()=>{if(e){let t=atob(e.payload),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);let n=new Blob([r],{type:"audio/".concat(e.format)}),a=URL.createObjectURL(n);return s(a),()=>{URL.revokeObjectURL(a)}}},[e]),t};let eg=Z.Z.div(a||(a=(0,i.Z)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary"]))),ef=Z.Z.pre(l||(l=(0,i.Z)(["whitespace-pre-wrap text-sm"]))),ej=Z.Z.div(o||(o=(0,i.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200"]))),ev=(0,P.vU)({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}})}}]);
//# sourceMappingURL=5418.db344ef4d3cadb35.js.map