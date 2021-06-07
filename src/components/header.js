import React from "react";
import "./header.css";
import Logo from "./images/logo.png";

export default function Header(props) {
  let { handleLogout, isLoggedIn } = props;

  function handleLogoutButton() {
    if (isLoggedIn) {
      return "";
    }
    return "hidden";
  }

  let buttonClass = `headerButton ` + handleLogoutButton();

  return (
    <header>
      <h1>Squawk</h1>
      <img src={Logo} alt='logo for Squawk, the outline of a seagull' />
      <button className={buttonClass} onClick={() => handleLogout()}>
        Logout
      </button>
    </header>
  );
}
