import{j as y}from"./jsx-runtime-DoxjgJx5.js";import{_ as n}from"./extends-CCbyfPlC.js";import{_ as R}from"./objectWithoutPropertiesLoose-1QL-frMM.js";import{m as G,n as K,j as ee,o as re,e as q,p as te,q as se,t as oe,g as H,c as ne,T as ae,C as ie,a as ce,v as Z,s as I,b as M,w as J,u as le,f as ue}from"./styled-npw7yaFN.js";import{r as Q}from"./index-Cu9bd8lq.js";const de=["className","component"];function me(e={}){const{themeId:r,defaultTheme:t,defaultClassName:c="MuiBox-root",generateClassName:a}=e,d=G("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(K);return Q.forwardRef(function(s,o){const l=ee(t),S=re(s),{className:g,component:x="div"}=S,C=R(S,de);return y.jsx(d,n({as:x,ref:o,className:q(g,a?a(c):c),theme:r&&l[r]||l},C))})}const fe=["ownerState"],he=["variants"],pe=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function xe(e){return Object.keys(e).length===0}function ve(e){return typeof e=="string"&&e.charCodeAt(0)>96}function B(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ye=se(),Se=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function j({defaultTheme:e,theme:r,themeId:t}){return xe(r)?e:r[t]||r}function Ce(e){return e?(r,t)=>t[e]:null}function D(e,r){let{ownerState:t}=r,c=R(r,fe);const a=typeof e=="function"?e(n({ownerState:t},c)):e;if(Array.isArray(a))return a.flatMap(d=>D(d,n({ownerState:t},c)));if(a&&typeof a=="object"&&Array.isArray(a.variants)){const{variants:d=[]}=a;let i=R(a,he);return d.forEach(s=>{let o=!0;typeof s.props=="function"?o=s.props(n({ownerState:t},c,t)):Object.keys(s.props).forEach(l=>{(t==null?void 0:t[l])!==s.props[l]&&c[l]!==s.props[l]&&(o=!1)}),o&&(Array.isArray(i)||(i=[i]),i.push(typeof s.style=="function"?s.style(n({ownerState:t},c,t)):s.style))}),i}return a}function ke(e={}){const{themeId:r,defaultTheme:t=ye,rootShouldForwardProp:c=B,slotShouldForwardProp:a=B}=e,d=m=>K(n({},m,{theme:j(n({},m,{defaultTheme:t,themeId:r}))}));return d.__mui_systemSx=!0,(m,i={})=>{te(m,u=>u.filter(h=>!(h!=null&&h.__mui_systemSx)));const{name:s,slot:o,skipVariantsResolver:l,skipSx:S,overridesResolver:g=Ce(Se(o))}=i,x=R(i,pe),C=l!==void 0?l:o&&o!=="Root"&&o!=="root"||!1,P=S||!1;let $,k=B;o==="Root"||o==="root"?k=c:o?k=a:ve(m)&&(k=void 0);const _=G(m,n({shouldForwardProp:k,label:$},x)),O=u=>typeof u=="function"&&u.__emotion_real!==u||oe(u)?h=>D(u,n({},h,{theme:j({theme:h.theme,defaultTheme:t,themeId:r})})):u,E=(u,...h)=>{let F=O(u);const w=h?h.map(O):[];s&&g&&w.push(p=>{const f=j(n({},p,{defaultTheme:t,themeId:r}));if(!f.components||!f.components[s]||!f.components[s].styleOverrides)return null;const b=f.components[s].styleOverrides,N={};return Object.entries(b).forEach(([X,Y])=>{N[X]=D(Y,n({},p,{theme:f}))}),g(p,N)}),s&&!C&&w.push(p=>{var f;const b=j(n({},p,{defaultTheme:t,themeId:r})),N=b==null||(f=b.components)==null||(f=f[s])==null?void 0:f.variants;return D({variants:N},n({},p,{theme:b}))}),P||w.push(d);const A=w.length-h.length;if(Array.isArray(u)&&A>0){const p=new Array(A).fill("");F=[...u,...p],F.raw=[...u.raw,...p]}const z=_(F,...w);return m.muiName&&(z.muiName=m.muiName),z};return _.withConfig&&(E.withConfig=_.withConfig),E}}const ge=ke(),_e=H("MuiBox",["root"]),Pe=_e,we=ne(),be=me({themeId:ae,defaultTheme:we,defaultClassName:Pe.root,generateClassName:ie.generate}),Re=be;function $e(e){return ce("MuiCircularProgress",e)}H("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Ne=["className","color","disableShrink","size","style","thickness","value","variant"];let T=e=>e,L,V,U,W;const v=44,je=Z(L||(L=T`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),De=Z(V||(V=T`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Me=e=>{const{classes:r,variant:t,color:c,disableShrink:a}=e,d={root:["root",t,`color${M(c)}`],svg:["svg"],circle:["circle",`circle${M(t)}`,a&&"circleDisableShrink"]};return ue(d,$e,r)},Te=I("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${M(t.color)}`]]}})(({ownerState:e,theme:r})=>n({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&J(U||(U=T`
      animation: ${0} 1.4s linear infinite;
    `),je)),Fe=I("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),Be=I("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${M(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>n({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&J(W||(W=T`
      animation: ${0} 1.4s ease-in-out infinite;
    `),De)),Ie=Q.forwardRef(function(r,t){const c=le({props:r,name:"MuiCircularProgress"}),{className:a,color:d="primary",disableShrink:m=!1,size:i=40,style:s,thickness:o=3.6,value:l=0,variant:S="indeterminate"}=c,g=R(c,Ne),x=n({},c,{color:d,disableShrink:m,size:i,thickness:o,value:l,variant:S}),C=Me(x),P={},$={},k={};if(S==="determinate"){const _=2*Math.PI*((v-o)/2);P.strokeDasharray=_.toFixed(3),k["aria-valuenow"]=Math.round(l),P.strokeDashoffset=`${((100-l)/100*_).toFixed(3)}px`,$.transform="rotate(-90deg)"}return y.jsx(Te,n({className:q(C.root,a),style:n({width:i,height:i},$,s),ownerState:x,ref:t,role:"progressbar"},k,g,{children:y.jsx(Fe,{className:C.svg,ownerState:x,viewBox:`${v/2} ${v/2} ${v} ${v}`,children:y.jsx(Be,{className:C.circle,style:P,ownerState:x,cx:v,cy:v,r:(v-o)/2,fill:"none",strokeWidth:o})})}))}),Oe=Ie,Ee=ge(Re)({width:"100vw",height:"100vh",position:"fixed",background:"#ccc",opacity:.5,zIndex:1,top:0,left:0}),Ae=()=>y.jsxs(y.Fragment,{children:[y.jsx(Oe,{size:70,sx:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:2}}),y.jsx(Ee,{})]});Ae.__docgenInfo={description:"",methods:[],displayName:"Loader"};export{Ae as L};
