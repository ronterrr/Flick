import { Link } from "react-router";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <Link to="/Flick/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/Flick/genrerator" className="nav-link">
          <p>Genrerator</p>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
