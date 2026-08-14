import Logo from "../Global/Header/Logo";
import Form from "./Form";

import "./index.css";

function Login({ setLoggedIn }) {
  return (
    <>
      <div className="log-in">
        <Logo />
        <Form setLoggedIn={setLoggedIn}/>
      </div>
    </>
  );
}

export default Login;
