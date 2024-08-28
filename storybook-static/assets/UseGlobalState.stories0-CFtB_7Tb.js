import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as l}from"./index-DtGqrCZN.js";import{M as a}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"BusinessLogic/StateManagement/useGlobalState"}),`
`,e.jsx(i.h1,{id:"useglobalstate",children:"useGlobalState"}),`
`,e.jsxs(i.p,{children:["La store ",e.jsx(i.code,{children:"useGlobalState"})," se utiliza para gestionar estados globales en la aplicación utilizando ",e.jsx(i.code,{children:"zustand"}),". Esta store maneja diferentes estados y métodos para actualizarlos."]}),`
`,e.jsx(i.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import React from 'react';\r
import { useGlobalState } from '../../store/useGlobalState';\r
\r
const ExampleComponent = () => {\r
    const view = useGlobalState((state) => state.view);\r
    const changeView = useGlobalState((state) => state.changeView);\r
    const theme = useGlobalState((state) => state.theme);\r
    const toggleTheme = useGlobalState((state) => state.toggleTheme);\r
\r
    return (\r
        <div>\r
            <h1>Vista Actual: {view}</h1>\r
            <button onClick={() => changeView('Nueva Vista')}>Cambiar Vista</button>\r
            <h2>Tema Actual: {theme}</h2>\r
            <button onClick={toggleTheme}>Alternar Tema</button>\r
        </div>\r
    );\r
};\r
\r
export default ExampleComponent;
`})}),`
`,e.jsx(i.h2,{id:"estados-y-métodos",children:"Estados y Métodos"}),`
`,e.jsx(i.h3,{id:"view",children:"view"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica la vista actual de la aplicación."}),`
`,e.jsx(i.li,{children:"Tipo: string"}),`
`,e.jsxs(i.li,{children:["Método asociado: ",e.jsx(i.code,{children:"changeView"})]}),`
`,e.jsx(i.li,{children:"Descripción del método: Cambia la vista actual."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const view = useGlobalState((state) => state.view);\r
const changeView = useGlobalState((state) => state.changeView);
`})}),`
`,e.jsx(i.h3,{id:"user",children:"user"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda la información del usuario actual."}),`
`,e.jsx(i.li,{children:"Tipo: UserAdmin | null"}),`
`,e.jsx(i.li,{children:"Método asociado: setUser"}),`
`,e.jsx(i.li,{children:"Descripción del método: Establece un nuevo usuario y lo guarda en el almacenamiento local."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const user = useGlobalState((state) => state.user);\r
const setUser = useGlobalState((state) => state.setUser);
`})}),`
`,e.jsx(i.h3,{id:"patients",children:"patients"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda la lista de pacientes."}),`
`,e.jsx(i.li,{children:"Tipo: User[]"}),`
`,e.jsx(i.li,{children:"Método asociado: setPatients"}),`
`,e.jsx(i.li,{children:"Descripción del método: Establece una nueva lista de pacientes."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const patients = useGlobalState((state) => state.patients);\r
const setPatients = useGlobalState((state) => state.setPatients);
`})}),`
`,e.jsx(i.h3,{id:"customstatsdata",children:"customStatsData"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda datos personalizados de estadísticas."}),`
`,e.jsx(i.li,{children:"Tipo: CustomStatsData | undefined"}),`
`,e.jsx(i.li,{children:"Método asociado: changeCustomStatsData, setCustomStatsDataUndefined"}),`
`,e.jsxs(i.li,{children:["Descripción de los métodos:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"changeCustomStatsData"})}),": Cambia los datos personalizados de estadísticas."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"setCustomStatsDataUndefined"})}),": Establece customStatsData como undefined."]}),`
`]}),`
`]}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const customStatsData = useGlobalState((state) => state.customStatsData);\r
const changeCustomStatsData = useGlobalState((state) => state.changeCustomStatsData);\r
const setCustomStatsDataUndefined = useGlobalState((state) => state.setCustomStatsDataUndefined);
`})}),`
`,e.jsx(i.h3,{id:"theme",children:"theme"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda el tema actual de la aplicación."}),`
`,e.jsx(i.li,{children:"Tipo: string"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleTheme"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna el tema entre 'light' y 'dark'."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const theme = useGlobalState((state) => state.theme);\r
const toggleTheme = useGlobalState((state) => state.toggleTheme);
`})}),`
`,e.jsx(i.h3,{id:"routines",children:"routines"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda la lista de rutinas."}),`
`,e.jsx(i.li,{children:"Tipo: any[]"}),`
`,e.jsx(i.li,{children:"Método asociado: setRoutines"}),`
`,e.jsx(i.li,{children:"Descripción del método: Establece una nueva lista de rutinas."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const routines = useGlobalState((state) => state.routines);\r
const setRoutines = useGlobalState((state) => state.setRoutines);
`})}),`
`,e.jsx(i.h3,{id:"exercises",children:"exercises"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que guarda la lista de ejercicios."}),`
`,e.jsx(i.li,{children:"Tipo: any[]"}),`
`,e.jsx(i.li,{children:"Método asociado: setExercises"}),`
`,e.jsx(i.li,{children:"Descripción del método: Establece una nueva lista de ejercicios."}),`
`,e.jsx(i.li,{children:"Uso:"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`const exercises = useGlobalState((state) => state.exercises);\r
const setExercises = useGlobalState((state) => state.setExercises);
`})}),`
`,e.jsx(i.h3,{id:"modales-de-la-aplicación",children:"Modales de la aplicación"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showChangePasswordModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de cambio de contraseña está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleChangePasswordModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de cambio de contraseña."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showChangePasswordModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de cambio de contraseña está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleChangePasswordModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de cambio de contraseña."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showRegisterPatientModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de registro de paciente está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleRegisterPatientModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de registro de paciente."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showAreUSureModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de confirmación está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleAreUSureModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de confirmación."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showDeleteAdminModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de eliminación de administrador está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleDeleteAdminModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de eliminación de administrador."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showAddRoutineModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de adición de rutina está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleAddRoutineModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de adición de rutina."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showAddExerciseToRoutineModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de adición de ejercicio a rutina está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleAddExerciseToRoutineModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de adición de ejercicio a rutina."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showEditRoutineModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de edición de rutina está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleEditRoutineModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de edición de rutina."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showDeleteRoutineModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de eliminación de rutina está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleDeleteRoutineModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de eliminación de rutina."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showDeleteExerciseModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de eliminación de ejercicio está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleDeleteExerciseModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de eliminación de ejercicio."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"showEditExerciseModal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Descripción: Estado que indica si el modal de edición de ejercicio está visible."}),`
`,e.jsx(i.li,{children:"Tipo: boolean"}),`
`,e.jsx(i.li,{children:"Método asociado: toggleEditExerciseModal"}),`
`,e.jsx(i.li,{children:"Descripción del método: Alterna la visibilidad del modal de edición de ejercicio."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(i.p,{children:"Para utilizar esta store, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"npm install zustand"})}),`
`]}),`
`,e.jsx(i.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Asegúrate de manejar los estados globales de manera adecuada para evitar conflictos y mantener la coherencia en la aplicación."}),`
`]})]})}function S(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{S as default};
