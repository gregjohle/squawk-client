import React from "react";
import ReactDOM from "react-dom";
import Signup from "./signup";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Signup />, div);

  ReactDOM.unmountComponentAtNode(div);
});
