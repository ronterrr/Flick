import { Route, Routes, BrowserRouter, Navigate } from "react-router";

import App from "./PhotoFeed";
import Login from "./Login";

import loginValidator from "./Global/loginValidator";
import { useEffect, useState } from "react";

function Main() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Flick/"
            element={
              isLoggedIn ? <App /> : <Navigate to="/Flick/login" replace />
            }
          />
          <Route
            path="/Flick/login"
            element={
              !isLoggedIn ? (
                <Login setLoggedIn={setLoggedIn} />
              ) : (
                <Navigate to="/Flick/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default Main;
