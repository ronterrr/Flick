import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Header({ searchTerm, setSearchTerm, userIndex }) {
  return (
    <div className="Header">
      <Logo />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserProfile userIndex={userIndex} />
    </div>
  );
}

export default Header;
