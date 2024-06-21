import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../css/Estadisticas.css'
import { mockStats } from "../utils/MockData"
import { useRef } from 'react';
import useDownloadPDF from '../hooks/useDownloadPDF';
import { Button } from '@mui/material';

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
    const { downloadPDF } = useDownloadPDF()

    const handleDownloadPDF = () => {
        downloadPDF(chartRef)
    }

    return (
        <>
            <section style={{ height: "100%", minHeight: "400px", minWidth: "500px" }} ref={chartRef}>
                <Chart options={options} series={series} type="line" height='100%' />
            </section>
            <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
                <Button sx={{ backgroundColor: "#527cdd" }} variant='contained' onClick={handleDownloadPDF}>Descargar PDF</Button>
            </div>
        </>
    )

}

export default DefaultStatsChart
