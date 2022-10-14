import { useContext, useEffect, useRef, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";

const HotAndNewFilter = ({ filters, setFilters }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    setBusinessResults,
    hotAndNew,
    setHotAndNew,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
  } = useContext(BusinessSearchContext);
  const suggestedOption = "Hot and New";

  const handleSuggestionsInputClick = (e) => {
    e.preventDefault();
    if (isChecked) {
      setHotAndNew("null");
      setIsChecked(false);
      let filterIdx = filters.indexOf(suggestedOption);
      filters.splice(filterIdx, 1);
      setFilters(filters);
    } else {
      setHotAndNew("true");
      setIsChecked(true);
      filters.push(suggestedOption);
      setFilters(filters);
    }
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setCurrentBusinessResults([]);
      setResultReviews([]);
      const emptyResults = {};
      setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
      setLoading(true);
      if (hotAndNew === "null") {
        setIsChecked(false);
      }
    }
  }, [hotAndNew]);

  const handleMouseOver = (e) => {
    e.preventDefault();
    setIsHovered(true);
    return;
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false);
    return;
  };

  return (
    <div
      className="search-results-filter-suggested-container-item"
      onClick={(e) => handleSuggestionsInputClick(e)}
      onMouseOver={(e) => handleMouseOver(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <div
        className={
          isHovered
            ? "square-check-box-container square-check-box-hovered"
            : "square-check-box-container"
        }
      >
        <span
          className={
            isChecked
              ? "square-check-boxes square-check-box-checked"
              : "square-check-boxes"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg "
            width="20"
            height="20"
            viewBox="-5 1 35 25"
          >
            <path
              stroke="none"
              fill="white"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </span>
      </div>
      <div>{suggestedOption}</div>
    </div>
  );
};

export default HotAndNewFilter;
