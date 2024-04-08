import { Theme } from "../Utils/types"
import '../CustomCss/Estadisticas.css'


interface EstadisticasProps { 
    theme: Theme
}

export const Estadisticas = ({ theme }: EstadisticasProps) => {

    return (
        <>
            <main>
                <div className="container">
                    <section className="stats">
                        <h2>Estadísticas</h2>
                    </section>
                    <aside className="search">
                        <h2>Buscar Usuarios</h2>
                        <input name='buscador-usuarios' type="text" placeholder="Buscar usuarios..."
                        className={theme === 'light'
                            ? "input-light"
                            : "input-dark"
                        }/>
                    </aside>
                </div>
            </main>
        </>
    )
}