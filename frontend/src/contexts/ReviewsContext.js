import { createContext, useState } from "react";

export const ReviewsContext = createContext({});

export const ReviewsProvider = ({ children }) => {
  const [databaseReviews, setDatabaseReviews] = useState([]);
  const [sortedDatabaseReviews, setSortedDatabaseReviews] = useState([]);
  const [filteredDatabaseReviews, setFilteredDatabaseReviews] = useState([]);
  const [noMatches, setNoMatches] = useState(false);
  const [reviewTextSearchResults, setReviewTextSearchResults] = useState([]);

  return (
    <>
      <ReviewsContext.Provider
        value={{
          databaseReviews,
          setDatabaseReviews,
          sortedDatabaseReviews,
          setSortedDatabaseReviews,
          filteredDatabaseReviews,
          setFilteredDatabaseReviews,
          noMatches,
          setNoMatches,
          reviewTextSearchResults,
          setReviewTextSearchResults,
        }}
      >
        {children}
      </ReviewsContext.Provider>
    </>
  );
};
