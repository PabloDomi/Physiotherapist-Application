import { type User } from "../Utils/types";
import React from "react";
import '../index.css';


type SearchCardProps = {
  key: number;
  person: User;
}

const SearchCard: React.FC<SearchCardProps> = ({ person }) => {

  function handleClick() {
    console.log(person.name + ' tiene ' + person.age + ' años');
  }



  return (
    <div className="card-container shadow">
      <button className="card-div-button" onClick={handleClick}>
        <h6 className="card-name fw-bold">{person.name}</h6>
        <p className="ps-2 card-age">{person.age + ' años'}</p>
      </button>
    </div>
  );
}

export default SearchCard