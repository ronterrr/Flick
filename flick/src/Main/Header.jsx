import { useEffect, useState } from "react";
import darkMd from "../assets/images/dark-mode.svg";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else if (!darkMode) {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="Header">
      <img
        src={darkMd}
        alt="darken"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <h3>flick</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <input type="text" placeholder="flick-it" className="search" />
        <input type="submit" className="submit" value="search" />
      </form>
    </div>
  );
}

export default Header;
