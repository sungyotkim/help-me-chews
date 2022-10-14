import { useEffect, useState } from "react";
import "./ReviewStars.css";

const ReviewStars = (props) => {
  const defaultGray = "rgba(187,186,192, 0.5)";
  const [pathFill1a, setPathFill1a] = useState(defaultGray);
  const [pathFill1b, setPathFill1b] = useState(defaultGray);
  const [pathFill2a, setPathFill2a] = useState(defaultGray);
  const [pathFill2b, setPathFill2b] = useState(defaultGray);
  const [pathFill3a, setPathFill3a] = useState(defaultGray);
  const [pathFill3b, setPathFill3b] = useState(defaultGray);
  const [pathFill4a, setPathFill4a] = useState(defaultGray);
  const [pathFill4b, setPathFill4b] = useState(defaultGray);
  const [pathFill5a, setPathFill5a] = useState(defaultGray);
  const [pathFill5b, setPathFill5b] = useState(defaultGray);

  let {
    starCount,
    starContainer,
    firstStar,
    secondStar,
    thirdStar,
    fourthStar,
    fifthStar,
    size,
    blueStars,
  } = props;

  if (!starContainer) {
    starContainer = "default-review-star-container";
  }
  if (!firstStar) {
    firstStar = "default-first-star";
  }
  if (!secondStar) {
    secondStar = "default-second-star";
  }
  if (!thirdStar) {
    thirdStar = "default-third-star";
  }
  if (!fourthStar) {
    fourthStar = "default-fourth-star";
  }
  if (!fifthStar) {
    fifthStar = "default-fifth-star";
  }

  let oneStarColor = "rgba(255, 204, 75, 1)";
  let twoStarColor = "rgba(255,173,72,1)";
  let threeStarColor = "rgba(255,135,66,1)";
  let fourStarColor = "rgba(255,100,61,1)";
  let fiveStarColor = "rgba(251,67,60,1)";

  if (blueStars) {
    oneStarColor = "#69C6AF";
    twoStarColor = "#4EADAF";
    threeStarColor = "#377A98";
    fourStarColor = "#244A80";
    fiveStarColor = "#152069";
  }

  useEffect(() => {
    switch (true) {
      case starCount < 1.3:
        setPathFill1a(oneStarColor);
        setPathFill1b(oneStarColor);
        setPathFill2a(defaultGray);
        setPathFill2b(defaultGray);
        setPathFill3a(defaultGray);
        setPathFill3b(defaultGray);
        setPathFill4a(defaultGray);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 1.8:
        setPathFill1a(oneStarColor);
        setPathFill1b(oneStarColor);
        setPathFill2a(oneStarColor);
        setPathFill2b(defaultGray);
        setPathFill3a(defaultGray);
        setPathFill3b(defaultGray);
        setPathFill4a(defaultGray);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 2.3:
        setPathFill1a(twoStarColor);
        setPathFill1b(twoStarColor);
        setPathFill2a(twoStarColor);
        setPathFill2b(twoStarColor);
        setPathFill3a(defaultGray);
        setPathFill3b(defaultGray);
        setPathFill4a(defaultGray);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 2.8:
        setPathFill1a(twoStarColor);
        setPathFill1b(twoStarColor);
        setPathFill2a(twoStarColor);
        setPathFill2b(twoStarColor);
        setPathFill3a(twoStarColor);
        setPathFill3b(defaultGray);
        setPathFill4a(defaultGray);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 3.3:
        setPathFill1a(threeStarColor);
        setPathFill1b(threeStarColor);
        setPathFill2a(threeStarColor);
        setPathFill2b(threeStarColor);
        setPathFill3a(threeStarColor);
        setPathFill3b(threeStarColor);
        setPathFill4a(defaultGray);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 3.8:
        setPathFill1a(threeStarColor);
        setPathFill1b(threeStarColor);
        setPathFill2a(threeStarColor);
        setPathFill2b(threeStarColor);
        setPathFill3a(threeStarColor);
        setPathFill3b(threeStarColor);
        setPathFill4a(threeStarColor);
        setPathFill4b(defaultGray);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 4.3:
        setPathFill1a(fourStarColor);
        setPathFill1b(fourStarColor);
        setPathFill2a(fourStarColor);
        setPathFill2b(fourStarColor);
        setPathFill3a(fourStarColor);
        setPathFill3b(fourStarColor);
        setPathFill4a(fourStarColor);
        setPathFill4b(fourStarColor);
        setPathFill5a(defaultGray);
        setPathFill5b(defaultGray);
        break;
      case starCount < 4.8:
        setPathFill1a(fourStarColor);
        setPathFill1b(fourStarColor);
        setPathFill2a(fourStarColor);
        setPathFill2b(fourStarColor);
        setPathFill3a(fourStarColor);
        setPathFill3b(fourStarColor);
        setPathFill4a(fourStarColor);
        setPathFill4b(fourStarColor);
        setPathFill5a(fourStarColor);
        setPathFill5b(defaultGray);
        break;
      case starCount <= 5:
        setPathFill1a(fiveStarColor);
        setPathFill1b(fiveStarColor);
        setPathFill2a(fiveStarColor);
        setPathFill2b(fiveStarColor);
        setPathFill3a(fiveStarColor);
        setPathFill3b(fiveStarColor);
        setPathFill4a(fiveStarColor);
        setPathFill4b(fiveStarColor);
        setPathFill5a(fiveStarColor);
        setPathFill5b(fiveStarColor);
        break;
      default:
        break;
    }
  }, [starCount]);

  let d1Path =
    "M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z";
  let d2Path =
    "M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z";
  let dStarPath =
    "M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z";

  if (size === 32) {
    d1Path =
      "M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z";
    d2Path =
      "M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z";
    dStarPath =
      "M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z";
  }

  return (
    <div className={starContainer}>
      <div className={firstStar}>
        <svg width={size} height={size}>
          <path fill={pathFill1a} d={d1Path}></path>

          <path fill={pathFill1b} d={d2Path}></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d={dStarPath}
          ></path>
        </svg>
      </div>

      <div className={secondStar}>
        <svg width={size} height={size}>
          <path fill={pathFill2a} d={d1Path}></path>

          <path fill={pathFill2b} d={d2Path}></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d={dStarPath}
          ></path>
        </svg>
      </div>

      <div className={thirdStar}>
        <svg width={size} height={size}>
          <path fill={pathFill3a} d={d1Path}></path>

          <path fill={pathFill3b} d={d2Path}></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d={dStarPath}
          ></path>
        </svg>
      </div>

      <div className={fourthStar}>
        <svg width={size} height={size}>
          <path fill={pathFill4a} d={d1Path}></path>

          <path fill={pathFill4b} d={d2Path}></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d={dStarPath}
          ></path>
        </svg>
      </div>

      <div className={fifthStar}>
        <svg width={size} height={size}>
          <path fill={pathFill5a} d={d1Path}></path>

          <path fill={pathFill5b} d={d2Path}></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d={dStarPath}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ReviewStars;
