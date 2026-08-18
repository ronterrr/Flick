function DisplaySect({ genres, genreCount }) {
  return (
    <>
      <div className="display-sect">
        <ol>
          {genres.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

export default DisplaySect;
