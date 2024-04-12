import { EstadisticasProps } from "../Utils/types"
import '../Css/Estadisticas.css'
import { mockUsers } from "../Utils/MockData"
import Search from "../Components/Search"
import { usePatients } from "../hooks/usePatients"


export const Estadisticas = ({ theme }: EstadisticasProps) => {

    const { isLoading } = usePatients()

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
                <main className="container">
                    <section className="stats">
                        <h2 className="title">Estadísticas</h2>
                    </section>
                    <aside className="search mt-1">
                        <Search details={mockUsers} theme={theme} />
                    </aside>
                </main>
            }
        </>
    )
}