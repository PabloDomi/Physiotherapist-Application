import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as l}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"BusinessLogic/Hooks/useAreUSure"}),`
`,n.jsx(e.h1,{id:"useareusure",children:"useAreUSure"}),`
`,n.jsxs(e.p,{children:["El hook ",n.jsx(e.code,{children:"useAreUSure"})," se utiliza para gestionar el estado y la lógica necesaria para mostrar un modal de confirmación cuando el usuario realiza una acción que requiere confirmación."]}),`
`,n.jsx(e.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import React from 'react';\r
import useAreUSure from '../../hooks/useAreUSure';\r
import { Modal, Button } from 'react-bootstrap';\r
\r
const AreUSureComponent = () => {\r
    const { \r
        showModalAreUSure, \r
        toggleModalAreUSure, \r
        modalTitleAreUSure, \r
        modalContentAreUSure \r
    } = useAreUSure('¿Está seguro de que desea realizar esta acción?');\r
\r
    return (\r
        <div>\r
            <Button onClick={toggleModalAreUSure}>Confirmar Acción</Button>\r
            <Modal show={showModalAreUSure} onHide={toggleModalAreUSure}>\r
                <Modal.Header closeButton>\r
                    <Modal.Title>{modalTitleAreUSure}</Modal.Title>\r
                </Modal.Header>\r
                <Modal.Body>\r
                    {modalContentAreUSure}\r
                </Modal.Body>\r
                <Modal.Footer>\r
                    <Button variant="secondary" onClick={toggleModalAreUSure}>\r
                        Cancelar\r
                    </Button>\r
                    <Button variant="primary" onClick={() => { /* Acción de confirmación */ }}>\r
                        Confirmar\r
                    </Button>\r
                </Modal.Footer>\r
            </Modal>\r
        </div>\r
    );\r
};\r
\r
export default AreUSureComponent;\r

`})}),`
`,n.jsx(e.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,n.jsx(e.h3,{id:"estados",children:"Estados"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showModalAreUSure"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: boolean"}),`
`,n.jsx(e.li,{children:"Descripción: Estado que indica si el modal de confirmación está visible o no."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"métodos",children:"Métodos"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"toggleModalAreUSure"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: () => void"}),`
`,n.jsx(e.li,{children:"Descripción: Función que alterna la visibilidad del modal de confirmación."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"constantes",children:"Constantes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"modalTitleAreUSure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: string"}),`
`,n.jsx(e.li,{children:"Valor: '¿Está seguro de los cambios?'"}),`
`,n.jsx(e.li,{children:"Descripción: Título del modal de confirmación."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"modalContentAreUSure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: JSX.Element"}),`
`,n.jsx(e.li,{children:"Descripción: Contenido del modal, que incluye un mensaje de información sobre la acción a confirmar."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"theme"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: string"}),`
`,n.jsx(e.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"notas",children:"Notas"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Asegúrate de que los estados globales showAreUSureModal y toggleAreUSureModal estén correctamente configurados en tu estado global."}),`
`,n.jsx(e.li,{children:"La función toggleModalAreUSure se utiliza para abrir y cerrar el modal de confirmación."}),`
`,n.jsx(e.li,{children:"El contenido del modal y su título se pueden personalizar mediante los parámetros proporcionados al hook."}),`
`]})]})}function f(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{f as default};
