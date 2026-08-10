import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./PhotoFeed";
import Login from "./Login";

import "./Global/dragblock.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
