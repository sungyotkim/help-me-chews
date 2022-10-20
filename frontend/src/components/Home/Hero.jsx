// import HeroSlider, { Slide } from "hero-slider";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeroSlide from "./HeroSlide";
// import FirstSlide from "../../assets/sample-background.jpg";
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";

const HeroContainer = () => {
  let backgroundImages = [bogliasco, giauPass, countyClare, craterRock];
  const [displayImage, setDisplayImage] = useState(backgroundImages[0]);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [heroBarOne, setHeroBarOne] = useState(0);
  const [heroBarTwo, setHeroBarTwo] = useState(0);
  const [heroBarThree, setHeroBarThree] = useState(0);
  const [heroBarFour, setHeroBarFour] = useState(0);
  // const [opacity, setOpacity] = useState(0.7);
  let tracker = 0;
  let i = 0;
  // let heroBarOne = 10;

  useEffect(() => {
    let interval = setInterval(() => {
      if (i === 3) {
        i = 0;
      } else {
        i += 1;
      }

      setDisplayImage(backgroundImages[i]);
      setDisplaySlide(i);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (displaySlide === 0) {
      let firstSlideInterval = setInterval(() => {
        setHeroBarOne((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(firstSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (displaySlide === 1) {
      let secondSlideInterval = setInterval(() => {
        setHeroBarTwo((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(secondSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (displaySlide === 2) {
      let thirdSlideInterval = setInterval(() => {
        setHeroBarThree((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(thirdSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (displaySlide === 3) {
      let fourthSlideInterval = setInterval(() => {
        setHeroBarFour((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(fourthSlideInterval);
          tracker = 0;
        }
      }, 57);
    }
  }, [displaySlide]);

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
        <div className="hero-slide-1">
          <div className="hero-bars">
            <div className="hero-bar-clickable">
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarOne}%` }}
                ></div>
              </div>
            </div>
            <div className="hero-bar-clickable">
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarTwo}%` }}
                ></div>
              </div>
            </div>
            <div className="hero-bar-clickable">
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarThree}%` }}
                ></div>
              </div>
            </div>
            <div className="hero-bar-clickable">
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarFour}%` }}
                ></div>
              </div>
            </div>
          </div>
          <HeroSlide displaySlide={displaySlide} />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
