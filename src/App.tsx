import { useContext } from 'react'
import { ThemeContext } from './Services/themeProvider'
import { Routes, Route } from 'react-router-dom'
import { Estadisticas } from './Views/Estadisticas'
import { NavBar } from './Components/Navbar'
import { BrandName } from './Utils/Constants'
import imagePath from './Assets/physiotherapist-logo.png'
import { Rutinas } from './Views/Rutinas'
import { Ejercicios } from './Views/Ejercicios'
import { ButtonToggleTheme } from './Components/ButtonToggleTheme'
import './index.css'

function App() {

  // Context for Theme in App
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <NavBar
        styledClassName={theme === 'light'
          ? "navbar-light bg-white shadow pe-3"
          : "navbar-dark bg-dark shadow pe-3"
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