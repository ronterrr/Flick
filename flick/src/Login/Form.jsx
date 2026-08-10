import eye from "../assets/images/eye.svg";
import eyeOff from "../assets/images/eye-off.svg";
import { useState } from "react";

function Form() {
  const [passShow, setPassShow] = useState(false);
  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>log in</h3>
        <p>click here to sign up</p>
        <input type="text" placeholder="username" />
        <div className="password">
          <input type={passShow === true ? "password" : "text"} placeholder="password" />
          <img src={passShow === true ? eyeOff : eye} onClick={()=>{
            setPassShow(!passShow);
          }}/>
        </div>
        <input type="submit" value="log in" />
      </form>
    </>
  );
}

export default Form;
