import{_ as A}from"./extends-CCbyfPlC.js";import{_ as ie}from"./objectWithoutPropertiesLoose-1QL-frMM.js";import{r as o,a as W}from"./index-Cu9bd8lq.js";import{e as x,g as Ee,v as oe,s as se,u as Me,a as ze,f as Ae}from"./styled-npw7yaFN.js";import{j as N}from"./jsx-runtime-DoxjgJx5.js";import{_ as Xe}from"./assertThisInitialized-B9jnkVVz.js";import{_ as Ye}from"./inheritsLoose-B7h9gheN.js";import{T as de}from"./TransitionGroupContext-CH30vzyX.js";const We=typeof window<"u"?o.useLayoutEffect:o.useEffect;function He(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=o.useRef(e);return We(()=>{t.current=e}),o.useRef((...n)=>(0,t.current)(...n)).current}function he(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{He(n,t)})},e)}const me={};function Ge(e,t){const n=o.useRef(me);return n.current===me&&(n.current=e(t)),n}const qe=[];function Ze(e){o.useEffect(e,qe)}class G{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new G}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Je(){const e=Ge(G.create).current;return Ze(e.disposeEffect),e}let q=!0,ne=!1;const Qe=new G,et={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&et[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function nt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function rt(){this.visibilityState==="hidden"&&ne&&(q=!0)}function it(e){e.addEventListener("keydown",nt,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",rt,!0)}function ot(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||tt(t)}function st(){const e=o.useCallback(r=>{r!=null&&it(r.ownerDocument)},[]),t=o.useRef(!1);function n(){return t.current?(ne=!0,Qe.start(100,()=>{ne=!1}),t.current=!1,!0):!1}function u(r){return ot(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function ae(e,t){var n=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function at(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<r.length;s++)c[r[s]]=n(r[s]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ut(e,t){return ae(e.children,function(n){return o.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function lt(e,t,n){var u=ae(e.children),r=at(t,u);return Object.keys(r).forEach(function(i){var s=r[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!l&&c&&!d?r[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),r}var ct=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},pt={component:"div",childFactory:function(t){return t}},ue=function(e){Ye(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var s=i.handleExited.bind(Xe(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?ut(r,c):lt(r,s,c),firstRender:!1}},n.handleExited=function(r,i){var s=ae(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=A({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,s=r.childFactory,c=ie(r,["component","childFactory"]),l=this.state.contextValue,p=ct(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?W.createElement(de.Provider,{value:l},p):W.createElement(de.Provider,{value:l},W.createElement(i,c,p))},t}(W.Component);ue.propTypes={};ue.defaultProps=pt;const ft=ue;function dt(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ht=["center","classes","className"];let Z=e=>e,be,ge,Re,ye;const re=550,mt=80,bt=oe(be||(be=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gt=oe(ge||(ge=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Rt=oe(Re||(Re=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Et=se(dt,{name:"MuiTouchRipple",slot:"Ripple"})(ye||(ye=Z`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,bt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,gt,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,Rt,({theme:e})=>e.transitions.easing.easeInOut),Mt=o.forwardRef(function(t,n){const u=Me({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:s}=u,c=ie(u,ht),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),C=Je(),h=o.useRef(null),R=o.useRef(null),j=o.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:U,cb:K}=f;p(M=>[...M,N.jsx(Et,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:re,pulsate:y,rippleX:E,rippleY:D,rippleSize:U},d.current)]),d.current+=1,g.current=K},[i]),S=o.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:U=r||y.pulsate,fakeElement:K=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=K?null:R.current,P=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,B,L;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:I,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(I-P.left),B=Math.round(V-P.top)}if(U)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((M?M.clientHeight:0)-B),B)*2+2;L=Math.sqrt(I**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{j({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},C.start(mt,()=>{h.current&&(h.current(),h.current=null)})):j({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},[r,j,C]),_=o.useCallback(()=>{S({},{pulsate:!0})},[S]),$=o.useCallback((f,y)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{$(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[C]);return o.useImperativeHandle(n,()=>({pulsate:_,start:S,stop:$}),[_,S,$]),N.jsx(yt,A({className:x(m.root,i.root,s),ref:R},c,{children:N.jsx(ft,{component:null,exit:!0,children:l})}))}),Tt=Mt;function xt(e){return ze("MuiButtonBase",e)}const Ct=Ee("MuiButtonBase",["root","disabled","focusVisible"]),vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,s=Ae({root:["root",t&&"disabled",n&&"focusVisible"]},xt,r);return n&&u&&(s.root+=` ${u}`),s},wt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Pt=o.forwardRef(function(t,n){const u=Me({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:S,onFocus:_,onFocusVisible:$,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:U,onTouchEnd:K,onTouchMove:M,onTouchStart:P,tabIndex:v=0,TouchRippleProps:B,touchRippleRef:L,type:I}=u,V=ie(u,vt),O=o.useRef(null),T=o.useRef(null),Te=he(T,L),{isFocusVisibleRef:le,onFocus:xe,onBlur:Ce,ref:ve}=st(),[F,X]=o.useState(!1);p&&F&&X(!1),o.useImperativeHandle(r,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[J,Ve]=o.useState(!1);o.useEffect(()=>{Ve(!0)},[]);const we=J&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&J&&T.current.pulsate()},[d,b,F,J]);function w(a,pe,Oe=g){return H(fe=>(pe&&pe(fe),!Oe&&T.current&&T.current[a](fe),!0))}const Pe=w("start",E),Be=w("stop",j),Le=w("stop",S),De=w("stop",U),Ie=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),Fe=w("start",P),ke=w("stop",K),Ne=w("stop",M),Se=w("stop",a=>{Ce(a),le.current===!1&&X(!1),h&&h(a)},!1),$e=H(a=>{O.current||(O.current=a.currentTarget),xe(a),le.current===!0&&(X(!0),$&&$(a)),_&&_(a)}),Q=()=>{const a=O.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},ee=o.useRef(!1),Ue=H(a=>{b&&!ee.current&&F&&T.current&&a.key===" "&&(ee.current=!0,T.current.stop(a,()=>{T.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),je=H(a=>{b&&a.key===" "&&T.current&&F&&!a.defaultPrevented&&(ee.current=!1,T.current.stop(a,()=>{T.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let Y=l;Y==="button"&&(V.href||V.to)&&(Y=C);const z={};Y==="button"?(z.type=I===void 0?"button":I,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const _e=he(n,ve,O),ce=A({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),Ke=Vt(ce);return N.jsxs(wt,A({as:Y,className:x(Ke.root,c),ownerState:ce,onBlur:Se,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ue,onKeyUp:je,onMouseDown:Pe,onMouseLeave:Ie,onMouseUp:De,onDragLeave:Le,onTouchEnd:ke,onTouchMove:Ne,onTouchStart:Fe,ref:_e,tabIndex:p?-1:v,type:I},z,V,{children:[s,we?N.jsx(Tt,A({ref:Te,center:i},B)):null]}))}),Ut=Pt;export{Ut as B,he as a,We as b,H as c,st as d,He as s,Je as u};
