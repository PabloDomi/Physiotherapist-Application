import { SearchCardProps } from "../utils/types";
import React from "react";
import '../css/Estadisticas.css'
import { useGlobalState } from "../store/useGlobalState";
//import { useGlobalState } from "../Store/useGlobalState";


const SearchCard: React.FC<SearchCardProps> = ({ person }) => {

  const theme = useGlobalState(state => state.theme)

  /* 
      TODO: Aquí habría que coger los datos de person, y transformarlos en un array/objeto tipo mockStats
      const mockStatsTypeOfDataFromPerson = person => {...} 
  */

  /* 
      Función para obtener la función de cambiar los datos custom de stats
      const changeCustomStatsData = useGlobalState(state => state.changeCustomStatsData); 
  */

  function handleClick() {

    /* 
        Aqui habría que cambiar los datos de las estadísticas custom con 
        changeCustomStatsData(mockStatsTypeOfDataFromPerson) 
    */


    console.log(person.name + ' tiene ' + person.age + ' años');
  }



  return (
    <div className="card-container shadow">
      <button className="card-div-button" onClick={handleClick}>
        <h6 className={theme === 'light' ? 'card-name-light fw-bold' : 'card-name fw-bold'}>{person.name}</h6>
        <p className={theme === 'light' ? 'card-age-light ps-2' : 'card-age ps-2'}>{person.age + ' años'}</p>
      </button>
    </div>
  );
}

export default SearchCard