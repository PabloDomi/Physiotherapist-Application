import SearchCard from "./SearchCard";
import { SearchListProps } from "../utils/types";

const SearchList: React.FC<SearchListProps> = ({ chartTitle, filteredPersons }) => {
  const filtered = filteredPersons?.map(person =>
    <SearchCard chartTitle={chartTitle} key={person.id} person={person} />);

  return (
    <>
      {filtered}
    </>
  );
}

export default SearchList;