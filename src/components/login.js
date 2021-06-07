import React from "react";
import "./login.css";

export default function Login(props) {
  return (
    <form>
      <input type='email' placeholder='Enter Email Address' required />
      <input type='password' placeholder='Enter Password' requires />
      <button>
        <b>Login</b>
      </button>
    </form>
  );
}
