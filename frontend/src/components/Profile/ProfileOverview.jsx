import "./ProfileOverview.css";

const ProfileOverview = () => {
  return (
    <>
      <div className="profile-overview-container">
        <div className="profile-overview-header">Friend requests</div>
        <div className="profile-overview-header-content">
          No new friend requests at this time.
        </div>
        <div className="profile-recent-activity-header">Recent Activity</div>
        <div className="profile-recent-activity-content">
          We don't have any recent activity for you right now.
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
