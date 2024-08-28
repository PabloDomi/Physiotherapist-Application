import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as s}from"./index-DtGqrCZN.js";import{M as o}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"BusinessLogic/Services/LoginService"}),`
`,e.jsx(r.h1,{id:"loginservice",children:"LoginService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"LoginService"})," se utiliza para gestionar el inicio y cierre de sesión de un usuario a través de solicitudes HTTP a la API. Este servicio maneja la autorización utilizando un token almacenado en el almacenamiento local."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import React from 'react';\r
import LoginService from '../../services/LoginService';\r
import { LoginServiceProps, LogoutServiceProps } from '../../utils/types';\r
\r
const LoginComponent = () => {\r
    const handleLogin = async () => {\r
        const credentials: LoginServiceProps = {\r
            email: 'user@example.com',\r
            password: 'password123'\r
        };\r
\r
        try {\r
            const response = await LoginService(credentials);\r
            console.log('Inicio de sesión exitoso:', response);\r
        } catch (error) {\r
            console.error('Error en el inicio de sesión:', error.message);\r
        }\r
    };\r
\r
    const handleLogout = async () => {\r
        const credentials: LogoutServiceProps = {\r
            email: 'user@example.com'\r
        };\r
\r
        try {\r
            const response = await LoginService.LogoutService(credentials);\r
            console.log('Cierre de sesión exitoso:', response);\r
        } catch (error) {\r
            console.error('Error en el cierre de sesión:', error.message);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            <button onClick={handleLogin}>Iniciar Sesión</button>\r
            <button onClick={handleLogout}>Cerrar Sesión</button>\r
        </div>\r
    );\r
};\r
\r
export default LoginComponent;\r

`})}),`
`,e.jsx(r.h2,{id:"métodos",children:"Métodos"}),`
`,e.jsx(r.h3,{id:"authheaders",children:"authHeaders"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const authHeaders = () => {\r
    return {\r
        headers: {\r
            Authorization: \`Bearer \${localStorage.getItem('token')}\`\r
        }\r
    }\r
}
`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Genera los encabezados de autorización necesarios para las solicitudes HTTP utilizando el token almacenado en el almacenamiento local."}),`
`]}),`
`,e.jsx(r.h3,{id:"loginservice-1",children:"LoginService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const LoginService = async (credentials: LoginServiceProps) => {\r
    try {\r
        const { data } = await axios.post(\`\${baseUrl}Sign/Login\`, credentials)\r
        AuthorizationService.setToken(data.access_token)\r
        return data\r
    } catch (error) {\r
        throw new Error("Error en el login de usuario")\r
    } \r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP POST para iniciar sesión con las credenciales del usuario."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene las credenciales de inicio de sesión del usuario."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import LoginService from '../../services/LoginService';\r
\r
const credentials = {\r
    email: 'user@example.com',\r
    password: 'password123'\r
};\r
\r
LoginService(credentials)\r
    .then(response => {\r
        console.log('Inicio de sesión exitoso:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error en el inicio de sesión:', error.message);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"logoutservice",children:"LogoutService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const LogoutService = async (credentials: LogoutServiceProps) => {\r
    const authorizationHeader: authHeader = authHeaders()\r
\r
    try {\r
        const res = await axios.post(\`\${baseUrl}Sign/Logout\`, credentials, authorizationHeader)\r
        AuthorizationService.removeToken()\r
        return res\r
    } catch (error) {\r
        console.error(error)\r
        throw new Error("Error en el logout de usuario")\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP POST para cerrar sesión con las credenciales del usuario."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene las credenciales de cierre de sesión del usuario."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import LoginService from '../../services/LoginService';\r
\r
const credentials = {\r
    email: 'user@example.com'\r
};\r
\r
LoginService.LogoutService(credentials)\r
    .then(response => {\r
        console.log('Cierre de sesión exitoso:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error en el cierre de sesión:', error.message);\r
    });\r

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
`]})]})}function y(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
