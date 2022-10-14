import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2d2e2f",
    fontSize: 12,
    boxShadow: "rgb(0 0 0 / 15%) 0 0 18px",
    borderRadius: "4px",
    padding: "12px 16px",
    position: "relative",
    top: -8,
    fontFamily: "'Poppins', Arial, Helvetica, sans-serif;",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#2d2e2f",
  },
}));

const NextReviewStars = () => {
  const [pathFill1, setPathFill1] = useState("rgba(187,186,192, 0.5)");
  const [pathFill2, setPathFill2] = useState("rgba(187,186,192, 0.5)");
  const [pathFill3, setPathFill3] = useState("rgba(187,186,192, 0.5)");
  const [pathFill4, setPathFill4] = useState("rgba(187,186,192, 0.5)");
  const [pathFill5, setPathFill5] = useState("rgba(187,186,192, 0.5)");

  const handleFirstStarMouseOver = () => {
    setPathFill1("rgba(255, 204, 75, 1)");
  };

  const handleSecondStarMouseOver = () => {
    setPathFill1("rgba(255,173,72,1)");
    setPathFill2("rgba(255,173,72,1)");
  };

  const handleThirdStarMouseOver = () => {
    setPathFill1("rgba(255,135,66,1)");
    setPathFill2("rgba(255,135,66,1)");
    setPathFill3("rgba(255,135,66,1)");
  };

  const handleFourthStarMouseOver = () => {
    setPathFill1("rgba(255,100,61,1)");
    setPathFill2("rgba(255,100,61,1)");
    setPathFill3("rgba(255,100,61,1)");
    setPathFill4("rgba(255,100,61,1)");
  };

  const handleFifthStarMouseOver = () => {
    setPathFill1("rgba(251,67,60,1)");
    setPathFill2("rgba(251,67,60,1)");
    setPathFill3("rgba(251,67,60,1)");
    setPathFill4("rgba(251,67,60,1)");
    setPathFill5("rgba(251,67,60,1)");
  };

  const handleMouseOut = () => {
    setPathFill1("rgba(187,186,192, 0.5)");
    setPathFill2("rgba(187,186,192, 0.5)");
    setPathFill3("rgba(187,186,192, 0.5)");
    setPathFill4("rgba(187,186,192, 0.5)");
    setPathFill5("rgba(187,186,192, 0.5)");
  };

  return (
    <div className="next-review-star-container">
      <CustomToolTip title="Not good" arrow placement="top">
        <div
          className="next-review-first-star"
          onMouseOver={handleFirstStarMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg width={32} height={32}>
            <path
              fill={pathFill1}
              d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
            ></path>

            <path
              fill={pathFill1}
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
      </CustomToolTip>

      <CustomToolTip title="Could've been better" arrow placement="top">
        <div
          className="next-review-second-star"
          onMouseOver={handleSecondStarMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg width={32} height={32}>
            <path
              fill={pathFill2}
              d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
            ></path>

            <path
              fill={pathFill2}
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
      </CustomToolTip>

      <CustomToolTip title="OK" arrow placement="top">
        <div
          className="next-review-third-star"
          onMouseOver={handleThirdStarMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg width={32} height={32}>
            <path
              fill={pathFill3}
              d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
            ></path>

            <path
              fill={pathFill3}
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
      </CustomToolTip>

      <CustomToolTip title="Good" arrow placement="top">
        <div
          className="next-review-fourth-star"
          onMouseOver={handleFourthStarMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg width={32} height={32}>
            <path
              fill={pathFill4}
              d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
            ></path>

            <path
              fill={pathFill4}
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
      </CustomToolTip>

      <CustomToolTip title="Great" arrow placement="top">
        <div
          className="next-review-fifth-star"
          onMouseOver={handleFifthStarMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg width={32} height={32}>
            <path
              fill={pathFill5}
              d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
            ></path>

            <path
              fill={pathFill5}
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
      </CustomToolTip>
    </div>
  );
};

export default NextReviewStars;
