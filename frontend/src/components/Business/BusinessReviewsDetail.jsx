import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  databaseReviews,
  location,
  business,
  currentYelpBusiness,
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
            currentYelpBusiness={currentYelpBusiness}
            databaseReviews={databaseReviews}
            setDatabaseReviews={setDatabaseReviews}
          />
        );
      })}
    </>
  );
};

export default BusinessReviewsDetail;
