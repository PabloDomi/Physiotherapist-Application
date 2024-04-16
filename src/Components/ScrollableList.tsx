import '../Css/Estadisticas.css'
import { useGlobalState } from '../Store/useGlobalState';
import { ScrollableListProps } from '../Utils/types'


const ScrollableList = (props: ScrollableListProps) => {

    const theme = useGlobalState(state => state.theme)

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
