import { type User } from "../Utils/types";
import React from "react";
import '../CustomCss/Estadisticas.css'


type SearchCardProps = {
  key: number;
  person: User;
}

const SearchCard: React.FC<SearchCardProps> = ({ person }) => {
  return (
    <div className="text-center p-1 m-2 shadow overflow-y: auto position-relative">
      <div>
        <h6 style={{ fontFamily: 'Tilt Neon', color: '#3F7C75' }}><strong>{person.name}</strong></h6>
        <p className="ps-2" style={{ fontSize: '.9em', marginBottom: 0, textAlign: 'start', fontFamily: 'Tilt Neon', color: '#3F7C75' }}>{person.age + ' años'}</p>
      </div>
    </div>
  );
}

export default SearchCard;