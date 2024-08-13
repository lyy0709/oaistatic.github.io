"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8260],{18260:function(e,t,i){i.r(t),i.d(t,{JITPluginMessage:function(){return q}});var a,n,l=i(41141),s=i(94521),o=i(17379),r=i(21904),d=i(85734),u=i(44230),c=i(49217),m=i(52868),g=i(61457),f=i(82823),p=i(5443),v=i(56029),y=i(86021),j=i(27860),h=i(72256),_=i(25940),x=i(651);function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function P(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach(function(t){(0,s.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function b(e){let{action:t,handleUserAction:i,userActionParams:a,displayParams:n}=e;return"deny"===t.type?(0,x.jsx)(p.z,{color:"secondary",size:"small",onClick:()=>{i(P(P({},a),{},{actionData:P({type:"deny"},t.deny)}))},children:(0,x.jsx)(h.Z,P({},"decline"===t.name?O.decline:O.deny))}):"allow"===t.type?(0,x.jsx)(p.z,{color:"primary",size:"small",onClick:()=>{i(P(P({},a),{},{actionData:P({type:"allow"},t.allow)}))},children:(0,x.jsx)(h.Z,P({},"allow"===t.name?O.allow:O.confirm))}):"always_allow"===t.type?(0,x.jsx)(p.z,{color:"secondary",size:"small",onClick:async()=>{i(P(P({},a),{},{actionData:P({type:"always_allow"},t.always_allow)}))},children:(0,x.jsx)(h.Z,P({},O.alwaysAllow))}):"oauth_redirect"===t.type?(0,x.jsx)(p.z,{color:"primary",size:"small",onClick:()=>{M(t.oauth_redirect,a.clientThreadId,a.turnGizmo)},children:(0,x.jsx)(h.Z,P(P({},O.signInButton),{},{values:{domain:n.domain}}))}):"contact_gizmo"===t.type?(0,x.jsx)(p.z,{color:"secondary",size:"small",onClick:async()=>{i(P(P({},a),{},{actionData:P({type:"contact_gizmo"},t.contact_gizmo)}))},children:(0,x.jsx)(h.Z,P({},O.allow))}):null}async function M(e,t,i){var a;let n=y.tQ.getServerThreadId(t),l=(null===(a=y.iN.getConversationMode(t))||void 0===a?void 0:a.kind)===d.OL.GizmoTest,s=n&&!l?(0,j.ZV)(n,i):window.location.href;v.U.doOAuthRedirect(e.gizmo_id,e.gizmo_action_id,e.domain,s,l)}let O=(0,_.vU)({alwaysAllow:{id:"jitPluginMessage.alwaysAllow",defaultMessage:"Always Allow"},allow:{id:"jitPluginMessage.allow",defaultMessage:"Allow"},decline:{id:"jitPluginMessage.decline",defaultMessage:"Decline"},confirm:{id:"jitPluginMessage.confirm",defaultMessage:"Confirm"},deny:{id:"jitPluginMessage.deny",defaultMessage:"Deny"},signInButton:{id:"jitPluginMessage.signInButton",defaultMessage:"Sign in with {domain}"}});var N=i(29274),k=i(92524),S=i(43128),z=i(92379),T=i(26123),D=i(74091),Z=i(8844),C=i(33423),I=i(44512),L=i(72427);let U=["oauth_success"];function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(Object(i),!0).forEach(function(t){(0,s.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let A="openaiFileIdRefs";var R=((a=R||{})[a.Running=0]="Running",a[a.Finished=1]="Finished",a[a.Error=2]="Error",a[a.Stopped=3]="Stopped",a[a.OauthLogin=4]="OauthLogin",a[a.UserConfirmation=5]="UserConfirmation",a[a.Denied=6]="Denied",a[a.Hidden=7]="Hidden",a);function q(e){var t,i,a,s,c,p,v,j,_,w,P;let M;let{messages:O,clientThreadId:N,isLastTurnInConversation:Z,onRequestCompletion:E}=e,q=(0,S.useRouter)(),[V,...W]=O,Y=(0,T.Z)(),$=(0,y.h9)(),ee=(0,y.eV)(N),et=null!==(t=null===(i=V.message.metadata)||void 0===i?void 0:i.gizmo_id)&&void 0!==t?t:ee,ei=(0,y.WA)(N,et),ea=((null==ei?void 0:ei.kind)===d.OL.GizmoTest||(null==ei?void 0:ei.kind)===d.OL.GizmoMagicCreate)&&ei.gizmo_id===et,en=null===(a=(0,f.b9)(et,ea))||void 0===a?void 0:a.data,{0:el,1:es}=(0,z.useState)(!1),eo=(0,k.Lx)(V.message.recipient);if((null==eo?void 0:eo.functionName)!=null&&(null==en?void 0:en.tools)!=null){for(let e of en.tools)if(function(e,t){if(e.type!==r.qK.JIT_PLUGIN||!e.metadata.json_schema)return!1;let i=!1;return!function e(a){for(let n in a)"operationId"===n&&a[n]===t&&(i=!0),a[n]&&"object"==typeof a[n]&&e(a[n])}(e.metadata.json_schema),i}(e,eo.functionName)){M=e;break}}let er=W.filter(e=>{var t;return(null===(t=e.message.metadata)||void 0===t||null===(t=t.jit_plugin_data)||void 0===t||null===(t=t.from_server)||void 0===t?void 0:t.type)==="debug"}),{uiState:ed,jitPluginData:eu,fileAttachments:ec}=function(e,t,i){var a,n,l,s,o,r,u,c,m,g,f;if((null===(a=e.message.metadata)||void 0===a||null===(a=a.jit_plugin_data)||void 0===a||null===(a=a.from_server)||void 0===a?void 0:a.type)==="send_test")return{uiState:R.Hidden};if((null===(n=e.message.metadata)||void 0===n||null===(n=n.jit_plugin_data)||void 0===n||null===(n=n.from_server)||void 0===n?void 0:n.type)==="debug")return{uiState:R.Stopped};if(t.some(e=>e.message.content.content_type===d.PX.SystemError))return{uiState:R.Error};if((0,L.We)(e.message))return{uiState:R.Stopped};for(let e=t.length-1;e>=0;e--){let a=t[e];if(null!==(l=a.message.metadata)&&void 0!==l&&l.invoked_plugin){let e=[];return t.forEach(t=>{var i;let a=null===(i=t.message.metadata)||void 0===i||null===(i=i.attachments)||void 0===i?void 0:i.filter(e=>e.display_files_from_actions_ext);a&&e.push(...a)}),{uiState:R.Finished,jitPluginData:a.message.metadata.jit_plugin_data,fileAttachments:e}}let n=Q(null===(s=a.message.metadata)||void 0===s||null===(s=s.jit_plugin_data)||void 0===s?void 0:s.from_client);if(null!=n){if((null==n?void 0:n.type)==="contact_gizmo")return{uiState:R.Finished,jitPluginData:null===(r=t[e-1])||void 0===r||null===(r=r.message.metadata)||void 0===r?void 0:r.jit_plugin_data};if((null==n?void 0:n.type)==="deny")return{uiState:R.Denied};if((null==n?void 0:n.type)==="oauth_success")return{uiState:R.Running,jitPluginData:null===(u=a.message.metadata)||void 0===u?void 0:u.jit_plugin_data};break}let d=null===(o=a.message.metadata)||void 0===o||null===(o=o.jit_plugin_data)||void 0===o?void 0:o.from_server;if((null==d?void 0:d.type)==="preview"&&i)return{uiState:R.Running,jitPluginData:null===(c=a.message.metadata)||void 0===c?void 0:c.jit_plugin_data};if((null==d?void 0:d.type)==="confirm_action"&&i)return{uiState:R.UserConfirmation,jitPluginData:null===(m=a.message.metadata)||void 0===m?void 0:m.jit_plugin_data};if((null==d?void 0:d.type)==="oauth_required"&&i)return{uiState:R.OauthLogin,jitPluginData:null===(g=a.message.metadata)||void 0===g?void 0:g.jit_plugin_data}}let p=t.find(e=>{var t;return e.message.author.role===d.uU.Tool&&(null===(t=e.message.author.name)||void 0===t?void 0:t.split(".")[0])==="gizmo_contacts"});return p?{uiState:R.Finished,jitPluginData:null===(f=p.message.metadata)||void 0===f?void 0:f.jit_plugin_data}:{uiState:i?R.Running:R.Stopped}}(V,W.filter(e=>!["debug","send_test"].some(t=>{var i;return t===(null===(i=e.message.metadata)||void 0===i||null===(i=i.jit_plugin_data)||void 0===i||null===(i=i.from_server)||void 0===i?void 0:i.type)})),Z),em=(null==eu||null===(s=eu.from_server)||void 0===s?void 0:s.type)!=="denied_by_user"?null==eu||null===(c=eu.from_server)||void 0===c?void 0:c.body.domain:null===(p=M)||void 0===p||null===(p=p.metadata)||void 0===p?void 0:p.domain,eg=null===(v=M)||void 0===v||null===(v=v.metadata)||void 0===v?void 0:v.privacy_policy_url;if((0,z.useEffect)(()=>{var e,t;if((null==ei?void 0:ei.kind)===d.OL.GizmoInteraction&&(null===(e=Q(null==eu?void 0:eu.from_client))||void 0===e?void 0:e.type)!=="oauth_success"&&(null==eu||null===(t=eu.from_server)||void 0===t?void 0:t.type)==="oauth_required"&&q.query.oauth_success){let e=q.query,{oauth_success:t}=e,i=(0,o.Z)(e,U);if(t){for(let e of eu.from_server.body.actions)if("oauth_redirect"===e.type){B({assistantMessage:V,allMessages:O,clientThreadId:N,onRequestCompletion:E,actionData:{type:"oauth_success",target_message_id:e.oauth_redirect.target_message_id},conversationMode:ei});return}q.replace({pathname:q.pathname,query:i})}}},[ei,q,V,O,N,E,eu,Z]),!en)return null;let ef=C.X.Running,ep=em?K.running:K.starting,ev={domain:em},ey=null;if(ed===R.Hidden)return null;if(ed===R.OauthLogin||ed===R.UserConfirmation){ef=C.X.Paused,ep=K.confirmingSimple;let e={gizmoName:en.gizmo.display.name,domain:em};ey=Y.formatMessage(K.confirmParamsTitle,e),ev=F(F({},e),{},{title:e=>(0,x.jsxs)("div",{className:"inline-flex items-center gap-1 text-sm",children:[e,(0,x.jsx)(u.Tg4,{className:"icon-sm"})]}),subtitle:e=>(0,x.jsx)("div",{className:"text-xs",children:e})})}else ed===R.Finished?(ef=C.X.Finished,ep=K.finished,ey=Y.formatMessage(K.sentParamsTitle,{gizmoName:en.gizmo.display.name,domain:em}),ev={domain:em}):ed===R.Error?(ef=C.X.Error,ep=K.error):(ed===R.Stopped||ed===R.Denied)&&(ef=C.X.Stopped,ep=ed===R.Denied?K.declined:K.stopped);let ej={assistantMessage:V,allMessages:O,clientThreadId:N,turnGizmo:en,onRequestCompletion:E,conversationMode:ei},eh={domain:em},e_=(null==eu||null===(j=eu.from_server)||void 0===j?void 0:j.type)!=="denied_by_user"?null==eu||null===(_=eu.from_server)||void 0===_?void 0:_.body.actions.map((e,t)=>(0,x.jsx)(b,{action:e,displayParams:eh,handleUserAction:B,userActionParams:ej},t)):null,ex=ep?Y.formatMessage(ep,ev):null,ew=D.Z.div(n||(n=(0,l.Z)(["flex gap-2 flex-wrap mt-1 empty:hidden"]))),eP=eu?G(eu):null,eb=(w=null==eP?void 0:eP[A],P=!!eP);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(X,{debugMessages:er}),(0,x.jsx)(I.D,{highlightedCommand:ex,status:ef,showWorkUserSetting:!1,children:eb?(0,x.jsx)(J,{privacyPolicyUrl:eg,data:eu,isPromptingForPermission:ef===C.X.Paused}):null}),(0,x.jsx)(ew,{children:null==ec?void 0:ec.map(e=>(0,x.jsx)(m.Z,{file:e.name,fileId:e.id,width:"wide",alwaysShowData:!0,showDownloadButton:!0,downloadLink:e.download_url,contextConnectorInfo:(0,g.xA)(e.context_connector_info)},e.id))}),(ed===R.UserConfirmation||ed===R.OauthLogin)&&e_&&!$&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"mb-2 flex gap-2",children:e_}),(0,x.jsxs)("div",{className:"my-1 flex items-center gap-2 text-sm",children:[(0,x.jsx)(u.ETw,{className:"icon-sm"}),(0,x.jsx)(h.Z,F({},K.confirmingSubtitle))]})]}),null!==ey&&(0,x.jsx)(H,{title:ey,privacyPolicyUrl:eg,data:eu,onClose:()=>es(!1),isOpen:el,actionButtons:e_})]})}function V(e){let{messageMetadata:t}=e,{0:i,1:a}=(0,z.useState)(!1);return(0,x.jsxs)("div",{className:"my-2 flex flex-col text-sm",children:[(0,x.jsxs)("div",{className:"flex flex-row items-center hover:cursor-pointer",onClick:()=>{a(!i)},children:[i?(0,x.jsx)(u.Tg4,{className:"icon-sm"}):(0,x.jsx)(u.ob9,{className:"icon-sm"}),(0,x.jsx)("div",{className:"font-semibold",children:t.display_message})]}),i&&(0,x.jsx)("pre",{children:JSON.stringify(t.data,null,2)})]})}function X(e){let{debugMessages:t}=e;return 0===t.length?null:(0,x.jsx)("div",{children:t.map((e,t)=>{var i;let a=null===(i=e.message.metadata)||void 0===i||null===(i=i.jit_plugin_data)||void 0===i?void 0:i.from_server;return a&&"debug"===a.type?(0,x.jsx)(V,{messageMetadata:a.body},t):null})})}function B(e){var t;let{actionData:i,assistantMessage:a,allMessages:n,clientThreadId:l,turnGizmo:s,onRequestCompletion:o,conversationMode:r}=e,u={id:(0,Z.Z)(),author:{role:d.uU.Tool,name:a.message.recipient},content:{content_type:d.PX.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:i}}};r=null!==(t=r)&&void 0!==t?t:{kind:d.OL.PrimaryAssistant},null!=s&&s.gizmo.id&&(u.metadata.gizmo_id=s.gizmo.id),y.tQ.updateTree(l,e=>{e.addNode(u.id,u,n[n.length-1].message.id,d.uU.Tool,{completionSampleFinishTime:Date.now()})}),y.tQ.setThreadCurrentLeafId(l,u.id),o({type:d.Os.Next,promptId:u.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:r}})}function G(e){var t,i,a;if((null===(t=e.from_server)||void 0===t?void 0:t.type)==="confirm_action"||(null===(i=e.from_server)||void 0===i?void 0:i.type)==="oauth_required"||(null===(a=e.from_server)||void 0===a?void 0:a.type)==="preview")return e.from_server.body.params}function J(e){var t;let{data:i,privacyPolicyUrl:a,isPromptingForPermission:n}=e,l=i?G(i):null,s=(null!==(t=null==l?void 0:l[A])&&void 0!==t?t:[]).map((e,t)=>{let i=e.name.startsWith("dalle-"),a=e.name;return i&&(a="".concat(a,".webp")),(0,x.jsx)(m.Z,{file:a,fileId:e.id},t)});return(0,x.jsxs)("div",{className:"mb-4 mt-1 divide-y divide-token-border-light overflow-hidden rounded-xl border border-token-border-light",children:[(0,x.jsxs)("div",{className:"flex justify-between bg-token-main-surface-tertiary px-4 py-2 text-sm text-token-text-secondary",children:[n?(0,x.jsx)(h.Z,{id:"JITPluginMessage.params.sharing.present",defaultMessage:"The following will be shared:"}):(0,x.jsx)(h.Z,{id:"JITPluginMessage.params.sharing.past",defaultMessage:"The following was shared:"}),a&&(0,x.jsx)("a",{href:(0,N.k)(a),className:"text-token-text-primary",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(h.Z,F({},K.privacyPolicyLink))})]}),l&&Object.keys(l).map((e,t)=>e===A?null:(0,x.jsxs)("div",{className:"flex items-center space-x-2 px-4 py-2 font-mono",children:[(0,x.jsx)("span",{className:"text-token-text-tertiary",children:"".concat(e,":")}),(0,x.jsx)("span",{children:JSON.stringify(l[e],null,2)})]},t)),s.length>0&&(0,x.jsx)("div",{className:"px-4 py-2",children:s})]})}function W(e){var t;let{title:i,data:a,privacyPolicyUrl:n,actionButtons:l}=e,s=a?G(a):null,o=null!==(t=null==s?void 0:s[A])&&void 0!==t?t:[],r=o.filter(e=>{var t;return!(null!==(t=e.mime_type)&&void 0!==t&&t.startsWith("image/"))}).map((e,t)=>(0,x.jsx)(m.Z,{file:e.name,fileId:e.id},t)),d=o.filter(e=>{var t;return null===(t=e.mime_type)||void 0===t?void 0:t.startsWith("image/")}).map((e,t)=>{let i=e.name.startsWith("dalle-"),a=e.name;return i&&(a="".concat(a,".webp")),(0,x.jsx)(m.Z,{file:a,fileId:e.id},t)});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"font-semibold",children:i}),s&&Object.keys(s).map((e,t)=>e===A?null:(0,x.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,x.jsx)("div",{className:"text-token-text-tertiary",children:e}),(0,x.jsx)("div",{children:JSON.stringify(s[e],null,2)})]},t)),d.length>0&&(0,x.jsxs)("div",{className:"space-y-2",children:[(0,x.jsx)("div",{className:"text-token-text-tertiary",children:(0,x.jsx)(h.Z,{id:"jitPluginMessage.paramsModalImages",defaultMessage:"Images"})}),d]}),r.length>0&&(0,x.jsxs)("div",{className:"space-y-2",children:[(0,x.jsx)("div",{className:"text-token-text-tertiary",children:(0,x.jsx)(h.Z,{id:"jitPluginMessage.paramsModalFiles",defaultMessage:"Files"})}),r]}),(0,x.jsxs)("div",{className:"flex flex-row items-center justify-between pt-4",children:[null!==l&&(0,x.jsx)("div",{className:"space-x-2",children:l}),n&&(0,x.jsx)("a",{className:"text-xs font-semibold",href:(0,N.k)(n),children:(0,x.jsx)(h.Z,F({},K.privacyPolicyLink))})]})]})}function H(e){let{title:t,data:i,privacyPolicyUrl:a,onClose:n,isOpen:l,actionButtons:s}=e;return(0,x.jsx)(c.Z,{isOpen:l,onClose:n,type:"success",hideSeparator:!0,showCloseButton:!0,size:"normal",title:(0,x.jsx)(h.Z,{id:"jitPluginMessage.paramsModalTitle",defaultMessage:"Review action"}),children:(0,x.jsx)("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden",children:(0,x.jsx)("div",{className:"space-y-2",children:(0,x.jsx)(W,{title:t,data:i,privacyPolicyUrl:a,actionButtons:s})})})})}function Q(e){if(e&&"user_action"in e){let t=e.user_action;"target_message_id"in(e=F(F({},e),t.data))&&t.target_message_id&&(e.target_message_id=t.target_message_id)}return e}let K=(0,_.vU)({starting:{id:"jitPluginMessage.starting",defaultMessage:"Starting action"},confirming:{id:"jitPluginMessage.confirmingV4",defaultMessage:"<title>{gizmoName} wants to talk to {domain}</title><subtitle>Only allow sites you trust</subtitle>"},confirmingSimple:{id:"jitPluginMessage.confirming.simple",defaultMessage:"{gizmoName} wants to talk to {domain}"},confirmingSubtitle:{id:"jitPluginMessage.confirming.subtitle",defaultMessage:"Only allow sites you trust."},running:{id:"jitPluginMessage.runningV4",defaultMessage:"Talking to {domain}"},finished:{id:"jitPluginMessage.finishedV4",defaultMessage:"Talked to {domain}"},stopped:{id:"jitPluginMessage.stoppedV4",defaultMessage:"Stopped talking to {domain}"},error:{id:"jitPluginMessage.errorV5",defaultMessage:"Error talking to {domain}"},declined:{id:"jitPluginMessage.declined",defaultMessage:"You declined this action"},ranTest:{id:"jitPluginMessage.ranTest",defaultMessage:"Tested {operationName}"},confirmParamsTitle:{id:"jitPluginMessage.confirmParamsTitleV3",defaultMessage:"{gizmoName} wants to share this info with {domain}"},sentParamsTitle:{id:"jitPluginMessage.sentParamsTitleV2",defaultMessage:"{gizmoName} sent this info to {domain}"},privacyPolicyLink:{id:"jitPluginMessage.privacyPolicyLinkV2",defaultMessage:"Privacy policy"}})}}]);
//# sourceMappingURL=8260.44706147bc1d69e9.js.map