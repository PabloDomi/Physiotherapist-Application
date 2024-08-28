import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as i}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"BusinessLogic/Services/GetDataService"}),`
`,e.jsx(r.h1,{id:"getdataservice",children:"GetDataService"}),`
`,e.jsxs(r.p,{children:["El servicio ",e.jsx(r.code,{children:"GetDataService"})," se utiliza para realizar varias solicitudes HTTP a la API, incluyendo la obtención de rutinas, pacientes, usuarios, ejercicios y la verificación de correos electrónicos."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import GetDataService from '../../services/GetDataService';\r
\r
// Obtener rutinas\r
GetDataService.GetRoutines()\r
    .then(routines => {\r
        console.log('Rutinas obtenidas:', routines);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener rutinas:', error);\r
    });\r
\r
// Obtener pacientes\r
GetDataService.GetPatients()\r
    .then(patients => {\r
        console.log('Pacientes obtenidos:', patients);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener pacientes:', error);\r
    });\r
\r
// Verificar si un correo electrónico existe\r
GetDataService.CheckEmailExists('user@example.com')\r
    .then(exists => {\r
        console.log('Correo verificado:', exists);\r
    })\r
    .catch(error => {\r
        console.error('Error al verificar correo:', error);\r
    });\r
\r
// Obtener usuarios\r
GetDataService.GetUsers()\r
    .then(users => {\r
        console.log('Usuarios obtenidos:', users);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener usuarios:', error);\r
    });\r
\r
// Obtener ejercicios por nombre de rutina\r
GetDataService.GetExercisesByRoutineName('Rutina 1')\r
    .then(exercises => {\r
        console.log('Ejercicios obtenidos:', exercises);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicios:', error);\r
    });\r
\r
// Verificar si un paciente tiene una rutina asignada\r
GetDataService.CheckHasRoutine(1)\r
    .then(hasRoutine => {\r
        console.log('Paciente tiene rutina:', hasRoutine);\r
    })\r
    .catch(error => {\r
        console.error('Error al verificar rutina del paciente:', error);\r
    });\r
\r
// Obtener una rutina por su ID\r
GetDataService.GetRoutineById(1)\r
    .then(routine => {\r
        console.log('Rutina obtenida:', routine);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener rutina:', error);\r
    });\r
\r
// Obtener un ejercicio por su ID\r
GetDataService.GetExerciseById('1')\r
    .then(exercise => {\r
        console.log('Ejercicio obtenido:', exercise);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicio:', error);\r
    });\r
\r
// Obtener todos los ejercicios\r
GetDataService.GetAllExercises()\r
    .then(exercises => {\r
        console.log('Ejercicios obtenidos:', exercises);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicios:', error);\r
    });\r
\r
// Refrescar token JWT\r
GetDataService.RefreshJWToken()\r
    .then(token => {\r
        console.log('Token refrescado:', token);\r
    })\r
    .catch(error => {\r
        console.error('Error al refrescar token:', error);\r
    });\r
\r
// Obtener token de acceso\r
GetDataService.GetAccessToken('user@example.com')\r
    .then(token => {\r
        console.log('Token de acceso obtenido:', token);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener token de acceso:', error);\r
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
`,e.jsx(r.h3,{id:"getroutines",children:"GetRoutines"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetRoutines = async () => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}routines\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene todas las rutinas."}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetRoutines()\r
    .then(routines => {\r
        console.log('Rutinas obtenidas:', routines);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener rutinas:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getpatients",children:"GetPatients"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetPatients = async () => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}patients\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene todos los pacientes."}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetPatients()\r
    .then(patients => {\r
        console.log('Pacientes obtenidos:', patients);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener pacientes:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"checkemailexists",children:"CheckEmailExists"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const CheckEmailExists = async (email: string) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}user_management/checkEmail/\${email}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsx(r.p,{children:"-Descripción: Verifica si un correo electrónico existe."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"email"})}),": Correo electrónico a verificar."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.CheckEmailExists('user@example.com')\r
    .then(exists => {\r
        console.log('Correo verificado:', exists);\r
    })\r
    .catch(error => {\r
        console.error('Error al verificar correo:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getusers",children:"GetUsers"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetUsers = async () => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}users\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene todos los usuarios."}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetUsers()\r
    .then(users => {\r
        console.log('Usuarios obtenidos:', users);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener usuarios:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getexercisesbyroutinename",children:"GetExercisesByRoutineName"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetExercisesByRoutineName = async (routineName: string) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}routine_management/getExercisesFromRoutine/\${routineName}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene los ejercicios por el nombre de la rutina."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"routineName"})}),": Nombre de la rutina."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetExercisesByRoutineName('Rutina 1')\r
    .then(exercises => {\r
        console.log('Ejercicios obtenidos:', exercises);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicios:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"checkhasroutine",children:"CheckHasRoutine"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const CheckHasRoutine = async (patientId: number | undefined) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        if (patientId === undefined) {\r
            console.error("Patient ID is undefined");\r
            return;\r
        }\r
        const response = await axios.get(\`\${baseUrl}routine_management/checkHasRoutine/\${patientId}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Verifica si un paciente tiene una rutina asignada."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"patientId"})}),": ID del paciente."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.CheckHasRoutine(1)\r
    .then(hasRoutine => {\r
        console.log('Paciente tiene rutina:', hasRoutine);\r
    })\r
    .catch(error => {\r
        console.error('Error al verificar rutina del paciente:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getroutinebyid",children:"GetRoutineById"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetRoutineById = async (routineId: number) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}routine_management/getRoutineById/\${routineId}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene una rutina por su ID."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"routineId"})}),": ID de la rutina."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetRoutineById(1)\r
    .then(routine => {\r
        console.log('Rutina obtenida:', routine);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener rutina:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getexercisesbyid",children:"GetExercisesById"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetExerciseById = async (exerciseId: string) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}routine_management/getExerciseById/\${exerciseId}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene un ejercicio por su ID."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"exerciseId"})}),": ID del ejercicio."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetExerciseById('1')\r
    .then(exercise => {\r
        console.log('Ejercicio obtenido:', exercise);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicio:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getallexercises",children:"GetAllExercises"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetAllExercises = async () => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}exercises\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene todos los ejercicios."}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetAllExercises()\r
    .then(exercises => {\r
        console.log('Ejercicios obtenidos:', exercises);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener ejercicios:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"refreshjwtoken",children:"RefreshJWToken"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const RefreshJWToken = async () => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.post(\`\${baseUrl}Sign/RefreshJWToken\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Refresca el token JWT."}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.RefreshJWToken()\r
    .then(token => {\r
        console.log('Token refrescado:', token);\r
    })\r
    .catch(error => {\r
        console.error('Error al refrescar token:', error);\r
    });\r

`})}),`
`,e.jsx(r.h3,{id:"getaccesstoken",children:"GetAccessToken"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const GetAccessToken = async (email: string) => {\r
    const authorizationHeader: authHeader = authHeaders();\r
    try {\r
        const response = await axios.get(\`\${baseUrl}Sign/getAccessToken/\${email}\`, authorizationHeader);\r
        return response.data;\r
    } catch (error) {\r
        console.error(error);\r
    }\r
}\r

`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Descripción: Obtiene un token de acceso utilizando el correo electrónico del usuario."}),`
`,e.jsxs(r.li,{children:["Parámetros:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"email"})}),": Correo electrónico del usuario."]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`GetDataService.GetAccessToken('user@example.com')\r
    .then(token => {\r
        console.log('Token de acceso obtenido:', token);\r
    })\r
    .catch(error => {\r
        console.error('Error al obtener token de acceso:', error);\r
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
`]})]})}function E(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{E as default};
