"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5085,4752],{65085:function(e,t,r){r.r(t),r.d(t,{InternalDevToolsEntryPoint:function(){return N}});var n,l,s=r(49292),i=r(25309),a=r(71023),o=r(68608),c=r(93130),u=r(81643);r(44929);var d=r(3755),x=r(70079),f=r(6020),m=r(21389),p=r(47566),h=r(25663);r(64752);var g=r(35250),j=((n=j||{}).StatsigUser="Statsig User",n.FeatureGates="Feature Gates",n.Features="Features",n.DynamicConfigs="Dynamic Configs",n.ExperimentalFeatureGates="Experimental Gates",n.ExperimentalExperiments="Experimental Experiments",n);function v(e){var t;let{onClose:r,isWidgetVisible:n}=e,l=(0,c.hz)();if(!(0,h.j)()||!f.Statsig.initializeCalled())return null;let s=f.Statsig.getCurrentUser();return(0,g.jsx)(o.Z,{isOpen:n,onClose:r,size:"custom",className:"flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",type:"success",title:"Experimentation DevTools",noPadding:!0,showCloseButton:!0,children:(0,g.jsxs)(u.fC,{defaultValue:j.StatsigUser,className:"flex h-full flex-row gap-6 p-4",orientation:"vertical",children:[(0,g.jsx)(u.aV,{className:"flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",children:Object.values(j).map(e=>(0,g.jsx)(u.xz,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:e,children:e},e))}),(0,g.jsx)(u.VY,{className:"w-full overflow-y-scroll scroll-smooth",value:j.StatsigUser,children:(0,g.jsx)("pre",{className:"text-sm",children:JSON.stringify(s,null,2)})}),(0,g.jsx)(u.VY,{className:"w-full overflow-y-scroll scroll-smooth",value:j.Features,children:null!==(t=null==l?void 0:l.map(e=>(0,g.jsx)(b,{children:(0,g.jsx)("p",{children:String(e)})},e)))&&void 0!==t?t:null}),(0,g.jsx)(u.VY,{className:"w-full overflow-y-scroll scroll-smooth",value:j.ExperimentalFeatureGates,children:["chatgpt_fruit_juice"].map(e=>(0,g.jsx)(y,{statsigName:e},e))})]})})}function y(e){let{statsigName:t}=e,r="https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(t),{isLoading:n,value:l}=(0,d.fW)(t),{0:s,1:o}=(0,x.useState)(""),{gates:c}=f.Statsig.getAllOverrides(),u=null!=c[t];return(0,g.jsxs)(b,{children:[(0,g.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"underline",children:t}),(0,g.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[n?(0,g.jsx)(a.Z,{}):null,u?(0,g.jsx)("button",{onClick:()=>{o(""),(0,d.Gh)(t,null)},children:(0,g.jsx)(p.kGF,{className:"icon-sm text-red-500",title:"Reset local override"})}):null,(0,g.jsx)("p",{className:"font-mono",children:String(l)}),(0,g.jsx)(i.Z,{name:"override",type:"text",color:"neutral",placeholder:"Override",value:s,onChange:e=>{o(e.currentTarget.value)},className:"mr-px w-20",onPressEnter:e=>{(0,d.Gh)(t,"true"===e||"false"!==e&&null)}})]})]})}let b=m.Z.div(l||(l=(0,s.Z)(["flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0"])));function w(){let e=(0,h.j)(),{layer:t}=(0,d.U3)("localization-device-id"),r=t.get("is-enabled",!1);return(0,x.useEffect)(()=>{let t=[{isShortcut:e=>e.ctrlKey&&"3"===e.key,toggle:()=>{(0,d.H9)("localization-device-id",{"is-enabled":!r})}},{isShortcut:e=>e.ctrlKey&&"2"===e.key,toggle:()=>{(0,d.Gh)("chatgpt_fruit_juice",!f.Statsig.checkGateWithExposureLoggingDisabled("chatgpt_fruit_juice"))}}],n=r=>{if(e)for(let e of t)e.isShortcut(r)&&e.toggle()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e,r]),null}var k=r(83901),O=r(78653);function N(){let e=(0,h.j)(),{0:t,1:r}=(0,x.useState)(!1);return e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(O.d,{triggerButton:(0,g.jsx)("button",{className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",children:(0,g.jsx)(p.reV,{className:"icon-xs"})}),children:[(0,g.jsx)(O.Z.Item,{icon:p.reV,onClick:()=>{k.vm.setActiveSidebar("debug")},children:"Open debug panel"}),(0,g.jsx)(O.Z.Item,{icon:p.Vzd,onClick:()=>{r(e=>!e)},children:"Experimentation"}),(0,g.jsx)(O.Z.Item,{icon:p.EmW,onClick:()=>{k.vm.showLatencyDevTools()},children:"Latency"})]}),(0,g.jsx)(w,{}),(0,g.jsx)(v,{isWidgetVisible:t,onClose:()=>{r(!1)}})]}):null}},64752:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(39993),l=r(87648),s=r(76338),i=r(77757),a=r(35627),o=r(35250);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){let{json:t,jsonViewProps:r}=e,u=(0,l.Gv)();return(0,o.jsx)(s.ZP,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({enableClipboard:!0,displayDataTypes:!1,displayObjectSize:!1,value:t,style:u?i.$:a.W,shortenTextAfterLength:120},r))}}}]);
//# sourceMappingURL=5085.ec08f7c32f57f798.js.map