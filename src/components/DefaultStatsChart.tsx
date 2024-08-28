import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../css/Estadisticas.css'
// import { mockStats } from "../utils/MockData"
import { useEffect, useRef, useState } from 'react';
import useDownloadPDF from '../hooks/useDownloadPDF';
import { Button } from '@mui/material';
import GetDataService from '../services/GetDataService';
import { useGlobalState } from '../store/useGlobalState';
import { DataTypes, DefaultStatsChartProps } from '../utils/types';
// import { StatsTypes } from '../utils/types';



const DefaultStatsChart = (props: DefaultStatsChartProps) => {

    const theme = useGlobalState(state => state.theme)
    const [colors, setColors] = useState({
        textColor: '',
        azulChart: '',
        naranjaOscuroChart: '',
        moradoChart: '',
    })

    useEffect(() => {
        if (theme === 'light') {
            setColors(prevColors => ({
                ...prevColors,
                textColor: '#105a08',
                azulChart: '#05138e',
                naranjaOscuroChart: '#c33206',
                moradoChart: '#7a098a',
            }));
        } else {
            setColors(prevColors => ({
                ...prevColors,
                textColor: '#7ce489',
                azulChart: '#777ef9',
                naranjaOscuroChart: '#fd8f6d',
                moradoChart: '#e38def',
            }));
        }
    }, [theme]);

    const [data, setData] = useState<DataTypes>({
        labels: [],
        porcentualData: [],
        timeData: [],
        repsData: [],
        titleChart: "Estadísticas de Ejercicios",
        yaxisTitle: "Tiempo Total (segundos)",
        yaxisTitleOpposite: "Tiempo Promedio por Serie (segundos)",
        yaxisTitleReps: "Media de repeticiones por serie"
    });

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
        GetDataService.getStats().then((res) => {
            const labels = res.map((item: { exercise_name: string; }) => item.exercise_name);
            const porcentualData = res.map((item: { total_time: number; }) => item.total_time);
            const timeData = res.map((item: { average_series_time: number; }) => item.average_series_time);

            // Para las repeticiones, se aplanan los arrays y se calculan las sumas
            const repsData = res.map((item: { reps_per_series: number[]; }) => {
                const totalReps = item.reps_per_series.reduce((a, b) => a + b, 0);
                return Math.round(totalReps / item.reps_per_series.length);
            });

            setData((prevData) => ({
                ...prevData,
                labels: labels,
                porcentualData: porcentualData,
                timeData: timeData,
                repsData: repsData
            }));
        });
    }, [props.data]);

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            fontFamily: 'Tilt Neon, Roboto, system-ui'
        },
        stroke: {
            width: [0, 4, 4]
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
            enabledOnSeries: [1, 2],
            style: {
                colors: ['#7a098a', '#c33206'],
                fontSize: '14px',
            }
        },
        labels: data.labels,
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: colors.textColor // Color del texto en el eje x
                }
            }
        },
        yaxis: [{
            title: {
                text: data.yaxisTitle,
                style: {
                    color: colors.azulChart // Color del texto en el eje y
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + " s";
                },
                style: {
                    colors: colors.textColor // Color del texto en las etiquetas del eje y
                }
            }
        }, {
            opposite: true,
            title: {
                text: data.yaxisTitleOpposite,  // Texto del eje Y opuesto (e.g., "Tiempo promedio por serie (segundos)")
                style: {
                    color: colors.naranjaOscuroChart
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + "s";  // Formato para mostrar valores redondeados en segundos
                },
                style: {
                    colors: colors.textColor
                }
            }
        }, {
            opposite: true,
            title: {
                text: data.yaxisTitleReps,
                style: {
                    color: colors.moradoChart // Color del texto en el eje y (opuesto)
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + " reps";
                },
                style: {
                    colors: colors.textColor // Color del texto en las etiquetas del eje y (opuesto)
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%'
            }
        },
        grid: {
            borderColor: theme === 'light' ? '#222322' : '#e7e7e7', // Color de las líneas de borde de la cuadrícula
            position: 'back', // Posición de la cuadrícula (frente o detrás del gráfico)
            strokeDashArray: 0, // Tipo de línea (discontinua, continua, etc.)
            yaxis: {
                lines: {
                    show: true // Mostrar u ocultar líneas en el eje Y
                }
            },
            xaxis: {
                lines: {
                    show: false // Mostrar u ocultar líneas en el eje X
                }
            }
        },
        colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart], // Color del texto para otros elementos si es necesario
        legend: {
            offsetY: 6,
            labels: {
                colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart] // Color del texto en la leyenda
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
        }, {
            name: data.yaxisTitleReps,
            type: 'line',
            data: data.repsData
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
