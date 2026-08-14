import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {Route, Routes, BrowserRouter} from "react-router";

import App from "./PhotoFeed";
import Login from "./Login";

import Main from ".";

import "./Global/dragblock.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main/>
  </StrictMode>,
);
