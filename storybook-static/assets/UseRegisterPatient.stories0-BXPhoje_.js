import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as s}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./schemas-rfPO-qWq.js";import"./index-Cu9bd8lq.js";/* empty css                     */import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"BusinessLogic/Hooks/useRegisterPatient"}),`
`,e.jsx(n.h1,{id:"useregisterpatient",children:"useRegisterPatient"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useRegisterPatient"})," se utiliza para gestionar el registro de un paciente. Este hook maneja el estado del formulario de registro y las validaciones, además de mostrar mensajes de error en caso de que los datos no cumplan con los requisitos."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import useRegisterPatient from '../../hooks/useRegisterPatient';\r
import React from 'react';\r
import { Modal, Button } from 'react-bootstrap';\r
\r
const RegisterPatientComponent = () => {\r
    const { \r
        errorMessage, \r
        showModalRegisterPatient, \r
        toggleModalRegisterPatient, \r
        modalTitleRegisterPatient, \r
        modalContentRegisterPatient \r
    } = useRegisterPatient();\r
\r
    return (\r
        <div>\r
            <Button onClick={toggleModalRegisterPatient}>Registrar Paciente</Button>\r
            <Modal show={showModalRegisterPatient} onHide={toggleModalRegisterPatient}>\r
                <Modal.Header closeButton>\r
                    <Modal.Title>{modalTitleRegisterPatient}</Modal.Title>\r
                </Modal.Header>\r
                <Modal.Body>\r
                    {modalContentRegisterPatient}\r
                    {errorMessage.message && (\r
                        <div className={\`alert alert-\${errorMessage.severity}\`} role="alert">\r
                            {errorMessage.message}\r
                        </div>\r
                    )}\r
                </Modal.Body>\r
                <Modal.Footer>\r
                    <Button variant="secondary" onClick={toggleModalRegisterPatient}>\r
                        Cerrar\r
                    </Button>\r
                    <Button variant="primary" type="submit">\r
                        Guardar Cambios\r
                    </Button>\r
                </Modal.Footer>\r
            </Modal>\r
        </div>\r
    );\r
};\r
\r
export default RegisterPatientComponent;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"errorMessage"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"{ message: string, severity: 'error' | 'warning' | 'info' | 'success' }"})]}),`
`,e.jsx(n.li,{children:"Descripción: Mensaje de error actual que se muestra en el formulario."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"showModalRegisterPatient"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Descripción: Estado que indica si el modal para registrar un paciente está visible o no."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"registerPatientData"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"RegisterPatientDataTypes | undefined"})]}),`
`,e.jsx(n.li,{children:"Descripción: Datos del paciente que se está registrando."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"toggleModalRegisterPatient"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Descripción: Función que alterna la visibilidad del modal para registrar un paciente."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"handleRegisterPatientSubmit"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"(data: RegisterPatientSchema) => void"})]}),`
`,e.jsx(n.li,{children:"Descripción: Función que maneja el envío del formulario de registro de paciente."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"constantes",children:"Constantes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"modalTitleRegisterPatient"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:["Valor: ",e.jsx(n.code,{children:"'Registro de Paciente'"})]}),`
`,e.jsx(n.li,{children:"Descripción: Título del modal para registrar un paciente."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"modalContentRegisterPatient"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"JSX.Element"})]}),`
`,e.jsx(n.li,{children:"Descripción: Contenido del modal, que incluye un formulario con campos para registrar los detalles del paciente."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"theme"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install react-bootstrap react-hook-form @hookform/resolvers zod"})}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el esquema registerPatientFormSchema esté correctamente definido en ../utils/schemas."}),`
`,e.jsx(n.li,{children:"La validación del formulario y la gestión de los datos del paciente se manejan utilizando react-hook-form y zod."}),`
`,e.jsx(n.li,{children:"La función setRegisterPatientData actualiza el estado del formulario a medida que el usuario ingresa datos."}),`
`,e.jsx(n.li,{children:"Los mensajes de error se muestran en función de las validaciones definidas en el esquema registerPatientFormSchema."}),`
`]})]})}function T(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
