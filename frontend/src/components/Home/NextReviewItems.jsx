import "./NextReviewItems.css";
import NextReviewStars from "../ReviewStars/NextReviewStars";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useState } from "react";
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

const NextReviewItems = ({
  nextReviewRestaurants,
  setNextReviewRestaurants,
}) => {
  const [arr, setArr] = useState(nextReviewRestaurants.slice(0, 6));

  return (
    <>
      {arr.length > 0 &&
        arr.map((restaurant, i) => {
          let yelpInfo = restaurant.yelpInfo;
          let yelpReviews = restaurant.yelpInfo.yelpReviews;
          return (
            <div className="next-review-grid-item" key={i}>
              <Link
                to={{
                  pathname: `/business/${restaurant.yelpId}`,
                  state: { result: yelpInfo, reviewArr: yelpReviews },
                }}
                className="next-review-grid-item-photo-container"
              >
                <img src={restaurant.photo} alt={restaurant.name} />
              </Link>

              <div className="next-review-grid-item-text-container">
                <Link
                  to={{
                    pathname: `/business/${restaurant.yelpId}`,
                    state: { result: yelpInfo, reviewArr: yelpReviews },
                  }}
                  className="next-review-item-name"
                >
                  {restaurant.name}
                </Link>

                <CustomToolTip
                  title="Ignore this suggestion for a while"
                  arrow
                  placement="left"
                >
                  <div className="hide-next-review-suggestion-btn">
                    <svg width={24} height={24}>
                      <path d="M13.41 12l5.3-5.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-5.29-5.3a1.004 1.004 0 00-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 000 1.42 1 1 0 001.42 0l5.29-5.3 5.29 5.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 12z"></path>
                    </svg>
                  </div>
                </CustomToolTip>

                <div className="do-you-recommend-container">
                  Do you recommend this business?
                </div>

                <NextReviewStars
                  business={restaurant}
                  currentYelpBusiness={yelpInfo}
                  reviewArr={yelpReviews}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default NextReviewItems;
