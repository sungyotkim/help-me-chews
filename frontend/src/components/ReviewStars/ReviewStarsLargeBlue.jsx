import { useEffect, useState } from "react";
import "./ReviewStars.css";

const ReviewStarsLargeBlue = (props) => {
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
        setPathFill1a("#69C6AF");
        setPathFill1b("#69C6AF");
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
        setPathFill1a("#69C6AF");
        setPathFill1b("#69C6AF");
        setPathFill2a("#69C6AF");
        setPathFill2b("rgba(187,186,192, 0.5)");
        setPathFill3a("rgba(187,186,192, 0.5)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 2.3:
        setPathFill1a("#4EADAF");
        setPathFill1b("#4EADAF");
        setPathFill2a("#4EADAF");
        setPathFill2b("#4EADAF");
        setPathFill3a("rgba(187,186,192, 0.5)");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 2.8:
        setPathFill1a("#4EADAF");
        setPathFill1b("#4EADAF");
        setPathFill2a("#4EADAF");
        setPathFill2b("#4EADAF");
        setPathFill3a("#4EADAF");
        setPathFill3b("rgba(187,186,192, 0.5)");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 3.3:
        setPathFill1a("#377A98");
        setPathFill1b("#377A98");
        setPathFill2a("#377A98");
        setPathFill2b("#377A98");
        setPathFill3a("#377A98");
        setPathFill3b("#377A98");
        setPathFill4a("rgba(187,186,192, 0.5)");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 3.8:
        setPathFill1a("#377A98");
        setPathFill1b("#377A98");
        setPathFill2a("#377A98");
        setPathFill2b("#377A98");
        setPathFill3a("#377A98");
        setPathFill3b("#377A98");
        setPathFill4a("#377A98");
        setPathFill4b("rgba(187,186,192, 0.5)");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 4.3:
        setPathFill1a("#244A80");
        setPathFill1b("#244A80");
        setPathFill2a("#244A80");
        setPathFill2b("#244A80");
        setPathFill3a("#244A80");
        setPathFill3b("#244A80");
        setPathFill4a("#244A80");
        setPathFill4b("#244A80");
        setPathFill5a("rgba(187,186,192, 0.5)");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount < 4.8:
        setPathFill1a("#244A80");
        setPathFill1b("#244A80");
        setPathFill2a("#244A80");
        setPathFill2b("#244A80");
        setPathFill3a("#244A80");
        setPathFill3b("#244A80");
        setPathFill4a("#244A80");
        setPathFill4b("#244A80");
        setPathFill5a("#244A80");
        setPathFill5b("rgba(187,186,192, 0.5)");
        break;
      case starCount <= 5:
        setPathFill1a("#152069");
        setPathFill1b("#152069");
        setPathFill2a("#152069");
        setPathFill2b("#152069");
        setPathFill3a("#152069");
        setPathFill3b("#152069");
        setPathFill4a("#152069");
        setPathFill4b("#152069");
        setPathFill5a("#152069");
        setPathFill5b("#152069");
        break;
      default:
        break;
    }
  }, [starCount]);

  return (
    <div className={starContainer}>
      <div className={firstStar}>
        <svg width={32} height={32}>
          <path
            fill={pathFill1a}
            d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
          ></path>

          <path
            fill={pathFill1b}
            d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
          ></path>
        </svg>
      </div>

      <div className={secondStar}>
        <svg width={32} height={32}>
          <path
            fill={pathFill2a}
            d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
          ></path>

          <path
            fill={pathFill2b}
            d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
          ></path>
        </svg>
      </div>

      <div className={thirdStar}>
        <svg width={32} height={32}>
          <path
            fill={pathFill3a}
            d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
          ></path>

          <path
            fill={pathFill3b}
            d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
          ></path>
        </svg>
      </div>

      <div className={fourthStar}>
        <svg width={32} height={32}>
          <path
            fill={pathFill4a}
            d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
          ></path>

          <path
            fill={pathFill4b}
            d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
          ></path>
        </svg>
      </div>

      <div className={fifthStar}>
        <svg width={32} height={32}>
          <path
            fill={pathFill5a}
            d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
          ></path>

          <path
            fill={pathFill5b}
            d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
          ></path>

          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ReviewStarsLargeBlue;
