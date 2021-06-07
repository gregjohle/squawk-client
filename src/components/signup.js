import React from "react";

export default function Signup(props) {
  let {
    addNewUser,
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerConfirmPassword,
    setRegisterConfirmPassword,
    setRegisterModal,
  } = props;

  function handleRegisterName(event) {
    setRegisterName(event.target.value);
  }

  function handleRegisterEmail(event) {
    setRegisterEmail(event.target.value);
  }

  function handleRegisterPassword(event) {
    setRegisterPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setRegisterConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (registerPassword === registerConfirmPassword) {
      addNewUser(registerName, registerEmail, registerPassword);
      setRegisterModal(false);
    } else if (registerPassword !== registerConfirmPassword) {
      alert("Passwords do not match.");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Name'
        value={registerName}
        onChange={(e) => handleRegisterName(e)}
        required
      />
      <input
        type='email'
        placeholder='Email Address'
        value={registerEmail}
        onChange={(e) => handleRegisterEmail(e)}
        required
      />
      <input
        type='pssword'
        placeholder='Password'
        value={registerPassword}
        onChange={(e) => handleRegisterPassword(e)}
        required
      />
      <input
        type='pssword'
        placeholder='Confirm Password'
        value={registerConfirmPassword}
        onChange={(e) => handleConfirmPassword(e)}
        required
      />
      <button>Register</button>
    </form>
  );
}
