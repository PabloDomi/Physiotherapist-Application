import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Hooks/useAddExerciseToRoutine"}),`
`,e.jsx(n.h1,{id:"useaddexercisetoroutine",children:"useAddExerciseToRoutine"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useAddExerciseToRoutine"})," se utiliza para gestionar el estado y la lógica necesaria para agregar un ejercicio a una rutina específica. Este hook proporciona un modal con un formulario que permite a los usuarios ingresar los detalles del ejercicio y seleccionar la rutina a la cual se agregará el ejercicio."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import useAddExerciseToRoutine from '../../hooks/useAddExerciseToRoutine';\r
import React from 'react';\r
import { Modal, Button } from 'react-bootstrap';\r
import { RoutineData } from '../../utils/types';\r
\r
const listRoutines: RoutineData[] = [\r
    // Ejemplo de datos de rutinas\r
    { id: 1, name: 'Rutina 1', description: 'Descripción de Rutina 1', estimatedTime: 30, patient_id: 1 },\r
    { id: 2, name: 'Rutina 2', description: 'Descripción de Rutina 2', estimatedTime: 45, patient_id: 2 }\r
];\r
\r
const AddExerciseToRoutineComponent = () => {\r
    const { \r
        showModalAddExerciseToRoutine, \r
        toggleModalAddExerciseToRoutine, \r
        modalTitleAddExerciseToRoutine, \r
        modalContentAddExerciseToRoutine \r
    } = useAddExerciseToRoutine(listRoutines);\r
\r
    return (\r
        <div>\r
            <Button onClick={toggleModalAddExerciseToRoutine}>Agregar Ejercicio a Rutina</Button>\r
            <Modal show={showModalAddExerciseToRoutine} onHide={toggleModalAddExerciseToRoutine}>\r
                <Modal.Header closeButton>\r
                    <Modal.Title>{modalTitleAddExerciseToRoutine}</Modal.Title>\r
                </Modal.Header>\r
                <Modal.Body>\r
                    {modalContentAddExerciseToRoutine}\r
                </Modal.Body>\r
                <Modal.Footer>\r
                    <Button variant="secondary" onClick={toggleModalAddExerciseToRoutine}>\r
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
export default AddExerciseToRoutineComponent;
`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"showModalAddExerciseToRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tipo"}),": ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Descripción"}),": Estado que indica si el modal para agregar un ejercicio a una rutina está visible o no."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AddExerciseToRoutineData"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tipo"}),": ",e.jsx(n.code,{children:"AddExerciseToRoutineDataTypes | null"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Descripción"}),": Objeto que contiene los datos del ejercicio que se va a agregar a la rutina."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggleModalAddExerciseToRoutine"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tipo"}),": ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Descripción"}),": Función que alterna la visibilidad del modal para agregar un ejercicio a una rutina."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"constantes",children:"Constantes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"modalTitleAddExerciseToRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tipo"}),": ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Valor"}),": 'Agregar Ejercicio a Rutina'"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Descripción"}),": Título del modal para agregar un ejercicio a una rutina."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"modalContentAddExerciseToRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tipo"}),": ",e.jsx(n.code,{children:"JSX.Element"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Descripción"}),": Contenido del modal, que incluye un formulario con los campos necesarios para agregar un ejercicio a una rutina."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install react-bootstrap"})}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que los datos de las rutinas estén correctamente configurados en el estado global para que el hook funcione correctamente."}),`
`,e.jsx(n.li,{children:"La función setAddExerciseToRoutineData actualiza el estado del formulario a medida que el usuario ingresa datos."}),`
`,e.jsx(n.li,{children:"El formulario está configurado para cambiar dinámicamente los datos del ejercicio basado en la entrada del usuario."}),`
`]})]})}function M(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{M as default};
