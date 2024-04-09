import { Theme } from "../Utils/types"
import '../CustomCss/Estadisticas.css'
import { mockUsers } from "../Utils/MockData"
import Search from "../Components/Search"


interface EstadisticasProps {
    theme: Theme
}

export const Estadisticas = ({ theme }: EstadisticasProps) => {

    return (
        <>
            <main className="container mx-2">
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