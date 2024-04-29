import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Estadisticas } from './views/Estadisticas'
import { Rutinas } from './views/Rutinas'
import Ejercicios from './views/Ejercicios'
import './index.css'
import './App.css'
import { useGlobalState } from './store/useGlobalState'
import NotFound from './components/NotFound'
import OutletWithNavBarAndFooter from './services/OutletWithNavBarAndFooter'
import { useEffect } from 'react'
import Landing from './views/Landing'
import { theresUser, noUser } from './utils/Constants'

function App() {

  const location = useLocation()

  const theme = useGlobalState(state => state.theme)
  const user = useGlobalState(state => state.user)
  const changeView = useGlobalState(state => state.changeView)

  useEffect(() => {
    const newLocation = location.pathname
    changeView(newLocation)
  }, [changeView, location.pathname])

  return (
    <>
      {user
        ?
        <Routes>
          <Route element={<OutletWithNavBarAndFooter />} >
            <Route path='/' element={<Navigate to={'/home'} replace={true} />} />
            <Route path='home' element={<Estadisticas theme={theme} />} />
            <Route path='rutinas' element={<Rutinas />} />
            <Route path='ejercicios' element={<Ejercicios />} />
          </Route>
          <Route path='*' element={<NotFound type={theresUser} />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<NotFound type={noUser} />} />
        </Routes>
      }
    </>
  )
}

export default App