(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1165],{86647:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return O},config:function(){return _},default:function(){return b}});var n=t(39827),s=t(80084),i=t(81056),a=t(28816),o=t(23050),c=t(35250);function l(e){let{sharedConversationId:r,initiallyHighlightedMessageId:t,continueConversationUrl:n}=e;return(0,c.jsx)(a.gB.Provider,{value:{serverSharedThreadId:r},children:(0,c.jsx)(o.Z,{clientThreadId:r,setClientThreadId:()=>{},initiallyHighlightedMessageId:t,continueConversationUrl:n})})}var u=t(99784),d=t(82473),h=t(69483),p=t.n(h),f=t(70079),v=t(1454),g=t(68498),m=t(84692);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O=!0;let _={runtime:"nodejs"},P=(0,g.vU)({home:{id:"sharedConversation.home",defaultMessage:"Home"}});function b(e){if("error"===e.serverResponse.type)return(0,c.jsx)(D,{error:e.serverResponse.error});let r=x(x({},e),{},{conversationData:e.serverResponse.data});return e.continueMode?(0,c.jsx)(y,x({},r)):e.moderationMode?(0,c.jsx)(i.Z,{children:(0,c.jsx)(w,x({},r))}):(0,c.jsx)(w,x({},r))}function y(e){let{0:r}=(0,f.useState)(()=>(0,u.OX)());u.tQ.initThreadFromServerData(r,e.conversationData,!0,e.sharedConversationId);let t=(0,d.NL)();return(null!=e.plugins&&t.setQueryData(e.plugins.map(e=>e.id),e.plugins),null!=e.chatPageProps)?(0,c.jsx)(s.ZP,x(x({},e.chatPageProps),{},{clientThreadId:r})):null}function w(e){u.tQ.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0);let r=(0,d.NL)();return null!=e.plugins&&r.setQueryData(e.plugins.map(e=>e.id),e.plugins),(0,c.jsx)(l,x(x({},e),{},{initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url}))}function D(e){let{error:r}=e;return(0,c.jsx)("div",{className:"mx-8 mt-8 flex flex-col items-center sm:mt-16",children:(0,c.jsxs)("div",{className:"max-w-xl rounded-lg bg-red-500 px-8 py-4 text-white",role:"alert",children:[(0,c.jsx)("div",{children:r}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsxs)(p(),{href:"/",className:"flex items-center gap-2",children:[(0,c.jsx)(v.m6D,{className:"icon-sm"}),(0,c.jsx)(m.Z,x({},P.home))]})})]})})}},10485:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share/[[...shareParams]]",function(){return t(86647)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=10485)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...shareParams]]-ba0b467cc7fcd40f.js.map