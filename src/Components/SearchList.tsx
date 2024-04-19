import SearchCard from "./SearchCard";
import { SearchListProps } from "../utils/types";

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