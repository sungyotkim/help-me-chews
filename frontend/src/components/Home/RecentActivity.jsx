import "./RecentActivity.css";
import RecentActivityItem from "./RecentActivityItem";
import { useEffect, useState } from "react";

const RecentActivity = ({ reviews }) => {
  const [recentReviews, setRecentReviews] = useState(reviews.slice(0, 9));
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    setRecentReviews(reviews.slice(0, 9));
  }, [reviews]);

  const handleClick = () => {
    let prevLength = recentReviews.length;

    for (let i = 0; i <= prevLength + 9; i++) {
      setRecentReviews([]);
      let newArr = reviews.slice(0, i);
      setRecentReviews((oldArr) => [...oldArr, ...newArr]);
      if (newArr.length === 45) {
        setShowBtn(false);
      }
    }
  };

  if (recentReviews.length > 0) {
    return (
      <div className="recent-activity-main-container">
        <div className="recent-activity-second-container">
          <div className="recent-activity-title-container">Recent Activity</div>
          <div className="recent-activity-content-first-container">
            <div className="recent-activity-content-second-container">
              {recentReviews.map((review, i) => {
                return (
                  <RecentActivityItem recentActivityData={review} key={i} />
                );
              })}
            </div>
          </div>
          {showBtn && (
            <div
              className="recent-activity-see-more-container"
              onClick={handleClick}
            >
              <svg width={24} height={24}>
                <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
              </svg>
              <div>Show more activity</div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default RecentActivity;
