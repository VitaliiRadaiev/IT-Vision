/*!
 * ScrollSmoother 3.12.0
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
//!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return O||s()&&(O=window.gsap)&&O.registerPlugin&&O}function w(){return String.fromCharCode.apply(null,arguments)}var O,U,B,I,N,V,j,Q,Y,q,D,X,$,K,Z,i="ScrollSmoother",a=w(103,114,101,101,110,115,111,99,107,46,99,111,109),l=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,r=(function(e){var t="undefined"!=typeof window,r=0===(t?window.location.href:"").indexOf(w(102,105,108,101,58,47,47))||-1!==e.indexOf(w(108,111,99,97,108,104,111,115,116))||l.test(e),n=[a,w(99,111,100,101,112,101,110,46,105,111),w(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),w(99,111,100,101,112,101,110,46,100,101,118),w(99,111,100,101,112,101,110,46,97,112,112),w(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),w(112,101,110,115,46,99,108,111,117,100),w(99,115,115,45,116,114,105,99,107,115,46,99,111,109),w(99,100,112,110,46,105,111),w(112,101,110,115,46,105,111),w(103,97,110,110,111,110,46,116,118),w(99,111,100,101,99,97,110,121,111,110,46,110,101,116),w(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),w(99,101,114,101,98,114,97,120,46,99,111,46,117,107),w(116,121,109,112,97,110,117,115,46,110,101,116),w(116,119,101,101,110,109,97,120,46,99,111,109),w(112,108,110,107,114,46,99,111),w(104,111,116,106,97,114,46,99,111,109),w(119,101,98,112,97,99,107,98,105,110,46,99,111,109),w(97,114,99,104,105,118,101,46,111,114,103),w(99,111,100,101,115,97,110,100,98,111,120,46,105,111),w(99,115,98,46,97,112,112),w(115,116,97,99,107,98,108,105,116,122,46,99,111,109),w(115,116,97,99,107,98,108,105,116,122,46,105,111),w(99,111,100,105,101,114,46,105,111),w(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),w(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),w(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),w(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),w(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),w(118,101,114,99,101,108,46,97,112,112),w(110,101,116,108,105,102,121,46,97,112,112),w(106,115,102,105,100,100,108,101,46,110,101,116)],o=n.length;for(setTimeout(function checkWarn(){if(t)if("loading"===document.readyState||"interactive"===document.readyState)document.addEventListener("readystatechange",checkWarn);else{document.removeEventListener("readystatechange",checkWarn);var e="object"==typeof O?O:t&&window.gsap;t&&window.console&&!window._gsapWarned&&"object"==typeof e&&!1!==e.config().trialWarn&&(console.log(w(37,99,87,97,114,110,105,110,103),w(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(w(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+i+w(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(w(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),w(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},50);-1<--o;)if(-1!==e.indexOf(n[o]))return;r||setTimeout(function(){t&&(window.location.href=w(104,116,116,112,115,58,47,47)+a+w(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+i+"&source=trial")},4e3)}("undefined"!=typeof window?window.location.host:""),ScrollSmoother.register=function register(e){return U||(O=e||t(),s()&&window.document&&(B=window,I=document,N=I.documentElement,V=I.body),O&&(j=O.utils.toArray,Q=O.utils.clamp,D=O.parseEase("expo"),K=O.core.context||function(){},Z=O.delayedCall(.2,function(){return Y.isRefreshing||q&&q.refresh()}).pause(),Y=O.core.globals().ScrollTrigger,O.core.globals("ScrollSmoother",ScrollSmoother),V&&Y&&(X=Y.core._getVelocityProp,$=Y.core._inputObserver,ScrollSmoother.refresh=Y.refresh,U=1))),U},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;U||ScrollSmoother.register(O)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},q&&q.kill(),K(q=this);function La(){return L.update(-A)}function Na(){return n.style.overflow="visible"}function Pa(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),h=!1,e.animation.progress(e.progress,!0)}function Qa(e,t){(e!==A&&!u||t)&&(R&&(e=Math.round(e)),k&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),H=e-A,A=e,Y.isUpdating||ScrollSmoother.isRefreshing||Y.update())}function Ra(e){return arguments.length?(e<0&&(e=0),M.y=-e,h=!0,u?A=-e:Qa(-e),Y.isRefreshing?i.update():E(e/C),this):-A}function Ua(e){v.scrollTop=0,e.target.contains&&e.target.contains(v)||T&&!1===T(o,e)||(Y.isInViewport(e.target)||e.target===g||o.scrollTo(e.target,!1,"center center"),g=e.target)}function Va(e){var r,n,o,i;S.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){t.trigger&&e.trigger&&t!==e&&(e.trigger===t.trigger||e.pinnedContainer===t.trigger||t.trigger.contains(e.trigger))&&(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(O.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function Wa(){Na(),requestAnimationFrame(Na),S&&(S.forEach(function(e){var t=e.start,r=e.auto?Math.min(Y.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.relSpeed&&(e.start<0?(t=0,n=(r=e.end/e.ratio)-e.end):e.end>Y.maxScroll(e.scroller)&&(r=Y.maxScroll(e.scroller),t=e.relSpeed<0&&1<e.ratio?0:r-(r-e.start)/e.ratio,n*=2)),e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Va(Y.sort())),L.reset()}function Xa(){return Y.addEventListener("refresh",Wa)}function Ya(){return S&&S.forEach(function(e){return e.vars.onRefresh(e)})}function Za(){return S&&S.forEach(function(e){return e.vars.onRefreshInit(e)}),Ya}function $a(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+_+t)||("speed"===t?1:0)),o.setAttribute("data-"+_+t,e),"="===(e+"").charAt(1)?e.substr(2)+"_"+e.charAt(0)+"1":e}}function _a(r,e,t,n,o){function Rb(){e=f(),t=parseFloat(d()),i=parseFloat(e)||1,c=(a="auto"===e)||s&&0<s.relSpeed?0:s&&s.relSpeed<0?1:.5,l&&l.kill(),l=t&&O.to(r,{ease:D,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function Sb(){g.y=h+"px",g.renderTransform(1),Rb()}function Wb(e){if(a){Sb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||N,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),u=-c*t;return 0<c&&(n=.5==(r=s.height/(B.innerHeight+s.height))?2*s.height:2*Math.min(s.height,-c*r/(2*r-1))*(t||1),u+=t?-n*t:-n/2,c+=n),{change:c,offset:u}}(r,Q(0,1,-e.start/(e.end-e.start)));m=t.change,u=t.offset}else m=(e.end-e.start)*(1-i),u=0;p.forEach(function(e){return m-=e.distance*(1-i)}),e.relSpeed<0&&1<i&&(m*=-i),e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,u,f=$a("speed",e,n,r),d=$a("lag",t,n,r),h=O.getProperty(r,"y"),g=r._gsap,p=[],w=[],m=0;return Rb(),(1!==i||a||l)&&(Wb(s=Y.create({trigger:a?r.parentNode:r,start:"top bottom+="+o,end:"bottom top-="+o,scroller:v,scrub:!0,refreshPriority:-999,onRefreshInit:Sb,onRefresh:Wb,onKill:function onKill(e){var t=S.indexOf(e);0<=t&&S.splice(t,1),Sb()},onUpdate:function onUpdate(e){var t,r,n,o=h+m*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-A,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-H,!0),W&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=h+s+m*((O.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),w.length&&!a&&w.forEach(function(e){return e(o-s)}),l?(l.resetTo("y",o,-H,!0),W&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),O.core.getCache(s.trigger).stRevert=Za,s.startY=h,s.pins=p,s.markers=w,s.ratio=i,s.relSpeed=parseFloat((e+"").split("_")[1])||0,s.autoSpeed=a,r.style.willChange="transform"),s}var n,v,e,i,S,s,a,l,c,u,r,f,d,h,g,p=t.smoothTouch,w=t.onUpdate,m=t.onStop,b=t.smooth,T=t.onFocusIn,x=t.normalizeScroll,R=t.wholePixels,P=this,_=t.effectsPrefix||"",E=Y.getScrollFunc(B),k=1===Y.isTouch?!0===p?.8:parseFloat(p)||0:0===b||!1===b?0:parseFloat(b)||.8,C=k&&+t.speed||1,A=0,H=0,W=1,L=X(0),M={y:0},z="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){if(!Y.isRefreshing){var e=Y.maxScroll(v);e<-A&&Ra(e),Z.restart(!0)}});function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",V.style.height=B.innerHeight+(e-B.innerHeight)/C+"px",e-B.innerHeight}Xa(),Y.addEventListener("killAll",Xa),O.delayedCall(.5,function(){return W=0}),this.scrollTop=Ra,this.scrollTo=function(e,t,r){var n=O.utils.clamp(0,Y.maxScroll(B),isNaN(e)?o.offset(e,r):+e);t?u?O.to(o,{duration:k,scrollTop:n,overwrite:"auto",ease:D}):E(n):Ra(n)},this.offset=function(e,t){var r,n=(e=j(e)[0]).style.cssText,o=Y.create({trigger:e,start:t||"top top"});return S&&Va([o]),r=o.start/C,o.kill(!1),e.style.cssText=n,O.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=j(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||V.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",z&&z.observe(n),O.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||O.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(v=j(e||"#smooth-wrapper")[0]||function _wrap(e){var t=I.querySelector(".ScrollSmoother-wrapper");return t||((t=I.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=v.getAttribute("style")||"",refreshHeight(),O.set(v,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):v},this.effects=function(e,t){if(S=S||[],!e)return S.slice(0);(e=j(e)).forEach(function(e){for(var t=S.length;t--;)S[t].trigger===e&&S[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=_a(e[r],o,i,r,s))&&a.push(n);return S.push.apply(S,a),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=j(e).map(function(t){return Y.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Qa(e||0===e?e:A)},this.getVelocity=function(){return L.getVelocity(-A)},Y.scrollerProxy(v,{scrollTop:Ra,scrollHeight:function scrollHeight(){return refreshHeight()&&V.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!k,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:B.innerWidth,height:B.innerHeight}}}),Y.defaults({scroller:v});var F=Y.getAll().filter(function(e){return e.scroller===B||e.scroller===v});F.forEach(function(e){return e.revert(!0,!0)}),i=Y.create({animation:O.fromTo(M,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=h;e&&(Pa(i),M.y=A),Qa(M.y,e),La(),w&&!u&&w(P)}}}),onRefreshInit:function onRefreshInit(e){if(ScrollSmoother.isRefreshing=!0,S){var t=Y.getAll().filter(function(e){return!!e.pin});S.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();d=r&&r._end>r._dp._time,f=A,M.y=0,k&&(1===Y.isTouch&&(v.style.position="absolute"),v.scrollTop=0,1===Y.isTouch&&(v.style.position="fixed"))},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/C),d||Pa(e),M.y=-E()*C,Qa(M.y),W||e.animation.progress(O.utils.clamp(0,1,f/C/-e.end)),d&&(e.progress-=.001,e.update()),ScrollSmoother.isRefreshing=!1},id:"ScrollSmoother",scroller:B,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/C},onScrubComplete:function onScrubComplete(){L.reset(),m&&m(o)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(C=(k=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||D),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+_+"speed], [data-"+_+"lag]":t.effects,{effectsPadding:t.effectsPadding}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),F.forEach(function(e){e.vars.scroller=v,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!u!==e&&(e?(i.getTween()&&i.getTween().pause(),E(-A/C),L.reset(),(r=Y.normalizeScroll())&&r.disable(),(u=Y.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Ra(-A)}})).nested=$(N,"wheel,touch,scroll",!0,!1!==t)):(u.nested.kill(),u.kill(),u=0,r&&r.enable(),i.progress=(-A/C-i.start)/(i.end-i.start),Pa(i))),this):!!u},this.kill=this.revert=function(){o.paused(!1),Pa(i),i.kill();for(var e=(S||[]).concat(s||[]),t=e.length;t--;)e[t].kill();Y.scrollerProxy(v),Y.removeEventListener("killAll",Xa),Y.removeEventListener("refresh",Wa),v.style.cssText=l,n.style.cssText=c;var r=Y.defaults({});r&&r.scroller===v&&Y.defaults({scroller:B}),o.normalizer&&Y.normalizeScroll(!1),clearInterval(a),q=null,z&&z.disconnect(),V.style.removeProperty("height"),B.removeEventListener("focusin",Ua)},this.refresh=function(e,t){return i.refresh(e,t)},x&&(this.normalizer=Y.normalizeScroll(!0===x?{debounce:!0,content:!k&&n}:x)),Y.config(t),"overscrollBehavior"in B.getComputedStyle(V)&&O.set([V,N],{overscrollBehavior:"none"}),"scrollBehavior"in B.getComputedStyle(V)&&O.set([V,N],{scrollBehavior:"auto"}),B.addEventListener("focusin",Ua),a=setInterval(La,250),"loading"===I.readyState||requestAnimationFrame(function(){return Y.refresh()})}r.version="3.11.6",r.create=function(e){return q&&e&&q.content()===j(e.content)[0]?q:new r(e)},r.get=function(){return q},t()&&O.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
!
function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
        "use strict";

        function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
        }
        function s() {
                return "undefined" != typeof window
        }
        function t() {
                return L || s() && (L = window.gsap) && L.registerPlugin && L
        }
        function w() {
                return String.fromCharCode.apply(null, arguments)
        }
        function C(e) {
                return D.maxScroll(e || N)
        }
        var L, I, N, U, Y, j, $, q, D, V, X, Z, K, G, J, i = "ScrollSmoother",
                a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                l = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
                r = (function (e) {
                        var t = "undefined" != typeof window,
                                r = 0 === (t ? window.location.href : "").indexOf(w(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) || l.test(e),
                                n = [a, w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), w(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), w(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(99, 100, 112, 110, 46, 105, 111), w(112, 101, 110, 115, 46, 105, 111), w(103, 97, 110, 110, 111, 110, 46, 116, 118), w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), w(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), w(112, 108, 110, 107, 114, 46, 99, 111), w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), w(99, 115, 98, 46, 97, 112, 112), w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), w(99, 111, 100, 105, 101, 114, 46, 105, 111), w(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), w(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), w(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
                                o = n.length;
                        for (setTimeout(function checkWarn() {
                                // if (t) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", checkWarn);
                                // else {
                                //         document.removeEventListener("readystatechange", checkWarn);
                                //         var e = "object" == typeof L ? L : t && window.gsap;
                                //         t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && (console.log(w(37, 99, 87, 97, 114, 110, 105, 110, 103), w(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(w(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + i + w(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(w(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), w(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                                // }
                        }, 50); - 1 < --o;) if (-1 !== e.indexOf(n[o])) return;
                        r || setTimeout(function () {
                                t && (window.location.href = w(104, 116, 116, 112, 115, 58, 47, 47) + a + w(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + i + "&source=trial")
                        }, 4e3)
                }("undefined" != typeof window ? window.location.host : ""), ScrollSmoother.register = function register(e) {
                        return I || (L = e || t(), s() && window.document && (N = window, U = document, Y = U.documentElement, j = U.body), L && ($ = L.utils.toArray, q = L.utils.clamp, X = L.parseEase("expo"), G = L.core.context ||
                        function () {}, J = L.delayedCall(.2, function () {
                                return D.isRefreshing || V && V.refresh()
                        }).pause(), D = L.core.globals().ScrollTrigger, L.core.globals("ScrollSmoother", ScrollSmoother), j && D && (Z = D.core._getVelocityProp, K = D.core._inputObserver, ScrollSmoother.refresh = D.refresh, I = 1))),
                        I
                }, function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t),
                        r && _defineProperties(e, r),
                        e
                }(ScrollSmoother, [{
                        key: "progress",
                        get: function get() {
                                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
                        }
                }]), ScrollSmoother);

        function ScrollSmoother(t) {
                var o = this;
                I || ScrollSmoother.register(L) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                t = this.vars = t || {},
                V && V.kill(),
                G(V = this);

                function Na() {
                        return O.update(-A)
                }
                function Pa() {
                        return n.style.overflow = "visible"
                }
                function Ra(e) {
                        e.update();
                        var t = e.getTween();
                        t && (t.pause(), t._time = t._dur, t._tTime = t._tDur),
                        h = !1,
                        e.animation.progress(e.progress, !0)
                }
                function Sa(e, t) {
                        (e !== A && !u || t) && (R && (e = Math.round(e)), k && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", n._gsap.y = e + "px"), z = e - A, A = e, D.isUpdating || ScrollSmoother.isRefreshing || D.update())
                }
                function Ta(e) {
                        return arguments.length ? (e < 0 && (e = 0), W.y = -e, h = !0, u ? A = -e : Sa(-e), D.isRefreshing ? i.update() : E(e / H), this) : -A
                }
                function Wa(e) {
                        v.scrollTop = 0,
                        e.target.contains && e.target.contains(v) || T && !1 === T(o, e) || (D.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), g = e.target)
                }
                function Xa(e, t) {
                        if (e < t.start) return e;
                        var r = t._startClamp && !t.start ? 0 : t._endClamp && t.end === C() ? 1 : .5,
                                n = Math.min(t.start + (t.end - t.start) * t.ratio, e) - t.start;
                        return e + (n - 2 * t.offset * r) / t.ratio - n
                }
                function Ya(e) {
                        var r, n, o, i, a;
                        S.forEach(function (t) {
                                r = t.pins,
                                a = t.markers,
                                e.forEach(function (e) {
                                        t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = Xa(e._startClamp || e.start, t), i = 0, r.forEach(function (e) {
                                                return i -= e.distance / t.ratio - e.distance
                                        }), n += i, o = e.pin && 0 < e.end ? n + (e.end - e.start) : Xa(e._endClamp || e.end, t) + i, e._startClamp && n < 0 && (n = 0), e._endClamp && o > C() && (o = C()), e.setPositions(n, o, !0, n - e.start), e.markerStart && a.push(L.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (i = e.end - e.start, r.push({
                                                start: e.start,
                                                end: e.end,
                                                distance: i,
                                                trig: e
                                        }), t.setPositions(t.start, t.end + i, !0), t.vars.onRefresh(t)))
                                })
                        })
                }
                function Za() {
                        Pa(),
                        requestAnimationFrame(Pa),
                        S && (S.forEach(function (e) {
                                var t = e.start,
                                        r = e.auto ? Math.min(C(), e.end) : t + (e.end - t) / e.ratio,
                                        n = (r - e.end) / 2;
                                if ((r -= n) < (t -= n)) {
                                        var o = t;
                                        t = r,
                                        r = o
                                }
                                e._startClamp && !e.start ? (n = (r += e.start - t) - e.end, t = 0) : e._endClamp && e.end === C() && (n = ((r = C()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)),
                                e.offset = n || 1e-4,
                                e.pins.length = 0,
                                e._origStart = e.start,
                                e._origEnd = e.end,
                                e.setPositions(t, r, !0),
                                e.vars.onRefresh(e)
                        }), Ya(D.sort())),
                        O.reset()
                }
                function $a() {
                        return D.addEventListener("refresh", Za)
                }
                function _a() {
                        return S && S.forEach(function (e) {
                                return e.vars.onRefresh(e)
                        })
                }
                function ab() {
                        return S && S.forEach(function (e) {
                                return e.vars.onRefreshInit(e)
                        }),
                        _a
                }
                function bb(r, n, o, i) {
                        return function () {
                                var e = "function" == typeof n ? n(o, i) : n;
                                e || 0 === e || (e = i.getAttribute("data-" + P + r) || ("speed" === r ? 1 : 0)),
                                i.setAttribute("data-" + P + r, e);
                                var t = "clamp(" === (e + "").substr(0, 6);
                                return {
                                        clamp: t,
                                        value: t ? e.substr(6, e.length - 7) : e
                                }
                        }
                }
                function cb(r, e, t, n, o) {
                        function _b() {
                                e = f(),
                                t = parseFloat(d().value),
                                i = parseFloat(e.value) || 1,
                                s = "auto" === e.value,
                                c = s || a && a._startClamp && !a.start ? 0 : a && a._endClamp && a.end === C() ? 1 : .5,
                                l && l.kill(),
                                l = t && L.to(r, {
                                        ease: X,
                                        overwrite: !1,
                                        y: "+=0",
                                        duration: t
                                }),
                                a && (a.ratio = i, a.autoSpeed = s)
                        }
                        function ac() {
                                g.y = h + "px",
                                g.renderTransform(1),
                                _b()
                        }
                        function ec(e) {
                                if (s) {
                                        ac();
                                        var t = function _autoDistance(e, t) {
                                                var r, n, o = e.parentNode || Y,
                                                        i = e.getBoundingClientRect(),
                                                        a = o.getBoundingClientRect(),
                                                        s = a.top - i.top,
                                                        l = a.bottom - i.bottom,
                                                        c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
                                                        u = -c * t;
                                                return 0 < c && (n = .5 == (r = a.height / (N.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, -c * r / (2 * r - 1)) * (t || 1), u += t ? -n * t : -n / 2, c += n),
                                                {
                                                        change: c,
                                                        offset: u
                                                }
                                        }(r, q(0, 1, -e.start / (e.end - e.start)));
                                        w = t.change,
                                        u = t.offset
                                } else w = (e.end - e.start) * (1 - i),
                                u = 0;
                                p.forEach(function (e) {
                                        return w -= e.distance * (1 - i)
                                }),
                                e.vars.onUpdate(e),
                                l && l.progress(1)
                        }
                        o = ("function" == typeof o ? o(n, r) : o) || 0;
                        var i, a, s, l, c, u, f = bb("speed", e, n, r),
                                d = bb("lag", t, n, r),
                                h = L.getProperty(r, "y"),
                                g = r._gsap,
                                p = [],
                                m = [],
                                w = 0;
                        return _b(),
                        (1 !== i || s || l) && (ec(a = D.create({
                                trigger: s ? r.parentNode : r,
                                start: e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                                end: e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                                scroller: v,
                                scrub: !0,
                                refreshPriority: -999,
                                onRefreshInit: ac,
                                onRefresh: ec,
                                onKill: function onKill(e) {
                                        var t = S.indexOf(e);
                                        0 <= t && S.splice(t, 1),
                                        ac()
                                },
                                onUpdate: function onUpdate(e) {
                                        var t, r, n, o = h + w * (e.progress - c),
                                                i = p.length,
                                                a = 0;
                                        if (e.offset) {
                                                if (i) {
                                                        for (r = -A, n = e.end; i--;) {
                                                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end) return void(l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -z, !0), M && l.progress(1)));
                                                                r > t.end && (a += t.distance),
                                                                n -= t.distance
                                                        }
                                                        o = h + a + w * ((L.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c)
                                                }
                                                o = function _round(e) {
                                                        return Math.round(1e5 * e) / 1e5 || 0
                                                }(o + u),
                                                m.length && !s && m.forEach(function (e) {
                                                        return e(o - a)
                                                }),
                                                l ? (l.resetTo("y", o, -z, !0), M && l.progress(1)) : (g.y = o + "px", g.renderTransform(1))
                                        }
                                }
                        })), L.core.getCache(a.trigger).stRevert = ab, a.startY = h, a.pins = p, a.markers = m, a.ratio = i, a.autoSpeed = s, r.style.willChange = "transform"),
                        a
                }
                var n, v, e, i, S, a, s, l, c, u, r, f, d, h, g, p = t.smoothTouch,
                        m = t.onUpdate,
                        w = t.onStop,
                        b = t.smooth,
                        T = t.onFocusIn,
                        _ = t.normalizeScroll,
                        R = t.wholePixels,
                        x = this,
                        P = t.effectsPrefix || "",
                        E = D.getScrollFunc(N),
                        k = 1 === D.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
                        H = k && +t.speed || 1,
                        A = 0,
                        z = 0,
                        M = 1,
                        O = Z(0),
                        W = {
                                y: 0
                        },
                        B = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function () {
                                if (!D.isRefreshing) {
                                        var e = C(v) * H;
                                        e < -A && Ta(e),
                                        J.restart(!0)
                                }
                        });

                function refreshHeight() {
                        return e = n.clientHeight,
                        n.style.overflow = "visible",
                        j.style.height = N.innerHeight + (e - N.innerHeight) / H + "px",
                        e - N.innerHeight
                }
                $a(),
                D.addEventListener("killAll", $a),
                L.delayedCall(.5, function () {
                        return M = 0
                }),
                this.scrollTop = Ta,
                this.scrollTo = function (e, t, r) {
                        var n = L.utils.clamp(0, C(), isNaN(e) ? o.offset(e, r) : +e);
                        t ? u ? L.to(o, {
                                duration: k,
                                scrollTop: n,
                                overwrite: "auto",
                                ease: X
                        }) : E(n) : Ta(n)
                },
                this.offset = function (e, t) {
                        var r, n = (e = $(e)[0]).style.cssText,
                                o = D.create({
                                        trigger: e,
                                        start: t || "top top"
                                });
                        return S && Ya([o]),
                        r = o.start / H,
                        o.kill(!1),
                        e.style.cssText = n,
                        L.core.getCache(e).uncache = 1,
                        r
                },
                this.content = function (e) {
                        if (arguments.length) {
                                var t = $(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || j.children[0];
                                return t !== n && (c = (n = t).getAttribute("style") || "", B && B.observe(n), L.set(n, {
                                        overflow: "visible",
                                        width: "100%",
                                        boxSizing: "border-box",
                                        y: "+=0"
                                }), k || L.set(n, {
                                        clearProps: "transform"
                                })),
                                this
                        }
                        return n
                },
                this.wrapper = function (e) {
                        return arguments.length ? (v = $(e || "#smooth-wrapper")[0] ||
                        function _wrap(e) {
                                var t = U.querySelector(".ScrollSmoother-wrapper");
                                return t || ((t = U.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)),
                                t
                        }(n), l = v.getAttribute("style") || "", refreshHeight(), L.set(v, k ? {
                                overflow: "hidden",
                                position: "fixed",
                                height: "100%",
                                width: "100%",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                        } : {
                                overflow: "visible",
                                position: "relative",
                                width: "100%",
                                height: "auto",
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                        }), this) : v
                },
                this.effects = function (e, t) {
                        if (S = S || [], !e) return S.slice(0);
                        (e = $(e)).forEach(function (e) {
                                for (var t = S.length; t--;) S[t].trigger === e && S[t].kill()
                        });
                        t = t || {};
                        var r, n, o = t.speed,
                                i = t.lag,
                                a = t.effectsPadding,
                                s = [];
                        for (r = 0; r < e.length; r++)(n = cb(e[r], o, i, r, a)) && s.push(n);
                        return S.push.apply(S, s),
                        s
                },
                this.sections = function (e, t) {
                        if (a = a || [], !e) return a.slice(0);
                        var r = $(e).map(function (t) {
                                return D.create({
                                        trigger: t,
                                        start: "top 120%",
                                        end: "bottom -20%",
                                        onToggle: function onToggle(e) {
                                                t.style.opacity = e.isActive ? "1" : "0",
                                                t.style.pointerEvents = e.isActive ? "all" : "none"
                                        }
                                })
                        });
                        return t && t.add ? a.push.apply(a, r) : a = r.slice(0),
                        r
                },
                this.content(t.content),
                this.wrapper(t.wrapper),
                this.render = function (e) {
                        return Sa(e || 0 === e ? e : A)
                },
                this.getVelocity = function () {
                        return O.getVelocity(-A)
                },
                D.scrollerProxy(v, {
                        scrollTop: Ta,
                        scrollHeight: function scrollHeight() {
                                return refreshHeight() && j.scrollHeight
                        },
                        fixedMarkers: !1 !== t.fixedMarkers && !! k,
                        content: n,
                        getBoundingClientRect: function getBoundingClientRect() {
                                return {
                                        top: 0,
                                        left: 0,
                                        width: N.innerWidth,
                                        height: N.innerHeight
                                }
                        }
                }),
                D.defaults({
                        scroller: v
                });
                var F = D.getAll().filter(function (e) {
                        return e.scroller === N || e.scroller === v
                });
                F.forEach(function (e) {
                        return e.revert(!0, !0)
                }),
                i = D.create({
                        animation: L.fromTo(W, {
                                y: 0
                        }, {
                                y: function y() {
                                        return -refreshHeight()
                                },
                                immediateRender: !1,
                                ease: "none",
                                data: "ScrollSmoother",
                                duration: 100,
                                onUpdate: function onUpdate() {
                                        if (this._dur) {
                                                var e = h;
                                                e && (Ra(i), W.y = A),
                                                Sa(W.y, e),
                                                Na(),
                                                m && !u && m(x)
                                        }
                                }
                        }),
                        onRefreshInit: function onRefreshInit(e) {
                                if (!ScrollSmoother.isRefreshing) {
                                        if (ScrollSmoother.isRefreshing = !0, S) {
                                                var t = D.getAll().filter(function (e) {
                                                        return !!e.pin
                                                });
                                                S.forEach(function (r) {
                                                        r.vars.pinnedContainer || t.forEach(function (e) {
                                                                if (e.pin.contains(r.trigger)) {
                                                                        var t = r.vars;
                                                                        t.pinnedContainer = e.pin,
                                                                        r.vars = null,
                                                                        r.init(t, r.animation)
                                                                }
                                                        })
                                                })
                                        }
                                        var r = e.getTween();
                                        d = r && r._end > r._dp._time,
                                        f = A,
                                        W.y = 0,
                                        k && (1 === D.isTouch && (v.style.position = "absolute"), v.scrollTop = 0, 1 === D.isTouch && (v.style.position = "fixed"))
                                }
                        },
                        onRefresh: function onRefresh(e) {
                                e.animation.invalidate(),
                                e.setPositions(e.start, refreshHeight() / H),
                                d || Ra(e),
                                W.y = -E() * H,
                                Sa(W.y),
                                M || e.animation.progress(L.utils.clamp(0, 1, f / H / -e.end)),
                                d && (e.progress -= .001, e.update()),
                                ScrollSmoother.isRefreshing = !1
                        },
                        id: "ScrollSmoother",
                        scroller: N,
                        invalidateOnRefresh: !0,
                        start: 0,
                        refreshPriority: -9999,
                        end: function end() {
                                return refreshHeight() / H
                        },
                        onScrubComplete: function onScrubComplete() {
                                O.reset(),
                                w && w(o)
                        },
                        scrub: k || !0
                }),
                this.smooth = function (e) {
                        return arguments.length && (H = (k = e || 0) && +t.speed || 1, i.scrubDuration(e)),
                        i.getTween() ? i.getTween().duration() : 0
                },
                i.getTween() && (i.getTween().vars.ease = t.ease || X),
                this.scrollTrigger = i,
                t.effects && this.effects(!0 === t.effects ? "[data-" + P + "speed], [data-" + P + "lag]" : t.effects, {
                        effectsPadding: t.effectsPadding
                }),
                t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
                F.forEach(function (e) {
                        e.vars.scroller = v,
                        e.revert(!1, !0),
                        e.init(e.vars, e.animation)
                }),
                this.paused = function (e, t) {
                        return arguments.length ? ( !! u !== e && (e ? (i.getTween() && i.getTween().pause(), E(-A / H), O.reset(), (r = D.normalizeScroll()) && r.disable(), (u = D.observe({
                                preventDefault: !0,
                                type: "wheel,touch,scroll",
                                debounce: !1,
                                allowClicks: !0,
                                onChangeY: function onChangeY() {
                                        return Ta(-A)
                                }
                        })).nested = K(Y, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(), u.kill(), u = 0, r && r.enable(), i.progress = (-A / H - i.start) / (i.end - i.start), Ra(i))), this) : !! u
                },
                this.kill = this.revert = function () {
                        o.paused(!1),
                        Ra(i),
                        i.kill();
                        for (var e = (S || []).concat(a || []), t = e.length; t--;) e[t].kill();
                        D.scrollerProxy(v),
                        D.removeEventListener("killAll", $a),
                        D.removeEventListener("refresh", Za),
                        v.style.cssText = l,
                        n.style.cssText = c;
                        var r = D.defaults({});
                        r && r.scroller === v && D.defaults({
                                scroller: N
                        }),
                        o.normalizer && D.normalizeScroll(!1),
                        clearInterval(s),
                        V = null,
                        B && B.disconnect(),
                        j.style.removeProperty("height"),
                        N.removeEventListener("focusin", Wa)
                },
                this.refresh = function (e, t) {
                        return i.refresh(e, t)
                },
                _ && (this.normalizer = D.normalizeScroll(!0 === _ ? {
                        debounce: !0,
                        content: !k && n
                } : _)),
                D.config(t),
                "overscrollBehavior" in N.getComputedStyle(j) && L.set([j, Y], {
                        overscrollBehavior: "none"
                }),
                "scrollBehavior" in N.getComputedStyle(j) && L.set([j, Y], {
                        scrollBehavior: "auto"
                }),
                N.addEventListener("focusin", Wa),
                s = setInterval(Na, 250),
                "loading" === U.readyState || requestAnimationFrame(function () {
                        return D.refresh()
                })
        }
        r.version = "3.12.0",
        r.create = function (e) {
                return V && e && V.content() === $(e.content)[0] ? V : new r(e)
        },
        r.get = function () {
                return V
        },
        t() && L.registerPlugin(r),
        e.ScrollSmoother = r,
        e.
default = r;
        if (typeof(window) === "undefined" || window !== e) {
                Object.defineProperty(e, "__esModule", {
                        value: !0
                })
        } else {
                delete e.
        default
        }
});