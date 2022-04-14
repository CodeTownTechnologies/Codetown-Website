import React, { useState } from "react";
import "../navbar/navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../navbar/Logo.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left-navbar">
             <img height="30px" src={Logo} alt="" />
          </div>
          <div className="right-navbar">
            <span>
              {" "}
              <Link className="route-link" to="/">Home</Link>
            </span>
            <span>
              {" "}
              <Link  className="route-link" to="/about-us">About</Link>
            </span>
            <span>Services</span>
            <span>Technology</span>
            <span>Portfolio</span>
            <span>Process</span>
            <span>Career</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
