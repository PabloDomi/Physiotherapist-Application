import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../Css/Estadisticas.css'
import { mockStats } from "../Utils/MockData"

const DefaultStatsChart = () => {

    const textColor = '#4dc45c'
    const azulChart = '#346ef1'
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
        colors: [verdeChart, azulChart], // Color del texto para otros elementos si es necesario
        legend: {
            offsetY: 6,
            labels: {
                colors: [verdeChart, azulChart] // Color del texto en la leyenda
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

    return (
        <>
            <Chart options={options} series={series} type="area" height='100%' />
        </>
    )

}

export default DefaultStatsChart
