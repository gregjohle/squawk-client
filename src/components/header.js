import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./images/logo.png";

export default function Header(props) {
  let { handleLogout, isLoggedIn, handleHangup } = props;

  function handleLogoutButton() {
    if (isLoggedIn) {
      return "";
    }
    return "hidden";
  }

  let buttonClass = `logoutButton ` + handleLogoutButton();

  return (
    <Link
      to='/'
      className='buttonClass'
      style={{ textDecoration: "none", color: "black" }}
      onClick={() => handleHangup()}>
      <header>
        <h1>Squawk</h1>
        <img src={Logo} alt='logo for Squawk, the outline of a seagull' />

        <button className={buttonClass} onClick={() => handleLogout()}>
          Logout
        </button>
      </header>
    </Link>
  );
}
