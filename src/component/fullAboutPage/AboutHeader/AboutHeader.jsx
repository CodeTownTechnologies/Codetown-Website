import React from "react";
import "../AboutHeader/AboutHeader.scss";

const AboutHeader = () => {
  return (
    <div>
      <div className="AboutHeader-main-section">
        <img
          className="img1"
          src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image1"
          srcset=""
        />
        <div className="AboutHeader-main-Heading">
          <span className="AboutHeader-main-Heading-1">
            Specialists that deliver.
          </span> <br />
          <br />
          <span className=" AboutHeader-main-Heading-2">
            We know The Process, And Empower A Mulitidisciplinary Team To
            Collaborate With You And Deliver Delightful Solutions
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
