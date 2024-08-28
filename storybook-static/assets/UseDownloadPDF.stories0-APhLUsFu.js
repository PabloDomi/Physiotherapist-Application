import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as s}from"./chunk-HLWAVYOI-BxcrA5PH.js";import"./jspdf.es.min-DPnYKdTh.js";import"./index-Cu9bd8lq.js";import"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";import"./react-18-D_xN25Lc.js";import"./index-Ckls47V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";import"./extends-CCbyfPlC.js";import"./index-NW_eYKCe.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-riBwwoZ_.js";import"./index-DrFu-skq.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BusinessLogic/Hooks/useDownloadPDF"}),`
`,e.jsx(n.h1,{id:"usedownloadpdf",children:"useDownloadPDF"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useDownloadPDF"})," se utiliza para generar y descargar un archivo PDF a partir de un elemento HTML referenciado. Utiliza las bibliotecas ",e.jsx(n.code,{children:"html2canvas"})," y ",e.jsx(n.code,{children:"jsPDF"})," para convertir el contenido del elemento en una imagen y luego insertar dicha imagen en un PDF."]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-implementación",children:"Ejemplo de implementación"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useRef } from 'react';\r
import useDownloadPDF from '../../hooks/useDownloadPDF';\r
\r
const DownloadPDFComponent = () => {\r
    const { downloadPDF } = useDownloadPDF();\r
    const chartRef = useRef<HTMLElement>(null);\r
\r
    return (\r
        <div>\r
            <div ref={chartRef}>\r
                {/* Contenido del gráfico o cualquier otro elemento */}\r
            </div>\r
            <button onClick={() => downloadPDF(chartRef)}>Descargar PDF</button>\r
        </div>\r
    );\r
};\r
\r
export default DownloadPDFComponent;\r

`})}),`
`,e.jsx(n.h2,{id:"descripción-de-los-elementos-del-hook",children:"Descripción de los elementos del hook"}),`
`,e.jsxs(n.p,{children:["El hook ",e.jsx(n.code,{children:"useDownloadPDF"})," tiene los siguientes elementos:"]}),`
`,e.jsx(n.h3,{id:"métodos",children:"Métodos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"downloadPDF"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipo: (",e.jsx(n.code,{children:"chartRef: RefObject<HTMLElement>"}),") => void"]}),`
`,e.jsx(n.li,{children:"Descripción: Esta función toma una referencia a un elemento HTML, captura su contenido como una imagen y genera un archivo PDF con dicha imagen. Luego, descarga automáticamente el PDF con el nombre 'estadisticas.pdf'."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"dependencias",children:"Dependencias"}),`
`,e.jsx(n.p,{children:"Para utilizar este hook, necesitas instalar las siguientes dependencias:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install html2canvas jspdf"})}),`
`]}),`
`,e.jsx(n.h3,{id:"notas",children:"Notas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Asegúrate de que el elemento HTML referenciado es visible y está completamente cargado antes de llamar a la función downloadPDF."}),`
`,e.jsx(n.li,{children:"La función downloadPDF maneja errores comunes, como la ausencia del elemento referenciado o problemas al generar el PDF."}),`
`]})]})}function w(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{w as default};
