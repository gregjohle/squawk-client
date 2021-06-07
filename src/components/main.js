import React from "react";
import Logo from "./images/logo.png";

export default function Main(props) {
  return (
    <div className='mainWrapper'>
      <div className='tallWrapper'>
        <h2>Welcom to Squawk</h2>
        <img src={Logo} alt='logo for Squawk, the outline of a seagull' />
        <p>
          Squawk is a communication platform. This app allows users to create or
          join existing rooms to communicate with video and audio. It is free to
          use, and free to join.
        </p>
        <p>
          If you would like to join Squawk, click the register button and fill
          out the form. If you would like to login with an existing account,
          click the login button and enter your email address and password.
        </p>
        <p>To see a demo of this app, click on the demo button below.</p>
        <button>Demo</button>
      </div>
      <div className='stackedWrapper'>
        <div className='stacker'>
          <h2>Register</h2>
          <button>Register</button>
        </div>
        <div className='stacker'>
          <h2>Login</h2>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
