import React, { useState } from "react";
import SearchCard from "./SearchCard";
import { SearchListProps, behaviorSearchListProps } from "../utils/types";
import useAreUSure from "../hooks/useAreUSure";
import ModalWindow from "./Modal";


const SearchList: React.FC<SearchListProps> = ({ chartTitle, filteredPersons }) => {
  const [visiblePersons, setVisiblePersons] = useState(filteredPersons);
  const [personId, setPersonId] = useState<number | null>(null)
  const [behavior, setBehavior] = useState<behaviorSearchListProps>()

  const information = '¿Está seguro de que desea eliminar este paciente y toda su información relacionada?'

  const {
    showModalAreUSure,
    toggleModalAreUSure,
    modalTitleAreUSure,
    modalContentAreUSure
  } = useAreUSure(information)

  const handlePersonToRemove = (personId: number) => {
    setPersonId(personId)
  };

  const handleSetBehavior = (behavior: behaviorSearchListProps) => {
    setBehavior(() => behavior)
    behavior.onRemove(behavior.person_Id)
    toggleModalAreUSure()
  }

  const confirmDelete = () => {
    if (behavior) {
      behavior.toggleShowCard()
      setVisiblePersons((prevVisiblePersons) =>
        prevVisiblePersons?.filter((person) => person.id !== personId)
      );
    }
  }
  return (
    <>
      {visiblePersons?.map((person) => (
        <SearchCard
          key={person.id}
          chartTitle={chartTitle}
          person={person}
          onRemove={handlePersonToRemove}
          setBehavior={handleSetBehavior}
        />
      ))}
      {showModalAreUSure &&
        <ModalWindow
          show={showModalAreUSure}
          title={modalTitleAreUSure}
          content={modalContentAreUSure}
          action='deletePatient'
          data={personId}
          behavior={confirmDelete}
        />
      }
    </>
  );
};

export default SearchList;
