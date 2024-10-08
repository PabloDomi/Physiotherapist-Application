import { SearchCardProps } from "../utils/types";
import React, { useState } from "react";
import '../css/Estadisticas.css'
import { useGlobalState } from "../store/useGlobalState";
import { mockCustomStats } from "../utils/MockData";
import { IconButton } from "@mui/material";
import { Clear } from '@mui/icons-material';


const SearchCard: React.FC<SearchCardProps> = ({ chartTitle, person, onRemove, setBehavior }) => {

  const theme = useGlobalState(state => state.theme)
  const [showCard, setShowCard] = useState<boolean>(true)

  const toggleShowCard = () => setShowCard(!showCard)

  // Función para actualizar el valor de custom data y recarga automatica de los datos en estadisticas
  const changeCustomStatsData = useGlobalState(state => state.changeCustomStatsData)



  function handleClick() {
    chartTitle(person.id)
    changeCustomStatsData(mockCustomStats)
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setBehavior({
      onRemove: onRemove,
      toggleShowCard: toggleShowCard,
      person_Id: person.id
    })
  }

  return (
    <>
      {showCard &&
        <div className="card-container shadow">
          <button className="card-div-button" onClick={handleClick}>
            <h6 className={theme === 'light' ? 'card-name-light ps-2 fw-bold' : 'card-name ps-2 fw-bold'}>
              {person.name + ' ' + person.surname}
            </h6>
            <p className={theme === 'light' ? 'card-age-light ps-2' : 'card-age ps-2'}>
              {person.age + ' años'}
            </p>
          </button>
          <IconButton onClick={handleDeleteClick} aria-label="delete-card-button" id="card-delete-button">
            <Clear fontSize="small" className={theme === 'dark' ? 'card-icon' : ''} />
          </IconButton>
        </div>
      }
    </>
  );
}

export default SearchCard