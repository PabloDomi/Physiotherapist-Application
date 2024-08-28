import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as t}from"./index-DtGqrCZN.js";import{M as o}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./useGlobalState-BC4VoH9w.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"BusinessLogic/Hooks/usePatients"}),`
`,e.jsx(n.h1,{id:"usepatients",children:"usePatients"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"usePatients"})," se utiliza para obtener y gestionar la lista de pacientes desde el servicio de datos. Este hook maneja el estado de carga mientras se realiza la solicitud y almacena los datos de los pacientes en el estado global."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import usePatients from '../../hooks/usePatients';\r
\r
const PatientsComponent = () => {\r
    const { isLoading } = usePatients();\r
\r
    return (\r
        <div>\r
            {isLoading ? <p>Cargando pacientes...</p> : <p>Pacientes cargados.</p>}\r
        </div>\r
    );\r
};\r
\r
export default PatientsComponent;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isLoading"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: boolean"}),`
`,e.jsx(n.li,{children:"Descripción: Estado que indica si los datos de los pacientes se están cargando."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"usePatients"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Descripción: Hook que obtiene la lista de pacientes desde el servicio GetDataService y actualiza el estado global con los datos obtenidos."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el servicio GetDataService esté correctamente implementado y configurado para obtener los datos de los pacientes."}),`
`,e.jsx(n.li,{children:"La función setPatients debe estar disponible en el estado global a través de useGlobalState."}),`
`]})]})}function D(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{D as default};
