import { useState } from "react";
import "./sidebar.css";

function SideBar({ setActiveOption }) {
  const [selectedOption, setSelectedOption] = useState("Account");

  const menuItems = [
    { name: "Account", itemID: 0 },
    { name: "Privacy & Safety", itemID: 1 },
    { name: "Security & Login", itemID: 2 },
    { name: "Notifications", itemID: 3 },
    { name: "Content & Display Preferences", itemID: 4 },
    { name: "Support & Legal", itemID: 5 },
  ];

  return (
    <>
      <div className="side-bar">
        <hr />

        {menuItems.map((i) => {
          return (
            <h4
              key={i.name}
              onClick={() => {
                setSelectedOption(i.name);
                setActiveOption(i.itemID);
              }}
              className={selectedOption === i.name ? "option-selected" : ""}
            >
              {i.name}
            </h4>
          );
        })}

        <h4 className="signout-btn">SIGN OUT</h4>
      </div>
    </>
  );
}

export default SideBar;
