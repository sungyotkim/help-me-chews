import { useLocation } from "react-router-dom";
import "./WriteAReview.css";
import WriteAReviewHeader from "./WriteAReviewHeader";
import WriteAReviewMain from "./WriteAReviewMain";

const WriteAReview = () => {
  const location = useLocation();
  //location = /writeareview/yelp_id
  //location.pathname.slice(14) gives id

  let business = { name: "Eli's Market at Grand Central" };

  return (
    <div className="write-a-review-page-container">
      <WriteAReviewHeader />
      <div className="write-a-review-bottom-container">
        <div className="write-a-review-main-container">
          <div className="write-a-review-inner-container">
            <WriteAReviewMain business={business} />
          </div>
        </div>
        <div className="recent-reviews-right-container"></div>
      </div>
    </div>
  );
};

export default WriteAReview;
