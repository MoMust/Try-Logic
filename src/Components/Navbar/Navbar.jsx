import React from "react";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [addClass, setAddClass] = useState("");

  const toggleMenu = () => {
    if (!showMenu) {
      setAddClass("open");
      setShowMenu(true);
      document.querySelector(".hero-container").classList.add("header-small");
    } else {
      setAddClass("");
      setShowMenu(false);
      document
        .querySelector(".hero-container")
        .classList.remove("header-small");
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/Logos/logoNoBG-.png" width="150" height="150" alt="logo" />
      </div>
      <div className={`menu-btn ${addClass}`} onClick={() => toggleMenu()}>
        <div className="menu-btn_burger"></div>
      </div>

      {showMenu ? (
        <div className="navbar-menu-mobile-container">
          <div className="navbar-links-mobile">
            <ul>
              <li>
                <a herf="#">Home</a>
              </li>
              <li>
                <a herf="#">Log in</a>
              </li>
              <li>
                <a herf="#">Contact us</a>
              </li>
              <li>
                <a herf="#">Unsubscribe</a>
              </li>
            </ul>
          </div>
          <div className="navbar-buttons-mobile">
            <button className="buttonTest-mobile border">START THE TEST</button>
            <button className="buttonSignUp-mobile border">SIGN UP</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="navbar-links">
        <ul>
          <li>
            <a herf="#">Home</a>
          </li>
          <li>
            <a herf="#">Log in</a>
          </li>
          <li>
            <a herf="#">Contact us</a>
          </li>
          <li>
            <a herf="#">Unsubscribe</a>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <button className="buttonTest border">START THE TEST</button>
        <button className="buttonSignUp border">SIGN UP</button>
      </div>
    </div>
  );
};
