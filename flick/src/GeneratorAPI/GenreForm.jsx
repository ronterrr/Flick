function GenreForm({ genreCount, setGenreCount, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit} className="genre-form">
        <label>Genre Count: </label>
        <input
          type="number"
          value={genreCount}
          min="1"
          className="genre-count"
          onChange={(e) => {
            setGenreCount(e.target.value);
          }}
        />
        <br/>
        <input type="submit" value="genre me" className="genre-me" />
      </form>
    </>
  );
}

export default GenreForm;
