import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as a}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"BusinessLogic/Services/RegisterPatientService"}),`
`,e.jsx(n.h1,{id:"registerpatientservice",children:"RegisterPatientService"}),`
`,e.jsxs(n.p,{children:["El servicio ",e.jsx(n.code,{children:"RegisterPatientService"})," se utiliza para registrar nuevos pacientes a través de solicitudes HTTP a la API. Este servicio maneja la autorización utilizando un token almacenado en el almacenamiento local."]}),`
`,e.jsx(n.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React, { useState } from 'react';\r
import RegisterPatientService from '../../services/RegisterPatientService';\r
import { registerPatientServiceProps } from '../../utils/types';\r
\r
const RegisterPatientComponent = () => {\r
    const [patient, setPatient] = useState<registerPatientServiceProps>({\r
        name: '',\r
        surname: '',\r
        age: 0,\r
        gender: '',\r
        routine_id: 0\r
    });\r
\r
    const handleRegister = async () => {\r
        try {\r
            const response = await RegisterPatientService(patient);\r
            console.log('Paciente registrado con éxito:', response);\r
        } catch (error) {\r
            console.error('Error en el registro de paciente:', error.message);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            <input\r
                type="text"\r
                placeholder="Nombre"\r
                value={patient.name}\r
                onChange={(e) => setPatient({ ...patient, name: e.target.value })}\r
            />\r
            <input\r
                type="text"\r
                placeholder="Apellidos"\r
                value={patient.surname}\r
                onChange={(e) => setPatient({ ...patient, surname: e.target.value })}\r
            />\r
            <input\r
                type="number"\r
                placeholder="Edad"\r
                value={patient.age}\r
                onChange={(e) => setPatient({ ...patient, age: Number(e.target.value) })}\r
            />\r
            <select\r
                value={patient.gender}\r
                onChange={(e) => setPatient({ ...patient, gender: e.target.value })}\r
            >\r
                <option value="">Seleccionar género</option>\r
                <option value="Masculino">Masculino</option>\r
                <option value="Femenino">Femenino</option>\r
                <option value="Otro">Otro</option>\r
            </select>\r
            <input\r
                type="number"\r
                placeholder="ID de la rutina"\r
                value={patient.routine_id}\r
                onChange={(e) => setPatient({ ...patient, routine_id: Number(e.target.value) })}\r
            />\r
            <button onClick={handleRegister}>Registrar Paciente</button>\r
        </div>\r
    );\r
};\r
\r
export default RegisterPatientComponent;\r

`})}),`
`,e.jsx(n.h2,{id:"métodos",children:"Métodos"}),`
`,e.jsx(n.h3,{id:"authheaders",children:"authHeaders"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const authHeaders = () => {\r
    return {\r
        headers: {\r
            Authorization: \`Bearer \${localStorage.getItem('token')}\`\r
        }\r
    }\r
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Descripción: Genera los encabezados de autorización necesarios para las solicitudes HTTP utilizando el token almacenado en el almacenamiento local."}),`
`]}),`
`,e.jsx(n.h3,{id:"registerpatientservice-1",children:"RegisterPatientService"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import axios from 'axios'\r
import { baseUrl } from '../utils/Constants'\r
import { authHeader, registerPatientServiceProps } from '../utils/types'\r
\r
const authHeaders = () => {\r
    return {\r
        headers: {\r
            Authorization: \`Bearer \${localStorage.getItem('token')}\`\r
        }\r
    }\r
}\r
\r
async function RegisterPatientService(credentials: registerPatientServiceProps) {\r
    const authorizationHeader: authHeader = authHeaders();\r
\r
    try {\r
        const { data } = await axios.post(\`\${baseUrl}patient_management/registerPatient\`, credentials, authorizationHeader);\r
        return data;\r
    } catch (error) {\r
        throw new Error("Error en el registro de paciente");\r
    }\r
}\r
\r
export default RegisterPatientService;\r

`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Descripción: Realiza una solicitud HTTP POST para registrar un nuevo paciente."}),`
`,e.jsxs(n.li,{children:["Parámetros:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"credentials"})}),": Un objeto que contiene los datos necesarios para registrar al paciente."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import RegisterPatientService from '../../services/RegisterPatientService';\r
\r
const newPatient = {\r
    name: 'Juan',\r
    surname: 'Perez',\r
    age: 30,\r
    gender: 'Masculino',\r
    routine_id: 1\r
};\r
\r
RegisterPatientService(newPatient)\r
    .then(response => {\r
        console.log('Paciente registrado con éxito:', response);\r
    })\r
    .catch(error => {\r
        console.error('Error en el registro de paciente:', error.message);\r
    });\r

`})}),`
`,e.jsx(n.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este servicio, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install axios"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el token se maneje de manera segura y que no se exponga en lugares no seguros."}),`
`,e.jsx(n.li,{children:"La URL base de la API debe estar correctamente configurada en ../utils/Constants."}),`
`]})]})}function R(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{R as default};
