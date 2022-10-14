import { useRef, useState } from "react";
import "./BusinessReviewSort.css";

const BusinessReviewSort = () => {
  const [searchReviewsAnimate, setSearchReviewsAnimate] = useState(false);
  const ref = useRef(null);

  const handleFocus = () => {
    setSearchReviewsAnimate(!searchReviewsAnimate);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handlePlaceholderClick = () => {
    ref.current.focus();
  };

  return (
    <div className="business-reviews-sorting-options-container">
      <div className="sorting-btns-container">
        <div className="help-sort">Help me Sort</div>
        <div className="filter-by-rating-sort">Filter by Rating</div>
      </div>
      <div className="review-search-bar">
        <input
          type="text"
          ref={ref}
          onFocus={handleFocus}
          onChange={(e) => handleChange(e)}
          onBlur={handleFocus}
        />
        <div
          className={
            searchReviewsAnimate
              ? "review-search-bar-focused"
              : "review-search-bar-text"
          }
          onClick={handlePlaceholderClick}
        >
          Search reviews
        </div>
        <div className="review-search-icon">
          <svg width={16} height={16}>
            <path d="M14.448 13.388l-2.171-2.172A6.215 6.215 0 002.989 2.99a6.215 6.215 0 008.227 9.288l2.171 2.171a.75.75 0 001.06-1.06zM4.049 10.72a4.718 4.718 0 113.336 1.381 4.683 4.683 0 01-3.336-1.381z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BusinessReviewSort;
