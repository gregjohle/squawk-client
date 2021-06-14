import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Chat from "./chat-room";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  Object.defineProperty(window, "MediaRecorder", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      start: jest.fn(),
      ondataavailable: jest.fn(),
      onerror: jest.fn(),
      state: "",
      stop: jest.fn(),
    })),
  });

  ReactDOM.render(
    <Router>
      <Chat />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
