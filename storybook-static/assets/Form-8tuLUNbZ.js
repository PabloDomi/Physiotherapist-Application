import{c as p,u,a as X,b as Y}from"./ThemeProvider-CWR1dq9Q.js";import{P as C}from"./index-SDyqs4cU.js";import{r as n}from"./index-Cu9bd8lq.js";import{j as r}from"./jsx-runtime-DoxjgJx5.js";function Z(e,o){return n.Children.toArray(e).some(s=>n.isValidElement(s)&&s.type===o)}function P({as:e,bsPrefix:o,className:s,...t}){o=u(o,"col");const a=X(),l=Y(),c=[],i=[];return a.forEach(d=>{const m=t[d];delete t[d];let f,h,y;typeof m=="object"&&m!=null?{span:f,offset:h,order:y}=m:f=m;const $=d!==l?`-${d}`:"";f&&c.push(f===!0?`${o}${$}`:`${o}${$}-${f}`),y!=null&&i.push(`order${$}-${y}`),h!=null&&i.push(`offset${$}-${h}`)}),[{...t,className:p(s,...c,...i)},{as:e,bsPrefix:o,spans:c}]}const I=n.forwardRef((e,o)=>{const[{className:s,...t},{as:a="div",bsPrefix:l,spans:c}]=P(e);return r.jsx(a,{...t,ref:o,className:p(s,!c.length&&l)})});I.displayName="Col";const ee=I,oe={type:C.string,tooltip:C.bool,as:C.elementType},v=n.forwardRef(({as:e="div",className:o,type:s="valid",tooltip:t=!1,...a},l)=>r.jsx(e,{...a,ref:l,className:p(o,`${s}-${t?"tooltip":"feedback"}`)}));v.displayName="Feedback";v.propTypes=oe;const T=v,se=n.createContext({}),F=se,B=n.forwardRef(({id:e,bsPrefix:o,className:s,type:t="checkbox",isValid:a=!1,isInvalid:l=!1,as:c="input",...i},d)=>{const{controlId:m}=n.useContext(F);return o=u(o,"form-check-input"),r.jsx(c,{...i,ref:d,type:t,id:e||m,className:p(s,o,a&&"is-valid",l&&"is-invalid")})});B.displayName="FormCheckInput";const S=B,O=n.forwardRef(({bsPrefix:e,className:o,htmlFor:s,...t},a)=>{const{controlId:l}=n.useContext(F);return e=u(e,"form-check-label"),r.jsx("label",{...t,ref:a,htmlFor:s||l,className:p(o,e)})});O.displayName="FormCheckLabel";const k=O,E=n.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:s,inline:t=!1,reverse:a=!1,disabled:l=!1,isValid:c=!1,isInvalid:i=!1,feedbackTooltip:d=!1,feedback:m,feedbackType:f,className:h,style:y,title:$="",type:j="checkbox",label:g,children:w,as:J="input",...K},Q)=>{o=u(o,"form-check"),s=u(s,"form-switch");const{controlId:R}=n.useContext(F),U=n.useMemo(()=>({controlId:e||R}),[R,e]),L=!w&&g!=null&&g!==!1||Z(w,k),W=r.jsx(S,{...K,type:j==="switch"?"checkbox":j,ref:Q,isValid:c,isInvalid:i,disabled:l,as:J});return r.jsx(F.Provider,{value:U,children:r.jsx("div",{style:y,className:p(h,L&&o,t&&`${o}-inline`,a&&`${o}-reverse`,j==="switch"&&s),children:w||r.jsxs(r.Fragment,{children:[W,L&&r.jsx(k,{title:$,children:g}),m&&r.jsx(T,{type:f,tooltip:d,children:m})]})})})});E.displayName="FormCheck";const N=Object.assign(E,{Input:S,Label:k}),G=n.forwardRef(({bsPrefix:e,type:o,size:s,htmlSize:t,id:a,className:l,isValid:c=!1,isInvalid:i=!1,plaintext:d,readOnly:m,as:f="input",...h},y)=>{const{controlId:$}=n.useContext(F);return e=u(e,"form-control"),r.jsx(f,{...h,type:o,size:t,ref:y,readOnly:m,id:a||$,className:p(l,d?`${e}-plaintext`:e,s&&`${e}-${s}`,o==="color"&&`${e}-color`,c&&"is-valid",i&&"is-invalid")})});G.displayName="FormControl";const te=Object.assign(G,{Feedback:T}),b=n.forwardRef(({className:e,bsPrefix:o,as:s="div",...t},a)=>(o=u(o,"form-floating"),r.jsx(s,{ref:a,className:p(e,o),...t})));b.displayName="FormFloating";const ae=b,M=n.forwardRef(({controlId:e,as:o="div",...s},t)=>{const a=n.useMemo(()=>({controlId:e}),[e]);return r.jsx(F.Provider,{value:a,children:r.jsx(o,{...s,ref:t})})});M.displayName="FormGroup";const V=M,A=n.forwardRef(({as:e="label",bsPrefix:o,column:s=!1,visuallyHidden:t=!1,className:a,htmlFor:l,...c},i)=>{const{controlId:d}=n.useContext(F);o=u(o,"form-label");let m="col-form-label";typeof s=="string"&&(m=`${m} ${m}-${s}`);const f=p(a,o,t&&"visually-hidden",s&&m);return l=l||d,s?r.jsx(ee,{ref:i,as:"label",className:f,htmlFor:l,...c}):r.jsx(e,{ref:i,className:f,htmlFor:l,...c})});A.displayName="FormLabel";const ne=A,_=n.forwardRef(({bsPrefix:e,className:o,id:s,...t},a)=>{const{controlId:l}=n.useContext(F);return e=u(e,"form-range"),r.jsx("input",{...t,type:"range",ref:a,className:p(o,e),id:s||l})});_.displayName="FormRange";const le=_,q=n.forwardRef(({bsPrefix:e,size:o,htmlSize:s,className:t,isValid:a=!1,isInvalid:l=!1,id:c,...i},d)=>{const{controlId:m}=n.useContext(F);return e=u(e,"form-select"),r.jsx("select",{...i,size:s,ref:d,className:p(t,e,o&&`${e}-${o}`,a&&"is-valid",l&&"is-invalid"),id:c||m})});q.displayName="FormSelect";const re=q,z=n.forwardRef(({bsPrefix:e,className:o,as:s="small",muted:t,...a},l)=>(e=u(e,"form-text"),r.jsx(s,{...a,ref:l,className:p(o,e,t&&"text-muted")})));z.displayName="FormText";const ce=z,D=n.forwardRef((e,o)=>r.jsx(N,{...e,ref:o,type:"switch"}));D.displayName="Switch";const me=Object.assign(D,{Input:N.Input,Label:N.Label}),H=n.forwardRef(({bsPrefix:e,className:o,children:s,controlId:t,label:a,...l},c)=>(e=u(e,"form-floating"),r.jsxs(V,{ref:c,className:p(o,e),controlId:t,...l,children:[s,r.jsx("label",{htmlFor:t,children:a})]})));H.displayName="FloatingLabel";const ie=H,de={_ref:C.any,validated:C.bool,as:C.elementType},x=n.forwardRef(({className:e,validated:o,as:s="form",...t},a)=>r.jsx(s,{...t,ref:a,className:p(e,o&&"was-validated")}));x.displayName="Form";x.propTypes=de;const $e=Object.assign(x,{Group:V,Control:te,Floating:ae,Check:N,Switch:me,Label:ne,Text:ce,Range:le,Select:re,FloatingLabel:ie});export{$e as F};
