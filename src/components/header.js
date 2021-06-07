import React from "react";
import "./header.css";
import Logo from "./images/logo.png";

export default function Header(props) {
  return (
    <header>
      <h1>Squawk</h1>
      <img src={Logo} alt='logo for Squawk, the outline of a seagull' />
    </header>
  );
}
