import { useEffect, useState } from "react";
import "./ReviewStars.css";

const ReviewStars = (props) => {
  const [pathFill1a, setPathFill1a] = useState("rgba(187,186,192, 0.5)");
  const [pathFill1b, setPathFill1b] = useState("rgba(187,186,192, 0.5)");
  const [pathFill2a, setPathFill2a] = useState("rgba(187,186,192, 0.5)");
  const [pathFill2b, setPathFill2b] = useState("rgba(187,186,192, 0.5)");
  const [pathFill3a, setPathFill3a] = useState("rgba(187,186,192, 0.5)");
  const [pathFill3b, setPathFill3b] = useState("rgba(187,186,192, 0.5)");
  const [pathFill4a, setPathFill4a] = useState("rgba(187,186,192, 0.5)");
  const [pathFill4b, setPathFill4b] = useState("rgba(187,186,192, 0.5)");
  const [pathFill5a, setPathFill5a] = useState("rgba(187,186,192, 0.5)");
  const [pathFill5b, setPathFill5b] = useState("rgba(187,186,192, 0.5)");

  let {
    starCount,
    starContainer,
    firstStar,
    secondStar,
    thirdStar,
    fourthStar,
    fifthStar,
    size,
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

  useEffect(() => {
    switch (true) {
      case starCount < 1.3:
        setPathFill1a("rgba(255, 204, 75, 1)");
        setPathFill1b("rgba(255, 204, 75, 1)");
        setPathFill2a("rgba(187,186,192, 0.5)");
        setPathFill2b("rgba(187,186,192, 0.5)");
        setPathFill3a("rgba(187,186,192, 0.5)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 1.8:
        setPathFill1a("rgba(255, 204, 75, 1)");
        setPathFill1b("rgba(255, 204, 75, 1)");
        setPathFill2a("rgba(255, 204, 75, 1)");
        setPathFill2b("rgba(187,186,192, 0.5)");
        setPathFill3a("rgba(187,186,192, 0.5)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 2.3:
        setPathFill1a("rgba(255,173,72,1)");
        setPathFill1b("rgba(255,173,72,1)");
        setPathFill2a("rgba(255,173,72,1)");
        setPathFill2b("rgba(255,173,72,1)");
        setPathFill3a("rgba(187,186,192, 0.5)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 2.8:
        setPathFill1a("rgba(255,173,72,1)");
        setPathFill1b("rgba(255,173,72,1)");
        setPathFill2a("rgba(255,173,72,1)");
        setPathFill2b("rgba(255,173,72,1)");
        setPathFill3a("rgba(255,173,72,1)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 3.3:
        setPathFill1a("rgba(255,135,66,1)");
        setPathFill1b("rgba(255,135,66,1)");
        setPathFill2a("rgba(255,135,66,1)");
        setPathFill2b("rgba(255,135,66,1)");
        setPathFill3a("rgba(255,135,66,1)");
        setPathFill3b("rgba(255,135,66,1)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 3.8:
        setPathFill1a("rgba(255,135,66,1)");
        setPathFill1b("rgba(255,135,66,1)");
        setPathFill2a("rgba(255,135,66,1)");
        setPathFill2b("rgba(255,135,66,1)");
        setPathFill3a("rgba(255,135,66,1)");
        setPathFill3b("rgba(255,135,66,1)");
        setPathFill4a("rgba(255,135,66,1)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 4.3:
        setPathFill1a("rgba(255,100,61,1)");
        setPathFill1b("rgba(255,100,61,1)");
        setPathFill2a("rgba(255,100,61,1)");
        setPathFill2b("rgba(255,100,61,1)");
        setPathFill3a("rgba(255,100,61,1)");
        setPathFill3b("rgba(255,100,61,1)");
        setPathFill4a("rgba(255,100,61,1)");
        setPathFill4b("rgba(255,100,61,1)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 4.8:
        setPathFill1a("rgba(255,100,61,1)");
        setPathFill1b("rgba(255,100,61,1)");
        setPathFill2a("rgba(255,100,61,1)");
        setPathFill2b("rgba(255,100,61,1)");
        setPathFill3a("rgba(255,100,61,1)");
        setPathFill3b("rgba(255,100,61,1)");
        setPathFill4a("rgba(255,100,61,1)");
        setPathFill4b("rgba(255,100,61,1)");
        setPathFill5a("rgba(255,100,61,1)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount <= 5:
        setPathFill1a("rgba(251,67,60,1)");
        setPathFill1b("rgba(251,67,60,1)");
        setPathFill2a("rgba(251,67,60,1)");
        setPathFill2b("rgba(251,67,60,1)");
        setPathFill3a("rgba(251,67,60,1)");
        setPathFill3b("rgba(251,67,60,1)");
        setPathFill4a("rgba(251,67,60,1)");
        setPathFill4b("rgba(251,67,60,1)");
        setPathFill5a("rgba(251,67,60,1)");
        setPathFill5b("rgba(251,67,60,1)");
        break;
      default:
        break;
    }
  }, [starCount]);

  return (
    <div className={starContainer}>
      <div className={firstStar}>
        <svg width={size} height={size}>
          <path
            fill={pathFill1a}
            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"
          ></path>

          <path
            fill={pathFill1b}
            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z"
          ></path>
        </svg>
      </div>

      <div className={secondStar}>
        <svg width={size} height={size}>
          <path
            fill={pathFill2a}
            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"
          ></path>

          <path
            fill={pathFill2b}
            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z"
          ></path>
        </svg>
      </div>

      <div className={thirdStar}>
        <svg width={size} height={size}>
          <path
            fill={pathFill3a}
            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"
          ></path>

          <path
            fill={pathFill3b}
            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z"
          ></path>
        </svg>
      </div>

      <div className={fourthStar}>
        <svg width={size} height={size}>
          <path
            fill={pathFill4a}
            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"
          ></path>

          <path
            fill={pathFill4b}
            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z"
          ></path>
        </svg>
      </div>

      <div className={fifthStar}>
        <svg width={size} height={size}>
          <path
            fill={pathFill5a}
            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"
          ></path>

          <path
            fill={pathFill5b}
            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ReviewStars;
