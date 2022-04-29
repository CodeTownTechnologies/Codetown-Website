import React from "react";
import { Container } from "react-bootstrap";
import "../Process/process.css";

const Process = () => {
  return (
    <>
      <div style={{ marginTop: "40px" }} className="Process-main-container">
        <div className="">
          <span>Simply Process</span>
          <hr width="110px" color="orange" height=".9px" />
        </div>
        <div>
          <h1>We Simplify Software Development Process</h1>
        </div>
        <div className="process-child-div">
          <span style={{ width: "240px", padding: "25px" }}>
            <span style={{ display: "flex", alignItem: "center", position: "relative", marginLeft: "0px" }}>

              <img className="process-image" src=" https://thumbs.dreamstime.com/z/computer-engineer-rgb-color-icon-professional-program-developer-hardware-maintenance-specialist-modern-technology-workstation-186491789.jpg" alt="" srcset="" />
              <hr className="hr1" />


            </span>

            <h4>Discover</h4>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quibusdam est tempore? Quia fugit ex nostrum temporibus
              repellendus itaque iste nihil? Et nihil unde nobis.{" "}
            </p>
          </span>
          <span style={{ width: "240px", padding: "25px" }}>
            <span style={{ display: "flex", alignItem: "center", position: "relative", marginLeft: "0px" }}>

              <img className="process-image" src="https://thumbs.dreamstime.com/z/programmer-coder-web-developer-software-engineer-sitting-desk-working-computer-programming-workplace-work-127386997.jpg" alt="" srcset="" />
              <hr className="hr1" />
            </span>
            <h4>Discover</h4>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quibusdam est tempore? Quia fugit ex nostrum temporibus
              repellendus itaque iste nihil? Et nihil unde nobis.{" "}
            </p>
          </span>
          <span style={{ width: "240px", padding: "25px" }}>
            <span style={{ display: "flex", alignItem: "center", position: "relative", marginLeft: "0px" }}>

              <img className="process-image" src="https://thumbs.dreamstime.com/z/smiling-programmer-coder-web-developer-software-engineer-worker-holding-laptop-happy-male-cartoon-character-isolated-127386679.jpg" alt="" srcset="" />
              <hr className="hr1" />
            </span>
            <h4>Discover</h4>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quibusdam est tempore? Quia fugit ex nostrum temporibus
              repellendus itaque iste nihil? Et nihil unde nobis.{" "}
            </p>
          </span>

          <span style={{ width: "240px", padding: "25px" }}>
            <span style={{ display: "flex", alignItem: "center", position: "relative", marginLeft: "0px" }}>

              <img className="process-image" src="https://thumbs.dreamstime.com/z/man-computer-smiling-programmer-giving-thumbs-up-sign-isolated-white-background-cartoon-style-vector-illustration-95982164.jpg" alt="" srcset="" />

            </span>
            <h4>Discover</h4>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quibusdam est tempore? Quia fugit ex nostrum temporibus
              repellendus itaque iste nihil? Et nihil unde nobis.{" "}
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Process;
