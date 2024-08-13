"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{80643:function(e,t,a){a.r(t),a.d(t,{default:function(){return eu}});var r,l=a(81669),n=a(24312),s=a(48907),i=a(37782),o=a(13400),c=a(91092),d=a(54945),u=a(33168),m=a(92379),p=a(16602),f=a(8025),x=a(34470),y=a(19841),g=a(7290),b=a(58164),h=a(72256),j=a(74091),v=a(66187),w=a(26123),N=a(67809),k=a(651);function C(e){let{colorList:t,label:a,color:r,onColorUpdate:l}=e;return(0,k.jsxs)(N.Z.Root,{children:[(0,k.jsx)(N.Z.Trigger,{asChild:!0,children:(0,k.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,k.jsx)("span",{className:"max-w-28 truncate text-sm",children:a||(0,k.jsx)(h.Z,{id:"UnyV2o",defaultMessage:"Dataset"})}),(0,k.jsxs)("div",{className:"flex gap-1",children:[(0,k.jsx)("div",{className:"h-4 w-4 rounded-sm",style:{backgroundColor:r}}),(0,k.jsx)(i.ob9,{className:"icon-sm"})]})]})}),(0,k.jsx)(N.Z.Portal,{children:(0,k.jsx)(N.Z.Content,{className:"flex min-w-36 flex-col gap-4 p-4 align-middle juice:p-4",sideOffset:5,side:"right",children:(0,k.jsx)(O,{currentColor:r,colorList:t,onUpdate:l})})})]})}function O(e){let{colorList:t,currentColor:a,onUpdate:r}=e,{0:l,1:n}=(0,m.useState)(null!=a?a:""),s=(0,w.Z)(),o=e=>/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"grid grid-cols-4 flex-wrap gap-2",children:t.map((e,t)=>(0,k.jsx)("button",{onClick:()=>{n(e),r(e)},className:(0,y.default)("flex h-6 w-6 items-center justify-center rounded-md"),style:{backgroundColor:e},children:a===e&&(0,k.jsx)(i.$As,{className:"text-white"})},t))}),(0,k.jsxs)("div",{className:"flex h-6 rounded-md border border-token-border-light",children:[(0,k.jsx)("div",{className:"flex w-6 items-center justify-center bg-gray-200 px-2 py-1 text-sm text-gray-500",children:"#"}),(0,k.jsx)("input",{className:(0,y.default)("w-16 flex-1 rounded-r-md  border-0 p-2 text-xs uppercase leading-6 outline-none"),placeholder:s.formatMessage({id:"3xKVHs",defaultMessage:"F1B023"}),value:l.slice(1),onChange:e=>{let t="#".concat(e.target.value);n(t),o(t)&&r(t)}})]})]})}var M=a(27617),P=a(21292),E=a(15171),F=a(70306),z=a(2590),S=a(65998);a(27668);var D=a(55969);let Z=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,A=e=>0!==e.length&&e.reduce((e,t)=>e&&Z.test(t),!0);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}let R=(0,m.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:r}=a,l=(0,m.useMemo)(()=>r.map(e=>{let{data:t,label:a,colors:r}=e;return{label:a,data:t,backgroundColor:r,borderColor:r,borderRadius:4}}),[r]);return(0,k.jsx)(D.$Q,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,animation:{duration:0},mode:"point",position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:6,left:16,right:16},yAlign:"bottom",callbacks:{title:function(e){return e[0].formattedValue},label:()=>""}}},scales:{x:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({title:{display:!1},grid:{display:!1},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},ticks:{display:!0,autoSkip:!1}},A(a.labels)?{type:"time"}:{}),y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}}},data:{labels:a.labels,datasets:l}})});function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}R.displayName="BarChart";let I=(0,m.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:r}=a,l=(0,m.useMemo)(()=>{let e=r.length;return r.map(t=>{let{data:a,label:r,colors:l}=t,n=a.length;return{label:r,data:a,backgroundColor:l,borderColor:l,pointRadius:0,pointHoverRadius:5,pointHitRadius:10,tension:.2,borderWidth:L(e,n),pointBackgroundColor:["rgba(255, 255, 255, 1)"],pointBorderWidth:3,pointHoverBorderWidth:3}})},[r]);return(0,k.jsx)(D.x1,{ref:t,options:{maintainAspectRatio:!1,scales:{x:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({title:{display:!1,text:a.x_label},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},grid:{display:!1},ticks:{display:!0}},A(a.labels)?{type:"time"}:{}),y:{title:{display:!1,text:a.y_label},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",animation:{duration:0},position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(e){return e[0].label},label:function(e){let{dataset:{label:t},parsed:{y:a}}=e;return"".concat(t?"".concat(t,": "):"").concat(a.toFixed(2))}}}}},data:{labels:a.labels,datasets:l}})}),L=(e,t)=>t>15?1:e>10?e>50?.5:1:3;I.displayName="LineChart";var T=a(36241);let B=(0,m.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:r}=a,l=(0,m.useMemo)(()=>{let e=getComputedStyle(document.documentElement);return r.map(t=>{let{data:a,colors:r,label:l}=t;return{label:l,data:a,backgroundColor:r,borderWidth:2,borderColor:[e.getPropertyValue("--main-surface-primary").trim()]}})},[r]);return(0,k.jsx)("div",{className:"h-full w-full py-2",children:(0,k.jsx)(D.by,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!0,animation:{duration:0},mode:"index",position:"average",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:e=>e[0].formattedValue,label:function(e){let t=a.labels[e.dataIndex],l=r[0],n=parseFloat((l.data[e.dataIndex]/Number(l.data.reduce((e,t)=>Number(e)+Number(t),0))*100).toFixed(2));return"".concat(t," \xb7 ").concat(n,"%")}}},datalabels:{color:"white",textAlign:"center",font:{weight:"bold",size:16},backgroundColor:function(e){return e.dataset.data[e.dataIndex]/Number(e.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?"rgba(0, 0, 0, 0.1)":"transparent"},borderRadius:15,padding:{top:6,bottom:6,left:8,right:8},formatter:(e,t)=>e/Number(t.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?e.toFixed(2):""}}},plugins:[T.Z],data:{labels:a.labels,datasets:l}})})});function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}B.displayName="PieChart";let H=(0,m.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:r}=a,l=(0,m.useMemo)(()=>{let e=r.reduce((e,t)=>e+t.data.length,0);return r.map(t=>{let{data:a,label:r,colors:l}=t;return{label:r,data:a,backgroundColor:l,borderColor:l,pointRadius:e>50?e>200?2:4:8,pointHoverRadius:e>50?4:8}})},[r]);return(0,k.jsx)(D.bp,{ref:t,options:{maintainAspectRatio:!1,scales:{x:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({title:{display:!1},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},grid:{display:!1},ticks:{display:!0}},A(a.labels)?{type:"time"}:{}),y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},elements:{point:{radius:0}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",position:"nearest",animation:{duration:0},backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(){return""},label:function(e){let t=e.dataset.label?"".concat(e.dataset.label,": "):"";return"".concat(t," X=").concat(e.parsed.x.toFixed(2),", Y=").concat(e.parsed.y.toFixed(2)," \n")}}}}},data:{labels:a.labels,datasets:l}})});H.displayName="ScatterChart",S.kL.register(S.qi,S.uw,S.f$,S.ZL,S.Dx,S.u,S.De,S.ST,S.od,S.jn,S.FB);let U={bar:R,pie:B,line:I,scatter:H};function G(e){let{item:t,formattedName:a}=e;return(0,k.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,k.jsx)("div",{className:"h-3 w-3 rounded-sm",style:{backgroundColor:t.color}}),a]})}function K(e){let{items:t,hideAxisLabels:a=!1,xLabel:r="",yLabel:l=""}=e,n=(0,w.Z)();function s(e,t){let a=t.indexOf(e);return a<t.length-2?"".concat(e.name,", "):a===t.length-2?"".concat(e.name).concat(t.length>2?", ":" "," ").concat(n.formatMessage({id:"Gt7UQw",defaultMessage:"and"})):e.name}return(0,k.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-1 px-4 text-xs text-token-text-primary",children:[!a&&(0,k.jsx)(h.Z,{id:"Wn04Wd",defaultMessage:"{yLabel} by {xLabel}",values:{xLabel:(0,k.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,k.jsx)(i.tZW,{className:"icon-sm text-token-text-secondary"}),r]}),yLabel:(0,k.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,k.jsx)(i.ucG,{className:"icon-sm text-token-text-secondary"}),l]})}}),t.length>1&&t.length<16&&(a?(0,k.jsx)(h.Z,{id:"WKJKdH",defaultMessage:"For {legendItems}",values:{legendItems:t.map((e,a)=>(0,k.jsx)(G,{item:e,formattedName:s(e,t)},a))}}):(0,k.jsx)(h.Z,{id:"Isulib",defaultMessage:"for {legendItems}",values:{legendItems:t.map((e,a)=>(0,k.jsx)(G,{item:e,formattedName:s(e,t)},a))}}))]})}let X=(0,m.forwardRef)((e,t)=>{let{chart:a}=e,r=(0,m.useRef)(null);(0,m.useImperativeHandle)(t,()=>({getBase64Image:()=>{if(!r.current){x.U.addError("Chart instance is not yet available.");return}return r.current.toBase64Image()}}));let l=(0,m.useCallback)(()=>{if("pie"!==a.chart_type)return a.datasets.map(e=>({name:e.label,color:Array.isArray(e.colors)?e.colors[0]:e.colors}));{let e=a.datasets[0].colors;if(e&&Array.isArray(e))return a.labels.map((t,a)=>{var r;return{name:t,color:null!==(r=e[a])&&void 0!==r?r:""}})}return[]},[a]);if(a.chart_type in U==!1)return(0,k.jsx)(h.Z,{id:"Chart.invalidChartType",defaultMessage:"Invalid chart type"});let n=U[a.chart_type];return(0,k.jsxs)("div",{className:"flex h-full w-full flex-col items-center",children:[(0,k.jsx)("div",{className:"w-full flex-initial",style:{flexBasis:"28px"},children:(0,k.jsx)(K,{xLabel:a.x_label,yLabel:a.y_label,items:l(),hideAxisLabels:"pie"===a.chart_type})}),(0,k.jsx)("div",{className:(0,y.default)("flex w-full flex-grow items-center justify-center px-4 pb-3"),style:{minHeight:"0"},children:(0,k.jsx)(n,{chart:a,ref:r})})]})});X.displayName="Chart";var Q=a(94448),q=a(34462),$=a(66762);a(23723);var J=a(88521);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function et(e){let{table:t,height:a,width:r,isInFocusedView:l=!1,className:n=""}=e,{targetedContent:s,setTargetedContent:i}=(0,J.Q)(),{0:o,1:c}=(0,m.useState)([]),d=getComputedStyle(document.documentElement),u=(0,w.Z)();(0,m.useEffect)(()=>{t.columnNames.length>0&&c(t.columnNames.map((e,t)=>({id:"id:".concat(t),title:e,maxWidth:500})))},[t.columnNames]);let{0:x,1:y}=(0,m.useState)({columns:q.EV.empty(),rows:q.EV.empty()}),g=(0,m.useCallback)(function(e){let[a,r]=e,l=t.rows[r];return{kind:function(e){switch(e){case"number":return q.p6.Number;case"imageUrl":return q.p6.Image;default:return q.p6.Text}}(t.columnTypes[a]),data:l[a],allowOverlay:!0,readonly:!0,displayData:String(l[a]),allowWrapping:!0,contentAlignment:"left"}},[t.columnTypes,t.rows]),b=(0,m.useCallback)(e=>{if(e.columns.length>0){let a=e.columns.items.flatMap(e=>t.columnNames.slice(e[0],e[1]));p.A.logEvent(f.M.adaColumnTargeted);let r=a.length>1?u.formatMessage({id:"B+HlXu",defaultMessage:"{totalColumns} columns"},{totalColumns:a.length}):u.formatMessage({id:"KnFSJb",defaultMessage:'"{columnName}" column'},{columnName:a[0]});i({type:"object",label:r,isFocusedViewContent:l,createNewCompletionParams:e=>ea(e,"The user has selected the columns:  ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),r)})}else if(e.rows.length>0){let a=e.rows.items.flatMap(e=>{let[t,a]=e,r=[];for(let e=t;e<a;e++)r.push(e);return r}),r=a.length>1?u.formatMessage({id:"vFstNk",defaultMessage:"{totalRows} rows"},{totalRows:a.length}):u.formatMessage({id:"43/z2q",defaultMessage:"#{rowIndex} row"},{rowIndex:a[0]+1});p.A.logEvent(f.M.adaRowTargeted),i({type:"object",label:r,isFocusedViewContent:l,createNewCompletionParams:e=>ea(e,"The user has selected rows at the following indices: ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),r)})}else if(e.current){let a=e.current.range.x,r=e.current.range.y,n=e.current.range.x+e.current.range.width,s=e.current.range.y+e.current.range.height,o=(n-a)*(s-r),c="";1===o&&(c=t.rows[e.current.cell[1]][e.current.cell[0]]),p.A.logEvent(f.M.adaRangeTargeted);let d=o>1?u.formatMessage({id:"Ia9GsC",defaultMessage:"{totalCells} cells"},{totalCells:o}):u.formatMessage({id:"MEl4hN",defaultMessage:'"{cellContent}" cell'},{cellContent:c});i({type:"object",isFocusedViewContent:l,label:d,createNewCompletionParams:e=>ea(e,"The user has selected a range at the iloc: ".concat(r,":").concat(s,", ").concat(a,":").concat(n," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),d)})}0===e.columns.length&&0===e.rows.length&&void 0===e.current&&i(void 0),y(e)},[t.columnNames,i,l,t.rows,u,t.name,t.sheetName]);(0,m.useEffect)(()=>{void 0===s&&y({columns:q.EV.empty(),rows:q.EV.empty()})},[s]);let h=(0,m.useCallback)(e=>{var a;let r=t.rows[e];if(!r)return 44;let l=null!==(a=r.reduce((e,t)=>((null==e?void 0:e.length)||0)>((null==t?void 0:t.length)||0)?e:t))&&void 0!==a?a:"",n=o[r.indexOf(l)],s=(null==n?void 0:n.width)||150,i=Math.ceil(l.length/(s/8));return 24+(i<4?i:4)*20},[t.rows,o]);(0,m.useEffect)(()=>{if(!document.getElementById("portal")){let e=document.createElement("div");e.id="portal",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.zIndex="9999",document.body.appendChild(e)}return()=>{let e=document.getElementById("portal");e&&document.body.removeChild(e)}},[]);let j=(0,m.useCallback)(()=>t.rows&&t.rows.length>999?10+10*String(t.rows.length).length:30,[t.rows]);return(0,k.jsx)($.F,{getCellContent:g,columns:o,rows:t.rows.length,gridSelection:x,onGridSelectionChange:b,smoothScrollX:!0,smoothScrollY:!0,overscrollX:50,className:n,rowMarkers:"clickable-number",height:a,width:r,rowMarkerTheme:{bgCell:d.getPropertyValue("--main-surface-secondary").trim(),textLight:d.getPropertyValue("--text-primary").trim()},theme:{textDark:d.getPropertyValue("--text-primary").trim(),textMedium:d.getPropertyValue("--text-primary").trim(),textLight:d.getPropertyValue("--text-primary").trim(),textHeader:d.getPropertyValue("--text-primary").trim(),bgHeader:d.getPropertyValue("--main-surface-secondary").trim(),bgCell:d.getPropertyValue("--main-surface-primary").trim(),bgBubbleSelected:d.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHovered:d.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHasFocus:d.getPropertyValue("--main-surface-tertiary").trim(),accentColor:d.getPropertyValue("--selection").trim(),drilldownBorder:d.getPropertyValue("--selection").trim(),editorFontSize:"400 14px",baseFontStyle:"400 14px",markerFontStyle:"400 14px",headerFontStyle:"500 14px",cellHorizontalPadding:12,cellVerticalPadding:10},rowMarkerWidth:j(),rowHeight:h,verticalBorder:!0,minColumnWidth:40,maxColumnWidth:500,onColumnResize:(e,t,a)=>{t>=40&&t<=500&&c(r=>{let l=[...r];return l[a]=ee(ee({},e),{},{width:t}),l})}})}function ea(e,t,a){let r=(0,Q.bm)(t);return ee(ee({},e),{},{messageMetadata:ee(ee({},e.messageMetadata),{},{targeted_reply:t,targeted_reply_label:a}),appendMessages:null==e.appendMessages?[r]:[...e.appendMessages,r]})}let er=["#FFAF00","#F46920","#F53255","#F857C1","#29BDFD","#00CBBF","#01C159","#9DCA1C"];var el=a(68333),en=a(95312),es=a(97021);let ei=async e=>{if(null==e.image_url){x.U.addError("No image url provided for download");return}let t=(0,o.Iy)(e.image_url),a=await es.Z.getFileDownloadLink(t);if(a.status===en.KF.Success){let e=await fetch(a.download_url),t=await e.blob();eo(URL.createObjectURL(t),"output.png")}},eo=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=document.createElement("a");a.href=e,t&&(a.download=t),a.click()};function ec(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function ed(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ec(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ec(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function eu(e){let{visualization:t,clientThreadId:a,expanded:r=!1}=e;return"chart"===t.type?null==t.fallback_image?(x.U.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?null==t.fallback_image?(x.U.addError("No fallback image message provided for fallback chart"),null):(0,k.jsx)(eb,{visualization:t,expanded:r}):(0,k.jsx)(eg,{visualization:t,clientThreadId:a,expanded:r}):"table"===t.type?(0,k.jsx)(em,{visualization:t,expanded:r}):(x.U.addError("Unsupported visualization type",t.type),null)}function em(e){let t,{visualization:a,expanded:r}=e,l=(0,E.Ex)(),n=l&&!r,{isLoading:s,data:i,isError:o}=(0,el.CJ)(a),{0:c,1:d}=(0,m.useState)(),u=(0,m.useCallback)(()=>{i&&eo(i.download_url)},[i]),{0:p,1:f}=(0,m.useState)(0),{0:x,1:y}=(0,m.useState)(0),g=(0,m.useRef)(null);if(i){if(Array.isArray(i.content)){var b;t=null!==(b=i.content.find(e=>e.name===c))&&void 0!==b?b:i.content[0]}else t=i.content}let h=()=>{g.current&&y(g.current.offsetWidth)};return((0,m.useEffect)(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[]),(0,m.useEffect)(()=>{let e=()=>{f(window.innerHeight-48)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o)?(0,k.jsx)(ev,{fileName:a.title}):(0,k.jsx)(eh,{ref:g,focusObject:{type:F.zG.ADAVisualization,visualization:a},title:(0,k.jsxs)(k.Fragment,{children:[a.title,!n&&Array.isArray(null==i?void 0:i.content)&&(0,k.jsxs)(M.Z.Root,{defaultValue:c,onValueChange:e=>{d(e)},children:[(0,k.jsxs)(M.Z.Trigger,{className:"m-0 h-4 bg-transparent p-1 text-xs font-semibold",children:[null!=c?c:i.content[0].name,(0,k.jsx)(M.Z.Icon,{})]}),(0,k.jsx)(M.Z.Portal,{children:(0,k.jsx)(M.Z.Content,{children:i.content.map(e=>{var t;return(0,k.jsx)(M.Z.Item,{className:"text-xs font-semibold",value:null!==(t=e.name)&&void 0!==t?t:"",children:e.name},e.name)})})})]})]}),onDownload:u,expanded:r,children:s||null==t?(0,k.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,k.jsx)(v.Z,{})}):(0,k.jsx)("div",{className:"border-t border-token-border-light",children:(0,k.jsx)(et,{table:ed(ed({},t),{},{name:a.title,sheetName:c}),height:r?p:300,width:x,isInFocusedView:l})})})}function ep(e){let{chartData:t,setChartData:a}=e;return(0,k.jsxs)(N.Z.Root,{children:[(0,k.jsx)(N.Z.Trigger,{className:"h-5 px-0 hover:bg-transparent",asChild:!0,children:(0,k.jsx)("button",{children:(0,k.jsx)(i.KAl,{className:(0,y.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,k.jsx)(N.Z.Portal,{children:(0,k.jsx)(N.Z.Content,{className:"flex min-w-48 max-w-xs flex-col px-0 py-1",sideOffset:7,children:t&&t.datasets.length<16&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-semibold text-token-text-quaternary",children:(0,k.jsx)(h.Z,{id:"yYiKvS",defaultMessage:"Colors"})}),(0,k.jsx)("div",{className:"flex max-h-36 flex-col overflow-auto",children:"pie"===t.chart_type?(0,k.jsx)(ew,{chartData:t,setChartData:a}):(0,k.jsx)(eN,{chartData:t,setChartData:a})})]})})})]})}function ef(e){let{showStatic:t,setShowStatic:a}=e;return(0,k.jsx)(P.u,{side:"top",sideOffset:4,label:t?(0,k.jsx)(h.Z,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):(0,k.jsx)(h.Z,{id:"cigiQO",defaultMessage:"Switch to static chart"}),children:(0,k.jsx)("button",{className:"flex",onClick:()=>{a(!t)},children:t?(0,k.jsx)(i.aoh,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):(0,k.jsx)(i.D2w,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function ex(e){let{type:t}=e;return(0,k.jsx)(ey,{children:"chart"===t?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.Z,{id:"XBhWwK",defaultMessage:"Now interactive! (Beta)"})," ",(0,k.jsx)(i.D2w,{className:"icon-md"})]}):(0,k.jsx)(h.Z,{id:"N0TMRs",defaultMessage:"Now interactive!"})})}let ey=j.Z.div(r||(r=(0,l.Z)(["flex flex-shrink-0 cursor-pointer flex-nowrap items-center gap-1 rounded-lg bg-blue-selection/[0.1] py-1 pl-2 pr-1.5 text-xs font-semibold text-blue-selection"])));function eg(e){let{visualization:t,clientThreadId:a,expanded:r}=e,{isLoading:l,data:n,isError:s}=(0,el.VX)(t),i=(0,m.useRef)(null),{0:o,1:c}=(0,m.useState)(!1),u=(0,m.useCallback)(async()=>{if(o&&t.fallback_image)p.A.logEvent(f.M.adaDownloadedStaticChart),await ei(t.fallback_image);else if(i.current){let e=i.current.getBase64Image();e&&(p.A.logEvent(f.M.adaDownloadedInteractiveChart),eo(e,"".concat(t.title,".png")))}},[t.fallback_image,o,i,t.title]),{0:x,1:y}=(0,m.useState)(void 0),g=(0,d.XK)(a),b=function(e){let t=(0,m.useRef)(!1);return()=>{t.current||(e(),t.current=!0)}}(()=>{p.A.logEvent(f.M.adaToggledInteractiveChart,{conversationId:g})});return((0,m.useEffect)(()=>{p.A.logEvent(f.M.adaInteractiveChartShown)},[]),(0,m.useEffect)(()=>{if(n&&n.content!==x){let{chart_type:e,datasets:t}=n.content,a=n.content;a.datasets=t.map((t,a)=>{let r=eC(e,t,a);return ed(ed({},t),{},{colors:r})}),y(a)}},[x,n]),s)?(0,k.jsx)(ev,{fileName:t.title}):(0,k.jsx)(eh,{focusObject:{type:F.zG.ADAVisualization,visualization:t},title:t.title,onDownload:u,additionalActions:[(0,k.jsx)(ef,{showStatic:o,setShowStatic:e=>{b(),c(e)}},0),(0,k.jsx)(ep,{chartData:x,setChartData:y},1)],expanded:r,children:l||null==x?(0,k.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,k.jsx)(v.Z,{})}):o&&t.fallback_image?(0,k.jsx)(z.Z,{jupyterMessage:t.fallback_image}):(0,k.jsx)(X,{ref:i,chart:x})})}function eb(e){let{visualization:t,expanded:a}=e,{0:r,1:l}=(0,m.useState)(!1),n=(0,el.BR)(),s=(0,m.useCallback)(async()=>{t.fallback_image&&await ei(t.fallback_image)},[t.fallback_image]);return null==t.fallback_image?null:(0,k.jsx)(eh,{focusObject:{type:F.zG.ADAVisualization,visualization:t},title:t.title,onDownload:s,expanded:a,children:(0,k.jsx)("div",{className:(0,y.default)("h-full w-full",a&&"cursor-pointer items-center justify-center"),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:(0,k.jsxs)("div",{className:(0,y.default)("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[(0,k.jsx)(z.Z,{jupyterMessage:t.fallback_image}),(0,k.jsx)(g.M,{children:n&&r&&(0,k.jsxs)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute bottom-2 right-2 flex items-center justify-center rounded-md border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-xs text-token-text-secondary",children:[(0,k.jsx)(i.D2w,{className:"icon-md mr-2"}),(0,k.jsx)(h.Z,{id:"ILz2tL",defaultMessage:"Interactive charts of this type not yet supported"})]})})]})})})}let eh=m.forwardRef((e,t)=>{var a,r,l,n;let{focusObject:d,title:m="",onDownload:p=()=>{},additionalActions:f=[],expanded:x=!1,children:j}=e,v=(0,E.Ex)(),w=(0,F.rE)(),N=w&&w.type===F.zG.ADAVisualization&&w.type===d.type&&w.visualization.file_id===d.visualization.file_id&&d.visualization.title===w.visualization.title,C=(0,c.t)(),O=d.visualization.type,[M,z]=(0,el.qc)(O,null!==(a=null==C?void 0:C.id)&&void 0!==a?a:""),S=(0,u.BL)(),D=d.visualization.type,Z=null,A=null;if(d.visualization.context_connector_info){let e=d.visualization.context_connector_info;Z=e.source_url;let t=null!==(r=d.visualization.file_name)&&void 0!==r?r:"",a=null!==(l=null!==(n=null==e?void 0:e.synthetic_extension)&&void 0!==n?n:(0,o.$p)(t))&&void 0!==l?l:null;A=(0,s.$)(e.context_connector,a)}if(v&&!x||S)return(0,k.jsx)(ej,{focusObject:d,title:m,type:D,isFocused:null!=N&&N,disabled:S});let _=(0,k.jsxs)(k.Fragment,{children:[f.map((e,t)=>(0,k.jsx)("div",{className:"flex p-0",children:e},t)),Z&&A&&(0,k.jsx)(P.u,{side:"top",sideOffset:4,label:(0,k.jsx)(h.Z,{id:"KG958Q",defaultMessage:"Open in {contextConnectorName}",values:{contextConnectorName:A}}),children:(0,k.jsx)("a",{className:"flex items-center text-xs",href:Z,target:"_blank",children:(0,k.jsx)(i.Pfi,{className:(0,y.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),p&&(0,k.jsx)(P.u,{side:"top",sideOffset:4,label:(0,k.jsx)(h.Z,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:D}}),children:(0,k.jsx)("button",{onClick:p,className:"flex items-center text-xs",children:(0,k.jsx)(i._8t,{className:(0,y.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,k.jsx)(P.u,{side:"top",sideOffset:4,label:N?(0,k.jsx)(h.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:D}}):(0,k.jsx)(h.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:D}}),children:(0,k.jsx)("button",{onClick:()=>{ek(null!=N&&N,d)},className:"flex items-center text-xs",children:N?(0,k.jsx)(i.W5x,{className:(0,y.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")}):(0,k.jsx)(i.Qq,{className:(0,y.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]});return(0,k.jsxs)(b.E.div,ed(ed({className:(0,y.default)("relative overflow-hidden border-token-border-light text-token-text-primary",!x&&"rounded-2xl border"),ref:t,onMouseEnter:()=>{z(!0)}},E.ee),{},{children:[(0,k.jsxs)("div",{className:(0,y.default)("flex items-center justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[(0,k.jsx)("span",{className:"flex-grow items-center truncate font-semibold capitalize",children:m}),(0,k.jsxs)("div",{className:"flex items-center gap-3",children:[(0,k.jsx)(g.M,{children:!M&&(0,k.jsx)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute right-3 top-3",children:(0,k.jsx)(ex,{type:D})})}),M&&_]})]}),(0,k.jsx)("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:x?"calc(100vh - 48px)":"".concat("table"===D?300:350,"px")},children:j})]}))});function ej(e){let{focusObject:t,title:a="",type:r,isFocused:l,disabled:n=!1}=e,{0:s,1:o}=(0,m.useState)(!1),c="chart"===r?i.X5Q:i.tXQ,d=l||s||n;return(0,k.jsx)(b.E.div,ed(ed({className:(0,y.default)("relative w-52 overflow-hidden rounded-2xl border",l&&"border-blue-selection/[.3]",d?"text-token-text-primary":"text-token-text-secondary",!n&&"cursor-pointer"),onMouseEnter:()=>{n||o(!0)},onMouseLeave:()=>{n||o(!1)},onClick:()=>{n||ek(l,t)}},E.ee),{},{children:(0,k.jsxs)("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[(0,k.jsxs)("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-semibold capitalize",children:[(0,k.jsx)(c,{className:(0,y.default)("icon-lg flex-shrink-0",d?"text-brand-green-800":"text-token-text-quaternary")}),(0,k.jsx)("span",{className:"flex-grow truncate",children:a})]}),s&&(0,k.jsx)("div",{className:"flex items-center gap-2",children:(0,k.jsx)(P.u,{side:"top",sideOffset:4,label:l?(0,k.jsx)(h.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:r}}):(0,k.jsx)(h.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:r}}),children:l?(0,k.jsx)(i.W5x,{className:"icon-md icon-md text-token-text-secondary"}):(0,k.jsx)(i.Qq,{className:(0,y.default)("icon-md text-token-text-secondary")})})})]})}))}function ev(e){let{fileName:t=""}=e;return(0,k.jsx)("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:(0,k.jsxs)("div",{className:"my-0 flex items-center justify-between",children:[(0,k.jsx)("div",{className:"flex items-center gap-2",children:(0,k.jsx)("p",{className:"m-0 p-0 text-lg font-semibold capitalize",children:t})}),(0,k.jsx)("span",{className:"text-sm text-red-600",children:(0,k.jsx)(h.Z,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}function ew(e){let{chartData:t,setChartData:a}=e,r=t.datasets[0].colors?[...t.datasets[0].colors]:[...er];return(0,k.jsx)(k.Fragment,{children:t.labels.map((e,l)=>(0,k.jsx)(C,{label:e,colorList:er,color:r[l],onColorUpdate:e=>{Array.isArray(r)?r[l]=e:r=[e],t.datasets[0].colors=r,a(ed({},t))}},l))})}function eN(e){let{chartData:t,setChartData:a}=e;return(0,k.jsx)(k.Fragment,{children:t.datasets.map((e,r)=>(0,k.jsx)(C,{label:e.label,colorList:er,color:e.colors?Array.isArray(e.colors)?e.colors[0]:e.colors:"",onColorUpdate:r=>{e.colors=[r],a(ed({},t))}},r))})}eh.displayName="ADAVisualizationWrapper";let ek=(e,t)=>{p.A.logEvent(f.M.adaFocusModeToggled),e?F.RT.close():F.RT.setFocusedObject(t)},eC=(e,t,a)=>{let r;let{colors:l}=t;return Array.isArray(r=l&&l.length>0?l:"pie"===e?t.data.map((e,t)=>er[t%er.length]):er[a%er.length])?r:[r]}}}]);
//# sourceMappingURL=643.37b61784c790a8af.js.map