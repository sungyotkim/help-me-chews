import { useState } from "react";
import { useContext, useEffect } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  location,
  business,
  currentYelpBusiness,
  yelpBusinessReviews,
}) => {
  const { databaseReviews, sortedDatabaseReviews, filteredDatabaseReviews } =
    useContext(ReviewsContext);
  const [reviews, setReviews] = useState(databaseReviews);

  useEffect(() => {
    if (sortedDatabaseReviews.length > 0) {
      setReviews(sortedDatabaseReviews);
    } else if (filteredDatabaseReviews.length > 0) {
      setReviews(filteredDatabaseReviews);
    } else {
      setReviews(databaseReviews);
    }

    return () => {
      setReviews(databaseReviews);
    };
  }, [sortedDatabaseReviews, filteredDatabaseReviews]);

  return (
    <>
      {reviews.map((review, i) => {
        return (
          <BusinessReview
            review={review}
            key={i}
            location={location}
            business={business}
            currentYelpBusiness={currentYelpBusiness}
            yelpBusinessReviews={yelpBusinessReviews}
          />
        );
      })}
    </>
  );
};

export default BusinessReviewsDetail;
