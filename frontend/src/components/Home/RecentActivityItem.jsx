import ReviewStars from "../ReviewStars/ReviewStars";
import "./RecentActivityItem.css";
import { Link } from "react-router-dom";

const RecentActivityItem = ({ recentActivityData }) => {
  let yelpInfo = recentActivityData.business.yelpInfo;
  let yelpReviews = recentActivityData.business.yelpInfo.yelpReviews;
  return (
    <div className="recent-activity-item-container">
      <div className="recent-activity-item-inner-container">
        <div className="recent-activity-item-header">
          <Link
            to={{ pathname: `/profile/${recentActivityData.user.id}` }}
            className="recent-activity-item-profile-photo-container"
          >
            <img
              src={recentActivityData.user.imageUrl}
              alt={recentActivityData.user.imageUrl}
            />
          </Link>
          <div className="recent-activity-item-title-container">
            <Link
              to={{ pathname: `/profile/${recentActivityData.user.id}` }}
              className="recent-activity-item-username"
            >
              {`${
                recentActivityData.user.firstName
              } ${recentActivityData.user.lastName.slice(0, 1)}.`}
            </Link>
            <div className="recent-activity-item-activity-description">
              Wrote a review
            </div>
          </div>
        </div>
        <div
          className="recent-activity-item-picture"
          style={{
            backgroundImage: `url(${recentActivityData.business.photo})`,
          }}
        ></div>
        <Link
          to={{
            pathname: `/business/${yelpInfo.id}`,
            state: { result: yelpInfo, reviewArr: yelpReviews },
          }}
          className="recent-activity-item-restaurant-name-container"
        >
          {recentActivityData.business.name}
        </Link>
        <div className="recent-activity-item-overall-review-rating">
          <ReviewStars
            starCount={recentActivityData.foodRating}
            size={20}
            starContainer={"tiny-review-star-container"}
          />
          <ReviewStars
            starCount={recentActivityData.serviceRating}
            size={20}
            starContainer={"tiny-review-star-container"}
            blueStars={true}
          />
        </div>
        <div className="recent-activity-item-review-summary-container">
          <p>{recentActivityData.text}</p>
          <Link
            to={{
              pathname: `/business/${yelpInfo.id}`,
              state: {
                result: yelpInfo,
                reviewArr: yelpReviews,
                goToReviews: true,
              },
            }}
            className="recent-activity-item-continue-btn"
          >
            Continue reading
          </Link>
        </div>
        {/* <div className="recent-activity-item-icon-container">
          <CustomToolTip title="Useful" arrow placement="bottom">
            <div>
              <svg width={24} height={24}>
                <path d="M12 1a11 11 0 0111 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 100-18 9 9 0 000 18zm0-15.82a5.56 5.56 0 013 10.26V17a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.56a5.56 5.56 0 013-10.26zM11 17h2v-1h-2v1zm2.56-3a3.58 3.58 0 10-3.12 0h3.12z"></path>
              </svg>
            </div>
          </CustomToolTip>
        </div> */}
      </div>
    </div>
  );
};

export default RecentActivityItem;
