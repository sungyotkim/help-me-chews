// import HeroSlider, { Slide } from "hero-slider";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeroSlide from "./HeroSlide";
// import FirstSlide from "../../assets/sample-background.jpg";
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";

const HeroContainer = () => {
  let backgroundImages = [bogliasco, giauPass, countyClare];
  const [displayImage, setDisplayImage] = useState(backgroundImages[0]);
  const [slide, setSlide] = useState(0);
  let i = 0;

  useEffect(() => {
    let interval = setInterval(() => {
      if (i === 2) {
        i = 0;
      } else {
        i += 1;
      }

      setDisplayImage(backgroundImages[i]);
      setSlide(i);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${displayImage})`,
          // opacity: `${opacity}`,
        }}
      >
        <Header
          fromSearch={{ fromSearch: false }}
          fromBusiness={{ fromBusiness: false }}
        />
        <HeroSlide slide={slide} />
      </div>
    </>
  );
};

export default HeroContainer;
