import React from "react";
import "../footer/footer.css";
import Logo from "../footer/Logo.png";
import BottomToTop from "../BottomToTop/BottomToTop";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="mister_separator"></div>
      <footer id="footer-3-cols" className="site-footer">
        <div id="footer-container">
          <div id="footer-grid">
            <div id="left-footer-section" className="footer-section">
              <div className="right-navbar">
                {" "}
                <Link style={{ textDecoration: 'none' }} to="/about-us"><p className={location.pathname === '/about-us' ? "route-link-active" : "route-link"}>About </p></Link>
                {" "}
                <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Services</p>
                <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Technology</p>
                <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Portfolio</p>
                <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Process</p>
                <p className={location.pathname === '#' ? "route-link-active" : "route-link"}>Career</p>
              </div>
            </div>
            <div id="right-footer-section" className="footer-section-1">
              <div id="social-buttons">
                <img className='social-icon' src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" alt="image12" />
                <img className='social-icon' src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" alt="image12" />
                <img className='social-icon' src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" alt="image12" />
                <img className='social-icon' src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" alt="image12" />
                {/* <BottomToTop/> */}
              </div>
            </div>
          </div>
          <div id="copyright-information" style={{ width: '100%' }}>
            <div>
              <img
                style={{
                  height: "25px",
                  width: "150px",
                  ObjectFit: "contain",
                }}
                height="25px"
                width="150px"
                src={Logo}
                alt=""
              />
            </div>
            <div style={{ width: '100%' }}>
              <div id="copyright-text" style={{ marginLeft: '15px' }}>
                2020-2022 &copy;codetowntechnologies - All rights reserved
              </div>
            </div>
            <div style={{ textAlign: 'right', justifyContent: 'end', float: 'right', width: '100%', display: 'flex' }}>
              <div id="copyright-text-1" style={{ display: 'flex', marginRight: '10px' }}>
                <img style={{ width: '20px', height: '20px', marginTop: '10px', marginRight: '3px' }} src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" alt="image12" /> <p>+91 76270 37613</p>
              </div>
              <div id="copyright-text-1" style={{ display: 'flex' }}>
                <img style={{ width: '20px', height: '20px', marginTop: '10px', marginRight: '3px' }} src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" alt="image12" /> <p>hr@codetowntechnologies.com</p>
              </div>
            </div>
            {/* <div id="footer-logo-section">
              <div id="footer-logo">
                <img
                  style={{
                    height: "25px",
                    width: "150px",
                    ObjectFit: "contain",
                  }}
                  height="25px"
                  width="150px"
                  src={Logo}
                  alt=""
                />
              </div>
              <div id="copyright-text">
                &copy; Reimu Inc. 2022. All rights reserved.
              </div>
            </div> */}
          </div>
        </div>



      </footer>
    </div>
  );
};

export default Footer;
