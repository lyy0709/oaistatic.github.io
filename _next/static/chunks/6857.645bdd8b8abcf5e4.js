"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6857,7023],{92609:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(98601),a=r(52088),o=r(19841),i=r(651);let c=["className","openNewTab","type"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){let{className:t,openNewTab:r=!1,type:l="primary"}=e,d=(0,a.Z)(e,c);return(0,i.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({rel:"noreferrer",className:(0,o.default)("cursor-pointer font-normal underline","primary"===l&&"text-green-600",t),target:r?"_blank":"_self"},d))}},16779:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(77420),a=r(19841),o=r(92379),i=r(41619),c=r(651);function s(e){let{onChange:t,enabled:r,label:s,disabled:l,withLockIcon:d=!1,lockIconOverride:u=null,size:f="normal",id:p}=e,b=(0,o.useCallback)(()=>{t(!r)},[r,t]);return(0,c.jsx)(n.fC,{id:p,checked:r,disabled:l,onCheckedChange:b,"aria-label":s,className:(0,a.default)("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-secondary focus-visible:ring-offset-2 focus-visible:radix-state-checked:ring-black focus-visible:dark:ring-token-main-surface-primary focus-visible:dark:radix-state-checked:ring-green-600",l?"cursor-not-allowed opacity-50":"cursor-pointer","bg-gray-200 radix-state-checked:bg-black dark:border dark:border-token-border-medium dark:bg-transparent","relative shrink-0 rounded-full dark:radix-state-checked:border-green-600 dark:radix-state-checked:bg-green-600","normal"===f?"h-[20px] w-[32px]":"h-[19px] w-[30px]"),children:(0,c.jsx)(n.bU,{className:(0,a.default)("flex items-center justify-center rounded-full","transition-transform duration-100 will-change-transform ltr:translate-x-0.5 rtl:-translate-x-0.5","bg-white","normal"===f?"h-[16px] w-[16px] ltr:radix-state-checked:translate-x-[14px] rtl:radix-state-checked:translate-x-[-14px]":"h-[15px] w-[15px] ltr:radix-state-checked:translate-x-[13px] rtl:radix-state-checked:translate-x-[-13px]"),children:d?u||(0,c.jsx)(i.oVl,{className:"icon-xs dark:text-black"}):null})})}},73062:function(e,t,r){r.d(t,{g:function(){return x}});var n=r(98601),a=r(52088),o=r(54198),i=r(19841),c=r(92379),s=r(41619),l=r(50863),d=r(651);let u=["children"],f=["children","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function x(e){let{options:t,value:r,onValueChange:n,disabled:a,defaultValue:o,placeholder:i}=e;return(0,d.jsxs)(m.Root,{value:r,onValueChange:n,disabled:a,defaultValue:o,children:[(0,d.jsxs)(m.Trigger,{children:[(0,d.jsx)(m.Value,{placeholder:i}),(0,d.jsx)(m.Icon,{})]}),(0,d.jsx)(m.Portal,{children:(0,d.jsx)(m.Content,{children:t.map(e=>(0,d.jsx)(m.Item,{value:e.value,children:e.label},e.value))})})]})}let m={Root:o.fC,Trigger:function(e){return(0,d.jsx)(l.J7,b({$as:o.xz},e))},Value:o.B4,Icon:function(){return(0,d.jsx)(o.JO,{children:(0,d.jsx)(s.Tg4,{className:"icon-sm"})})},Portal:o.h_,Content:function(e){let{children:t,className:r}=e,n=(0,a.Z)(e,f);return(0,d.jsxs)(l.w5,b(b({$as:o.VY,side:"bottom",sideOffset:4,position:"popper",className:(0,i.default)("min-w-[220px] overflow-auto",r)},n),{},{children:[(0,d.jsx)(o.u_,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(s.r0F,{className:"icon-sm"})}),(0,d.jsx)(o.l_,{children:t}),(0,d.jsx)(o.$G,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(s.Tg4,{className:"icon-sm"})})]}))},Item:c.forwardRef(function(e,t){let{children:r}=e,n=(0,a.Z)(e,u);return(0,d.jsxs)(l.gG,b(b({$as:o.ck,ref:t,className:"flex justify-between"},n),{},{children:[(0,d.jsx)(o.eT,{children:r}),(0,d.jsx)(o.wU,{className:"",children:(0,d.jsx)(s.kvR,{className:"icon-sm"})})]}))}),ItemText:o.eT,ItemIndicator:o.wU,Separator:function(){return(0,d.jsx)(o.Z0,{className:"mx-5 my-1 h-px bg-token-border-light"})},Label:function(e){let{children:t}=e;return(0,d.jsx)(o.__,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:t})},Group:o.ZA};t.Z=m},30853:function(e,t,r){r.d(t,{E:function(){return p},u:function(){return b}});var n,a=r(2346),o=r(98601),i=r(52088),c=r(59594),s=r(19841);r(92379);var l=r(15478),d=r(651);let u=["disabled"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let p=e=>{let{disabled:t}=e,r=(0,i.Z)(e,u);return t?(0,d.jsx)(d.Fragment,{children:r.children}):(0,d.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r))},b=e=>{let t,r,{label:n,contentClassName:a,customPaddingClassName:o,theme:i="default",cornerRadius:l="lg",side:u="bottom",sideOffset:f=14,align:p="center",alignOffset:b=0,withArrow:m=!0,wide:h=!1,size:g="small",interactive:k=!1,usePortal:v=!0,className:y,children:j,delayDuration:w=300,closeOnOutsideClick:O=!0,open:P,onOpenChange:C}=e;if(!n)return(0,d.jsx)("span",{className:y,children:j});switch(i){case"blue":t="",r="bg-blue-selection";break;case"white":t="",r="bg-white";break;case"default":t="border-white/10 dark:border",r="bg-gray-950"}let Z=(0,d.jsxs)(c.VY,{collisionPadding:8,onPointerDownOutside:O?void 0:e=>e.preventDefault(),side:u,sideOffset:f,alignOffset:b,align:p,className:(0,s.default)("relative shadow-xs transition-opacity",o||"px-3 py-2","rounded-".concat(l),t,r,h?"max-w-sm":"max-w-xs",a),children:[(0,d.jsx)("span",{className:(0,s.default)("flex items-center whitespace-pre-wrap text-center font-semibold normal-case text-gray-100",{"text-xs":"xsmall"===g,"text-sm":"small"===g}),children:n}),m&&(0,d.jsx)(c.Eh,{asChild:!0,children:(0,d.jsx)(x,{className:r})})]});return(0,d.jsxs)(c.fC,{delayDuration:w,disableHoverableContent:!k,open:P,onOpenChange:C,children:[(0,d.jsx)(c.xz,{asChild:!0,children:(0,d.jsx)("span",{className:y,children:j})}),v?(0,d.jsx)(c.h_,{children:Z}):Z]})},x=l.Z.div(n||(n=(0,a.Z)(["relative top-[-4px] h-2 w-2 rotate-45 transform shadow-xs dark:border-r dark:border-b border-white/10"])))},50863:function(e,t,r){r.d(t,{J7:function(){return d},M4:function(){return b},aF:function(){return u},gG:function(){return f},w5:function(){return p}});var n,a,o,i,c,s=r(2346),l=r(15478);let d=l.Z.button(n||(n=(0,s.Z)(["\ntext-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary\nfocus-visible:bg-token-main-surface-secondary\nradix-state-active:text-token-text-secondary\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent\n"]))),u=l.Z.div(a||(a=(0,s.Z)(["flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative"]))),f=(0,l.Z)(u)(o||(o=(0,s.Z)(["","\nhover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5]\nradix-state-open:bg-[#f5f5f5]\ndark:hover:bg-token-main-surface-secondary\ndark:focus-visible:bg-token-main-surface-secondary\nrounded-md my-0 px-3 mx-2\ndark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"])),e=>e.spoofHovered?"bg-[#f5f5f5]":""),p=l.Z.div(i||(i=(0,s.Z)(["max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2"]))),b=l.Z.div(c||(c=(0,s.Z)(["popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl"])))},26671:function(e,t,r){r.d(t,{B:function(){return c}});var n=r(92379),a=r(31541),o=r(59246),i=r(7186);function c(e){let t=e+"CollectionProvider",[r,c]=(0,a.b)(t),[s,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",u=n.forwardRef((e,t)=>{let{scope:r,children:a}=e,c=l(d,r),s=(0,o.e)(t,c.collectionRef);return n.createElement(i.g7,{ref:s},a)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,a=n.useRef(null),o=n.useRef(new Map).current;return n.createElement(s,{scope:t,itemMap:o,collectionRef:a},r)},Slot:u,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:a,...c}=e,s=n.useRef(null),d=(0,o.e)(t,s),u=l(f,r);return n.useEffect(()=>(u.itemMap.set(s,{ref:s,...c}),()=>void u.itemMap.delete(s))),n.createElement(i.g7,{[p]:"",ref:d},a)})},function(t){let r=l(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},c]}},78571:function(e,t,r){r.d(t,{_:function(){return i}});var n=r(37088),a=r(92379),o=r(52125);let i=(0,a.forwardRef)((e,t)=>(0,a.createElement)(o.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},77420:function(e,t,r){r.d(t,{bU:function(){return j},fC:function(){return y}});var n=r(37088),a=r(92379),o=r(10132),i=r(59246),c=r(31541),s=r(48758),l=r(26468),d=r(8312),u=r(52125);let f="Switch",[p,b]=(0,c.b)(f),[x,m]=p(f),h=(0,a.forwardRef)((e,t)=>{let{__scopeSwitch:r,name:c,checked:l,defaultChecked:d,required:f,disabled:p,value:b="on",onCheckedChange:m,...h}=e,[g,y]=(0,a.useState)(null),j=(0,i.e)(t,e=>y(e)),w=(0,a.useRef)(!1),O=!g||!!g.closest("form"),[P=!1,C]=(0,s.T)({prop:l,defaultProp:d,onChange:m});return(0,a.createElement)(x,{scope:r,checked:P,disabled:p},(0,a.createElement)(u.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":P,"aria-required":f,"data-state":v(P),"data-disabled":p?"":void 0,disabled:p,value:b},h,{ref:j,onClick:(0,o.M)(e.onClick,e=>{C(e=>!e),O&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})})),O&&(0,a.createElement)(k,{control:g,bubbles:!w.current,name:c,value:b,checked:P,required:f,disabled:p,style:{transform:"translateX(-100%)"}}))}),g=(0,a.forwardRef)((e,t)=>{let{__scopeSwitch:r,...o}=e,i=m("SwitchThumb",r);return(0,a.createElement)(u.WV.span,(0,n.Z)({"data-state":v(i.checked),"data-disabled":i.disabled?"":void 0},o,{ref:t}))}),k=e=>{let{control:t,checked:r,bubbles:o=!0,...i}=e,c=(0,a.useRef)(null),s=(0,l.D)(r),u=(0,d.t)(t);return(0,a.useEffect)(()=>{let e=c.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[s,r,o]),(0,a.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:r},i,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}let y=h,j=g},26468:function(e,t,r){r.d(t,{D:function(){return a}});var n=r(92379);function a(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);
//# sourceMappingURL=6857.645bdd8b8abcf5e4.js.map