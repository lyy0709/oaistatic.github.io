"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9392],{3430:function(e,t,a){a.d(t,{Jw:function(){return g},ZP:function(){return f},ee:function(){return m}});var i=a(98601),l=a(32242),n=a(21389),s=a(88600),r=a(38068),o=a(17004),d=a(651);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){(0,i.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let g=450,m={transition:{type:"spring",stiffness:300,damping:30,mass:1},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};function f(e){let{children:t,clientThreadId:a,isOpen:i,onClose:c}=e;return(0,d.jsx)(n.M,{children:i&&(0,d.jsx)(l.f,{children:(0,d.jsx)(o.P.Provider,{value:{isEmbeddedInFocusedView:!0},children:(0,d.jsxs)("div",{className:"absolute inset-0 flex flex-col",children:[(0,d.jsx)(s.E.div,u({className:"h-full w-full bg-token-main-surface-secondary"},m)),(0,d.jsxs)("div",{className:"absolute inset-0 flex",children:[(0,d.jsx)("div",{className:"flex-grow overflow-auto",children:t}),(0,d.jsx)(s.E.div,u(u({className:"relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",style:{width:g}},m),{},{children:(0,d.jsx)("div",{className:"h-[100vh] pb-4",children:(0,d.jsx)(r.Z,{clientThreadId:a,hideHeader:!0,hideFooter:!0,hideToolsOverlay:!0,messagesVerticalAlign:"bottom"},a)})}))]})]})})})})}},39995:function(e,t,a){a.d(t,{RT:function(){return h},qN:function(){return p},rE:function(){return f},zG:function(){return g}});var i,l=a(38482),n=a.n(l),s=a(92379),r=a(68810),o=a(3430),d=a(651);let c=n()(()=>a.e(2123).then(a.bind(a,32123)),{loadableGenerated:{webpack:()=>[32123]}}),u=n()(()=>Promise.all([a.e(8690),a.e(1085)]).then(a.bind(a,41085)).then(e=>e.ImageEditor),{loadableGenerated:{webpack:()=>[41085]}}),g=((i={})[i.ADAVisualization=0]="ADAVisualization",i[i.Image=1]="Image",i),m=(0,r.Ue)(()=>({focusedObject:null}));function f(){return m(e=>e.focusedObject)}let h={setFocusedObject:e=>{m.setState({focusedObject:e})},close(){m.setState({focusedObject:null})}};function p(e){let t,{clientThreadId:a}=e,i=f();return(0,s.useEffect)(()=>{h.close()},[a]),(null==i?void 0:i.type)===g.ADAVisualization?t=(0,d.jsx)(c,{clientThreadId:a,visualization:i.visualization}):(null==i?void 0:i.type)===g.Image&&(t=(0,d.jsx)(u,{clientThreadId:a,messageId:i.messageId,image:i.image,allImages:i.allImages},i.image.asset_pointer)),(0,d.jsx)(o.ZP,{clientThreadId:a,isOpen:null!=i,onClose:h.close,children:t})}},79392:function(e,t,a){a.r(t),a.d(t,{default:function(){return en}});var i,l,n,s,r=a(2346),o=a(98601),d=a(19841),c=a(75172),u=a(68306),g=a(15478),m=a(16757),f=a(11550),h=a(15913),p=a(66583);a(82363);var v=a(21389),x=a(88600),b=a(92379),j=a(47563),y=a(651),w=((i=w||{})[i.Left=-1]="Left",i[i.Right=1]="Right",i[i.None=0]="None",i);let I={enter:e=>({zIndex:0,x:e===w.Left?"10%":"-10%",opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e===w.Right?"10%":"-10%",opacity:0})},M={enter:{opacity:0,y:"10%"},visible:{opacity:1,y:0},exit:{opacity:0,y:"10%"}},k=(e,t)=>Math.abs(e)*t;function E(e){var t;let a=(0,c.Z)(),i=(0,h.dQ)(),l=[h._G.Small,h._G.Mobile].includes(i),{0:n,1:s}=(0,b.useState)({width:0,height:0}),{0:r,1:o}=(0,b.useState)(!1),{0:u,1:g}=(0,b.useState)(e.image),{0:m,1:E}=(0,b.useState)(!1),O=n.width>0&&n.height>0,_=(0,b.useRef)(null),{0:C,1:P}=(0,b.useState)(w.None);function A(){g(t=>{let a=(e.images.findIndex(e=>e.url===t.url)+1)%e.images.length;return e.images[a]}),P(w.Left)}function S(){g(t=>{let a=e.images.findIndex(e=>e.url===t.url),i=a>0?(a-1)%e.images.length:e.images.length-1;return e.images[i]}),P(w.Right)}function z(e){"ArrowLeft"===e.key?S():"ArrowRight"===e.key&&A()}(0,b.useEffect)(()=>{if(!u.url)throw Error("ExpandableImage requires a src");let e=new Image;e.onload=()=>{s({width:e.naturalWidth,height:e.naturalHeight})},e.onerror=()=>{},e.src=u.url},[u.url]),(0,b.useEffect)(()=>{let t=_.current;if(m)return null==t||t.addEventListener("keydown",z),()=>{null==t||t.removeEventListener("keydown",z)};g(e.image)},[m]);let L=e.images.findIndex(e=>e.url===u.url);return(0,y.jsxs)(p.fC,{onOpenChange:function(t){var a;E(t),t&&(null===(a=e.onOpen)||void 0===a||a.call(e,u))},children:[(0,y.jsx)(p.xz,{disabled:!O,className:e.className,"aria-label":a.formatMessage(N.showImage),children:e.children}),(0,y.jsx)(p.h_,{children:(0,y.jsx)(p.aV,{className:"fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",children:(0,y.jsxs)(p.VY,{className:(0,d.default)("relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow"),ref:_,children:[(0,y.jsx)("div",{className:(0,d.default)("flex flex-1 transition-[flex-basis]",!r&&"md:basis-[75vw]"),children:(0,y.jsxs)("div",{className:"flex flex-1 flex-col md:p-6",children:[(0,y.jsxs)("div",{className:"flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2",children:[(0,y.jsx)(p.x8,{asChild:!0,children:(0,y.jsx)("button",{"aria-label":a.formatMessage(N.closeModal),children:(0,y.jsx)(j.tPq,{})})}),(0,y.jsx)("div",{children:!l&&(0,y.jsxs)(y.Fragment,{children:[null===(t=e.getActions)||void 0===t||null===(t=t.call(e,u))||void 0===t?void 0:t.map((e,t)=>(0,y.jsx)(f.z,{color:"ghost",size:"small",onClick:e.onClick,"aria-label":e.ariaLabel,disabled:e.disabled,icon:e.icon},t)),(0,y.jsx)(f.z,{color:"ghost",size:"small",onClick:()=>o(e=>!e),"aria-label":a.formatMessage(N.toggleSidebar),className:"md:inline-flex",icon:j.szr})]})})]}),(0,y.jsx)("div",{className:"relative flex flex-1 flex-col items-center justify-center overflow-hidden",children:(0,y.jsx)(v.M,{initial:!1,custom:C,children:(0,y.jsxs)(x.E.div,{className:"absolute grid h-full w-full grid-rows-2",custom:C,variants:I,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,t)=>{let{offset:a,velocity:i}=t,l=k(a.x,i.x);l<-1e3?A():l>1e3&&S()},children:[(0,y.jsx)(x.E.img,{src:u.url,alt:u.alt,className:"row-span-4 mx-auto h-full object-scale-down",onPanEnd:(e,t)=>{let{offset:a,velocity:i}=t,l=k(a.y,i.y);l<-1e3?o(!0):l>1e3&&o(!1)}},u.url),l&&r&&(0,y.jsx)(x.E.div,{className:"flex text-white",variants:M,initial:"enter",animate:"visible",exit:"exit",transition:{y:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:e.metadataRenderer(u)})]},u.url)})}),e.images.length>1?(0,y.jsxs)("div",{className:"flex items-center justify-center gap-4 p-8 text-white",children:[(0,y.jsx)(f.z,{color:"ghost",size:"small",onClick:S,"aria-label":a.formatMessage(N.previousImage),icon:j.Y4O}),e.images.map((e,t)=>{var i;return(0,y.jsx)("img",{src:e.url,alt:null!==(i=e.alt)&&void 0!==i?i:"",className:(0,d.default)("h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100",e.url===u.url?"ring-2 ring-white ring-offset-4 ring-offset-black":"opacity-25"),onClick:()=>{g(e),P(t<L?w.Right:w.Left)},"aria-label":a.formatMessage(N.showImage),role:"button"},e.url)}),(0,y.jsx)(f.z,{color:"ghost",size:"small",onClick:A,"aria-label":a.formatMessage(N.nextImage),icon:j.LZ3})]}):null]})}),(0,y.jsx)("div",{className:(0,d.default)("hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex",r?"md:basis-[25vw]":"md:basis-0"),children:(0,y.jsx)("div",{className:"w-[25vw] min-w-[25vw]",children:e.metadataRenderer(u)})})]})})})]})}let N=(0,u.vU)({showImage:{id:"imageViewer.showImage",defaultMessage:"Show Image"},closeModal:{id:"imageViewer.closeModal",defaultMessage:"Close Modal"},toggleSidebar:{id:"imageViewer.toggleSidebar",defaultMessage:"Toggle Sidebar"},nextImage:{id:"imageViewer.nextImage",defaultMessage:"Next Image"},previousImage:{id:"imageViewer.previousImage",defaultMessage:"Previous Image"}});var O=a(66114),_=a(17004),C=a(39995),P=a(10080),A=a(92355),S=a(83747),z=a(182),L=a(27742),V=a(93951),D=a(41987),R=a(92745),T=a(31498),G=a(46900),Z=a(99976),F=a(61619),B=a(79746),W=a(88667),U=a(48382),q=a(44395);let X=new Map,Q=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25e3,i=function(e){if("number"==typeof e)return e;let t=0;if(0===e.length)return t;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e),{0:l,1:n}=(0,b.useState)(null!==(t=X.get(e))&&void 0!==t?t:0);return(0,b.useEffect)(()=>{let t=0,l=setInterval(()=>{t+=100,n(n=>{let s=1.5;if(t<a){let e=.1*Math.sin(i+n/100)+1;s=(1-Math.log10(1+n/10))*e}let r=n+s;return r>=100?(clearInterval(l),100):(X.set(e,r),r)})},100);return()=>{clearInterval(l),X.delete(e)}},[i,e,a]),l};var H=a(38482);let $=a.n(H)()(()=>Promise.all([a.e(3656),a.e(3125)]).then(a.t.bind(a,63125,23)),{loadableGenerated:{webpack:()=>[63125]}});function Y(e){var t;let a=null===(t=e.matchTextColor)||void 0===t||t,i=(0,b.useRef)(null),{0:l,1:n}=(0,b.useState)(null);(0,b.useEffect)(()=>{if(!i.current||!a)return;let e=()=>{i.current&&n(getComputedStyle(i.current).color)},t=new MutationObserver(()=>{e()});return t.observe(window.document.documentElement,{attributes:!0,attributeFilter:["class","style"]}),t.observe(i.current,{attributes:!0,attributeFilter:["class","style"]}),e(),()=>t.disconnect()},[a]);let s=(0,b.useMemo)(()=>{var t;if(!a)return e.animationData;let i=null==l||null===(t=l.match(/\d+/g))||void 0===t?void 0:t.map(Number).map(e=>e/255);if(!i)return null;i.push(1);let n=e.animationData;return"layers"in n&&Array.isArray(n.layers)&&n.layers.forEach(e=>{"ty"in e&&4===e.ty&&"shapes"in e&&Array.isArray(e.shapes)&&e.shapes.forEach(e=>{"it"in e&&Array.isArray(e.it)&&e.it.forEach(e=>{"fl"===e.ty&&(e.c.k=i)})})}),n},[e.animationData,l,a]);return(0,y.jsx)("div",{ref:i,className:e.className,children:(0,y.jsx)($,{animationData:s,loop:!0,autoplay:!0},l)})}var J=a(26669);function K(e){let{id:t,withLottie:a}=e;return(0,y.jsxs)("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full",children:[a?(0,y.jsx)(Y,{className:"h-6 w-6",animationData:J}):(0,y.jsx)(j.q$4,{className:"h-6 w-6"}),(0,y.jsx)(ee,{id:t})]})}function ee(e){let{id:t}=e,a=Q(t);return(0,y.jsx)(q.Z,{percentage:a,thickness:1.25/23,className:"absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:"".concat((100-a)/100*.2,"s"),transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"})}var et=a(99529),ea=a(54028);function ei(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function el(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(a),!0).forEach(function(t){(0,o.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ei(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function en(e){var t;let{messages:a,clientThreadId:i}=e,[l,n]=a,s=(0,ea.We)(l.message),r=(0,U.t9)(),o=a.some(e=>r.has(e.message.id)),d=null;null!=n&&G.U.isMultimodalTextMessage(n.message)&&(d=G.U.getImageAssetPointers(n.message));let c=et.X.Running;return null!=d?c=et.X.Finished:null!=n?c=et.X.Error:s&&(c=et.X.Stopped),(0,y.jsx)(y.Fragment,{children:!o&&(0,y.jsx)(er,{imageAssets:null!==(t=d)&&void 0!==t?t:[],clientThreadId:i,toolStatus:c,toolMessage:null==n?void 0:n.message,messageId:l.message.id})})}var es=((l=es||{}).WIDE="1792x1024",l.SQUARE="1024x1024",l.TALL="1024x1792",l);let er=e=>{let{imageAssets:t,clientThreadId:a,toolMessage:i,toolStatus:l,messageId:n}=e,s=(0,c.Z)(),r=(0,S.H)(t);if((null==i?void 0:i.content.content_type)===m.PX.SystemError)return null;let o=ep(t[0]),d=r.map(e=>e.data).filter(e=>null!=e),u=d.map(e=>el(el({},e),{},{alt:(0,z.hG)(e)})),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"".concat(n,"-image-").concat(e)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(eh,{$numItems:r.length,className:"my-1 transition-opacity duration-300",children:[0===r.length&&l===et.X.Running&&(0,y.jsx)(ed,{layoutId:"loading:placeholder",shape:o,isToolRunning:!0},"loading"),r.map((e,t)=>{let{isLoading:l,data:n,error:r}=e;if(l)return(0,y.jsx)(ed,{shape:o,layoutId:g(t)},t);if(null!=r||(null==n?void 0:n.url)==null)return(0,y.jsx)(eu,{layoutId:g(t),className:"text-sm text-token-text-tertiary",shape:o,children:(0,y.jsx)("div",{className:"flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",children:s.formatMessage(ev.imageLoadError)})},t);if(i&&n){let e=el(el({},n),{},{alt:(0,z.hG)(n)});return(0,y.jsx)(eo,{image:e,allImages:u,clientThreadId:a,toolMessage:i,index:t,onOpenImageEditor:()=>{C.RT.setFocusedObject({type:C.zG.Image,image:e,allImages:d,messageId:i.id})}},t)}})]})})};function eo(e){let{toolMessage:t,clientThreadId:a,allImages:i,image:l,index:n,onOpenImageEditor:s}=e,r=(0,c.Z)(),o=(0,R.XK)(a),d=(0,V.hz)(),u=(0,h.w$)(),g=(0,L.W)(a),m=ep(l),{0:f,1:p}=(0,b.useState)({}),v=g&&"gizmo"in g?g.gizmo:void 0,x=(null==v?void 0:v.gizmo.id)===P.qL,w=u&&!!(null==d?void 0:d.includes(D.L0.D3Editor))&&(null==v||x||!!(null==d?void 0:d.includes(D.L0.D3EditorAllGpts)));async function I(e){(0,z.HR)(e,o,t.id)}function M(e,a){var i,l,n,s,r,d;p(t=>el(el({},t),{},{[e.asset_pointer]:a})),W.m9.logEvent(F.M.dalleImageRating,a?"like":"dislike",{liked:a?"true":"false",sourceOperation:null!==(i=null===(l=e.metadata)||void 0===l||null===(l=l.dalle)||void 0===l?void 0:l.edit_op)&&void 0!==i?i:"none",hasParent:null!==(n=e.metadata)&&void 0!==n&&null!==(n=n.dalle)&&void 0!==n&&n.parent_gen_id?"true":"false"}),Z.A.logEvent(F.M.dalleImageRating,{liked:a,conversationId:o,messageId:t.id,generationId:null===(s=e.metadata)||void 0===s||null===(s=s.dalle)||void 0===s?void 0:s.gen_id,parentGenerationId:null===(r=e.metadata)||void 0===r||null===(r=r.dalle)||void 0===r?void 0:r.parent_gen_id,fileId:(0,O.Iy)(e.asset_pointer),sourceOperation:null===(d=e.metadata)||void 0===d||null===(d=d.dalle)||void 0===d?void 0:d.edit_op})}let k=(0,y.jsx)(eg,{image:l,shape:m,rating:f[l.asset_pointer],onDownload:()=>I(l),onRate:(e,t)=>M(e,t),clientThreadId:a,layoutId:void 0});return k=w?(0,y.jsx)("div",{role:"button",onClick:s,children:k}):(0,y.jsx)(E,{image:l,images:i,metadataRenderer:e=>(0,y.jsx)(ec,{image:e}),onOpen:function(e){var a,i,l,n,s,r;W.m9.logEvent("chatgpt_dalle_image_view_full",null,{sourceOperation:null!==(a=null===(i=e.metadata)||void 0===i||null===(i=i.dalle)||void 0===i?void 0:i.edit_op)&&void 0!==a?a:"none",hasParent:null!==(l=e.metadata)&&void 0!==l&&null!==(l=l.dalle)&&void 0!==l&&l.parent_gen_id?"true":"false"}),Z.A.logEvent(F.M.dalleImageViewFull,{conversationId:o,messageId:t.id,generationId:null===(n=e.metadata)||void 0===n||null===(n=n.dalle)||void 0===n?void 0:n.gen_id,parentGenerationId:null===(s=e.metadata)||void 0===s||null===(s=s.dalle)||void 0===s?void 0:s.parent_gen_id,fileId:(0,O.Iy)(e.asset_pointer),sourceOperation:null===(r=e.metadata)||void 0===r||null===(r=r.dalle)||void 0===r?void 0:r.edit_op})},getActions:function(e){let t=f[e.asset_pointer],a={label:r.formatMessage(ev.likeImage),onClick:()=>M(e,!0),disabled:!0===t,ariaLabel:r.formatMessage(ev.likeImage),icon:j.Z7j},i={label:r.formatMessage(ev.dislikeImage),onClick:()=>M(e,!1),disabled:!1===t,ariaLabel:r.formatMessage(ev.dislikeImage),icon:j.C_W};return[!1!==t&&a,!0!==t&&i,{label:r.formatMessage(ev.downloadImage),onClick:()=>I(e),ariaLabel:r.formatMessage(ev.downloadImage),icon:j._8t}].filter(Boolean)},children:k}),(0,y.jsx)("div",{className:"flex",children:k},n)}function ed(e){let{shape:t,layoutId:a,isToolRunning:i=!1}=e;return(0,y.jsx)(eu,{shape:t,layoutId:a,children:(0,y.jsx)("div",{className:"flex min-h-full items-center justify-center",children:(0,y.jsx)(K,{id:a,withLottie:i})})},"loading")}function ec(e){let{image:t}=e,a=(0,c.Z)(),{0:i,1:l}=(0,b.useState)(!1);return(0,y.jsxs)("div",{className:"flex flex-col items-start gap-3 p-6",children:[(0,y.jsx)("div",{className:"text-sm text-gray-300 sm:text-base",children:a.formatMessage(ev.imageViewerMetadataTitle)}),(0,y.jsx)("div",{className:"max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg",children:(0,z.hG)(t)}),(0,y.jsx)(f.z,{color:"primary",onClick:function(){let e=(0,z.hG)(t);l(!0),(0,B.v)(e),setTimeout(()=>{l(!1)},2e3)},disabled:i,className:"hidden sm:block",icon:j.TIy,children:i?a.formatMessage(ev.imageViewerMetadataCopyButtonCopied):a.formatMessage(ev.imageViewerMetadataCopyButton)})]})}function eu(e){let{children:t,shape:a,className:i,layoutId:l}=e;return(0,y.jsxs)(x.E.div,{layoutId:l,className:(0,d.default)("relative",i,a===es.WIDE&&"aspect-[7/4]",a===es.SQUARE&&"aspect-square max-w-[400px]",a===es.TALL&&"aspect-[4/7] max-w-xs","overflow-hidden rounded-2xl"),children:[(0,y.jsx)("div",{className:"pointer-events-none absolute inset-0 bg-token-main-surface-secondary"}),(0,y.jsx)("div",{className:"relative h-full",children:t})]})}function eg(e){let{image:t,shape:a,rating:i,onDownload:l,onRate:n,clientThreadId:s,layoutId:r}=e,o=(0,R.h9)(),c=(0,T.ec)(T.F_.isBusinessWorkspace),u=(0,R.WA)(s),g=(0,_.E)(),f=(0,C.rE)(),h=(null==f?void 0:f.type)===C.zG.Image&&f.image.asset_pointer===t.asset_pointer,{url:p,width:v,height:x}=t,b=!o&&!c&&(null==u?void 0:u.kind)!==m.OL.GizmoMagicCreate;return(0,y.jsxs)(eu,{shape:a,className:"group/dalle-image",layoutId:h?void 0:r,children:[(0,y.jsx)(S.sH,{alt:(0,z.hG)(t),src:p,width:v,height:x}),(0,y.jsx)("div",{className:(0,d.default)("pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",h?"bg-black/50 group-hover/dalle-image:bg-black/70":"group-hover/dalle-image:bg-transparent")}),g?!h&&(0,y.jsx)("div",{className:"pointer-events-none invisible absolute right-3 top-3 text-white group-hover/dalle-image:visible",children:(0,y.jsx)(A.Qq,{})}):(0,y.jsxs)(y.Fragment,{children:[b&&(0,y.jsxs)(em,{children:[!1!==i&&(0,y.jsx)(ef,{icon:j.Z7j,selected:!0===i,onClick:e=>{e.stopPropagation(),n(t,!0)}}),!0!==i&&(0,y.jsx)(ef,{icon:j.C_W,selected:!1===i,onClick:e=>{e.stopPropagation(),n(t,!1)}})]}),(0,y.jsx)(em,{$rightAlign:!0,children:(0,y.jsx)(ef,{icon:j._8t,onClick:e=>{e.stopPropagation(),l()}})})]})]})}let em=g.Z.div(n||(n=(0,r.Z)(["invisible absolute top-3 flex gap-1 group-hover/dalle-image:visible\n",""])),e=>{let{$rightAlign:t}=e;return t?"right-3":"left-3"});function ef(e){let{icon:t,selected:a,onClick:i}=e;return(0,y.jsx)("button",{className:(0,d.default)("flex h-8 w-8 items-center justify-center rounded",a?"bg-gray-100":"bg-black/50 hover:opacity-70"),onClick:i,disabled:a,children:(0,y.jsx)(t,{className:(0,d.default)("icon-md",a?"text-gray-700":"text-white")})})}let eh=g.Z.div(s||(s=(0,r.Z)(["grid gap-2\n",""])),e=>{let{$numItems:t}=e;return t<=1?"grid-cols-1":"grid-cols-2"});function ep(e){if(!e)return es.SQUARE;let{width:t,height:a}=e;return t>a?es.WIDE:t<a?es.TALL:es.SQUARE}let ev=(0,u.vU)({creatingImages:{id:"dalleMessage.creatingImagesV2",defaultMessage:"Creating image"},stopped:{id:"dalleMessage.stoppedV3",defaultMessage:"Stopped creating image"},errorCreating:{id:"dalleMessage.errorCreatingV2",defaultMessage:"Error creating image"},imageLoadError:{id:"dalleMessage.imageLoadError",defaultMessage:"Error loading image"},imageViewerMetadataTitle:{id:"dalleMessage.imageViewerMetadataTitle",defaultMessage:"Prompt"},imageViewerMetadataCopyButton:{id:"dalleMessage.imageViewerMetadataCopyButton",defaultMessage:"Copy"},imageViewerMetadataCopyButtonCopied:{id:"dalleMessage.imageViewerMetadataCopyButtonCopied",defaultMessage:"Copied!"},imageEditButton:{id:"dalleMessage.imageEditButton",defaultMessage:"Edit"},downloadImage:{id:"imageViewer.downloadImage",defaultMessage:"Download Image"},likeImage:{id:"imageViewer.likeImage",defaultMessage:"Like Image"},dislikeImage:{id:"imageViewer.dislikeImage",defaultMessage:"Dislike Image"}})}}]);
//# sourceMappingURL=9392.5e805a1f0f52888b.js.map