import React from "react";
import { render } from "react-dom";

import style from "./sass/main.scss";
import './images/icons/favicon.ico';

import App from './App.js';


if (module && module.hot) {
  module.hot.accept();
}


render(
  <App />,
  document.getElementById("root")
);
