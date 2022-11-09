import { createContext, useState } from "react";

export const ReviewsContext = createContext({});

export const ReviewsProvider = ({ children }) => {
  const [databaseReviews, setDatabaseReviews] = useState([]);

  return (
    <>
      <ReviewsContext.Provider
        value={{
          databaseReviews,
          setDatabaseReviews,
        }}
      >
        {children}
      </ReviewsContext.Provider>
    </>
  );
};
