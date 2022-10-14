import { useContext, useEffect, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";

const SearchPagePriceFilter = ({ priceOption, filters, setFilters }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    price,
    setPrice,
    term,
    location,
    radius,
    openNow,
    genderNeutralBathrooms,
    wheelchairAccessible,
    limit,
    offset,
    setBusinessResults,
    hotAndNew,
    setCurrentBusinessResults,
    setLoading,
    setResultReviews,
  } = useContext(BusinessSearchContext);

  let borderStyle = {
    border: "1px solid rgb(200, 201, 202)",
    borderLeft: "none",
  };

  if (priceOption === "$") {
    borderStyle = {
      borderRadius: "16px 0 0 16px",
      border: "1px solid rgb(200, 201, 202)",
    };
  } else if (priceOption === "$$$$") {
    borderStyle = {
      borderRadius: "0 16px 16px 0",
      border: "1px solid rgb(200, 201, 202)",
      borderLeft: "none",
    };
  }

  const fetchBusinessesWithPriceChange = async () => {
    let priceString = "null";
    if (price.length > 0) {
      priceString = price.join(", ");
    }
    let res = await fetch(
      `/search/businesses/${term}/${location}/${radius}/${priceString}/${openNow}/${genderNeutralBathrooms}/${wheelchairAccessible}/${limit}/${offset}/${hotAndNew}`
    );
    const newBusinesses = await res.json();
    setBusinessResults((businessResults) => ({
      ...businessResults,
      ...newBusinesses,
    }));
  };

  const handleInputClick = (e) => {
    e.preventDefault();
    if (isSelected) {
      setIsSelected(false);
      const priceIndex = price.indexOf(priceOption.length);
      if (priceIndex > -1) {
        price.splice(priceIndex, 1);
      }
      setPrice(price);
      setCurrentBusinessResults([]);
      setResultReviews([]);
      const emptyResults = {};
      setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
      setLoading(true);
      fetchBusinessesWithPriceChange();
      let priceIdx = filters.indexOf(priceOption);
      filters.splice(priceIdx, 1);
      setFilters(filters);
    } else {
      setIsSelected(true);
      price.push(priceOption.length);
      setPrice(price);
      setCurrentBusinessResults([]);
      setResultReviews([]);
      const emptyResults = {};
      setBusinessResults((oldResults) => ({ ...oldResults, ...emptyResults }));
      setLoading(true);
      fetchBusinessesWithPriceChange();
      filters.push(priceOption);
      setFilters(filters);
    }
    setPrice(price);
    return;
  };

  useEffect(() => {
    if (price.length === 0) {
      setIsSelected(false);
    }
  }, [price]);

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

  let hovered = "";
  if (isHovered) {
    hovered = "price-option-hovered";
  }
  let selected = "";
  if (isSelected) {
    selected = "price-option-selected";
  }

  return (
    <div
      className={`search-results-filter-price-option ${hovered} ${selected}`}
      onClick={handleInputClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={borderStyle}
    >
      <div>{priceOption}</div>
    </div>
  );
};

export default SearchPagePriceFilter;
