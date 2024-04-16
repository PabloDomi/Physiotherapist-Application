import { EstadisticasProps } from "../Utils/types"
import '../Css/Estadisticas.css'
import { mockUsers } from "../Utils/MockData"
import Search from "../Components/Search"
import { usePatients } from "../hooks/usePatients"
import DefaultStatsChart from "../Components/DefaultStatsChart"
import { useGlobalState } from "../Store/useGlobalState"
import CustomStatsChart from "../Components/CustomStatsChart"
import { IonIcon } from "@ionic/react"
import { home } from 'ionicons/icons'
import { Button } from "react-bootstrap"


export const Estadisticas = ({ theme }: EstadisticasProps) => {

    const { isLoading } = usePatients()

    const customData = useGlobalState(state => state.customStatsData)

    const setCustomStatsDataUndefined = useGlobalState(state => state.setCustomStatsDataUndefined)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        setCustomStatsDataUndefined()
    }

    return (
        <>
            {isLoading &&
                <div className="text-center text-success mt-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {!isLoading &&
                <main className={theme === 'dark' ? 'stats-container background-stats-dark' : 'stats-container background-stats-light'}>
                    <section className="stats">
                        {!customData &&
                            <>
                                <div className="stats-header">
                                    <Button onClick={handleClick} className={theme === 'light' ? 'button-home-icon' : 'button-home-icon-dark'}>
                                        <IonIcon icon={home} />
                                    </Button>
                                    <h2 className="title">Estadísticas</h2>
                                </div>
                                <div className={theme === 'dark' ? 'stats-chart-dark' : 'stats-chart-light'}>
                                    <DefaultStatsChart />
                                    {customData && <CustomStatsChart data={customData} />}
                                </div>
                            </>
                        }
                        {customData &&
                            <>
                                <div className="stats-header">
                                    <Button onClick={handleClick} className={theme === 'light' ? 'button-home-icon' : 'button-home-icon-dark'}>
                                        <IonIcon icon={home} />
                                    </Button>
                                    <h2 className="title">Estadísticas de Manolete</h2>
                                </div>
                                <div className={theme === 'dark' ? 'stats-chart-dark' : 'stats-chart-light'}>
                                    <CustomStatsChart data={customData} />
                                </div>
                            </>
                        }

                    </section>
                    <aside className="search mt-1">
                        <Search details={mockUsers} theme={theme} />
                    </aside>
                </main>
            }
        </>
    )
}