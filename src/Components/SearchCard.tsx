import { type User } from "../Utils/types";
import React from "react";
import '../index.css';


type SearchCardProps = {
  key: number;
  person: User;
}

const SearchCard: React.FC<SearchCardProps> = ({ person }) => {
  return (
    <div className="text-center p-1 m-2 shadow overflow-y: auto position-relative">
      <div>
        <h6 className="card-name"><strong>{person.name}</strong></h6>
        <p className="ps-2 card-age">{person.age + ' años'}</p>
      </div>
    </div>
  );
}

export default SearchCard;