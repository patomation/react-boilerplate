import React from "react";
import { render } from "react-dom";

import "./main.css";
import "./images/icons/favicon.ico";

import App from "./App";

if (module && module.hot) {
  module.hot.accept();
}

render(
  <App message={"< ReactBoilerplate />"} />,
  document.getElementById("root")
);
