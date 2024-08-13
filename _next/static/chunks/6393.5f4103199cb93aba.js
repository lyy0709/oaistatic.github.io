"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6393],{76393:function(e,t,i){i.r(t),i.d(t,{JITPluginMessage:function(){return V}});var a,n,l=i(2346),s=i(98601),o=i(52088),r=i(99333),d=i(16757),u=i(47563),c=i(24434),m=i(45027),g=i(93866),f=i(55357),p=i(39004),v=i(11550),y=i(99555),j=i(92745),h=i(3551),_=i(62984),x=i(68306),w=i(651);function P(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?P(Object(i),!0).forEach(function(t){(0,s.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function M(e){let{action:t,handleUserAction:i,userActionParams:a,displayParams:n}=e;return"deny"===t.type?(0,w.jsx)(v.z,{color:"secondary",size:"small",onClick:()=>{i(b(b({},a),{},{actionData:b({type:"deny"},t.deny)}))},children:(0,w.jsx)(_.Z,b({},"decline"===t.name?N.decline:N.deny))}):"allow"===t.type?(0,w.jsx)(v.z,{color:"primary",size:"small",onClick:()=>{i(b(b({},a),{},{actionData:b({type:"allow"},t.allow)}))},children:(0,w.jsx)(_.Z,b({},"allow"===t.name?N.allow:N.confirm))}):"always_allow"===t.type?(0,w.jsx)(v.z,{color:"secondary",size:"small",onClick:async()=>{i(b(b({},a),{},{actionData:b({type:"always_allow"},t.always_allow)}))},children:(0,w.jsx)(_.Z,b({},N.alwaysAllow))}):"oauth_redirect"===t.type?(0,w.jsx)(v.z,{color:"primary",size:"small",onClick:()=>{O(t.oauth_redirect,a.clientThreadId,a.turnGizmo)},children:(0,w.jsx)(_.Z,b(b({},N.signInButton),{},{values:{domain:n.domain}}))}):"contact_gizmo"===t.type?(0,w.jsx)(v.z,{color:"secondary",size:"small",onClick:async()=>{i(b(b({},a),{},{actionData:b({type:"contact_gizmo"},t.contact_gizmo)}))},children:(0,w.jsx)(_.Z,b({},N.allow))}):null}async function O(e,t,i){var a;let n=j.tQ.getServerThreadId(t),l=(null===(a=j.iN.getConversationMode(t))||void 0===a?void 0:a.kind)===d.OL.GizmoTest,s=n&&!l?(0,h.ZV)(n,i):window.location.href;y.U.doOAuthRedirect(e.gizmo_id,e.gizmo_action_id,e.domain,s,l)}let N=(0,x.vU)({alwaysAllow:{id:"jitPluginMessage.alwaysAllow",defaultMessage:"Always Allow"},allow:{id:"jitPluginMessage.allow",defaultMessage:"Allow"},decline:{id:"jitPluginMessage.decline",defaultMessage:"Decline"},confirm:{id:"jitPluginMessage.confirm",defaultMessage:"Confirm"},deny:{id:"jitPluginMessage.deny",defaultMessage:"Deny"},signInButton:{id:"jitPluginMessage.signInButton",defaultMessage:"Sign in with {domain}"}});var k=i(36368),S=i(22433),z=i(34977),T=i(92379),D=i(75172),Z=i(15478),I=i(92054),C=i(99529),U=i(42117),E=i(54028);let L=["oauth_success"];function F(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?F(Object(i),!0).forEach(function(t){(0,s.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let R="openaiFileIdRefs";var q=((a=q||{})[a.Running=0]="Running",a[a.Finished=1]="Finished",a[a.Error=2]="Error",a[a.Stopped=3]="Stopped",a[a.OauthLogin=4]="OauthLogin",a[a.UserConfirmation=5]="UserConfirmation",a[a.Denied=6]="Denied",a[a.Hidden=7]="Hidden",a);function V(e){var t,i,a,s,c,v,y,h,x,P,b;let O;let{messages:N,clientThreadId:k,isLastTurnInConversation:I,onRequestCompletion:F}=e,V=(0,z.useRouter)(),[X,...H]=N,$=(0,D.Z)(),ee=(0,j.h9)(),et=(0,j.eV)(k),ei=null!==(t=null===(i=X.message.metadata)||void 0===i?void 0:i.gizmo_id)&&void 0!==t?t:et,ea=(0,j.WA)(k,ei),en=(0,f.X)(ea)&&ea.gizmo_id===ei,el=null===(a=(0,p.b9)(ei,en))||void 0===a?void 0:a.data,{0:es,1:eo}=(0,T.useState)(!1),er=(0,S.Lx)(X.message.recipient);if((null==er?void 0:er.functionName)!=null&&(null==el?void 0:el.tools)!=null){for(let e of el.tools)if(function(e,t){if(e.type!==r.qK.JIT_PLUGIN||!e.metadata.json_schema)return!1;let i=!1;return!function e(a){for(let n in a)"operationId"===n&&a[n]===t&&(i=!0),a[n]&&"object"==typeof a[n]&&e(a[n])}(e.metadata.json_schema),i}(e,er.functionName)){O=e;break}}let ed=H.filter(e=>{var t;return(null===(t=e.message.metadata)||void 0===t||null===(t=t.jit_plugin_data)||void 0===t||null===(t=t.from_server)||void 0===t?void 0:t.type)==="debug"}),{uiState:eu,jitPluginData:ec,fileAttachments:em}=function(e,t,i){var a,n,l,s,o,r,u,c,m,g,f;if((null===(a=e.message.metadata)||void 0===a||null===(a=a.jit_plugin_data)||void 0===a||null===(a=a.from_server)||void 0===a?void 0:a.type)==="send_test")return{uiState:q.Hidden};if((null===(n=e.message.metadata)||void 0===n||null===(n=n.jit_plugin_data)||void 0===n||null===(n=n.from_server)||void 0===n?void 0:n.type)==="debug")return{uiState:q.Stopped};if(t.some(e=>e.message.content.content_type===d.PX.SystemError))return{uiState:q.Error};if((0,E.We)(e.message))return{uiState:q.Stopped};for(let e=t.length-1;e>=0;e--){let a=t[e];if(null!==(l=a.message.metadata)&&void 0!==l&&l.invoked_plugin){let e=[];return t.forEach(t=>{var i;let a=null===(i=t.message.metadata)||void 0===i||null===(i=i.attachments)||void 0===i?void 0:i.filter(e=>e.display_files_from_actions_ext);a&&e.push(...a)}),{uiState:q.Finished,jitPluginData:a.message.metadata.jit_plugin_data,fileAttachments:e}}let n=K(null===(s=a.message.metadata)||void 0===s||null===(s=s.jit_plugin_data)||void 0===s?void 0:s.from_client);if(null!=n){if((null==n?void 0:n.type)==="contact_gizmo")return{uiState:q.Finished,jitPluginData:null===(r=t[e-1])||void 0===r||null===(r=r.message.metadata)||void 0===r?void 0:r.jit_plugin_data};if((null==n?void 0:n.type)==="deny")return{uiState:q.Denied};if((null==n?void 0:n.type)==="oauth_success")return{uiState:q.Running,jitPluginData:null===(u=a.message.metadata)||void 0===u?void 0:u.jit_plugin_data};break}let d=null===(o=a.message.metadata)||void 0===o||null===(o=o.jit_plugin_data)||void 0===o?void 0:o.from_server;if((null==d?void 0:d.type)==="preview"&&i)return{uiState:q.Running,jitPluginData:null===(c=a.message.metadata)||void 0===c?void 0:c.jit_plugin_data};if((null==d?void 0:d.type)==="confirm_action"&&i)return{uiState:q.UserConfirmation,jitPluginData:null===(m=a.message.metadata)||void 0===m?void 0:m.jit_plugin_data};if((null==d?void 0:d.type)==="oauth_required"&&i)return{uiState:q.OauthLogin,jitPluginData:null===(g=a.message.metadata)||void 0===g?void 0:g.jit_plugin_data}}let p=t.find(e=>{var t;return e.message.author.role===d.uU.Tool&&(null===(t=e.message.author.name)||void 0===t?void 0:t.split(".")[0])==="gizmo_contacts"});return p?{uiState:q.Finished,jitPluginData:null===(f=p.message.metadata)||void 0===f?void 0:f.jit_plugin_data}:{uiState:i?q.Running:q.Stopped}}(X,H.filter(e=>!["debug","send_test"].some(t=>{var i;return t===(null===(i=e.message.metadata)||void 0===i||null===(i=i.jit_plugin_data)||void 0===i||null===(i=i.from_server)||void 0===i?void 0:i.type)})),I),eg=(null==ec||null===(s=ec.from_server)||void 0===s?void 0:s.type)!=="denied_by_user"?null==ec||null===(c=ec.from_server)||void 0===c?void 0:c.body.domain:null===(v=O)||void 0===v||null===(v=v.metadata)||void 0===v?void 0:v.domain,ef=null===(y=O)||void 0===y||null===(y=y.metadata)||void 0===y?void 0:y.privacy_policy_url;if((0,T.useEffect)(()=>{var e,t;if((null==ea?void 0:ea.kind)===d.OL.GizmoInteraction&&(null===(e=K(null==ec?void 0:ec.from_client))||void 0===e?void 0:e.type)!=="oauth_success"&&(null==ec||null===(t=ec.from_server)||void 0===t?void 0:t.type)==="oauth_required"&&V.query.oauth_success){let e=V.query,{oauth_success:t}=e,i=(0,o.Z)(e,L);if(t){for(let e of ec.from_server.body.actions)if("oauth_redirect"===e.type){J({assistantMessage:X,allMessages:N,clientThreadId:k,onRequestCompletion:F,actionData:{type:"oauth_success",target_message_id:e.oauth_redirect.target_message_id},conversationMode:ea});return}V.replace({pathname:V.pathname,query:i})}}},[ea,V,X,N,k,F,ec,I]),!el)return null;let ep=C.X.Running,ev=eg?Y.running:Y.starting,ey={domain:eg},ej=null;if(eu===q.Hidden)return null;if(eu===q.OauthLogin||eu===q.UserConfirmation){ep=C.X.Paused,ev=Y.confirmingSimple;let e={gizmoName:el.gizmo.display.name,domain:eg};ej=$.formatMessage(Y.confirmParamsTitle,e),ey=A(A({},e),{},{title:e=>(0,w.jsxs)("div",{className:"inline-flex items-center gap-1 text-sm",children:[e,(0,w.jsx)(u.Tg4,{className:"icon-sm"})]}),subtitle:e=>(0,w.jsx)("div",{className:"text-xs",children:e})})}else eu===q.Finished?(ep=C.X.Finished,ev=Y.finished,ej=$.formatMessage(Y.sentParamsTitle,{gizmoName:el.gizmo.display.name,domain:eg}),ey={domain:eg}):eu===q.Error?(ep=C.X.Error,ev=Y.error):(eu===q.Stopped||eu===q.Denied)&&(ep=C.X.Stopped,ev=eu===q.Denied?Y.declined:Y.stopped);let eh={assistantMessage:X,allMessages:N,clientThreadId:k,turnGizmo:el,onRequestCompletion:F,conversationMode:ea},e_={domain:eg},ex=(null==ec||null===(h=ec.from_server)||void 0===h?void 0:h.type)!=="denied_by_user"?null==ec||null===(x=ec.from_server)||void 0===x?void 0:x.body.actions.map((e,t)=>(0,w.jsx)(M,{action:e,displayParams:e_,handleUserAction:J,userActionParams:eh},t)):null,ew=ev?$.formatMessage(ev,ey):null,eP=Z.Z.div(n||(n=(0,l.Z)(["flex gap-2 flex-wrap mt-1 empty:hidden"]))),eb=ec?W(ec):null,eM=(P=null==eb?void 0:eb[R],b=!!eb);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(B,{debugMessages:ed}),(0,w.jsx)(U.D,{highlightedCommand:ew,status:ep,showWorkUserSetting:!1,children:eM?(0,w.jsx)(G,{privacyPolicyUrl:ef,data:ec,isPromptingForPermission:ep===C.X.Paused}):null}),(0,w.jsx)(eP,{children:null==em?void 0:em.map(e=>(0,w.jsx)(m.Z,{file:e.name,fileId:e.id,width:"wide",alwaysShowData:!0,showDownloadButton:!0,downloadLink:e.download_url,contextConnectorInfo:(0,g.xA)(e.context_connector_info)},e.id))}),(eu===q.UserConfirmation||eu===q.OauthLogin)&&ex&&!ee&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"mb-2 flex gap-2",children:ex}),(0,w.jsxs)("div",{className:"my-1 flex items-center gap-2 text-sm",children:[(0,w.jsx)(u.ETw,{className:"icon-sm"}),(0,w.jsx)(_.Z,A({},Y.confirmingSubtitle))]})]}),null!==ej&&(0,w.jsx)(Q,{title:ej,privacyPolicyUrl:ef,data:ec,onClose:()=>eo(!1),isOpen:es,actionButtons:ex})]})}function X(e){let{messageMetadata:t}=e,{0:i,1:a}=(0,T.useState)(!1);return(0,w.jsxs)("div",{className:"my-2 flex flex-col text-sm",children:[(0,w.jsxs)("div",{className:"flex flex-row items-center hover:cursor-pointer",onClick:()=>{a(!i)},children:[i?(0,w.jsx)(u.Tg4,{className:"icon-sm"}):(0,w.jsx)(u.ob9,{className:"icon-sm"}),(0,w.jsx)("div",{className:"font-semibold",children:t.display_message})]}),i&&(0,w.jsx)("pre",{children:JSON.stringify(t.data,null,2)})]})}function B(e){let{debugMessages:t}=e;return 0===t.length?null:(0,w.jsx)("div",{children:t.map((e,t)=>{var i;let a=null===(i=e.message.metadata)||void 0===i||null===(i=i.jit_plugin_data)||void 0===i?void 0:i.from_server;return a&&"debug"===a.type?(0,w.jsx)(X,{messageMetadata:a.body},t):null})})}function J(e){var t;let{actionData:i,assistantMessage:a,allMessages:n,clientThreadId:l,turnGizmo:s,onRequestCompletion:o,conversationMode:r}=e,u={id:(0,I.Z)(),author:{role:d.uU.Tool,name:a.message.recipient},content:{content_type:d.PX.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:i}}};r=null!==(t=r)&&void 0!==t?t:{kind:d.OL.PrimaryAssistant},null!=s&&s.gizmo.id&&(u.metadata.gizmo_id=s.gizmo.id),j.tQ.updateTree(l,e=>{e.addNode(u.id,u,n[n.length-1].message.id,d.uU.Tool,{completionSampleFinishTime:Date.now()})}),j.tQ.setThreadCurrentLeafId(l,u.id),o({type:d.Os.Next,promptId:u.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:r}})}function W(e){var t,i,a;if((null===(t=e.from_server)||void 0===t?void 0:t.type)==="confirm_action"||(null===(i=e.from_server)||void 0===i?void 0:i.type)==="oauth_required"||(null===(a=e.from_server)||void 0===a?void 0:a.type)==="preview")return e.from_server.body.params}function G(e){var t;let{data:i,privacyPolicyUrl:a,isPromptingForPermission:n}=e,l=i?W(i):null,s=(null!==(t=null==l?void 0:l[R])&&void 0!==t?t:[]).map((e,t)=>{let i=e.name.startsWith("dalle-"),a=e.name;return i&&(a="".concat(a,".webp")),(0,w.jsx)(m.Z,{file:a,fileId:e.id},t)});return(0,w.jsxs)("div",{className:"mb-4 mt-1 divide-y divide-token-border-light overflow-hidden rounded-xl border border-token-border-light",children:[(0,w.jsxs)("div",{className:"flex justify-between bg-token-main-surface-tertiary px-4 py-2 text-sm text-token-text-secondary",children:[n?(0,w.jsx)(_.Z,{id:"JITPluginMessage.params.sharing.present",defaultMessage:"The following will be shared:"}):(0,w.jsx)(_.Z,{id:"JITPluginMessage.params.sharing.past",defaultMessage:"The following was shared:"}),a&&(0,w.jsx)("a",{href:(0,k.k)(a),className:"text-token-text-primary",target:"_blank",rel:"noreferrer",children:(0,w.jsx)(_.Z,A({},Y.privacyPolicyLink))})]}),l&&Object.keys(l).map((e,t)=>e===R?null:(0,w.jsxs)("div",{className:"flex items-center space-x-2 px-4 py-2 font-mono",children:[(0,w.jsx)("span",{className:"text-token-text-tertiary",children:"".concat(e,":")}),(0,w.jsx)("span",{children:JSON.stringify(l[e],null,2)})]},t)),s.length>0&&(0,w.jsx)("div",{className:"px-4 py-2",children:s})]})}function H(e){var t;let{title:i,data:a,privacyPolicyUrl:n,actionButtons:l}=e,s=a?W(a):null,o=null!==(t=null==s?void 0:s[R])&&void 0!==t?t:[],r=o.filter(e=>{var t;return!(null!==(t=e.mime_type)&&void 0!==t&&t.startsWith("image/"))}).map((e,t)=>(0,w.jsx)(m.Z,{file:e.name,fileId:e.id},t)),d=o.filter(e=>{var t;return null===(t=e.mime_type)||void 0===t?void 0:t.startsWith("image/")}).map((e,t)=>{let i=e.name.startsWith("dalle-"),a=e.name;return i&&(a="".concat(a,".webp")),(0,w.jsx)(m.Z,{file:a,fileId:e.id},t)});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"font-semibold",children:i}),s&&Object.keys(s).map((e,t)=>e===R?null:(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)("div",{className:"text-token-text-tertiary",children:e}),(0,w.jsx)("div",{children:JSON.stringify(s[e],null,2)})]},t)),d.length>0&&(0,w.jsxs)("div",{className:"space-y-2",children:[(0,w.jsx)("div",{className:"text-token-text-tertiary",children:(0,w.jsx)(_.Z,{id:"jitPluginMessage.paramsModalImages",defaultMessage:"Images"})}),d]}),r.length>0&&(0,w.jsxs)("div",{className:"space-y-2",children:[(0,w.jsx)("div",{className:"text-token-text-tertiary",children:(0,w.jsx)(_.Z,{id:"jitPluginMessage.paramsModalFiles",defaultMessage:"Files"})}),r]}),(0,w.jsxs)("div",{className:"flex flex-row items-center justify-between pt-4",children:[null!==l&&(0,w.jsx)("div",{className:"space-x-2",children:l}),n&&(0,w.jsx)("a",{className:"text-xs font-semibold",href:(0,k.k)(n),children:(0,w.jsx)(_.Z,A({},Y.privacyPolicyLink))})]})]})}function Q(e){let{title:t,data:i,privacyPolicyUrl:a,onClose:n,isOpen:l,actionButtons:s}=e;return(0,w.jsx)(c.Z,{isOpen:l,onClose:n,type:"success",hideSeparator:!0,showCloseButton:!0,size:"normal",title:(0,w.jsx)(_.Z,{id:"jitPluginMessage.paramsModalTitle",defaultMessage:"Review action"}),children:(0,w.jsx)("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden",children:(0,w.jsx)("div",{className:"space-y-2",children:(0,w.jsx)(H,{title:t,data:i,privacyPolicyUrl:a,actionButtons:s})})})})}function K(e){if(e&&"user_action"in e){let t=e.user_action;"target_message_id"in(e=A(A({},e),t.data))&&t.target_message_id&&(e.target_message_id=t.target_message_id)}return e}let Y=(0,x.vU)({starting:{id:"jitPluginMessage.starting",defaultMessage:"Starting action"},confirming:{id:"jitPluginMessage.confirmingV4",defaultMessage:"<title>{gizmoName} wants to talk to {domain}</title><subtitle>Only allow sites you trust</subtitle>"},confirmingSimple:{id:"jitPluginMessage.confirming.simple",defaultMessage:"{gizmoName} wants to talk to {domain}"},confirmingSubtitle:{id:"jitPluginMessage.confirming.subtitle",defaultMessage:"Only allow sites you trust."},running:{id:"jitPluginMessage.runningV4",defaultMessage:"Talking to {domain}"},finished:{id:"jitPluginMessage.finishedV4",defaultMessage:"Talked to {domain}"},stopped:{id:"jitPluginMessage.stoppedV4",defaultMessage:"Stopped talking to {domain}"},error:{id:"jitPluginMessage.errorV5",defaultMessage:"Error talking to {domain}"},declined:{id:"jitPluginMessage.declined",defaultMessage:"You declined this action"},ranTest:{id:"jitPluginMessage.ranTest",defaultMessage:"Tested {operationName}"},confirmParamsTitle:{id:"jitPluginMessage.confirmParamsTitleV3",defaultMessage:"{gizmoName} wants to share this info with {domain}"},sentParamsTitle:{id:"jitPluginMessage.sentParamsTitleV2",defaultMessage:"{gizmoName} sent this info to {domain}"},privacyPolicyLink:{id:"jitPluginMessage.privacyPolicyLinkV2",defaultMessage:"Privacy policy"}})}}]);
//# sourceMappingURL=6393.5f4103199cb93aba.js.map