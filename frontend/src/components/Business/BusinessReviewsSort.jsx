import { useContext, useEffect, useRef, useState } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import "./BusinessReviewsSort.css";

const BusinessReviewSort = () => {
  const [searchReviewsAnimate, setSearchReviewsAnimate] = useState(false);
  const [showHelpSort, setShowHelpSort] = useState(false);
  const [showRatingSort, setShowRatingSort] = useState(false);
  const { databaseReviews, setSortedDatabaseReviews } =
    useContext(ReviewsContext);
  const ref = useRef(null);
  const node = useRef();
  const [helpSortSelected, setHelpSortSelected] = useState(false);
  const [newestSortSelected, setNewestSortSelected] = useState(false);
  const [oldestSortSelected, setOldestSortSelected] = useState(false);
  const [highestFoodSelected, setHighestFoodSelected] = useState(false);
  const [lowestFoodSelected, setLowestFoodSelected] = useState(false);
  const [highestServiceSelected, setHighestServiceSelected] = useState(false);
  const [lowestServiceSelected, setLowestServiceSelected] = useState(false);
  console.log(databaseReviews);

  const reviewSortSetters = [
    setNewestSortSelected,
    setOldestSortSelected,
    setHighestFoodSelected,
    setLowestFoodSelected,
    setHighestServiceSelected,
    setLowestServiceSelected,
  ];

  const handleFocus = () => {
    setSearchReviewsAnimate(!searchReviewsAnimate);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handlePlaceholderClick = () => {
    ref.current.focus();
  };

  const handleHelpSortClick = () => {
    if (showHelpSort) {
      setShowHelpSort(false);
    } else {
      setShowHelpSort(true);
    }
  };

  const clickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowHelpSort(false);
    setShowRatingSort(false);
  };

  const handleRatingSortClick = () => {
    if (showRatingSort) {
      setShowRatingSort(false);
    } else {
      setShowRatingSort(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [showHelpSort, showRatingSort]);

  const handleSort = (e, sort) => {
    e.preventDefault();
    setShowHelpSort(false);
    setHelpSortSelected(true);
    reviewSortSetters.forEach((setter) => {
      setter(false);
    });

    const reviewTimeAdjusted = [];
    databaseReviews.forEach((el) => {
      if (el.updatedAt) {
        el.time = Date.parse(el.updatedAt);
      } else {
        el.time = Date.parse(el.timeCreated);
      }
      reviewTimeAdjusted.push(el);
    });

    if (sort === "newest") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.time > b.time ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setNewestSortSelected(true);
    } else if (sort === "oldest") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setOldestSortSelected(true);
    } else if (sort === "highest food") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.foodRating > b.foodRating ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setHighestFoodSelected(true);
    } else if (sort === "lowest food") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.foodRating < b.foodRating ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setLowestFoodSelected(true);
    } else if (sort === "highest service") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.serviceRating > b.serviceRating ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setHighestServiceSelected(true);
    } else if (sort === "lowest service") {
      let sorted = reviewTimeAdjusted.sort((a, b) => {
        return a.serviceRating < b.serviceRating ? -1 : 1;
      });
      setSortedDatabaseReviews(sorted);
      setLowestServiceSelected(true);
    } else if (sort === "no sort") {
      setHelpSortSelected(false);
      setSortedDatabaseReviews([]);
    }
  };

  return (
    <div className="business-reviews-sorting-options-container">
      <div className="sorting-btns-container">
        <div className="help-sort">
          <div className="help-sort-btn" onClick={handleHelpSortClick}>
            Help me Sort
            <svg width={16} height={16}>
              <path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"></path>
            </svg>
          </div>
          {showHelpSort && (
            <div className="help-sort-dropdown" ref={node}>
              <div
                className={!helpSortSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "no sort")}
              >
                Help me Sort
              </div>
              <div
                className={newestSortSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "newest")}
              >
                Newest First
              </div>
              <div
                className={oldestSortSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "oldest")}
              >
                Oldest First
              </div>
              <div
                className={highestFoodSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "highest food")}
              >
                Highest Food
              </div>
              <div
                className={lowestFoodSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "lowest food")}
              >
                Lowest Food
              </div>
              <div
                className={highestServiceSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "highest service")}
              >
                Highest Service
              </div>
              <div
                className={lowestServiceSelected ? "active-help-sort" : ""}
                onClick={(e) => handleSort(e, "lowest service")}
              >
                Lowest Service
              </div>
            </div>
          )}
        </div>
        <div className="filter-by-rating-sort">
          <div
            className="filter-by-rating-sort-btn"
            onClick={handleRatingSortClick}
          >
            Filter by Rating
            <svg width={16} height={16}>
              <path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"></path>
            </svg>
          </div>
          {showRatingSort && (
            <div className="rating-sort-dropdown" ref={node}>
              <div className="active-rating-sort">5 stars</div>
              <div>4 stars</div>
              <div>3 stars</div>
              <div>2 stars</div>
              <div>1 star</div>
              <div>All ratings</div>
            </div>
          )}
        </div>
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
