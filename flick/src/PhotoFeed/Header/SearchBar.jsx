import { useState } from "react";

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
        <input type="submit" className="submit" value="search" />
      </form>
    </>
  );
}

export default SearchBar;
