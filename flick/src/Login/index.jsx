import Logo from "../Global/Header/Logo";
import Form from "./Form";

import "./index.css";

function Login({ setLoggedIn, setUserIndex }) {
  return (
    <>
      <div className="log-in">
        <Logo />
        <Form setLoggedIn={setLoggedIn} setUserIndex={setUserIndex}/>
      </div>
    </>
  );
}

export default Login;
