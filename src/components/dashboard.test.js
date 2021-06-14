import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./dashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const currentUser = {
    name: "Test",
  };

  ReactDOM.render(<Dashboard currentUser={currentUser} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
