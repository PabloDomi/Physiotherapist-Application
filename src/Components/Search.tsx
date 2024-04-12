import { useState } from "react";
import ScrollableList from "./ScrollableList";
import SearchList from "./SearchList";
import { SearchProps } from "../Utils/types";


const Search = ({ details, theme }: SearchProps) => {

  const [searchField, setSearchField] = useState('')
  const [searchShow, setSearchShow] = useState(false)

  const filteredPersons = details.filter(
    person => {
      return (
        person
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <ScrollableList>
          <SearchList filteredPersons={filteredPersons} />
        </ScrollableList>
      );
    }
  }

  return (
    <section>
      <div className="p-2">
        <input
          className={theme === 'light'
            ? "input-light"
            : "input-dark"
          }
          name="search"
          type="search"
          autoComplete="off"
          placeholder="Buscar usuarios"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;