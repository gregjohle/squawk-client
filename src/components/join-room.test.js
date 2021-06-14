import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import JoinRoom from "./join-room";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <JoinRoom />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
