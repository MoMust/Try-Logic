import React from 'react'
import './style.css'

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/Logos/lightLogo.webp" width="100" height="100" alt="logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>Log in</li>
          <li>Contact us</li>
          <li>Unsubscribe</li>
          </ul> 
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-primary">Button 1</button>
        <button className="btn btn-primary">Button 2</button>
      </div>
    </div>
  );
}
