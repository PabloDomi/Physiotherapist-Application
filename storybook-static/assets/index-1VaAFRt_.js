import{r as c,R as _}from"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import{c as O,R as k,N as x,s as F,u as P,a as B,b as N,d as j,e as y}from"./index-CeseEJRd.js";/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},m.apply(this,arguments)}function I(e,n){if(e==null)return{};var i={},t=Object.keys(e),s,a;for(a=0;a<t.length;a++)s=t[a],!(n.indexOf(s)>=0)&&(i[s]=e[s]);return i}function K(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,n){return e.button===0&&(!n||n==="_self")&&!K(e)}const V=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],W="6";try{window.__reactRouterVersion=W}catch{}const z="startTransition",g=_[z];function Q(e){let{basename:n,children:i,future:t,window:s}=e,a=c.useRef();a.current==null&&(a.current=O({window:s,v5Compat:!0}));let o=a.current,[u,l]=c.useState({action:o.action,location:o.location}),{v7_startTransition:r}=t||{},f=c.useCallback(d=>{r&&g?g(()=>l(d)):l(d)},[l,r]);return c.useLayoutEffect(()=>o.listen(f),[o,f]),c.createElement(k,{basename:n,children:i,location:u.location,navigationType:u.action,navigator:o,future:t})}const G=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=c.forwardRef(function(n,i){let{onClick:t,relative:s,reloadDocument:a,replace:o,state:u,target:l,to:r,preventScrollReset:f,unstable_viewTransition:d}=n,w=I(n,V),{basename:U}=c.useContext(x),R,v=!1;if(typeof r=="string"&&M.test(r)&&(R=r,G))try{let h=new URL(window.location.href),p=r.startsWith("//")?new URL(h.protocol+r):new URL(r),b=F(p.pathname,U);p.origin===h.origin&&b!=null?r=b+p.search+p.hash:v=!0}catch{}let C=P(r,{relative:s}),E=X(r,{replace:o,state:u,target:l,preventScrollReset:f,relative:s,unstable_viewTransition:d});function L(h){t&&t(h),h.defaultPrevented||E(h)}return c.createElement("a",m({},w,{href:R||C,onClick:v||a?t:L,ref:i,target:l}))});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(S||(S={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function X(e,n){let{target:i,replace:t,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:u}=n===void 0?{}:n,l=B(),r=N(),f=j(e,{relative:o});return c.useCallback(d=>{if(A(d,i)){d.preventDefault();let w=t!==void 0?t:y(r)===y(f);l(e,{replace:w,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:u})}},[r,l,f,t,s,i,e,a,o,u])}export{Q as B,Y as L};
