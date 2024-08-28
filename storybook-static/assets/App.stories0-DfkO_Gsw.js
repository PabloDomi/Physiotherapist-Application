import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as o}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./Estadisticas-DKXXw9SC.js";import"./Rutinas-B4tLrwJ5.js";import"./Ejercicios-CcmcvJdI.js";import"./useGlobalState-BC4VoH9w.js";import"./NotFound-CyFgMrNy.js";import"./Navbar-B0U0ukiJ.js";import"./ButtonToggleTheme-YG52qj8_.js";/* empty css               */import"./index-Cu9bd8lq.js";import"./Landing-yF3lo9Pt.js";import"./PasswordRecovery-BlNDuMwW.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";/* empty css                     */import"./Search-CjHq730h.js";import"./SearchList-AyX6pJhq.js";import"./SearchCard-C5s1QwXn.js";import"./MockData-C3cmd1qo.js";import"./IconButton-CIV-481g.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./styled-npw7yaFN.js";import"./ButtonBase-Bw7cOM54.js";import"./TransitionGroupContext-CH30vzyX.js";import"./createSvgIcon-BTnAIxLp.js";import"./Modal-DvMOhwvL.js";import"./index-CCAvIOUn.js";import"./ThemeProvider-CWR1dq9Q.js";import"./ChangePasswordService-An_RyOSA.js";import"./Constants-AkoCtDvz.js";import"./GetDataService-Bc2cEZCe.js";import"./index-B9YNeJOq.js";import"./Transition-CjjVMZtN.js";import"./index-SDyqs4cU.js";import"./usePatients-D6hsu-5h.js";import"./DefaultStatsChart-8C3-7OXX.js";import"./react-apexcharts.min-q-jgWU_n.js";import"./jspdf.es.min-DPnYKdTh.js";import"./Button-C_g_TbZn.js";import"./CustomStatsChart-C5ABQVL2.js";import"./PatientCard-CQjnIgmJ.js";import"./createSvgIcon-HuQyre34.js";import"./Paper-C2pHSKqs.js";import"./Loader-BQB4JS2V.js";import"./ListExpandExercises-CO9Zj70a.js";import"./KeyboardDoubleArrowRightOutlined-DPCburiO.js";import"./ListExpandRoutines-BFrfJhSS.js";import"./Form-8tuLUNbZ.js";import"./EditOutlined-CVcvQZMG.js";import"./ListExpandExercisesCustom-l_NEBNIM.js";import"./index-1VaAFRt_.js";import"./index-CeseEJRd.js";/* empty css                 */import"./LoginService-CmO1VqF6.js";import"./schemas-rfPO-qWq.js";import"./index.esm-Bebovizm.js";import"./zod-Cul73vRk.js";import"./ErrorAlert-sYkhl1t5.js";import"./SignUpFormField-C0w1utYX.js";import"./LoginFormField-BwS1s3rO.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"BusinessLogic/Router/App"}),`
`,e.jsx(n.h1,{id:"app",children:"App"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.code,{children:"App"})," se utiliza principalmente como enrutador de la aplicación. Este componente gestiona las rutas y renderiza los componentes correspondientes en función del estado de autenticación del usuario. Además, maneja el tema de la aplicación y actualiza los estados globales según sea necesario."]}),`
`,e.jsx(n.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import { BrowserRouter } from 'react-router-dom';\r
import App from './App';\r
\r
const Root = () => (\r
    <BrowserRouter>\r
        <App />\r
    </BrowserRouter>\r
);\r
\r
export default Root;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-del-componente",children:"Descripción del componente"}),`
`,e.jsx(n.h3,{id:"importaciones",children:"Importaciones"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Routes, Route, useLocation, Navigate } from 'react-router-dom';\r
import { Estadisticas } from './views/Estadisticas';\r
import { Rutinas } from './views/Rutinas';\r
import Ejercicios from './views/Ejercicios';\r
import './index.css';\r
import './App.css';\r
import { useGlobalState } from './store/useGlobalState';\r
import NotFound from './components/NotFound';\r
import OutletWithNavBarAndFooter from './OutletWithNavBarAndFooter';\r
import { useEffect } from 'react';\r
import Landing from './views/Landing';\r
import { theresUser, noUser } from './utils/Constants';\r
import GetDataService from './services/GetDataService';\r
import useRefreshJWToken from './hooks/useRefreshJWToken';
`})}),`
`,e.jsx(n.h3,{id:"estados-y-hooks",children:"Estados y Hooks"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"location: Obtenido de useLocation, utilizado para obtener la ubicación actual."}),`
`,e.jsx(n.li,{children:"theme: Estado global que guarda el tema actual de la aplicación."}),`
`,e.jsx(n.li,{children:"user: Estado global que guarda la información del usuario actual."}),`
`,e.jsx(n.li,{children:"changeView: Método para cambiar la vista actual."}),`
`,e.jsx(n.li,{children:"setGlobalRoutines: Método para establecer las rutinas globales."}),`
`,e.jsx(n.li,{children:"setGlobalExercises: Método para establecer los ejercicios globales."}),`
`]}),`
`,e.jsx(n.h3,{id:"efectos",children:"Efectos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"useEffect: Actualiza la vista actual según la ubicación."}),`
`,e.jsx(n.li,{children:"Obtiene las rutinas y los ejercicios si el usuario está autenticado."}),`
`]}),`
`,e.jsx(n.h3,{id:"renderización-del-componente",children:"Renderización del componente"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function App() {\r
    const location = useLocation();\r
    const theme = useGlobalState(state => state.theme);\r
    const user = useGlobalState(state => state.user);\r
    const changeView = useGlobalState(state => state.changeView);\r
    const setGlobalRoutines = useGlobalState(state => state.setRoutines);\r
    const setGlobalExercises = useGlobalState(state => state.setExercises);\r
\r
    useRefreshJWToken(user);\r
\r
    useEffect(() => {\r
        const newLocation = location.pathname;\r
        changeView(newLocation);\r
    }, [changeView, location.pathname]);\r
\r
    useEffect(() => {\r
        const fetchData = async () => {\r
            try {\r
                const res = await GetDataService.getRoutines();\r
                setGlobalRoutines(res);\r
\r
                const res2 = await GetDataService.getAllExercises();\r
                setGlobalExercises(res2);\r
            } catch (error) {\r
                console.error("Error al obtener los datos de las rutinas y ejercicios", error);\r
            }\r
        };\r
        if (user) {\r
            fetchData();\r
        }\r
    }, [setGlobalRoutines, setGlobalExercises, user]);\r
\r
    return (\r
        <>\r
            {user ? (\r
                <Routes>\r
                    <Route element={<OutletWithNavBarAndFooter />}>\r
                        <Route path="/" element={<Navigate to={'/home'} replace={true} />} />\r
                        <Route path="home" element={<Estadisticas theme={theme} />} />\r
                        <Route path="rutinas" element={<Rutinas theme={theme} />} />\r
                        <Route path="ejercicios" element={<Ejercicios theme={theme} />} />\r
                    </Route>\r
                    <Route path="*" element={<NotFound type={theresUser} />} />\r
                </Routes>\r
            ) : (\r
                <Routes>\r
                    <Route path="/" element={<Landing />} />\r
                    <Route path="*" element={<NotFound type={noUser} />} />\r
                </Routes>\r
            )}\r
        </>\r
    );\r
}\r
\r
export default App;\r

`})}),`
`,e.jsx(n.h3,{id:"descripción-de-las-rutas",children:"Descripción de las rutas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ruta raíz (/)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Si el usuario está autenticado, redirige a /home."}),`
`,e.jsx(n.li,{children:"Si el usuario no está autenticado, renderiza Landing."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ruta /home"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renderiza el componente Estadisticas con el tema actual."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ruta /rutinas"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renderiza el componente Rutinas con el tema actual."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ruta /ejercicios"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renderiza el componente Ejercicios con el tema actual."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rutas no encontradas (*)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Si el usuario está autenticado, renderiza NotFound con theresUser."}),`
`,e.jsx(n.li,{children:"Si el usuario no está autenticado, renderiza NotFound con noUser."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este componente, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install react-router-dom zustand"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que todos los componentes y servicios importados estén correctamente implementados y disponibles."}),`
`,e.jsx(n.li,{children:"La autenticación del usuario se maneja mediante el estado global user, y las rutas se renderizan en consecuencia."}),`
`]})]})}function ve(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{ve as default};
