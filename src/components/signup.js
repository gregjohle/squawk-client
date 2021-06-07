import React from "react";

export default function Signup(props) {
  return (
    <form>
      <input type='text' placeholder='Name' required />
      <input type='email' placeholder='Email Address' required />
      <input type='pssword' placeholder='Password' required />
      <input type='pssword' placeholder='Confirm Password' required />
      <button>Register</button>
    </form>
  );
}
