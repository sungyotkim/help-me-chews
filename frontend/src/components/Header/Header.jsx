import React, { useContext, useState } from "react";
import "./Header.css";
import logoImg from "../../assets/help-logo.png";
import HeaderNavBar from "../Navbar/HeaderNavBar";
import { useSelector } from "react-redux";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import { Link, useHistory } from "react-router-dom";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { usePlacesWidget } from "react-google-autocomplete";

function Header({ styleBlack, fromSearch, fromBusiness, sticky }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const {
    term,
    setTerm,
    location,
    setLocation,
    setBusinessResults,
    radius,
    price,
    openNow,
    genderNeutralBathrooms,
    wheelchairAccessible,
    limit,
    offset,
    setSearchedTerm,
    setSearchedLocation,
    setRadius,
    setPrice,
    setOpenNow,
    setGenderNeutralBathrooms,
    setWheelchairAccessible,
    setLimit,
    setOffset,
    hotAndNew,
    setHotAndNew,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
    setAllResultReviews,
  } = useContext(BusinessSearchContext);
  const [tempTerm, setTempTerm] = useState(term);
  const [tempLocation, setTempLocation] = useState(location);

  let emptyDiv;
  let headerOptionsName;

  if (sessionUser) {
    emptyDiv = <div className="empty-header-div-logged-in"></div>;
    headerOptionsName = "header-options";
  } else {
    emptyDiv = <div className="empty-header-div-logged-out"></div>;
    headerOptionsName = "header-options logged-out";
  }

  const fetchBusinesses = async () => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    const res = await fetch(
      `/search/businesses/${tempTerm}/${tempLocation}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentBusinessResults([]);
    setResultReviews([]);
    setAllResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
    fetchBusinesses();
    setTerm(tempTerm);
    setLocation(tempLocation);
    setSearchedTerm(tempTerm);
    setSearchedLocation(tempLocation);

    if (history.location.pathname !== "/search") {
      let path = "/search";
      history.push(path);
    }
  };

  const resetFiltersOnClick = () => {
    setTerm("null");
    setLocation("New York, NY");
    setTempTerm("null");
    setTempLocation("New York, NY");
    setSearchedTerm("null");
    setSearchedLocation("New York, NY");
    setRadius("null");
    setPrice([]);
    setOpenNow("null");
    setGenderNeutralBathrooms("null");
    setWheelchairAccessible("null");
    setLimit(2);
    setOffset(0);
    setHotAndNew("null");
  };

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
    onPlaceSelected: (place) => {
      setTempLocation(place.name);
    },
    options: {
      componentRestrictions: { country: ["us", "ca"] },
      types: [
        "locality",
        "sublocality",
        "administrative_area_level_1",
        "postal_code",
        "neighborhood",
      ],
      fields: ["name"],
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCurrentBusinessResults([]);
      setResultReviews([]);
      setAllResultReviews([]);
      fetchBusinesses();
      setSearchedTerm(tempTerm);
      setSearchedLocation(tempLocation);
      setTerm(tempTerm);
      setLocation(tempLocation);

      if (history.location.pathname !== "/search") {
        let path = "/search";
        history.push(path);
      }
    }
  };

  return (
    <div className="header" style={sticky}>
      <div className="header-top-container">
        <Link to="/" className="logo-container" onClick={resetFiltersOnClick}>
          <span className="logo-name" style={styleBlack}>
            help me chews
          </span>
          <img src={logoImg} alt="help-app-logo" className="header-logo" />
        </Link>
        <div className="header-search">
          <div className="header-search-bar">
            <div className="header-search-bar-left-container">
              <input
                type="text"
                className="header-search-bar-left"
                placeholder="tacos, cheap dinner, Max's"
                value={tempTerm === "null" ? "" : tempTerm}
                onChange={(e) => setTempTerm(e.target.value)}
                onClick={(e) => e.target.select()}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
            <span className="search-divider"></span>
            <div className="header-search-bar-right-container">
              <input
                type="text"
                className="header-search-bar-right"
                value={tempLocation}
                onChange={(e) => setTempLocation(e.target.value)}
                ref={ref}
                onClick={(e) => e.target.select()}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
          </div>
          <div className="search-icon-container" onClick={handleSearch}>
            <svg className="svg-icon">
              <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
            </svg>
          </div>
        </div>
        {emptyDiv}
        <div className={headerOptionsName}>
          {/* <div className="header-business-container">
            <div style={styleBlack}>For Businesses</div>
          </div> */}
          <Link to="/" className="header-review-container">
            <div style={styleBlack}>Write a Review</div>
          </Link>
          {sessionUser && <HeaderLoggedIn styleBlack={styleBlack} />}
          {!sessionUser && (
            <HeaderLoggedOut
              styleBlack={styleBlack}
              fromSearch={fromSearch}
              fromBusiness={fromBusiness}
            />
          )}
        </div>
      </div>
      <HeaderNavBar styleBlack={styleBlack} />
    </div>
  );
}

export default Header;
