import { createContext, useState } from "react";

export const BusinessSearchContext = createContext({});

export const BusinessSearchProvider = ({ children }) => {
  const [term, setTerm] = useState("null");
  const [location, setLocation] = useState("New York, NY");
  const [searchedTerm, setSearchedTerm] = useState("null");
  const [searchedLocation, setSearchedLocation] = useState("New York, NY");
  const [radius, setRadius] = useState("null");
  const [price, setPrice] = useState([]);
  const [openNow, setOpenNow] = useState("null");
  const [genderNeutralBathrooms, setGenderNeutralBathrooms] = useState("null");
  const [wheelchairAccessible, setWheelchairAccessible] = useState("null");
  const [businessId, setBusinessId] = useState("");
  const [businessResults, setBusinessResults] = useState({});
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [hotAndNew, setHotAndNew] = useState("null");
  const [currentBusinessResults, setCurrentBusinessResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultReviews, setResultReviews] = useState([]);
  const [allResultReviews, setAllResultReviews] = useState([]);

  return (
    <>
      <BusinessSearchContext.Provider
        value={{
          term,
          setTerm,
          location,
          setLocation,
          radius,
          setRadius,
          price,
          setPrice,
          openNow,
          setOpenNow,
          genderNeutralBathrooms,
          setGenderNeutralBathrooms,
          wheelchairAccessible,
          setWheelchairAccessible,
          businessId,
          setBusinessId,
          businessResults,
          setBusinessResults,
          limit,
          setLimit,
          offset,
          setOffset,
          searchedTerm,
          setSearchedTerm,
          searchedLocation,
          setSearchedLocation,
          hotAndNew,
          setHotAndNew,
          currentBusinessResults,
          setCurrentBusinessResults,
          loading,
          setLoading,
          resultReviews,
          setResultReviews,
          allResultReviews,
          setAllResultReviews,
        }}
      >
        {children}
      </BusinessSearchContext.Provider>
    </>
  );
};
