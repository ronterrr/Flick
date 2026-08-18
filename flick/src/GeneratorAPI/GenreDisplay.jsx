import { useEffect, useState } from "react";
import GenreForm from "./GenreForm";
import DisplaySect from "./DisplaySect";

import './spinner.css';

function GenreDisplay() {
  const [genreCount, setGenreCount] = useState(1);

  const [genres, setGenres] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://binaryjazz.us/wp-json/genrenator/v1/genre/${genreCount}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      const data = await response.json();

      const normalisedData = Array.isArray(data) ? data : [data];
      setGenres(normalisedData);
      console.log(genres);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GenreForm
        genreCount={genreCount}
        setGenreCount={setGenreCount}
        onSubmit={handleFormSubmit}
      />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <DisplaySect genreCount={genreCount} genres={genres} />
      )}
    </>
  );
}

export default GenreDisplay;
