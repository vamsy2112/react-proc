import React from "react";

import "./Navbar.scss"; // Importing the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">LOGO</h1>
      <ul className="nav-list">
        <li className="nav-list-item">About</li>
        <li className="nav-list-item">Business</li>
        <li className="nav-list-item">Blog</li>
        <li className="nav-list-item">Login</li>
        <li className="nav-list-item"> Sign up</li>
      </ul>
    </div>
  );
};

export default Navbar;
