// import HeroSlider, { Slide } from "hero-slider";
import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
// import FirstSlide from "../../assets/sample-background.jpg";
// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";

const HeroContainer = () => {
  return (
    <>
      {/* <div className="hero-carousel"> */}

      <div className="hero-container">
        <Header
          fromSearch={{ fromSearch: false }}
          fromBusiness={{ fromBusiness: false }}
        />
      </div>

      {/* <div className="hero-container-2"> */}
      {/* <Header /> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default HeroContainer;
