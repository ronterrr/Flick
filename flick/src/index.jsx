import { Route, Routes, BrowserRouter, Navigate } from "react-router";

import App from "./PhotoFeed";
import Login from "./Login";
import GenAPI from "./GeneratorAPI";

import loginValidator from "./Global/loginValidator";
import { useEffect, useState } from "react";

function Main() {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const savedStatus = localStorage.getItem("loggedStatus");
    console.log("Raw localStorage value on load:", savedStatus);
    return savedStatus === true;
  });

  useEffect(() => {
    console.log(isLoggedIn);
    console.log("isLoggedIn changed, saving to localStorage:", isLoggedIn);
    localStorage.setItem("loggedStatus", isLoggedIn);
  }, [isLoggedIn]);

  const [userIndex, setUserIndex] = useState();
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/Flick/"
            element={
              isLoggedIn ? <App userIndex={userIndex}/> : <Navigate to="/Flick/login" replace />
            }
          />
          <Route
            path="/Flick/login"
            element={
              !isLoggedIn ? (
                <Login setLoggedIn={setLoggedIn} setUserIndex={setUserIndex} />
              ) : (
                <Navigate to="/Flick/" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/Flick/" replace />} />
        </Routes>
      </BrowserRouter> */}
  <GenAPI userIndex={userIndex}/>
    </>
  );
}

export default Main;
