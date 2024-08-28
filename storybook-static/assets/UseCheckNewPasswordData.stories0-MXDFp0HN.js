import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function a(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Hooks/useCheckNewPasswordData"}),`
`,e.jsx(n.h1,{id:"usechecknewpassworddata",children:"useCheckNewPasswordData"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useCheckNewPasswordData"})," se utiliza para verificar la validez de los datos de cambio de contraseña proporcionados por el usuario. Este hook comprueba si las contraseñas coinciden, si tienen la longitud adecuada y si el email proporcionado existe en el sistema."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import useCheckNewPasswordData from '../../hooks/useCheckNewPasswordData';\r
import { ChangePasswordDataTypes } from '../../utils/types';\r
\r
const ChangePasswordValidationComponent = () => {\r
    const { checkChangePasswordFormData } = useCheckNewPasswordData();\r
\r
    const handleChangePassword = (data: ChangePasswordDataTypes) => {\r
        try {\r
            checkChangePasswordFormData(data);\r
            // Lógica para cambiar la contraseña si los datos son válidos\r
            console.log('Datos válidos:', data);\r
        } catch (error) {\r
            console.error('Error en los datos de cambio de contraseña:', error.message);\r
        }\r
    };\r
\r
    return (\r
        <div>\r
            {/* Aquí iría el formulario de cambio de contraseña y el botón para enviar */}\r
        </div>\r
    );\r
};\r
\r
export default ChangePasswordValidationComponent;
`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checkChangePasswordFormData"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: (data: ChangePasswordDataTypes) => void"}),`
`,e.jsxs(n.li,{children:["Descripción: Función que verifica la validez de los datos de cambio de contraseña.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Parámetros:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"data: Objeto que contiene el email, la contraseña actual y la nueva contraseña."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Errores:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lanza un error si no se proporcionan todos los datos necesarios."}),`
`,e.jsx(n.li,{children:"Lanza un error si las contraseñas no coinciden."}),`
`,e.jsx(n.li,{children:"Lanza un error si las contraseñas tienen menos de 6 caracteres."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el servicio GetDataService esté correctamente implementado y configurado para verificar la existencia del correo electrónico."}),`
`,e.jsx(n.li,{children:"La función checkChangePasswordFormData valida los datos del formulario de cambio de contraseña y arroja errores si los datos no son válidos."}),`
`]})]})}function k(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{k as default};
