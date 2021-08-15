import "./sass/index.scss";

import { BrowserRouter as Router, withRouter } from "react-router-dom";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);
