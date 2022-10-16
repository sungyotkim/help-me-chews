import "./RestaurantDropDown.css";
import { useContext, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { useHistory } from "react-router-dom";

const RestaurantDropDown = ({ styleBlack }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverStyle, setHoverStyle] = useState();
  const history = useHistory();
  const {
    setTerm,
    location,
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
    setLimit,
    setOffset,
    setHotAndNew,
  } = useContext(BusinessSearchContext);

  const handleMouseOver = () => {
    setIsHovering(true);
    setHoverStyle({ borderBottom: "4px solid #fa4d4d" });
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverStyle();
  };

  const handleClick = (e, value) => {
    e.preventDefault();
    setTerm(value);
    setCurrentBusinessResults([]);
    setResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
    setRadius("null");
    setPrice([]);
    setOpenNow("null");
    setGenderNeutralBathrooms("null");
    setWheelchairAccessible("null");
    setLimit(2);
    setOffset(0);
    setHotAndNew("null");
    setSearchedTerm(value);
    setSearchedLocation(location);
    if (history.location.pathname !== "/search") {
      let path = "/search";
      history.push(path);
    }
  };

  return (
    <div
      className="restaurants-dropdown-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="restaurants-dropdown" style={hoverStyle}>
        <span className="navbar-span" style={styleBlack}>
          Restaurants
        </span>
        <svg className="svg-dropdown-arrow" style={styleBlack}>
          <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
        </svg>
      </div>
      {isHovering && (
        <div className="restaurants-dropdown-revealed">
          <div className="restaurants-left-dropdown">
            <div className="restaurants-left-dropdown-option">
              <svg>
                <path d="M23.596 17a4.97 4.97 0 00-1.836-3.839L17.753 4.77a1.114 1.114 0 00-.464-.53.983.983 0 00-.432-.124c-.013 0-.023-.008-.036-.008h-4.843a1 1 0 000 2h1.656a3.534 3.534 0 00-.09 3.006l1.817 4.107A5.018 5.018 0 0013.703 16H9.748a2.537 2.537 0 01-1.488-2.107c0-1.486 1.971-1.895 2.05-1.91a1 1 0 00.815-.983V9a.998.998 0 00-1-1h-2.03V5a3.003 3.003 0 00-3-3H1.38a1 1 0 00-1 1v8a1 1 0 001 1h.28a6.56 6.56 0 00-1.115 5.203.99.99 0 00.807.77c0 .01-.005.017-.005.027a4.056 4.056 0 108.11 0h5.06a4.055 4.055 0 108.109 0l-.001-.006a.996.996 0 00.97-.994zM9.125 10v.249a3.987 3.987 0 00-2.865 3.644A3.909 3.909 0 006.86 16H2.405a4.571 4.571 0 011.621-3.646 1 1 0 00-.079-1.587L2.832 10h6.293zM2.38 4h2.715a1 1 0 011 1v3H2.832c-.153.007-.305.03-.452.072V4zM5.4 20.056A2.058 2.058 0 013.347 18h4.11a2.058 2.058 0 01-2.056 2.056zM21.425 16h-5.658a3.001 3.001 0 015.658 0zm-5.93-9.182c.175-.273.431-.484.732-.603l2.783 5.827c-.14-.012-.272-.042-.414-.042-.502.007-1 .09-1.477.248l-1.744-3.943a1.54 1.54 0 01.12-1.487zm3.076 13.238A2.058 2.058 0 0116.517 18h4.109a2.058 2.058 0 01-2.055 2.056z"></path>
              </svg>
              <div>Delivery</div>
            </div>
            <div
              className="restaurants-left-dropdown-option"
              onClick={(e) => handleClick(e, "Burgers")}
            >
              <svg>
                <path d="M23 14.5a3.45 3.45 0 00-1.17-2.61 1.21 1.21 0 00.05-.18 4.13 4.13 0 00.11-.86 1 1 0 00.51-.85V9a7 7 0 00-7-7h-7a7 7 0 00-7 7v1a1 1 0 00.51.86c.008.29.045.578.11.86v.17A3.49 3.49 0 002 16.94V19a3 3 0 003 3h14a3 3 0 003-3v-2.06a3.46 3.46 0 001-2.44zM20 11a2.37 2.37 0 01-1.88 2.11 2.49 2.49 0 01-2.55-.91 1 1 0 00-1.58 0 2.47 2.47 0 01-3.92 0 1 1 0 00-1.58 0 2.48 2.48 0 01-4.39-.93V11H20zM8.5 4h7a5 5 0 015 5h-17a5 5 0 015-5zm-3 11.06a4.49 4.49 0 003.79-.84 4.46 4.46 0 005.5 0 4.47 4.47 0 006-.47A1.49 1.49 0 0119.5 16h-15A1.5 1.5 0 013 14.5a1.45 1.45 0 01.21-.76 4.48 4.48 0 002.25 1.32h.04zM19 20H5a1 1 0 01-1-1v-1a4 4 0 00.5.05h15A4 4 0 0020 18v1a1 1 0 01-1 1z"></path>
              </svg>
              <div>Burgers</div>
            </div>
            <div
              className="restaurants-left-dropdown-option"
              onClick={(e) => handleClick(e, "Chinese")}
            >
              <svg>
                <path d="M21.88 6.37a1 1 0 00-.77-.37h-9.34l-.9-4.21a1 1 0 10-1.95.42L9.73 6H2.89a1 1 0 00-.97 1.21l3.21 15a1 1 0 001 .79h11.76a1 1 0 001-.79l3.21-15a1 1 0 00-.22-.84zM4.13 8h6l.57 2.67a1 1 0 001 .79h.22a1 1 0 00.76-1.18L12.2 8h6.49L6.7 20 4.13 8zM12 17.52L15.49 21h-7L12 17.52zM17.3 20l-3.88-3.9 6-6L17.3 20z"></path>
              </svg>
              <div>Chinese</div>
            </div>
            <div
              className="restaurants-left-dropdown-option"
              onClick={(e) => handleClick(e, "Italian")}
            >
              <svg>
                <path d="M22 17h-.21a10 10 0 00-4.59-6.53A5 5 0 0020 6V2a1 1 0 10-2 0v4a3 3 0 01-3 3h-3a4.47 4.47 0 00.65-3.42 1 1 0 00-.77-.77A4.44 4.44 0 007.75 6a1.63 1.63 0 00-.17.2A5.25 5.25 0 007 5.47a5 5 0 00-4.66-1.35 1 1 0 00-.77.76A5 5 0 006.07 11a10 10 0 00-3.86 6H2a1 1 0 000 2h.38l1.17 2.34A3 3 0 006.24 23h11.52a3 3 0 002.69-1.66L21.62 19H22a1 1 0 100-2zM10.71 6.72A2.38 2.38 0 0110 8.27 2.43 2.43 0 018.45 9a2.43 2.43 0 01.71-1.55 2.38 2.38 0 011.55-.73zM3.46 6a3 3 0 012.99 3 3 3 0 01-3-3h.01zM12 11a8 8 0 017.74 6h-2.57a5.34 5.34 0 00-10.34 0H4.26A8 8 0 0112 11zm3.07 6H8.94a3.35 3.35 0 016.13 0zm3.59 3.45a1 1 0 01-.9.55H6.24a1 1 0 01-.9-.55L4.62 19h14.76l-.72 1.45z"></path>
              </svg>
              <div>Italian</div>
            </div>
          </div>
          <div className="restaurants-right-dropdown">
            <div className="restaurants-right-dropdown-option">
              <svg>
                <path d="M18 20h-4a.998.998 0 01-1-1v-4a.998.998 0 011-1h4a.998.998 0 011 1v4a.998.998 0 01-1 1zm-3-2h2v-2h-2v2z"></path>

                <path d="M21 3h-4V2a1 1 0 00-2 0v1H9V2a1 1 0 00-2 0v1H3a1 1 0 00-1 1v16a3.003 3.003 0 003 3h14a3.004 3.004 0 003-3V4a.998.998 0 00-1-1zm-1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16v9zm0-11H4V5h3v1a1 1 0 002 0V5h6v1a1 1 0 002 0V5h3v4z"></path>
              </svg>
              <div>Reservations</div>
            </div>
            <div
              className="restaurants-right-dropdown-option"
              onClick={(e) => handleClick(e, "Japanese")}
            >
              <svg>
                <path d="M1.61 5.56A27.33 27.33 0 0122 5.41l.36.14a1 1 0 01.64.92v6a1 1 0 01-1 1V18a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.52a1 1 0 01-1-1v-6a1 1 0 01.61-.92zM20 12.84a25.17 25.17 0 00-16 0V18a1 1 0 001 1h14a1 1 0 001-1zm-9.22 3.11a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zm-4.56-1.67a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zm3.75-1.7a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM9 5.71a25.41 25.41 0 00-6 1.45v3.86c.33-.12.66-.2 1-.31zm10 .81l-3.25 3.23A27.64 27.64 0 0121 11V7.17c-.65-.25-1.31-.46-2-.65zm-6.95-1.01L7.7 9.86a26.92 26.92 0 014.3-.35c.38 0 .77.05 1.15.05L16.74 6a25.53 25.53 0 00-4.69-.49z"></path>
              </svg>
              <div>Japanese</div>
            </div>
            <div
              className="restaurants-right-dropdown-option"
              onClick={(e) => handleClick(e, "Mexican")}
            >
              <svg>
                <path d="M22.26 16.07a1.06 1.06 0 00.34-.26 3.81 3.81 0 00-.91-5.72 3.11 3.11 0 00-1.19-.46A3.72 3.72 0 0020 7.8a3.72 3.72 0 00-2.56-1.88 3.56 3.56 0 00-2.31.4 3.59 3.59 0 00-5.67-.76 2.66 2.66 0 00-.59.89 3.59 3.59 0 00-2.73-.28A3.64 3.64 0 003.7 8.55a3.71 3.71 0 00-.19 1.07 3.83 3.83 0 00-2.65 2.06 3.94 3.94 0 00.41 4c.126.164.291.295.48.38-.199.49-.36.995-.48 1.51a2 2 0 00.38 1.68 2 2 0 001.57.75h17.56a2 2 0 001.95-2.46 10.08 10.08 0 00-.47-1.47zm-19.6-3.54a1.9 1.9 0 011.38-1A2 2 0 005.5 9.72a2.2 2.2 0 01.1-.56 1.66 1.66 0 011.09-1.07 1.53 1.53 0 011.21.12c.471.26 1.03.31 1.54.14a2.07 2.07 0 001.13-1 2.07 2.07 0 01.31-.35 1.56 1.56 0 011.36-.44 1.68 1.68 0 011.17.83 2 2 0 001.22.94c.47.107.962.025 1.37-.23.319-.2.7-.27 1.07-.2a1.71 1.71 0 011.14.88c.16.263.245.563.25.87a2 2 0 001.59 1.92c.196.036.383.11.55.22.469.286.784.766.86 1.31a1.92 1.92 0 01-.19 1.06 11 11 0 00-18.6 0 1.89 1.89 0 01-.01-1.63zM20.78 18H3.21a9 9 0 0117.57 0z"></path>
              </svg>
              <div>Mexican</div>
            </div>
            <div
              className="restaurants-right-dropdown-option"
              onClick={(e) => handleClick(e, "Thai")}
            >
              <svg>
                <path d="M15.29 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm5.37 10.5A5.51 5.51 0 0123 22a1 1 0 01-1 1h-5.5a5.5 5.5 0 01-4.24-2H11C5.477 21 1 16.523 1 11a9.92 9.92 0 01.9-4.2l.1-.14A10 10 0 0111 1h8a1 1 0 011 1v3a5 5 0 01-5 5h-4a2 2 0 000 4h1.26a5.5 5.5 0 014.24-2H22a1 1 0 011 1 5.51 5.51 0 01-2.34 4.5zM11 3a8 8 0 00-6.45 3.29l3.73 2.79A4 4 0 0111 8h4a3 3 0 003-3V3h-7zM3.57 8.05A8.07 8.07 0 003 11a8 8 0 001.32 4.39l2.89-2.17A4.11 4.11 0 017 12a4.11 4.11 0 01.21-1.22L3.57 8.05zM11 19h.21a5.46 5.46 0 010-3H11a4 4 0 01-2.72-1.09l-2.66 2A8 8 0 0011 19zm5.5 2h4.35a3.51 3.51 0 00-3.35-2.5H17a1 1 0 110-2h.5a3.51 3.51 0 003.35-2.5H16.5a3.5 3.5 0 000 7z"></path>
              </svg>
              <div>Thai</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDropDown;
