import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as r}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"BusinessLogic/Hooks/useDeleteRoutine"}),`
`,e.jsx(n.h1,{id:"usedeleteroutine",children:"useDeleteRoutine"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useDeleteRoutine"})," se utiliza para gestionar el estado y la lógica necesaria para eliminar una rutina. Este hook proporciona un modal con un formulario que permite a los usuarios seleccionar la rutina que desean eliminar."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import useDeleteRoutine from '../../hooks/useDeleteRoutine';\r
\r
const DeleteRoutineComponent = () => {\r
    const { \r
        showModalDeleteRoutine, \r
        toggleModalDeleteRoutine, \r
        modalTitleDeleteRoutine, \r
        modalContentDeleteRoutine \r
    } = useDeleteRoutine();\r
\r
    return (\r
        <div>\r
            <button onClick={toggleModalDeleteRoutine}>Eliminar Rutina</button>\r
            {showModalDeleteRoutine && (\r
                <div>\r
                    <h2>{modalTitleDeleteRoutine}</h2>\r
                    {modalContentDeleteRoutine}\r
                </div>\r
            )}\r
        </div>\r
    );\r
};\r
\r
export default DeleteRoutineComponent;\r
\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"showModalDeleteRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: boolean"}),`
`,e.jsx(n.li,{children:"Descripción: Estado que indica si el modal para eliminar una rutina está visible o no."}),`
`]}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"DeleteRoutineData"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: DeleteRoutineDataTypes | undefined"}),`
`,e.jsx(n.li,{children:"Descripción: Datos de la rutina seleccionada para ser eliminada, contiene el ID de la rutina."}),`
`]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"toggleModalDeleteRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: () => void"}),`
`,e.jsx(n.li,{children:"Descripción: Función que alterna la visibilidad del modal para eliminar una rutina."}),`
`]}),`
`,e.jsx(n.h3,{id:"constantes",children:"Constantes"}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"modalTitleDeleteRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: string"}),`
`,e.jsx(n.li,{children:"Valor: 'Eliminar Rutina'"}),`
`,e.jsx(n.li,{children:"Descripción: Título del modal para eliminar una rutina."}),`
`]}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"modalContentDeleteRoutine"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: JSX.Element"}),`
`,e.jsx(n.li,{children:"Descripción: Contenido del modal, que incluye un formulario con un campo de selección para elegir la rutina a eliminar."}),`
`]}),`
`,e.jsxs(n.p,{children:["-",e.jsx(n.strong,{children:"theme"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: string"}),`
`,e.jsx(n.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]})]})}function T(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{T as default};
