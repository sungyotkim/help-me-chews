import { createContext, useState } from "react";

export const ReviewsContext = createContext({});

export const ReviewsProvider = ({ children }) => {
  const [databaseReviews, setDatabaseReviews] = useState([]);
  const [sortedDatabaseReviews, setSortedDatabaseReviews] = useState([]);
  const [filteredDatabaseReviews, setFilteredDatabaseReviews] = useState([]);

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
        }}
      >
        {children}
      </ReviewsContext.Provider>
    </>
  );
};
