(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{51516:function(e,s,t){"use strict";function r(e,s){if(s.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+s.length+" present")}t.d(s,{Z:function(){return r}})},60556:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return W},default:function(){return E}});var r,a,n,l,i=t(94521),o=t(70657),c=t(41141),d=t(93223),u=t(14816),g=t(65998),y=t(64331),p=t(71126),f=t.n(p),b=t(92379),m=t(55969),x=t(26123),h=t(72256),j=t(25940),k=t(74091),v=t(651);function w(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function O(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?w(Object(t),!0).forEach(function(s){(0,i.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}async function P(e){let{queryKey:[s,{workspaceId:t}]}=e;return d.Z.getWorkspaceAnalytics(t)}function L(e){let{data:s,label:t,getWeekValue:r}=e,a=(0,x.Z)(),n=(0,y.F)().theme,l=(0,b.useMemo)(()=>(function(e){let s=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:s.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:s.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:s.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:s.getPropertyValue("--surface-primary"),titleColor:s.getPropertyValue("--text-primary"),bodyColor:s.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}})(0),[n]),i=(0,b.useMemo)(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[n]),o={labels:s.weekly_data.map(e=>a.formatDate(e.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(r),borderWidth:0,backgroundColor:i,barThickness:20}]};return(0,v.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:(0,v.jsx)(m.$Q,{options:l,data:o,height:192})})}function _(e){let{label:s,value:t}=e;return(0,v.jsxs)("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[(0,v.jsx)("label",{className:"text-sm text-token-text-secondary",children:s}),(0,v.jsx)("div",{className:"text-xl font-semibold text-token-text-primary",children:t})]})}function M(e){let{data:s}=e,t=(0,x.Z)(),r=s.weekly_data[s.weekly_data.length-2];return(0,v.jsxs)("div",{className:"mt-10",children:[(0,v.jsx)("div",{className:"mb-2 font-semibold text-token-text-primary",children:(0,v.jsx)(h.Z,O({},T.totals))}),(0,v.jsxs)("div",{className:"mb-16 flex gap-4",children:[(0,v.jsx)(_,{label:t.formatMessage(T.usersLabel),value:s.total_users}),(0,v.jsx)(_,{label:t.formatMessage(T.conversationsLabel),value:s.total_conversations}),(0,v.jsx)(_,{label:t.formatMessage(T.messagesLabel),value:s.total_messages})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)("div",{className:"flex flex-col justify-between p-4",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(A,{children:(0,v.jsx)(h.Z,O({},T.usageTitle))}),null!=r&&(0,v.jsxs)("div",{children:[(0,v.jsx)(C,{children:r.message_count}),(0,v.jsx)(D,{children:(0,v.jsx)(h.Z,O({},T.messagesLastWeek))})]})]})}),(0,v.jsx)("div",{children:(0,v.jsx)(L,{data:s,label:t.formatMessage(T.messagesChartLabel),getWeekValue:e=>e.message_count})})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(L,{data:s,label:t.formatMessage(T.activeUsersChartLabel),getWeekValue:e=>e.active_users_count})}),(0,v.jsx)("div",{className:"flex grow flex-col justify-between p-4",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(A,{children:(0,v.jsx)(h.Z,O({},T.weeklyUsersTitle))}),null!=r&&(0,v.jsxs)("div",{children:[(0,v.jsx)(C,{children:r.active_users_count}),(0,v.jsx)(D,{children:(0,v.jsx)(h.Z,O({},T.activeUsersLastWeek))})]})]})})]})]})}g.kL.register(g.uw,g.f$,g.od,g.ZL,g.Dx,g.u,g.De);let Z=k.Z.div(r||(r=(0,c.Z)(["mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2"]))),A=k.Z.div(a||(a=(0,c.Z)(["font-semibold"]))),C=k.Z.div(n||(n=(0,c.Z)(["font-semibold text-3xl"]))),D=k.Z.div(l||(l=(0,c.Z)(["text-sm text-token-text-tertiary"])));function N(e){let{currentWorkspaceId:s}=e,t=(0,x.Z)(),{data:r,isLoading:a}=(0,u.a)({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:P});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f(),{children:(0,v.jsx)("title",{children:t.formatMessage(T.title)})}),(0,v.jsx)(o.yG,{title:t.formatMessage(T.title),subtitle:t.formatMessage(T.pageDescription)}),(0,v.jsx)(o.hb,{showSpinner:a,children:void 0!==r?(0,v.jsx)(M,{data:r}):null})]})}let T=(0,j.vU)({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function U(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}var W=!0;function E(e){return(0,v.jsx)(N,function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?U(Object(t),!0).forEach(function(s){(0,i.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}({},e))}E.getLayout=function(e){return(0,v.jsx)(o.ZP,{mobilePageTitle:"Analytics",requireAdminPrivileges:!0,children:e})}},80773:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/analytics",function(){return t(60556)}])}},function(e){e.O(0,[6835,7349,6271,3718,4368,5365,2349,893,1783,4834,7126,8890,1220,4963,5165,657,2888,9774,179],function(){return e(e.s=80773)}),_N_E=e.O()}]);
//# sourceMappingURL=analytics-b01a3ce4831fc17e.js.map