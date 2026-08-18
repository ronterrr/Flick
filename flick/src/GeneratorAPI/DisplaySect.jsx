function DisplaySect({ genres, genreCount }) {
  return (
    <>
    <ol>
      {genres.map((i, index) => {
        return (
            <li key={index}>{i}</li>
        );
      })}
      </ol>
    </>
  );
}

export default DisplaySect;
