(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2886],{18939:function(e){e.exports=function(e){for(var t=-1,a=null==e?0:e.length,o=0,r=[];++t<a;){var s=e[t];s&&(r[o++]=s)}return r}},32378:function(e,t,a){"use strict";a.d(t,{b:function(){return r}});var o=a(651);function r(){return(0,o.jsx)("hr",{className:"w-full border-token-border-xheavy"})}},6440:function(e,t,a){"use strict";var o,r=a(2346),s=a(98601),n=a(19841),i=a(92379),l=a(15478),c=a(651);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){(0,s.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}t.Z=i.forwardRef(function(e,t){let{name:a,placeholder:o,type:r,list:s,displayName:l,onChange:u,onFocus:p,onBlur:m,value:g,saveOnBlur:b,icon:h,onInputIconClick:y,className:x,autoComplete:j,autoFocus:v,onPressEnter:M,disabled:k,maxLength:w,color:O="tertiary"}=e,{0:C,1:Z}=(0,i.useState)(g),N=(0,i.useCallback)(e=>{null==m||m(e),b&&Z(e.target.value)},[m,b]),P=(0,i.useCallback)(e=>{null==u||u(e),b&&Z(e.target.value)},[u,b]),D=(0,i.useCallback)(e=>{"Enter"===e.key&&M&&(e.preventDefault(),M(C))},[M,C]);(0,i.useEffect)(()=>{Z(g)},[g]);let S=d(d({},b?{}:{value:g}),b?{value:C}:{});return(0,c.jsxs)("div",{className:(0,n.default)("rounded-md border shadow-none","neutral"===O&&"border-transparent px-3 py-2 focus-within:border-green-500 focus-within:bg-token-main-surface-tertiary focus-within:ring-1 focus-within:ring-transparent hover:bg-token-main-surface-tertiary","tertiary"===O&&"border-token-border-medium px-3 py-2 focus-within:border-token-border-xheavy focus-within:ring-1 focus-within:ring-token-text-secondary","search"===O&&"rounded-xl border-token-border-medium bg-token-main-surface-primary p-4 focus-within:border-token-border-xheavy focus-within:ring-0 dark:border-token-border-medium dark:focus-within:border-token-border-xheavy dark:focus-within:ring-0",x),children:[(0,c.jsx)("label",{htmlFor:a,className:"block text-xs font-semibold text-token-text-primary",children:l}),(0,c.jsxs)("div",{className:(0,n.default)(l&&"mt-1","relative"),children:[(0,c.jsx)("input",d({ref:t,type:r,name:a,id:a,list:s,className:(0,n.default)("block w-full border-0 p-0 placeholder-gray-500 shadow-none outline-none focus-within:shadow-none focus-within:outline-none focus-within:ring-0 focus:border-none focus:ring-0 sm:text-sm",null!=h&&"pr-6","neutral"===O||"search"===O?"bg-transparent":"bg-token-main-surface-primary text-token-text-primary"),placeholder:o,onBlur:N,onFocus:p,onChange:P,onKeyDown:D,autoComplete:j,autoFocus:v,disabled:k,maxLength:w},S)),null!=h&&(0,c.jsx)(f,{onClick:y,children:(0,c.jsx)(h,{className:"icon-sm"})})]})]})});let f=l.Z.button(o||(o=(0,r.Z)(["absolute right-0 top-1/2 -translate-y-1/2"])))},61070:function(e,t,a){"use strict";a.d(t,{CX:function(){return w},Ry:function(){return k},T$:function(){return M},fv:function(){return O},nv:function(){return y}});var o=a(98601),r=a(2721),s=a(28438),n=a(92319),i=a(49166),l=a(84760),c=a(42420),u=a(56032),d=a(58695),f=a(76868),p=a(65012),m=a(82663);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach(function(t){(0,o.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let h="compliance",y=15552e3,x={serverPrimedAllowBrowserStorageValue:!0,showCookieConsentBanner:!1,isStorageComplianceEnabled:!1,ageVerificationDeadline:null,ageVerificationType:"none"},j={IT:"countdown",KR:"passive"},v=(0,i.C)({queryKey:[h],queryFn:async()=>await r.Z.getCompliance().then(e=>{if(e.cookie_consent.is_required){let t=p.bX.getCookie(p.cn.AllowNonessential),a=e.cookie_consent.analytics_cookies_accepted;if(void 0===t&&null!=a)p.bX.setCookie(p.cn.AllowNonessential,a,{maxAge:y,domain:p.xY});else if(t!==a&&null!=t){let a={analytics_cookies_accepted:t};return r.Z.updateCookieConsentCompliance(a),b(b({},e),{},{cookie_consent:b(b({},e.cookie_consent),a)})}}return e}).catch(e=>(e instanceof n.gK&&401===e.status&&(0,d.w7)(),{registration_country:null,require_cookie_consent:!1,age_verification:{is_required:!1},cookie_consent:{is_required:!1},terms_of_use:{is_required:!1,accepted_at:null}}))});function M(e){let{enabled:t,select:a}=e;return(0,l.a)(b(b({},v),{},{enabled:t,select:a}))}function k(){let{country:e}=(0,m.y)();return(0,l.a)(b(b({},v),{},{enabled:null!=e&&e in s.Dn,select:t=>(function(e,t){var a,o,r,n;let i=(0,f.fo)(t),l=null!==(a=e.registration_country)&&void 0!==a?a:"",c=l in s.Dn&&e.age_verification.is_required;if(!i&&!c)return x;let u=i&&e.require_cookie_consent;return{serverPrimedAllowBrowserStorageValue:!u||null!==(o=e.cookie_consent.analytics_cookies_accepted)&&void 0!==o&&o,showCookieConsentBanner:u&&e.cookie_consent.is_required,isStorageComplianceEnabled:u,ageVerificationDeadline:c&&null!==(r=e.age_verification.remaining_seconds)&&void 0!==r?r:null,ageVerificationType:c&&null!==(n=j[l])&&void 0!==n?n:"none"}})(t,e)}))}function w(){let e=(0,c.NL)();return(0,u.D)({mutationFn:async e=>await r.Z.updateCookieConsentCompliance(e),onSuccess:()=>{e.refetchQueries({queryKey:[h]})},onMutate:async t=>{await e.cancelQueries({queryKey:[h]});let a=e.getQueryData([h]);return e.setQueryData([h],e=>{if(void 0!==e)return b(b({},e),{},{cookie_consent:b(b({},e.cookie_consent),t)})}),{previousValue:a}},onError:(t,a,o)=>{void 0!==o&&e.setQueryData([h],o.previousValue)}})}function O(e){let{serverPrimedAllowBrowserStorageValue:t,enabled:a}=e,{data:o,isLoading:r}=M({enabled:a,select:e=>!0===e.cookie_consent.analytics_cookies_accepted});return r||!a?t:null!=o&&o}},53128:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var o=a(75172),r=a(68306),s=a(59144),n=a(24434),i=a(651);function l(e){let{title:t,description:a,confirmText:r,cancelText:l,isOpen:u=!1,onClose:d,onConfirm:f,primaryButtonColor:p="primary",children:m}=e,g=(0,o.Z)();return(0,i.jsx)(n.Z,{isOpen:u,onClose:d,type:"success",title:t,description:a,primaryButton:(0,i.jsx)(s.Z.Button,{title:null!=r?r:g.formatMessage(c.confirmLabel),color:p,onClick:f}),secondaryButton:(0,i.jsx)(s.Z.Button,{title:null!=l?l:g.formatMessage(c.cancelLabel),color:"secondary",onClick:d}),children:m})}let c=(0,r.vU)({confirmLabel:{id:"ConfirmModal.confirmLabel",defaultMessage:"Confirm"},cancelLabel:{id:"ConfirmModal.cancelLabel",defaultMessage:"Cancel"}})},66912:function(e,t,a){"use strict";a.r(t),a.d(t,{GlobalModalsComponent:function(){return eI}});var o,r,s,n,i,l,c,u=a(98601),d=a(59578),f=a(59725),p=a(6440),m=a(97537),g=a(59144),b=a(24434),h=a(2721),y=a(93951),x=a(82821),j=a(31438),v=a(31498),M=a(69769),k=a(84760),w=a(42420),O=a(65012),C=a(92379),Z=a(75172),N=a(62984),P=a(24740),D=a(651);function S(e){var t;let{workspace:a}=e,o=(0,Z.Z)(),r=(0,v.aF)(),{0:s,1:n}=(0,C.useState)(""),i=a.isOwnerOfAccount(),l=(t=a.id,(0,k.a)({queryKey:["workspace",t,"owner_count"],queryFn:async()=>await h.Z.getWorkspaceOwnerCount(t)})),{data:c}=(0,y.rk)(),{0:u,1:d}=(0,C.useState)(!1),{0:m,1:x}=(0,C.useState)(!1);if(!c)return null;let M=c.accountItems.find(e=>e.id!=a.id),w=()=>{j.vm.setLeaveWorkspaceData(null)},O=async()=>{if(void 0!=r){x(!0);try{await h.Z.removeWorkspaceUser(a.id,r.id),d(!0)}catch(e){P.m.danger(o.formatMessage({id:"leaveWorkspaceModal.leaveFailed",defaultMessage:"Failed to leave workspace"}))}x(!1)}};if(u)return(0,D.jsx)(_,{workspace:a,fallbackWorkspace:M,onClose:w});if(!l.data)return(0,D.jsx)(B,{onClose:w});let S=l.data.total_count,A=l.data.owner_count;if(i&&A<2)return(0,D.jsx)(W,{workspace:a,onClose:w});let T=(0,D.jsx)(g.Z.Button,{onClick:()=>{j.vm.setLeaveWorkspaceData(null)},title:o.formatMessage({id:"leaveWorkspaceModal.cancel",defaultMessage:"Cancel"})}),E=(0,D.jsx)(g.Z.Button,{color:"danger",disabled:void 0==r||m||""==s||s.toLowerCase()!=(null==r?void 0:r.email.toLowerCase()),title:o.formatMessage({id:"leaveWorkspaceModal.leaveButton",defaultMessage:"Leave workspace"}),onClick:()=>{O()}});return(0,D.jsx)(b.Z,{isOpen:!0,onClose:w,showCloseButton:!0,type:"danger",title:o.formatMessage({id:"leaveWorkspaceModal.leaveWorkspace",defaultMessage:"Leave the {workspaceName} workspace"},{workspaceName:a.data.name}),primaryButton:E,secondaryButton:T,children:(0,D.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,D.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,D.jsx)(f.B0,{size:"large",src:a.data.profilePictureUrl}),(0,D.jsxs)("div",{className:"flex flex-col justify-around",children:[(0,D.jsx)("div",{className:"text-base font-semibold",children:a.data.name}),(0,D.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.memberCount",defaultMessage:"{memberCount, plural, one {1 member} other {{memberCount} members} }",values:{memberCount:S}})})]})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("h3",{className:"mb-2 text-base font-semibold",children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.leaveAreYouSure",defaultMessage:"Are you sure?"})}),(0,D.jsxs)("ul",{className:"ml-3 list-disc text-sm text-token-text-secondary",children:[(0,D.jsx)("li",{className:"mb-2",children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.leaveWorkspaceWarning1",defaultMessage:"This will remove you from your workspace and you won't be able to access all data, including profile, settings, and chat history."})}),(0,D.jsx)("li",{children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.leaveWorkspaceWarning2",defaultMessage:"You will lose access to all channels and messages in this workspace."})})]})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("h3",{className:"mb-2 text-base",children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.enterYourEmail",defaultMessage:"Enter your email address to confirm"})}),(0,D.jsx)(p.Z,{name:"typeEmailConfirm",value:s,onChange:e=>{n(e.target.value)}})]})]})})}function B(e){let{onClose:t}=e;return(0,D.jsx)(b.Z,{isOpen:!0,onClose:t,showCloseButton:!0,type:"warning",children:(0,D.jsx)("div",{className:"flex flex-row justify-center",children:(0,D.jsx)(m.Z,{})})})}function W(e){let{workspace:t,onClose:a}=e,o=(0,Z.Z)(),r=(0,D.jsx)(g.Z.Button,{onClick:()=>{j.vm.setLeaveWorkspaceData(null)},title:o.formatMessage({id:"leaveWorkspaceModal.ok",defaultMessage:"OK"})});return(0,D.jsx)(b.Z,{isOpen:!0,onClose:a,showCloseButton:!0,type:"danger",title:o.formatMessage({id:"leaveWorkspaceModal.cantLeaveWorkspace",defaultMessage:"Couldn't leave the {workspaceName} workspace"},{workspaceName:t.data.name}),secondaryButton:r,children:(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.lastOwnerWarning",defaultMessage:"Because you're the only owner in the {workspaceName} workspace, assign the owner role to another member before leaving.",values:{workspaceName:t.data.name}})})}function _(e){let{workspace:t,fallbackWorkspace:a,onClose:o}=e,r=(0,w.NL)(),s=(0,Z.Z)(),n=(0,v.ec)(e=>e.currentWorkspace),i=(0,x.b)(),l=()=>{if(void 0!=a&&n){if(j.vm.setLeaveWorkspaceData(null),n.id==t.id){let{willRedirect:e}=(0,y.nq)(r,a.id,i,s);e||(0,M.M)()}else r.invalidateQueries({queryKey:["account-status"]})}else j.vm.setLeaveWorkspaceData(null),O.bX.deleteCookie(O.cn.Workspace),O.bX.deleteCookie(O.cn.WorkspaceResidencyRegion),(0,M.M)();o()},c=void 0!=a?(0,D.jsx)(g.Z.Button,{color:"primary",onClick:l,title:s.formatMessage({id:"leaveWorkspaceModal.done",defaultMessage:"Done"})}):(0,D.jsx)(g.Z.Button,{color:"primary",onClick:l,title:s.formatMessage({id:"leaveWorkspaceModal.startPersonalAccount",defaultMessage:"Start using ChatGPT for free"})});return(0,D.jsx)(b.Z,{isOpen:!0,onClose:l,primaryButton:c,type:"success",title:s.formatMessage({id:"leaveWorkspaceModal.leftWorkspaceTitle",defaultMessage:"Successfully left the {workspaceName} workspace"},{workspaceName:t.data.name}),children:(0,D.jsx)("div",{className:"flex flex-col gap-5",children:(0,D.jsx)("p",{children:void 0!=a?(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.leftWorkspaceDescription",defaultMessage:"You have successfully left the {workspaceName} workspace.",values:{workspaceName:t.data.name}}):(0,D.jsx)(N.Z,{id:"leaveWorkspaceModal.leftWorkspaceDescriptionNoOtherWorkspaces",defaultMessage:"You have successfully left the {workspaceName} workspace. This will create your personal workspace automatically.",values:{workspaceName:t.data.name}})})})})}var A=a(2346),T=a(91530),E=a.n(T),L=a(68306),I=a(15478),F=a(11550),Y=a(77748);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach(function(t){(0,u.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function G(){let e=(0,Z.Z)(),t=(0,j.tN)(e=>e.activeModals.has(j.B.AgeVerificationInterstitial));return(0,D.jsxs)(b.Z,{type:"success",isOpen:t,onClose:E(),title:e.formatMessage(X.title),children:[(0,D.jsxs)("div",{className:"text-token-text-secondary",children:[(0,D.jsx)("p",{className:"mb-4",children:(0,D.jsx)(N.Z,q({},X.description0))}),(0,D.jsx)(U,{children:(0,D.jsx)(N.Z,q({},X.subtitle1))}),(0,D.jsxs)("ol",{className:"mb-4 ml-4 list-decimal",children:[(0,D.jsx)("li",{className:"",children:(0,D.jsx)(N.Z,q({},X.description1Bullet1))}),(0,D.jsx)("li",{children:(0,D.jsx)(N.Z,q({},X.description1Bullet2))})]}),(0,D.jsx)("p",{className:"mb-4 font-semibold",children:(0,D.jsx)(N.Z,q({},X.description1a))}),(0,D.jsx)("p",{className:"mb-4",children:(0,D.jsx)(N.Z,q({},X.description1b))}),(0,D.jsx)(U,{children:(0,D.jsx)(N.Z,q({},X.subtitle2))}),(0,D.jsx)("p",{className:"mb-4",children:(0,D.jsx)(N.Z,q(q({},X.description2),{},{values:{learnMoreLink:e=>(0,D.jsx)("a",{href:"https://help.openai.com/en/articles/8411987-why-am-i-being-asked-to-verify-my-age",target:"_blank",rel:"noreferrer",className:"cursor-pointer font-normal underline",children:e})}}))})]}),(0,D.jsx)("div",{className:"mt-4 flex justify-center",children:(0,D.jsx)(F.z,{color:"primary",as:"link",to:"https://platform.openai.com/verify-age",openNewTab:!0,onClick:()=>j.vm.closeModal(j.B.AgeVerificationInterstitial),icon:Y.Pfi,children:(0,D.jsx)(N.Z,q({},X.redirect))})})]})}let U=I.Z.h3(r||(r=(0,A.Z)(["text-token-text-primary text-base mb-1"]))),X=(0,L.vU)({title:{id:"AgeVerificationInterstitial.title",defaultMessage:"Please verify your age"},redirect:{id:"AgeVerificationInterstitial.redirect",defaultMessage:"Sign in on platform.openai.com"},description0:{id:"AgeVerificationInterstitial.description0",defaultMessage:"To continue using ChatGPT, you need to complete a brief age verification check"},subtitle1:{id:"AgeVerificationInterstitial.title1",defaultMessage:"What will happen next?"},description1Bullet1:{id:"AgeVerificationInterstitial.description1",defaultMessage:"You will be redirected to platform.openai.com where you will need to sign in."},description1Bullet2:{id:"AgeVerificationInterstitial.description2",defaultMessage:"You will then be redirected to Yoti, our age verification provider, to verify your age."},description1a:{id:"AgeVerificationInterstitial.description1a",defaultMessage:"If you are between the ages of 13 and 17, your parent or guardian must complete the age verification check on your behalf."},description1b:{id:"AgeVerificationInterstitial.description1b",defaultMessage:"The process is quick and secure."},subtitle2:{id:"AgeVerificationInterstitial.title2",defaultMessage:"Why do I need to do this?"},description2:{id:"AgeVerificationInterstitial.description2-v3",defaultMessage:"We are required to verify that our users in Italy are old enough to use ChatGPT. <learnMoreLink>Learn more</learnMoreLink>."}});var z=a(86025),R=a(82363),K=a(16779),Q=a(61070);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach(function(t){(0,u.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function $(){return(0,j.EV)(j.B.CookieManagement)?(0,D.jsx)(ee,{onClose:()=>{j.vm.closeModal(j.B.CookieManagement)}}):null}function ee(e){var t,a;let{onClose:o}=e,r=(0,Z.Z)(),{isUnauthenticated:s}=(0,z.u)(),{data:n}=(0,Q.Ry)(),i=null!==(t=null==n?void 0:n.serverPrimedAllowBrowserStorageValue)&&void 0!==t&&t,l=null!==(a=null==n?void 0:n.isStorageComplianceEnabled)&&void 0!==a&&a,c=(0,Q.fv)({serverPrimedAllowBrowserStorageValue:i,enabled:l&&!s}),{0:u,1:d}=(0,C.useState)(i),f=s?u:c,p=e=>{O.bX.setCookie(O.cn.AllowNonessential,e,{maxAge:Q.nv,domain:O.xY}),s?d(e):m.mutateAsync({analytics_cookies_accepted:e},{onSuccess(){P.m.success(r.formatMessage(es.updateSuccess))},onError(){P.m.danger(r.formatMessage(es.updateFailure))}})};(0,C.useEffect)(()=>{if(s){var e;d(null!==(e=O.bX.getCookie(O.cn.AllowNonessential))&&void 0!==e?e:i)}},[s,i]),(0,C.useEffect)(()=>{R.U.addAction("privacy_policy.show_manage_cookies_modal")},[]);let m=(0,Q.CX)();return(0,D.jsx)(b.Z,{type:"success",isOpen:!0,onClose:o,title:r.formatMessage(es.title),showCloseButton:!0,children:(0,D.jsxs)("div",{className:"text-sm text-token-text-secondary",children:[(0,D.jsx)(N.Z,H(H({},es.description),{},{values:{cookiePolicy:e=>(0,D.jsx)("a",{className:"underline",href:"https://openai.com/policies/privacy-policy",children:e})}})),(0,D.jsxs)(et,{children:[(0,D.jsxs)(ea,{children:[(0,D.jsx)(eo,{children:r.formatMessage(es.preference1title)}),(0,D.jsx)(er,{children:r.formatMessage(es.preference1desc)})]}),(0,D.jsx)(K.Z,{onChange:E(),enabled:!0,disabled:!0,label:r.formatMessage(es.preference1toggle)})]}),(0,D.jsxs)(et,{children:[(0,D.jsxs)(ea,{children:[(0,D.jsx)(eo,{children:r.formatMessage(es.preference2title)}),(0,D.jsx)(er,{children:r.formatMessage(es.preference2desc)})]}),(0,D.jsx)(K.Z,{onChange:p,enabled:!!f,label:r.formatMessage(es.preference2toggle)})]}),(0,D.jsxs)("div",{className:"flex justify-end gap-3 border-t border-black/10 pt-4 dark:border-white/10",children:[(0,D.jsx)(F.z,{color:"secondary",onClick:()=>p(!1),children:(0,D.jsx)(N.Z,H({},es.reject))}),(0,D.jsx)(F.z,{color:"secondary",onClick:()=>p(!0),children:(0,D.jsx)(N.Z,H({},es.accept))})]})]})})}let et=I.Z.div(s||(s=(0,A.Z)(["flex gap-4 border-t last:border-b border-black/10 dark:border-white/10 py-4 mt-4 text-token-text-secondary"]))),ea=I.Z.div(n||(n=(0,A.Z)(["flex gap-2 flex-col "]))),eo=I.Z.p(i||(i=(0,A.Z)(["font-semibold text-sm text-token-text-primary"]))),er=I.Z.p(l||(l=(0,A.Z)(["text-xs"]))),es=(0,L.vU)({title:{id:"ManageCookiesModal.title",defaultMessage:"Manage cookies"},description:{id:"ManageCookiesModal.description",defaultMessage:"OpenAI uses cookies to improve your experience and analyze site traffic. For more information, read our <cookiePolicy>cookie policy</cookiePolicy>."},preference1title:{id:"ManageCookiesModal.preference1title",defaultMessage:"Essential"},preference1desc:{id:"ManageCookiesModal.preference1desc.0",defaultMessage:"These cookies are required to operate our Services. For example, they allow us to authenticate users or enable specific features within the Services, including for security purposes."},preference1toggle:{id:"ManageCookiesModal.preference1toggle",defaultMessage:"Allow essential cookies"},preference2title:{id:"ManageCookiesModal.preference2title",defaultMessage:"Analytics"},preference2desc:{id:"ManageCookiesModal.preference2desc.0",defaultMessage:"These cookies help us analyze and understand how our Services perform and are used, such as the number of users, how they interact with our Services, and time spent using the Services."},preference2toggle:{id:"ManageCookiesModal.preference2toggle",defaultMessage:"Allow analytics cookies"},reject:{id:"ManageCookiesModal.reject",defaultMessage:"Reject all"},accept:{id:"ManageCookiesModal.accept",defaultMessage:"Accept all"},updateSuccess:{id:"ManageCookiesModal.updateSuccess",defaultMessage:"Your cookie preferences were updated successfully"},updateFailure:{id:"ManageCookiesModal.updateFailure",defaultMessage:"Unable to update cookie preferences. Try again later."}});var en=a(89692),ei=a(89857),el=a(44087);function ec(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function eu(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ec(Object(a),!0).forEach(function(t){(0,u.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ec(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function ed(e){let{workspaceName:t,onChangeWorkspaceName:a}=e,o=(0,Z.Z)();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,D.jsx)("label",{htmlFor:"workspace-name",className:"block pb-1 text-lg font-semibold text-token-text-primary",children:(0,D.jsx)(N.Z,eu({},ef.workspaceNameLabel))}),(0,D.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:(0,D.jsx)(N.Z,eu({},ef.workspaceNameDescription))})]}),(0,D.jsx)(p.Z,{type:"text",name:"workspace-name",placeholder:o.formatMessage(ef.exampleTeamWorkspaceName),value:t,onChange:e=>a(e.target.value),maxLength:64})]})}let ef=(0,L.vU)({workspaceNameLabel:{id:"createWorkspace.workspaceNameLabel",defaultMessage:"Workspace name"},workspaceNameDescription:{id:"createWorkspace.workspaceNameDescription",defaultMessage:"Set a workspace name for your team. The name can be changed at any time."},exampleTeamWorkspaceName:{id:"createWorkspace.exampleTeamWorkspaceName",defaultMessage:"Acme Inc."}});var ep=a(32378),em=a(55356),eg=a(50454),eb=a(66290),eh=a(43991),ey=a(60806);function ex(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function ej(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ex(Object(a),!0).forEach(function(t){(0,u.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ex(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ev=((o=ev||{}).FLEXIBLE="month",o.ANNUAL="year",o);let eM=(0,ey.b)(ev),ek=e=>{let{isOpen:t,onClose:a,onSubmit:o}=e,{0:r,1:s}=(0,C.useState)(""),n=(0,Z.Z)();return(0,D.jsxs)(b.Z,{type:"success",isOpen:t,onClose:a,className:"max-w-lg",showCloseButton:!0,title:(0,D.jsx)(N.Z,ej({},eg.sY.createWorkspace)),children:[(0,D.jsx)("div",{className:"flex flex-col justify-center bg-token-main-surface-primary pb-2",children:(0,D.jsx)(ed,{workspaceName:r,onChangeWorkspaceName:s})}),(0,D.jsxs)("div",{className:"mt-4 flex flex-row justify-end",children:[(0,D.jsx)(g.m,{title:n.formatMessage(eg.sY.cancel),onClick:a}),(0,D.jsx)(g.m,{title:n.formatMessage(eg.sY.selectBillingOption),onClick:()=>{o(r)},disabled:""==r,color:"primary",className:"ml-4"})]})]})},ew=I.Z.p(c||(c=(0,A.Z)(["text-base font-semibold mb-3 mt-3"]))),eO=e=>{let{isOpen:t,onClose:a,onSubmit:o,minimumSeats:r}=e,{0:s,1:n}=(0,C.useState)(ev.ANNUAL),{0:i,1:l}=(0,C.useState)(!1),c=(0,Z.Z)(),{0:u,1:d}=(0,C.useState)(r),{0:f}=(0,C.useState)(new Date),p=eZ[s],m=r>eg.Y6?r:eg.Y6;return(0,D.jsx)(b.Z,{type:"success",isOpen:t,onClose:a,size:"custom",noPadding:!0,className:"max-w-3xl",showCloseButton:!0,title:c.formatMessage(eg.sY.selectTeamPlanModalTitle),children:(0,D.jsxs)("div",{className:"grid grid-flow-row grid-cols-3",children:[(0,D.jsxs)(eh.fC,{className:"col-span-3 grid md:col-span-2 md:grid-cols-2",defaultValue:s,onValueChange:e=>{eM(e)&&n(e)},children:[(0,D.jsx)(eg.IW,ej({billingType:ev.FLEXIBLE},eg.c0)),(0,D.jsx)(eg.IW,ej({billingType:ev.ANNUAL},eg.sr))]}),(0,D.jsxs)("div",{className:"col-span-3 overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[(0,D.jsx)("label",{className:"mb-3 block text-base font-semibold",htmlFor:"seats",children:(0,D.jsx)(N.Z,ej({},eg.sY.seatsTitle))}),(0,D.jsx)(eg.ZY,{numSeats:u,minSeats:m,setNumSeats:d}),(0,D.jsx)(ep.b,{}),(0,D.jsx)(ew,{children:(0,D.jsx)(N.Z,ej({},eg.sY.summaryTitle))}),(0,D.jsxs)("div",{className:"text-sm",children:[(0,D.jsx)("p",{className:"mb-2",children:(0,D.jsx)(N.Z,ej({},p.name))}),(0,D.jsxs)(em.QI,{children:[(0,D.jsx)(em.HC,{children:(0,D.jsx)(N.Z,ej(ej({},p.billed),{},{values:{date:(0,D.jsx)(L.Ji,{value:f})}}))}),(0,D.jsx)(em.HC,{children:(0,D.jsx)("b",{children:(0,D.jsx)(N.Z,ej(ej({},p.total),{},{values:{totalCost:(u||0)*(s===ev.ANNUAL?300:30)}}))})})]})]}),(0,D.jsx)("div",{className:"mt-4 flex justify-end",children:(0,D.jsx)(g.m,{title:c.formatMessage(eg.sY.continueToBillingButton),onClick:()=>{l(!0),o(s,u)},disabled:!1,loading:i,color:"primary"})})]})]})})};function eC(e){let{isOpen:t,onClose:a,minimumSeats:o,existingAccount:r}=e,s=(0,Z.Z)(),{0:n,1:i}=(0,C.useState)(r?(0,el.CV)(s,r):""),l=(0,y.hz)(),c=(0,eb.Z)(),u=async(e,t)=>{try{let a=await h.Z.getCheckoutLink(l,{plan_name:"chatgptteamplan",team_plan_data:{workspace_name:n,price_interval:e,seat_quantity:t,existing_workspace_id:null==r?void 0:r.id}});c(a.url)}catch(e){P.m.warning(s.formatMessage(eg.sY.paymentErrorWarning),{hasCloseButton:!0})}};return""==n?(0,D.jsx)(ek,{isOpen:t,onClose:a,onSubmit:e=>{i(e)}}):(0,D.jsx)(eO,{isOpen:t,onClose:a,onSubmit:(e,t)=>{u(e,t)},minimumSeats:o})}let eZ={[ev.FLEXIBLE]:{name:eg.sY.flexiblePlanSelected,billed:eg.sY.flexiblePlanBilled,total:eg.sY.flexiblePlanTotal},[ev.ANNUAL]:{name:eg.sY.annualPlanSelected,billed:eg.sY.annualPlanBilled,total:eg.sY.annualPlanTotal}};var eN=a(30474),eP=a(34977),eD=a(88414),eS=a(38482),eB=a.n(eS),eW=a(91496);let e_=eB()(()=>Promise.all([a.e(4198),a.e(4089),a.e(1438),a.e(249),a.e(4160),a.e(8104)]).then(a.bind(a,49950)).then(e=>e.GlobalSettingsModal),{loadableGenerated:{webpack:()=>[49950]}}),eA=eB()(()=>Promise.all([a.e(4198),a.e(4089),a.e(1438),a.e(249),a.e(4160),a.e(8104)]).then(a.bind(a,49950)).then(e=>e.UnauthSettingsModal),{loadableGenerated:{webpack:()=>[49950]}});function eT(){let{isOpen:e}=(0,eW.F)(),{isUnauthenticated:t}=(0,z.u)();return e?t?(0,D.jsx)(eA,{}):(0,D.jsx)(e_,{}):null}var eE=a(94841);function eL(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function eI(){let e=(0,j.tN)(e=>e.purchaseWorkspaceData),t=(0,j.tN)(e=>e.leaveWorkspaceData),a=null!=e,o=(0,j.EV)(j.B.UserContext),r=(0,j.EV)(j.B.GlobalMemoryOnboarding),s=(0,y.t)(),{isOpen:n}=function(){var e;let{isUnauthenticated:t}=(0,z.u)(),a=(0,eP.useRouter)(),o=(0,eb.Z)(),r=null!==(e=(0,eN.L)(()=>a.asPath))&&void 0!==e?e:"",s=(0,ei.zu)(r)&&!t;return(0,C.useEffect)(()=>{!r.startsWith("/auth")&&O.bX.getCookie(O.cn.ShowPaymentModal)&&(O.bX.deleteCookie(O.cn.ShowPaymentModal),(0,ei.MG)(o,"Show payment modal cookie"))},[]),{isOpen:s}}();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(eT,{}),(0,D.jsx)(G,{}),n&&s&&(0,D.jsx)(ei.Dq,{currentAccount:s}),(0,D.jsx)(en.gO,{}),(0,D.jsx)($,{}),a&&(0,D.jsx)(eC,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eL(Object(a),!0).forEach(function(t){(0,u.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eL(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({isOpen:a,onClose:()=>j.vm.setPurchaseWorkspaceData(null)},e)),t&&(0,D.jsx)(S,{workspace:t}),(0,D.jsx)(eD.Ji,{}),o&&(0,D.jsx)(d.wm,{isModalOpen:o}),r&&(0,D.jsx)(eE.Z,{onClose:()=>j.vm.closeModal(j.B.GlobalMemoryOnboarding)})]})}},94841:function(e,t,a){"use strict";a.d(t,{Z:function(){return h},d:function(){return g}});var o=a(83963),r=a(91530),s=a.n(r),n=a(92379),i=a(75172),l=a(68306),c=a(59144),u=a(77748),d=a(24434),f=a(60682),p=a(651);let m=f.pm.MemoryOnboarding;function g(){let e=(0,o.ll)(),{eligible:t,isLoading:a}=(0,f.qg)(m);return{eligible:t&&e,isLoading:a}}function b(e){let{icon:t,title:a,description:o}=e;return(0,p.jsxs)("div",{className:"flex items-start",children:[(0,p.jsx)("div",{className:"mt-1",children:t}),(0,p.jsxs)("div",{className:"ml-4",children:[(0,p.jsx)("div",{className:"text-lg font-semibold",children:a}),(0,p.jsx)("p",{className:"mt-1 text-sm text-token-text-secondary",children:o})]})]})}function h(e){let{onClose:t}=e,a=(0,i.Z)(),{markAsViewed:o}=(0,f.qg)(m),r=(0,n.useCallback)(()=>{o(),t()},[o,t]);return(0,p.jsx)(d.Z,{isOpen:!0,onClose:s(),size:"custom",className:"max-w-xl",type:"success",title:a.formatMessage(y.title),primaryButton:(0,p.jsx)(c.Z.Button,{onClick:r,title:a.formatMessage(y.continue),color:"primary"}),children:(0,p.jsxs)("div",{className:"mb-6 flex flex-col gap-3",children:[(0,p.jsx)(b,{icon:(0,p.jsx)(y.bulletTitle1.Icon,{}),title:a.formatMessage(y.bulletTitle1),description:a.formatMessage(y.bulletDescription1)}),(0,p.jsx)(b,{icon:(0,p.jsx)(y.bulletTitle2.Icon,{}),title:a.formatMessage(y.bulletTitle2),description:a.formatMessage(y.bulletDescription2)}),(0,p.jsx)(b,{icon:(0,p.jsx)(y.bulletTitle3.Icon,{}),title:a.formatMessage(y.bulletTitle3),description:a.formatMessage(y.bulletDescription3)})]})})}let y=(0,l.vU)({title:{id:"MemoryOnboardingModal.title.1",defaultMessage:"ChatGPT now has memory across chats"},bulletTitle1:{Icon:u.qZr,id:"MemoryOnboardingModal.bulletTitle1",defaultMessage:"Keep the conversation going"},bulletDescription1:{id:"MemoryOnboardingModal.bulletDescription1.1",defaultMessage:"ChatGPT will carry what it learns between chats, allowing it to provide more relevant responses."},bulletTitle2:{Icon:u.WGR,id:"MemoryOnboardingModal.bulletTitle2.1",defaultMessage:"More helpful over time"},bulletDescription2:{id:"MemoryOnboardingModal.bulletDescription2.1",defaultMessage:"ChatGPT will become more helpful as you chat, continually remembering details and preferences."},bulletTitle3:{Icon:u.JGH,id:"MemoryOnboardingModal.bulletTitle3",defaultMessage:"Manage what it remembers"},bulletDescription3:{id:"MemoryOnboardingModal.bulletDescription3.2",defaultMessage:"You're in control. Review or clear specific memories, restart from scratch, or turn the feature off in settings."},continue:{id:"MemoryOnboardingModal.continue",defaultMessage:"Continue"}})},88414:function(e,t,a){"use strict";a.d(t,{Ji:function(){return p},nB:function(){return g}});var o=a(2721),r=a(99242),s=a(58695),n=a(34977),i=a(75172),l=a(62984),c=a(68306),u=a(53128),d=a(24740),f=a(651);function p(){let e=(0,n.useRouter)(),t="disable_mfa"===e.asPath.split("#")[1],a=(0,i.Z)();return t?(0,f.jsx)(m,{onClose:()=>e.replace("/"),onConfirm:()=>{o.Z.disableMfa().then(()=>{e.replace("/#settings").then(()=>{d.m.success(a.formatMessage(b.disableMfaSuccess),{hasCloseButton:!0})})}).catch(()=>{e.replace("/#settings").then(()=>{d.m.info(a.formatMessage(b.disableMfaTimeout),{hasCloseButton:!0})})})}}):null}function m(e){let{onClose:t,onConfirm:a}=e,o=(0,i.Z)();return(0,f.jsx)(u.Z,{isOpen:!0,title:o.formatMessage(b.disableConfimationTitle),confirmText:o.formatMessage(b.disable),onConfirm:a,onClose:t,primaryButtonColor:"danger",children:(0,f.jsx)("div",{children:(0,f.jsx)(l.Z,{id:"postSigninDisableConfimationModal.description.1",defaultMessage:"Are you sure you want to disable multi-factor authentication? You will no longer need to provide a verification code when you log into your account."})})})}function g(e){var t,a;let{mfaInfo:o,onEnableMFA:n,onCancel:c}=e,d=(0,i.Z)(),{session:p}=(0,s.kP)(),m=null==p?void 0:p.user,g=null==m?void 0:m.idp,b=null!==(t=g?r.w[g]:void 0)&&void 0!==t?t:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.yourAccount",defaultMessage:"your current account"}),h=function(e){let t=e.map(e=>r.w[e]).filter(e=>void 0!==e);return 1===t.length?t[0]:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.otherAccount",defaultMessage:"another account"})}(null!==(a=o.otherProvidersWithoutMfa)&&void 0!==a?a:[]);return(0,f.jsx)(u.Z,{isOpen:!0,title:d.formatMessage({id:"confirmEnableMfaForByPassModal.title",defaultMessage:"Enable multi-factor authentication (MFA)"}),confirmText:d.formatMessage({id:"confirmEnableMfaForByPassModal.enableMfa",defaultMessage:"Enable MFA"}),onConfirm:n,onClose:c,primaryButtonColor:"primary",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"mb-6",children:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.description0",defaultMessage:"You'll only be able to log in using {currentIdp} while MFA is on.",values:{currentIdp:b}})}),(0,f.jsx)("p",{children:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.description1",defaultMessage:"If you prefer to have MFA enabled for your account when logging in with {otherNonMfaIdp}, please sign out and log in again through that method before enabling.",values:{otherNonMfaIdp:h}})})]})})}let b=(0,c.vU)({disableConfimationTitle:{id:"mfaDisableConfirmationModal.title.0",defaultMessage:"Disable multi-factor authentication (MFA)"},disable:{id:"mfaDisableConfirmationModal.button",defaultMessage:"Disable MFA"},disableMfaSuccess:{id:"disableMfa.success",defaultMessage:"Multi-factor authentication disabled"},disableMfaTimeout:{id:"disableMfa.timeout",defaultMessage:"Your last log in was too long ago, please try again"}})},99242:function(e,t,a){"use strict";a.d(t,{w:function(){return s}});var o=a(62984),r=a(651);let s={auth0:(0,r.jsx)(o.Z,{id:"mfaModals.auth0",defaultMessage:"username & password"}),"google-oauth2":(0,r.jsx)(o.Z,{id:"mfaModals.google-oauth2",defaultMessage:"Google"}),windowslive:(0,r.jsx)(o.Z,{id:"mfaModals.microsoft",defaultMessage:"Microsoft"}),apple:(0,r.jsx)(o.Z,{id:"mfaModals.apple",defaultMessage:"Apple"}),samlp:(0,r.jsx)(o.Z,{id:"mfaModals.samlp",defaultMessage:"your company's single sign on solution"}),oidc:(0,r.jsx)(o.Z,{id:"mfaModals.oidc",defaultMessage:"your company's single sign on solution"})}},83963:function(e,t,a){"use strict";a.d(t,{ll:function(){return l},tW:function(){return c},tv:function(){return d},u1:function(){return u}});var o=a(99333),r=a(58025),s=a(93951),n=a(41987),i=a(88667);function l(){var e,t;return null!==(e=null===(t=(0,s.hz)())||void 0===t?void 0:t.includes(n.L0.Sunshine))&&void 0!==e&&e}function c(){let{data:e}=(0,r.R1)(o.sh.Sunshine),t=l();return!!e&&t}function u(){var e;let t=c(),a=null!==(e=(0,i.sB)("1611573287").value)&&void 0!==e&&e;return t&&a}function d(){var e,t;return null!==(e=null===(t=(0,s.hz)())||void 0===t?void 0:t.includes(n.L0.MemoryGA))&&void 0!==e&&e}},60806:function(e,t,a){"use strict";function o(e){let t=Object.values(e);return e=>t.includes(e)}a.d(t,{b:function(){return o}})}}]);
//# sourceMappingURL=2886.30947ab3e8e3e4ed.js.map