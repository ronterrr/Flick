import eye from "../assets/images/eye.svg";
import eyeOff from "../assets/images/eye-off.svg";
import { useState } from "react";

import loginValidator from "../Global/loginValidator";

function Form({ setLoggedIn }) {
  const [passShow, setPassShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(loginValidator(username, password));

          if(loginValidator(username, password) === "match"){
            setLoggedIn(true);
          }
        }}
      >
        <h3>log in</h3>
        <p>click here to sign up</p>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className="password">
          <input
            type={passShow === true ? "password" : "text"}
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <img
            src={passShow === true ? eyeOff : eye}
            onClick={() => {
              setPassShow(!passShow);
            }}
          />
        </div>
        <input type="submit" value="log in" />
      </form>
    </>
  );
}

export default Form;
