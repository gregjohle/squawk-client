import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <h1>Squawk</h1>
      <img
        src='./images/logo.png'
        alt='logo for Squawk, the outline of a seagull'
      />
    </header>
  );
}
