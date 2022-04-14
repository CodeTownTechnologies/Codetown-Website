import React from "react";
import Navbar from "../navbar/Navbar";
import About from "../About/About";
import "../Home/home.scss";
import Services from "../Services/Services";
import "swiper/css/bundle";
import Footer from "../footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../contact/Contact";
import Process from "../Process/Process";
import Technology from "../Technology/Technology";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Technology />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
