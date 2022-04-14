import React from "react";
import "../AboutEthos/AboutEthos.scss";
const EthosArray = [
  {
    number: "1",
    ethosExpression: "You Expect Proactiveness",
    ethosHeading: "WE SHARE OUR EXPERIENCES",
  },
  {
    number: "2",
    ethosExpression: "You Want Us To Look Beyond A Deadlines",
    ethosHeading: "WE AIM TO START A GROWTH JOURNEY",
  },
   
  {
    number: "3",
    ethosExpression: " You Core About More Than Just Code",
    ethosHeading: "WE CREATE VALUE",
  },
  {
    number: "4",
    ethosExpression: "We Align Our Success With Yours",
    ethosHeading: "WE STAND BY YOU WHILE YOU WHILE YOU BASK IN YOUR SUCCESS",
  },
];
const AboutEthos = () => {
  return (
    <>
      <div className="main-container11">
        <div className="right-main-container11">
          <div className="ethos-picture">
            <img
              style={{ width: "230px", height: "330px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="image1-box"
            />
          </div>
        </div>
        <div className="left-main-container11">
          <div>
            <h2>Our Ethos Are Our Foundation</h2>
          </div>

          {EthosArray.map((e, index) => {
            console.log(e, index);
            return (
              <>
                <div style={{ display: "flex", margin: "9px" }} key={index+100}>
                  <span   className="ethos-border-box">{e.number}</span>
                  <div  key={index+5} style={{ marginLeft: "16px", marginTop: "10px" }}>
                    <span>{e.ethosExpression}</span>
                    <br />
                    <span  key={index+8} style={{ marginTop: "", fontWeight: "600" }}>
                      {e.ethosHeading}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutEthos;
