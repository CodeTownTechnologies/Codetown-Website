import React from "react";
import "../footer/footer.css";
import Logo from "../footer/Logo.png";
import BottomToTop from "../BottomToTop/BottomToTop";

const Footer = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="mister_separator"></div>
      <footer id="footer-3-cols" className="site-footer">
        <div id="footer-container">
          <div id="footer-grid">
            <div id="left-footer-section" className="footer-section">
              <div id="footer-search">
                <form action="">
                  <input type="search" placeholder="Web design" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="footer-information">
                <div className="footer-information">
                  <p>
                    <img
                      src="https://img.icons8.com/ios-filled/12/999999/marker.png"
                      alt=""
                    />
                    30/20, Verkhy street, Moscow, Russia
                  </p>
                  <p>
                    <img
                      src="https://img.icons8.com/ios-filled/12/999999/phone.png"
                      alt=""
                    />
                    7 (800) 555–35–35
                  </p>
                  <p>
                    <img
                      src="https://img.icons8.com/ios-filled/12/999999/mail.png"
                      alt=""
                    />
                    noreply@reply.io
                  </p>
                  <p>
                    <img
                      src="https://img.icons8.com/ios-filled/12/999999/clock.png"
                      alt=""
                    />
                    8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div id="second-footer-section" className="footer-section">
              <div className="footer-links">
                <h3>Categories</h3>
                <ul>
                  <li role="menuitem">
                    <a href="#">Software Development</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Web Development</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Site maintainance</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">SEO</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Mobile development</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">UI/UX</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="right-footer-section" className="footer-section">
              <div className="footer-links">
                <h3>Information</h3>
                <ul>
                  <li role="menuitem">
                    <a href="#">Home</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">About</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Contact Information</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">
                      Terms of Use
                      <br />& Legal Information
                    </a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Message Us</a>
                  </li>
                  <li role="menuitem">
                    <a href="#">Leave a Feedback</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="copyright-information">
            <div id="footer-logo-section">
              <div id="footer-logo">
                <img
                  style={{
                    height: "30px",
                    width: "70px",
                    ObjectFit: "contain",
                  }}
                  height="30px"
                  width="40px"
                  src={Logo}
                  alt=""
                />
              </div>
            </div>
            <div id="copyright-text">
              &copy; Reimu Inc. 2022. All rights reserved.
            </div>
            <div id="social-buttons">
              <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" alt="image12" />
              <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" alt="image12" />
              <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"alt="image12" />
              <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"alt="image12" />
              <BottomToTop/>
            </div>
          </div>
        </div>

 

      </footer>
    </div>
  );
};

export default Footer;
