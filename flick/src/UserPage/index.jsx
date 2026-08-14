import Logo from "../Global/Header/Logo";
import UserProfile from "../Global/Header/UserProfile";
import SideBar from "./SideBar";
import Account from "./Account";

import data from '../Global/Data/userData.json';

import "./index.css";

function UserPage({ userIndex = 0 }) {

    const username = data[userIndex].username;
    const email = data[userIndex].email;
  return (
    <>
      <div className="user-page">
        <div className="user-page-header">
          <Logo />
          <UserProfile userIndex={userIndex} />
        </div>
        <hr />
        <h3 className="settings-header">Settings</h3>
        <div className="user-page-body">
          <SideBar />
          <Account username={username} email={email}/>
        </div>
      </div>
    </>
  );
}

export default UserPage;
