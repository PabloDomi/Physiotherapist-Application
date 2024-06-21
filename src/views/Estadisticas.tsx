import { EstadisticasProps } from "../utils/types"
import '../css/Estadisticas.css'
import Search from "../components/Search"
import usePatients from "../hooks/usePatients"
import DefaultStatsChart from "../components/DefaultStatsChart"
import { useGlobalState } from "../store/useGlobalState"
import CustomStatsChart from "../components/CustomStatsChart"
import { useState } from "react"
import PatientCard from "../components/PatientCard"
import Loader from "../components/Loader"
import QueryStatsIcon from '@mui/icons-material/QueryStats';


export const Estadisticas = ({ theme }: EstadisticasProps) => {

    const { isLoading } = usePatients()
    const [patientId, setPatientId] = useState<number | null>(null)

    const customData = useGlobalState(state => state.customStatsData)
    const setCustomStatsDataUndefined = useGlobalState(state => state.setCustomStatsDataUndefined)
    const patients = useGlobalState(state => state.patients)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        setCustomStatsDataUndefined()
        setPatientId(null)
    }

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <main className={theme === 'dark' ? 'stats-container background-stats-dark' : 'stats-container background-stats-light'}>
                    <section className="stats">
                        {!customData &&
                            <>
                                <div className={theme === 'dark' ? 'stats-header' : 'stats-header-light'}>
                                    <QueryStatsIcon sx={theme === 'dark' ? { color: "#8db1eb", width: 50, height: 50, marginRight: "1rem" } : { color: "#527cdd", width: 50, height: 50, marginRight: "1rem" }} />
                                    <h1>E</h1>
                                    <h2 className={theme === 'dark' ? 'title' : 'title-light'}>stadísticas</h2>
                                </div>
                                <div className={theme === 'dark' ? 'stats-chart-dark' : 'stats-chart-light'}>
                                    <DefaultStatsChart />
                                </div>
                            </>
                        }
                        {customData &&
                            <>
                                <div className="stats-header">
                                    <h2 className="title">Estadísticas de {`${patients?.find(paciente => paciente.id === patientId)?.name}`}</h2>
                                </div>
                                <div className={theme === 'dark' ? 'stats-chart-dark' : 'stats-chart-light'}>
                                    <CustomStatsChart data={customData} />
                                </div>
                            </>
                        }
                    </section>
                    {patientId === null &&
                        <aside className="search mt-1">
                            <Search chartTitle={setPatientId} details={patients} theme={theme} />
                        </aside>
                    }
                    {patientId !== null &&
                        <>
                            <PatientCard handleGoBack={handleClick} patientId={patientId} />
                        </>
                    }
                </main>
            }
        </>
    )
}