import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  databaseReviews,
  location,
  business,
  currentBusiness,
  setDatabaseReviews,
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
            databaseReviews={databaseReviews}
            setDatabaseReviews={setDatabaseReviews}
          />
        );
      })}
    </>
  );
};

export default BusinessReviewsDetail;
