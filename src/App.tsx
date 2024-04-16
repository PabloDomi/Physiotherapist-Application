import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Estadisticas } from './views/Estadisticas'
import { Rutinas } from './views/Rutinas'
import { Ejercicios } from './views/Ejercicios'
import './index.css'
import './App.css'
import { useGlobalState } from './Store/useGlobalState'
import NotFound from './Components/NotFound'
import OutletWithNavBarAndFooter from './Services/OutletWithNavBarAndFooter'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './Services/themeProvider'

function App() {

  const location = useLocation()

  const { theme } = useContext(ThemeContext)

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
        <Routes>
          <Route element={<OutletWithNavBarAndFooter />} >
            <Route path='/' element={<Navigate to={'/home'} replace={true} />} />
            <Route path='home' element={<Estadisticas theme={theme} />} />
            <Route path='rutinas' element={<Rutinas />} />
            <Route path='ejercicios' element={<Ejercicios />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<h1>Landing</h1>} />
        </Routes>
      }
    </>
  )
}

export default App