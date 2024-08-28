import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as a}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Services/DeleteDataService"}),`
`,e.jsx(r.h1,{id:"deletedataservice",children:"DeleteDataService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"DeleteService"})," se utiliza para gestionar las solicitudes de eliminación de pacientes, administradores, rutinas y ejercicios a través de la API. Este servicio maneja la autorización utilizando un token almacenado en el almacenamiento local."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import DeleteService from '../../services/DeleteDataService';\r
\r
// Eliminar un paciente\r
DeleteService.DeletePatient(1)\r
    .then(response => {\r
        console.log('Paciente eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar paciente:', error);\r
    });\r
\r
// Eliminar un administrador\r
DeleteService.DeleteAdmin('admin@example.com')\r
    .then(response => {\r
        console.log('Administrador eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar administrador:', error);\r
    });\r
\r
// Eliminar una rutina\r
DeleteService.DeleteRoutine(1)\r
    .then(response => {\r
        console.log('Rutina eliminada:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar rutina:', error);\r
    });\r
\r
// Eliminar un ejercicio\r
DeleteService.DeleteExercise(1)\r
    .then(response => {\r
        console.log('Ejercicio eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar ejercicio:', error);\r
    });\r

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
`,e.jsx(r.h3,{id:"deletepatient",children:"DeletePatient"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const DeletePatient = async (id: Id) => {\r
\r
    const authorizationHeader: authHeader = authHeaders() \r
\r
    try {\r
        const res = await axios.delete(\`\${baseUrl}patient_management/patientDelete/\${id}\`, authorizationHeader)\r
        return { res }\r
    } catch (error) {\r
        console.error(error)\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP DELETE para eliminar un paciente por su ID."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),": ID del paciente a eliminar."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`DeleteService.DeletePatient(1)\r
    .then(response => {\r
        console.log('Paciente eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar paciente:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"deleteadmin",children:"DeleteAdmin"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const DeleteAdmin = async (email: string) => {\r
\r
    const authorizationHeader: authHeader = authHeaders() \r
\r
    try {\r
        const res = await axios.delete(\`\${baseUrl}user_management/deleteUser/\${email}\`, authorizationHeader)\r
        return { res }\r
    } catch (error) {\r
        console.error(error)\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP DELETE para eliminar un administrador por su correo electrónico."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"email"})}),": Correo electrónico del administrador a eliminar."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`DeleteService.DeleteAdmin('admin@example.com')\r
    .then(response => {\r
        console.log('Administrador eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar administrador:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"deleteroutine",children:"DeleteRoutine"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const DeleteRoutine = async (id: Id) => {\r
\r
    const authorizationHeader: authHeader = authHeaders() \r
\r
    try {\r
        const res = await axios.delete(\`\${baseUrl}routine_management/deleteRoutine/\${id}\`, authorizationHeader)\r
        return { res }\r
    } catch (error) {\r
        console.error(error)\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP DELETE para eliminar una rutina por su ID."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),`: ID de la rutina a eliminar.\r
Uso:`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`DeleteService.DeleteRoutine(1)\r
    .then(response => {\r
        console.log('Rutina eliminada:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar rutina:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"deleteexercise",children:"DeleteExercise"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const DeleteExercise = async (id: Id) => {\r
\r
    const authorizationHeader: authHeader = authHeaders() \r
\r
    try {\r
        const res = await axios.delete(\`\${baseUrl}routine_management/deleteExercise/\${id}\`, authorizationHeader)\r
        return { res }\r
    } catch (error) {\r
        console.error(error)\r
    }\r
\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP DELETE para eliminar un ejercicio por su ID."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),`: ID del ejercicio a eliminar.\r
Uso:`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`DeleteService.DeleteExercise(1)\r
    .then(response => {\r
        console.log('Ejercicio eliminado:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error al eliminar ejercicio:', error);\r
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
`]})]})}function y(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
