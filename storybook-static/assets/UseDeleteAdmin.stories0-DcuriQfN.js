import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as r}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function l(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"BusinessLogic/Hooks/useDeleteAdmin"}),`
`,n.jsx(e.h1,{id:"usedeleteadmin",children:"useDeleteAdmin"}),`
`,n.jsxs(e.p,{children:["El hook ",n.jsx(e.code,{children:"useDeleteAdmin"})," se utiliza para gestionar el estado y la lógica necesaria para eliminar un administrador. Este hook proporciona un modal con un formulario que permite a los usuarios seleccionar el administrador que desean eliminar."]}),`
`,n.jsx(e.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import React from 'react';\r
import useDeleteAdmin from '../../hooks/useDeleteAdmin';\r
\r
const DeleteAdminComponent = () => {\r
    const { \r
        showModalDeleteAdmin, \r
        toggleModalDeleteAdmin, \r
        modalTitleDeleteAdmin, \r
        modalContentDeleteAdmin \r
    } = useDeleteAdmin();\r
\r
    return (\r
        <div>\r
            <button onClick={toggleModalDeleteAdmin}>Eliminar Administrador</button>\r
            {showModalDeleteAdmin && (\r
                <div>\r
                    <h2>{modalTitleDeleteAdmin}</h2>\r
                    {modalContentDeleteAdmin}\r
                </div>\r
            )}\r
        </div>\r
    );\r
};\r
\r
export default DeleteAdminComponent;\r
\r

`})}),`
`,n.jsx(e.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,n.jsx(e.h3,{id:"estados",children:"Estados"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"showModalDeleteAdmin"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: boolean"}),`
`,n.jsx(e.li,{children:"Descripción: Estado que indica si el modal para eliminar un administrador está visible o no."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"userSelected"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: string | undefined"}),`
`,n.jsx(e.li,{children:"Descripción: Correo electrónico del administrador seleccionado para ser eliminado."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"admins"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: UserAdmin[] | undefined"}),`
`,n.jsx(e.li,{children:"Descripción: Lista de administradores obtenida del servicio."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"métodos",children:"Métodos"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"toggleModalDeleteAdmin"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: () => void"}),`
`,n.jsx(e.li,{children:"Descripción: Función que alterna la visibilidad del modal para eliminar un administrador."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"handleChange"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Tipo: (",n.jsx(e.code,{children:"event: React.ChangeEvent<HTMLSelectElement>"}),") => void"]}),`
`,n.jsx(e.li,{children:"Descripción: Función que maneja el cambio de selección en el formulario del modal."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"constantes",children:"Constantes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"modalTitleDeleteAdmin"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: string"}),`
`,n.jsx(e.li,{children:"Valor: 'Cambio de Contraseña'"}),`
`,n.jsx(e.li,{children:"Descripción: Título del modal para eliminar un administrador."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"modalContentDeleteAdmin"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tipo: JSX.Element"}),`
`,n.jsx(e.li,{children:"Descripción: Contenido del modal, que incluye un formulario con un campo de selección para elegir el administrador a eliminar."}),`
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
`,n.jsx(e.li,{children:"Asegúrate de que los datos de administradores estén correctamente configurados en el estado global para que el hook funcione correctamente."}),`
`,n.jsx(e.li,{children:"La función setUserSelected actualiza el estado del administrador seleccionado a medida que el usuario realiza la selección en el formulario."}),`
`,n.jsx(e.li,{children:"El formulario está configurado para cambiar dinámicamente los datos del administrador basado en la entrada del usuario."}),`
`]})]})}function M(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{M as default};
