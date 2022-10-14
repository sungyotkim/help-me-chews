import "./RecentActivity.css";
import { recentActivityPlaceholder } from "./recent-activity-placeholder";
import RecentActivityItems from "./RecentActivityItems";

const RecentActivity = () => {
  return (
    <div className="recent-activity-main-container">
      <div className="recent-activity-second-container">
        <div className="recent-activity-title-container">Recent Activity</div>
        <div className="recent-activity-content-first-container">
          <div className="recent-activity-content-second-container">
            <RecentActivityItems
              recentActivityData={recentActivityPlaceholder}
            />
          </div>
        </div>
        <div className="recent-activity-see-more-container">
          <svg width={24} height={24}>
            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
          </svg>
          <div>Show more activity</div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
