import { useContext } from 'react'
import '../index.css'
import { ThemeContext } from '../services/themeProvider'

interface ScrollableListProps {
    children: React.ReactNode
}

const ScrollableList = (props: ScrollableListProps) => {

    const { theme } = useContext(ThemeContext)

    const styles: React.CSSProperties = {
        overflowY: 'auto',
        height: '54vh',
        scrollbarWidth: 'thin',
        scrollbarColor: `#568D75 ${theme === 'light'
            ? '#fff'
            : '#333'
            }`,
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',

    }

    return (
        <div className="scrollable" style={styles}>
            {props.children}
        </div>
    );
}

export default ScrollableList;
