import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";

export function useDownloadPDF() {
    const downloadPDF = (chartRef: RefObject<HTMLElement>) => {
        if (chartRef?.current) {
            const input = chartRef.current;
            if (!input) {
                console.error('No chart ref');
                return;
            }

            if (input instanceof HTMLElement) {
                html2canvas(input).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF({
                        orientation: 'landscape',
                        unit: 'px',
                        format: [canvas.width, canvas.height]
                    });
                    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                    pdf.save('estadisticas.pdf');
                }).catch((error) => {
                    console.error('Error generating PDF', error);
                });
            } else {
                console.error('Ref is not an HTMLElement');
            }
        }
    };

    return { downloadPDF };
}