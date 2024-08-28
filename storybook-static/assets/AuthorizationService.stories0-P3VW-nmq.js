import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"BusinessLogic/Services/AuthorizationService"}),`
`,e.jsx(n.h1,{id:"authorizationservice",children:"AuthorizationService"}),`
`,e.jsxs(n.p,{children:["El servicio ",e.jsx(n.code,{children:"AuthorizationService"})," se utiliza para gestionar el token de autorización del usuario. Este servicio proporciona métodos para establecer y eliminar el token en el almacenamiento local."]}),`
`,e.jsx(n.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import AuthorizationService from '../../services/AuthorizationService';\r
\r
// Establecer un token\r
AuthorizationService.setToken('nuevoToken');\r
\r
// Eliminar el token\r
AuthorizationService.removeToken();
`})}),`
`,e.jsx(n.h2,{id:"métodos",children:"Métodos"}),`
`,e.jsx(n.h3,{id:"settoken",children:"setToken:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`\r
async function setToken(newToken: string) {\r
    const token = \`\${newToken}\`\r
    window.localStorage.setItem('token', token)\r
}\r

`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Descripción: Establece un nuevo token de autorización en el almacenamiento local."}),`
`,e.jsxs(n.li,{children:["Parámetros:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"newToken"})}),": El nuevo token de autorización que se debe establecer."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Uso: ",e.jsx(n.code,{children:"AuthorizationService.setToken('nuevoToken');"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"removetoken",children:"removeToken:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`\r
async function removeToken() {\r
    window.localStorage.removeItem('token')\r
}\r

`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Descripción: Elimina el token de autorización del almacenamiento local."}),`
`,e.jsxs(n.li,{children:["Uso: ",e.jsx(n.code,{children:"AuthorizationService.removeToken();"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el token se maneje de manera segura y que no se exponga en lugares no seguros."}),`
`,e.jsx(n.li,{children:"El almacenamiento local se utiliza para almacenar el token de autorización, lo cual puede no ser adecuado para todos los tipos de aplicaciones, especialmente aquellas que manejan datos sensibles."}),`
`]})]})}function T(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{T as default};
