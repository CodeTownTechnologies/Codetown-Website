import React, { useEffect, useRef } from "react";
import { init } from "ityped";
// import { maxWidth } from "@mui/system";
import "../Header/Header.scss";
import { UilMouseAlt } from "@iconscout/react-unicons";

const Header = () => {
  const HeaderHeadline = useRef();
  useEffect(() => {
    init(HeaderHeadline.current, {
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      strings: ["MOBILE APPLICATION", "WEB-APPLICATION"],
    });
  }, []);

  return (
    <div>
      <div className="main-Header-box">
        <img
          src=" https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="image1"
          srcset=""
          width="100%"
          height="610px"
        />
        <div className="icon12">
          <UilMouseAlt  style={{height:"35px", cursor:"pointer", width:"40px", color:"white"}} />
        </div>

        <div className="header-bottom-list">
          <span >MOBILE</span>
          <span>WEB</span>
          <span>SALESFORCE</span>
          <span>IOT</span>
        </div>

        <div className="Blinking-Header-box">
          <span
            className="blinking-header"
            style={{ marginLeft: "33px", color: "white", fontSize: "40px" }}
          >
            WE DELIVER
          </span>
          <br />
          <span
            className="blinking-header"
            ref={HeaderHeadline}
            style={{
              color: "white",
              fontSize: "40px",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            WE DELIVER
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
