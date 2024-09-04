import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Estadisticas } from './views/Estadisticas'
import { Rutinas } from './views/Rutinas'
import Ejercicios from './views/Ejercicios'
import './index.css'
import './App.css'
import { useGlobalState } from './store/useGlobalState'
import NotFound from './views/NotFound'
import OutletWithNavBarAndFooter from './OutletWithNavBarAndFooter'
import { useEffect } from 'react'
import Landing from './views/Landing'
import { theresUser, noUser } from './utils/Constants'
import GetDataService from './services/GetDataService'
import useRefreshJWToken from './hooks/useRefreshJWToken'
import PasswordRecovery from './views/PasswordRecovery'
import Loader from './components/Loader'

function App() {

  const location = useLocation()

  const theme = useGlobalState(state => state.theme)
  const user = useGlobalState(state => state.user)
  const changeView = useGlobalState(state => state.changeView)
  const setGlobalRoutines = useGlobalState(state => state.setRoutines)
  const setGlobalExercises = useGlobalState(state => state.setExercises)
  const isLoadingUser = useGlobalState(state => state.isLoadingUser)



  useRefreshJWToken(user)

  useEffect(() => {
    const newLocation = location.pathname
    changeView(newLocation)
  }, [changeView, location.pathname])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetDataService.getRoutines()
        setGlobalRoutines(res)

        const res2 = await GetDataService.getAllExercises()
        setGlobalExercises(res2)
      } catch (error) {
        console.error(error)
        throw new Error("Error al obtener los datos de las rutinas y ejercicios")
      }
    }
    if (user) {
      fetchData()
    }
  }, [setGlobalRoutines, setGlobalExercises, user])

  if (isLoadingUser) {
    return <Loader />;
  }

  if (!user && !isLoadingUser) {
    return (
      < Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/activateAccount/:commingFromEmail' element={<PasswordRecovery />} />
        <Route path='*' element={<NotFound type={noUser} />} />
      </Routes>
    )
  }

  return (
    <>
      <Routes>
        <Route element={<OutletWithNavBarAndFooter />} >
          {<Route path='/' element={<Navigate to={'/home'} replace={true} />} />}
          <Route path='home' element={<Estadisticas theme={theme} />} />
          <Route path='rutinas' element={<Rutinas theme={theme} />} />
          <Route path='ejercicios' element={<Ejercicios theme={theme} />} />
        </Route>
        <Route path='*' element={<NotFound type={theresUser} />} />
      </Routes>
    </>
  )
}

export default App