import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="Header">
      <Logo />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserProfile />
    </div>
  );
}

export default Header;
