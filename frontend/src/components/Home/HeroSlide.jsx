import { useEffect, useState } from "react";

const HeroSlide = ({ slide }) => {
  const [heroBarOne, setHeroBarOne] = useState(0);
  const [heroBarTwo, setHeroBarTwo] = useState(0);
  const [heroBarThree, setHeroBarThree] = useState(0);
  const [heroBarFour, setHeroBarFour] = useState(0);
  let tracker = 0;

  useEffect(() => {
    setHeroBarOne(0);
    setHeroBarTwo(0);
    setHeroBarThree(0);
    setHeroBarFour(0);
    if (slide === 0) {
      let firstSlideInterval = setInterval(() => {
        setHeroBarOne((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(firstSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (slide === 1) {
      setHeroBarOne(100);
      let firstSlideInterval = setInterval(() => {
        setHeroBarTwo((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(firstSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (slide === 2) {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      let firstSlideInterval = setInterval(() => {
        setHeroBarThree((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(firstSlideInterval);
          tracker = 0;
        }
      }, 57);
    } else if (slide === 3) {
      setHeroBarOne(100);
      setHeroBarTwo(100);
      setHeroBarThree(100);
      let firstSlideInterval = setInterval(() => {
        setHeroBarFour((old) => old + 1);
        tracker++;
        if (tracker === 100) {
          clearInterval(firstSlideInterval);
          tracker = 0;
        }
      }, 57);
    }
  }, [slide]);

  return (
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
      <div className="hero-slide-content">
        <div>This is a slide</div>
        <div className="hero-slide-btn">Btn</div>
      </div>
    </div>
  );
};

export default HeroSlide;
