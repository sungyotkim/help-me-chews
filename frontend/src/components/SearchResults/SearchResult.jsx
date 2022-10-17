import "./SearchResult.css";
import ReviewStars from "../ReviewStars/ReviewStars";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";

const SearchResult = ({ result, index, firstReview }) => {
  let transactions;
  let snippedReview;
  let date = new Date();
  let dayIndex = date.getDay();
  let isOpen = "Not available";
  let closingTime;
  let openTime;
  let openDay;
  let resultHours = [];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let categories = [];
  const { allResultReviews } = useContext(BusinessSearchContext);
  const reviewArr = allResultReviews[index];

  if (result.transactions) {
    transactions = result.transactions;
  }

  if (result.hours) {
    if (result.hours[0].open && result.hours[0].open.length > 7) {
      isOpen = "complicated";
    } else {
      isOpen = result.hours[0].is_open_now;
    }
  }

  if (result.hours && isOpen !== "complicated" && isOpen !== "Not available") {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < result.hours[0].open.length; j++) {
        if (result.hours[0].open[j].day === i) {
          resultHours.push(result.hours[0].open[j]);
        }
      }
      if (resultHours.length !== i + 1) {
        resultHours.push({ closed: true, day: i });
      }
    }
  }

  if (isOpen !== "Not available" && isOpen !== "complicated") {
    if (isOpen) {
      closingTime = resultHours[dayIndex].end;
      if (closingTime === "0000") {
        closingTime = "Midnight";
      } else if (parseInt(closingTime) > 1200) {
        closingTime = parseInt(closingTime) - 1200;
        let closedTimeString = closingTime.toString();
        closingTime =
          closedTimeString.slice(0, closedTimeString.length - 2) +
          ":" +
          closedTimeString.slice(closedTimeString.length - 2) +
          " PM";
      } else {
        closingTime = parseInt(closingTime);
        let closedTimeString = closingTime.toString();
        closingTime =
          closedTimeString.slice(0, closedTimeString.length - 2) +
          ":" +
          closedTimeString.slice(closedTimeString.length - 2) +
          " AM";
      }
    } else {
      let i = dayIndex;
      while (resultHours.closed) {
        if (i === 6) {
          i = 0;
        } else {
          i++;
        }
      }
      if (i - 1 === dayIndex) {
        openDay = "tomorrow";
      } else {
        openDay = days[i];
      }
      openTime = resultHours[i].start;
      if (openTime === "0000") {
        openTime = "Midnight";
      } else if (parseInt(openTime) > 1200) {
        openTime = parseInt(openTime) - 1200;
        let openTimeString = openTime.toString();
        openTime =
          openTimeString.slice(0, openTimeString.length - 2) +
          ":" +
          openTimeString.slice(openTimeString.length - 2) +
          " PM";
      } else {
        openTime = parseInt(openTime);
        let openTimeString = openTime.toString();
        openTime =
          openTimeString.slice(0, openTimeString.length - 2) +
          ":" +
          openTimeString.slice(openTimeString.length - 2) +
          " AM";
      }
    }
  }

  if (firstReview) {
    snippedReview = firstReview.slice(0, 125) + "...";
  }

  if (result.categories && result.categories.length > 0) {
    for (let i = 0; i < result.categories.length; i++) {
      categories.push(result.categories[i].title);
    }
  }

  const handleClick = () => {
    return;
  };

  return (
    <>
      <Link
        to={{
          pathname: `/business/${result.id}`,
          state: { reviewArr, result },
        }}
        className="search-result-item-container"
      >
        <div className="result-item-left-container">
          <div className="result-image-container">
            <img src={result.image_url} alt={result.image_url} />
          </div>
        </div>
        <div className="result-item-right-container">
          <div className="result-item-title-container">
            {index + 1}.
            <div className="result-item-name" onClick={handleClick}>
              {result.name}
            </div>
          </div>
          <div className="result-item-reviews-container">
            <ReviewStars
              starCount={result.rating}
              size={20}
              starContainer={"tiny-review-star-container"}
            />
            <div className="result-item-reviews-star-count">
              {result.rating}
            </div>
            <div className="result-item-reviews-review-count">
              ({result.review_count} reviews)
            </div>
          </div>
          <div className="result-item-category-price-location-container">
            {categories.length &&
              categories.map((category, i) => {
                return (
                  <div className="result-item-category" key={i}>
                    {category}
                  </div>
                );
              })}
            {result.price && (
              <div className="result-item-price">{result.price}</div>
            )}
            {result.price && <div>•</div>}
            {result.location && (
              <div className="result-item-location">{result.location.city}</div>
            )}
          </div>
          <div className="result-item-hours-container">
            {isOpen === true && (
              <div className="hours-open-container">Open</div>
            )}
            {closingTime && (
              <div className="hours-open-closed-until">until {closingTime}</div>
            )}
            {isOpen === false && (
              <div className="hours-closed-container">Closed</div>
            )}
            {openTime && (
              <div className="hours-open-closed-until">
                until {openTime} {openDay}
              </div>
            )}
            {isOpen === "Not available" && (
              <div className="hours-open-closed-until">Hours not available</div>
            )}
          </div>
          <div className="result-item-sample-review-container">
            <div className="sample-review-icon">
              <svg width={16} height={16}>
                <path d="M5 14.309a.749.749 0 01-.75-.75v-2.45a3.768 3.768 0 01-3-3.667V5.44A3.754 3.754 0 015 1.69h6a3.754 3.754 0 013.75 3.75v2A3.755 3.755 0 0111 11.19H8.924l-3.437 2.938a.75.75 0 01-.487.18zM5 3.191a2.253 2.253 0 00-2.25 2.25v2a2.259 2.259 0 002.215 2.25.792.792 0 01.785.75v1.49l2.41-2.06a.749.749 0 01.487-.18H11a2.253 2.253 0 002.25-2.25v-2A2.253 2.253 0 0011 3.19H5z"></path>
              </svg>
            </div>
            <div className="sample-review-snippet-container">
              {snippedReview && (
                <div className="sample-review-snippet">
                  "{snippedReview}"
                  <span className="sample-review-see-more"> more</span>
                </div>
              )}
            </div>
          </div>
          <div className="result-item-features-container">
            {transactions &&
              transactions.map((transaction, i) => {
                transaction =
                  transaction[0].toUpperCase() + transaction.slice(1);
                return (
                  <div key={i} className="transaction-item-container">
                    <svg width={16} height={16} fill="rgb(2, 161, 109)">
                      <path d="M6.308 11.763a.748.748 0 01-.53-.22l-2.641-2.64a.75.75 0 011.06-1.061l2.11 2.11 5.496-5.495a.75.75 0 111.06 1.06l-6.025 6.026a.748.748 0 01-.53.22z"></path>
                    </svg>
                    <div>{transaction}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchResult;
