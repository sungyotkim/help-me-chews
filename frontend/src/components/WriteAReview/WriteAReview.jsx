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

  let business = location.state.currentBusiness;
  let yelpId = location.pathname.slice(14);
  let currentRating = location.state.currentRating;

  return (
    <div className="write-a-review-page-container">
      <WriteAReviewHeader />
      <div className="write-a-review-bottom-container">
        <div className="write-a-review-main-container">
          <div className="write-a-review-inner-container">
            <WriteAReviewMain
              business={business}
              yelpId={yelpId}
              currentRating={currentRating}
            />
          </div>
        </div>
        <div className="recent-reviews-right-container"></div>
      </div>
    </div>
  );
};

export default WriteAReview;
