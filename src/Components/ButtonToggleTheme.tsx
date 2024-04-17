import { ButtonToggleThemeProps } from '../utils/types'
import '../css/ButtonToggleTheme.css'
import { Button } from "react-bootstrap"
import { IonIcon } from "@ionic/react"
import { moon, sunny } from 'ionicons/icons'


export const ButtonToggleTheme = ({ toggleTheme, theme }: ButtonToggleThemeProps) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')

        toggleTheme()
    }

    return (
        <>
            <Button onClick={handleClick}
                className={
                    theme === 'light'
                        ? 'btn-light toggle-button-light-to-dark'
                        : 'btn-dark toggle-button-dark-to-light'
                }>
                {theme === 'light'
                    ?
                    <>
                        <IonIcon className="sunny icon-visible" icon={sunny} />
                        <IonIcon className="moon icon-hidden" icon={moon} />
                    </>
                    : <>
                        <IonIcon className="moon icon-visible" icon={moon} />
                        <IonIcon className="sunny icon-hidden" icon={sunny} />
                    </>
                }
            </Button>
        </>
    )
}