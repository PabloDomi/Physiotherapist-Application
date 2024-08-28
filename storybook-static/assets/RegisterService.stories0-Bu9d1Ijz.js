import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"BusinessLogic/Services/RegisterService"}),`
`,e.jsx(r.h1,{id:"registerservice",children:"RegisterService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"RegisterService"})," se utiliza para registrar nuevos usuarios a través de solicitudes HTTP a la API."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import React, { useState } from 'react';\r
import RegisterService from '../../services/RegisterService';\r
import { RegisterServiceProps } from '../../utils/types';\r
\r
const RegisterComponent = () => {\r
    const [user, setUser] = useState<RegisterServiceProps>({\r
        name: '',\r
        surname: '',\r
        email: '',\r
        password: ''\r
    });\r
\r
    const handleRegister = async () => {\r
        try {\r
            const response = await RegisterService(user);\r
            console.log('Usuario registrado con éxito:', response);\r
        } catch (error) {\r
            console.error('Error en el registro de usuario:', error.message);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            <input\r
                type="text"\r
                placeholder="Nombre"\r
                value={user.name}\r
                onChange={(e) => setUser({ ...user, name: e.target.value })}\r
            />\r
            <input\r
                type="text"\r
                placeholder="Apellidos"\r
                value={user.surname}\r
                onChange={(e) => setUser({ ...user, surname: e.target.value })}\r
            />\r
            <input\r
                type="email"\r
                placeholder="Email"\r
                value={user.email}\r
                onChange={(e) => setUser({ ...user, email: e.target.value })}\r
            />\r
            <input\r
                type="password"\r
                placeholder="Contraseña"\r
                value={user.password}\r
                onChange={(e) => setUser({ ...user, password: e.target.value })}\r
            />\r
            <button onClick={handleRegister}>Registrar Usuario</button>\r
        </div>\r
    );\r
};\r
\r
export default RegisterComponent;\r

`})}),`
`,e.jsx(r.h2,{id:"métodos",children:"Métodos"}),`
`,e.jsx(r.h3,{id:"registerservice-1",children:"RegisterService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import axios from 'axios'\r
import { baseUrl } from '../utils/Constants'\r
import { RegisterServiceProps } from '../utils/types'\r
\r
const RegisterService = async (credentials: RegisterServiceProps) => {\r
    try {\r
        const { data } = await axios.post(\`\${baseUrl}Sign/Register\`, credentials)\r
        return data\r
    } catch (error) {\r
        throw new Error("Error en el registro de usuario")\r
    }\r
}\r
\r
export default RegisterService;
`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP POST para registrar un nuevo usuario."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene los datos necesarios para registrar al usuario."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import RegisterService from '../../services/RegisterService';\r
\r
const newUser = {\r
    name: 'Juan',\r
    surname: 'Perez',\r
    email: 'juan.perez@example.com',\r
    password: 'password123'\r
};\r
\r
RegisterService(newUser)\r
    .then(response => {\r
        console.log('Usuario registrado con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error en el registro de usuario:', error.message);\r
    });\r

`})}),`
`,e.jsx(r.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(r.p,{children:"Para utilizar este servicio, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"npm install axios"})}),`
`]}),`
`,e.jsx(r.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"La URL base de la API debe estar correctamente configurada en ../utils/Constants."}),`
`,e.jsx(r.li,{children:"Asegúrate de manejar las credenciales y los datos del usuario de manera segura."}),`
`]})]})}function f(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
