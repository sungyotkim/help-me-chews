import { useContext, useEffect, useRef, useState } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import "./BusinessReviewsSort.css";

const BusinessReviewSort = () => {
  const [searchReviewsAnimate, setSearchReviewsAnimate] = useState(false);
  const [showHelpSort, setShowHelpSort] = useState(false);
  const [showFoodRatingSort, setShowFoodRatingSort] = useState(false);
  const [showServiceRatingSort, setShowServiceRatingSort] = useState(false);
  const {
    databaseReviews,
    setSortedDatabaseReviews,
    sortedDatabaseReviews,
    filteredDatabaseReviews,
    setFilteredDatabaseReviews,
    setNoMatches,
    setReviewTextSearchResults,
  } = useContext(ReviewsContext);
  const ref = useRef(null);
  const node = useRef();
  const [helpSortSelected, setHelpSortSelected] = useState(false);
  const [newestSortSelected, setNewestSortSelected] = useState(false);
  const [oldestSortSelected, setOldestSortSelected] = useState(false);
  const [highestFoodSelected, setHighestFoodSelected] = useState(false);
  const [lowestFoodSelected, setLowestFoodSelected] = useState(false);
  const [highestServiceSelected, setHighestServiceSelected] = useState(false);
  const [lowestServiceSelected, setLowestServiceSelected] = useState(false);
  const [foodFilterSelected, setFoodFilterSelected] = useState(false);
  const [foodFilterFive, setFoodFilterFive] = useState(false);
  const [foodFilterFour, setFoodFilterFour] = useState(false);
  const [foodFilterThree, setFoodFilterThree] = useState(false);
  const [foodFilterTwo, setFoodFilterTwo] = useState(false);
  const [foodFilterOne, setFoodFilterOne] = useState(false);
  const [serviceFilterSelected, setServiceFilterSelected] = useState(false);
  const [serviceFilterFive, setServiceFilterFive] = useState(false);
  const [serviceFilterFour, setServiceFilterFour] = useState(false);
  const [serviceFilterThree, setServiceFilterThree] = useState(false);
  const [serviceFilterTwo, setServiceFilterTwo] = useState(false);
  const [serviceFilterOne, setServiceFilterOne] = useState(false);
  const [foodValues, setFoodValues] = useState([]);
  const [serviceValues, setServiceValues] = useState([]);
  const [query, setQuery] = useState("");

  const reviewSortSetters = [
    setNewestSortSelected,
    setOldestSortSelected,
    setHighestFoodSelected,
    setLowestFoodSelected,
    setHighestServiceSelected,
    setLowestServiceSelected,
  ];

  const reviewSortGetters = [
    newestSortSelected,
    oldestSortSelected,
    highestFoodSelected,
    lowestFoodSelected,
    highestServiceSelected,
    lowestServiceSelected,
  ];

  const reviewSortTerms = [
    "newest",
    "oldest",
    "highest food",
    "lowest food",
    "highest service",
    "lowest service",
    "no sort",
  ];

  const foodFilterSetters = [
    setFoodFilterOne,
    setFoodFilterTwo,
    setFoodFilterThree,
    setFoodFilterFour,
    setFoodFilterFive,
  ];

  const serviceFilterSetters = [
    setServiceFilterOne,
    setServiceFilterTwo,
    setServiceFilterThree,
    setServiceFilterFour,
    setServiceFilterFive,
  ];

  useEffect(() => {
    setSortedDatabaseReviews([]);
    setFilteredDatabaseReviews([]);
    setReviewTextSearchResults([]);

    return () => {
      setSortedDatabaseReviews([]);
      setFilteredDatabaseReviews([]);
      setReviewTextSearchResults([]);
    };
  }, [databaseReviews]);

  useEffect(() => {
    if (foodValues.length === 0 && serviceValues.length === 0) {
      let term;
      for (let i = 0; i < reviewSortGetters.length; i++) {
        if (reviewSortGetters[i]) {
          term = reviewSortTerms[i];
        }
      }
      if (!term) {
        term = reviewSortTerms[6];
      }
      handleSort(null, term);
    }
  }, [foodValues, serviceValues]);

  const handleFocus = () => {
    setSearchReviewsAnimate(!searchReviewsAnimate);

    if (ref.current.value) {
      setSearchReviewsAnimate(true);
    }
  };

  const searchReviews = (term) => {
    if (!term) {
      setReviewTextSearchResults([]);
      setNoMatches(false);
      return;
    }

    term = term.toLowerCase();

    let results;

    if (filteredDatabaseReviews.length > 0) {
      results = filteredDatabaseReviews.filter((review) => {
        return review.text.toLowerCase().indexOf(term) !== -1;
      });
    } else if (sortedDatabaseReviews.length > 0) {
      results = sortedDatabaseReviews.filter((review) => {
        return review.text.toLowerCase().indexOf(term) !== -1;
      });
    } else {
      results = databaseReviews.filter((review) => {
        return review.text.toLowerCase().indexOf(term) !== -1;
      });
    }

    setReviewTextSearchResults(results);
    if (results.length === 0) {
      setNoMatches(true);
    } else {
      setNoMatches(false);
    }
  };

  const handleChange = (term) => {
    setQuery(term);
  };

  const handlePlaceholderClick = () => {
    ref.current.focus();
  };

  const handleSearchClick = () => {
    searchReviews(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchReviews(query);
    }
  };

  const handleHelpSortClick = () => {
    if (showHelpSort) {
      setShowHelpSort(false);
    } else {
      setShowHelpSort(true);
    }
  };

  const clickOutside = (e) => {
    if (node.current) {
      if (node.current.contains(e.target)) {
        return;
      }
    }
    setShowHelpSort(false);
    setShowFoodRatingSort(false);
    setShowServiceRatingSort(false);
  };

  const handleFoodRatingSortClick = () => {
    if (showFoodRatingSort) {
      setShowFoodRatingSort(false);
    } else {
      setShowFoodRatingSort(true);
    }
  };

  const handleServiceRatingSortClick = () => {
    if (showServiceRatingSort) {
      setShowServiceRatingSort(false);
    } else {
      setShowServiceRatingSort(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [showHelpSort, showFoodRatingSort, showServiceRatingSort]);

  const handleSort = (e, sort) => {
    if (e) {
      e.preventDefault();
    }
    setShowHelpSort(false);
    setHelpSortSelected(true);
    reviewSortSetters.forEach((setter) => {
      setter(false);
    });

    const reviewTimeAdjusted = [];

    if (filteredDatabaseReviews.length > 0) {
      filteredDatabaseReviews.forEach((el) => {
        if (el.updatedAt) {
          el.time = Date.parse(el.updatedAt);
        } else {
          el.time = Date.parse(el.timeCreated);
        }
        reviewTimeAdjusted.push(el);
      });
    } else {
      databaseReviews.forEach((el) => {
        if (el.updatedAt) {
          el.time = Date.parse(el.updatedAt);
        } else {
          el.time = Date.parse(el.timeCreated);
        }
        reviewTimeAdjusted.push(el);
      });
    }

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

  const handleFilter = (e, term, val) => {
    e.preventDefault();
    let filterValues;

    if (term === "foodRating") {
      setFoodFilterSelected(true);
      setShowFoodRatingSort(false);

      let index = foodValues.indexOf(val);
      if (val === 0) {
        setFoodValues([]);
        foodFilterSetters.forEach((setter) => {
          setter(false);
        });
        setFoodFilterSelected(false);

        if (serviceValues.length === 0) {
          setFilteredDatabaseReviews([]);
        }
        filterValues = [1, 2, 3, 4, 5];
      } else if (index === -1) {
        filterValues = foodValues;
        filterValues.push(val);
        setFoodValues(filterValues);
        foodFilterSetters[val - 1](true);
      } else {
        let newValues = foodValues
          .slice(0, index)
          .concat(foodValues.slice(index + 1));
        foodFilterSetters[val - 1](false);
        filterValues = newValues;
        setFoodValues(newValues);
        if (newValues.length === 0) {
          setFoodFilterSelected(false);
          filterValues = [1, 2, 3, 4, 5];
        }
      }
    } else if (term === "serviceRating") {
      setServiceFilterSelected(true);
      setShowServiceRatingSort(false);

      let index = serviceValues.indexOf(val);
      if (val === 0) {
        setServiceValues([]);
        serviceFilterSetters.forEach((setter) => {
          setter(false);
        });
        setServiceFilterSelected(false);

        if (foodValues.length === 0) {
          setFilteredDatabaseReviews([]);
        }
        filterValues = [1, 2, 3, 4, 5];
      } else if (index === -1) {
        filterValues = serviceValues;
        filterValues.push(val);
        setServiceValues(filterValues);
        serviceFilterSetters[val - 1](true);
      } else {
        let newValues = serviceValues
          .slice(0, index)
          .concat(serviceValues.slice(index + 1));
        filterValues = newValues;
        setServiceValues(newValues);
        serviceFilterSetters[val - 1](false);
        if (newValues.length === 0) {
          setServiceFilterSelected(false);
          filterValues = [1, 2, 3, 4, 5];
        }
      }
    }

    let filtered;
    if (sortedDatabaseReviews.length > 0) {
      filtered = sortedDatabaseReviews.filter((el) => {
        return filterValues.indexOf(el[term]) !== -1;
      });
    } else {
      filtered = databaseReviews.filter((el) => {
        return filterValues.indexOf(el[term]) !== -1;
      });
    }

    setSortedDatabaseReviews([]);
    setFilteredDatabaseReviews(filtered);
    if (filtered.length === 0) {
      setNoMatches(true);
    } else {
      setNoMatches(false);
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
            onClick={handleFoodRatingSortClick}
          >
            Filter by Food Rating
            <svg width={16} height={16}>
              <path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"></path>
            </svg>
          </div>
          {showFoodRatingSort && (
            <div className="rating-sort-dropdown" ref={node}>
              <div
                className={foodFilterFive ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 5)}
              >
                5 stars
              </div>
              <div
                className={foodFilterFour ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 4)}
              >
                4 stars
              </div>
              <div
                className={foodFilterThree ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 3)}
              >
                3 stars
              </div>
              <div
                className={foodFilterTwo ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 2)}
              >
                2 stars
              </div>
              <div
                className={foodFilterOne ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 1)}
              >
                1 star
              </div>
              <div
                className={!foodFilterSelected ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "foodRating", 0)}
              >
                All ratings
              </div>
            </div>
          )}
        </div>
        <div className="filter-by-rating-sort">
          <div
            className="filter-by-rating-sort-btn rating-sort-service"
            onClick={handleServiceRatingSortClick}
          >
            Filter by Service Rating
            <svg width={16} height={16}>
              <path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"></path>
            </svg>
          </div>
          {showServiceRatingSort && (
            <div className="rating-sort-dropdown" ref={node}>
              <div
                className={serviceFilterFive ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 5)}
              >
                5 stars
              </div>
              <div
                className={serviceFilterFour ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 4)}
              >
                4 stars
              </div>
              <div
                className={serviceFilterThree ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 3)}
              >
                3 stars
              </div>
              <div
                className={serviceFilterTwo ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 2)}
              >
                2 stars
              </div>
              <div
                className={serviceFilterOne ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 1)}
              >
                1 star
              </div>
              <div
                className={!serviceFilterSelected ? "active-rating-sort" : ""}
                onClick={(e) => handleFilter(e, "serviceRating", 0)}
              >
                All ratings
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="review-search-bar">
        <input
          type="text"
          ref={ref}
          onFocus={handleFocus}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={handleFocus}
          value={query}
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
        <div className="review-search-icon" onClick={handleSearchClick}>
          <svg width={16} height={16}>
            <path d="M14.448 13.388l-2.171-2.172A6.215 6.215 0 002.989 2.99a6.215 6.215 0 008.227 9.288l2.171 2.171a.75.75 0 001.06-1.06zM4.049 10.72a4.718 4.718 0 113.336 1.381 4.683 4.683 0 01-3.336-1.381z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BusinessReviewSort;
