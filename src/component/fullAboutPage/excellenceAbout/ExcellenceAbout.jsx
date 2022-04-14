import React from "react";
import "../excellenceAbout/excellenceAbout.scss";

const ExcellenceAbout = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-main-container">
          <div className="sub-right-main-container">
            <span style={{ textAlign: "start", alignItems: "flex-start" , marginBottom:"-12px"}}>
              Your Implementation Partner of Choice
            </span>
            <h1>Excellence Is A Habit</h1>
            <span style={{ textAlign: "left" }}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias magnam sit corporis, mollitia perferendis quae obcaecati
              a non odit, itaque ab hic exercitationem!lorem10 Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quam in rerum animi rem
              nostrum voluptatibus amet quis dolore. Optio molestiae minima ad
              commodi expedita perspiciatis necessitatibus nam ut dolore vitae.
            </span>

            <span>
              <ul className="un-oderlist">
                <li className="list-icon">  <span>  Create Customer Focussed Interaction Models </span> </li>
                <li className="list-icon"> <span>  Embrace Service Delivery Mechanisms That Can Be Measured </span> </li>
                <li className="list-icon"> <span>  Indulge In Transparent Business Engagement </span></li>
                <li className="list-icon"> <span>  Build An Effective Fault-Tolerant, Time-Tested Bussiness Continuity Plan </span></li>
                <li className="list-icon"> <span>  Deliver Effective And Efficient Solution To Maximize ROI  </span></li>
              </ul>
            </span>
            <span style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              officiis dicta ratione veritatis voluptatibus esse nesciunt nemo
              sed dolorum quo quia recusandae deleniti quisquam officia harum
              quasi suscipit, blanditiis quam perferendis. Voluptates dolore
              quidem voluptate, delectus asperiores voluptas mollitia.
            </span>
          </div>
        </div>
        <div className="left-main-container">
          <div style={{ display: "flex" }} className="sub-left-main-container">
            <div className="image1">
              <img
                style={{
                  width: "240px",
                  height: "480px",
                  objectFit: "cover",
                  padding: "5px",
                  marginTop: "12px",
                }}
                src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
              className="image2"
            >
              <img
                style={{ width: "240px", height: "230px", padding: "10px" }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                style={{ width: "240px", height: "230px", padding: "10px" }}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcellenceAbout;
