import Logo from "../Global/Header/Logo";
import UserProfile from "../Global/Header/UserProfile";

import "./index.css";

function GenAPI({ userIndex = 0 }) {
  return (
    <>
      <div className="gen-api">
        <div className="top-section">
          <Logo />
          <UserProfile userIndex={userIndex} />
        </div>
      </div>
    </>
  );
}

export default GenAPI;
