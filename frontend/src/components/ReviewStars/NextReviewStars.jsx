import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const NextReviewStars = ({
  hideToolTip,
  foodValue,
  setFoodValue,
  foodValueSelected,
  setFoodValueSelected,
  serviceValue,
  setServiceValue,
  serviceValueSelected,
  setServiceValueSelected,
  blueStars,
  currentYelpBusiness,
  business,
  currentRating,
  currentReviewRating,
  reviewArr,
}) => {
  const defaultGray = "rgba(187,186,192, 0.5)";
  const [pathFill1, setPathFill1] = useState(defaultGray);
  const [pathFill2, setPathFill2] = useState(defaultGray);
  const [pathFill3, setPathFill3] = useState(defaultGray);
  const [pathFill4, setPathFill4] = useState(defaultGray);
  const [pathFill5, setPathFill5] = useState(defaultGray);

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
    let ratingValue;
    if (currentRating) {
      ratingValue = currentRating;
    } else if (currentReviewRating) {
      ratingValue = currentReviewRating;
    }

    switch (ratingValue) {
      case 1:
        setPathFill1(oneStarColor);
        setPathFill2(defaultGray);
        setPathFill3(defaultGray);
        setPathFill4(defaultGray);
        setPathFill5(defaultGray);
        break;
      case 2:
        setPathFill1(twoStarColor);
        setPathFill2(twoStarColor);
        setPathFill3(defaultGray);
        setPathFill4(defaultGray);
        setPathFill5(defaultGray);
        break;
      case 3:
        setPathFill1(threeStarColor);
        setPathFill2(threeStarColor);
        setPathFill3(threeStarColor);
        setPathFill4(defaultGray);
        setPathFill5(defaultGray);
        break;
      case 4:
        setPathFill1(fourStarColor);
        setPathFill2(fourStarColor);
        setPathFill3(fourStarColor);
        setPathFill4(fourStarColor);
        setPathFill5(defaultGray);
        break;
      case 5:
        setPathFill1(fiveStarColor);
        setPathFill2(fiveStarColor);
        setPathFill3(fiveStarColor);
        setPathFill4(fiveStarColor);
        setPathFill5(fiveStarColor);
        break;
      default:
        break;
    }
  }, [currentRating, currentReviewRating]);

  const handleFirstStarMouseOver = () => {
    setPathFill1(oneStarColor);
    setPathFill2(defaultGray);
    setPathFill3(defaultGray);
    setPathFill4(defaultGray);
    setPathFill5(defaultGray);

    if (hideToolTip) {
      if (foodValue) {
        setFoodValue("Not good");
      }

      if (serviceValue) {
        setServiceValue("Not good");
      }
    }
  };

  const handleSecondStarMouseOver = () => {
    setPathFill1(twoStarColor);
    setPathFill2(twoStarColor);
    setPathFill3(defaultGray);
    setPathFill4(defaultGray);
    setPathFill5(defaultGray);

    if (hideToolTip) {
      if (foodValue) {
        setFoodValue("Could've been better");
      }

      if (serviceValue) {
        setServiceValue("Could've been better");
      }
    }
  };

  const handleThirdStarMouseOver = () => {
    setPathFill1(threeStarColor);
    setPathFill2(threeStarColor);
    setPathFill3(threeStarColor);
    setPathFill4(defaultGray);
    setPathFill5(defaultGray);

    if (hideToolTip) {
      if (foodValue) {
        setFoodValue("OK");
      }

      if (serviceValue) {
        setServiceValue("OK");
      }
    }
  };

  const handleFourthStarMouseOver = () => {
    setPathFill1(fourStarColor);
    setPathFill2(fourStarColor);
    setPathFill3(fourStarColor);
    setPathFill4(fourStarColor);
    setPathFill5(defaultGray);

    if (hideToolTip) {
      if (foodValue) {
        setFoodValue("Good");
      }

      if (serviceValue) {
        setServiceValue("Good");
      }
    }
  };

  const handleFifthStarMouseOver = () => {
    setPathFill1(fiveStarColor);
    setPathFill2(fiveStarColor);
    setPathFill3(fiveStarColor);
    setPathFill4(fiveStarColor);
    setPathFill5(fiveStarColor);

    if (hideToolTip) {
      if (foodValue) {
        setFoodValue("Great");
      } else if (serviceValue) {
        setServiceValue("Great");
      }
    }
  };

  const handleMouseOut = () => {
    if (!hideToolTip) {
      setPathFill1(defaultGray);
      setPathFill2(defaultGray);
      setPathFill3(defaultGray);
      setPathFill4(defaultGray);
      setPathFill5(defaultGray);
    } else {
      if (foodValue) {
        if (!foodValueSelected) {
          setPathFill1(defaultGray);
          setPathFill2(defaultGray);
          setPathFill3(defaultGray);
          setPathFill4(defaultGray);
          setPathFill5(defaultGray);
        } else {
          if (foodValueSelected === "Not good") {
            setPathFill1(oneStarColor);
            setPathFill2(defaultGray);
            setPathFill3(defaultGray);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (foodValueSelected === "Could've been better") {
            setPathFill1(twoStarColor);
            setPathFill2(twoStarColor);
            setPathFill3(defaultGray);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (foodValueSelected === "OK") {
            setPathFill1(threeStarColor);
            setPathFill2(threeStarColor);
            setPathFill3(threeStarColor);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (foodValueSelected === "Good") {
            setPathFill1(fourStarColor);
            setPathFill2(fourStarColor);
            setPathFill3(fourStarColor);
            setPathFill4(fourStarColor);
            setPathFill5(defaultGray);
          } else if (foodValueSelected === "Great") {
            setPathFill1(fiveStarColor);
            setPathFill2(fiveStarColor);
            setPathFill3(fiveStarColor);
            setPathFill4(fiveStarColor);
            setPathFill5(fiveStarColor);
          }
        }
      }

      if (serviceValue) {
        if (!serviceValueSelected) {
          setPathFill1(defaultGray);
          setPathFill2(defaultGray);
          setPathFill3(defaultGray);
          setPathFill4(defaultGray);
          setPathFill5(defaultGray);
        } else {
          if (serviceValueSelected === "Not good") {
            setPathFill1(oneStarColor);
            setPathFill2(defaultGray);
            setPathFill3(defaultGray);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (serviceValueSelected === "Could've been better") {
            setPathFill1(twoStarColor);
            setPathFill2(twoStarColor);
            setPathFill3(defaultGray);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (serviceValueSelected === "OK") {
            setPathFill1(threeStarColor);
            setPathFill2(threeStarColor);
            setPathFill3(threeStarColor);
            setPathFill4(defaultGray);
            setPathFill5(defaultGray);
          } else if (serviceValueSelected === "Good") {
            setPathFill1(fourStarColor);
            setPathFill2(fourStarColor);
            setPathFill3(fourStarColor);
            setPathFill4(fourStarColor);
            setPathFill5(defaultGray);
          } else if (serviceValueSelected === "Great") {
            setPathFill1(fiveStarColor);
            setPathFill2(fiveStarColor);
            setPathFill3(fiveStarColor);
            setPathFill4(fiveStarColor);
            setPathFill5(fiveStarColor);
          }
        }
      }
    }

    if (hideToolTip) {
      if (foodValue && !foodValueSelected) {
        setFoodValue("Select your food rating");
      } else if (foodValue && foodValueSelected) {
        setFoodValue(foodValueSelected);
      }

      if (serviceValue && !serviceValueSelected) {
        setServiceValue("Select your service rating");
      } else if (serviceValue && serviceValueSelected) {
        setServiceValue(serviceValueSelected);
      }
    }
  };

  const handleStarRating = () => {
    if (foodValue) {
      setFoodValueSelected(foodValue);
    } else if (serviceValue) {
      setServiceValueSelected(serviceValue);
    }
  };

  if (!hideToolTip) {
    return (
      <div className="next-review-star-container" onMouseLeave={handleMouseOut}>
        <CustomToolTip title="Not good" arrow placement="top">
          <Link
            className="next-review-first-star"
            onMouseOver={handleFirstStarMouseOver}
            to={{
              pathname: `/writeareview/${currentYelpBusiness.id}`,
              state: {
                currentYelpBusiness: currentYelpBusiness,
                currentRating: 1,
                action: "create",
                business: business,
                reviewArr: reviewArr,
              },
            }}
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
          </Link>
        </CustomToolTip>

        <CustomToolTip title="Could've been better" arrow placement="top">
          <Link
            className="next-review-second-star"
            onMouseOver={handleSecondStarMouseOver}
            to={{
              pathname: `/writeareview/${currentYelpBusiness.id}`,
              state: {
                currentYelpBusiness: currentYelpBusiness,
                currentRating: 2,
                action: "create",
                business: business,
                reviewArr: reviewArr,
              },
            }}
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
          </Link>
        </CustomToolTip>

        <CustomToolTip title="OK" arrow placement="top">
          <Link
            className="next-review-third-star"
            onMouseOver={handleThirdStarMouseOver}
            to={{
              pathname: `/writeareview/${currentYelpBusiness.id}`,
              state: {
                currentYelpBusiness: currentYelpBusiness,
                currentRating: 3,
                action: "create",
                business: business,
                reviewArr: reviewArr,
              },
            }}
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
          </Link>
        </CustomToolTip>

        <CustomToolTip title="Good" arrow placement="top">
          <Link
            className="next-review-fourth-star"
            onMouseOver={handleFourthStarMouseOver}
            to={{
              pathname: `/writeareview/${currentYelpBusiness.id}`,
              state: {
                currentYelpBusiness: currentYelpBusiness,
                currentRating: 4,
                action: "create",
                business: business,
                reviewArr: reviewArr,
              },
            }}
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
          </Link>
        </CustomToolTip>

        <CustomToolTip title="Great" arrow placement="top">
          <Link
            className="next-review-fifth-star"
            onMouseOver={handleFifthStarMouseOver}
            to={{
              pathname: `/writeareview/${currentYelpBusiness.id}`,
              state: {
                currentYelpBusiness: currentYelpBusiness,
                currentRating: 5,
                action: "create",
                business: business,
                reviewArr: reviewArr,
              },
            }}
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
          </Link>
        </CustomToolTip>
      </div>
    );
  } else if (hideToolTip) {
    return (
      <div className="next-review-star-container" onMouseLeave={handleMouseOut}>
        <div
          className="next-review-first-star"
          onMouseOver={handleFirstStarMouseOver}
          onClick={handleStarRating}
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

        <div
          className="next-review-second-star"
          onMouseOver={handleSecondStarMouseOver}
          onClick={handleStarRating}
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

        <div
          className="next-review-third-star"
          onMouseOver={handleThirdStarMouseOver}
          onClick={handleStarRating}
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

        <div
          className="next-review-fourth-star"
          onMouseOver={handleFourthStarMouseOver}
          onClick={handleStarRating}
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

        <div
          className="next-review-fifth-star"
          onMouseOver={handleFifthStarMouseOver}
          onClick={handleStarRating}
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
      </div>
    );
  }
};

export default NextReviewStars;
