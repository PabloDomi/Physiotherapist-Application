import { ApexOptions } from 'apexcharts';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Chart from 'react-apexcharts'
import '../css/Estadisticas.css'
import { mockStats } from "../utils/MockData"
import { useRef } from 'react';

const DefaultStatsChart = () => {

    const textColor = '#4dc45c'
    const azulChart = '#527cdd'
    const verdeChart = '#27ab28'

    const data = mockStats[0]

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            fontFamily: 'Tilt Neon, Roboto, system-ui'
        },
        stroke: {
            width: [0, 4]
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            }
        },
        title: {
            text: data.titleChart,
            style: {
                color: '#749c74' // Color del texto del título
            }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: data.labels,
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: textColor // Color del texto en el eje x
                }
            }
        },
        yaxis: [{
            title: {
                text: data.yaxisTitle,
                style: {
                    color: textColor // Color del texto en el eje y
                }
            },
            labels: {
                formatter: function (val) {
                    return val + "%";
                },
                style: {
                    colors: textColor // Color del texto en las etiquetas del eje y
                }
            }
        }, {
            opposite: true,
            title: {
                text: data.yaxisTitleOpposite,
                style: {
                    color: textColor // Color del texto en el eje y (opuesto)
                }
            },
            labels: {
                style: {
                    colors: textColor // Color del texto en las etiquetas del eje y (opuesto)
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%'
            }
        },
        colors: [azulChart, verdeChart], // Color del texto para otros elementos si es necesario
        legend: {
            offsetY: 6,
            labels: {
                colors: [azulChart, verdeChart] // Color del texto en la leyenda
            }
        }
    };


    const series = [
        {
            name: data.yaxisTitle,
            type: 'column',
            data: data.porcentualData
        }, {
            name: data.yaxisTitleOpposite,
            type: 'line',
            data: data.timeData
        }
    ];

    const chartRef = useRef<HTMLElement>(null)

    const downloadPDF = () => {

        if (chartRef.current) {
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

    return (
        <>
            <section style={{ height: "100%" }} ref={chartRef}>
                <Chart options={options} series={series} type="line" height='100%' />
            </section>
            <button onClick={downloadPDF}>Descargar PDF</button>
        </>
    )

}

export default DefaultStatsChart
