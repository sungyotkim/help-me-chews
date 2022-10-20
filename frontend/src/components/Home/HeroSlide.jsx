import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import "./HeroSlide.css";

const HeroSlide = ({ displaySlide }) => {
  const content = [
    "Explore the nightlife",
    "Find that perfect date night",
    "Get that (coffee) grind",
    "Like animals?",
  ];
  const btn = ["Nightlife", "Date night", "Cafe's", "Take me to the app!"];
  const width = ["95px", "114px", "77px", "158px"];
  const history = useHistory();

  const {
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
    hotAndNew,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
    setAllResultReviews,
  } = useContext(BusinessSearchContext);

  const findBusinessesFromBtn = async (searchTerm) => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    const res = await fetch(
      `/search/businesses/${searchTerm}/${location}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    let searchTerm = btn[displaySlide];
    setCurrentBusinessResults([]);
    setResultReviews([]);
    setAllResultReviews([]);
    const emptyResults = {};
    setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
    setLoading(true);
    setTerm(searchTerm);
    setLocation(location);
    setSearchedTerm(searchTerm);
    setSearchedLocation(location);
    findBusinessesFromBtn(searchTerm);

    if (history.location.pathname !== "/search") {
      let path = "/search";
      history.push(path);
    }
    console.log(searchTerm);
  };

  return (
    <div className="hero-slide-content">
      <div>{content[displaySlide]}</div>
      <div
        className="hero-slide-btn"
        style={{ width: `${width[displaySlide]}` }}
      >
        {displaySlide !== 3 && (
          <>
            <svg width={24} height={24}>
              <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
            </svg>
            <div onClick={handleClick}>{btn[displaySlide]}</div>
          </>
        )}
        {displaySlide === 3 && (
          <a
            href="https://sungyotkim.github.io/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/"
            target={"_blank"}
            rel="noreferrer"
          >
            <>{btn[displaySlide]}</>
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
