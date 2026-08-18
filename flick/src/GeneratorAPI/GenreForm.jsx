function GenreForm({ genreCount, setGenreCount, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Enter the number of random genres you'd like generated</label>
        <input
          type="number"
          value={genreCount}
          min="1"
          onChange={(e) => {
            setGenreCount(e.target.value);
          }}
        />
        <input type="submit" value="genre me" />
      </form>
    </>
  );
}

export default GenreForm;
