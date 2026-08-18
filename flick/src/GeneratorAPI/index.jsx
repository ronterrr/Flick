import Logo from "../Global/Header/Logo";
import UserProfile from "../Global/Header/UserProfile";
import NavBar from "../PhotoFeed/Navigation/NavBar";
import GenreDisplay from "./GenreDisplay";

import "./index.css";

function GenAPI({ userIndex = 0 }) {
  return (
    <>
      <div className="gen-api">
        <div className="top-section">
          <Logo />
          <h3 className="page-header">Genrerator</h3>
          <UserProfile userIndex={userIndex} />
        </div>
        <NavBar/>
        <GenreDisplay/>
      </div>
    </>
  );
}

export default GenAPI;
