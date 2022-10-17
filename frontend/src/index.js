import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";
import { BusinessSearchContext } from "./contexts/BusinessSearchContext";
import { useState } from "react";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

function Root() {
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
  const [limit, setLimit] = useState(2);
  const [offset, setOffset] = useState(0);
  const [hotAndNew, setHotAndNew] = useState("null");
  const [currentBusinessResults, setCurrentBusinessResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultReviews, setResultReviews] = useState([]);
  const [allResultReviews, setAllResultReviews] = useState([]);

  // console.log(currentBusinessResults);
  // console.log(resultReviews);

  return (
    <Provider store={store}>
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BusinessSearchContext.Provider>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
