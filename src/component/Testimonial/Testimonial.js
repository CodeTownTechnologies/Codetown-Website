import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../Testimonial/Testimonial.css";
import { FreeMode, Pagination ,Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "../Services/1.png"

const Testimonial = () => {
  return (
    <div style={{ marginTop: "70px", marginBottom: "30px" }}>
      <Container style={{ marginTop: "160px" }}>
        <Row>
          <Col>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{  textAlign:"center"}}>Testimonial</span>
              <hr width="90px" color="orange" height=".6px"/>
              <h2>What Our Clients Say</h2>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ maxWidth: "80%", width: "80%", marginLeft: "140px", marginTop: "70px" }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="testimonial-slider ">
          <div className="testimonial-slider">
            <div className="testimonial-slider-content">
         
              <p> <span style={{fontSize:"30px", color:"orange", fontWeight:"bolder"}}>&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat debitis omnis officiis atque delectus hic velit assumenda reprehenderit. Asperiores. 
              </p>
             
            </div>
            <div className="testimonial-client">
              <div>
                <img className="image"
                  src=" https://images.unsplash.com/photo-1630883665215-dc90914c334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
              </div>
              <div style={{ paddingLeft: "17px" }}>
                <span className="client-name">Radika Sharma </span>
                <br />
                <span className="client-occuption" style={{ marginTop: "-130px" }}>Graphic Designer</span>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slider">
          <div className="testimonial-slider">
            <div className="testimonial-slider-content">
              <p> <span style={{fontSize:"30px", color:"orange", fontWeight:"bolder"}}>&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat debitis omnis officiis atque delectus hic velit assumenda reprehenderit. Asperiores.</p>
            </div>
            <div className="testimonial-client">
              <div>
                <img className="image"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
              </div>
              <div style={{ paddingLeft: "17px" }}>
                <span className="client-name">Aksit Sankhla</span>
                <br />
                <span className="client-occuption" style={{ marginTop: "-130px" }}>Web-developer</span>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide  className="testimonial-slider">
          <div className="testimonial-slider">
            <div className="testimonial-slider-content">
              <p>  <span style={{fontSize:"30px", color:"orange", fontWeight:"bolder"}}>&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat debitis omnis officiis atque delectus hic velit assumenda reprehenderit. Asperiores.</p>
            </div>
            <div className="testimonial-client">
              <div>
                <img className="image"
                  src=" https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
              </div>
              <div style={{ paddingLeft: "17px" }}>
                <span className="client-name">Juhi Shirmali</span>
                <br />
                <span className="client-occuption" style={{ marginTop: "-130px" }}>Ux/UI Developer</span>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slider ">
          <div className="testimonial-slider">
            <div className="testimonial-slider-content">
              <p>  <span style={{fontSize:"30px", color:"orange", fontWeight:"bolder"}}>&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat debitis omnis officiis atque delectus hic velit assumenda reprehenderit. Asperiores.</p>
            </div>
            <div className="testimonial-client">
              <div>
                <img className="image"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
              </div>
              <div style={{ paddingLeft: "17px" }}>
                <span className="client-name">Pragya Shrimali</span>
                <br />
                <span className="client-occuption" style={{ marginTop: "-130px" }}>Web-developer</span>
              </div>
            </div>

          </div>
        </SwiperSlide>
         
         
         
        <SwiperSlide className="testimonial-slider ">
          <div className="testimonial-slider">
            <div className="testimonial-slider-content">
              <p> <span style={{fontSize:"30px", color:"orange", fontWeight:"bolder"}}>&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat debitis omnis officiis atque delectus hic velit assumenda reprehenderit. Asperiores.</p>
            </div>
            <div className="testimonial-client">
              <div>
                <img className="image"
                  src=" https://images.unsplash.com/photo-1630945386735-372fbe731e3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
              </div>
              <div style={{ paddingLeft: "17px" }}>
                <span className="client-name">Devika Sharma</span>
                <br />
                <span className="client-occuption" style={{ marginTop: "-130px" }}>Product Manager</span>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div >
  );
};

export default Testimonial;
