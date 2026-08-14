import Logo from "../Global/Header/Logo";
import UserProfile from "../Global/Header/UserProfile";
import SideBar from "./SideBar";

import "./index.css";

function UserPage({ userIndex=0 }) {
  return (
    <>
      <div className="user-page">
        <div className="user-page-header">
          <Logo />
          <UserProfile userIndex={userIndex} />
        </div>
        <hr />
        <SideBar/>
      </div>
    </>
  );
}

export default UserPage;
