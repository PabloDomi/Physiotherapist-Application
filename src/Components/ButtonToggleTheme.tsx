import { type Theme } from "../Utils/types"
import '../index.css'
import { Button } from "react-bootstrap"
import { IonIcon } from "@ionic/react"
import { moon, sunny } from 'ionicons/icons'

interface ButtonToggleThemeProps {
    toggleTheme: () => void
    theme: Theme

}

export const ButtonToggleTheme = ({ toggleTheme, theme }: ButtonToggleThemeProps) => {
    return (
        <>
            <Button onClick={toggleTheme} style={{ position: 'fixed', bottom: '10px', right: '10px' }}
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