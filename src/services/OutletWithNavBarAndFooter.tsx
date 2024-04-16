import { useContext } from "react"
import { NavBar } from "../Components/Navbar"
import { ThemeContext } from "./themeProvider"
import { Outlet } from "react-router-dom"
import { BrandName } from "../Utils/Constants"
import imagePath from '../assets/physiotherapist-logo.png'
import { ButtonToggleTheme } from "../Components/ButtonToggleTheme"


const OutletWithNavBarAndFooter = () => {

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
            <Outlet />
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

export default OutletWithNavBarAndFooter