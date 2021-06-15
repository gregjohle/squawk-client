import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Chat from "./chat-room";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  global.navigator.mediaDevices = {
    enumerateDevices: jest.fn(),
  };

  ReactDOM.render(
    <Router>
      <Chat />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
