import React from "react";
import Logo from "./images/logo.png";
import Modal from "react-modal";
import "./main.css";
import Login from "./login";
import "./modal.css";
import Signup from "./signup";

// Modal.setAppElement("#root");

export default function Main(props) {
  let {
    handleLogin,
    loginModal,
    setLoginModal,
    registerModal,
    setRegisterModal,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    demoLogin,
    addNewUser,
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerConfirmPassword,
    setRegisterConfirmPassword,
  } = props;

  function handleOpenLogin(event) {
    event.preventDefault();
    setLoginModal(!loginModal);
  }

  function handleLoginClose() {
    setLoginModal(!loginModal);
  }

  function handleOpenRegister(event) {
    event.preventDefault();
    setRegisterModal(!registerModal);
  }

  function handleCloseRegister() {
    setRegisterModal(!registerModal);
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
        <button onClick={() => demoLogin()}>
          <b>Demo</b>
        </button>
      </div>
      <div className='stackedWrapper'>
        <div className='stacker'>
          <h2>Register</h2>
          <button onClick={(e) => handleOpenRegister(e)}>
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
        <Login
          handleLogin={handleLogin}
          loginemail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          setLoginModal={setLoginModal}
        />
      </Modal>
      <Modal
        isOpen={registerModal}
        onRequestClose={handleCloseRegister}
        className='modal'
        overlayClassName='overlay'>
        <Signup
          addNewUser={addNewUser}
          registerName={registerName}
          setRegisterName={setRegisterName}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
          registerConfirmPassword={registerConfirmPassword}
          setRegisterConfirmPassword={setRegisterConfirmPassword}
          setRegisterModal={setRegisterModal}
        />
      </Modal>
    </div>
  );
}
