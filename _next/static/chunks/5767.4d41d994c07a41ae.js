(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5767],{54221:function(e,t,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=l||s||Function("return this")(),d=Object.prototype.toString,p=Math.max,h=Math.min,v=function(){return f.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=c.test(e);return l||u.test(e)?a(e.slice(2),l?2:8):i.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,c,u,a,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function g(e){var n=e-a,r=e-l;return void 0===a||n>=t||n<0||f&&r>=i}function w(){var e,n,r,o=v();if(g(o))return T(o);u=setTimeout(w,(e=o-a,n=o-l,r=t-e,f?h(r,i-n):r))}function T(e){return(u=void 0,d&&r)?m(e):(r=o=void 0,c)}function S(){var e,n=v(),i=g(n);if(r=arguments,o=this,a=n,i){if(void 0===u)return l=e=a,u=setTimeout(w,t),s?m(e):c;if(f)return u=setTimeout(w,t),m(a)}return void 0===u&&(u=setTimeout(w,t)),c}return t=y(t)||0,b(n)&&(s=!!n.leading,i=(f="maxWait"in n)?p(y(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=a=o=u=void 0},S.flush=function(){return void 0===u?c:T(v())},S}},89311:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){"use strict";var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],o={},i=null;function c(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function u(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function a(){for(var n=this.getLevel(),o=0;o<r.length;o++){var i=r[o];this[i]=o<n?e:this.methodFactory(i,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return"No console available for logging"}function l(e){return function(){typeof console!==t&&(a.call(this),this[e].apply(this,arguments))}}function s(r,o,i){var a;return"debug"===(a=r)&&(a="log"),typeof console!==t&&("trace"===a&&n?u:void 0!==console[a]?c(console,a):void 0!==console.log?c(console,"log"):e)||l.apply(this,arguments)}function f(e,n){var c,u,l,f=this,d="loglevel";function p(){var e;if(typeof window!==t&&d){try{e=window.localStorage[d]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=encodeURIComponent(d),o=n.indexOf(r+"=");-1!==o&&(e=/^([^;]+)/.exec(n.slice(o+r.length+1))[1])}catch(e){}return void 0===f.levels[e]&&(e=void 0),e}}function h(e){var t=e;if("string"==typeof t&&void 0!==f.levels[t.toUpperCase()]&&(t=f.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=f.levels.SILENT)return t;throw TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?d+=":"+e:"symbol"==typeof e&&(d=void 0),f.name=e,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=n||s,f.getLevel=function(){return null!=l?l:null!=u?u:c},f.setLevel=function(e,n){return l=h(e),!1!==n&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&d){try{window.localStorage[d]=n;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+n+";"}catch(e){}}}(l),a.call(f)},f.setDefaultLevel=function(e){u=h(e),p()||f.setLevel(e,!1)},f.resetLevel=function(){l=null,function(){if(typeof window!==t&&d){try{window.localStorage.removeItem(d)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),a.call(f)},f.enableAll=function(e){f.setLevel(f.levels.TRACE,e)},f.disableAll=function(e){f.setLevel(f.levels.SILENT,e)},f.rebuild=function(){if(i!==f&&(c=h(i.getLevel())),a.call(f),i===f)for(var e in o)o[e].rebuild()},c=h(i?i.getLevel():"WARN");var v=p();null!=v&&(l=h(v)),a.call(f)}(i=new f).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=o[e];return t||(t=o[e]=new f(e,i.methodFactory)),t};var d=typeof window!==t?window.log:void 0;return i.noConflict=function(){return typeof window!==t&&window.log===i&&(window.log=d),i},i.getLoggers=function(){return o},i.default=i,i})?r.call(t,n,t,e):r)&&(e.exports=o)},35767:function(e,t,n){"use strict";n.d(t,{IC:function(){return ej},Z5:function(){return eM},qT:function(){return eU},z1:function(){return e_},fZ:function(){return ex},Ih:function(){return eI}});var r,o,i,c=n(92379),u=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r},a=n(67431),l=n(89311),s=n(38104);function f(e){return"function"==typeof e}var d=((r=function(e){Error.call(e),e.stack=Error().stack},o=function(e){r(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}).prototype=Object.create(Error.prototype),o.prototype.constructor=o,o);function p(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var h=function(){var e;function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e,t,n,r,o,i=this._parentage;if(i){if(this._parentage=null,Array.isArray(i))try{for(var c=(0,s.XA)(i),u=c.next();!u.done;u=c.next())u.value.remove(this)}catch(t){e={error:t}}finally{try{u&&!u.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else i.remove(this)}var a=this.initialTeardown;if(f(a))try{a()}catch(e){o=e instanceof d?e.errors:[e]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var p=(0,s.XA)(l),h=p.next();!h.done;h=p.next()){var v=h.value;try{b(v)}catch(e){o=null!=o?o:[],e instanceof d?o=(0,s.ev)((0,s.ev)([],(0,s.CR)(o)),(0,s.CR)(e.errors)):o.push(e)}}}catch(e){n={error:e}}finally{try{h&&!h.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}}if(o)throw new d(o)}},t.prototype.add=function(e){var n;if(e&&e!==this){if(this.closed)b(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}}},t.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},t.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},t.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&p(t,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&p(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function v(e){return e instanceof h||e&&"closed"in e&&f(e.remove)&&f(e.add)&&f(e.unsubscribe)}function b(e){f(e)?e():e.unsubscribe()}h.EMPTY;var y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},m={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=m.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,(0,s.ev)([e,t],(0,s.CR)(n))):setTimeout.apply(void 0,(0,s.ev)([e,t],(0,s.CR)(n)))},clearTimeout:function(e){var t=m.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function g(e){m.setTimeout(function(){var t=y.onUnhandledError;if(t)t(e);else throw e})}function w(){}var T=S("C",void 0,void 0);function S(e,t,n){return{kind:e,value:t,error:n}}var k=null,E=function(e){function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,v(t)&&t.add(n)):n.destination=A,n}return(0,s.ZT)(t,e),t.create=function(e,t,n){return new O(e,t,n)},t.prototype.next=function(e){this.isStopped?_(S("N",e,void 0),this):this._next(e)},t.prototype.error=function(e){this.isStopped?_(S("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?_(T,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(h),C=Function.prototype.bind;function x(e,t){return C.call(e,t)}var P=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){Q(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){Q(e)}else Q(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){Q(e)}},e}(),O=function(e){function t(t,n,r){var o,i,c=e.call(this)||this;return f(t)||!t?o={next:null!=t?t:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:c&&y.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return c.unsubscribe()},o={next:t.next&&x(t.next,i),error:t.error&&x(t.error,i),complete:t.complete&&x(t.complete,i)}):o=t,c.destination=new P(o),c}return(0,s.ZT)(t,e),t}(E);function Q(e){y.useDeprecatedSynchronousErrorHandling?y.useDeprecatedSynchronousErrorHandling&&k&&(k.errorThrown=!0,k.error=e):g(e)}function _(e,t){var n=y.onStoppedNotification;n&&m.setTimeout(function(){return n(e,t)})}var A={closed:!0,next:w,error:function(e){throw e},complete:w},I="function"==typeof Symbol&&Symbol.observable||"@@observable";function R(e){return e}var L=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r,o=this,i=(r=e)&&r instanceof E||r&&f(r.next)&&f(r.error)&&f(r.complete)&&v(r)?e:new O(e,t,n);return function(e){if(y.useDeprecatedSynchronousErrorHandling){var t=!k;if(t&&(k={errorThrown:!1,error:null}),e(),t){var n=k,r=n.errorThrown,o=n.error;if(k=null,r)throw o}}else e()}(function(){var e=o.operator,t=o.source;i.add(e?e.call(i,t):t?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=U(t))(function(t,r){var o=new O({next:function(t){try{e(t)}catch(e){r(e),o.unsubscribe()}},error:r,complete:t});n.subscribe(o)})},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[I]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0===e.length?R:1===e.length?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)})(this)},e.prototype.toPromise=function(e){var t=this;return new(e=U(e))(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}();function U(e){var t;return null!==(t=null!=e?e:y.Promise)&&void 0!==t?t:Promise}function N(e){return function(t){if(f(null==t?void 0:t.lift))return t.lift(function(t){try{return e(t,this)}catch(e){this.error(e)}});throw TypeError("Unable to lift unknown Observable type")}}function j(e,t,n,r,o){return new M(e,t,n,r,o)}var M=function(e){function t(t,n,r,o,i,c){var u=e.call(this,t)||this;return u.onFinalize=i,u.shouldUnsubscribe=c,u._next=n?function(e){try{n(e)}catch(e){t.error(e)}}:e.prototype._next,u._error=o?function(e){try{o(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=r?function(){try{r()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,u}return(0,s.ZT)(t,e),t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),n||null===(t=this.onFinalize)||void 0===t||t.call(this)}},t}(E);function D(e,t){return N(function(n,r){var o=0;n.subscribe(j(r,function(n){r.next(e.call(t,n,o++))}))})}var F=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e};function $(e){return f(null==e?void 0:e.then)}function J(e){return Symbol.asyncIterator&&f(null==e?void 0:e[Symbol.asyncIterator])}function z(e){return TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var q="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function W(e){return f(null==e?void 0:e[q])}function Y(e){return(0,s.FC)(this,arguments,function(){var t,n,r;return(0,s.Jh)(this,function(o){switch(o.label){case 0:t=e.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,(0,s.qq)(t.read())];case 3:if(r=(n=o.sent()).value,!n.done)return[3,5];return[4,(0,s.qq)(void 0)];case 4:return[2,o.sent()];case 5:return[4,(0,s.qq)(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Z(e){return f(null==e?void 0:e.getReader)}function H(e){if(e instanceof L)return e;if(null!=e){if(f(e[I]))return new L(function(t){var n=e[I]();if(f(n.subscribe))return n.subscribe(t);throw TypeError("Provided object does not correctly implement Symbol.observable")});if(F(e))return new L(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()});if($(e))return new L(function(t){e.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,g)});if(J(e))return B(e);if(W(e))return new L(function(t){var n,r;try{for(var o=(0,s.XA)(e),i=o.next();!i.done;i=o.next()){var c=i.value;if(t.next(c),t.closed)return}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()});if(Z(e))return B(Y(e))}throw z(e)}function B(e){return new L(function(t){(function(e,t){var n,r,o,i;return(0,s.mG)(this,void 0,void 0,function(){var c;return(0,s.Jh)(this,function(u){switch(u.label){case 0:u.trys.push([0,5,6,11]),n=(0,s.KL)(e),u.label=1;case 1:return[4,n.next()];case 2:if((r=u.sent()).done)return[3,4];if(c=r.value,t.next(c),t.closed)return[2];u.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return o={error:u.sent()},[3,11];case 6:if(u.trys.push([6,,9,10]),!(r&&!r.done&&(i=n.return)))return[3,8];return[4,i.call(n)];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})})(e,t).catch(function(e){return t.error(e)})})}function X(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function G(e){var t;return(t=e[e.length-1])&&f(t.schedule)?e.pop():void 0}function K(e,t){return void 0===t&&(t=0),N(function(n,r){n.subscribe(j(r,function(n){return X(r,e,function(){return r.next(n)},t)},function(){return X(r,e,function(){return r.complete()},t)},function(n){return X(r,e,function(){return r.error(n)},t)}))})}function V(e,t){return void 0===t&&(t=0),N(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function ee(e,t){if(!e)throw Error("Iterable cannot be null");return new L(function(n){X(n,t,function(){var r=e[Symbol.asyncIterator]();X(n,t,function(){r.next().then(function(e){e.done?n.complete():n.next(e.value)})},0,!0)})})}function et(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(void 0===(e=1)&&(e=1/0),function e(t,n,r){return(void 0===r&&(r=1/0),f(n))?e(function(e,r){return D(function(t,o){return n(e,t,r,o)})(H(t(e,r)))},r):("number"==typeof n&&(r=n),N(function(e,n){var o,i,c,u,a,l,s,f,d,p,h,v;return o=r,l=[],s=0,f=0,d=!1,p=function(){!d||l.length||s||n.complete()},h=function(e){return s<o?v(e):l.push(e)},v=function(e){s++;var r=!1;H(t(e,f++)).subscribe(j(n,function(e){null==void 0||i(e),c?h(e):n.next(e)},function(){r=!0},void 0,function(){if(r)try{for(s--;l.length&&s<o;)!function(){var e=l.shift();1?v(e):X(n,u,function(){return v(e)})}();p()}catch(e){n.error(e)}}))},e.subscribe(j(n,h,function(){d=!0,p()})),function(){null==void 0||a()}}))}(R,e))((t=G(n))?function(e,t){if(null!=e){if(f(e[I]))return H(e).pipe(V(t),K(t));if(F(e))return new L(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})});if($(e))return H(e).pipe(V(t),K(t));if(J(e))return ee(e,t);if(W(e))return new L(function(n){var r;return X(n,t,function(){r=e[q](),X(n,t,function(){var e,t,o;try{t=(e=r.next()).value,o=e.done}catch(e){n.error(e);return}o?n.complete():n.next(t)},0,!0)}),function(){return f(null==r?void 0:r.return)&&r.return()}});if(Z(e))return ee(Y(e),t)}throw z(e)}(n,t):H(n))}function en(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=G(e);return N(function(t,r){(n?et(e,t,n):et(e,t)).subscribe(r)})}function er(e){var t;return void 0!==e&&(!!e&&e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("track")&&void 0!==(null==(t=e.publication)?void 0:t.track)||!!e&&e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("publication")&&void 0!==e.publication)}function eo(e){return e instanceof a.Ix}Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var ei=[a.TQ.ConnectionStateChanged,a.TQ.RoomMetadataChanged,a.TQ.ActiveSpeakersChanged,a.TQ.ConnectionQualityChanged,a.TQ.ParticipantConnected,a.TQ.ParticipantDisconnected,a.TQ.ParticipantPermissionsChanged,a.TQ.ParticipantMetadataChanged,a.TQ.TrackMuted,a.TQ.TrackUnmuted,a.TQ.TrackPublished,a.TQ.TrackUnpublished,a.TQ.TrackStreamStateChanged,a.TQ.TrackSubscriptionFailed,a.TQ.TrackSubscriptionPermissionChanged,a.TQ.TrackSubscriptionStatusChanged,a.TQ.LocalTrackPublished,a.TQ.LocalTrackUnpublished];a.dd.TrackPublished,a.dd.TrackUnpublished,a.dd.TrackMuted,a.dd.TrackUnmuted,a.dd.TrackStreamStateChanged,a.dd.TrackSubscribed,a.dd.TrackUnsubscribed,a.dd.TrackSubscriptionPermissionChanged,a.dd.TrackSubscriptionFailed,a.dd.LocalTrackPublished,a.dd.LocalTrackUnpublished,a.dd.ConnectionQualityChanged,a.dd.IsSpeakingChanged,a.dd.ParticipantMetadataChanged,a.dd.ParticipantPermissionsChanged,a.dd.TrackMuted,a.dd.TrackUnmuted,a.dd.TrackPublished,a.dd.TrackUnpublished,a.dd.TrackStreamStateChanged,a.dd.TrackSubscriptionFailed,a.dd.TrackSubscriptionPermissionChanged,a.dd.TrackSubscriptionStatusChanged,a.dd.LocalTrackPublished,a.dd.LocalTrackUnpublished;var ec=l.getLogger("lk-components-js");function eu(e){return"object"==typeof e}function ea(e){return Array.isArray(e)&&e.filter(eu).length>0}function el(e){if(er(e))return e.publication;{let{source:t,name:n,participant:r}=e;if(t&&n)return r.getTrackPublications().find(e=>e.source===t&&e.trackName===n);if(n)return r.getTrackPublicationByName(n);if(t)return r.getTrackPublication(t);throw Error("At least one of source and name needs to be defined")}}function es(e,t,n=!0){let r=[e.localParticipant,...Array.from(e.remoteParticipants.values())],o=[];return r.forEach(e=>{t.forEach(t=>{let r=Array.from(e.trackPublications.values()).filter(e=>e.source===t&&(!n||e.track)).map(t=>({participant:e,publication:t,source:t.source}));o.push(...r)})}),{trackReferences:o,participants:r}}ec.setDefaultLevel("WARN"),new TextEncoder,new TextDecoder;var{load:ef,save:ed}=(i="lk-user-choices",{load:()=>(function(e){if("undefined"==typeof localStorage){ec.error("Local storage is not available.");return}try{let t=localStorage.getItem(e);if(!t){ec.warn(`Item with key ${e} does not exist in local storage.`);return}return JSON.parse(t)}catch(e){ec.error(`Error getting item from local storage: ${e}`);return}})(i),save:e=>(function(e,t){if("undefined"==typeof localStorage){ec.error("Local storage is not available.");return}try{localStorage.setItem(e,JSON.stringify(t))}catch(e){ec.error(`Error setting item to local storage: ${e}`)}})(i,e)});n(54221),"undefined"!=typeof window?c.useLayoutEffect:c.useEffect,n(44675);var ep=Object.defineProperty,eh=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,eb=Object.getOwnPropertySymbols,ey=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,eg=(e,t,n)=>t in e?ep(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ew=(e,t)=>{for(var n in t||(t={}))ey.call(t,n)&&eg(e,n,t[n]);if(eb)for(var n of eb(t))em.call(t,n)&&eg(e,n,t[n]);return e},eT=(e,t)=>eh(e,ev(t)),eS=(e,t)=>{var n={};for(var r in e)ey.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&eb)for(var r of eb(e))0>t.indexOf(r)&&em.call(e,r)&&(n[r]=e[r]);return n};c.createContext(void 0);var ek=c.createContext(void 0);function eE(e){let t=c.useContext(ek),n=null!=e?e:t;if(!n)throw Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");return n}c.createContext(void 0);var eC=c.createContext(void 0);function ex(){let e=c.useContext(eC);if(!e)throw Error("tried to access room context outside of livekit room component");return e}function eP(e){let t=c.useContext(eC),n=null!=e?e:t;if(!n)throw Error("No room provided, make sure you are inside a Room context or pass the room explicitly");return n}var eO=c.createContext(void 0);function eQ(...e){let t=ew({},e[0]);for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=function(...e){return(...t)=>{for(let n of e)if("function"==typeof n)try{n(...t)}catch(e){console.error(e)}}}(n,o):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof o?t[e]=u(n,o):t[e]=void 0!==o?o:n}}return t}function e_(e){let t=eP(e);return function(e,t){let[n,r]=c.useState(t);return c.useEffect(()=>{if("undefined"==typeof window||!e)return;let t=e.subscribe(r);return()=>t.unsubscribe()},[e]),n}(c.useMemo(()=>{var e;return(e=a.TQ.ConnectionStateChanged,new L(n=>{let r=(...e)=>{n.next(e)};return t.on(e,r),()=>{t.off(e,r)}})).pipe(D(([e])=>e),en(t.state))},[t]),t.state)}var eA={connect:!0,audio:!1,video:!1};function eI(e=[a.fQ.Source.Camera,a.fQ.Source.Microphone,a.fQ.Source.ScreenShare,a.fQ.Source.ScreenShareAudio,a.fQ.Source.Unknown],t={}){let n=eP(t.room),[r,o]=c.useState([]),[i,u]=c.useState([]),l=c.useMemo(()=>e.map(e=>eu(e)?e.source:e),[JSON.stringify(e)]);return c.useEffect(()=>{let e=(function(e,t,n){var r,o;let i=null!=(r=n.additionalRoomEvents)?r:ei,c=null==(o=n.onlySubscribed)||o;return(function(e,...t){return new L(n=>{let r=()=>{n.next(e)};return t.forEach(t=>{e.on(t,r)}),()=>{t.forEach(t=>{e.off(t,r)})}}).pipe(en(e))})(e,...Array.from(new Set([a.TQ.ParticipantConnected,a.TQ.ParticipantDisconnected,a.TQ.ConnectionStateChanged,a.TQ.LocalTrackPublished,a.TQ.LocalTrackUnpublished,a.TQ.TrackPublished,a.TQ.TrackUnpublished,a.TQ.TrackSubscriptionStatusChanged,...i]).values())).pipe(D(e=>{let n=es(e,t,c);return ec.debug(`TrackReference[] was updated. (length ${n.trackReferences.length})`,n),n}),en(es(e,t,c)))})(n,l,{additionalRoomEvents:t.updateOnlyOn,onlySubscribed:t.onlySubscribed}).subscribe(({trackReferences:e,participants:t})=>{ec.debug("setting track bundles",e,t),o(e),u(t)});return()=>e.unsubscribe()},[n,JSON.stringify(t.updateOnlyOn),JSON.stringify(e)]),c.useMemo(()=>{if(!ea(e))return r;{let t=function(e,t){let n=new Map;if(ea(e)){let r=e.filter(e=>e.withPlaceholder).map(e=>e.source);t.forEach(e=>{let t=e.getTrackPublications().map(e=>{var t;return null==(t=e.track)?void 0:t.source}).filter(e=>void 0!==e),o=Array.from(function(e,t){let n=new Set(e);for(let e of t)n.delete(e);return n}(new Set(r),new Set(t)));o.length>0&&n.set(e.identity,o)})}return n}(e,i),n=Array.from(r);return i.forEach(e=>{var o;t.has(e.identity)&&(null!=(o=t.get(e.identity))?o:[]).forEach(t=>{r.find(({participant:n,publication:r})=>e.identity===n.identity&&r.source===t)||(ec.debug(`Add ${t} placeholder for participant ${e.identity}.`),n.push({participant:e,source:t}))})}),n}},[r,i,e])}function eR(e){return void 0!==e}function eL(e,t={}){var n;let[r,o]=c.useState(el(e)),[i,u]=c.useState(null==r?void 0:r.isMuted),[l,s]=c.useState(null==r?void 0:r.isSubscribed),[f,d]=c.useState(null==r?void 0:r.track),[p,h]=c.useState("landscape"),v=c.useRef(),{className:b,trackObserver:y}=c.useMemo(()=>(function(e){var t;let n=el(e),r=(function(e,...t){return new L(n=>{let r=()=>{n.next(e)};return t.forEach(t=>{e.on(t,r)}),()=>{t.forEach(t=>{e.off(t,r)})}}).pipe(en(e))})(e.participant,a.dd.TrackMuted,a.dd.TrackUnmuted,a.dd.ParticipantPermissionsChanged,a.dd.TrackPublished,a.dd.TrackUnpublished,a.dd.LocalTrackPublished,a.dd.LocalTrackUnpublished,a.dd.MediaDevicesError,a.dd.TrackSubscriptionStatusChanged).pipe(D(e=>{let{isMicrophoneEnabled:t,isCameraEnabled:n,isScreenShareEnabled:r}=e,o=e.getTrackPublication(a.fQ.Source.Microphone);return{isCameraEnabled:n,isMicrophoneEnabled:t,isScreenShareEnabled:r,cameraTrack:e.getTrackPublication(a.fQ.Source.Camera),microphoneTrack:o,participant:e}})).pipe(D(()=>el(e)),en(n));return{className:(t=e.source===a.fQ.Source.Camera||e.source===a.fQ.Source.ScreenShare?"participant-media-video":"participant-media-audio",`lk-${t}`),trackObserver:r}})(e),[null!=(n=e.participant.sid)?n:e.participant.identity,e.source,er(e)&&e.publication.trackSid]);return c.useEffect(()=>{let e=y.subscribe(e=>{ec.debug("update track",e),o(e),u(null==e?void 0:e.isMuted),s(null==e?void 0:e.isSubscribed),d(null==e?void 0:e.track)});return()=>null==e?void 0:e.unsubscribe()},[y]),c.useEffect(()=>{var n,r;return f&&(v.current&&f.detach(v.current),(null==(n=t.element)?void 0:n.current)&&!(eo(e.participant)&&(null==f?void 0:f.kind)==="audio")&&f.attach(t.element.current)),v.current=null==(r=t.element)?void 0:r.current,()=>{v.current&&(null==f||f.detach(v.current))}},[f,t.element]),c.useEffect(()=>{var e,t;"number"==typeof(null==(e=null==r?void 0:r.dimensions)?void 0:e.width)&&"number"==typeof(null==(t=null==r?void 0:r.dimensions)?void 0:t.height)&&h(r.dimensions.width>r.dimensions.height?"landscape":"portrait")},[r]),{publication:r,isMuted:i,isSubscribed:l,track:f,elementProps:function(...e){return eQ(...e.filter(eR))}(t.props,ew({className:b,"data-lk-local-participant":e.participant.isLocal,"data-lk-source":null==r?void 0:r.source},(null==r?void 0:r.kind)==="video"&&{"data-lk-orientation":p}))}}function eU(e){var{onTrackClick:t,onClick:n,onSubscriptionStatusChanged:r,trackRef:o,manageSubscription:i}=e,u=eS(e,["onTrackClick","onClick","onSubscriptionStatusChanged","trackRef","manageSubscription"]);let l=eE(o),s=c.useRef(null),f=function(e,t){var n;let r="current"in e,o=r?t:e,{threshold:i=0,root:u=null,rootMargin:a="0%",freezeOnceVisible:l=!1,initialIsIntersecting:s=!1}=o??{},[f,d]=(0,c.useState)(null),p=r?e.current:f,[h,v]=(0,c.useState)(()=>({isIntersecting:s,entry:void 0})),b=(0,c.useRef)();b.current=null==o?void 0:o.onChange;let y=(null==(n=h.entry)?void 0:n.isIntersecting)&&l;(0,c.useEffect)(()=>{let e;if(!p||!("IntersectionObserver"in window)||y)return;let t=new IntersectionObserver(n=>{let r=Array.isArray(t.thresholds)?t.thresholds:[t.thresholds];n.forEach(t=>{let n=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);v({isIntersecting:n,entry:t}),b.current&&b.current(n,t),n&&l&&e&&(e(),e=void 0)})},{threshold:i,root:u,rootMargin:a});return t.observe(p),()=>{t.disconnect()}},[p,JSON.stringify(i),u,a,y,l]);let m=(0,c.useRef)(null);if((0,c.useEffect)(()=>{var e;p||null==(e=h.entry)||!e.target||l||y||m.current===h.entry.target||(m.current=h.entry.target,v({isIntersecting:s,entry:void 0}))},[p,h.entry,l,y,s]),r)return h.entry;let g=[d,!!h.isIntersecting,h.entry];return g.ref=g[0],g.isIntersecting=g[1],g.entry=g[2],g}(s,{}),d=function(e,t){let[n,r]=(0,c.useState)(e);return(0,c.useEffect)(()=>{let t=setTimeout(()=>{r(e)},3e3);return()=>{clearTimeout(t)}},[e,3e3]),n}(f,0);c.useEffect(()=>{i&&l.publication instanceof a.E8&&(null==d?void 0:d.isIntersecting)===!1&&(null==f?void 0:f.isIntersecting)===!1&&l.publication.setSubscribed(!1)},[d,l,i]),c.useEffect(()=>{i&&l.publication instanceof a.E8&&(null==f?void 0:f.isIntersecting)===!0&&l.publication.setSubscribed(!0)},[f,l,i]);let{elementProps:p,publication:h,isSubscribed:v}=eL(l,{element:s,props:u});return c.useEffect(()=>{null==r||r(!!v)},[v,r]),c.createElement("video",eT(ew({ref:s},p),{muted:!0,onClick:e=>{null==n||n(e),null==t||t({participant:null==l?void 0:l.participant,track:h})}}))}function eN(e){var{trackRef:t,onSubscriptionStatusChanged:n,volume:r}=e,o=eS(e,["trackRef","onSubscriptionStatusChanged","volume"]);let i=eE(t),u=c.useRef(null),{elementProps:l,isSubscribed:s,track:f,publication:d}=eL(i,{element:u,props:o});return c.useEffect(()=>{null==n||n(!!s)},[s,n]),c.useEffect(()=>{void 0!==f&&void 0!==r&&(f instanceof a.rl?f.setVolume(r):ec.warn("Volume can only be set on remote audio tracks."))},[r,f]),c.useEffect(()=>{void 0!==d&&void 0!==o.muted&&(d instanceof a.E8?d.setEnabled(!o.muted):ec.warn("Can only call setEnabled on remote track publications."))},[o.muted,d,f]),c.createElement("audio",ew({ref:u},l))}function ej(e){let{room:t,htmlProps:n}=function(e){let t=ew(ew({},eA),e),{token:n,serverUrl:r,options:o,room:i,connectOptions:u,connect:l,audio:s,video:f,screen:d,onConnected:p,onDisconnected:h,onError:v,onMediaDeviceFailure:b,onEncryptionError:y,simulateParticipants:m}=t,g=eS(t,["token","serverUrl","options","room","connectOptions","connect","audio","video","screen","onConnected","onDisconnected","onError","onMediaDeviceFailure","onEncryptionError","simulateParticipants"]);o&&i&&ec.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");let[w,T]=c.useState();c.useEffect(()=>{T(null!=i?i:new a.du(o))},[i]);let S=c.useMemo(()=>{let{className:e}={className:"lk-room-container"};return eQ(g,{className:e})},[g]);return c.useEffect(()=>{if(!w)return;let e=()=>{let e=w.localParticipant;ec.debug("trying to publish local tracks"),Promise.all([e.setMicrophoneEnabled(!!s,"boolean"!=typeof s?s:void 0),e.setCameraEnabled(!!f,"boolean"!=typeof f?f:void 0),e.setScreenShareEnabled(!!d,"boolean"!=typeof d?d:void 0)]).catch(e=>{ec.warn(e),null==v||v(e)})},t=e=>{let t=a.CB.getFailure(e);null==b||b(t)},n=e=>{null==y||y(e)};return w.on(a.TQ.SignalConnected,e).on(a.TQ.MediaDevicesError,t).on(a.TQ.EncryptionError,n),()=>{w.off(a.TQ.SignalConnected,e).off(a.TQ.MediaDevicesError,t).off(a.TQ.EncryptionError,n)}},[w,s,f,d,v,y,b]),c.useEffect(()=>{if(w){if(m){w.simulateParticipants({participants:{count:m},publish:{audio:!0,useRealTracks:!0}});return}if(!n){ec.debug("no token yet");return}if(!r){ec.warn("no livekit url provided"),null==v||v(Error("no livekit url provided"));return}l?(ec.debug("connecting"),w.connect(r,n,u).catch(e=>{ec.warn(e),null==v||v(e)})):(ec.debug("disconnecting because connect is false"),w.disconnect())}},[l,n,JSON.stringify(u),w,v,r,m]),c.useEffect(()=>{if(!w)return;let e=e=>{switch(e){case a.em.Disconnected:h&&h();break;case a.em.Connected:p&&p()}};return w.on(a.TQ.ConnectionStateChanged,e),()=>{w.off(a.TQ.ConnectionStateChanged,e)}},[n,p,h,w]),c.useEffect(()=>{if(w)return()=>{ec.info("disconnecting on onmount"),w.disconnect()}},[w]),{room:w,htmlProps:S}}(e);return c.createElement("div",ew({},n),t&&c.createElement(eC.Provider,{value:t},c.createElement(eO.Provider,{value:e.featureFlags},e.children)))}function eM({volume:e,muted:t}){let n=eI([a.fQ.Source.Microphone,a.fQ.Source.ScreenShareAudio,a.fQ.Source.Unknown],{updateOnlyOn:[],onlySubscribed:!1}).filter(e=>!eo(e.participant)&&e.publication.kind===a.fQ.Kind.Audio);return c.useEffect(()=>{for(let e of n)e.publication.setSubscribed(!0)},[n]),c.createElement("div",{style:{display:"none"}},n.map(n=>c.createElement(eN,{key:function(e){if("string"==typeof e||"number"==typeof e)return`${e}`;if(e&&e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&void 0===e.publication)return`${e.participant.identity}_${e.source}_placeholder`;if(er(e))return`${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;throw Error(`Can't generate a id for the given track reference: ${e}`)}(n),trackRef:n,volume:e,muted:t})))}}}]);
//# sourceMappingURL=5767.4d41d994c07a41ae.js.map