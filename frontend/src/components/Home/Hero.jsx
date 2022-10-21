import React, { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeroSlide from "./HeroSlide";
import firstSlideBG from "../../assets/hero-background-image-1.jpg";
import secondSlideBG from "../../assets/hero-background-image-2.jpg";
import thirdSlideBG from "../../assets/hero-background-image-3.jpg";
import fourthSlideBG from "../../assets/pet-app-background.PNG";

const HeroContainer = () => {
  const backgroundImages = [
    firstSlideBG,
    secondSlideBG,
    thirdSlideBG,
    fourthSlideBG,
  ];
  const backgroundPos = ["center", "center", "center", ""];
  const [displayImage, setDisplayImage] = useState(backgroundImages[0]);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [heroBarOne, setHeroBarOne] = useState(0);
  const [heroBarTwo, setHeroBarTwo] = useState(0);
  const [heroBarThree, setHeroBarThree] = useState(0);
  const [heroBarFour, setHeroBarFour] = useState(0);
  const [clicked, setClicked] = useState(false);
  let tracker = 0;
  let i = 0;
  const [newIndex, setNewIndex] = useState();
  if (newIndex) {
    i = newIndex;
  }

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

    if (clicked) {
      setClicked(false);
      clearInterval(interval);
      setInterval(interval, 6000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [clicked]);

  useEffect(() => {
    setHeroBarOne(0);
    setHeroBarTwo(0);
    setHeroBarThree(0);
    setHeroBarFour(0);
    tracker = 0;
    let firstSlideInterval = setInterval(() => {
      setHeroBarOne((old) => old + 1);
      tracker++;
      if (tracker === 100) {
        clearInterval(firstSlideInterval);
        tracker = 0;
      }
    }, 57);
    let secondSlideInterval = setInterval(() => {
      setHeroBarOne(100);
      setHeroBarTwo((old) => old + 1);
      tracker++;
      if (tracker === 100) {
        clearInterval(secondSlideInterval);
        tracker = 0;
      }
    }, 57);
    let thirdSlideInterval = setInterval(() => {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      setHeroBarThree((old) => old + 1);
      tracker++;
      if (tracker === 100) {
        clearInterval(thirdSlideInterval);
        tracker = 0;
      }
    }, 57);
    let fourthSlideInterval = setInterval(() => {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      setHeroBarThree(100);
      setHeroBarFour((old) => old + 1);
      tracker++;
      if (tracker === 100) {
        clearInterval(fourthSlideInterval);
        tracker = 0;
      }
    }, 57);

    if (displaySlide === 0) {
      clearInterval(secondSlideInterval);
      clearInterval(thirdSlideInterval);
      clearInterval(fourthSlideInterval);
    } else if (displaySlide === 1) {
      setHeroBarOne(100);
      clearInterval(firstSlideInterval);
      clearInterval(thirdSlideInterval);
      clearInterval(fourthSlideInterval);
    } else if (displaySlide === 2) {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      clearInterval(firstSlideInterval);
      clearInterval(secondSlideInterval);
      clearInterval(fourthSlideInterval);
    } else if (displaySlide === 3) {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      setHeroBarThree(100);
      clearInterval(firstSlideInterval);
      clearInterval(secondSlideInterval);
      clearInterval(thirdSlideInterval);
    }

    return () => {
      clearInterval(firstSlideInterval);
      clearInterval(secondSlideInterval);
      clearInterval(thirdSlideInterval);
      clearInterval(fourthSlideInterval);
    };
  }, [displaySlide]);

  const handleClick = (e, index) => {
    e.preventDefault();
    setNewIndex(index);
    setDisplayImage(backgroundImages[index]);
    setDisplaySlide(index);
    setClicked(true);
    tracker = 100;
    setHeroBarOne(0);
    setHeroBarTwo(0);
    setHeroBarThree(0);
    setHeroBarFour(0);
  };

  return (
    <>
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${displayImage})`,
          backgroundPosition: `${backgroundPos[displaySlide]}`,
        }}
        key={displaySlide}
      >
        <Header
          fromSearch={{ fromSearch: false }}
          fromBusiness={{ fromBusiness: false }}
        />
        <div className="hero-slide">
          <div className="hero-bars">
            <div
              className="hero-bar-clickable"
              onClick={(e) => handleClick(e, 0)}
            >
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarOne}%` }}
                ></div>
              </div>
            </div>
            <div
              className="hero-bar-clickable"
              onClick={(e) => handleClick(e, 1)}
            >
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarTwo}%` }}
                ></div>
              </div>
            </div>
            <div
              className="hero-bar-clickable"
              onClick={(e) => handleClick(e, 2)}
            >
              <div className="hero-bar">
                <div
                  className="hero-bar-fill"
                  style={{ height: `${heroBarThree}%` }}
                ></div>
              </div>
            </div>
            <div
              className="hero-bar-clickable"
              onClick={(e) => handleClick(e, 3)}
            >
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
