"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1220],{12715:function(e,t,n){n.d(t,{m:function(){return s}});var r=n(82783),a=n(92379),o=n(651);function s(e){let{show:t,appear:n,children:s}=e;return(0,o.jsx)(r.u,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",show:t,appear:n,children:s})}},31262:function(e,t,n){n.d(t,{S:function(){return R},W:function(){return G}});var r=n(94521),a=n(98890),o=n(67165),s=n(81412),i=n(87055),c=n(4702),l=n(27603),u=n(55371),d=n(24040),p=n(98506),f=n(45779),m=n(35226),h=n(53566),g=n(96271),x=n(50406),j=n(93747),v=n(15236),b=n(19841),k=n(61888),y=n(92379),w=n(26123),O=n(72256),C=n(25940),M=n(27084),P=n(12715),N=n(50684),Z=n(55775),_=n(62484),A=n(44230),S=n(73746),W=n(33112),E=n(58171),D=n(92187),I=n(74760),T=n(17912),F=n(651);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function G(e){let{onClickSettings:t}=e;return(0,F.jsxs)(h.v,{as:"div",className:"group relative",children:[(0,F.jsx)(Q,{}),(0,F.jsx)(P.m,{children:(0,F.jsx)(h.v.Items,{className:"popover absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none",children:(0,F.jsx)(U,{onClickSettings:t})})})]})}function B(){let e=(0,c.t)(),t=(0,w.Z)(),n=(0,d.aF)();return n?(0,F.jsxs)("div",{className:"flex items-center justify-between gap-2 py-2 pl-3 pr-2 juice:pl-5 juice:pr-4",children:[(0,F.jsx)("div",{className:"text-sm text-token-text-secondary",children:null==n?void 0:n.email}),(null==e?void 0:e.features.includes(l.L0.Teams))&&(0,F.jsx)(_.u,{label:t.formatMessage(J.addWorkspaceTooltip),side:"right",children:(0,F.jsx)("button",{onClick:()=>(0,W.MG)("profile menu"),children:(0,F.jsx)(A.Vz5,{className:"icon-sm text-token-text-primary"})})})]}):null}function V(){let e=(0,c.t)();return null==e?(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("div",{className:"w-full px-3 py-2",children:(0,F.jsx)(N.Z,{})})}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(B,{}),(0,F.jsx)("div",{className:"flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",children:(0,F.jsx)(q,{workspace:e,isLoading:!1,currentWorkspaceId:e.id,showCheck:!1})})]})}function R(e){let{menuItemComponent:t}=e,n=(0,m.NL)(),{data:r}=(0,c.rk)(),a=(0,c.t)(),{0:s,1:i}=(0,y.useState)(!1),l=(0,S.Q)(),u=(0,d.aF)();if(!a||!r)return null;let p=a.isWorkspaceAccount(),h=r.accountItems.length>1,g=r.accountItems,x=(0,k.compact)([g.find(e=>e.isPersonalAccount()),...g.filter(e=>!e.isPersonalAccount())]);if(x.sort((e,t)=>e.isPersonalAccount()?1:t.isPersonalAccount()?-1:0),!h)return p?(0,F.jsx)(V,{}):(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("div",{className:"ml-3 mr-2 py-2 text-sm text-token-text-secondary",children:null==u?void 0:u.email})});let j=x.map(e=>(0,F.jsx)(t,{disabled:e.isDeactivated(),onClick:()=>{e.isDeactivated()||e.id===(null==a?void 0:a.id)||(i(!0),(0,c.nq)(n,e.id),(0,f.M)())},className:"radix-disabled:pointer-events-auto radix-disabled:hover:bg-transparent",children:e.isDeactivated()?(0,F.jsx)(H,{workspace:e,isLoading:s}):(0,F.jsx)(q,{workspace:e,isLoading:s,currentWorkspaceId:null==a?void 0:a.id})},e.id));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(B,{}),l?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o.Z.Separator,{}),j]}):(0,F.jsx)("div",{className:"flex w-full flex-col",children:j})]})}function q(e){let{workspace:t,isLoading:n,currentWorkspaceId:r,showCheck:a=!0}=e;return(0,F.jsxs)("div",{className:"flex w-full items-center gap-2.5",children:[(0,F.jsx)("span",{className:"flex items-center justify-center juice:h-5 juice:w-5",children:(0,F.jsx)(M.zf,{iconSize:"small",workspace:t,className:(0,b.default)({"flex-shrink-0":!0})})}),(0,F.jsx)("div",{className:"line-clamp-1 flex-grow text-token-text-primary",children:(0,Z.CV)((0,w.Z)(),t)}),n&&(0,F.jsx)(N.Z,{}),!n&&a&&(0,F.jsx)("span",{className:"text-token-text-primary",children:t.id===r?(0,F.jsx)(s.p9,{className:"icon-sm"}):(0,F.jsx)(F.Fragment,{})})]})}function H(e){let{workspace:t,isLoading:n}=e,r=(0,w.Z)(),s=t.isOwnerOfAccount(),{0:i,1:c}=(0,y.useState)(!1),l=(0,a.p5)(t.id),d=(0,S.Q)();return(0,y.useEffect)(()=>{null!=l&&i&&(u.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(l,E.Y6),existingAccount:t}),c(!1))},[l,i,t]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(_.u,{className:"flex w-full flex-1 items-center gap-2.5",label:r.formatMessage(J.disabledWorkspaceTooltip),sideOffset:d?20:52,side:"right",children:[(0,F.jsx)("span",{className:"flex items-center justify-center juice:h-5 juice:w-5",children:(0,F.jsx)(A.oVl,{className:"icon-sm flex-shrink-0 opacity-30"})}),(0,F.jsx)("div",{className:"truncate opacity-30",children:(0,Z.CV)(r,t)})]}),n&&(0,F.jsx)(N.Z,{}),!n&&(0,F.jsxs)(o.Z.Root,{children:[(0,F.jsx)(g.xz,{className:"rounded text-center hover:bg-token-main-surface-secondary",children:(0,F.jsx)(A.nWS,{className:"icon-sm m-1"})}),(0,F.jsx)(o.Z.Portal,{children:(0,F.jsxs)(o.Z.Content,{children:[s&&(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(o.Z.Item,{onClick:()=>{null==l?c(!0):u.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(l,E.Y6),existingAccount:t})},children:i?(0,F.jsx)(N.Z,{}):(0,F.jsx)(O.Z,{id:"navigation.reactivateWorkspace",defaultMessage:"Reactivate workspace"})})}),(0,F.jsx)(o.Z.Item,{onClick:()=>{u.vm.setLeaveWorkspaceData(t)},children:(0,F.jsx)(O.Z,{id:"navigation.leaveWorkspace",defaultMessage:"Leave workspace"})})]})})]})]})}function U(e){let{onClickSettings:t}=e,{data:n}=(0,c.rk)(),r=(0,c.t)(),a=(0,p.w$)(),o=(0,i.f6)(),{openModal:s}=(0,i.Dr)();if(!r||!n)return null;let l=r.isWorkspaceAccount();return(0,F.jsxs)("nav",{children:[(0,F.jsx)(R,{menuItemComponent:D.ZP}),(0,F.jsx)(D.R,{}),l?(0,F.jsx)(T.b,{menuItemComponent:D.ZP,routedMenuItemComponent:D.IS}):(0,F.jsx)(I.W,{menuItemComponent:D.ZP}),!a&&(0,F.jsx)(D.ZP,{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{j.A.logEvent(v.M.clickFaqLink)},icon:A.Pfi,children:(0,F.jsx)(O.Z,L({},J.helpAndFaq))}),(0,F.jsx)(D.ZP,{onClick:t,icon:A.SWE,children:(0,F.jsx)(O.Z,L({},J.settings))}),o&&(0,F.jsx)($,{openDownloadModal:s}),(0,F.jsx)(D.R,{}),(0,F.jsx)(D.ZP,{onClick:()=>{j.A.logEvent(v.M.clickLogOut,{eventSource:"mouse"}),(0,x.w7)()},icon:A.iz5,children:(0,F.jsx)(O.Z,L({},J.logOut))})]})}function Q(){return(0,d.aF)()?(0,F.jsx)(Y,{}):null}function $(e){let{openDownloadModal:t}=e;return(0,F.jsxs)("span",{children:[(0,F.jsx)(D.R,{}),(0,F.jsx)(D.ZP,{icon:A.gFD,onClick:()=>{j.A.logEvent(v.M.accountMenuClickDownloadApp),t()},children:(0,F.jsx)(O.Z,L({},J.downloadApp))})]})}function Y(){let{data:e}=(0,c.rk)(),t=(0,c.t)(),n=(0,Z.$3)(),r=(0,Z.cI)();if(!t||!e)return null;let a=t.isWorkspaceAccount(),o=e.accountItems.length>1;return(0,F.jsxs)(h.v.Button,{"data-testid":"profile-button",className:"flex w-full max-w-[100%] items-center gap-2 rounded-lg p-2 text-sm  hover:bg-token-sidebar-surface-secondary group-ui-open:bg-token-sidebar-surface-secondary",children:[(0,F.jsx)("div",{className:"flex-shrink-0",children:(0,F.jsx)(M.zf,{iconSize:"gizmo"})}),(0,F.jsxs)("div",{className:"relative -top-px grow -space-y-px truncate text-start text-token-text-primary",children:[(0,F.jsx)("div",{dir:"auto",children:r}),a||o?(0,F.jsx)("div",{className:"truncate text-xs text-token-text-secondary",dir:"auto",children:n}):null]})]})}let J=(0,C.vU)({helpAndFaq:{id:"navigation.helpAndFaq",defaultMessage:"Help & FAQ"},settings:{id:"navigation.settings",defaultMessage:"Settings"},logOut:{id:"navigation.logOut",defaultMessage:"Log out"},accountSwitcherTitle:{id:"navigation.accountSwitcherTitle",defaultMessage:"Workspaces"},defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},addWorkspaceTooltip:{id:"navigation.addWorkspaceTooltip",defaultMessage:"Create a Team workspace"},disabledWorkspaceTooltip:{id:"navigation.disabledWorkspaceTooltip",defaultMessage:"This workspace has been deactivated"},downloadApp:{id:"navigation.downloadMacApp",defaultMessage:"Download the macOS app"}})},92187:function(e,t,n){n.d(t,{IS:function(){return g},R:function(){return v},Vq:function(){return b},ZB:function(){return x},ZP:function(){return h},zV:function(){return j}});var r,a,o,s,i,c=n(41141),l=n(53566),u=n(19841),d=n(40319),p=n.n(d),f=n(74091),m=n(651);function h(e){let{onClick:t,href:n,target:r,children:a,disabled:o,icon:s}=e;return(0,m.jsx)(l.v.Item,{disabled:o,children:e=>{let{active:i}=e;return(0,m.jsxs)(x,{onClick:t,href:n,target:r,className:(0,u.default)({"bg-token-sidebar-surface-secondary":i,"hover:bg-token-sidebar-surface-secondary":!i&&!o}),children:[s&&(0,m.jsx)(s,{className:"icon-md"}),a]})}})}function g(e){let{href:t,children:n,icon:r}=e;return(0,m.jsx)(l.v.Item,{children:e=>{let{active:a}=e;return(0,m.jsx)(p(),{href:t,children:(0,m.jsxs)(x,{$as:"span",className:(0,u.default)(a?"bg-token-sidebar-surface-secondary":"cursor-pointer"),children:[r&&(0,m.jsx)(r,{className:"icon-md"}),n]})})}})}f.Z.a(r||(r=(0,c.Z)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"])));let x=f.Z.a(a||(a=(0,c.Z)(["flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center"]))),j=(0,f.Z)(x)(o||(o=(0,c.Z)(["border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]"]))),v=f.Z.div(s||(s=(0,c.Z)(["h-px bg-token-border-light my-1.5"]))),b=(0,f.Z)(x)(i||(i=(0,c.Z)(["",""])),e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary")},74760:function(e,t,n){n.d(t,{W:function(){return g}});var r=n(81412),a=n(33112),o=n(4702),s=n(55371),i=n(27860),c=n(93747),l=n(15236),u=n(43128),d=n.n(u),p=n(92379),f=n(72256),m=n(44230),h=n(651);function g(e){let{menuItemComponent:t}=e,n=(0,o.t)(),u=(0,p.useCallback)(()=>{c.A.logEvent(l.M.clickSidebarAccountPortalMenuItem),(0,a.MG)("Sidebar account menu item")},[]);return(0,h.jsxs)(h.Fragment,{children:[(null==n?void 0:n.hasPaidSubscription())&&(0,h.jsx)(t,{onClick:u,icon:r.PQ,children:(0,h.jsx)(f.Z,{id:"popoverNavigation.myPlan",defaultMessage:"My plan"})}),(null==n?void 0:n.canInteractWithGizmos())&&(0,h.jsx)(t,{onClick:()=>{c.A.logEvent(l.M.accountMenuClickMyGPTs),d().push((0,i.L7)())},icon:r.PN,children:(0,h.jsx)(f.Z,{id:"popoverNavigation.myGpts",defaultMessage:"My GPTs"})}),(0,h.jsx)(t,{icon:m.A2w,onClick:()=>{s.vm.openModal(s.B.UserContext),c.A.logEvent(l.M.accountMenuClickCustomizeChatGPT)},children:(0,h.jsx)(f.Z,{id:"popoverNavigation.chatPreferences.1",defaultMessage:"Customize ChatGPT"})})]})}},17912:function(e,t,n){n.d(t,{b:function(){return h}});var r=n(94521),a=n(81412),o=n(55371),s=n(27860),i=n(93747),c=n(15236),l=n(72256),u=n(25940),d=n(44230),p=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(e){let{menuItemComponent:t,routedMenuItemComponent:n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{href:"/admin",icon:d.ZyV,children:(0,p.jsx)(l.Z,m({},g.myWorkspaceSettings))}),(0,p.jsx)(n,{href:(0,s.L7)(),onClick:()=>{i.A.logEvent(c.M.accountMenuClickMyGPTs)},icon:a.PN,children:(0,p.jsx)(l.Z,m({},g.myGpts))}),(0,p.jsx)(t,{onClick:()=>{o.vm.openModal(o.B.UserContext),i.A.logEvent(c.M.accountMenuClickCustomizeChatGPT)},icon:d.A2w,children:(0,p.jsx)(l.Z,m({},g.chatPreferences))})]})}let g=(0,u.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Manage workspace"},chatPreferences:{id:"B4s/Jz",defaultMessage:"Customize ChatGPT"},myGpts:{id:"workspacePopoverNavigation.myGpts",defaultMessage:"My GPTs"}})},93013:function(e,t,n){n.d(t,{f:function(){return g}});var r,a=n(94521),o=n(17379),s=n(41141),i=n(19841),c=n(92379),l=n(74091),u=n(73746),d=n(651);let p=["icon","children"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let h=l.Z.button(r||(r=(0,s.Z)(["flex h-10 w-full items-center gap-2 rounded-lg px-2 font-medium text-token-text-primary hover:bg-token-sidebar-surface-secondary juice:gap-2.5 juice:font-normal"]))),g=(0,c.forwardRef)(function(e,t){let{icon:n,children:r}=e,a=(0,o.Z)(e,p),s=(0,u.Q)();return(0,d.jsxs)(h,m(m({ref:t},a),{},{children:[(0,d.jsx)("div",{className:(0,i.default)("flex items-center justify-center text-token-text-secondary",s?"h-6 w-6":"h-7 w-7"),children:(0,d.jsx)(n,{className:"icon-md"})}),(0,d.jsx)("span",{className:"text-sm",children:r})]}))})},64638:function(e,t,n){n.d(t,{Xl:function(){return x},yE:function(){return j}});var r=n(18454),a=n(55371),o=n(93747),s=n(15236),i=n(17927),c=n(48580),l=n(43128),u=n.n(l),d=n(92379),p=n(26123),f=n(72256),m=n(5443),h=n(49217),g=n(651);function x(){!0===i.m.getItem(i.F.HasSeenNewChatModal)?u().push("/"):(i.m.setItem(i.F.HasSeenNewChatModal,!0),a.vm.openModal(a.B.NoAuthNewChat))}function j(){return(0,a.EV)(a.B.NoAuthNewChat)?(0,g.jsx)(v,{onClose:()=>{a.vm.closeModal(a.B.NoAuthNewChat)}}):null}function v(e){let{onClose:t}=e,n=(0,p.Z)(),a=(0,r.b)();return(0,d.useEffect)(()=>{c.m9.logEvent("chatgpt_new_chat_modal_shown"),o.A.logEvent(s.M.newChatModalShown)},[]),(0,g.jsxs)(h.Z,{isOpen:!0,title:n.formatMessage({id:"NewChatModal.title",defaultMessage:"New chat?"}),type:"success",onClose:t,children:[(0,g.jsx)("p",{className:"mb-6",children:(0,g.jsx)(f.Z,{id:"gV6y+5",defaultMessage:"Your current chat will no longer be accessible. <signup>Sign up</signup> or <login>log in</login> to save chats.",values:{signup:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=a({authType:"signup"});c.m9.logEvent("chatgpt_new_chat_modal_sign_up_link_clicked"),o.A.logSignUpButtonClicked({location:"New chat modal",provider:t})},children:e}),login:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=a({authType:"login"});c.m9.logEvent("chatgpt_new_chat_modal_log_in_link_clicked"),o.A.logLogInButtonClicked({location:"New chat modal",provider:t})},children:e})}})}),(0,g.jsxs)("div",{className:"flex flex-row justify-end space-x-2",children:[(0,g.jsx)(m.z,{onClick:()=>{c.m9.logEvent("chatgpt_new_chat_modal_cancel_button_clicked"),o.A.logEvent(s.M.newChatModalCancelButtonClicked),t()},color:"secondary",children:(0,g.jsx)(f.Z,{id:"NewChatModal.cancel",defaultMessage:"Cancel"})}),(0,g.jsx)(m.z,{onClick:()=>{c.m9.logEvent("chatgpt_new_chat_modal_new_chat_button_clicked"),o.A.logNewChatButtonClicked({location:"New Chat Modal New Chat Button"}),u().push("/"),t()},children:(0,g.jsx)(f.Z,{id:"NewChatModal.confirm",defaultMessage:"New chat"})})]})]})}},18454:function(e,t,n){n.d(t,{A:function(){return f},b:function(){return m}});var r=n(94521),a=n(50406),o=n(53985),s=n(58328),i=n(47858),c=n(12214),l=n(83263),u=n(43128);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t){return t?a.Ho.LoginWeb:a.Ho.Auth0}function m(){let e=(0,u.useRouter)(),{value:t}=(0,c.fW)("chatgpt-use-login-web"),n=(0,i.L)();return function(){let{authType:r="signup",callbackUrl:a="/"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=f(e,t),c=n();return(0,l.signIn)(i,{callbackUrl:a},p(p({prompt:"login",screen_hint:r},(0,o.gk)((0,s.f3)())),c?{use_email_otp:"true"}:{})),i}}},47858:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(12214);function a(){let{layer:e}=(0,r.AH)("chatgpt_login_signup_layer");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=1220-366dae71e71d52d2.js.map