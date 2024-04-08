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
import './App.css'

function App() {

  // Context for Theme in App
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <>
      <div>
        <NavBar
          styledClassName={theme === 'light' 
          ? "navbar-light bg-white shadow"
          : "navbar-dark bg-dark shadow" 
          } 
          brandName={BrandName}
          imageSrcPath={imagePath}
        />
        <Routes>
          <Route path='/' element={<Estadisticas theme={theme}/>} />
          <Route path='/rutinas' element={<Rutinas />} />
          <Route path='/ejercicios' element={<Ejercicios />} />
        </Routes>

        <footer className={theme === 'light'
          ? 'footer-light'
          : 'footer-dark'
        }>
          <div className='footer-container'>
            <p>Derechos de autor © 2024</p>
          </div>
        </footer>
        <ButtonToggleTheme toggleTheme={toggleTheme} theme={theme} /> 
      </div>
    </>
  )
}

export default App