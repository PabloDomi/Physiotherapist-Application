import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as a}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./Navbar-B0U0ukiJ.js";import"./ButtonToggleTheme-YG52qj8_.js";/* empty css               */import"./useGlobalState-BC4VoH9w.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";import"./index-CCAvIOUn.js";import"./ThemeProvider-CWR1dq9Q.js";import"./Modal-DvMOhwvL.js";import"./ChangePasswordService-An_RyOSA.js";import"./Constants-AkoCtDvz.js";import"./GetDataService-Bc2cEZCe.js";import"./index-B9YNeJOq.js";import"./Transition-CjjVMZtN.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./TransitionGroupContext-CH30vzyX.js";import"./index-SDyqs4cU.js";import"./Form-8tuLUNbZ.js";import"./LoginService-CmO1VqF6.js";import"./index-CeseEJRd.js";import"./schemas-rfPO-qWq.js";import"./index.esm-Bebovizm.js";import"./zod-Cul73vRk.js";/* empty css                     */function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"BusinessLogic/Outlet/OutletWithNavBarAndFooter"}),`
`,e.jsx(n.h1,{id:"outletwithnavbarandfooter",children:"OutletWithNavBarAndFooter"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.code,{children:"OutletWithNavBarAndFooter"})," se utiliza para renderizar una estructura común que incluye una barra de navegación, un outlet para renderizar las rutas hijas y un pie de página. Este componente también permite alternar entre temas claro y oscuro utilizando un botón."]}),`
`,e.jsx(n.h2,{id:"descripción-del-componente",children:"Descripción del componente"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"Este componente no recibe props directamente. En su lugar, utiliza el estado global y los componentes importados para su funcionalidad."}),`
`,e.jsx(n.h3,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import React from 'react';\r
import { BrowserRouter, Routes, Route } from 'react-router-dom';\r
import OutletWithNavBarAndFooter from '../../components/OutletWithNavBarAndFooter';\r
import HomePage from '../../pages/HomePage';\r
import AboutPage from '../../pages/AboutPage';\r
\r
const App = () => {\r
    return (\r
        <BrowserRouter>\r
            <Routes>\r
                <Route path="/" element={<OutletWithNavBarAndFooter />}>\r
                    <Route index element={<HomePage />} />\r
                    <Route path="about" element={<AboutPage />} />\r
                </Route>\r
            </Routes>\r
        </BrowserRouter>\r
    );\r
};\r
\r
export default App;
`})}),`
`,e.jsx(n.h2,{id:"uso",children:"Uso:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import OutletWithNavBarAndFooter from '../../components/OutletWithNavBarAndFooter';\r
\r
// Dentro de tu configuración de rutas\r
<BrowserRouter>\r
    <Routes>\r
        <Route path="/" element={<OutletWithNavBarAndFooter />}>\r
            {/* Definir rutas hijas aquí */}\r
        </Route>\r
    </Routes>\r
</BrowserRouter>
`})}),`
`,e.jsx(n.h2,{id:"estructura-del-componente",children:"Estructura del componente"}),`
`,e.jsx(n.h3,{id:"importaciones",children:"Importaciones"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NavBar } from "./components/Navbar"\r
import { Outlet } from "react-router-dom"\r
import { BrandName } from "./utils/Constants"\r
import imagePath from './assets/physiotherapist-logo.png'\r
import { ButtonToggleTheme } from "./components/ButtonToggleTheme"\r
import './css/Navbar.css'\r
import { useGlobalState } from "./store/useGlobalState"
`})}),`
`,e.jsx(n.h3,{id:"descripción-de-los-elementos",children:"Descripción de los elementos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"NavBar: Componente de la barra de navegación."}),`
`,e.jsx(n.li,{children:"Outlet: Componente de react-router-dom que renderiza las rutas hijas."}),`
`,e.jsx(n.li,{children:"BrandName: Constante que almacena el nombre de la marca."}),`
`,e.jsx(n.li,{children:"imagePath: Ruta de la imagen del logo."}),`
`,e.jsx(n.li,{children:"ButtonToggleTheme: Componente para alternar entre temas claro y oscuro."}),`
`,e.jsx(n.li,{children:"useGlobalState: Hook de zustand para manejar el estado global."}),`
`]}),`
`,e.jsx(n.h3,{id:"estados",children:"Estados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"theme"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: string"}),`
`,e.jsx(n.li,{children:"Descripción: Estado que guarda el tema actual de la aplicación."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"toggleTheme"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tipo: () => void"}),`
`,e.jsx(n.li,{children:"Descripción: Función para alternar el tema entre claro y oscuro."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"renderización-del-componente",children:"Renderización del componente"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const OutletWithNavBarAndFooter = () => {\r
    const theme = useGlobalState(state => state.theme)\r
    const toggleTheme = useGlobalState(state => state.toggleTheme)\r
\r
    return (\r
        <>\r
            <NavBar\r
                styledClassName={theme === 'light'\r
                    ? "navbar-light bg-white shadow pe-3 background-gradient-light"\r
                    : "navbar-dark bg-dark shadow pe-3 background-gradient-dark"\r
                }\r
                brandName={BrandName}\r
                imageSrcPath={imagePath}\r
            />\r
            <Outlet />\r
            <footer className={theme === 'light'\r
                ? 'footer-dark footer-container background-light'\r
                : 'footer-light footer-container background-dark'\r
            }>\r
                <div className='footer-container'>\r
                    <p className='footer-text font-tilt-neon'>Derechos de autor © 2024</p>\r
                </div>\r
            </footer>\r
            <ButtonToggleTheme toggleTheme={toggleTheme} theme={theme} />\r
        </>\r
    )\r
}\r
\r
export default OutletWithNavBarAndFooter\r

`})}),`
`,e.jsx(n.h3,{id:"descripción-de-los-elementos-renderizados",children:"Descripción de los elementos renderizados"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"NavBar: Renderiza la barra de navegación con una clase de estilo que cambia según el tema actual."}),`
`,e.jsx(n.li,{children:"Outlet: Renderiza el contenido de las rutas hijas definidas en react-router-dom."}),`
`,e.jsx(n.li,{children:"footer: Renderiza el pie de página con una clase de estilo que cambia según el tema actual."}),`
`,e.jsx(n.li,{children:"ButtonToggleTheme: Renderiza un botón para alternar entre los temas claro y oscuro."}),`
`]}),`
`,e.jsx(n.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este componente, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install react-router-dom zustand"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de definir correctamente las rutas hijas dentro del componente OutletWithNavBarAndFooter para que Outlet pueda renderizarlas."}),`
`,e.jsx(n.li,{children:"El componente ButtonToggleTheme debe estar implementado para cambiar el tema de la aplicación correctamente."}),`
`]})]})}function L(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{L as default};
