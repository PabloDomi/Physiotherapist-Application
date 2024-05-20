import React, { useState } from "react";
import SearchCard from "./SearchCard";
import { SearchListProps } from "../utils/types";

const SearchList: React.FC<SearchListProps> = ({ chartTitle, filteredPersons }) => {
  const [visiblePersons, setVisiblePersons] = useState(filteredPersons);

  const handleRemovePerson = (personId: number) => {
    setVisiblePersons((prevVisiblePersons) =>
      prevVisiblePersons?.filter((person) => person.id !== personId)
    );
  };

  return (
    <>
      {visiblePersons?.map((person) => (
        <SearchCard
          key={person.id}
          chartTitle={chartTitle}
          person={person}
          onRemove={handleRemovePerson}
        />
      ))}
    </>
  );
};

export default SearchList;
