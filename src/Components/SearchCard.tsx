import { SearchCardProps } from "../utils/types";
import React, { useState } from "react";
import '../css/Estadisticas.css'
import { useGlobalState } from "../store/useGlobalState";
import { mockCustomStats } from "../utils/MockData";
import { IconButton } from "@mui/material";
import { Clear } from '@mui/icons-material';
import useAreUSure from "../hooks/useAreUSure";
import ModalWindow from "./Modal";


const SearchCard: React.FC<SearchCardProps> = ({ chartTitle, person }) => {

  const theme = useGlobalState(state => state.theme)

  const information = '¿Está seguro de que desea eliminar este paciente y toda su información relacionada?'

  const [showCard, setShowCard] = useState<boolean>(true)

  const toggleShowCard = () => setShowCard(!showCard)

  const {
    showModalAreUSure,
    toggleModalAreUSure,
    modalTitleAreUSure,
    modalContentAreUSure
  } = useAreUSure(information)

  // Función para actualizar el valor de custom data y recarga automatica de los datos en estadisticas
  const changeCustomStatsData = useGlobalState(state => state.changeCustomStatsData)

  /* 
      TODO: Aquí habría que coger los datos de person, y transformarlos en un array/objeto tipo mockStats
      const mockStatsTypeOfDataFromPerson = person => {...} 

      Esto se hará cuando sepa que datos me llegan de la aplicación de google Mediapipe
  */



  function handleClick() {
    chartTitle(person.name)
    changeCustomStatsData(mockCustomStats)
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    toggleModalAreUSure()
  }


  return (
    <>
      {showCard &&
        <div className="card-container shadow">
          <button className="card-div-button" onClick={handleClick}>
            <h6 className={theme === 'light' ? 'card-name-light fw-bold' : 'card-name fw-bold'}>{person.name + ' ' + person.surname}</h6>
            <p className={theme === 'light' ? 'card-age-light ps-2' : 'card-age ps-2'}>{person.age + ' años'}</p>
          </button>
          <IconButton onClick={handleDeleteClick} aria-label="delete" id="card-delete-button">
            <Clear fontSize="small" className={theme === 'dark' ? 'card-icon' : ''} />
          </IconButton>
          {showModalAreUSure &&
            <ModalWindow
              show={showModalAreUSure}
              title={modalTitleAreUSure}
              content={modalContentAreUSure}
              action='deletePatient'
              data={person.id}
              behavior={toggleShowCard}
            />
          }
        </div>
      }
    </>
  );
}

export default SearchCard