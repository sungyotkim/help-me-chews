import { createContext, useState } from "react";

export const ReviewsContext = createContext({});

export const ReviewsProvider = ({ children }) => {
  const [databaseReviews, setDatabaseReviews] = useState([]);
  const [sortedDatabaseReviews, setSortedDatabaseReviews] = useState([]);

  return (
    <>
      <ReviewsContext.Provider
        value={{
          databaseReviews,
          setDatabaseReviews,
          sortedDatabaseReviews,
          setSortedDatabaseReviews,
        }}
      >
        {children}
      </ReviewsContext.Provider>
    </>
  );
};
