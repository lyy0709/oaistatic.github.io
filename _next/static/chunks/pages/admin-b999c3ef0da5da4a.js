(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{89678:function(e,t,r){var n=r(6627),s=r(85365),a=r(67948),i=Math.max,l=Math.min;e.exports=function(e,t,r){var o,c,u,d,m,f,g=0,p=!1,v=!1,j=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var r=o,n=c;return o=c=void 0,g=t,d=e.apply(n,r)}function b(e){var r=e-f,n=e-g;return void 0===f||r>=t||r<0||v&&n>=u}function h(){var e,r,n,a=s();if(b(a))return y(a);m=setTimeout(h,(e=a-f,r=a-g,n=t-e,v?l(n,u-r):n))}function y(e){return(m=void 0,j&&o)?x(e):(o=c=void 0,d)}function w(){var e,r=s(),n=b(r);if(o=arguments,c=this,f=r,n){if(void 0===m)return g=e=f,m=setTimeout(h,t),p?x(e):d;if(v)return clearTimeout(m),m=setTimeout(h,t),x(f)}return void 0===m&&(m=setTimeout(h,t)),d}return t=a(t)||0,n(r)&&(p=!!r.leading,u=(v="maxWait"in r)?i(a(r.maxWait)||0,t):u,j="trailing"in r?!!r.trailing:j),w.cancel=function(){void 0!==m&&clearTimeout(m),g=0,o=f=c=m=void 0},w.flush=function(){return void 0===m?d:y(s())},w}},85365:function(e,t,r){var n=r(73401);e.exports=function(){return n.Date.now()}},84746:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return eg},default:function(){return ep}});var n,s,a=r(98601),i=r(68986),l=r(2346),o=r(98095),c=r(93951),u=r(31438),d=r(60806),m=r(19841),f=r(89678),g=r.n(f),p=r(11941),v=r.n(p),j=r(34977),x=r(92379),b=r(62984),h=r(75172),y=r(68306),w=r(15478),M=r(11550),k=r(77748),O=r(25805),I=r(89794),P=r(30853),Z=r(88667),R=r(38482),q=r.n(R),N=r(36792),C=r(13350),E=r(2721),S=r(84760),T=r(42420),_=r(56032),D=r(24740);function W(e){let t=(0,h.Z)(),r=(0,T.NL)();return(0,_.D)({mutationFn:r=>{let{inviteId:n,role:s,acceptRequest:a}=r;return E.Z.patchWorkspaceInvite(e,n,{role:s,acceptRequest:a}).catch(e=>{D.m.danger(t.formatMessage(B.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function U(e){let t=(0,h.Z)(),r=(0,T.NL)();return(0,_.D)({mutationFn:r=>{let{email:n}=r;return E.Z.deleteWorkspaceInvite(e,n).catch(e=>{D.m.danger(t.formatMessage(B.deleteInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let B=(0,y.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var A=r(60211),F=r(44087),H=r(651);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let Q=q()(()=>r.e(6638).then(r.bind(r,76638)).then(e=>e.DirectorySyncResourceManagedIndication),{loadableGenerated:{webpack:()=>[76638]}});function L(e){var t,r;let{workspaceId:n,filterInputValue:s}=e,{0:a,1:i}=(0,x.useState)(0),l=(0,F.Gk)(n),o=(0,F.bE)(n),c=l||o,{data:u}=(r=25*a,(0,S.a)({queryKey:["workspace",n,"invites",r,s],queryFn:async()=>await E.Z.getWorkspaceInvites(n,r,25,s)}));if(void 0===u)return(0,H.jsx)(A.bq,{});let d=u.items,m=Math.ceil((null!==(t=u.total)&&void 0!==t?t:0)/25);return a>=m&&0!==m&&i(Math.max(m-1,0)),(0,H.jsxs)("div",{children:[(0,H.jsxs)(N.Z.Root,{fixed:!0,size:"normal",children:[(0,H.jsxs)(N.Z.Header,{children:[(0,H.jsx)(N.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,H.jsx)(b.Z,z({},J.email))}),(0,H.jsx)(N.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,H.jsx)("span",{className:c?"pl-3":"",children:(0,H.jsx)(b.Z,z({},J.role))})}),c&&(0,H.jsx)(N.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,H.jsxs)(N.Z.Body,{children:[d.map(e=>(0,H.jsx)(V,{workspaceId:n,invite:e,isCurrentUserOwner:l,currentUserHasAdminRights:c},e.id)),0===d.length&&(0,H.jsx)(N.Z.Row,{children:(0,H.jsx)(N.Z.Cell,{children:(0,H.jsx)("div",{className:"text-token-text-tertiary",children:(0,H.jsx)(b.Z,z({},J.noResults))})})})]})]}),m>1&&(0,H.jsx)("div",{className:"mt-2 flex justify-center",children:(0,H.jsx)(C.t,{currentPage:a,onChangeIndex:i,length:m})})]})}function V(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:s}=e,a=(0,F.Ap)(),i=W(t),l=U(t),o=function(e){let t=(0,h.Z)(),r=(0,T.NL)();return(0,_.D)({mutationFn:r=>{let{role:n,email:s}=r;return E.Z.addWorkspaceUsers(e,[s],n,!0).then(e=>{let{account_invites:r,errored_emails:n}=e;if(n.length>0)throw Error(n[0].error);r.length>0&&D.m.success(t.formatMessage(B.resendInviteSuccess,{email:s}))}).catch(e=>{D.m.danger(t.formatMessage(B.resendInviteError,{email:s,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t),{value:c}=(0,Z.sB)("3999712942");return(0,H.jsxs)(N.Z.Row,{disabled:i.isPending||l.isPending||l.isSuccess||o.isPending,children:[(0,H.jsx)(N.Z.Cell,{children:(0,H.jsxs)("span",{className:"flex flex-grow justify-between",children:[(0,H.jsx)("span",{children:r.email_address}),c&&r.is_scim_managed&&(0,H.jsx)(Q,{})]})}),(0,H.jsx)(N.Z.Cell,{children:n?(0,H.jsx)(A.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),s&&(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(N.Z.Cell,{children:(0,H.jsx)(G,{onDeleteUser:()=>{var e;l.mutate({email:null!==(e=r.email_address)&&void 0!==e?e:""})},onResendInvite:()=>{var e,t;o.mutate({email:null!==(e=r.email_address)&&void 0!==e?e:"",role:null!==(t=r.role)&&void 0!==t?t:""})},disabled:r.is_scim_managed})})})]})}function G(e){let{onDeleteUser:t,onResendInvite:r,disabled:n}=e,s=(0,h.Z)();return(0,H.jsx)(H.Fragment,{children:n?(0,H.jsx)(o.Z.Root,{children:(0,H.jsx)(o.Z.Trigger,{disabled:!0,children:(0,H.jsx)(P.u,{sideOffset:0,label:s.formatMessage(I.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,H.jsx)(k.nWS,{className:"icon-sm"})})})}):(0,H.jsxs)(o.Z.Root,{children:[(0,H.jsx)(o.Z.Trigger,{children:(0,H.jsx)(k.nWS,{className:"icon-sm"})}),(0,H.jsx)(o.Z.Portal,{children:(0,H.jsxs)(o.Z.Content,{children:[(0,H.jsx)(o.Z.Item,{onClick:r,children:(0,H.jsx)(b.Z,z({},J.resendInvite))}),(0,H.jsx)(o.Z.Item,{onClick:t,children:(0,H.jsx)(b.Z,z({},J.revokeInvite))})]})})]})})}let J=(0,y.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:s,1:a}=(0,x.useState)(0),{data:i}=(t=25*s,(0,S.a)({queryKey:["workspace",r,"invites","requests",t,n],queryFn:async()=>await E.Z.getWorkspaceInviteRequests(r,t,25,n)})),l=(0,F.Gk)(r),o=(0,F.bE)(r),c=(0,h.Z)(),u=l||o;if(void 0===i)return(0,H.jsx)(A.bq,{});let d=i.items,m=Math.ceil(i.total/25);return s>=m&&0!==m&&a(Math.max(m-1,0)),(0,H.jsxs)("div",{children:[(0,H.jsxs)(N.Z.Root,{fixed:!0,size:"normal",children:[(0,H.jsxs)(N.Z.Header,{children:[(0,H.jsx)(N.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,H.jsx)(b.Z,Y({},et.email))}),(0,H.jsx)(N.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,H.jsx)("span",{className:u?"pl-3":"",children:(0,H.jsx)(b.Z,Y({},et.role))})}),u&&(0,H.jsx)(N.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(et.actions)})]}),(0,H.jsxs)(N.Z.Body,{children:[d.map(e=>(0,H.jsx)(ee,{workspaceId:r,invite:e,isCurrentUserOwner:l,currentUserHasAdminRights:u},e.id)),0===d.length&&(0,H.jsx)(N.Z.Row,{children:(0,H.jsx)(N.Z.Cell,{children:(0,H.jsx)("div",{className:"text-token-text-tertiary",children:(0,H.jsx)(b.Z,Y({},et.noResults))})})})]})]}),m>1&&(0,H.jsx)("div",{className:"mt-2 flex justify-center",children:(0,H.jsx)(C.t,{currentPage:s,onChangeIndex:a,length:m})})]})}function ee(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:s}=e,a=(0,F.Ap)(),i=W(t),l=U(t),o=(0,h.Z)();return(0,H.jsxs)(N.Z.Row,{disabled:i.isPending||l.isPending||l.isPending,children:[(0,H.jsx)(N.Z.Cell,{children:r.email_address}),(0,H.jsx)(N.Z.Cell,{children:n?(0,H.jsx)(A.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),s&&(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(N.Z.Cell,{children:(0,H.jsxs)("div",{className:"flex gap-2",children:[(0,H.jsx)(M.z,{onClick:()=>i.mutate({inviteId:r.id,acceptRequest:!0}),children:o.formatMessage(et.accept)}),(0,H.jsx)(M.z,{color:"secondary",onClick:()=>l.mutate({email:r.email_address}),children:o.formatMessage(et.reject)})]})})})]})}let et=(0,y.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var er=r(12310);function en(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function es(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?en(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):en(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ea=((n=ea||{}).Members="members",n.Invites="invites",n.Requests="requests",n);function ei(e){let{tab:t}=e;switch(t){case ea.Members:return(0,H.jsx)(b.Z,es({},em.allMembers));case ea.Invites:return(0,H.jsx)(b.Z,es({},em.pendingInvites));case ea.Requests:return(0,H.jsx)(b.Z,es({},em.pendingRequests))}}function el(e){let{tab:t,filterInputValue:r,workspaceId:n}=e;switch(t){case ea.Members:return(0,H.jsx)(A.ZP,{workspaceId:n,filterInputValue:r});case ea.Invites:return(0,H.jsx)(L,{workspaceId:n,filterInputValue:r});case ea.Requests:return(0,H.jsx)($,{workspaceId:n,filterInputValue:r})}}let eo=(0,d.b)(ea);function ec(e){var t;let{currentWorkspaceId:r}=e,n=(0,h.Z)(),s=(0,c.t)(),a=null!==(t=(0,A.p5)(r))&&void 0!==t?t:"?",l=(0,F.qH)(s),d=null==s?void 0:s.isTeam(),m=(0,j.useRouter)(),f="string"==typeof m.query.tab&&eo(m.query.tab)?m.query.tab:ea.Members,{0:p,1:y}=(0,x.useState)(""),{0:w,1:I}=(0,x.useState)("");(0,x.useEffect)(()=>{I("")},[f]);let P=(0,x.useCallback)(g()(e=>{I(e)},250),[]),Z=(0,er.uo)(),R=!!(null!=Z&&Z.length);if(!s)return null;let q=s.isAdminOfAccount(),N=s.isOwnerOfAccount(),C=d||!R?[ea.Members,ea.Invites]:[ea.Members,ea.Invites,ea.Requests];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v(),{children:(0,H.jsx)("title",{children:n.formatMessage(em.adminBrowserPageTitle)})}),(0,H.jsx)(i.yG,{title:n.formatMessage(em.adminPageTitle),subtitle:(0,H.jsx)(b.Z,es({values:{totalMembers:a,planName:l}},em.totalMembers))}),(0,H.jsxs)(i.hb,{children:[(0,H.jsxs)(ed,{children:[(0,H.jsx)("div",{className:"mb-6 flex gap-2",children:C.map(e=>(0,H.jsx)(eu,{onClick:()=>{m.push(null!=e?"/admin?tab=".concat(e):"/admin")},isSelected:f===e,children:(0,H.jsx)(ei,{tab:e})},e))}),(0,H.jsxs)("div",{className:"flex gap-2",children:[(0,H.jsxs)("div",{className:"relative",children:[(0,H.jsx)(k.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,H.jsx)("input",{type:"text",value:p,onChange:e=>{y(e.target.value),P(e.target.value)},placeholder:n.formatMessage(em.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(q||N||d)&&(0,H.jsx)(M.z,{onClick:()=>{u.vm.openModal(u.B.InviteUsersToWorkspace)},icon:k.Vz5,children:(0,H.jsx)(b.Z,es({},em.inviteMemberButton))}),d?(0,H.jsx)(o.d,{triggerButton:(0,H.jsx)(M.z,{color:"secondary",icon:k.nWS}),children:(0,H.jsx)(o.Z.Item,{onClick:()=>{s&&u.vm.setLeaveWorkspaceData(s)},children:(0,H.jsx)(b.Z,es({},em.leaveWorkspace))})}):null]})]}),(0,H.jsx)(el,{workspaceId:r,tab:f,filterInputValue:w})]}),null!=s?(0,H.jsx)(O.Z,{workspace:s}):null]})}function eu(e){let{children:t,isSelected:r,onClick:n}=e;return(0,H.jsx)(M.z,{color:"ghost",className:(0,m.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:n,children:t})}let ed=w.Z.div(s||(s=(0,l.Z)(["mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between"]))),em=(0,y.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ef(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var eg=!0;function ep(e){return(0,H.jsx)(ec,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ef(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ef(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}ep.getLayout=function(e){return(0,H.jsx)(i.ZP,{mobilePageTitle:"Members",children:e})}},60806:function(e,t,r){"use strict";function n(e){let t=Object.values(e);return e=>t.includes(e)}r.d(t,{b:function(){return n}})},37300:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(84746)}])}},function(e){e.O(0,[2205,4198,5158,4089,1133,3718,6481,3088,1318,1612,2349,5162,6013,9830,9725,8442,3752,8110,2879,3662,2888,9774,179],function(){return e(e.s=37300)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-b999c3ef0da5da4a.js.map