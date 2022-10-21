import "./HomeServicesDropdown.css";
import { useContext, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { useHistory } from "react-router-dom";

const HomeServicesDropdown = ({ styleBlack }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverStyle, setHoverStyle] = useState();
  const history = useHistory();
  const {
    currentBusinessResults,
    setTerm,
    location,
    setLocation,
    setBusinessResults,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
    setSearchedTerm,
    setSearchedLocation,
    setRadius,
    setPrice,
    setOpenNow,
    setGenderNeutralBathrooms,
    setWheelchairAccessible,
    setHotAndNew,
    setAllResultReviews,
    price,
    radius,
    openNow,
    genderNeutralBathrooms,
    wheelchairAccessible,
    limit,
    offset,
    hotAndNew,
  } = useContext(BusinessSearchContext);

  const handleMouseOver = () => {
    setIsHovering(true);
    setHoverStyle({ borderBottom: "4px solid #fa4d4d" });
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverStyle();
  };

  const fetchBusinessesUponClick = async (value) => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    const res = await fetch(
      `/search/businesses/${value}/${location}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };

  const handleClick = (e, value) => {
    e.preventDefault();
    let run = false;
    if (currentBusinessResults.length === 0) {
      run = true;
    }
    setTerm(value);
    setLocation(location);
    setRadius("null");
    setPrice([]);
    setOpenNow("null");
    setHotAndNew("null");
    setWheelchairAccessible("null");
    setGenderNeutralBathrooms("null");
    setCurrentBusinessResults([]);
    setResultReviews([]);
    setAllResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
    setSearchedTerm(value);
    setSearchedLocation(location);

    if (run) {
      fetchBusinessesUponClick(value);
    }

    if (history.location.pathname !== "/search") {
      if (!run) {
        fetchBusinessesUponClick(value);
      }
      let path = "/search";
      history.push(path);
    }
  };

  return (
    <div
      className="homeservices-dropdown-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="homeservices-dropdown" style={hoverStyle}>
        <span className="navbar-span" style={styleBlack}>
          Home Services
        </span>
        <svg className="svg-dropdown-arrow" style={styleBlack}>
          <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
        </svg>
      </div>
      {isHovering && (
        <div className="homeservices-dropdown-revealed">
          <div className="homeservices-left-dropdown">
            <div
              className="homeservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Contractors")}
            >
              <svg>
                <path d="M21.85 14.81l-.08.01a4.23 4.23 0 01-2.73 7.45h-.17a4.19 4.19 0 01-3-1.49l-5.49-6.49-1-1a.51.51 0 00-.71 0 .5.5 0 000 .71l.33.3a1 1 0 01.3.71 1 1 0 01-.3.71l-1.39 1.41a2 2 0 01-2.83 0L1.25 13.6a2 2 0 010-2.83l1.41-1.42a1 1 0 011.41 0l.36.36a.5.5 0 00.848-.355A.5.5 0 005.13 9l-.35-.35a1 1 0 010-1.42l3.87-3.87a5.55 5.55 0 017.82 0l1.78 1.78a1 1 0 01.29.71 1.05 1.05 0 01-.29.71l-1.42 1.41a1 1 0 01-1.41 0l-.36-.35a.48.48 0 00-.7 0 .48.48 0 000 .7l1 1 6.49 5.49zm-14.6-3v.02a2.5 2.5 0 013.55-.04l.35.35 2.13-2.12-.36-.35a2.52 2.52 0 010-3.54 2.57 2.57 0 013.15-.32l-1-1a3.51 3.51 0 00-5 0L6.87 8a2.5 2.5 0 01-3.47 3.44l-.74.74 3.53 3.56.75-.74a2.51 2.51 0 01.31-3.19zm13.44 7.78v.02a2.22 2.22 0 00-.14-3.27l-5.81-4.92-2.24 2.23 4.93 5.8a2.2 2.2 0 001.6.79 2.28 2.28 0 001.66-.65z"></path>{" "}
              </svg>
              <div>Contractors</div>
            </div>
            <div
              className="homeservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Electricians")}
            >
              <svg>
                <path d="M14.63 13.22a1 1 0 01-.03 1.41l-1.6 1.6.48.42.77.77a1 1 0 01-1.42 1.41l-.06-.06-1.6 1.6a5.37 5.37 0 01-3.79 1.56 5.28 5.28 0 01-3-.93l-1.67 1.71a1 1 0 01-1.42 0 1 1 0 010-1.42L3 19.62a5.36 5.36 0 01.6-6.76l1.6-1.6-.06-.06a1 1 0 111.41-1.42l.77.77.45.45 1.6-1.63a1 1 0 011.41 1.41l-1.6 1.6 2.44 2.44 1.6-1.6a1 1 0 011.41 0zM9.75 19l1.59-1.61-4.74-4.74-1.6 1.6A3.359 3.359 0 109.75 19zM22.71 1.29a1 1 0 01-.03 1.42L21 4.38a5.36 5.36 0 01-.6 6.82l-1.6 1.6.06.06a1 1 0 11-1.41 1.42l-.77-.77-6.16-6.16-.77-.77a1 1 0 111.42-1.41l.06.06 1.6-1.6A5.34 5.34 0 0119.62 3l1.67-1.71a1 1 0 011.42 0zM19 9.75A3.359 3.359 0 1014.25 5l-1.6 1.61 4.75 4.74 1.6-1.6z"></path>{" "}
              </svg>
              <div>Electricians</div>
            </div>
            <div
              className="homeservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Home Cleaners")}
            >
              <svg>
                <path d="M22.463 17.505l-1.542-.744.79-3.543A1 1 0 0020.733 12h-.023c.001-.023.013-.041.013-.065a3.182 3.182 0 00-3.179-3.178 3.11 3.11 0 00-1.093.197 4.2 4.2 0 00-3.015-1.267 4.261 4.261 0 00-3.703 2.175V2a1 1 0 00-2 0v8.354a5.107 5.107 0 00-3.43 2.307 6.647 6.647 0 00-1.048 3.215 9.78 9.78 0 01-2.043 5.472A1 1 0 001.972 23H18.73a1 1 0 00.976-.782l.769-3.453 1.119.54a1 1 0 00.869-1.8zm-9.026-7.817a2.23 2.23 0 011.906 1.076 1.002 1.002 0 001.475.256 1.167 1.167 0 011.906.915c0 .024.011.042.013.065h-6.08a5.45 5.45 0 00-1.254-1.005 2.25 2.25 0 012.034-1.307zM8.7 12.262A3.436 3.436 0 0112.061 15H5.43c.112-.436.294-.851.538-1.23A3.1 3.1 0 018.7 12.264zM10.983 21H3.857a12.367 12.367 0 001.282-4h7.063a9.976 9.976 0 01-.697 4h-.522zm6.945 0h-4.29a14.74 14.74 0 00.467-5.952 5.44 5.44 0 00-.24-1.048h5.621l-.415 1.867-2.594-1.253a.998.998 0 00-1.38 1.23.998.998 0 00.51.571l3.017 1.457L17.928 21z"></path>{" "}
              </svg>
              <div>Home Cleaners</div>
            </div>
            <div
              className="homeservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "HVAC")}
            >
              <svg>
                <path d="M18.5 23h-13a2 2 0 01-2-2v-7H2a1 1 0 01-1-1v-2a1 1 0 01.33-.75l10.1-9a1 1 0 011.34 0l9.9 9A1 1 0 0123 11v2a1 1 0 01-1 1h-1.5v7a2 2 0 01-2 2zM3 12h1.5a1 1 0 011 1v8h13v-8a1 1 0 011-1H21v-.56l-8.91-8.09L3 11.45V12zm14.35.73a1 1 0 01-.03 1.42l-1.5 1.44a1 1 0 01-.69.29 1 1 0 01-.7-.29l-1.5-1.44a1 1 0 011.06-1.66 2.5 2.5 0 00-4.2-.9 1 1 0 11-1.47-1.35 4.49 4.49 0 017.74 2.38 1 1 0 011.29.11zm-3.23 4.01a1 1 0 011.46-.06 1 1 0 01.06 1.42 4.49 4.49 0 01-7.75-2.39 1 1 0 01-1.28-.1 1 1 0 010-1.42l1.5-1.45a1 1 0 011.39 0l1.5 1.45a1 1 0 01-.72 1.72.89.89 0 01-.36-.07 2.49 2.49 0 004.2.9z"></path>{" "}
              </svg>
              <div>HVAC</div>
            </div>
          </div>
          <div className="homeservices-right-dropdown">
            <div
              className="homeservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Landscaping")}
            >
              <svg>
                <path d="M21.42 21.093a22.243 22.243 0 00-4.032-1.434v-1.532a6.221 6.221 0 10-4.826-11.043 27.837 27.837 0 00-4.145-5.929 1.03 1.03 0 00-1.453 0c-.228.24-5.576 5.958-5.576 11.085a6.307 6.307 0 005.302 6.216v1.184a22.233 22.233 0 00-4.11 1.453 1 1 0 00.852 1.81 20.06 20.06 0 0117.136 0 1 1 0 00.852-1.81zM16.388 7.766a4.225 4.225 0 11-3.013 7.179 6.254 6.254 0 00.618-2.705 9.902 9.902 0 00-.598-3.193 4.177 4.177 0 012.993-1.281zm-13 4.474c0-3.31 2.909-7.202 4.302-8.877 1.394 1.675 4.303 5.568 4.303 8.877a4.303 4.303 0 01-3.303 4.174V12.25a1 1 0 10-2 0v4.164a4.303 4.303 0 01-3.302-4.174zm5.302 6.998v-.782a6.286 6.286 0 003.536-1.85 6.254 6.254 0 003.162 1.517v1.126a22.01 22.01 0 00-6.698-.01z"></path>{" "}
              </svg>
              <div>Landscaping</div>
            </div>
            <div
              className="homeservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Locksmiths")}
            >
              <svg>
                <path d="M12 23a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9z"></path>{" "}
                <path d="M16.916 9.719a4.916 4.916 0 10-8.072 3.737v3.362a3.156 3.156 0 106.312 0v-3.362a4.884 4.884 0 001.76-3.737zM12 6.803a2.916 2.916 0 110 5.832 2.916 2.916 0 010-5.832zm1.156 10.015a1.157 1.157 0 01-2.312 0v-2.335a4.477 4.477 0 002.312 0v2.335z"></path>
                <path d="M12 11.469a1.002 1.002 0 01-1-1v-1.5a1 1 0 012 0v1.5a.997.997 0 01-1 1z"></path>
              </svg>
              <div>Locksmiths</div>
            </div>
            <div
              className="homeservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Movers")}
            >
              <svg>
                <path d="M23.372 12.384l-2.478-4.84a1 1 0 00-.89-.544h-1.74l.437-2.735A2 2 0 0016.72 2H5.306a2 2 0 00-1.979 1.71L3.122 5H1.67a1 1 0 000 2h1.133l-.159 1H1.67a1 1 0 000 2h.656l-1.09 6.843A.999.999 0 002.224 18h1.435a3.458 3.458 0 106.787 0h2.419a3.457 3.457 0 106.79 0h1.803a1 1 0 00.97-.76l1.025-4.16a.997.997 0 00-.08-.696zM17.945 9h1.448l1.536 3h-3.463l.479-3zM7.052 20.104a1.458 1.458 0 110-2.917 1.458 1.458 0 010 2.916zM9.254 16a3.385 3.385 0 00-4.404 0H3.396l.955-6H8.67a1 1 0 000-2H4.669l.16-1h6.841a1 1 0 000-2H5.146l.16-1h11.417l-1.84 11.494c-.298.13-.576.3-.827.506H9.254zm7.005 4.104a1.458 1.458 0 110-2.917 1.458 1.458 0 010 2.916zM20.675 16H18.48a3.444 3.444 0 00-1.534-.745l.2-1.255h4.02l-.491 2z"></path>{" "}
              </svg>
              <div>Movers</div>
            </div>
            <div
              className="homeservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Plumbers")}
            >
              <svg>
                <path d="M17.87 15.64a1 1 0 011.58 0c.55.7 2.33 3.09 2.33 4.5a3.12 3.12 0 11-6.24 0c0-1.41 1.79-3.8 2.33-4.5zm.79 5.61c.6 0 1.093-.471 1.12-1.07A7 7 0 0018.66 18a7 7 0 00-1.12 2.14 1.12 1.12 0 001.12 1.11zM17 5a6 6 0 016 6v3a1 1 0 01-1 1h-7a1 1 0 01-1-1v-1h-1.28A2 2 0 0111 14H7a2 2 0 01-1.72-1H2a1 1 0 01-1-1V6a1 1 0 011-1h3.28A2 2 0 017 4h1V3H6a1 1 0 010-2h6a1 1 0 110 2h-2v1h1a2 2 0 011.72 1H17zM3 7v4h2V7H3zm4 5h4V6H7v6zm14 1v-2a4 4 0 00-4-4h-4v4h2a1 1 0 011 1v1h5z"></path>{" "}
              </svg>
              <div>Plumbers</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeServicesDropdown;
