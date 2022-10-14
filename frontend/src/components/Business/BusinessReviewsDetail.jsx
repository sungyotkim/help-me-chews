import BusinessReview from "./BusinessReview";
const BusinessReviewsDetail = ({ databaseReviews, location }) => {
  return (
    <>
      {databaseReviews.map((review, i) => {
        return <BusinessReview review={review} key={i} location={location} />;
      })}
    </>
  );
};

export default BusinessReviewsDetail;
