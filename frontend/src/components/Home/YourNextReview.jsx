import React, { useEffect, useState } from "react";
import NextReviewItems from "./NextReviewItems";
import "./YourNextReview.css";
import nextReviewNoSuggestionsPhoto from "../../assets/next-review-no-suggestions.svg";

const YourNextReview = ({ businesses }) => {
  const [nextReviewRestaurants, setNextReviewRestaurants] = useState(
    businesses.slice(0, 6)
  );
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    setNextReviewRestaurants(businesses.slice(0, 6));
  }, []);

  const handleClick = () => {
    let prevLength = nextReviewRestaurants.length;

    for (let i = 0; i <= prevLength + 6; i++) {
      setNextReviewRestaurants([]);
      let newArr = businesses.slice(0, i);
      setNextReviewRestaurants((oldArr) => [...oldArr, ...newArr]);
      if (newArr.length === 30) {
        setShowBtn(false);
      }
    }
  };

  if (nextReviewRestaurants.length > 0) {
    return (
      <div className="next-review-main-container">
        <div className="next-review-page-wrapper">
          <div className="next-review-top-header">
            <div className="next-review-title">Your Next Review Awaits</div>
          </div>
          <div className="next-review-bottom">
            <div className="next-review-grid">
              {nextReviewRestaurants.map((restaurant, i) => (
                <NextReviewItems restaurant={restaurant} key={i} />
              ))}
            </div>
            {showBtn && (
              <div className="next-review-see-more-footer">
                <svg width={24} height={24}>
                  <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                </svg>
                <div
                  className="show-more-suggestions-text"
                  onClick={handleClick}
                >
                  Show more suggestions
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="next-review-main-container">
          <div className="next-review-page-wrapper">
            <div className="next-review-top-header">
              <div className="next-review-title">Your Next Review Awaits</div>
            </div>
            <div className="next-review-bottom-alt">
              <img
                src={nextReviewNoSuggestionsPhoto}
                alt="no more suggestions"
              />
              <div>
                We’re out of suggestions for you right now. Keep on using Yelp
                and we’ll have some more for you soon.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default YourNextReview;
