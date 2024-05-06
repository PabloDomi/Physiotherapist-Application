import { EstadisticasProps } from "../utils/types"
import '../css/Estadisticas.css'
import Search from "../components/Search"
import { usePatients } from "../hooks/usePatients"
import DefaultStatsChart from "../components/DefaultStatsChart"
import { useGlobalState } from "../store/useGlobalState"
import CustomStatsChart from "../components/CustomStatsChart"
import { IonIcon } from "@ionic/react"
import { home } from 'ionicons/icons'
import { Button } from "react-bootstrap"
import { useState } from "react"
import PatientCard from "../components/PatientCard"
import Loader from "../components/Loader"



export const Estadisticas = ({ theme }: EstadisticasProps) => {

    const { isLoading } = usePatients()
    const [patientId, setPatientId] = useState<number | null>(null)

    const customData = useGlobalState(state => state.customStatsData)
    const setCustomStatsDataUndefined = useGlobalState(state => state.setCustomStatsDataUndefined)
    const patients = useGlobalState(state => state.patients)
    console.log(patients)

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
                                <div className="stats-header">
                                    <Button
                                        onClick={handleClick}
                                        className={theme === 'light' ? 'button-home-icon' : 'button-home-icon-dark'}>
                                        <IonIcon icon={home} />
                                    </Button>
                                    <h2 className="title">Estadísticas</h2>
                                </div>
                                <div className={theme === 'dark' ? 'stats-chart-dark' : 'stats-chart-light'}>
                                    <DefaultStatsChart />
                                </div>
                            </>
                        }
                        {customData &&
                            <>
                                <div className="stats-header">
                                    <Button onClick={handleClick} className={theme === 'light' ? 'button-home-icon' : 'button-home-icon-dark'}>
                                        <IonIcon icon={home} />
                                    </Button>
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
                        <PatientCard patientId={patientId} />
                    }
                </main>
            }
        </>
    )
}