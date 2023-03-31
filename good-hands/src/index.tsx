import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import BackgroundPow from "./components/background/background";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <BackgroundPow />
    <App />
  </BrowserRouter>
);
