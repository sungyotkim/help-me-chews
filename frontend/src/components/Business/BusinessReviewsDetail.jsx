import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  databaseReviews,
  location,
  business,
  currentBusiness,
}) => {
  return (
    <>
      {databaseReviews.map((review, i) => {
        return (
          <BusinessReview
            review={review}
            key={i}
            location={location}
            business={business}
            currentBusiness={currentBusiness}
          />
        );
      })}
    </>
  );
};

export default BusinessReviewsDetail;
