import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../css/Estadisticas.css'
import { useEffect, useRef, useState } from 'react';
import useDownloadPDF from '../hooks/useDownloadPDF';
import { Button } from '@mui/material';
import GetDataService from '../services/GetDataService';
import { useGlobalState } from '../store/useGlobalState';
import { DataTypes, DefaultStatsChartProps } from '../utils/types';

interface ExtendedDataTypes extends DataTypes {
    tooltipsData: string[];
}

const DefaultStatsChart = (props: DefaultStatsChartProps) => {

    const theme = useGlobalState(state => state.theme);
    const [colors, setColors] = useState({
        textColor: '',
        azulChart: '',
        naranjaOscuroChart: '',
        moradoChart: '',
    });

    useEffect(() => {
        if (theme === 'light') {
            setColors({
                textColor: '#105a08',
                azulChart: '#05138e',
                naranjaOscuroChart: '#c33206',
                moradoChart: '#7a098a',
            });
        } else {
            setColors({
                textColor: '#7ce489',
                azulChart: '#777ef9',
                naranjaOscuroChart: '#fd8f6d',
                moradoChart: '#e38def',
            });
        }
    }, [theme]);

    const [data, setData] = useState<ExtendedDataTypes>({
        labels: [],
        porcentualData: [],
        timeData: [],
        repsData: [],
        titleChart: "Estadísticas de Ejercicios",
        yaxisTitle: "Tiempo Total (segundos)",
        yaxisTitleOpposite: "Tiempo Promedio por Serie (segundos)",
        yaxisTitleReps: "Media de repeticiones por serie",
        tooltipsData: []  // Agregamos tooltipsData
    });

    useEffect(() => {
        if (props.data) {
            setData(props.data as ExtendedDataTypes);
        }

        GetDataService.getStats().then((res) => {

            // Ordenar los datos por fecha (de más antigua a más reciente)
            const sortedData = res.sort((a: { date: string }, b: { date: string }) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });

            const sortedDatesToString = sortedData.map((item: { date: string }) => `${new Date(item.date).toLocaleDateString()}`);

            const labels = res.map((item: number) => `${sortedDatesToString[res.indexOf(item)]}`);
            const porcentualData = res.map((item: { total_time: number; }) => item.total_time);
            const timeData = res.map((item: { average_series_time: number; }) => item.average_series_time);

            const repsData = res.map((item: { reps_per_series: number[]; }) => {
                const totalReps = item.reps_per_series.reduce((a, b) => a + b, 0);
                return Math.round(totalReps / item.reps_per_series.length);
            });

            setData((prevData) => ({
                ...prevData,
                labels: labels,
                porcentualData: porcentualData,
                timeData: timeData,
                repsData: repsData,
                tooltipsData: res.map((item: { exercise_name: string, patient: string }) => (`${item.exercise_name} - ${item.patient}`))  // Añadimos tooltipsData
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
                color: '#749c74'
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
        labels: data.labels,  // Las fechas debajo de las barras
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: colors.textColor
                }
            }
        },
        yaxis: [
            {
                title: {
                    text: data.yaxisTitle,
                    style: {
                        color: colors.azulChart
                    }
                },
                labels: {
                    formatter: function (val) {
                        return Math.round(val).toFixed(0) + " s";
                    },
                    style: {
                        colors: colors.textColor
                    }
                }
            },
            {
                opposite: true,
                title: {
                    text: data.yaxisTitleOpposite,
                    style: {
                        color: colors.naranjaOscuroChart
                    }
                },
                labels: {
                    formatter: function (val) {
                        return Math.round(val).toFixed(0) + " s";
                    },
                    style: {
                        colors: colors.textColor
                    }
                }
            },
            {
                opposite: true,
                title: {
                    text: data.yaxisTitleReps,
                    style: {
                        color: colors.moradoChart
                    }
                },
                labels: {
                    formatter: function (val) {
                        return Math.round(val).toFixed(0) + " reps";
                    },
                    style: {
                        colors: colors.textColor
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%'
            }
        },
        grid: {
            borderColor: theme === 'light' ? '#222322' : '#e7e7e7',
            position: 'back',
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: true
                }
            },
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        tooltip: {
            custom: function ({ series, dataPointIndex }) {
                const ejercicio = data.tooltipsData[dataPointIndex].split(' - ')[0];
                const paciente = data.tooltipsData[dataPointIndex].split(' - ')[1];  // Nombre del ejercicio
                const totalTime = series[0][dataPointIndex];  // Tiempo total del ejercicio

                return `
                    <div style="padding: 10px; text-align: center;">
                        <strong>Paciente:</strong> ${paciente}<br />
                        <br />
                        <strong>Ejercicio:</strong> ${ejercicio}<br />
                        <strong>Tiempo Total:</strong> ${totalTime} s<br />
                        <strong>Tiempo Promedio por Serie:</strong> ${series[1][dataPointIndex]} s<br />
                        <strong>Media de repeticiones por serie:</strong> ${series[2][dataPointIndex]} reps
                    </div>
                `;
            }
        },
        colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart],
        legend: {
            offsetY: 6,
            labels: {
                colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart]
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

    const chartRef = useRef<HTMLElement>(null);
    const { downloadPDF } = useDownloadPDF();

    const handleDownloadPDF = () => {
        downloadPDF(chartRef);
    };

    return (
        <>
            <section style={{ height: "100%", minHeight: "400px", minWidth: "500px" }} ref={chartRef}>
                <Chart options={options} series={series} type="line" height='100%' />
            </section>
            <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
                <Button sx={{ backgroundColor: "#527cdd" }} variant='contained' onClick={handleDownloadPDF}>Descargar PDF</Button>
            </div>
        </>
    );
};

export default DefaultStatsChart;
