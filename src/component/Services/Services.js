import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../Services/services.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import Image from "../Services/1.png";
import Image1 from "../Services/2.png";
import Image3 from "../Services/3.png";
import Image4 from "../Services/4.png";
import Image5 from "../Services/5.png";
import Image6 from "../Services/6.png";
import Image2 from "../Services/7.png";

const Services = () => {
  return (
    <>
      <Container style={{ marginTop: "160px" }}>
        <Row>
          <Col>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{  textAlign:"center"}}>OUR OFFERINGS</span>
              <hr width="110px" color="orange" height=".9px"/>
              <h2>Our Core Services</h2>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
      <div className="" style={{ marginTop: "32px", }}>
        {" "}
        <Swiper

          
          slidesPerView={4}
          spaceBetween={30}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false
          // }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slider-common-1 items-1">
            <div className="slider-common-1">
              <img className="slide-image" src={Image} alt="image" srcset="" />

              <span style={{ fontSize: "12px" }}>
                <h3 style={{ fontSize: "16px" }}>Ux/Ui Designer</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                nemo beatae veritatis odio quam doloribus. Esse veniam ex
                aspernatur eos tempore optio!
              </span>
              <div>
                <a href="#">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-common-1"> <div className="slider-common-1 items-2">
            <img className="slide-image" src={Image1} alt="image" srcset="" />
            <span style={{ fontSize: "12px" }}>
              <h3 style={{ fontSize: "16px" }}>Mobile Apps</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nemo beatae veritatis odio quam doloribus. Esse veniam ex
              aspernatur eos tempore optio!
            </span>
            <div>
              <a href="#">Read More</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className="slider-common-1"> <div className="slider-common-1 items-3">
            <img className="slide-image" src={Image2} alt="image" srcset="" />
            <span style={{ fontSize: "12px" }}>
              <h3 style={{ fontSize: "16px" }}>Web-Development</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nemo beatae veritatis odio quam doloribus. Esse veniam ex
              aspernatur eos tempore optio!
            </span>
            <div>
              <a href="#">Read More</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className="slider-common-1"> <div className="slider-common-1 items-4">
            <img className="slide-image" src={Image3} alt="image" srcset="" />
            <span style={{ fontSize: "12px" }}>
              <h3 style={{ fontSize: "16px" }}>IoT</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nemo beatae veritatis odio quam doloribus. Esse veniam ex
              aspernatur eos tempore optio!
            </span>
            <div>
              <a href="#">Read More</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className="slider-common-1"> <div className="slider-common-1 items-5">
            <img className="slide-image" src={Image4} alt="image" srcset="" />
            <span style={{ fontSize: "12px" }}>
              <h3 style={{ fontSize: "16px" }}>Graphic Designer</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nemo beatae veritatis odio quam doloribus. Esse veniam ex
              aspernatur eos tempore optio!
            </span>
            <div>
              <a href="#">Read More</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className="slider-common-1"> <div className="slider-common-1 items-6">
            <img className="slide-image" src={Image5} alt="image" srcset="" />
            <span style={{ fontSize: "12px" }}>
              <h3 style={{ fontSize: "16px" }}>AI/ML</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nemo beatae veritatis odio quam doloribus. Esse veniam ex
              aspernatur eos tempore optio!
            </span>
            <div>
              <a href="#">Read More</a>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Services;
