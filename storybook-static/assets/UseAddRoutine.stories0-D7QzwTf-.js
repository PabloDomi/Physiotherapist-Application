import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as a}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";/* empty css               */import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"BusinessLogic/Hooks/useAddRoutine"}),`
`,n.jsx(e.h1,{id:"useaddroutine",children:"useAddRoutine"}),`
`,n.jsxs(e.p,{children:["El hook ",n.jsx(e.code,{children:"useAddRoutine"})," se utiliza para gestionar el estado y la lógica necesaria para agregar una nueva rutina a un paciente. Este hook proporciona un modal con un formulario que permite a los usuarios ingresar los detalles de la rutina y seleccionar el paciente al cual se agregará la rutina."]}),`
`,n.jsx(e.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import useAddRoutine from '../../hooks/useAddRoutine';\r
import React from 'react';\r
import { Modal, Button } from 'react-bootstrap';\r
\r
const AddRoutineComponent = () => {\r
    const { \r
        showModalAddRoutine, \r
        toggleModalAddRoutine, \r
        modalTitleAddRoutine, \r
        modalContentAddRoutine \r
    } = useAddRoutine();\r
\r
    return (\r
        <div>\r
            <Button onClick={toggleModalAddRoutine}>Agregar Rutina</Button>\r
            <Modal show={showModalAddRoutine} onHide={toggleModalAddRoutine}>\r
                <Modal.Header closeButton>\r
                    <Modal.Title>{modalTitleAddRoutine}</Modal.Title>\r
                </Modal.Header>\r
                <Modal.Body>\r
                    {modalContentAddRoutine}\r
                </Modal.Body>\r
                <Modal.Footer>\r
                    <Button variant="secondary" onClick={toggleModalAddRoutine}>\r
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
export default AddRoutineComponent;
`})}),`
`,n.jsx(e.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,n.jsx(e.h3,{id:"estados",children:"Estados"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"showModalAddRoutine"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: boolean"}),`
`,n.jsx(e.li,{children:"Descripción: Estado que indica si el modal para agregar una rutina está visible o no."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"AddRoutineData"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: AddRoutineDataTypes | undefined"}),`
`,n.jsx(e.li,{children:"Descripción: Objeto que contiene los datos de la rutina que se va a agregar."}),`
`]}),`
`,n.jsx(e.h3,{id:"métodos",children:"Métodos"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"toggleModalAddRoutine"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: () => void"}),`
`,n.jsx(e.li,{children:"Descripción: Función que alterna la visibilidad del modal para agregar una rutina."}),`
`]}),`
`,n.jsx(e.h3,{id:"constantes",children:"Constantes"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"modalTitleAddRoutine"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: string"}),`
`,n.jsx(e.li,{children:"Valor: 'Agregar Rutina'"}),`
`,n.jsx(e.li,{children:"Descripción: Título del modal para agregar una rutina."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"modalContentAddRoutine"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: JSX.Element"}),`
`,n.jsx(e.li,{children:"Descripción: Contenido del modal, que incluye un formulario con los campos necesarios para agregar una rutina."}),`
`]}),`
`,n.jsx(e.h3,{id:"dependencias",children:"Dependencias"}),`
`,n.jsx(e.p,{children:"Para usar este hook, necesitas instalar las siguientes dependencias:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"npm install react-bootstrap"})}),`
`]}),`
`,n.jsx(e.h3,{id:"notas",children:"Notas"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Asegúrate de que los datos de los pacientes estén correctamente configurados en el estado global para que el hook funcione correctamente."}),`
`,n.jsx(e.li,{children:"La función setAddRoutineData actualiza el estado del formulario a medida que el usuario ingresa datos."}),`
`,n.jsx(e.li,{children:"El formulario está configurado para cambiar dinámicamente los datos de la rutina basada en la entrada del usuario."}),`
`]})]})}function D(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{D as default};
