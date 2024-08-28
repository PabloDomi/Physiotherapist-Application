import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'
import '../css/Estadisticas.css'
import { useEffect, useRef, useState } from "react";
import useDownloadPDF from "../hooks/useDownloadPDF";
import { Button } from "@mui/material";
import { useGlobalState } from "../store/useGlobalState";
import GetDataService from '../services/GetDataService';

function CustomStatsChart(patient_id: { patient_id: number }) {

    // Y PEDIRLE A CHATGPT QUE ME HAGA ALGO PARECIDO A LO OTRO PERO CON LOS DATOS DE ESE PACIENTE

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

    const [data, setData] = useState({
        labels: [],
        porcentualData: [],
        timeData: [],
        repsData: [],
        titleChart: "Estadísticas de Ejercicios del Paciente",
        yaxisTitle: "Total Time (s)",
        yaxisTitleOpposite: "Average Time per Set (s)",
        yaxisTitleReps: "Average Reps per Set"
    });

    useEffect(() => {
        GetDataService.getPatientStats(patient_id.patient_id).then((res) => {
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
    }, [patient_id]);

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
                color: '#749c74' // Title text color
            }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1, 2],
            style: {
                colors: ['#7a098a', '#c33206'],
                fontSize: '14px',
            },
            background: {
                enabled: true,
                foreColor: '#000', // Set text color to black
            }
        },
        labels: data.labels,
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: colors.textColor // X-axis text color
                }
            }
        },
        yaxis: [{
            title: {
                text: data.yaxisTitle,
                style: {
                    color: colors.azulChart // Y-axis text color
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + " s";
                },
                style: {
                    colors: colors.textColor // Y-axis label color
                }
            }
        }, {
            opposite: true,
            title: {
                text: data.yaxisTitleOpposite,  // Opposite Y-axis text (e.g., "Average Time per Set (s)")
                style: {
                    color: colors.naranjaOscuroChart
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + "s";  // Round values to show seconds
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
                    color: colors.moradoChart // Y-axis opposite text color
                }
            },
            labels: {
                formatter: function (val) {
                    return Math.round(val).toFixed(0) + " reps";
                },
                style: {
                    colors: colors.textColor // Y-axis opposite label color
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
            borderColor: theme === 'light' ? '#222322' : '#e7e7e7', // Grid border color
            position: 'back', // Position grid behind the chart
            strokeDashArray: 0, // Grid line type (solid, dashed, etc.)
            yaxis: {
                lines: {
                    show: true // Show or hide Y-axis grid lines
                }
            },
            xaxis: {
                lines: {
                    show: false // Show or hide X-axis grid lines
                }
            }
        },
        colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart], // Other element colors
        legend: {
            offsetY: 6,
            labels: {
                colors: [colors.azulChart, colors.naranjaOscuroChart, colors.moradoChart] // Legend text color
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
                <Chart options={options} series={series} type="line" height={'100%'} />
            </section>
            <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
                <Button sx={{ backgroundColor: "#527cdd" }} variant='contained' onClick={handleDownloadPDF}>Descargar PDF</Button>
            </div>
        </>
    )
}

export default CustomStatsChart
