import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import "./WriteAReview.css";
import WriteAReviewHeader from "./WriteAReviewHeader";
import WriteAReviewMain from "./WriteAReviewMain";

const WriteAReview = () => {
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  let yelpBusiness = location.state.currentBusiness;
  let currentRating = location.state.currentRating;
  let action = location.state.action;
  let business = location.state.business;
  let currentReview = location.state.review;

  return (
    <div className="write-a-review-page-container">
      <WriteAReviewHeader />
      <div className="write-a-review-bottom-container">
        <div className="write-a-review-main-container">
          <div className="write-a-review-inner-container">
            <WriteAReviewMain
              business={yelpBusiness}
              currentRating={currentRating}
              action={action}
              authorId={sessionUser.id}
              businessId={business.id}
              currentReview={currentReview}
            />
          </div>
        </div>
        <div className="recent-reviews-right-container"></div>
      </div>
    </div>
  );
};

export default WriteAReview;
