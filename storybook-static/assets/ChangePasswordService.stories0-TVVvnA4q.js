import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as s}from"./index-DtGqrCZN.js";import{M as o}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function a(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"BusinessLogic/Services/ChangePasswordService"}),`
`,e.jsx(r.h1,{id:"changepasswordservice",children:"ChangePasswordService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"ChangePasswordService"})," se utiliza para gestionar el cambio de contraseña de un usuario a través de una solicitud HTTP a la API. Este servicio maneja la autorización utilizando un token almacenado en el almacenamiento local."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import React, { useState } from 'react';\r
import ChangePasswordService from '../../services/ChangePasswordService';\r
import { ChangePasswordServiceProps } from '../../utils/types';\r
\r
const ChangePasswordComponent = () => {\r
    const [credentials, setCredentials] = useState<ChangePasswordServiceProps>({\r
        email: '',\r
        password: '',\r
        newPassword: ''\r
    });\r
\r
    const handleChangePassword = async () => {\r
        try {\r
            const response = await ChangePasswordService.ChangePasswordService(credentials);\r
            console.log('Contraseña cambiada con éxito:', response);\r
        } catch (error) {\r
            console.error('Error en el cambio de contraseña:', error.message);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            <input\r
                type="email"\r
                placeholder="Email"\r
                value={credentials.email}\r
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}\r
            />\r
            <input\r
                type="password"\r
                placeholder="Contraseña actual"\r
                value={credentials.password}\r
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}\r
            />\r
            <input\r
                type="password"\r
                placeholder="Nueva contraseña"\r
                value={credentials.newPassword}\r
                onChange={(e) => setCredentials({ ...credentials, newPassword: e.target.value })}\r
            />\r
            <button onClick={handleChangePassword}>Cambiar Contraseña</button>\r
        </div>\r
    );\r
};\r
\r
export default ChangePasswordComponent;
`})}),`
`,e.jsx(r.h2,{id:"métodos",children:"Métodos"}),`
`,e.jsx(r.h3,{id:"changepasswordservice-1",children:"ChangePasswordService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`async function ChangePasswordService(credentials: ChangePasswordServiceProps | undefined) {\r
\r
    const authHeader: authHeader = authHeaders()\r
\r
    try {\r
        const { data } = await axios.put(\`\${baseUrl}user_management/changePassword\`, credentials, authHeader)\r
        return data\r
    } catch (error) {\r
        throw new Error("Error en el cambio de contraseña")\r
    }\r
}\r
\r
export default ChangePasswordService
`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP PUT para cambiar la contraseña del usuario."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene las credenciales necesarias para cambiar la contraseña, incluyendo el correo electrónico, la contraseña actual y la nueva contraseña."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import ChangePasswordService from '../../services/ChangePasswordService';\r
\r
const credentials = {\r
    email: 'user@example.com',\r
    password: 'currentPassword',\r
    newPassword: 'newPassword'\r
};\r
\r
ChangePasswordService.ChangePasswordService(credentials)\r
    .then(response => {\r
        console.log('Contraseña cambiada con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error en el cambio de contraseña:', error.message);\r
    });
`})}),`
`,e.jsx(r.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(r.p,{children:"Para utilizar este servicio, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"npm install axios"})}),`
`]}),`
`,e.jsx(r.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Asegúrate de que el token se maneje de manera segura y que no se exponga en lugares no seguros."}),`
`,e.jsx(r.li,{children:"La URL base de la API debe estar correctamente configurada en ../utils/Constants."}),`
`]})]})}function v(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(a,{...n})}):a(n)}export{v as default};
