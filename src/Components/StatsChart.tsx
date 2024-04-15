import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../Css/Estadisticas.css'

const DefaultStatsChart = () => {

    const textColor = '#4dc45c'
    const azulChart = '#346ef1'
    const verdeChart = '#27ab28'

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Traffic Sources',
            style: {
                color: '#749c74' // Color del texto del título
            }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: textColor // Color del texto en el eje x
                }
            }
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
                style: {
                    color: textColor // Color del texto en el eje y
                }
            },
            labels: {
                style: {
                    colors: textColor // Color del texto en las etiquetas del eje y
                }
            }
        }, {
            opposite: true,
            title: {
                text: 'Social Media',
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
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
    ];

    return (
        <>
            <Chart options={options} series={series} type="area" height='100%' />
        </>
    )

}

export default DefaultStatsChart
