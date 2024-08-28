import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as l}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Hooks/useDeleteExercise"}),`
`,e.jsx(n.h1,{id:"usedeleteexercise",children:"useDeleteExercise"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useDeleteExercise"})," se utiliza para gestionar el estado y la lógica necesaria para eliminar un ejercicio. Este hook proporciona un modal con un formulario que permite a los usuarios seleccionar el ejercicio que desean eliminar."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import useDeleteExercise from '../../hooks/useDeleteExercise';\r
\r
const DeleteExerciseComponent = () => {\r
    const { \r
        showModalDeleteExercise, \r
        toggleModalDeleteExercise, \r
        modalTitleDeleteExercise, \r
        modalContentDeleteExercise \r
    } = useDeleteExercise();\r
\r
    return (\r
        <div>\r
            <button onClick={toggleModalDeleteExercise}>Eliminar Ejercicio</button>\r
            {showModalDeleteExercise && (\r
                <div>\r
                    <h2>{modalTitleDeleteExercise}</h2>\r
                    {modalContentDeleteExercise}\r
                </div>\r
            )}\r
        </div>\r
    );\r
};\r
\r
export default DeleteExerciseComponent;\r
\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"showModalDeleteExercise"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: boolean"}),`
`,e.jsx(n.li,{children:"Descripción: Estado que indica si el modal para eliminar un ejercicio está visible o no."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"DeleteExerciseData"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: number | undefined"}),`
`,e.jsx(n.li,{children:"Descripción: ID del ejercicio seleccionado para ser eliminado."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"toggleModalDeleteExercise"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: () => void"}),`
`,e.jsx(n.li,{children:"Descripción: Función que alterna la visibilidad del modal para eliminar un ejercicio."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"constantes",children:"Constantes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"modalTitleDeleteExercise"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: string"}),`
`,e.jsx(n.li,{children:"Valor: 'Eliminar ejercicio'"}),`
`,e.jsx(n.li,{children:"Descripción: Título del modal para eliminar un ejercicio."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"modalContentDeleteExercise"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: JSX.Element"}),`
`,e.jsx(n.li,{children:"Descripción: Contenido del modal, que incluye un formulario con un campo de selección para elegir el ejercicio a eliminar."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"theme"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: string"}),`
`,e.jsx(n.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]})]})}function C(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{C as default};
