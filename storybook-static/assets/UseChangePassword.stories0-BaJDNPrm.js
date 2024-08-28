import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as r}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"BusinessLogic/Hooks/useChangePassword"}),`
`,n.jsx(a.h1,{id:"usechangepassword",children:"useChangePassword"}),`
`,n.jsxs(a.p,{children:["El hook ",n.jsx(a.code,{children:"useChangePassword"})," se utiliza para gestionar el estado y la lógica necesaria para cambiar la contraseña del usuario. Este hook proporciona un modal con un formulario que permite a los usuarios ingresar su email, la contraseña actual y la nueva contraseña."]}),`
`,n.jsx(a.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-typescript",children:`import React from 'react';\r
import useChangePassword from '../../hooks/useChangePassword';\r
import { Modal, Button } from 'react-bootstrap';\r
\r
const ChangePasswordComponent = () => {\r
    const { \r
        showModalChangePassword, \r
        toggleModalChangePassword, \r
        modalTitleChangePassword, \r
        modalContentChangePassword, \r
        changePasswordData \r
    } = useChangePassword();\r
\r
    const handleChangePassword = () => {\r
        if (changePasswordData) {\r
            // Lógica para cambiar la contraseña\r
            console.log('Datos de cambio de contraseña:', changePasswordData);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            <Button onClick={toggleModalChangePassword}>Cambiar Contraseña</Button>\r
            <Modal show={showModalChangePassword} onHide={toggleModalChangePassword}>\r
                <Modal.Header closeButton>\r
                    <Modal.Title>{modalTitleChangePassword}</Modal.Title>\r
                </Modal.Header>\r
                <Modal.Body>\r
                    {modalContentChangePassword}\r
                </Modal.Body>\r
                <Modal.Footer>\r
                    <Button variant="secondary" onClick={toggleModalChangePassword}>\r
                        Cancelar\r
                    </Button>\r
                    <Button variant="primary" onClick={handleChangePassword} disabled={!changePasswordData}>\r
                        Guardar Cambios\r
                    </Button>\r
                </Modal.Footer>\r
            </Modal>\r
        </div>\r
    );\r
};\r
\r
export default ChangePasswordComponent;\r
\r

`})}),`
`,n.jsx(a.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,n.jsx(a.h3,{id:"estados",children:"Estados"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsxs(a.li,{children:[n.jsx(a.strong,{children:"showModalChangePassword"}),":",`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: boolean"}),`
`,n.jsx(a.li,{children:"Descripción: Estado que indica si el modal para cambiar la contraseña está visible o no."}),`
`]}),`
`]}),`
`,n.jsxs(a.li,{children:[n.jsx(a.strong,{children:"changePasswordData"}),":",`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: ChangePasswordDataTypes | null"}),`
`,n.jsx(a.li,{children:"Descripción: Objeto que contiene los datos del usuario necesarios para cambiar la contraseña."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(a.h3,{id:"métodos",children:"Métodos"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsxs(a.li,{children:[n.jsx(a.strong,{children:"toggleModalChangePassword"}),":",`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: () => void"}),`
`,n.jsx(a.li,{children:"Descripción: Función que alterna la visibilidad del modal para cambiar la contraseña."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(a.h3,{id:"constantes",children:"Constantes"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsxs(a.li,{children:[`
`,n.jsxs(a.p,{children:[n.jsx(a.strong,{children:"modalTitleChangePassword"}),":"]}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: string"}),`
`,n.jsx(a.li,{children:"Valor: 'Cambio de Contraseña'"}),`
`,n.jsx(a.li,{children:"Descripción: Título del modal para cambiar la contraseña."}),`
`]}),`
`]}),`
`,n.jsxs(a.li,{children:[`
`,n.jsxs(a.p,{children:[n.jsx(a.strong,{children:"modalContentChangePassword"}),":"]}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: JSX.Element"}),`
`,n.jsx(a.li,{children:"Descripción: Contenido del modal, que incluye un formulario con los campos necesarios para cambiar la contraseña."}),`
`]}),`
`]}),`
`,n.jsxs(a.li,{children:[`
`,n.jsxs(a.p,{children:[n.jsx(a.strong,{children:"theme"}),":"]}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Tipo: string"}),`
`,n.jsx(a.li,{children:"Descripción: Tema actual de la aplicación."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(a.h3,{id:"dependendias",children:"Dependendias"}),`
`,n.jsx(a.p,{children:"Para utilizar este hook necesitas instalar las siguientes dependencias:"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:n.jsx(a.code,{children:"npm install react-bootstrap"})}),`
`]}),`
`,n.jsx(a.h3,{id:"notas",children:"Notas"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:"Asegúrate de que los estados globales showChangePasswordModal y toggleChangePasswordModal estén correctamente configurados en tu estado global."}),`
`,n.jsx(a.li,{children:"La función setChangePasswordData actualiza el estado del formulario a medida que el usuario ingresa datos."}),`
`,n.jsx(a.li,{children:"El formulario está configurado para cambiar dinámicamente los datos del usuario basado en la entrada del usuario."}),`
`,n.jsx(a.li,{children:"Si alguno de los campos de changePasswordData está vacío, se deshabilita el botón de guardar cambios para evitar enviar formularios incompletos."}),`
`]})]})}function b(e={}){const{wrapper:a}={...o(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(s,{...e})}):s(e)}export{b as default};
