"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7961],{77961:function(e,s,t){t.r(s);var a=t(16757),l=t(22433),n=t(19841),r=t(92379),i=t(41619),c=t(24434),m=t(651);s.default=r.memo(function(e){var s,t,d;let{message:o,className:x}=e,{0:u,1:h}=(0,r.useState)(!1),p=o.message.content.content_type===a.PX.ModelEditableContext?o.message.content.model_set_context:null,v=(0,l.RR)(o.message);if(o.message.content.content_type===a.PX.UserEditableContext)return null;let{recipient:g}=o.message,f=!!(null!==(s=o.message.metadata)&&void 0!==s&&s.rebase_system_message),j=!!(null!==(t=o.message.metadata)&&void 0!==t&&t.is_user_system_message);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:(0,n.default)(x,"mt-6 flex flex-col items-start gap-2 overflow-x-auto whitespace-pre-wrap break-words first:mt-0"),children:[(0,m.jsxs)("div",{className:"text-xs",children:[(0,m.jsx)("div",{className:"uppercase text-red-500",children:"debug message"}),!!p&&(0,m.jsxs)("button",{onClick:()=>h(!0),className:"flex cursor-pointer items-center gap-1",children:[(0,m.jsx)(i.Yu0,{className:"icon-sm"}),(0,m.jsx)("div",{className:"underline",children:"View all model memories"})]})]}),(0,m.jsx)("div",{className:"flex w-full items-start justify-between",children:(0,m.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(0,m.jsxs)("div",{children:["From: ",null!==(d=o.message.author.name)&&void 0!==d?d:o.message.author.role]}),!!g&&"all"!==g&&(0,m.jsxs)("div",{children:["To: ",g]})]})}),(0,m.jsx)("div",{className:"whitespace-pre-wrap font-mono text-sm",children:v}),(0,m.jsxs)("div",{className:"flex gap-3",children:[f&&(0,m.jsx)("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Rebased System Message"}),j&&(0,m.jsx)("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Custom Instruction"})]})]}),(0,m.jsx)(c.Z,{title:"All Model Memories",type:"success",isOpen:u,onClose:()=>h(!1),children:(0,m.jsx)("div",{className:"max-h-[80vh] overflow-auto whitespace-pre-wrap font-mono text-sm",children:p})})]})})}}]);
//# sourceMappingURL=7961.28e2851f1a8167aa.js.map