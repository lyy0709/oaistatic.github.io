(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{52051:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return E},default:function(){return T}});var r=n(39004),s=n(99333),a=n(16757),i=n(11550),o=n(24434),l=n(45027),c=n(12128),d=n(29441),u=n(96553),f=n(99555),x=n(71090),m=n(84760),g=n(88667),h=n(34977),p=n(92379),j=n(68306),y=n(62984),b=n(98095),v=n(41619),w=n(651);let k=e=>{let{gizmoId:t,limit:n,cursor:r}=e;return(0,m.a)({queryFn:async()=>f.U.listVersions({gizmoId:t}),queryKey:["gizmo","versions",{gizmoId:t,limit:n,cursor:r}]})},N=(0,p.memo)(function(e){let{gizmoId:t,onSelectVersion:n}=e,{value:r}=(0,g.sB)("3645668434");return t&&r?(0,w.jsx)(z,{gizmoId:t,onSelectVersion:n}):null});function z(e){let{gizmoId:t,onSelectVersion:n}=e,r=(0,h.useRouter)(),{data:s}=k({gizmoId:t}),a=s?s.items.reduce((e,t)=>{let n=new Date(t.updated_at),r="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());return e[r]||(e[r]=[]),e[r].push(t),e},{}):null,i=e=>{r.push("/g/".concat(t,"/view?version=").concat(e))};return a?(0,w.jsx)("div",{className:"relative h-full w-screen max-w-2xs",children:(0,w.jsx)("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:(0,w.jsx)("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(a).map((e,t)=>{let r=a[e];return(0,w.jsx)(Z,{date:e,entries:r,onSelectVersion:n,onRestoreVersion:i},t)})})})}):null}function Z(e){let{date:t,entries:n,onSelectVersion:r,onRestoreVersion:s}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:(0,w.jsx)(j.Ji,{value:t,dateStyle:"medium"})}),(0,w.jsx)("div",{className:"flex flex-col space-y-2",children:n.map((e,t)=>(0,w.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>r(e.version),children:[(0,w.jsx)("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:(0,w.jsx)(j.Ji,{value:e.updated_at,timeStyle:"short"})}),(0,w.jsx)(O,{onRestoreVersion:()=>{s(e.version)}})]},t))})]})}function O(e){let{onRestoreVersion:t}=e;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(b.d,{sideOffset:8,triggerButton:(0,w.jsx)("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:(0,w.jsx)(v.nWS,{className:"icon-md"})}),children:(0,w.jsxs)(b.Z.Item,{className:"items-center",disabled:!1,onClick:t,children:[(0,w.jsx)(v.Ezi,{className:"icon-md"}),(0,w.jsx)(y.Z,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}var C=n(3551),_=n(91530),S=n.n(_);let R=e=>{let{gizmoId:t,version:n}=e;return(0,m.a)({queryFn:async()=>f.U.getVersion({gizmoId:t,version:n}),queryKey:["gizmo","version",{gizmoId:t,version:n}]})},M=(e,t)=>"/gpts/editor/".concat(e,"?version=").concat(t);function P(e){var t;let{gizmoId:n}=e,{0:i,1:o}=(0,p.useState)(null),l=(0,h.useRouter)(),{data:c}=(0,r.b9)(n),d=null==c||null===(t=c.gizmo.current_user_permission)||void 0===t?void 0:t.can_write,u=(0,r.YR)(),{0:f,1:m}=(0,p.useState)(!1),g=()=>{i?l.push(M(n,i)):l.push((0,C.AA)(n))};return(0,w.jsxs)("div",{className:"flex h-screen w-full flex-col items-center",children:[(0,w.jsx)("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:c&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>l.back(),children:[(0,w.jsx)(v.Y1T,{className:"icon-lg"}),(0,w.jsx)("div",{className:"font-semibold",children:d?(0,w.jsx)(y.Z,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):(0,w.jsx)(y.Z,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),(0,w.jsx)("div",{className:"mr-4 flex items-center gap-2",children:d?(0,w.jsx)(x.cY,{color:"secondary",onClick:()=>{i&&i!==c.gizmo.live_version&&c.tools.find(e=>{var t;return e.type===s.qK.JIT_PLUGIN&&(null===(t=e.metadata.auth)||void 0===t?void 0:t.type)!==a.Jv.None})?m(!0):g()},children:(0,w.jsx)(y.Z,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):(0,w.jsx)(x.cY,{color:"secondary",loading:u.isPending,onClick:async()=>{let e=await u.mutateAsync({gizmoId:n});e.gizmo.id&&l.push("/gpts/editor/".concat(e.gizmo.id))},children:(0,w.jsx)(y.Z,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),(0,w.jsxs)("div",{className:"flex h-full w-full items-center",children:[d&&(0,w.jsx)(N,{gizmoId:n,onSelectVersion:e=>{o(e)}}),(0,w.jsx)(F,{gizmoId:n,version:i})]}),f&&(0,w.jsx)(I,{onClose:()=>{m(!1)},onContinue:g})]})}function I(e){let{onClose:t,onContinue:n}=e,{0:r,1:s}=(0,p.useState)(!1);return(0,w.jsx)(o.Z,{isOpen:!0,onClose:t,type:"warning",showCloseButton:!0,title:(0,w.jsx)(y.Z,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:(0,w.jsx)(i.z,{onClick:()=>{s(!0),n()},loading:r,color:"secondary",children:(0,w.jsx)(y.Z,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:(0,w.jsx)(i.z,{onClick:t,color:"secondary",children:(0,w.jsx)(y.Z,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:(0,w.jsx)(y.Z,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function F(e){var t,n,r,a;let{gizmoId:i,version:o}=e,{data:f}=R({gizmoId:i,version:o}),{0:x,1:m}=(0,p.useState)(null);if(!f)return null;let g=f.tools.filter(e=>e.type===s.qK.JIT_PLUGIN);return(0,w.jsx)("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:(0,w.jsxs)("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[(0,w.jsx)(d.hj,{className:"self-center",children:(0,w.jsx)(c.Z,{src:f.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),(0,w.jsx)(d.yt,{type:"text",value:null!==(t=f.gizmo.display.name)&&void 0!==t?t:"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),(0,w.jsx)(d.yt,{type:"text",value:null!==(n=f.gizmo.display.description)&&void 0!==n?n:"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),(0,w.jsx)(d.B1,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:null!==(r=f.gizmo.instructions)&&void 0!==r?r:"",disabled:!0})]}),f.gizmo.display.prompt_starters&&f.gizmo.display.prompt_starters.length>0&&(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),f.gizmo.display.prompt_starters.map((e,t)=>(0,w.jsx)(d.yt,{type:"text",value:e,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},t))]}),f.files&&f.files.length>0&&(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),f.files.map((e,t)=>(0,w.jsx)(l.Z,{file:e.name,fileId:e.id},t))]}),(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),(0,w.jsx)(u.W,{enabledTools:f.tools,onEnabledToolsChange:S()})]}),g&&g.length>0&&(0,w.jsxs)(d.hj,{children:[(0,w.jsx)(d.lX,{label:(0,w.jsx)(y.Z,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),g.map((e,t)=>(0,w.jsx)(d.r,{isDisabled:!1,actionTool:e,onShowActionsEditor:()=>{(null==x?void 0:x.metadata.action_id)===e.metadata.action_id?m(null):m(e)}},t)),x&&(0,w.jsx)("textarea",{readOnly:!0,value:null!==(a=x.metadata.raw_spec)&&void 0!==a?a:"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}var L=n(93951),E=!0;function T(){var e,t;let n=(0,L.t)(),s=(0,h.useRouter)(),a=null!==(e=null===(t=s.query)||void 0===t?void 0:t.gizmoId)&&void 0!==e?e:"",i=(0,r.CR)(a),{value:o}=(0,g.sB)("3645668434");return(0,p.useEffect)(()=>{null!=n&&n.isFree()&&s.push("/")},[n,s]),o?(0,w.jsx)(P,{gizmoId:i}):null}},44395:function(e,t,n){"use strict";n.d(t,{O:function(){return i},Z:function(){return a}});var r=n(19841),s=n(651);function a(e){let{percentage:t,thickness:n=1/12,className:a,sizeOverride:i,backgroundStrokeClassName:o="stroke-gray-400",transitionDuration:l,transitionTimingFunction:c,onTransitionEnd:d}=e,u=null!=i?i:120,f=u*n,x=(u-f)/2,m=2*Math.PI*x;return(0,s.jsxs)("svg",{width:u,height:u,viewBox:"0 0 ".concat(u," ").concat(u),className:a,children:[(0,s.jsx)("circle",{className:(0,r.default)("origin-[50%_50%] -rotate-90",o),strokeWidth:f,fill:"transparent",r:x,cx:u/2,cy:u/2}),(0,s.jsx)("circle",{className:"origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",stroke:"currentColor",strokeWidth:f,strokeDashoffset:m-t/100*m,strokeDasharray:"".concat(m," ").concat(m),fill:"transparent",r:x,cx:u/2,cy:u/2,style:{transitionDuration:l,transitionTimingFunction:c},onTransitionEnd:d})]})}let i=e=>{let{size:t=40,className:n="text-blue-selection"}=e;return(0,s.jsx)("div",{className:(0,r.default)("relative",n),style:{width:t,height:t},children:(0,s.jsxs)("svg",{className:"absolute h-full w-full animate-spin",viewBox:"0 0 50 50",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"spinner-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",style:{stopColor:"currentColor",stopOpacity:1}}),(0,s.jsx)("stop",{offset:"100%",style:{stopColor:"currentColor",stopOpacity:0}})]})}),(0,s.jsx)("circle",{cx:"25",cy:"25",r:"20",stroke:"url(#spinner-gradient)",strokeWidth:"8",strokeLinecap:"round",fill:"none",strokeDasharray:"75,150",strokeDashoffset:"0"})]})})}},98095:function(e,t,n){"use strict";n.d(t,{d:function(){return v}});var r=n(98601),s=n(52088),a=n(54089),i=n(19841),o=n(92379),l=n(38838),c=n(41619),d=n(50863),u=n(651);let f=["className","size","align"],x=["onSelect","icon","className","color","size"],m=["className"],g=["onSelect","children"],h=["className"],p=["icon","children"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let b=o.forwardRef(function(e,t){let{className:n,size:r="default",align:o}=e,l=(0,s.Z)(e,f);return(0,u.jsx)(d.w5,y({ref:t,$as:a.VY,sideOffset:4,align:null!=o?o:"start",collisionPadding:10,className:(0,i.default)({"min-w-[280px]":"default"===r,"min-w-[340px]":"large"===r,"min-w-[125px]":"small"===r,"overflow-hidden":!0},n)},l))});function v(e){let{triggerButton:t,children:n,size:r="default",open:s,onOpenChange:i,contentAlign:o,side:l,sideOffset:c=0,alignOffset:d=0,contentClassName:f}=e;return(0,u.jsxs)(a.fC,{modal:!1,open:s,onOpenChange:i,children:[(0,u.jsx)(a.xz,{asChild:!0,children:t}),(0,u.jsx)(a.Uv,{children:(0,u.jsx)(b,{size:r,align:o,alignOffset:d,side:l,sideOffset:c,className:f,children:n})})]})}let w={Root:a.fC,Trigger:function(e){return(0,u.jsx)(d.J7,y(y({$as:a.xz},e),{},{onFocusCapture:t=>{var n;t.stopPropagation(),null===(n=e.onFocusCapture)||void 0===n||n.call(e,t)}}))},Portal:a.Uv,Content:b,Item:o.forwardRef(function(e,t){let{onSelect:n,icon:r,className:l,color:c,size:f="default"}=e,m=(0,s.Z)(e,x);return r?(0,u.jsxs)(d.gG,y(y({$as:a.ck,ref:t,onSelect:n,className:(0,i.default)("danger"===c&&"text-token-text-error","large"===f&&"gap-3",l)},m),{},{children:[(0,u.jsx)("div",{className:(0,i.default)("flex items-center justify-center","danger"===c&&"text-token-text-error","danger"!==c&&"text-token-text-secondary","default"===f&&"h-5 w-5","large"===f&&"h-5 w-7"),children:(0,o.isValidElement)(r)?r:(0,u.jsx)(r,{className:"h-5 w-5 shrink-0"})}),m.children]})):(0,u.jsx)(d.gG,y({$as:a.ck,ref:t,onSelect:n,className:(0,i.default)("danger"===c&&"text-token-text-error",l)},m))}),Separator:function(e){let{className:t}=e,n=(0,s.Z)(e,m);return(0,u.jsx)(a.Z0,y({className:(0,i.default)("mx-5 my-1 h-px bg-token-border-light",t)},n))},RadioGroup:a.Ee,RadioItem:function(e){let{onSelect:t,children:n}=e,r=(0,s.Z)(e,g);return(0,u.jsxs)(d.aF,y(y({$as:a.Rk,onSelect:t},r),{},{children:[(0,u.jsx)(a.wU,{className:"absolute",children:(0,u.jsx)(c.$As,{className:"icon-sm"})}),(0,u.jsx)("span",{className:"ml-6",children:n})]}))},Sub:a.Tr,SubContent:function(e){let{className:t}=e,n=(0,s.Z)(e,h);return(0,u.jsx)(d.w5,y({$as:a.tu,className:(0,i.default)("mt-2 max-h-[calc(100vh-300px)] min-w-[100px] overflow-auto",t),sideOffset:8,alignOffset:-16,collisionPadding:20},n))},SubMenuTrigger:function(e){let{icon:t,children:n}=e,r=(0,s.Z)(e,p);return(0,u.jsxs)(d.gG,y(y({$as:a.fF},r),{},{children:[t&&(0,u.jsx)("div",{className:"flex h-5 w-5 items-center justify-center text-token-text-secondary",children:(0,u.jsx)(t,{className:"h-5 w-5 flex-shrink-0"})}),n,(0,u.jsx)("div",{className:"ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",children:(0,u.jsx)(l.Yf,{className:"icon-md "})})]}))},Label:function(e){let{children:t}=e;return(0,u.jsx)(a.__,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:t})}};t.Z=w},50863:function(e,t,n){"use strict";n.d(t,{J7:function(){return d},M4:function(){return m},aF:function(){return u},gG:function(){return f},w5:function(){return x}});var r,s,a,i,o,l=n(2346),c=n(15478);let d=c.Z.button(r||(r=(0,l.Z)(["\ntext-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary\nfocus-visible:bg-token-main-surface-secondary\nradix-state-active:text-token-text-secondary\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent\n"]))),u=c.Z.div(s||(s=(0,l.Z)(["flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative"]))),f=(0,c.Z)(u)(a||(a=(0,l.Z)(["","\nhover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5]\nradix-state-open:bg-[#f5f5f5]\ndark:hover:bg-token-main-surface-secondary\ndark:focus-visible:bg-token-main-surface-secondary\nrounded-md my-0 px-3 mx-2\ndark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"])),e=>e.spoofHovered?"bg-[#f5f5f5]":""),x=c.Z.div(i||(i=(0,l.Z)(["max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2"]))),m=c.Z.div(o||(o=(0,l.Z)(["popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl"])))},3551:function(e,t,n){"use strict";n.d(t,{AA:function(){return o},FH:function(){return d},J8:function(){return c},L7:function(){return i},SX:function(){return u},ZV:function(){return s},cy:function(){return a},xj:function(){return l}});var r=n(39004);function s(e,t){return t?"/g/".concat((0,r.kX)(t),"/c/").concat(e):"/c/".concat(e)}function a(){return"/gpts"}function i(){return"/gpts/mine"}function o(e){return e?"/gpts/editor/".concat(e):"/gpts/editor"}function l(e){let t=o(void 0);return null==e?t:o(e)}function c(e){return o(e)}function d(e){try{let t=new URL(e);return t.hostname=t.hostname.replace(/^(www\.|web\.|mbasic\.|mobile\.)(secure\.)?/,""),t.pathname="",[...t.searchParams.keys()].forEach(e=>t.searchParams.delete(e)),t.toString()}catch(t){return e}}function u(e){let t=function(e){if(!e)return null;try{return new URL(e).hostname}catch(e){return null}}(e);return t?t.replace(/^www\./,""):e}},71026:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/view",function(){return n(52051)}])}},function(e){e.O(0,[2205,6636,4089,8500,2349,8446,5162,7437,7035,5385,3307,9441,2888,9774,179],function(){return e(e.s=71026)}),_N_E=e.O()}]);
//# sourceMappingURL=view-0ff4dc3036d07ea9.js.map