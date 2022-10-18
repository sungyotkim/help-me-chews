import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({
  databaseReviews,
  location,
  business,
  currentYelpBusiness,
  setDatabaseReviews,
  yelpBusinessReviews,
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
            yelpBusinessReviews={yelpBusinessReviews}
          />
        );
      })}
    </>
  );
};

export default BusinessReviewsDetail;
