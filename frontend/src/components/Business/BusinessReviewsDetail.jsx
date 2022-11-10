import { useContext } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  location,
  business,
  currentYelpBusiness,
  yelpBusinessReviews,
}) => {
  const { databaseReviews, sortedDatabaseReviews } = useContext(ReviewsContext);

  if (sortedDatabaseReviews.length > 0) {
    return (
      <>
        {sortedDatabaseReviews.map((review, i) => {
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
  } else {
    return (
      <>
        {databaseReviews.map((review, i) => {
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
  }
};

export default BusinessReviewsDetail;
