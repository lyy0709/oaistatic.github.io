(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6737],{91033:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return _},default:function(){return b}});var r=n(39993),i=n(46042),a=n(82922),o=n(71023),s=n(80195),c=n(44506),u=n(14339),l=n(4123),d=n(61236),f=n(82473);async function h(e){let{ids:t}=e,n=[];for(let e of t)n.push(["ids",e]);let r=new URLSearchParams(n),i=await fetch("".concat("https://chatgpt.com/backend-api","/public/plugins/by-id?").concat(r),{method:"GET",headers:{"Content-Type":"application/json"}});if(200===i.status)return i.json();throw Error("Failed to get plugins by id: "+i.status)}n(62890),n(59449),n(77464);var p=n(70079),y=n(35250);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _=!0;function b(e){let t=e.sharedConversationId,{data:n,isError:r}=(0,d.a)({queryKey:["shared-conversation/".concat(t)],queryFn:()=>c.Z.getAuthedSharedConversation(t)}),{0:g}=(0,p.useState)(()=>(0,u.OX)()),{0:_,1:b}=(0,p.useState)(!1),v=(0,f.NL)();return(0,p.useEffect)(()=>{r&&(window.location.href=(0,s.M5)(s.LT.SHARE_NOT_FOUND))},[r]),(0,p.useEffect)(()=>{(async function(){if(n&&g){var e;let r=null!==(e=n.plugin_ids)&&void 0!==e?e:[];if(r.length>0){let e=await h({ids:r});v.setQueryData(e.items.map(e=>e.id),e)}u.tQ.initThreadFromServerData(g,n,!0,t),b(!0)}})()},[n,t,g,v]),_?e.continueMode?(0,y.jsx)(i.ZP,O(O({},e.chatPageProps),{},{clientThreadId:g})):(0,y.jsx)(l.gB.Provider,{value:{serverSharedThreadId:t,isIndexable:!1},children:(0,y.jsx)(a.Z,{clientThreadId:g,setClientThreadId:()=>{},initiallyHighlightedMessageId:null==n?void 0:n.highlighted_message_id,continueConversationUrl:null==n?void 0:n.continue_conversation_url})}):(0,y.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,y.jsx)(o.Z,{className:"text-token-text-tertiary"})})}},13990:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share/e/[[...shareParams]]",function(){return n(91033)}])}},function(e){e.O(0,[5960,3656,4736,3433,6883,3535,1086,2584,2565,4873,8852,2778,2888,9774,179],function(){return e(e.s=13990)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...shareParams]]-058fdcfcdd20b8a9.js.map