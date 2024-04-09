import { User } from "../Utils/types";
import SearchCard from "./SearchCard";

interface SearchListProps {
  filteredPersons: User[]
}

const SearchList: React.FC<SearchListProps> = ({ filteredPersons }) => {
    const filtered = filteredPersons.map(person =>  
        <SearchCard key={person.id} person={person} />); 
        
    return (
      <div>
        {filtered}
      </div>
    );
  }
  
  export default SearchList;