import{j as e}from"./jsx-runtime-DoxjgJx5.js";/* empty css                 */import{r as o}from"./index-Cu9bd8lq.js";import{J as d,A as s}from"./index-B9YNeJOq.js";import{L as S}from"./LoginService-CmO1VqF6.js";import{C as m}from"./ChangePasswordService-An_RyOSA.js";import{L as T}from"./Loader-BQB4JS2V.js";import{f as b,a as I}from"./index-CeseEJRd.js";import{F as r}from"./Form-8tuLUNbZ.js";import{B as u}from"./Button-C_g_TbZn.js";const p=()=>{const{commingFromEmail:n}=b(),v=I(),h=n==="true",y=n==="false",[t,c]=o.useState(""),[i,f]=o.useState(""),[g,x]=o.useState(""),[w,j]=o.useState(""),[C,l]=o.useState(!1),N=a=>(a.preventDefault(),t===""?s.error("Por favor, ingrese su email",{duration:5e3}):(S.PasswordRecoveryService(t),s.success("Correo de recuperación enviado",{duration:5e3}))),P=async a=>{if(a.preventDefault(),i!==g)return s.error("Las contraseñas no coinciden",{duration:5e3});const E={email:t,validationToken:w};try{await m.verifyValidationToken(E)}catch{return s.error("Token de validación incorrecto",{duration:5e3})}const k={email:t,newPassword:i};try{await m.ChangePasswordServiceWithoutToken(k)}catch{return s.error("¡La nueva contraseña es igual a la anterior!",{duration:5e3})}s.success("Contraseña cambiada",{duration:5e3}),l(!0),setTimeout(()=>{l(!1),v("/")},3e3)};return e.jsxs(e.Fragment,{children:[C&&e.jsx(T,{}),y&&e.jsxs("div",{className:"style-format",style:{justifyContent:"flex-start"},children:[e.jsx("h1",{className:"style-format-text",style:{marginTop:"18dvh"},children:"Recuperación de contraseña"}),e.jsx("h2",{className:"style-format-h2",children:"Esta es la pantalla de recuperación de contraseña."}),e.jsx("h2",{className:"style-format-h2",children:"Por favor, ingrese su email para enviarle un correo de recuperación."}),e.jsx(d,{}),e.jsx(r,{children:e.jsxs(r.Group,{className:"password-recovery-input",controlId:"changePasswordForm.ControlInput1",children:[e.jsx(r.Control,{onChange:a=>c(a.target.value),type:"email",placeholder:"Ingrese su email",autoFocus:!0,className:"password-recovery-control"}),e.jsx(u,{id:"password-recovery-button",type:"submit",variant:"contained",onClick:N,children:"Enviar correo de recuperación"})]})})]}),h&&e.jsxs("div",{className:"style-format",style:{justifyContent:"flex-start"},children:[e.jsx("h1",{className:"style-format-text",style:{marginTop:"18dvh"},children:"Cambio de contraseña"}),e.jsx("h2",{className:"style-format-h2",children:"Esta es la pantalla de cambio de contraseña."}),e.jsx("h2",{className:"style-format-h2",children:"Por favor, introduzca su nueva contraseña asegurandose que no se repite con la anterior."}),e.jsx(d,{}),e.jsx(r,{children:e.jsxs(r.Group,{className:"password-recovery-input",children:[e.jsx(r.Control,{onChange:a=>c(a.target.value),type:"email",placeholder:"Ingrese su email",autoFocus:!0,className:"password-recovery-control"}),e.jsx(r.Control,{onChange:a=>f(a.target.value),type:"password",placeholder:"Ingrese su nueva contraseña",className:"password-recovery-control"}),e.jsx(r.Control,{onChange:a=>x(a.target.value),type:"password",placeholder:"Ingrese su nueva contraseña nuevamente",className:"password-recovery-control"}),e.jsx(r.Control,{onChange:a=>j(a.target.value),type:"text",placeholder:"Ingrese el token de validación",className:"password-recovery-control"}),e.jsx(u,{id:"password-recovery-button",type:"submit",variant:"contained",onClick:P,children:"Cambiar contraseña"})]})})]})]})},z=p;p.__docgenInfo={description:"",methods:[],displayName:"PasswordRecovery"};export{z as P};
