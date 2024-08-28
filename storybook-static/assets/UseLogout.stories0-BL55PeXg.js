import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Hooks/useLogout"}),`
`,e.jsx(n.h1,{id:"uselogout",children:"useLogout"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useLogout"})," se utiliza para gestionar el proceso de cierre de sesión de un usuario. Este hook se encarga de eliminar las credenciales del usuario almacenadas localmente, hacer una solicitud al servicio de cierre de sesión y redirigir al usuario a la página de inicio."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import useLogout from '../../hooks/useLogout';\r
\r
const LogoutComponent = () => {\r
    const { logout } = useLogout();\r
\r
    return (\r
        <button onClick={logout}>Cerrar Sesión</button>\r
    );\r
};\r
\r
export default LogoutComponent;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"logout"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: () => void"}),`
`,e.jsx(n.li,{children:"Descripción: Función que gestiona el proceso de cierre de sesión. Elimina el token de autorización, remueve las credenciales del usuario del almacenamiento local, hace una llamada al servicio de cierre de sesión y redirige al usuario a la página de inicio, recargando la página."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install react-router-dom"})}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Este hook depende de react-router-dom para la navegación."}),`
`,e.jsx(n.li,{children:"Asegúrate de que los servicios LoginService y AuthorizationService estén correctamente implementados y configurados."}),`
`,e.jsx(n.li,{children:"La función logout se encarga de hacer la limpieza de las credenciales del usuario y redirigirlo a la página de inicio, asegurando que la sesión se cierra completamente."}),`
`]})]})}function v(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{v as default};
