import React from "react";
import "./login.css";

export default function Login(props) {
  let {
    handleLogin,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    setLoginModal,
  } = props;

  function handleEmailChange(event) {
    setLoginEmail(event.target.value);
    console.log(event.target.value);
  }

  function handlePasswordChange(event) {
    setLoginPassword(event.target.value);
  }

  function handleUserLogin(event) {
    event.preventDefault();
    console.log(loginEmail);
    handleLogin(loginEmail, loginPassword);
    setLoginModal(false);
  }

  return (
    <form onSubmit={(e) => handleUserLogin(e)}>
      <input
        type='email'
        placeholder='Enter Email Address'
        value={loginEmail}
        onChange={(e) => handleEmailChange(e)}
        required
      />
      <input
        type='password'
        placeholder='Enter Password'
        value={loginPassword}
        onChange={(e) => handlePasswordChange(e)}
        required
      />
      <button>
        <b>Login</b>
      </button>
    </form>
  );
}
