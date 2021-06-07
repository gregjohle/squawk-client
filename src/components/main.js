import React from "react";
import Logo from "./images/logo.png";
import Modal from "react-modal";
import "./main.css";
import Login from "./login";
import "./modal.css";

export default function Main(props) {
  let {
    handleLogin,
    loginModal,
    setLoginModal,
    registerModal,
    setRegisterModal,
  } = props;

  function handleOpenLogin(event) {
    event.preventDefault();
    setLoginModal(!loginModal);
  }

  function handleLoginClose() {
    setLoginModal(!loginModal);
  }

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
        <button>
          <b>Demo</b>
        </button>
      </div>
      <div className='stackedWrapper'>
        <div className='stacker'>
          <h2>Register</h2>
          <button>
            <b>Register</b>
          </button>
        </div>
        <div className='stacker'>
          <h2>Login</h2>
          <button onClick={(e) => handleOpenLogin(e)}>
            <b>Login</b>
          </button>
        </div>
      </div>
      <Modal
        isOpen={loginModal}
        onRequestClose={handleLoginClose}
        className='modal'
        overlayClassName='overlay'>
        <Login />
      </Modal>
    </div>
  );
}
