(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3224],{29237:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return e_},default:function(){return ek}});var a,s,i,l,r,o,c,d,u=n(68986),m=n(98601),g=n(93465),f=n(59144),x=n(24434),p=n(50454),j=n(24740),b=n(43991),h=n(60806),v=n(92379),y=n(75172),M=n(62984),w=n(68306),N=n(651);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let O=((a={}).FLEXIBLE="month",a.ANNUAL="year",a),S=(0,h.b)(O);function B(e){let{isOpen:t,onClose:n,initialTeamBillingType:a,renewalDate:s,accountId:i}=e,{0:l,1:r}=(0,v.useState)(a),{0:o,1:c}=(0,v.useState)(!1),{0:d,1:u}=(0,v.useState)(!1),m=L[l],f=(0,y.Z)(),p=(0,g.bm)(i),b=async()=>{u(!0);try{await p.mutateAsync({accountId:i,updatedPriceInterval:l===O.FLEXIBLE?"month":"year",updatedSeats:void 0}),u(!1),j.m.success(f.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),c(!1),n()}catch(e){j.m.warning(f.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{u(!1)}};return(0,N.jsx)(x.Z,{type:"success",isOpen:t,onClose:()=>{c(!1),r(a),n()},size:"custom",className:"max-w-xl",noPadding:!0,title:o?f.formatMessage({id:"teamBilling.changeBillingScheduleConfirmTitle",defaultMessage:"Confirm changes"}):f.formatMessage({id:"teamBilling.changeBillingScheduleTitle",defaultMessage:"Change billing schedule"}),showCloseButton:!0,children:o?(0,N.jsx)(I,{selectedPlan:l,initialTeamBillingType:a,renewalDate:s,selectedPlanData:m,handleUpdate:b,isUpdating:d}):(0,N.jsx)(E,{setSelectedPlan:r,selectedPlan:l,initialTeamBillingType:a,toggleConfirmPage:function(){c(!o)},renewalDate:s})})}function E(e){let{selectedPlan:t,setSelectedPlan:n,initialTeamBillingType:a,toggleConfirmPage:s,renewalDate:i}=e,l=(0,y.Z)();return(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"grid grid-flow-row grid-cols-2",children:(0,N.jsxs)(b.fC,{className:"col-span-2 grid md:col-span-2 md:grid-cols-2",defaultValue:t,onValueChange:e=>{S(e)&&n(e)},children:[(0,N.jsx)(p.IW,P({billingType:O.FLEXIBLE},p.c0)),(0,N.jsx)(p.IW,P({billingType:O.ANNUAL},p.sr))]})}),(0,N.jsx)("hr",{}),(0,N.jsxs)("div",{className:"m-4 flex items-center justify-between",children:[(0,N.jsx)("span",{className:"text-sm text-token-text-secondary",children:(0,N.jsx)(M.Z,P(P({},p.sY.changeEffectDate),{},{values:{date:(0,N.jsx)(w.Ji,{value:i,year:"numeric",month:"long",day:"numeric"})}}))}),(0,N.jsx)(f.m,{title:l.formatMessage(p.sY.continueToPricePreview),disabled:t===a,color:"primary",onClick:()=>{s()}})]})]})}function I(e){let{initialTeamBillingType:t,selectedPlan:n,renewalDate:a,selectedPlanData:s,handleUpdate:i,isUpdating:l}=e,r=(0,y.Z)();return(0,N.jsxs)("div",{className:"p-4",children:[(0,N.jsx)("span",{className:"text-sm",children:(0,N.jsx)(M.Z,P(P({},p.sY.confirmPageChangeEffectDate),{},{values:{current_plan:t===O.FLEXIBLE?"Flexible (monthly)":"Annual",new_plan:n===O.FLEXIBLE?"Flexible (monthly)":"Annual",date:(0,N.jsx)(w.Ji,{value:a,year:"numeric",month:"long",day:"numeric"})}}))}),(0,N.jsxs)("div",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4",children:[(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,P({},s.name))}),(0,N.jsx)("span",{className:"text-sm",children:(0,N.jsx)(M.Z,P(P({},s.cost),{},{values:{s:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,N.jsx)(p.Re,{children:t})}}}))}),(0,N.jsx)("span",{className:"text-sm text-token-text-secondary",children:(0,N.jsx)(M.Z,P({},s.structure))})]}),(0,N.jsx)("div",{className:"mt-4 flex justify-end",children:(0,N.jsx)(f.m,{title:r.formatMessage(p.sY.confirmChange),color:"primary",onClick:i,loading:l})})]})}let L={[O.FLEXIBLE]:{name:p.sY.flexiblePlanName,cost:p.sY.flexiblePlanCost,structure:p.sY.teamsCostStructure},[O.ANNUAL]:{name:p.sY.annualPlanName,cost:p.sY.annualPlanCost,structure:p.sY.teamsCostStructure}};var T=n(2721),C=n(93951),D=n(31498),_=n(88667),k=n(19841),A=n(34977),z=n(11550),U=n(92609),Y=n(97537),F=n(98095),X=n(94668),H=n(77748),W=n(59725),$=n(6440);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e){let{isOpen:t,onClose:n}=e,a=(0,y.Z)(),{data:s,isLoading:i}=(0,g.ZP)(),l=(0,C.t)(),r=(0,g.St)(null==l?void 0:l.id),o=(0,D.aF)(),{0:c,1:d}=(0,v.useState)(""),{0:u,1:m}=(0,v.useState)(!1),p=(null==o?void 0:o.email)&&c.toLowerCase()==o.email.toLowerCase(),{0:b,1:h}=(0,v.useState)(s&&!s.will_renew);if(i||!l||!s)return null;let w=async()=>{m(!0);try{await r.mutateAsync(l.id),h(!0)}catch(e){j.m.warning(a.formatMessage(J.errorCancellingSubscription),{hasCloseButton:!0})}finally{m(!1)}};return(0,N.jsx)(x.Z,{type:"success",onClose:n,showCloseButton:!0,isOpen:t,className:"",title:(0,N.jsx)("span",{className:"text-lg",children:(0,N.jsx)(M.Z,q({},J.cancelPlan))}),children:b?(0,N.jsxs)("div",{children:[(0,N.jsx)("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:(0,N.jsx)(M.Z,q({},J.successfullyCanceled))}),null!=s.active_until&&(0,N.jsx)("p",{className:"text-sm text-token-text-primary",children:(0,N.jsx)(M.Z,q(q({},J.retainUntil),{},{values:{expiryDate:new Date(s.active_until)}}))}),(0,N.jsx)("div",{className:"mt-6 flex w-full flex-row justify-end",children:(0,N.jsx)(f.m,{title:a.formatMessage(J.doneButton),color:"primary",onClick:n,disabled:u})})]}):(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,N.jsxs)("div",{className:"flex w-full items-center gap-4",children:[(0,N.jsx)(W.B0,{src:l.data.profilePictureUrl,size:"large"}),(0,N.jsxs)("div",{className:"flex-col",children:[(0,N.jsx)("p",{className:"font-semibold",children:l.data.name}),(0,N.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,N.jsx)(M.Z,q(q({},J.membersCount),{},{values:{count:s.seats_entitled}}))})]})]}),(0,N.jsxs)("div",{className:"w-full",children:[(0,N.jsx)("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:(0,N.jsx)(M.Z,q({},J.areYouSure))}),(0,N.jsxs)("ul",{className:"list-disc pl-5 text-sm text-token-text-secondary",children:[(0,N.jsx)("li",{className:"my-2",children:(0,N.jsx)(M.Z,q({},J.dataUnavailable))}),null!=s.active_until&&(0,N.jsx)("li",{className:"my-2",children:(0,N.jsx)(M.Z,q(q({},J.retainUntil),{},{values:{expiryDate:new Date(s.active_until)}}))}),(0,N.jsx)("li",{className:"my-2",children:(0,N.jsx)(M.Z,q({},J.retainEmailAccess))})]})]}),(0,N.jsxs)("div",{className:"w-full",children:[(0,N.jsx)("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:(0,N.jsx)(M.Z,q({},J.enterEmailToConfirm))}),(0,N.jsx)($.Z,{type:"text",name:"user-email",placeholder:"abcd@acme.com",onChange:e=>{d(e.target.value)}})]})]}),(0,N.jsxs)("div",{className:"mt-6 flex w-full flex-row justify-end",children:[(0,N.jsx)(f.m,{title:a.formatMessage(J.keepSubscriptionButton),onClick:n,disabled:u}),(0,N.jsx)(f.m,{title:a.formatMessage(J.cancelSubscriptionButton),onClick:w,disabled:!p,loading:u,color:"danger",className:"ml-2"})]})]})})}let J=(0,w.vU)({dataUnavailable:{id:"cancelTeamPlanModal.dataUnavailable",defaultMessage:"All workspace data including chat history and settings will not be available."},cancelPlan:{id:"cancelTeamPlanModal.cancelPlan",defaultMessage:"Cancel subscription"},retainUntil:{id:"cancelTeamPlanModal.retainUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},retainEmailAccess:{id:"cancelTeamPlanModal.retainEmailAccess",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},errorCancellingSubscription:{id:"cancelTeamPlanModal.errorCancellingSubscription",defaultMessage:"There was a problem cancelling your subscription."},areYouSure:{id:"cancelTeamPlanModal.areYouSure",defaultMessage:"Are you sure?"},enterEmailToConfirm:{id:"cancelTeamPlanModal.enterEmailToConfirm",defaultMessage:"Enter your Email address to confirm"},emailPlaceholder:{id:"cancelTeamPlanModal.emailPlaceholder",defaultMessage:"abcd@acme.com"},doneButton:{id:"cancelTeamPlanModal.doneButton",defaultMessage:"Done"},keepSubscriptionButton:{id:"cancelTeamPlanModal.keepSubscriptionButton",defaultMessage:"Keep subscription"},cancelSubscriptionButton:{id:"cancelTeamPlanModal.cancelSubscriptionButton",defaultMessage:"Cancel subscription"},successfullyCanceled:{id:"cancelTeamPlanModal.successfullyCanceled",defaultMessage:"You have successfully canceled your subscription."},membersCount:{id:"yourComponent.membersCount",defaultMessage:"{count, plural, one {# member} other {# members}}"}});var Q=n(2346),G=n(32378),K=n(55356),ee=n(15478);function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ea=((s=ea||{}).FLEXIBLE="month",s.ANNUAL="year",s);let es=ee.Z.p(i||(i=(0,Q.Z)(["text-base font-semibold mb-3 mt-3"])));function ei(e){let{isOpen:t,onClose:n,initialTeamBillingType:a,initialSeats:s,accountId:i,renewalDate:l}=e,r=(0,y.Z)(),{0:o,1:c}=(0,v.useState)(s),{0:d,1:u}=(0,v.useState)(!1),{0:m,1:f}=(0,v.useState)(!1),b=eo[a],h=a===ea.FLEXIBLE?p.c0:p.sr,M=(0,g.bm)(i),w=async()=>{f(!0);try{await M.mutateAsync({accountId:i,updatedPriceInterval:void 0,updatedSeats:o}),f(!1),j.m.success(r.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),u(!1),n()}catch(e){j.m.warning(r.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}))}finally{f(!1)}};return(0,N.jsx)(x.Z,{type:"success",isOpen:t,onClose:()=>{u(!1),c(s),n()},size:"custom",noPadding:!0,className:"max-w-xl",showCloseButton:!0,title:d?r.formatMessage({id:"teamsManageSeatsModal.title",defaultMessage:"Manage seats"}):r.formatMessage({id:"teamsManageSeatsModalConfirmPage.title",defaultMessage:"Review"}),children:d?(0,N.jsx)(er,{numSeats:o,initialSeats:s,handleUpdate:w,isUpdating:m,renewalDate:l,accountId:i}):(0,N.jsx)(el,{initialTeamBillingType:a,selectedPlanBillingInfo:h,numSeats:o,initialSeats:s,setNumSeats:c,selectedPlanData:b,toggleConfirmPage:function(){u(!d)}})})}function el(e){let{initialTeamBillingType:t,selectedPlanBillingInfo:n,numSeats:a,initialSeats:s,setNumSeats:i,selectedPlanData:l,toggleConfirmPage:r}=e,o=(0,y.Z)();return(0,N.jsxs)("div",{className:"grid grid-flow-row grid-cols-2",children:[(0,N.jsx)(b.fC,{className:"col-span-2 grid md:col-span-1 md:grid-cols-1",defaultValue:t,children:(0,N.jsx)(p.IW,en({billingType:t},n))}),(0,N.jsxs)("div",{className:"col-span-3 overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[(0,N.jsx)("label",{className:"mb-3 block text-base font-semibold",htmlFor:"seats",children:(0,N.jsx)(M.Z,en({},p.sY.seatsTitle))}),(0,N.jsx)(p.ZY,{numSeats:a,minSeats:s,setNumSeats:i}),(0,N.jsx)(G.b,{}),(0,N.jsx)(es,{children:(0,N.jsx)(M.Z,en({},p.sY.summaryTitle))}),(0,N.jsxs)("div",{className:"text-sm",children:[(0,N.jsx)("p",{className:"mb-2",children:(0,N.jsx)(M.Z,en({},l.name))}),(0,N.jsxs)(K.QI,{children:[(0,N.jsx)(K.HC,{children:(0,N.jsx)(M.Z,en({},l.billed))}),(0,N.jsx)(K.HC,{children:(0,N.jsx)("b",{children:(0,N.jsx)(M.Z,en(en({},l.total),{},{values:{totalCost:(a||0)*(t===ea.ANNUAL?300:30)}}))})})]})]})]}),(0,N.jsx)("hr",{}),(0,N.jsx)("div",{className:"m-4 flex justify-end",children:(0,N.jsx)(f.m,{title:o.formatMessage({id:"teamsManageSeatsModal.continue",defaultMessage:"Continue"}),disabled:a===s,onClick:()=>{r()},color:"primary"})})]})}function er(e){let{numSeats:t,initialSeats:n,renewalDate:a,handleUpdate:s,isUpdating:i,accountId:l}=e,r=(0,y.Z)(),{data:o,isError:c,isLoading:d}=(0,g.zu)(l,t);return d?(0,N.jsx)("div",{className:"flex items-center justify-center p-6",children:(0,N.jsx)(Y.Z,{})}):!c&&o?(0,N.jsxs)("div",{className:"p-6",children:[(0,N.jsxs)("div",{className:"flex justify-between",children:[(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.additionalSeats",defaultMessage:"{additionalSeats} additional seats",values:{additionalSeats:t-n}})}),(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.additionalSeatsTotal",defaultMessage:"${totalCost}",values:{totalCost:(o.total_amount/100).toFixed(2)}})})]}),(0,N.jsx)("span",{className:"text-sm text-token-text-secondary",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.proratedAmountMessage",defaultMessage:"Prorated amount until next billing cycle"})}),(0,N.jsx)("span",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4 text-sm text-token-text-secondary",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.chargeMessage",defaultMessage:"You will be charged for {numSeats} total seats at your next renewal on {date}",values:{numSeats:t,date:(0,N.jsx)(w.Ji,{value:a,year:"numeric",month:"long",day:"numeric"})}})}),(0,N.jsx)("hr",{className:"mt-4"}),(0,N.jsxs)("div",{className:"mt-4 flex justify-between",children:[(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.subTotal",defaultMessage:"Subtotal"})}),(0,N.jsx)("span",{children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.subtotalPrice",defaultMessage:"${totalCost}",values:{totalCost:(o.amount_excluding_tax/100).toFixed(2)}})})]}),(0,N.jsxs)("div",{className:"mt-2 flex justify-between",children:[(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.tax",defaultMessage:"Tax"})}),(0,N.jsx)("span",{children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.taxAmount",defaultMessage:"${tax}",values:{tax:(o.tax_amount/100).toFixed(2)}})})]}),(0,N.jsxs)("div",{className:"mt-2 flex justify-between",children:[(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.totalDueToday",defaultMessage:"Total due today"})}),(0,N.jsx)("span",{className:"font-semibold",children:(0,N.jsx)(M.Z,{id:"teamsManageSeatsModal.totalDueTodayAmount",defaultMessage:"${totalCost}",values:{totalCost:(o.total_amount/100).toFixed(2)}})})]}),(0,N.jsx)("hr",{className:"mt-4"}),(0,N.jsx)("div",{className:"mt-6 flex justify-end",children:(0,N.jsx)(f.m,{title:r.formatMessage({id:"teamsManageSeatsModal.payNow",defaultMessage:"Pay now"}),color:"primary",onClick:s,loading:i})})]}):void 0}let eo={[ea.FLEXIBLE]:{name:p.sY.flexiblePlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed monthly",description:"Summary billing of selected plan"},total:p.sY.flexiblePlanTotal},[ea.ANNUAL]:{name:p.sY.annualPlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed annually",description:"Summary billing of selected plan"},total:p.sY.annualPlanTotal}};var ec=n(30853);function ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function eu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ed(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ed(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function em(e){var t;let{numInUse:n,numAllocated:a,isTeam:s,subscriptionWillRenew:i,subscriptionBillingPeriod:l,accountId:r,subscriptionRenewalDate:o}=e,c=Math.max(a,n),d=null===(t=(0,_.sB)("3954884439"))||void 0===t?void 0:t.value,{0:u,1:m}=(0,v.useState)(!1),g=function(){m(!u)},f="monthly"===l?O.FLEXIBLE:O.ANNUAL;return(0,N.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,N.jsxs)("div",{className:"flex justify-between",children:[(0,N.jsx)("span",{className:"mt-1 text-left text-sm",children:(0,N.jsx)(M.Z,eu(eu({},ey.description),{},{values:{num:"".concat(n,"/").concat(a)}}))}),s&&i&&d&&(0,N.jsx)(z.z,{color:"secondary",className:"text-right",onClick:g,children:(0,N.jsx)(M.Z,{id:"components.business.NumSeats.manageSeats",defaultMessage:"Manage seats"})}),(0,N.jsx)(ei,{isOpen:u,onClose:g,initialTeamBillingType:f,initialSeats:a,accountId:r,renewalDate:o})]}),(0,N.jsx)(c>10?eg:ev,{numInUse:n,numAllocated:a})]})}function eg(e){let{numAllocated:t,numInUse:n}=e,a=(0,y.Z)(),s=n>t,i=s?100:n/t*100,l=s?t/n*100:100;return(0,N.jsx)("div",{className:(0,k.default)("relative w-full rounded-full",s?"bg-orange-500":"bg-token-main-surface-primary"),children:(0,N.jsxs)("div",{className:"relative h-4",style:{width:"".concat(l,"%")},children:[(0,N.jsx)("div",{className:(0,k.default)("h-4 overflow-hidden rounded-l-full bg-green-600",n===t&&"rounded-r-full"),style:{width:"".concat(i,"%")}}),n!==t&&s&&(0,N.jsx)("div",{className:"absolute right-0 top-[-3px] bg-token-main-surface-primary",children:(0,N.jsx)(ec.u,{label:a.formatMessage(ey.dividerTooltip,{count:t}),children:(0,N.jsx)(ef,{className:"px-1 py-0.5"})})})]})})}let ef=e=>{let{className:t}=e;return(0,N.jsxs)("div",{className:(0,k.default)("flex flex-col gap-0.5",t),children:[(0,N.jsx)(eh,{}),(0,N.jsx)(eh,{}),(0,N.jsx)(eh,{}),(0,N.jsx)(eh,{})]})},ex=ee.Z.div(l||(l=(0,Q.Z)(["h-4 w-4 rounded-full"]))),ep=(0,ee.Z)(ex)(r||(r=(0,Q.Z)(["bg-green-600"]))),ej=(0,ee.Z)(ex)(o||(o=(0,Q.Z)(["bg-token-main-surface-tertiary"]))),eb=(0,ee.Z)(ex)(c||(c=(0,Q.Z)(["bg-orange-500"]))),eh=ee.Z.span(d||(d=(0,Q.Z)(["w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full"])));function ev(e){let{numAllocated:t,numInUse:n}=e,a=(0,y.Z)(),s=n>t,i=(0,v.useMemo)(()=>Array.from(Array(s?n:t).keys()),[s,t,n]);return(0,N.jsx)("div",{className:"flex items-center gap-2",children:i.map(e=>{let i=eb,l=null;return e<n&&!s?i=ep:e<t&&!s&&(i=ej),e===t-1&&(l=(0,N.jsx)(ec.u,{label:a.formatMessage(ey.dividerTooltip,{count:t}),children:(0,N.jsx)(ef,{})})),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{},e),l]})})})}let ey=(0,w.vU)({dividerTooltip:{defaultMessage:"Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",id:"components.business.NumSeats.dividerTooltip"},description:{defaultMessage:"{num} seats in use",id:"components.business.NumSeats.description"}});var eM=n(8040),ew=n(84760);function eN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function eZ(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eN(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let eP=(0,w.vU)({invoicesLoadError:{id:"organizationBillingInfo.invoicesLoadError.0",defaultMessage:"Failed to load invoices. Contact support@openai.com if error persists."}});function eO(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function eS(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eO(Object(n),!0).forEach(function(t){(0,m.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eO(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eB(){var e;let{data:t,isLoading:n,isError:a}=(0,g.ZP)(),s=(0,C.t)(),{0:i,1:l}=(0,v.useState)(!1);if(n)return(0,N.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,N.jsx)(Y.Z,{})});if(a||!t||!s)return null;let r=null!=t.active_until,o=(null==t?void 0:t.seats_in_use)>(null==t?void 0:t.seats_entitled);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(eM.i9,{children:[(0,N.jsx)(eM.A4,{children:(0,N.jsx)(M.Z,eS({},eD.planTitle))}),(0,N.jsx)("hr",{}),(0,N.jsxs)("div",{className:"flex items-center justify-between",children:[(0,N.jsxs)("div",{children:[(0,N.jsx)(eM.i$,{children:null!=s&&s.isEnterprise()?r?(0,N.jsx)(M.Z,eS({},eD.activeEnterpriseLicense)):null!=s&&s.isResellerHosted()?(0,N.jsx)(M.Z,eS({},eD.resellerHostedEnterpriseLicense)):(0,N.jsx)(M.Z,eS({},eD.pendingEnterpriseLicense)):null!=s&&s.isEdu()?r?(0,N.jsx)(M.Z,eS({},eD.activeEduLicense)):null!=s&&s.isResellerHosted()?(0,N.jsx)(M.Z,eS({},eD.resellerHostedEduLicense)):(0,N.jsx)(M.Z,eS({},eD.pendingEduLicense)):r?t.non_profit_org_discount_applied?(0,N.jsx)(M.Z,eS({},eD.activeTeamLicenseNonProfitOrg)):(0,N.jsx)(M.Z,eS({},eD.activeTeamLicense)):(0,N.jsx)(M.Z,eS({},eD.pendingTeamLicense))}),null!=t.active_until&&(0,N.jsx)(eM.Li,{className:"mt-1",children:null!=s&&s.isEnterprisey()?(0,N.jsx)(M.Z,eS(eS({},eD.licenseExpiry),{},{values:{expiryDate:new Date(t.active_until)}})):t.will_renew?(0,N.jsx)(M.Z,eS(eS({},eD.renewalDate),{},{values:{expiryDate:new Date(t.active_until)}})):(0,N.jsx)(M.Z,eS(eS({},eD.deactivateDate),{},{values:{expiryDate:new Date(t.active_until)}}))})]}),(0,N.jsx)(eE,{isOpen:i,onDropdownOpen:function(){l(!i)}})]}),(0,N.jsx)("hr",{}),r&&(0,N.jsxs)("div",{children:[(0,N.jsx)(eM.i$,{children:(0,N.jsx)(M.Z,eS({},eD.seatsTitle))}),(0,N.jsx)(eT,{isTeam:null!==(e=null==s?void 0:s.isTeam())&&void 0!==e&&e,accountId:s.id}),(null==s?void 0:s.isTeam())&&o&&(0,N.jsxs)("span",{className:"text-sm text-token-text-secondary",children:[(0,N.jsx)(M.Z,eS({},eD.teamsAutochargeMessage)),(0,N.jsx)(U.Z,{className:"pl-1",openNewTab:!0,href:"https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",children:(0,N.jsx)(M.Z,eS({},eD.billingLearnMore))})]})]}),(0,N.jsx)("hr",{})]})})}function eE(e){var t;let{isOpen:n,onDropdownOpen:a}=e,{0:s,1:i}=(0,v.useState)(!1),l=(0,A.useRouter)(),r=(0,y.Z)(),o=(0,C.t)(),{data:c}=(0,g.ZP)(),{0:d,1:u}=(0,v.useState)(!1),m=function(){u(!d)},{0:f,1:x}=(0,v.useState)(!1),p=function(){x(!f)},b=null===(t=(0,_.sB)("1318146997"))||void 0===t?void 0:t.value;if(!o||!o.isTeam()||!c)return;let h=async()=>{i(!0);try{let e=await T.Z.fetchCustomerPortalUrl(null==o?void 0:o.getWorkspaceId());l.push(e.url)}catch(e){j.m.warning(r.formatMessage(eD.stripeErrorWarning),{hasCloseButton:!0})}finally{i(!1)}},w=(null==c?void 0:c.billing_period)==="monthly"?O.FLEXIBLE:O.ANNUAL;return(0,N.jsxs)(F.d,{open:n,size:"default",triggerButton:(0,N.jsx)(z.z,{color:"secondary",onClick:a,icon:H.Tg4,children:(0,N.jsx)(M.Z,eS({},eD.manageLicenseBtn))}),children:[(0,N.jsx)(F.Z.Item,{icon:H.ciH,onClick:h,children:(0,N.jsx)(M.Z,eS({},eD.managePaymentMethod))}),c.will_renew&&b&&(0,N.jsx)(F.Z.Item,{icon:H.lDw,onClick:()=>{p()},children:(0,N.jsx)(M.Z,eS({},eD.manageBillingSchedule))}),null!=c.active_until&&(0,N.jsx)(B,{isOpen:f,onClose:p,initialTeamBillingType:w,renewalDate:new Date(c.active_until),accountId:o.id}),(null==c?void 0:c.will_renew)&&(0,N.jsx)(F.Z.Separator,{}),(null==c?void 0:c.will_renew)&&(0,N.jsx)(F.Z.Item,{icon:H.oOx,color:"danger",onClick:()=>{m()},children:(0,N.jsx)(M.Z,eS({},eD.cancelSubscriptionBtn))}),(0,N.jsx)(V,{isOpen:d,onClose:m})]})}function eI(e){let{invoice:t}=e,n=(null==t?void 0:t.status_transitions.paid_at)!=null&&new Date(1e3*t.status_transitions.paid_at),a=t&&new Date(1e3*t.due_date),s=t&&new Date(1e3*t.created);return(0,N.jsxs)(eM.vi,{className:"items-center",children:[(0,N.jsxs)("div",{className:"flex grow flex-col gap-1",children:[(0,N.jsx)("span",{children:s?(0,N.jsx)(M.Z,eS(eS({},eD.invoiceName),{},{values:{createdDate:s}})):(0,N.jsx)(M.Z,eS({},eD.defaultInvoiceName))}),null!=t&&t.paid&&null!=n?(0,N.jsx)("div",{className:"text-xs text-token-text-secondary",children:(0,N.jsx)(M.Z,eS(eS({},eD.paidInvoice),{},{values:{invoiceDate:n}}))}):t&&(0,N.jsx)("div",{className:"text-xs text-green-600",children:(0,N.jsx)(M.Z,eS(eS({},eD.upcomingInvoice),{},{values:{invoiceDate:a}}))})]}),(0,N.jsx)("a",{href:null==t?void 0:t.hosted_invoice_url,className:(0,k.default)("mx-auto",(null==t?void 0:t.hosted_invoice_url)==void 0&&"cursor-not-allowed opacity-20"),target:"_blank",rel:"noreferrer",children:(0,N.jsx)(H.Pfi,{className:"icon-sm text-green-600"})})]})}function eL(){let{0:e,1:t}=(0,v.useState)({limit:5}),{data:n,isError:a}=function(e){var t;let n=(0,C.t)(),a=null==n?void 0:n.id,s=null!==(t=null==n?void 0:n.data.organizationId)&&void 0!==t?t:void 0;return function(e,t){let n=(0,y.Z)();return(0,ew.a)({queryKey:["organization-invoices",eZ(eZ({},e),{},{options:t})],queryFn:async()=>await T.Z.getInvoices(e,t).catch(e=>{throw j.m.danger(n.formatMessage(eP.invoicesLoadError,{error:e.message})),e}),enabled:"account_id"in e||"organization_id"in e})}((null==n?void 0:n.isEnterprisey())?{organization_id:s}:{account_id:a},e)}(e),s=null!=e.startingAfter||null!=e.endingBefore&&(null==n?void 0:n.has_more),i=null!=e.endingBefore||(null==n?void 0:n.has_more)&&null==e.endingBefore;return a||null==n?(0,N.jsxs)(eM.i9,{children:[(0,N.jsx)(eM.A4,{children:(0,N.jsx)(M.Z,eS({},eD.invoicesTitle))}),(0,N.jsx)(X.Z,{children:(0,N.jsx)(M.Z,eS({},eD.noInvoices))})]}):(0,N.jsxs)(eM.i9,{children:[(0,N.jsx)(eM.A4,{children:(0,N.jsx)(M.Z,eS({},eD.invoicesTitle))}),(0,N.jsx)(eM.qQ,{children:n.data.map(e=>(0,N.jsx)(eI,{invoice:e},e.id))}),(0,N.jsxs)("div",{className:"flex",children:[s&&(0,N.jsx)("button",{onClick:()=>{n&&t(e=>eS(eS({},e),{},{endingBefore:n.data[0].id,startingAfter:void 0}))},children:(0,N.jsx)(H.DUf,{className:"icon-sm"})}),(0,N.jsx)("div",{className:"flex-grow"}),i&&(0,N.jsx)("button",{onClick:()=>{n&&t(e=>eS(eS({},e),{},{startingAfter:n.data[n.data.length-1].id,endingBefore:void 0}))},children:(0,N.jsx)(H.ob9,{className:"icon-sm"})})]})]})}function eT(e){let{isTeam:t,accountId:n}=e,{data:a,isLoading:s,isError:i}=(0,g.ZP)();return!i&&a&&!s&&a.billing_period&&a.active_until?(0,N.jsx)(em,{numInUse:a.seats_in_use,numAllocated:a.seats_entitled,isTeam:t,subscriptionWillRenew:a.will_renew,subscriptionBillingPeriod:a.billing_period,subscriptionRenewalDate:new Date(a.active_until),accountId:n}):null}function eC(){let e=(0,D.ec)(e=>e.currentWorkspace),t=null==e?void 0:e.organizationId,n=(0,y.Z)();return void 0===t?null:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.yG,{title:n.formatMessage(eD.title),subtitle:n.formatMessage(eD.subtitle)}),(0,N.jsx)(u.hb,{children:(0,N.jsxs)(eM.$V,{children:[(0,N.jsx)(eB,{}),(0,N.jsx)(eL,{})]})})]})}let eD=(0,w.vU)({title:{id:"organizationBillingInfo.title.1",defaultMessage:"Billing"},subtitle:{id:"organizationBillingInfo.subtitle",defaultMessage:"Only workspace owners can view and change these settings"},planTitle:{id:"organizationBillingInfo.planTitle",defaultMessage:"Plan"},activeEnterpriseLicense:{id:"organizationBillingInfo.activeEnterpriseLicense",defaultMessage:"Enterprise License"},pendingEnterpriseLicense:{id:"organizationBillingInfo.pendingEnterpriseLicense",defaultMessage:"Enterprise License (pending activation)"},resellerHostedEnterpriseLicense:{id:"organizationBillingInfo.resellerHostedEnterpriseLicense",defaultMessage:"Enterprise License"},activeEduLicense:{id:"organizationBillingInfo.activeEduLicense",defaultMessage:"Edu License"},pendingEduLicense:{id:"organizationBillingInfo.pendingEduLicense",defaultMessage:"Edu License (pending activation)"},resellerHostedEduLicense:{id:"organizationBillingInfo.resellerHostedEduLicense",defaultMessage:"Edu License"},activeTeamLicense:{id:"organizationBillingInfo.activeTeamLicense",defaultMessage:"Team License"},activeTeamLicenseNonProfitOrg:{id:"organizationBillingInfo.activeTeamLicenseNonProfitOrg",defaultMessage:"Team License (Non Profit Discount)"},pendingTeamLicense:{id:"organizationBillingInfo.pendingTeamLicense",defaultMessage:"Team License (pending activation)"},licenseExpiry:{id:"organizationBillingInfo.licenseExpiry",defaultMessage:"Active until {expiryDate, date, long}"},renewalDate:{id:"organizationBillingInfo.renewalDate",defaultMessage:"Renews on {expiryDate, date, long}"},deactivateDate:{id:"organizationBillingInfo.deactivateDate",defaultMessage:"Deactivates on {expiryDate, date, long}"},seatsTitle:{id:"organizationBillingInfo.seatsTitle",defaultMessage:"Seats"},seatsInUse:{id:"organizationBillingInfo.seatsInUse",defaultMessage:"{numSeats} in use ({numSeatsPct})"},invoicesTitle:{id:"organizationBillingInfo.invoicesTitle",defaultMessage:"Invoices"},invoiceName:{id:"organizationBillingInfo.invoiceName",defaultMessage:"Invoice: {createdDate, date, long}"},defaultInvoiceName:{id:"organizationBillingInfo.defaultInvoiceName",defaultMessage:"Invoice"},paidInvoice:{id:"organizationBillingInfo.paidInvoice",defaultMessage:"Paid: {invoiceDate, date, long}"},upcomingInvoice:{id:"organizationBillingInfo.upcomingInvoice",defaultMessage:"Due: {invoiceDate, date, long}"},noInvoices:{id:"organizationBillingInfo.noInvoices",defaultMessage:"No invoices found"},manageSubscription:{id:"organizationBillingInfo.manageSubscription",defaultMessage:"Manage subscription"},cancelSubscriptionBtn:{id:"organizationBillingInfo.cancelSubscriptionBtn",defaultMessage:"Cancel subscription"},manageLicenseBtn:{id:"organizationBillingInfo.manageLicenseBtn",defaultMessage:"Manage license"},managePaymentMethod:{id:"organizationBillingInfo.managePaymentMethod",defaultMessage:"Payment method"},manageBillingSchedule:{id:"organizationBillingInfo.manageSchedule",defaultMessage:"Billing schedule"},stripeErrorWarning:{id:"organizationBillingInfo.stripeErrorWarning",defaultMessage:"Error loading account information"},teamsAutochargeMessage:{id:"organizationBillingInfo.teamsAutochargeMessage",defaultMessage:"Your additional seats will be included on your next invoice."},billingLearnMore:{id:"organizationBillingInfo.billingLearnMore",defaultMessage:"Learn more"}});var e_=!0;function ek(){return(0,N.jsx)(eC,{})}ek.getLayout=function(e){return(0,N.jsx)(u.ZP,{mobilePageTitle:"Billing",requireOwnerPrivileges:!0,children:e})}},32378:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var a=n(651);function s(){return(0,a.jsx)("hr",{className:"w-full border-token-border-xheavy"})}},8040:function(e,t,n){"use strict";n.d(t,{$V:function(){return g},A4:function(){return f},Li:function(){return b},W8:function(){return v},i$:function(){return x},i9:function(){return j},qQ:function(){return p},vi:function(){return h}});var a,s,i,l,r,o,c,d,u=n(2346),m=n(15478);let g=m.Z.div(a||(a=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),f=m.Z.div(s||(s=(0,u.Z)(["text-xl font-semibold"]))),x=m.Z.div(i||(i=(0,u.Z)(["text-base font-semibold"]))),p=m.Z.div(l||(l=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),j=m.Z.div(r||(r=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),b=m.Z.div(o||(o=(0,u.Z)(["text-sm"]))),h=m.Z.div(c||(c=(0,u.Z)(["flex justify-between py-4 gap-4"]))),v=m.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},60806:function(e,t,n){"use strict";function a(e){let t=Object.values(e);return e=>t.includes(e)}n.d(t,{b:function(){return a}})},51270:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/billing",function(){return n(29237)}])}},function(e){e.O(0,[2205,4198,5158,4089,1133,3718,6481,3088,1318,1612,2349,5162,6013,9830,9725,8442,3752,8110,2879,3662,2888,9774,179],function(){return e(e.s=51270)}),_N_E=e.O()}]);
//# sourceMappingURL=billing-d7d89ed25a2655a3.js.map