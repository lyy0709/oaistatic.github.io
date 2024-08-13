"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6746,1793],{96746:function(e,t,s){s.d(t,{Bo:function(){return el},Eu:function(){return ei},j4:function(){return er}});var r,i,a,l,o=s(98601),n=s(2346),c=s(99333),d=s(31438),m=s(84760),u=s(99976),x=s(61619),g=s(88667),f=s(19841),p=s(88600),h=s(18939),j=s.n(h),b=s(96594),v=s.n(b),y=s(24098),N=s.n(y),z=s(92379),w=s(62984),k=s(68306),O=s(15478),M=s(11550),Z=s(97537),_=s(98095),P=s(30115),C=s(77748),D=s(24434),E=s(6066),L=s(39004),S=s(61793),I=s(10083),G=s(99555),R=s(52571),A=s(651);function B(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function U(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?B(Object(s),!0).forEach(function(t){(0,o.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):B(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let q=O.Z.div(r||(r=(0,n.Z)(["font-bold mt-6"]))),K=e=>(0,m.a)({queryFn:async()=>G.U.getAbout(e),queryKey:["gizmo","about",{gizmoId:e}]}),F=e=>(0,m.a)({queryFn:async()=>G.U.getCreatorSlice({creatorId:e}),queryKey:["gizmo","creator",{creatorId:e}],enabled:null!=e}),T=e=>{switch(e.type){case c.qK.BROWSER:return{title:eo.browsing};case c.qK.PYTHON:return{title:eo.dataAnalysis};case c.qK.DALLE:return{title:eo.dalle};case c.qK.MEMORY:return{title:eo.memory,description:eo.memoryDescription};case c.qK.JIT_PLUGIN:return{title:eo.actions,description:eo.actionsDescription};default:return null}},H=e=>{var t;let{tools:s}=e,r=v()(null!=s?s:[],e=>e.type),i=j()(null!==(t=r.map(T).filter(e=>null!=e))&&void 0!==t?t:[]);return 0===i.length?null:(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)(q,{className:"mb-2",children:(0,A.jsx)(w.Z,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),i.map(e=>(0,A.jsxs)("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[(0,A.jsx)(C.$As,{className:"icon-sm mt-0.5 text-green-600"}),(0,A.jsxs)("div",{children:[(0,A.jsx)(w.Z,U({},e.title)),null!=e.description&&(0,A.jsx)("div",{className:"text-xs text-token-text-tertiary",children:(0,A.jsx)(w.Z,U({},e.description))})]})]},e.title.id))]})},X=O.Z.div(i||(i=(0,n.Z)(["flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2"]))),W=O.Z.div(a||(a=(0,n.Z)(["flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none"]))),Y=O.Z.div(l||(l=(0,n.Z)(["text-xs text-token-text-tertiary"]))),J=e=>{let{gizmoResource:t}=e;return(0,A.jsxs)(_.d,{contentAlign:"end",sideOffset:4,triggerButton:(0,A.jsx)(M.z,{color:"ghost",icon:C.nWS}),children:[(0,A.jsx)(S.GizmoKeepInSidebarMenuItem,{gizmoResource:t}),(0,A.jsx)(R.C,{gizmoResource:t})]})},Q=e=>{let{aboutBlock:t}=e;switch(t.type){case"generic_title_subtitle":return(0,A.jsxs)(X,{children:[(0,A.jsx)(W,{children:t.title}),(0,A.jsx)(Y,{children:t.subtitle})]});case"rating":return(0,A.jsxs)(X,{children:[(0,A.jsxs)(W,{children:[(0,A.jsx)(C.e0l,{className:"icon-sm"}),t.avg]}),(0,A.jsx)(Y,{children:t.count_str})]});case"category":var s;if(null==t.category_ranking)return(0,A.jsxs)(X,{children:[(0,A.jsx)(W,{children:t.category_str}),(0,A.jsx)(Y,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.category",defaultMessage:"Category"})})]});return(0,A.jsxs)(X,{children:[(0,A.jsx)(W,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:t.category_ranking}})}),(0,A.jsx)(Y,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:t.category_str,locale:null!==(s=t.category_locale_str)&&void 0!==s?s:""}})})]})}},V=e=>{let{blocks:t}=e;return(0,A.jsx)("div",{className:"flex justify-center",children:t.map(e=>(0,A.jsx)(Q,{aboutBlock:e},e.type))})},$=e=>{let{href:t,onClick:s,children:r}=e;return(0,A.jsx)(p.E.div,{whileTap:{scale:.98},className:"flex",children:(0,A.jsxs)(N(),{href:t,onClick:s,className:(0,f.default)("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[(0,A.jsx)("div",{className:"flex h-full items-center",children:(0,A.jsx)("div",{className:"line-clamp-2 text-sm",children:r})}),(0,A.jsx)("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:(0,A.jsx)("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),(0,A.jsx)("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:(0,A.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:(0,A.jsx)(C.kBi,{className:"icon-md text-token-text-primary"})})})]})})},ee=e=>{var t;let{gizmo:s,onClose:r}=e,i=(0,g.sB)("1825130190").value,a=null===(t=s.gizmo.display.prompt_starters)||void 0===t?void 0:t.slice(0,4);return null!=a&&0!==a.length&&i?(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)(q,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),(0,A.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:a.map((e,t)=>(0,A.jsx)(et,{gizmo:s,prompt:e,onClick:r},t))})]}):null};function et(e){var t;let{gizmo:s,prompt:r,onClick:i}=e,a=(0,L.EF)(s,r);return(0,A.jsx)($,{href:null!==(t=null==a?void 0:a.toString())&&void 0!==t?t:"#",onClick:i,children:r})}let es=e=>{let{reviewStats:t}=e;return(0,g.sB)("1825130190").value?(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("div",{className:"mb-2",children:(0,A.jsx)(q,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),null!=t?[5,4,3,2,1].map(e=>{var s;return(0,A.jsxs)("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[(0,A.jsxs)("div",{className:"icon-lg relative",children:[(0,A.jsx)(C.e0l,{className:"icon-lg text-green-500"}),(0,A.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:e})]}),(0,A.jsx)("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:(0,A.jsx)("div",{className:"h-full bg-green-500",style:{width:"".concat((null!==(s=null==t?void 0:t.by_rating[e-1])&&void 0!==s?s:0)*100,"%")}})})]},e)}):(0,A.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,A.jsx)(w.Z,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null},er=e=>{let{gizmoId:t,creatorId:s}=e;return(0,d.EV)(d.B.GPTDetails)?(0,A.jsx)(ei,{gizmoId:t,creatorId:s,onClose:()=>d.vm.closeModal(d.B.GPTDetails)}):null},ei=e=>{var t;let{gizmoId:s,creatorId:r,onClose:i,children:a}=e,l=K(s),{data:o}=F(r),n=null===(t=l.data)||void 0===t?void 0:t.gizmo,c=(0,L.b9)(s),d=null==c?void 0:c.data;return(0,z.useEffect)(()=>{u.A.logEvent(x.M.showDetailModal,{gizmo_id:s})},[s]),(0,A.jsx)(D.Z,{isOpen:!0,onClose:i,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[80vh] max-w-xl flex-col",children:(0,A.jsx)("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden px-2 py-4",children:l.isLoading||c.isLoading?(0,A.jsx)("div",{className:"flex h-40 items-center justify-center pb-10",children:(0,A.jsx)(Z.Z,{})}):null==n||null==d||null==l.data?(0,A.jsx)("div",{className:"flex flex-col gap-4 pb-10",children:(0,A.jsx)(w.Z,{id:"gizmo.about.notFound",defaultMessage:"GPT not found"})}):(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-6 pb-20 pt-16",children:[(0,A.jsx)("div",{className:"absolute top-0",children:(0,A.jsxs)("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[d&&(0,A.jsx)(J,{gizmoResource:d}),(0,A.jsx)(P.P,{onClick:i})]})}),(0,A.jsx)("div",{className:"absolute bottom-[64px]",children:(0,A.jsx)("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:a})}),(0,A.jsx)(I.r,{gizmo:d,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),(0,A.jsx)(V,{blocks:l.data.about_blocks}),(0,A.jsx)(ee,{gizmo:d,onClose:i}),(0,A.jsx)(H,{tools:d.tools}),(0,A.jsx)(es,{reviewStats:l.data.review_stats}),o&&(0,A.jsx)(ea,{gizmos:o.items})]})})})})};function ea(e){let{gizmos:t}=e;return t.length>0?(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("div",{className:"mb-2",children:(0,A.jsx)(q,{children:(0,A.jsx)(w.Z,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:t[0].gizmo.author.display_name}})})}),(0,A.jsx)("div",{className:(0,f.default)("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:t&&t.map(e=>(0,A.jsx)("a",{onClick:()=>{u.A.logEvent(x.M.detailClickGizmo,{gizmo_id:e.gizmo.id})},href:(0,L.m_)(e),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:(0,A.jsx)(E.X,{resource:e})},e.gizmo.id))})]}):null}let el=e=>(0,A.jsx)("div",{className:"flex flex-grow flex-col items-center",children:(0,A.jsxs)(M.z,U(U({color:"primary",className:"h-12 w-full",icon:C.kBi},e),{},{children:[(0,A.jsx)(w.Z,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),e.children]}))}),eo=(0,k.vU)({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL\xb7E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}})},6066:function(e,t,s){s.d(t,{X:function(){return c}});var r=s(77748),i=s(19841),a=s(83036),l=s(12128),o=s(10080),n=s(651);function c(e){var t,s,c;let{resource:d,grayedOut:m,className:u}=e,x=null===(t=d.gizmo.vanity_metrics)||void 0===t?void 0:t.num_conversations_str;return(0,n.jsxs)("div",{className:(0,i.default)("flex w-full flex-grow items-center gap-4 overflow-hidden",u),children:[(0,n.jsx)(l.Z,{isFirstParty:!!(null!==(s=d.gizmo.tags)&&void 0!==s&&s.includes(o.U9.FirstParty)),src:null!==(c=d.gizmo.display.profile_picture_url)&&void 0!==c?c:void 0,className:(0,i.default)("h-12 w-12 flex-shrink-0",m&&"grayscale group-hover:grayscale-0")}),(0,n.jsxs)("div",{className:"overflow-hidden text-ellipsis break-words",children:[(0,n.jsx)("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:d.gizmo.display.name}),(0,n.jsx)("span",{className:"line-clamp-3 text-xs",children:d.gizmo.display.description}),(0,n.jsxs)("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[(0,n.jsx)(a.Z,{gizmo:d,className:"text-xs",hideLink:!0}),x&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"text-[8px]",children:"•"}),(0,n.jsx)(r.qZr,{className:"h-3 w-3"}),x]})]})]})]})}},61793:function(e,t,s){s.r(t),s.d(t,{GizmoKeepInSidebarMenuItem:function(){return d}});var r=s(98095),i=s(77748),a=s(42420),l=s(75172),o=s(99555),n=s(39004),c=s(651);function d(e){let{gizmoResource:t}=e,s=function(e){let{data:{gizmos:t}={}}=(0,n.Wz)();return!!t&&t.some(t=>t.resource.gizmo.id===e)}(t.gizmo.id),d=(0,l.Z)(),m=s?d.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):d.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),u=(0,a.NL)();return(0,c.jsx)(r.Z.Item,{onClick:()=>{o.U.updateGizmoSidebar(u,t.gizmo.id,s?"hide":"keep")},icon:s?i.Xl7:i.qQX,children:m})}},52571:function(e,t,s){s.d(t,{C:function(){return p}});var r=s(98601),i=s(98095),a=s(77748),l=s(79746),o=s(82363),n=s(92379),c=s(62984),d=s(68306),m=s(39004),u=s(10080),x=s(651);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function p(e){let{gizmoResource:t}=e,{0:s,1:r}=(0,n.useState)(!1);return t.gizmo.share_recipient===u.Zz.Private?null:(0,x.jsx)(i.Z.Item,{onClick:async e=>{e.stopPropagation(),e.preventDefault();try{let e=t.gizmo.short_url?(0,m.AG)(t.gizmo.short_url):"".concat("https://chatgpt.com").concat((0,m.m_)(t));await (0,l.v)(e),r(!0),setTimeout(()=>{r(!1)},2e3)}catch(e){o.U.addError(e);return}},icon:a.xPt,children:s?(0,x.jsx)(c.Z,f({},h.copiedURL)):(0,x.jsx)(c.Z,f({},h.copyLink))})}let h=(0,d.vU)({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}})}}]);
//# sourceMappingURL=6746-30895ff7da1aebb6.js.map