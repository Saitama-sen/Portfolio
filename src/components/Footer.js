import React from "react";
import logo from "../logo.png";
import insta from "../instagram.svg";
import gmail from "../google.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logo} alt="log" />
      </div>
      <div className="socials">
        <img src={gmail} alt="gamil" />
        <img src={insta} alt="instagram" />
      </div>
    </div>
  );
}
