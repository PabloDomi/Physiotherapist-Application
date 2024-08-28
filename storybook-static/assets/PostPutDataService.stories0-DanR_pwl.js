import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as a}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"BusinessLogic/Services/PostPutDataService"}),`
`,e.jsx(r.h1,{id:"postputdataservice",children:"PostPutDataService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"PostPutDataService"})," se utiliza para gestionar las solicitudes HTTP POST y PUT relacionadas con las rutinas y los ejercicios. Este servicio maneja la autorización utilizando un token almacenado en el almacenamiento local."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import PostPutDataService from '../../services/PostPutDataService';\r
\r
// Añadir una rutina\r
const newRoutine = {\r
    name: 'Nueva Rutina',\r
    description: 'Descripción de la nueva rutina',\r
    estimatedTime: 30,\r
    patient_id: 1\r
};\r
\r
PostPutDataService.AddRoutineService(newRoutine)\r
    .then(response => {\r
        console.log('Rutina añadida con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error añadiendo la rutina:', error.message);\r
    });\r
\r
// Añadir un ejercicio a una rutina\r
const newExercise = {\r
    name: 'Nuevo Ejercicio',\r
    description: 'Descripción del nuevo ejercicio',\r
    routine_name: 'Rutina 1'\r
};\r
\r
PostPutDataService.AddExerciseToRoutineService(newExercise)\r
    .then(response => {\r
        console.log('Ejercicio añadido con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error añadiendo el ejercicio a la rutina:', error.message);\r
    });\r
\r
// Editar una rutina\r
const updatedRoutine = {\r
    routine_id: 1,\r
    name: 'Rutina Actualizada',\r
    description: 'Descripción actualizada',\r
    estimatedTime: 45,\r
    patient_id: 1\r
};\r
\r
PostPutDataService.EditRoutineService(updatedRoutine)\r
    .then(response => {\r
        console.log('Rutina editada con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error editando la rutina:', error.message);\r
    });\r
\r
// Editar un ejercicio\r
const updatedExercise = {\r
    id: 1,\r
    name: 'Ejercicio Actualizado',\r
    description: 'Descripción actualizada',\r
    routine_ids: [1, 2],\r
    routine: [{ id: 1, name: 'Rutina 1' }, { id: 2, name: 'Rutina 2' }]\r
};\r
\r
PostPutDataService.EditExerciseService(updatedExercise)\r
    .then(response => {\r
        console.log('Ejercicio editado con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error editando el ejercicio:', error.message);\r
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
`,e.jsx(r.h3,{id:"addroutineservice",children:"AddRoutineService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`async function AddRoutineService(credentials: AddRoutineServiceProps) {\r
    const authorizationHeader: authHeader = authHeaders();\r
\r
    try {\r
        const { data } = await axios.post(\`\${baseUrl}routine_management/addRoutine\`, credentials, authorizationHeader);\r
        return data;\r
    } catch (error) {\r
        throw new Error("Error añadiendo la rutina");\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP POST para añadir una nueva rutina."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene los datos de la rutina a añadir."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import PostPutDataService from '../../services/PostPutDataService';\r
\r
const newRoutine = {\r
    name: 'Nueva Rutina',\r
    description: 'Descripción de la nueva rutina',\r
    estimatedTime: 30,\r
    patient_id: 1\r
};\r
\r
PostPutDataService.AddRoutineService(newRoutine)\r
    .then(response => {\r
        console.log('Rutina añadida con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error añadiendo la rutina:', error.message);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"addexercisetoroutineservice",children:"AddExerciseToRoutineService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`async function AddExerciseToRoutineService(credentials: AddExerciseToRoutineServiceProps) {\r
    const authorizationHeader: authHeader = authHeaders();\r
\r
    try {\r
        const { data } = await axios.post(\`\${baseUrl}routine_management/addExerciseToRoutine\`, credentials, authorizationHeader);\r
        return data;\r
    } catch (error) {\r
        throw new Error("Error añadiendo el ejercicio a la rutina");\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP POST para añadir un ejercicio a una rutina existente."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene los datos del ejercicio a añadir."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import PostPutDataService from '../../services/PostPutDataService';\r
\r
const newExercise = {\r
    name: 'Nuevo Ejercicio',\r
    description: 'Descripción del nuevo ejercicio',\r
    routine_name: 'Rutina 1'\r
};\r
\r
PostPutDataService.AddExerciseToRoutineService(newExercise)\r
    .then(response => {\r
        console.log('Ejercicio añadido con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error añadiendo el ejercicio a la rutina:', error.message);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"editroutineservice",children:"EditRoutineService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`async function EditRoutineService(credentials: EditRoutineDataTypes) {\r
    const authorizationHeader: authHeader = authHeaders();\r
\r
    try {\r
        const { data } = await axios.put(\`\${baseUrl}routine_management/updateRoutine\`, credentials, authorizationHeader);\r
        return data;\r
    } catch (error) {\r
        throw new Error("Error editando la rutina");\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP PUT para editar una rutina existente."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene los datos de la rutina a editar."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import PostPutDataService from '../../services/PostPutDataService';\r
\r
const updatedRoutine = {\r
    routine_id: 1,\r
    name: 'Rutina Actualizada',\r
    description: 'Descripción actualizada',\r
    estimatedTime: 45,\r
    patient_id: 1\r
};\r
\r
PostPutDataService.EditRoutineService(updatedRoutine)\r
    .then(response => {\r
        console.log('Rutina editada con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error editando la rutina:', error.message);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"editexerciseservice",children:"EditExerciseService"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`async function EditExerciseService(credentials: EditExerciseServiceProps) {\r
    const authorizationHeader: authHeader = authHeaders();\r
\r
    try {\r
        const { data } = await axios.put(\`\${baseUrl}routine_management/updateExercise\`, credentials, authorizationHeader);\r
        return data;\r
    } catch (error) {\r
        throw new Error("Error editando el ejercicio");\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Realiza una solicitud HTTP PUT para editar un ejercicio existente."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"credentials"})}),": Un objeto que contiene los datos del ejercicio a editar."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import PostPutDataService from '../../services/PostPutDataService';\r
\r
const updatedExercise = {\r
    id: 1,\r
    name: 'Ejercicio Actualizado',\r
    description: 'Descripción actualizada',\r
    routine_ids: [1, 2],\r
    routine: [{ id: 1, name: 'Rutina 1' }, { id: 2, name: 'Rutina 2' }]\r
};\r
\r
PostPutDataService.EditExerciseService(updatedExercise)\r
    .then(response => {\r
        console.log('Ejercicio editado con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error editando el ejercicio:', error.message);\r
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
`]})]})}function R(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{R as default};
