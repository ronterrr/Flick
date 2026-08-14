import { useState } from "react";
import "./sidebar.css";

function SideBar() {

    const [selectedOption, setSelectedOption] = useState('Account');

  const menuItems = [
    { name: "Account" },
    { name: "Privacy & Safety" },
    { name: "Security & Login" },
    { name: "Notifications" },
    { name: "Content & Display Preferences" },
    { name: "Support & Legal" },
  ];

  return (
    <>
      <div className="side-bar">
        <h3>Settings</h3>
        <hr />

        {menuItems.map((i) => {
          return <h4 
          key={i.name}
          onClick={() => {
            setSelectedOption(i.name)
          }}
          className={selectedOption === i.name ? 'option-selected' : ''}>
            {i.name}
            </h4>;
        })}

        <h4 className="signout-btn">SIGN OUT</h4>
      </div>
    </>
  );
}

export default SideBar;
