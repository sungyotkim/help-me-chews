import "./AutoServicesDropdown.css";
import { useContext, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { useHistory } from "react-router-dom";

const AutoServicesDropdown = ({ styleBlack }) => {
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
      className="autoservices-dropdown-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="autoservices-dropdown" style={hoverStyle}>
        <span className="navbar-span" style={styleBlack}>
          Auto Services
        </span>
        <svg className="svg-dropdown-arrow" style={styleBlack}>
          <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
        </svg>
      </div>
      {isHovering && (
        <div className="autoservices-dropdown-revealed">
          <div className="autoservices-left-dropdown">
            <div
              className="autoservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Auto Repair")}
            >
              <svg>
                <path d="M21.81 16.07A4.11 4.11 0 0123 19.06 4.06 4.06 0 0121.67 22 4 4 0 0119 23a4.29 4.29 0 01-3.07-1.34l-6.54-6.53a7.47 7.47 0 01-1.26.11 7.09 7.09 0 01-5.05-2.09 7.17 7.17 0 01-1.42-8 1 1 0 011.62-.29l3.6 3.6 1.59-1.59-3.61-3.59a1 1 0 01.29-1.62 7.13 7.13 0 0110 7.75l6.66 6.66zM4.5 11.78h-.01a5.13 5.13 0 103-8.72l3.09 3.11a1 1 0 010 1.41l-3 3a1 1 0 01-1.41 0L3.05 7.46a5.14 5.14 0 001.45 4.32zm15.81 8.71l.03.02a2.07 2.07 0 00.08-3l-6-6a6.93 6.93 0 01-1.25 1.68 6.69 6.69 0 01-1.67 1.25l5.81 5.85a2.2 2.2 0 003 .2z"></path>{" "}
              </svg>
              <div>Auto Repair</div>
            </div>
            <div
              className="autoservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Auto Detailing")}
            >
              <svg>
                <path d="M21 13h-9v-.25a1 1 0 00-.29-.71L7 7.35V7a1 1 0 00.61-.26l1-.93 2.65 2.65a1 1 0 001.41 0 1 1 0 000-1.41l-2-2H12a1 1 0 001-1V1a1 1 0 00-1-1H5a5 5 0 00-5 5v1a1 1 0 001 1v13a2 2 0 002 2h16a3 3 0 003-3v-5a1 1 0 00-1-1zm-1 2v1h-9v-1h9zM2 5a3 3 0 013-3h6v1H9.09a1 1 0 00-.68.27L6.54 5H2zm1 15V7h2v.77a1 1 0 00.29.71L9.87 13A1 1 0 009 14v5a3 3 0 00.18 1H3zm16 0h-7a1 1 0 01-1-1v-1h9v1a1 1 0 01-1 1z"></path>{" "}
              </svg>
              <div>Auto Detailing</div>
            </div>
            <div
              className="autoservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Body Shops")}
            >
              <svg>
                <path d="M21.73 18.54l-5-8.66a1 1 0 00-1-1.73A2 2 0 0013 7.42L8 10.3v-.94a4 4 0 003-3.86V1a1 1 0 00-1-1H4a1 1 0 00-1 1v4.5a4 4 0 003 3.86v2.1l-3.4 2a3 3 0 00-1.44 3.14l-.16.05A1 1 0 00.64 18a1 1 0 00.87.5.87.87 0 00.49-.12l.16-.09a3 3 0 003.44.33L8 17.23v3.4a1 1 0 102 0v-4.55l1.67-1 2 3.46A5 5 0 0018 21.08a5 5 0 002.5-.67l.86-.5a1 1 0 00.37-1.37zM5 2h4v1H5V2zm0 3.5V5h4v.5a2 2 0 11-4 0zm10.4 12.08l-2-3.46a2 2 0 00-1.74-1 2 2 0 00-1 .26l-6.06 3.5a1 1 0 01-1.36-.36 1 1 0 01-.1-.76 1 1 0 01.46-.61l10.4-6 .5.87 5 8.66a3 3 0 01-4.1-1.1z"></path>{" "}
              </svg>
              <div>Body Shops</div>
            </div>
            <div
              className="autoservices-left-dropdown-option"
              onClick={(e) => handleClick(e, "Car Wash")}
            >
              <svg>
                <path d="M20.41 14.334A3.442 3.442 0 0017.66 13H7.401l.546-1.912A1.506 1.506 0 019.39 10h2.67a1 1 0 100-2H9.39a3.516 3.516 0 00-3.367 2.54l-.003.01H4.365a.998.998 0 00-1 1V12a1 1 0 00.254.666l.941 1.053a3.412 3.412 0 00-.628.615 3.24 3.24 0 00-.582 2.818l.81 3.1c.002.01.008.018.01.027V22a1 1 0 001 1h2.5a.998.998 0 001-1v-1h7v1a.998.998 0 001 1h2.5a.998.998 0 001-1v-1.722c.004-.01.01-.016.013-.026l.808-3.1a3.238 3.238 0 00-.582-2.818zM5.513 15.557A1.457 1.457 0 016.68 15h10.98a1.458 1.458 0 011.166.557 1.249 1.249 0 01.229 1.09L18.442 19H5.9l-.614-2.352a1.249 1.249 0 01.229-1.091z"></path>
                <path d="M16.42 17.646a1 1 0 100-2 1 1 0 000 2zm-8.5 0a1 1 0 100-2 1 1 0 000 2zm9.75-5.894a1 1 0 01-.97-.765 4.866 4.866 0 00-3.6-3.598 1 1 0 010-1.944 4.866 4.866 0 003.6-3.598 1 1 0 011.943 0 4.863 4.863 0 003.598 3.598 1 1 0 010 1.944 4.864 4.864 0 00-3.598 3.597 1 1 0 01-.972.766zm-1.88-5.335a6.839 6.839 0 011.88 1.88 6.821 6.821 0 011.88-1.88 6.821 6.821 0 01-1.88-1.88 6.839 6.839 0 01-1.88 1.88zM7.296 4.014a3.3 3.3 0 01-2.444-2.445.5.5 0 00-.973 0 3.303 3.303 0 01-2.444 2.445.5.5 0 000 .972 3.303 3.303 0 012.444 2.445.5.5 0 00.973 0 3.3 3.3 0 012.444-2.445.5.5 0 000-.972z"></path>
              </svg>
              <div>Car Wash</div>
            </div>
          </div>
          <div className="autoservices-right-dropdown">
            <div
              className="autoservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Car Dealers")}
            >
              <svg>
                <path d="M19 0a3 3 0 013 3v6a3 3 0 01-2 2.82V20a1 1 0 01-.55.89l-2 1a1 1 0 01-.9 0l-2-1A1 1 0 0114 20v-8.22A3 3 0 0112 9l-.07-3.73-1.65 1.65A3 3 0 0111 8.84V18a3 3 0 01-3 3H3a3 3 0 01-3-3V8.84a3 3 0 01.89-2.15l3.2-3.1a2 2 0 012.78 0l2 1.91L12 2.41a3 3 0 01.77-1.52A3 3 0 0114.9 0H19zM9 18V8.84a1 1 0 00-.3-.71L5.5 5 2.3 8.12a1 1 0 00-.3.72V18a1 1 0 001 1h5a1 1 0 001-1zm9 1.38V12h-2v7.38l1 .5 1-.5zM20 9V3a1 1 0 00-1-1h-4.1a1 1 0 00-1 1l.1 6a1 1 0 001 1h4a1 1 0 001-1zM5.5 10.37a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM17.5 5h-1a1 1 0 010-2h1a1 1 0 110 2z"></path>
              </svg>
              <div>Car Dealers</div>
            </div>
            <div
              className="autoservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Oil Change")}
            >
              <svg>
                <path d="M11 1a1 1 0 011 1v2h.65a1 1 0 01.74.33l6.35 7A1 1 0 0120 12v8a3 3 0 01-3 3H7a3 3 0 01-3-3V5a1 1 0 011-1V2a1 1 0 011-1zm1.2 5H6v14a1 1 0 001 1h10a1 1 0 001-1v-7.61L12.2 6zm-.55 3.678a1 1 0 01.83.442c.62.92 2.67 4.07 2.67 5.55a3.43 3.43 0 01-3.5 3.33 3.43 3.43 0 01-3.5-3.33c0-1.48 2-4.63 2.67-5.55a1 1 0 01.83-.442zm0 2.852a11.15 11.15 0 00-1.5 3.14 1.42 1.42 0 001.5 1.33 1.43 1.43 0 001.484-1.195l.016-.135a11.32 11.32 0 00-1.5-3.14zM10 3H7v1h3V3z"></path>
              </svg>
              <div>Oil Change</div>
            </div>
            <div
              className="autoservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Parking")}
            >
              <svg>
                <path d="M12 1a11 11 0 0111 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 100-18 9 9 0 000 18zm.5-14a3.5 3.5 0 010 7H11v2.5a1 1 0 01-2 0V8a1 1 0 011-1h2.5zm0 5a1.5 1.5 0 000-3H11v3h1.5z"></path>{" "}
              </svg>
              <div>Parking</div>
            </div>
            <div
              className="autoservices-right-dropdown-option"
              onClick={(e) => handleClick(e, "Towing")}
            >
              <svg>
                <path d="M20 6h-6a.986.986 0 00-.966.833L2.476 1.12A1 1 0 001 2v2.803a1.001 1.001 0 00.415.811l.526.38V9.66a.999.999 0 001 1 .397.397 0 010 .794 1 1 0 000 2 2.393 2.393 0 001-4.568v-1.45L13 13.963V14H2a.998.998 0 00-1 1v4a1 1 0 001 1h1.462a2.997 2.997 0 005.994 0h5.088a2.999 2.999 0 005.997-.034l-.002-.02A3 3 0 0023 17V9a3.003 3.003 0 00-3-3zM3 4.291v-.613L13 9.09v2.408L3 4.291zm3.459 16.675a1 1 0 110-2 1 1 0 010 2zm11.082 0a1 1 0 110-2 1 1 0 010 2zM21 14h-1a1 1 0 01-1-1v-2h2v3zm-3-5a1 1 0 00-1 1v3a3.004 3.004 0 003 3h1v1a1 1 0 01-1 1h-.21a2.962 2.962 0 00-4.497 0H8.707a2.96 2.96 0 00-4.496 0H3v-2h11a.998.998 0 001-1V8h5a1 1 0 011 1h-3z"></path>{" "}
              </svg>
              <div>Towing</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoServicesDropdown;
