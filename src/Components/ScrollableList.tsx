import { useContext } from 'react'
import '../index.css'
import { ThemeContext } from '../Services/themeProvider'

interface ScrollableListProps {
    children: React.ReactNode
}

const ScrollableList = (props: ScrollableListProps) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === 'light'
            ? 'scrollable-light'
            : 'scrollable-dark'
        }>
            {props.children}
        </div>
    );
}

export default ScrollableList;
