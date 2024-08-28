import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as l}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"BusinessLogic/Hooks/useEditExercise"}),`
`,e.jsx(i.h1,{id:"useeditexercise",children:"useEditExercise"}),`
`,e.jsxs(i.p,{children:["El hook ",e.jsx(i.code,{children:"useEditExercise"})," se utiliza para gestionar el estado y la lógica necesaria para editar una rutina de ejercicios. Este hook proporciona un modal con un formulario que permite a los usuarios seleccionar y actualizar los detalles de una rutina de ejercicios."]}),`
`,e.jsx(i.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import React from 'react';\r
import useEditExercise from '../../hooks/useEditExercise';\r
\r
const EditExerciseComponent = () => {\r
    const { \r
        showModalEditExercise, \r
        toggleModalEditExercise, \r
        modalTitleEditExercise, \r
        modalContentEditExercise, \r
        setExercise \r
    } = useEditExercise();\r
\r
    return (\r
        <div>\r
            <button onClick={toggleModalEditExercise}>Actualizar Ejercicio</button>\r
            {showModalEditExercise && (\r
                <div>\r
                    <h2>{modalTitleEditExercise}</h2>\r
                    {modalContentEditExercise}\r
                </div>\r
            )}\r
        </div>\r
    );\r
};\r
\r
export default EditExerciseComponent;
`})}),`
`,e.jsx(i.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(i.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"showModalEditExercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal para editar una rutina de ejercicios está visible o no."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"exercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: Exercise | undefined"}),`
`,e.jsx(i.li,{children:"Descripción: Ejercicio seleccionado para ser editado."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"EditExerciseData"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: EditExerciseDataTypes | undefined"}),`
`,e.jsx(i.li,{children:"Descripción: Datos del ejercicio que se está editando."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"toggleModalEditExercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: () => void"}),`
`,e.jsx(i.li,{children:"Descripción: Función que alterna la visibilidad del modal para editar una rutina de ejercicios."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"setExercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: (exercise: Exercise | undefined) => void"}),`
`,e.jsx(i.li,{children:"Descripción: Función que establece el ejercicio actual a ser editado."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h3,{id:"constantes",children:"Constantes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"modalTitleEditExercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: string"}),`
`,e.jsx(i.li,{children:"Valor: 'Actualizar Rutina'"}),`
`,e.jsx(i.li,{children:"Descripción: Título del modal para editar una rutina de ejercicios."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"modalContentEditExercise"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: JSX.Element"}),`
`,e.jsx(i.li,{children:"Descripción: Contenido del modal, que incluye un formulario con campos para editar los detalles de la rutina de ejercicios."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"theme"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tipo: string"}),`
`,e.jsx(i.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h3,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(i.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"npm install react-bootstrap"})}),`
`]}),`
`,e.jsx(i.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Asegúrate de que los datos de ejercicios y rutinas estén correctamente configurados en el estado global para que el hook funcione correctamente."}),`
`,e.jsx(i.li,{children:"La función setExercise se utiliza para establecer el ejercicio que se va a editar antes de abrir el modal."}),`
`]})]})}function M(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
