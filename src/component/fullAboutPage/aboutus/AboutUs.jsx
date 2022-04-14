import React from "react";
import Navbar from "../../navbar/Navbar";
import "../aboutus/AboutUs.scss";
import ExcellenceAbout from "../excellenceAbout/ExcellenceAbout";
import Footer from "../../footer/Footer";
import AboutGallery from "../AboutGallery/AboutGallery";
import AboutContact from "../AboutContact/AboutContact";
import AboutEthos from "../AboutEthos/AboutEthos";
import AboutHeader from "../AboutHeader/AboutHeader";

const AboutUs = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutHeader/>
        <ExcellenceAbout />
        <AboutEthos/>
        <AboutGallery/>
        <AboutContact/>
        <Footer/>
      </div>
    </>
  );
};

export default AboutUs;
