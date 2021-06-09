import React from "react";
import { Link } from "react-router-dom";
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
      <Link to='/'>
        <button className={buttonClass} onClick={() => handleLogout()}>
          Logout
        </button>
      </Link>
    </header>
  );
}
