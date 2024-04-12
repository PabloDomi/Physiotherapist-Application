import { EstadisticasProps } from "../Utils/types"
import '../index.css'
import { mockUsers } from "../Utils/MockData"
import Search from "../Components/Search"


export const Estadisticas = ({ theme }: EstadisticasProps) => {

    return (
        <>
            <main className="container">
                <section className="stats">
                    <h2 className="title">Estadísticas</h2>
                </section>
                <aside className="search">
                    <Search details={mockUsers} theme={theme} />
                </aside>
            </main>
        </>
    )
}