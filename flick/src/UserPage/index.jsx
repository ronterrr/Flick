import Logo from "../Global/Header/Logo";
import UserProfile from "../Global/Header/UserProfile";

import "./index.css";

function UserPage({ userIndex }) {
  return (
    <>
      <div className="user-page">
        <Logo />
        <UserProfile userIndex={0}/>
      </div>
    </>
  );
}

export default UserPage;
