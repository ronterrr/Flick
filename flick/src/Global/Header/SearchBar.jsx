import { useState } from "react";

import searchIcon from "../../assets/images/search.svg";

function SearchBar({ searchTerm, setSearchTerm }) {
  const [phrase, setPhrase] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted: ", phrase);
          setSearchTerm(phrase);
        }}
      >
        <input
          type="text"
          placeholder="flick-it"
          className="search"
          spellCheck="false"
          onChange={(e) => {
            setPhrase(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
        <img src={searchIcon} alt="search"/>
        </button>
        {/* <input type="submit" className="submit" value="search" /> */}
      </form>
    </>
  );
}

export default SearchBar;
