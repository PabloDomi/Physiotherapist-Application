import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as o}from"./index-DtGqrCZN.js";import{M as t}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"BusinessLogic/EntryPoint/main"}),`
`,e.jsx(r.h1,{id:"main",children:"main"}),`
`,e.jsxs(r.p,{children:["El archivo ",e.jsx(r.code,{children:"main.tsx"})," es el punto de entrada de la aplicación React. Este archivo monta el componente raíz de la aplicación en el DOM y configura el enrutamiento utilizando ",e.jsx(r.code,{children:"BrowserRouter"})," de ",e.jsx(r.code,{children:"react-router-dom"}),". Además, envuelve la aplicación en ",e.jsx(r.code,{children:"StrictMode"})," para ayudar a identificar problemas potenciales en la aplicación."]}),`
`,e.jsx(r.h1,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import ReactDOM from 'react-dom/client';\r
import { BrowserRouter } from 'react-router-dom';\r
import App from './App.tsx';\r
import './index.css';\r
import { StrictMode } from 'react';\r
\r
ReactDOM.createRoot(document.getElementById('root')!).render(\r
  <StrictMode>\r
    <BrowserRouter>\r
      <App />\r
    </BrowserRouter>\r
  </StrictMode>\r
);
`})}),`
`,e.jsx(r.h2,{id:"descripción-del-archivo",children:"Descripción del archivo"}),`
`,e.jsx(r.h3,{id:"importaciones",children:"Importaciones"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import ReactDOM from 'react-dom/client';\r
import { BrowserRouter } from 'react-router-dom';\r
import App from './App.tsx';\r
import './index.css';\r
import { StrictMode } from 'react';
`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"ReactDOM: Biblioteca para interactuar con el DOM en aplicaciones React."}),`
`,e.jsx(r.li,{children:"BrowserRouter: Componente de react-router-dom para manejar el enrutamiento basado en el navegador."}),`
`,e.jsx(r.li,{children:"App: Componente raíz de la aplicación."}),`
`,e.jsx(r.li,{children:"index.css: Hoja de estilos global de la aplicación."}),`
`,e.jsx(r.li,{children:"StrictMode: Componente de React que activa comprobaciones adicionales y advertencias en el modo de desarrollo."}),`
`]}),`
`,e.jsx(r.h3,{id:"renderización-del-componente-raíz",children:"Renderización del componente raíz"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`ReactDOM.createRoot(document.getElementById('root')!).render(\r
  <StrictMode>\r
    <BrowserRouter>\r
      <App />\r
    </BrowserRouter>\r
  </StrictMode>\r
);
`})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"createRoot: Método de ReactDOM para crear una raíz React en el DOM."}),`
`,e.jsx(r.li,{children:"StrictMode: Componente que envuelve la aplicación para activar el modo estricto."}),`
`,e.jsx(r.li,{children:"BrowserRouter: Envuelve la aplicación para habilitar el enrutamiento basado en el navegador."}),`
`,e.jsx(r.li,{children:"App: Componente raíz de la aplicación que contiene toda la lógica y estructura de la aplicación."}),`
`]}),`
`,e.jsx(r.h2,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(r.p,{children:"Para utilizar este archivo, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"npm install react react-dom react-router-dom"})}),`
`]}),`
`,e.jsx(r.h2,{id:"notas",children:"Notas"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Asegúrate de que el elemento con el ID root esté presente en tu archivo HTML principal."}),`
`,e.jsx(r.li,{children:"StrictMode es opcional pero recomendado para detectar problemas potenciales en el código."}),`
`]})]})}function f(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
