import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";

it("renders without crashing", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "root");

  ReactDOM.render(
    <Router>
      <Main />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
