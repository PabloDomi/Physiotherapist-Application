import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as a}from"./index-DtGqrCZN.js";import{M as r}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"BusinessLogic/Hooks/useRefreshJWToken"}),`
`,e.jsx(n.h1,{id:"userefreshjwtoken",children:"useRefreshJWToken"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useRefreshJWToken"})," se utiliza para gestionar la actualización automática del token JWT del usuario, basado en su actividad e inactividad. Este hook asegura que el token se actualice periódicamente y que se elimine después de un periodo de inactividad prolongada."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React, { useState } from 'react';\r
import useRefreshJWToken from '../../hooks/useRefreshJWToken';\r
import { UserAdmin } from '../../utils/types';\r
\r
const MyApp = () => {\r
    const [user, setUser] = useState<UserAdmin | null>(null);\r
\r
    useRefreshJWToken(user);\r
\r
    return (\r
        <div>\r
            {/* Tu aplicación */}\r
        </div>\r
    );\r
};\r
\r
export default MyApp;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"parámetros",children:"Parámetros"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"user"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"UserAdmin | null"})]}),`
`,e.jsxs(n.li,{children:["Descripción: El usuario actual cuya sesión debe ser gestionada. Si el usuario es ",e.jsx(n.code,{children:"null"}),", no se realizarán actualizaciones de token."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"funcionalidades",children:"Funcionalidades"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Actualización de Token"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["El hook actualiza el token JWT cada 3 minutos llamando al servicio ",e.jsx(n.code,{children:"GetDataService.getAccessToken"}),"."]}),`
`,e.jsxs(n.li,{children:["Almacena el token actualizado en ",e.jsx(n.code,{children:"AuthorizationService"})," y actualiza la última actividad en el almacenamiento local."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Verificación de Inactividad"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verifica si el usuario ha estado inactivo durante más de 12 horas y, en caso afirmativo, elimina el token y los datos del usuario del almacenamiento local, recargando la página para limpiar cualquier dato específico del usuario en la memoria."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Seguimiento de Actividad del Usuario"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Registra la actividad del usuario (movimientos del ratón y pulsaciones de teclas) y actualiza la última actividad en el almacenamiento local cada minuto, siempre que haya actividad."}),`
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
`,e.jsx(n.li,{children:"Este hook depende de AuthorizationService para gestionar el token y GetDataService para obtener el token de acceso."}),`
`,e.jsx(n.li,{children:"El hook debe ser utilizado en el contexto de una aplicación que maneje la autenticación de usuarios, asegurándose de que el usuario esté disponible en el estado global o local."}),`
`]})]})}function y(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
