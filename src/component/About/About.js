import React from "react";
import "../About/about.css";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container className="main-container111"  >
        <Row className="justify-content-md-center">
          <div className="about-div"> 
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <span className="about-heading">WE ARE CODE TOWN TECHNOLOGY            
              </span>
              <hr width="243px" color="orange" height=".6px"/>         
              <h1 style={{textAlign:"center"}}>Web ,Mobile & Software Development Company</h1>
              <p style={{textAlign:"center"}}>
                Lorem ipsum dolor sit amet  adipisicing elit. Cum
                ipsa accusantium, excepturi vitae laborum at, nostrum debitis
                commodi, est doloribus quos recusandae harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto odit excepturi itaque debitis quod delectus, quos, totam animi aliquid tenetur laboriosam? Molestiae assumenda nisi doloremque delectus est ab maiores dolore dignissimos aperiam neque exercitationem omnis harum dolores corporis voluptatibus modi atque a nesciunt voluptas, eligendi libero itaque. Optio earum  voluptatem labore  maiores fugiat ullam eveniet.
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
