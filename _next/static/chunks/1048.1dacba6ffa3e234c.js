(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1048,6431],{34598:function(e,t,n){var r=n(85036);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},60510:function(e){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},85036:function(e,t,n){var r=n(83663),o=n(18826),l=n(31154);e.exports=function(e,t,n){return t==t?l(e,t,n):r(e,o,n)}},18826:function(e){e.exports=function(e){return e!=e}},18296:function(e,t,n){var r=n(25561),o=n(34598),l=n(60510),a=n(8529),i=n(33295),s=n(33005);e.exports=function(e,t,n){var u=-1,c=o,d=e.length,p=!0,f=[],v=f;if(n)p=!1,c=l;else if(d>=200){var m=t?null:i(e);if(m)return s(m);p=!1,c=a,v=new r}else v=t?[]:f;e:for(;++u<d;){var g=e[u],x=t?t(g):g;if(g=n||0!==g?g:0,p&&x==x){for(var h=v.length;h--;)if(v[h]===x)continue e;t&&v.push(x),f.push(g)}else c(v,x,n)||(v!==f&&v.push(x),f.push(g))}return f}},33295:function(e,t,n){var r=n(353),o=n(91530),l=n(33005),a=r&&1/l(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=a},31154:function(e){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return -1}},96594:function(e,t,n){var r=n(61757),o=n(18296);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},66587:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(98601),o=n(52088),l=n(19841),a=n(651);let i=["className"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){let{className:t}=e,n=(0,o.Z)(e,i);return(0,a.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({className:(0,l.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},n))}},74567:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(39004),o=n(11941),l=n.n(o),a=n(651);function i(e){let{gizmo:t}=e,n=(0,r.uy)(t.gizmo.display.name);return(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"title",content:n},"title"),(0,a.jsx)("meta",{property:"og:site_name",content:"ChatGPT"},"og:site_name"),(0,a.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,a.jsx)("meta",{property:"og:title",content:n},"og:title"),(0,a.jsx)("meta",{property:"og:url",content:(0,r.i6)(t)},"og:url"),t.gizmo.display.description&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:t.gizmo.display.description},"description"),(0,a.jsx)("meta",{property:"og:description",content:t.gizmo.display.description},"og:description")]}),t.gizmo.display.profile_picture_url&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:image",content:t.gizmo.display.profile_picture_url},"og:image"),(0,a.jsx)("meta",{property:"og:image:width",content:"512"},"og:image:width"),(0,a.jsx)("meta",{property:"og:image:height",content:"512"},"og:image:height")]})]})}},10083:function(e,t,n){"use strict";n.d(t,{X:function(){return v},r:function(){return f}});var r=n(12128),o=n(10080),l=n(15913),a=n(19841),i=n(50820),s=n(57456),u=n(54097),c=n(83036),d=n(45334),p=n(651);function f(e){let{gizmo:t,hideOwner:n=!1,children:r,className:o,avatarClassName:l,showStarterPrompts:i=!1,disableStarterPrompts:s=!1}=e;return null==t?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:(0,a.default)("flex h-full flex-col items-center justify-center text-token-text-primary",o),children:[(0,p.jsx)(v,{gizmo:t,avatarClassName:l}),(0,p.jsx)(g,{gizmo:t,hideOwner:n,showStarterPrompts:i,disableStarterPrompts:s}),r]})})}function v(e){var t;let{gizmo:n,avatarClassName:l}=e,i=!!(null!=n&&(0,d.S9)(n)&&(null==n||null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(o.U9.FirstParty)));return(0,p.jsx)("div",{className:"relative",children:(0,p.jsx)(r.Z,{isFirstParty:i||!n,src:null!=n&&(0,d.WQ)(n)?n.profilePictureUrl:null==n?void 0:n.gizmo.display.profile_picture_url,className:(0,a.default)("mb-3 h-12 w-12",l)})})}function m(e){let{gizmo:t,disabled:n}=e,r=(0,u.O)(t),o=(0,i.f)(),a=(0,l.BL)();if(null==r||0===r.length)return null;let c=r.slice(0,a?2:4);return(0,p.jsx)(s.cS,{starterPrompts:c,onSelectStarterPrompt:o,disabled:n})}function g(e){let{gizmo:t,hideOwner:n,showStarterPrompts:r,disableStarterPrompts:o}=e,l=null!=t&&(0,d.WQ)(t)?t.name:null==t?void 0:t.gizmo.display.name,a=null!=t&&(0,d.WQ)(t)?t.description:null==t?void 0:t.gizmo.display.description;return(0,p.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,p.jsx)("div",{className:"text-center text-2xl font-semibold",children:l}),!n&&(0,p.jsx)("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:(0,p.jsx)(p.Fragment,{children:t&&(0,d.WQ)(t)?(0,p.jsx)(c.Z,{gizmo:t}):(0,p.jsx)(c.Z,{gizmo:t,socials:t.gizmo.author.display_socials})})}),a&&(0,p.jsx)("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:a}),r&&(0,p.jsx)(m,{gizmo:t,disabled:o})]})}},20053:function(e,t,n){"use strict";n.d(t,{H:function(){return E}});var r=n(98601),o=n(11550),l=n(66587),a=n(24434),i=n(99555),s=n(24740),u=n(31438),c=n(31498),d=n(84760),p=n(99976),f=n(61619),v=n(19841),m=n(92379),g=n(75172),x=n(62984),h=n(68306),b=n(30853),y=n(41619),j=n(39004),P=n(10080),w=n(651);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let E=e=>{let{rating:t,onRating:n,className:r}=e,{0:o,1:l}=(0,m.useState)(),a=(0,g.Z)();return(0,w.jsx)("div",{className:(0,v.default)("flex flex-row",r),children:[1,2,3,4,5].map(e=>{var r;let i=(0,w.jsx)(y.e0l,{className:(0,v.default)("icon-2xl cursor-pointer",(null!==(r=null!=o?o:t)&&void 0!==r?r:0)>=e?function(e,t){var n;let r=null!==(n=null!=e?e:t)&&void 0!==n?n:0;return(0,v.default)(null!=e&&e!=t&&"opacity-50 dark:opacity-60",r>4?"text-brand-purple":r>3?"text-green-500":r>2?"text-yellow-500":r>1?"text-orange-500":"text-red-500")}(o,t):"text-token-main-surface-tertiary")}),s=function(e){switch(e){case 1:return M.hoverRating1;case 2:return M.hoverRating2;case 3:return M.hoverRating3;case 4:return M.hoverRating4;case 5:return M.hoverRating5}}(null!=o?o:0),u=s&&a.formatMessage(s);return(0,w.jsx)("div",{onClick:()=>{n(e)},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(void 0)},className:"p-1",children:s?(0,w.jsx)(b.u,{label:u,side:"top",sideOffset:4,children:i}):i},e)})})},k=e=>{var t,n,r;let{gizmo:h}=e,y=(0,c.aF)(),O=()=>u.vm.closeModal(u.B.GPTReview),k=(0,g.Z)(),{0:R,1:z}=(0,m.useState)(""),{0:N,1:C}=(0,m.useState)(!1),Z=(r=h.gizmo.id,(0,d.a)({queryFn:async()=>i.U.getUserReview(r),queryKey:["gizmo","review",{gizmoId:r}],enabled:null!=r})),T=(0,j.K7)(h.gizmo.id),{0:_,1:F}=(0,m.useState)(),I=_===(null===(t=Z.data)||void 0===t?void 0:t.rating);(0,m.useEffect)(()=>{null!=Z.data&&null==_&&F(Z.data.rating)},[Z.data,_]),(0,m.useEffect)(()=>{p.A.logEvent(f.M.showRatingModal,{gizmo_id:h.gizmo.id})},[h.gizmo.id]);let D=null!=Z.data,B=!(null!==(n=h.gizmo.tags)&&void 0!==n&&n.includes(P.U9.FirstParty))&&h.gizmo.author.will_receive_support_emails;return(0,w.jsx)(a.Z,{type:"success",title:(0,w.jsxs)("div",{children:[(0,w.jsx)(x.Z,S({},M.title)),(0,w.jsxs)("div",{className:"align-end mt-2 flex text-sm font-normal",children:[D?(0,w.jsx)(x.Z,S({},M.subtitleChange)):(0,w.jsx)(x.Z,S({},M.subtitle)),(0,w.jsx)(b.u,{label:k.formatMessage(M.subtitleTooltip),className:"ml-1 flex cursor-pointer items-center pl-1",sideOffset:0,children:(0,w.jsx)("div",{className:"icon-xs flex items-center justify-center rounded-full border border-token-text-tertiary text-[8px] font-bold text-token-text-tertiary",children:"i"})})]})]}),isOpen:!0,onClose:O,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:(0,w.jsxs)("div",{className:"flex flex-grow flex-col space-y-8",children:[(0,w.jsx)(E,{rating:_,onRating:F,className:"mx-auto flex flex-row items-center"}),B&&(0,w.jsxs)("div",{children:[(0,w.jsx)(l.Z,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:k.formatMessage(M.messagePlaceholder),value:R,rows:1,onChange:e=>z(e.target.value)}),(0,w.jsxs)("div",{className:(0,v.default)("flex flex-row items-center space-x-2 self-start",R.length>0?"text-token-text-primary":"text-token-text-tertiary"),children:[(0,w.jsx)("input",{type:"checkbox",className:"rounded",checked:N,onChange:e=>C(e.target.checked)}),y&&(0,w.jsx)("span",{className:"text-sm",children:(0,w.jsx)(x.Z,S(S({},M.includeFrom),{},{values:{email:(0,w.jsx)("strong",{children:y.email})}}))})]})]}),(0,w.jsx)(o.z,{color:"primary",disabled:I,onClick:async()=>{if(null==_){s.m.warning("Please select a rating");return}p.A.logEvent(f.M.submitRatingModal,{gizmo_id:h.gizmo.id,rating:_}),await T.mutateAsync({rating:_,message:R.length>0?R:void 0,includeFrom:R.length>0?N:void 0}),s.m.success(k.formatMessage(M.successToast),{duration:3}),O()},children:(0,w.jsx)(x.Z,S({},M.submit))})]})})},M=(0,h.vU)({title:{id:"GizmoReviewModal.title",defaultMessage:"Leave Feedback"},subtitle:{id:"GizmoReviewModal.subtitle",defaultMessage:"How would you rate this GPT?"},subtitleChange:{id:"GizmoReviewModal.subtitleChange",defaultMessage:"Would you like to change your rating?"},subtitleTooltip:{id:"GizmoReviewModal.subtitleTooltip",defaultMessage:"Stars will be public and anonymous"},messagePlaceholder:{id:"GizmoReviewModal.messagePlaceholder",defaultMessage:"Add an optional private email to the creator"},submit:{id:"GizmoReviewModal.submit",defaultMessage:"Submit"},successToast:{id:"GizmoReviewModal.successToast",defaultMessage:"Review sent"},includeFrom:{id:"GizmoReviewModal.includeFrom",defaultMessage:"Include my email address {email}"},hoverRating1:{id:"GizmoReviewModal.hoverRating1",defaultMessage:"Bad"},hoverRating2:{id:"GizmoReviewModal.hoverRating2",defaultMessage:"Okay"},hoverRating3:{id:"GizmoReviewModal.hoverRating3",defaultMessage:"Good"},hoverRating4:{id:"GizmoReviewModal.hoverRating4",defaultMessage:"Great!"},hoverRating5:{id:"GizmoReviewModal.hoverRating5",defaultMessage:"Excellent!"}});t.Z=e=>{let{gizmo:t}=e;return(0,u.EV)(u.B.GPTReview)?(0,w.jsx)(k,{gizmo:t}):null}},93236:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var r=n(11550),o=n(99976),l=n(651);function a(e){let{href:t,children:n,onClickTrackingEventName:a,onClick:i}=e;function s(){a&&o.A.logEvent(a),null==i||i()}return t?(0,l.jsx)(r.z,{as:"link",to:t,onClick:s,size:"giant",children:n}):(0,l.jsx)(r.z,{onClick:s,size:"giant",children:n})}},75856:function(e,t,n){"use strict";n.d(t,{E:function(){return v},c:function(){return f}});var r=n(99333),o=n(92745),l=n(31438),a=n(13503),i=n(88667),s=n(92379),u=n(75172),c=n(24740),d=n(94219),p=n(651);function f(e){var t;let{serverThreadId:n,clientThreadId:r,isStaticSharedThread:a}=e,d=(0,l.EV)(l.B.ReportConversation),f=(null===(t=(0,i.sB)("3376455464"))||void 0===t?void 0:t.value)||a,m=(0,o.XK)(r),g=null!=n?n:m,x=(0,u.Z)();return((0,s.useEffect)(()=>{null==g&&d&&f&&(c.m.danger(x.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),l.vm.closeModal(l.B.ReportConversation))},[g,d,f,x]),d&&f&&null!=g)?(0,p.jsx)(v,{serverThreadId:g,onClose:()=>l.vm.closeModal(l.B.ReportConversation),isStaticSharedThread:a}):null}function v(e){let{serverThreadId:t,onClose:n,isStaticSharedThread:o}=e,{data:l}=(0,a.sQ)(o?r.CD.ShareableConversation:r.CD.Conversation),i=(0,u.Z)(),s=(0,a.gm)(i,t,o?r.CD.ShareableConversation:r.CD.Conversation);return null==l||null==t?null:(0,p.jsx)(d.UM,{reasons:l.reasons,submitReport:s,title:i.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:n,header:l.header,subHeader:l.header_explanation})}},94219:function(e,t,n){"use strict";n.d(t,{Ag:function(){return P},Rh:function(){return S},UM:function(){return R},_4:function(){return j}});var r,o,l,a,i=n(2346),s=n(99333),u=n(13503),c=n(82363),d=n(92379),p=n(62984),f=n(75172),v=n(15478),m=n(11550),g=n(6440),x=n(66587),h=n(41619),b=n(24434),y=n(651);let j=v.Z.div(r||(r=(0,i.Z)(["divide-y overflow-hidden rounded-md border border-token-border-medium"]))),P=v.Z.button(o||(o=(0,i.Z)(["w-full border-token-border-medium p-2 text-left text-sm hover:bg-token-main-surface-secondary"]))),w=v.Z.div(l||(l=(0,i.Z)(["text-sm font-semibold"]))),O=v.Z.div(a||(a=(0,i.Z)(["text-sm text-token-text-secondary"])));function S(e){let{header:t,subHeader:n}=e;return null==t&&null==n?null:(0,y.jsxs)("div",{className:"mb-4",children:[null!=t&&(0,y.jsx)(w,{children:t}),null!=n&&(0,y.jsx)(O,{children:n})]})}function E(e){let{reasons:t,onSelectReason:n}=e;return(0,y.jsx)(j,{children:t.map(e=>(0,y.jsx)(P,{onClick:()=>{n(e)},children:e.cta},e.id))})}function k(e){var t,n;let{reason:r,submitReport:o}=e,{0:l,1:a}=(0,d.useState)(""),{0:i,1:u}=(0,d.useState)(""),{0:c,1:f}=(0,d.useState)(""),v=null===(t=r.additional_fields)||void 0===t?void 0:t.map(e=>e.id),h=null==v?void 0:v.includes(s.kg.UserName),b=null==v?void 0:v.includes(s.kg.UserEmail),j=h||b;return(0,y.jsxs)("div",{className:"flex flex-col gap-4",children:[j&&(0,y.jsxs)("div",{className:"flex flex-col gap-4 text-sm",children:[h&&(0,y.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,y.jsx)(p.Z,{id:"report.loggedOut.name",defaultMessage:"Your name"}),(0,y.jsx)(g.Z,{name:"name",type:"text",value:i,onChange:e=>u(e.target.value)})]}),b&&(0,y.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,y.jsx)(p.Z,{id:"report.loggedOut.email",defaultMessage:"Your email address"}),(0,y.jsx)(g.Z,{name:"email",type:"email",value:c,onChange:e=>f(e.target.value)})]})]}),(0,y.jsx)(x.Z,{value:l,onChange:e=>a(e.target.value),placeholder:null!==(n=r.details_placeholder)&&void 0!==n?n:void 0,autoFocus:!0,className:"!bg-token-main-surface-primary"}),null!=r.subtext&&(0,y.jsx)("div",{className:"text-sm text-token-text-secondary",children:r.subtext}),(0,y.jsx)("div",{className:"flex justify-end",children:(0,y.jsx)(m.z,{onClick:()=>{let e;j&&(e={},h&&(e.user_name=i),b&&(e.user_email=c)),o.mutateAsync({reason:{id:r.id,details:l},additional_fields_values:e})},disabled:o.isPending,children:(0,y.jsx)(p.Z,{id:"report.submitReport",defaultMessage:"Submit"})})})]})}function M(e){let{reason:t}=e;return(0,y.jsxs)("div",{className:"text-sm",children:[(0,y.jsx)("div",{className:"mb-2",children:t.link_explanation}),null!=t.link_attachment&&(0,y.jsx)("div",{children:(0,y.jsx)("a",{href:t.link_attachment,target:"_blank",rel:"noreferrer",className:"break-words underline",children:t.link_attachment})})]})}function R(e){var t,n,r,o,l,a,i;let s,p;let{reasons:v,submitReport:m,title:g,onClose:x,header:j,subHeader:P}=e,{0:w,1:O}=(0,d.useState)([]),R=(0,f.Z)(),z=v;for(let e of w)z=null!==(l=null===(a=s=z.find(t=>t.id===e))||void 0===a?void 0:a.sub_reasons)&&void 0!==l?l:[];let N=null!=s&&(0,y.jsx)("div",{className:"mb-2 flex gap-1 text-sm",children:(0,y.jsxs)("button",{onClick:()=>{O(e=>e.slice(0,-1))},className:"flex items-center gap-2 p-1",children:[(0,y.jsx)(h.DUf,{className:"icon-sm"}),(0,y.jsx)("div",{children:s.cta})]})}),C=(null===(t=s)||void 0===t?void 0:t.subtext)!=null&&(0,y.jsx)("div",{className:"text-sm text-token-text-secondary",children:s.subtext}),Z=R.formatMessage({id:"report.submittedModal.header",defaultMessage:"Report submitted"}),T=R.formatMessage({id:"report.submittedModal.subHeader",defaultMessage:"You report has been submitted. Thank you for letting us know about this issue."});return m.isSuccess?p=(0,y.jsx)(S,{header:Z,subHeader:T}):(null===(n=s)||void 0===n?void 0:n.details_placeholder)!=null?p=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{header:j,subHeader:P}),N,(0,y.jsx)(k,{reason:s,submitReport:m})]}):(null===(r=s)||void 0===r?void 0:r.link_attachment)!=null?p=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{header:j,subHeader:P}),N,(0,y.jsx)(M,{reason:s}),C]}):z.length>0?p=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{header:j,subHeader:P}),N,z.length>0&&(0,y.jsx)(E,{reasons:z,onSelectReason:async e=>{(0,u.bx)(e)?m.mutateAsync({reason:{id:e.id}}):O(t=>[...t,e.id])}}),C]}):(null===(o=s)||void 0===o?void 0:o.subtext)!=null?p=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{header:j,subHeader:P}),N,(0,y.jsx)("div",{className:"text-sm",children:null===(i=s)||void 0===i?void 0:i.subtext})]}):(c.U.addError("Reporting: arrived at empty leaf reason",s),p=(0,y.jsx)(S,{header:Z,subHeader:T})),(0,y.jsx)(b.Z,{title:g,onClose:x,isOpen:!0,showCloseButton:!0,type:"success",children:p})}},75372:function(e,t,n){"use strict";n.d(t,{f:function(){return v}});var r,o=n(98601),l=n(52088),a=n(2346),i=n(92379),s=n(15478),u=n(651);let c=["icon","children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let f=s.Z.button(r||(r=(0,a.Z)(["flex h-10 w-full items-center gap-2.5 rounded-lg px-2 text-token-text-primary hover:bg-token-sidebar-surface-secondary"]))),v=(0,i.forwardRef)(function(e,t){let{icon:n,children:r}=e,o=(0,l.Z)(e,c);return(0,u.jsxs)(f,p(p({ref:t},o),{},{children:[(0,u.jsx)("div",{className:"flex h-6 w-6 items-center justify-center text-token-text-secondary",children:(0,u.jsx)(n,{className:"icon-md"})}),(0,u.jsx)("span",{className:"text-sm",children:r})]}))})},13503:function(e,t,n){"use strict";n.d(t,{bx:function(){return d},gm:function(){return p},sQ:function(){return f}});var r=n(98601),o=n(24740),l=n(2721),a=n(56032),i=n(84760),s=n(82363);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){return 0===e.sub_reasons.length&&null==e.details_placeholder&&null==e.link_attachment&&null==e.subtext}function p(e,t,n){return(0,a.D)({mutationFn:e=>l.Z.postReport(c(c({},e),{},{entity_type:n,entity_id:t})),onError:r=>{s.U.addError(Error("Error occurred while reporting",{cause:r}),{entityType:n,id:t}),o.m.danger(e.formatMessage({id:"report.submitError",defaultMessage:"Error reporting: {detail}"},{detail:r.message}))}})}function f(e){return(0,i.a)({queryKey:["reportReasons",{entityType:e}],queryFn:()=>l.Z.getReportReasons(e)})}},89039:function(e,t,n){"use strict";let r,o;n.d(t,{J:function(){return D}});var l=n(92379),a=n(782),i=n(78789),s=n(91157),u=n(86060),c=n(76227),d=n(88554),p=n(98397),f=n(57084),v=n(60839),m=n(67607),g=n(87054),x=n(25825),h=n(39231),b=n(37927),y=n(11943),j=n(51973),P=((r=P||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),w=((o=w||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let O={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},S=(0,l.createContext)(null);function E(e){let t=(0,l.useContext)(S);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,E),t}return t}S.displayName="PopoverContext";let k=(0,l.createContext)(null);function M(e){let t=(0,l.useContext)(k);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}k.displayName="PopoverAPIContext";let R=(0,l.createContext)(null);function z(){return(0,l.useContext)(R)}R.displayName="PopoverGroupContext";let N=(0,l.createContext)(null);function C(e,t){return(0,a.E)(t.type,O,e,t)}N.displayName="PopoverPanelContext";let Z=(0,i.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,u.M)()}`,o=`headlessui-popover-panel-${(0,u.M)()}`,c=(0,l.useRef)(null),d=(0,s.T)(t,(0,s.h)(e=>{c.current=e})),v=(0,l.useReducer)(C,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:g,button:b,panel:j,beforePanelSentinel:P,afterPanelSentinel:w},O]=v,E=(0,x.i)(null!=(n=c.current)?n:b);(0,l.useEffect)(()=>O({type:3,buttonId:r}),[r,O]),(0,l.useEffect)(()=>O({type:5,panelId:o}),[o,O]);let M=(0,l.useMemo)(()=>{if(!b||!j)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(b))^Number(null==e?void 0:e.contains(j)))return!0;return!1},[b,j]),R=(0,l.useMemo)(()=>({buttonId:r,panelId:o,close:()=>O({type:1})}),[r,o,O]),N=z(),Z=null==N?void 0:N.registerPopover,T=(0,y.z)(()=>{var e;return null!=(e=null==N?void 0:N.isFocusWithinPopoverGroup())?e:(null==E?void 0:E.activeElement)&&((null==b?void 0:b.contains(E.activeElement))||(null==j?void 0:j.contains(E.activeElement)))});(0,l.useEffect)(()=>null==Z?void 0:Z(R),[Z,R]),(0,h.O)(null==E?void 0:E.defaultView,"focus",e=>{var t,n,r,o;0===g&&(T()||!b||!j||null!=(n=null==(t=P.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=w.current)?void 0:r.contains)&&o.call(r,e.target)||O({type:1}))},!0),(0,m.O)([b,j],(e,t)=>{O({type:1}),(0,p.sP)(t,p.tJ.Loose)||(e.preventDefault(),null==b||b.focus())},0===g);let _=(0,y.z)(e=>{O({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:b:b;null==t||t.focus()}),F=(0,l.useMemo)(()=>({close:_,isPortalled:M}),[_,M]),I=(0,l.useMemo)(()=>({open:0===g,close:_}),[g,_]);return l.createElement(S.Provider,{value:v},l.createElement(k.Provider,{value:F},l.createElement(f.up,{value:(0,a.E)(g,{0:f.ZM.Open,1:f.ZM.Closed})},(0,i.sY)({ourProps:{ref:d},theirProps:e,slot:I,defaultTag:"div",name:"Popover"}))))}),T=(0,i.yV)(function(e,t){let[n,r]=E("Popover.Button"),{isPortalled:o}=M("Popover.Button"),f=(0,l.useRef)(null),m=`headlessui-focus-sentinel-${(0,u.M)()}`,g=z(),h=null==g?void 0:g.closeOthers,P=(0,l.useContext)(N),w=null!==P&&P===n.panelId,O=(0,s.T)(f,t,w?null:e=>r({type:2,button:e})),S=(0,s.T)(f,t),k=(0,x.i)(f),R=(0,y.z)(e=>{var t,o,l;if(w){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==h||h(n.buttonId)),r({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==h?void 0:h(n.buttonId);if(!f.current||(null==k?void 0:k.activeElement)&&!f.current.contains(k.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),C=(0,y.z)(e=>{w||e.key===c.R.Space&&e.preventDefault()}),Z=(0,y.z)(t=>{var o,l;(0,d.P)(t.currentTarget)||e.disabled||(w?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==h||h(n.buttonId)),r({type:0}),null==(l=n.button)||l.focus()))}),T=(0,y.z)(e=>{e.preventDefault(),e.stopPropagation()}),_=0===n.popoverState,F=(0,l.useMemo)(()=>({open:_}),[_]),I=(0,v.f)(e,f),D=w?{ref:S,type:I,onKeyDown:R,onClick:Z}:{ref:O,id:n.buttonId,type:I,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:R,onKeyUp:C,onClick:Z,onMouseDown:T},B=(0,j.l)(),G=(0,y.z)(()=>{let e=n.panel;e&&(0,a.E)(B.current,{[j.N.Forwards]:()=>(0,p.jA)(e,p.TO.First),[j.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return l.createElement(l.Fragment,null,(0,i.sY)({ourProps:D,theirProps:e,slot:F,defaultTag:"button",name:"Popover.Button"}),_&&!w&&o&&l.createElement(b._,{id:m,features:b.A.Focusable,as:"button",type:"button",onFocus:G}))}),_=i.AN.RenderStrategy|i.AN.Static,F=(0,i.yV)(function(e,t){let[{popoverState:n},r]=E("Popover.Overlay"),o=(0,s.T)(t),a=`headlessui-popover-overlay-${(0,u.M)()}`,c=(0,f.oJ)(),p=null!==c?c===f.ZM.Open:0===n,v=(0,y.z)(e=>{if((0,d.P)(e.currentTarget))return e.preventDefault();r({type:1})}),m=(0,l.useMemo)(()=>({open:0===n}),[n]);return(0,i.sY)({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:v},theirProps:e,slot:m,defaultTag:"div",features:_,visible:p,name:"Popover.Overlay"})}),I=i.AN.RenderStrategy|i.AN.Static,D=Object.assign(Z,{Button:T,Overlay:F,Panel:(0,i.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,d]=E("Popover.Panel"),{close:v,isPortalled:m}=M("Popover.Panel"),g=`headlessui-focus-sentinel-before-${(0,u.M)()}`,h=`headlessui-focus-sentinel-after-${(0,u.M)()}`,P=(0,l.useRef)(null),w=(0,s.T)(P,t,e=>{d({type:4,panel:e})}),O=(0,x.i)(P),S=(0,f.oJ)(),k=null!==S?S===f.ZM.Open:0===o.popoverState,R=(0,y.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==o.popoverState||!P.current||(null==O?void 0:O.activeElement)&&!P.current.contains(O.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:1}),null==(t=o.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&d({type:4,panel:null})},[o.popoverState,e.unmount,e.static,d]),(0,l.useEffect)(()=>{if(!n||0!==o.popoverState||!P.current)return;let e=null==O?void 0:O.activeElement;P.current.contains(e)||(0,p.jA)(P.current,p.TO.First)},[n,P,o.popoverState]);let z=(0,l.useMemo)(()=>({open:0===o.popoverState,close:v}),[o,v]),C={ref:w,id:o.panelId,onKeyDown:R,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,a;let i=e.relatedTarget;!i||!P.current||null!=(t=P.current)&&t.contains(i)||(d({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(a=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:a.call(l,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},Z=(0,j.l)(),T=(0,y.z)(()=>{let e=P.current;e&&(0,a.E)(Z.current,{[j.N.Forwards]:()=>{(0,p.jA)(e,p.TO.First)},[j.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),_=(0,y.z)(()=>{let e=P.current;e&&(0,a.E)(Z.current,{[j.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,p.GO)(),l=r.indexOf(o.button),a=r.slice(0,l+1),i=[...r.slice(l+1),...a];for(let r of i.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=i.indexOf(r);-1!==e&&i.splice(e,1)}(0,p.jA)(i,p.TO.First,!1)},[j.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return l.createElement(N.Provider,{value:o.panelId},k&&m&&l.createElement(b._,{id:g,ref:o.beforePanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:T}),(0,i.sY)({ourProps:C,theirProps:r,slot:z,defaultTag:"div",features:I,visible:k,name:"Popover.Panel"}),k&&m&&l.createElement(b._,{id:h,ref:o.afterPanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:_}))}),Group:(0,i.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,s.T)(n,t),[o,a]=(0,l.useState)([]),u=(0,y.z)(e=>{a(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,y.z)(e=>(a(t=>[...t,e]),()=>u(e))),d=(0,y.z)(()=>{var e;let t=(0,g.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),p=(0,y.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),f=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:u,isFocusWithinPopoverGroup:d,closeOthers:p}),[c,u,d,p]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(R.Provider,{value:f},(0,i.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},39231:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(92379),o=n(23441);function l(e,t,n,l){let a=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){a.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)},[e,t,l])}},51973:function(e,t,n){"use strict";let r;n.d(t,{N:function(){return a},l:function(){return i}});var o=n(92379),l=n(23441),a=((r=a||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function i(){var e,t;let n,r=(0,o.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,l.E)(t),(0,o.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},37927:function(e,t,n){"use strict";let r;n.d(t,{A:function(){return l},_:function(){return a}});var o=n(78789),l=((r=l||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},11812:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(46598);function o(e=.1,{startDelay:t=0,from:n=0,ease:o}={}){return(l,a)=>{let i=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,a))-l);if(o){let t=a*e;i=(0,r.R)(o)(i/t)*t}return t+i}}}}]);
//# sourceMappingURL=1048.1dacba6ffa3e234c.js.map