import { useContext } from 'react'
import '../index.css'
import { ThemeContext } from '../Services/themeProvider'
import { ScrollableListProps } from '../Utils/types'


const ScrollableList = (props: ScrollableListProps) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === 'light'
            ? 'scrollable-light scrollable'
            : 'scrollable-dark scrollable'
        }>
            {props.children}
        </div>
    );
}

export default ScrollableList;
