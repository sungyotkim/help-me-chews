import "./SearchPage.css";
import Header from "../Header/Header";
import SearchPagePriceFilter from "./SearchPagePriceFilter";
import SearchPageDistanceFilter from "./SearchPageDistanceFilter";
import { useContext, useEffect, useRef, useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import ResultMap from "../ResultMap/ResultMap";
import OpenNowFilter from "./OpenNowFilter";
import HotAndNewFilter from "./HotAndNewFilter";
import WheelChairAccessibleFilter from "./WheelchairAccessibleFilter";
import GenderNeutralBathroomsFilter from "./GenderNeutralBathroomsFilter";

const SearchPage = () => {
  const [path, setPath] = useState("");
  const {
    searchedTerm,
    searchedLocation,
    setRadius,
    setPrice,
    setOpenNow,
    setHotAndNew,
    price,
    term,
    radius,
    openNow,
    genderNeutralBathrooms,
    limit,
    wheelchairAccessible,
    offset,
    hotAndNew,
    setGenderNeutralBathrooms,
    setWheelchairAccessible,
    setBusinessResults,
    setCurrentBusinessResults,
    location,
    setLoading,
    setResultReviews,
    setAllResultReviews,
    currentBusinessResults,
  } = useContext(BusinessSearchContext);
  const [filters, setFilters] = useState([]);

  const priceArray = ["$", "$$", "$$$", "$$$$"];

  useEffect(() => {
    let commaIndex = searchedLocation.indexOf(",");
    let locationNoComma;
    if (commaIndex !== -1) {
      locationNoComma = searchedLocation.slice(0, commaIndex);
    } else {
      locationNoComma = searchedLocation;
    }
    let capitalize = (str) => {
      let arr = str.split(" ");

      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      return arr.join(" ");
    };
    let capitalizedLocation = capitalize(locationNoComma);
    let capitalizedTerm = capitalize(searchedTerm);

    let pathArray = [capitalizedLocation, capitalizedTerm];
    setPath(pathArray.join("  >  "));
  }, [searchedTerm, searchedLocation]);

  const fetchBusinessesUponFilterChange = async () => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    const res = await fetch(
      `/search/businesses/${term}/${location}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };

  const handleFilterClear = () => {
    setRadius("null");
    setPrice([]);
    setOpenNow("null");
    setHotAndNew("null");
    setWheelchairAccessible("null");
    setGenderNeutralBathrooms("null");
    setFilters([]);
    setCurrentBusinessResults([]);
    setResultReviews([]);
    setAllResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetchBusinessesUponFilterChange();
    }
  }, [
    openNow,
    wheelchairAccessible,
    hotAndNew,
    genderNeutralBathrooms,
    price,
    radius,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="search-page-container">
      <Header
        styleBlack={{ color: "black", fill: "black" }}
        fromSearch={{ fromSearch: true }}
        fromBusiness={{ fromBusiness: false }}
        sticky={{ position: "sticky", top: 0, background: "white" }}
      />
      <div className="main-search-results-container">
        <div className="search-results-container-left-outer">
          <div className="search-results-filter-outer-container">
            {filters.length !== 0 && (
              <div className="search-results-filter-container-with-filters">
                <div className="search-results-filter-header-container-with-filters">
                  {filters.length} {filters.length === 1 ? "filter" : "filters"}
                </div>
                <div className="search-results-current-filters-container">
                  {filters.map((filter, i) => {
                    return (
                      <>
                        <span>{filter}</span>
                        {i !== filters.length - 1 && <span> • </span>}
                      </>
                    );
                  })}
                </div>
                <div
                  className="clear-all-current-filters-btn"
                  onClick={handleFilterClear}
                >
                  Clear all
                </div>
              </div>
            )}
            {!filters.length && (
              <div className="search-results-filter-header-container">
                Filters
              </div>
            )}
            <div className="search-results-filter-price-container">
              <div className="search-results-filter-price-inner-container">
                {priceArray.map((priceOption, i) => {
                  return (
                    <div key={i}>
                      <SearchPagePriceFilter
                        priceOption={priceOption}
                        filters={filters}
                        setFilters={setFilters}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="search-results-filter-suggested-container">
              <div className="search-results-filter-suggested-container-title">
                Suggested
              </div>
              <div className="search-results-filter-suggested-container-items">
                <OpenNowFilter filters={filters} setFilters={setFilters} />
                <HotAndNewFilter filters={filters} setFilters={setFilters} />
              </div>
            </div>
            <div className="search-results-filter-features-container">
              <div className="search-results-filter-features-container-title">
                Features
              </div>
              <div className="search-results-filter-features-container-items">
                <GenderNeutralBathroomsFilter
                  filters={filters}
                  setFilters={setFilters}
                />
                <WheelChairAccessibleFilter
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>
            </div>
            <div className="search-results-filter-distance-container">
              <div className="search-results-filter-distance-container-title">
                Distance
              </div>
              <div className="search-results-filter-distance-container-items">
                <SearchPageDistanceFilter
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>
            </div>
          </div>
          <div className="search-results-result-outer-container">
            {searchedTerm !== "null" && (
              <div className="search-path-container">{path}</div>
            )}
            <div className="search-header-container">
              {searchedTerm !== "null" && (
                <div className="search-title">{`Best ${searchedTerm} Near Me in ${searchedLocation}`}</div>
              )}
              {searchedTerm === "null" && (
                <div className="search-title">{`Browsing ${searchedLocation} businesses`}</div>
              )}
              <div className="search-sort-container">
                <div className="search-sort">Sort:</div>
                <div className="search-sort-dropdown-selection">
                  Recommended
                  <svg width={16} height={16} viewBox="0 -3 16 16">
                    <path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="search-sponsored-results-container">
              Sponsored Results
              <svg width={16} height={16}>
                <path d="M8 14.75A6.75 6.75 0 1114.75 8 6.757 6.757 0 018 14.75zm0-12A5.25 5.25 0 1013.25 8 5.256 5.256 0 008 2.75z"></path>
                <path d="M8 11.605a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM8 6.15a.998.998 0 01-.92-.62 1 1 0 011.63-1.09c.182.189.285.439.29.7a.996.996 0 01-.62.93 1 1 0 01-.38.08z"></path>
              </svg>
            </div>
            <div className="search-results-result-inner-container">
              {searchedTerm !== "null" && (
                <div className="search-results-result-inner-header-container">
                  {`All "${searchedTerm}" Results in ${searchedLocation}`}
                </div>
              )}
              {searchedTerm === "null" && (
                <div className="search-results-result-inner-header-container">
                  {`All Results in ${searchedLocation}`}
                </div>
              )}
              <SearchResults />
            </div>
          </div>
        </div>
        <div className="search-results-container-right-outer">
          <div className="search-results-container-right-inner">
            <ResultMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
