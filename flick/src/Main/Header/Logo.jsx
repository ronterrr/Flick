import { useEffect, useState } from "react";
import darkMd from "../../assets/images/dark-mode.svg";

function Logo() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else if (!darkMode) {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <>
      <img
        src={darkMd}
        alt="darken"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <h3>flick</h3>
    </>
  );
}

export default Logo;
