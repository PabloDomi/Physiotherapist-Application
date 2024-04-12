import { useContext, useEffect } from 'react'
import { ThemeContext } from './Services/themeProvider'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Estadisticas } from './Views/Estadisticas'
import { NavBar } from './Components/Navbar'
import { BrandName } from './Utils/Constants'
import imagePath from './Assets/physiotherapist-logo.png'
import { Rutinas } from './Views/Rutinas'
import { Ejercicios } from './Views/Ejercicios'
import { ButtonToggleTheme } from './Components/ButtonToggleTheme'
import './index.css'
import { useGlobalState } from './Store/useGlobalState'

function App() {

  const location = useLocation()

  // Context for Theme in App
  const { theme, toggleTheme } = useContext(ThemeContext)
  const user = useGlobalState(state => state.user)
  const changeView = useGlobalState(state => state.changeView)
  const view = useGlobalState(state => state.view)

  useEffect(() => {
    const newLocation = location.pathname.slice(1)
    changeView(newLocation)
  }, [changeView, location.pathname])

  console.log('Estamos en: ' + view)


  return (
    <>
      {!user
        ?
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
            <Route path='/' element={<Navigate to={'/home'} replace={true} />} />
            <Route path='/home' element={<Estadisticas theme={theme} />} />
            <Route path='/rutinas' element={<Rutinas />} />
            <Route path='/ejercicios' element={<Ejercicios />} />
            <Route path='*' element={<h1>Not Found!</h1>} />
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
        : <Routes>
          <Route path='/' element={<h1>Landing</h1>} />
        </Routes>
      }
    </>
  )
}

export default App