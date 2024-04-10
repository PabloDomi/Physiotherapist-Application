import { useContext } from 'react'
import { ThemeContext } from './services/themeProvider'
import { Routes, Route } from 'react-router-dom'
import { Estadisticas } from './views/Estadisticas'
import { NavBar } from './Components/Navbar'
import { BrandName } from './Utils/Constants'
import imagePath from './assets/physiotherapist-logo.png'
import { Rutinas } from './views/Rutinas'
import { Ejercicios } from './views/Ejercicios'
import { ButtonToggleTheme } from './Components/ButtonToggleTheme'
import './index.css'

function App() {

  // Context for Theme in App
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <NavBar
        styledClassName={theme === 'light'
          ? "navbar-light bg-white shadow"
          : "navbar-dark bg-dark shadow"
        }
        brandName={BrandName}
        imageSrcPath={imagePath}
      />
      <Routes>
        <Route path='/' element={<Estadisticas theme={theme} />} />
        <Route path='/rutinas' element={<Rutinas />} />
        <Route path='/ejercicios' element={<Ejercicios />} />
      </Routes>

      <footer className={theme === 'light'
        ? 'footer-dark'
        : 'footer-light'
      }>
        <div className='footer-container'>
          <p className='footer-text font-tilt-neon'>Derechos de autor © 2024</p>
        </div>
      </footer>
      <ButtonToggleTheme toggleTheme={toggleTheme} theme={theme} />
    </>
  )
}

export default App