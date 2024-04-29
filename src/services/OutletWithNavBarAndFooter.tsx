import { NavBar } from "../components/Navbar"
import { Outlet } from "react-router-dom"
import '../css/Navbar.css'
import { BrandName } from "../utils/Constants"
import imagePath from '../assets/physiotherapist-logo.png'
import { ButtonToggleTheme } from "../components/ButtonToggleTheme"
import '../css/Navbar.css'
import { useGlobalState } from "../store/useGlobalState"



const OutletWithNavBarAndFooter = () => {

    const theme = useGlobalState(state => state.theme)
    const toggleTheme = useGlobalState(state => state.toggleTheme)


    return (
        <>
            <NavBar
                styledClassName={theme === 'light'
                    ? "navbar-light bg-white shadow pe-3 background-gradient-light"
                    : "navbar-dark bg-dark shadow pe-3 background-gradient-dark"
                }
                brandName={BrandName}
                imageSrcPath={imagePath}
            />
            <Outlet />
            <footer className={theme === 'light'
                ? 'footer-dark footer-container background-light'
                : 'footer-light footer-container background-dark'
            }>
                <div className='footer-container'>
                    <p className='footer-text font-tilt-neon'>Derechos de autor © 2024</p>
                </div>
            </footer>
            <ButtonToggleTheme toggleTheme={toggleTheme} theme={theme} />
        </>
    )
}

export default OutletWithNavBarAndFooter