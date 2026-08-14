import userIcon from "../assets/images/user-icon.svg";
import mailIcon from '../assets/images/mail.svg'

import "./account.css";

function Account({ username, email }) {
  return (
    <>
      <div className="account">
        <h3>Account Information</h3>
        <hr />
        <div className="info-sect">
          <img src={userIcon} />
          <p>username: </p>
          <p>{username}</p>
        </div>
        <div className="info-sect">
          <img src={mailIcon} />
          <p>email: </p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}

export default Account;
