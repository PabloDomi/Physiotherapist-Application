import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./index-B9YNeJOq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"BusinessLogic/Hooks/useEditRoutine"}),`
`,n.jsx(i.h1,{id:"useeditroutine",children:"useEditRoutine"}),`
`,n.jsxs(i.p,{children:["El hook ",n.jsx(i.code,{children:"useEditRoutine"})," se utiliza para gestionar el estado y la lógica necesaria para editar una rutina. Este hook proporciona un modal con un formulario que permite a los usuarios seleccionar y actualizar los detalles de una rutina."]}),`
`,n.jsx(i.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import useEditRoutine from '../../hooks/useEditRoutine';\r
import React, { useRef } from 'react';\r
\r
const EditRoutineComponent = () => {\r
    const { \r
        showModalEditRoutine, \r
        toggleModalEditRoutine, \r
        modalTitleEditRoutine, \r
        modalContentEditRoutine, \r
        setRutina \r
    } = useEditRoutine();\r
\r
    return (\r
        <div>\r
            <button onClick={toggleModalEditRoutine}>Actualizar Rutina</button>\r
            {showModalEditRoutine && (\r
                <div>\r
                    <h2>{modalTitleEditRoutine}</h2>\r
                    {modalContentEditRoutine}\r
                </div>\r
            )}\r
        </div>\r
    );\r
};
`})}),`
`,n.jsx(i.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,n.jsx(i.h3,{id:"estados",children:"Estados"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"showModalEditRoutine"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: boolean"}),`
`,n.jsx(i.li,{children:"Descripción: Estado que indica si el modal para editar una rutina está visible o no."}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"rutina"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: RoutineData | undefined"}),`
`,n.jsx(i.li,{children:"Descripción: Rutina seleccionada para ser editada."}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"EditRoutineData"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: EditRoutineDataTypes | undefined"}),`
`,n.jsx(i.li,{children:"Descripción: Datos de la rutina que se está editando."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"métodos",children:"Métodos"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["`",n.jsx(i.strong,{children:"toggleModalEditRoutine"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: () => void"}),`
`,n.jsx(i.li,{children:"Descripción: Función que alterna la visibilidad del modal para editar una rutina."}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"setRutina"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: (rutina: RoutineData | undefined) => void"}),`
`,n.jsx(i.li,{children:"Descripción: Función que establece la rutina actual a ser editada."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"constantes",children:"Constantes"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"modalTitleEditRoutine"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: string"}),`
`,n.jsx(i.li,{children:"Valor: 'Actualizar Rutina'"}),`
`,n.jsx(i.li,{children:"Descripción: Título del modal para editar una rutina."}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"modalContentEditRoutine"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: JSX.Element"}),`
`,n.jsx(i.li,{children:"Descripción: Contenido del modal, que incluye un formulario con campos para editar los detalles de la rutina."}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"theme"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tipo: string"}),`
`,n.jsx(i.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"dependencias",children:"Dependencias"}),`
`,n.jsx(i.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"npm install react-bootstrap sonner"})}),`
`]}),`
`,n.jsx(i.h3,{id:"notas",children:"Notas"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Asegúrate de que los datos de rutinas y pacientes estén correctamente configurados en el estado global para que el hook funcione correctamente."}),`
`,n.jsx(i.li,{children:"La función setRutina se utiliza para establecer la rutina que se va a editar antes de abrir el modal."}),`
`,n.jsx(i.li,{children:"El hook maneja la verificación de si un paciente ya tiene una rutina asignada y muestra un mensaje de error si es necesario."}),`
`]})]})}function M(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{M as default};
