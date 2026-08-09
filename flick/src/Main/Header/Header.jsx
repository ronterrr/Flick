import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Header() {
  return (
    <div className="Header">
      <Logo/>
      <SearchBar/>
      <UserProfile/>
    </div>
  );
}

export default Header;
