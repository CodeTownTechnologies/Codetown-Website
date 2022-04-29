import React, { useState } from "react";
import "../navbar/navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../navbar/Logo.png"
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log('LinkLink', location)

  return (
    <>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left-navbar">
            <img height="30px" src={Logo} alt="" />
          </div>
          <div className="right-navbar">
            {" "}
            <Link style={{ textDecoration: 'none' }} to="/about-us"><p className={location.pathname === '/about-us' ? "route-link-active" : "route-link"}>About </p></Link>
            {" "}
            <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Services</p>
            <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Technology</p>
            <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Portfolio</p>
            <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Process</p>
            <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Career</p>
            <p className="navlink">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
