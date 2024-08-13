"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1133],{26671:function(e,t,r){r.d(t,{B:function(){return i}});var o=r(92379),n=r(31541),c=r(59246),u=r(7186);function i(e){let t=e+"CollectionProvider",[r,i]=(0,n.b)(t),[a,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=o.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=l(s,r),a=(0,c.e)(t,i.collectionRef);return o.createElement(u.g7,{ref:a},n)}),d=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,n=o.useRef(null),c=o.useRef(new Map).current;return o.createElement(a,{scope:t,itemMap:c,collectionRef:n},r)},Slot:f,ItemSlot:o.forwardRef((e,t)=>{let{scope:r,children:n,...i}=e,a=o.useRef(null),s=(0,c.e)(t,a),f=l(d,r);return o.useEffect(()=>(f.itemMap.set(a,{ref:a,...i}),()=>void f.itemMap.delete(a))),o.createElement(u.g7,{[p]:"",ref:s},n)})},function(t){let r=l(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}},65954:function(e,t,r){r.d(t,{Pc:function(){return M},ck:function(){return k},fC:function(){return x}});var o=r(37088),n=r(92379),c=r(10132),u=r(26671),i=r(59246),a=r(31541),l=r(28531),s=r(52125),f=r(2372),d=r(48758),p=r(76228);let h="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[b,g,w]=(0,u.B)(v),[R,M]=(0,a.b)(v,[w]),[P,E]=R(v),F=(0,n.forwardRef)((e,t)=>(0,n.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,n.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,n.createElement)(I,(0,o.Z)({},e,{ref:t}))))),I=(0,n.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:u,loop:a=!1,dir:l,currentTabStopId:v,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:w,onEntryFocus:R,...M}=e,E=(0,n.useRef)(null),F=(0,i.e)(t,E),I=(0,p.gm)(l),[C=null,A]=(0,d.T)({prop:v,defaultProp:b,onChange:w}),[x,k]=(0,n.useState)(!1),T=(0,f.W)(R),y=g(r),_=(0,n.useRef)(!1),[D,G]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=E.current;if(e)return e.addEventListener(h,T),()=>e.removeEventListener(h,T)},[T]),(0,n.createElement)(P,{scope:r,orientation:u,dir:I,loop:a,currentTabStopId:C,onItemFocus:(0,n.useCallback)(e=>A(e),[A]),onItemShiftTab:(0,n.useCallback)(()=>k(!0),[]),onFocusableItemAdd:(0,n.useCallback)(()=>G(e=>e+1),[]),onFocusableItemRemove:(0,n.useCallback)(()=>G(e=>e-1),[])},(0,n.createElement)(s.WV.div,(0,o.Z)({tabIndex:x||0===D?-1:0,"data-orientation":u},M,{ref:F,style:{outline:"none",...e.style},onMouseDown:(0,c.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,c.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!x){let t=new CustomEvent(h,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=y().filter(e=>e.focusable);S([e.find(e=>e.active),e.find(e=>e.id===C),...e].filter(Boolean).map(e=>e.ref.current))}}_.current=!1}),onBlur:(0,c.M)(e.onBlur,()=>k(!1))})))}),C=(0,n.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:i=!1,tabStopId:a,...f}=e,d=(0,l.M)(),p=a||d,h=E("RovingFocusGroupItem",r),m=h.currentTabStopId===p,v=g(r),{onFocusableItemAdd:w,onFocusableItemRemove:R}=h;return(0,n.useEffect)(()=>{if(u)return w(),()=>R()},[u,w,R]),(0,n.createElement)(b.ItemSlot,{scope:r,id:p,focusable:u,active:i},(0,n.createElement)(s.WV.span,(0,o.Z)({tabIndex:m?0:-1,"data-orientation":h.orientation},f,{ref:t,onMouseDown:(0,c.M)(e.onMouseDown,e=>{u?h.onItemFocus(p):e.preventDefault()}),onFocus:(0,c.M)(e.onFocus,()=>h.onItemFocus(p)),onKeyDown:(0,c.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){h.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var o;let n=(o=e.key,"rtl"!==r?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(n)))return A[n]}(e,h.orientation,h.dir);if(void 0!==t){e.preventDefault();let n=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)n.reverse();else if("prev"===t||"next"===t){var r,o;"prev"===t&&n.reverse();let c=n.indexOf(e.currentTarget);n=h.loop?(r=n,o=c+1,r.map((e,t)=>r[(o+t)%r.length])):n.slice(c+1)}setTimeout(()=>S(n))}})})))}),A={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function S(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let x=F,k=C},19856:function(e,t,r){r.d(t,{N:function(){return i}});var o=r(60083),n=r(23418),c=class extends o.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,n.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,n.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:r}=e,o=super.createResult(e,t),{isFetching:c,isRefetching:u}=o,i=c&&r.fetchMeta?.fetchMore?.direction==="forward",a=c&&r.fetchMeta?.fetchMore?.direction==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,n.Qy)(t,r.data),hasPreviousPage:(0,n.ZF)(t,r.data),isFetchingNextPage:i,isFetchingPreviousPage:a,isRefetching:u&&!i&&!a}}},u=r(56537);function i(e,t){return(0,u.r)(e,c,t)}}}]);
//# sourceMappingURL=1133-e10c2a87142b6ac8.js.map