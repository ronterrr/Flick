import { useEffect, useState } from "react";
import darkMd from "../../assets/images/dark-mode.svg";

function Logo() {
  const [darkMode, setDarkMode] = useState(()=>{
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else if (!darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  return (
    <>
      <div className="logo">
        <img
          src={darkMd}
          alt="darken"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <h3>flick</h3>
      </div>
    </>
  );
}

export default Logo;
