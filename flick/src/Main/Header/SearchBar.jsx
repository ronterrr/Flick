function SearchBar() {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <input type="text" placeholder="flick-it" className="search" />
        <input type="submit" className="submit" value="search" />
      </form>
    </>
  );
}

export default SearchBar;