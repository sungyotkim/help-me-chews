import ReviewStars from "../ReviewStars/ReviewStars";
import "./RecentActivityItems.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2d2e2f",
    fontSize: 12,
    boxShadow: "rgb(0 0 0 / 15%) 0 0 18px",
    borderRadius: "4px",
    padding: "12px 16px",
    position: "relative",
    top: -8,
    fontFamily: "'Poppins', Arial, Helvetica, sans-serif;",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#2d2e2f",
  },
}));

const RecentActivityItem = (props) => {
  let recentActivityData = props.recentActivityData;

  return recentActivityData.map((data, i) => {
    return (
      <div className="recent-activity-item-container" key={i}>
        <div className="recent-activity-item-inner-container">
          <div className="recent-activity-item-header">
            <div className="recent-activity-item-profile-photo-container">
              <img src={data.userImage} alt={data.userImage} />
            </div>
            <div className="recent-activity-item-title-container">
              <div className="recent-activity-item-username">
                {data.username}
              </div>
              <div className="recent-activity-item-activity-description">
                Wrote a review
              </div>
            </div>
          </div>
          <div
            className="recent-activity-item-picture"
            style={{ backgroundImage: `url(${data.restaurantImage})` }}
          ></div>
          <div className="recent-activity-item-restaurant-name-container">
            {data.restaurantName}
          </div>
          <div className="recent-activity-item-overall-review-rating">
            <ReviewStars
              starCount={data.reviewRating}
              size={20}
              starContainer={"tiny-review-star-container"}
            />
          </div>
          <div className="recent-activity-item-review-summary-container">
            <p>{data.reviewContent}</p>
            <div className="recent-activity-item-continue-btn">
              Continue reading
            </div>
          </div>
          <div className="recent-activity-item-icon-container">
            <CustomToolTip title="Useful" arrow placement="bottom">
              <div>
                <svg width={24} height={24}>
                  <path d="M12 1a11 11 0 0111 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 100-18 9 9 0 000 18zm0-15.82a5.56 5.56 0 013 10.26V17a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.56a5.56 5.56 0 013-10.26zM11 17h2v-1h-2v1zm2.56-3a3.58 3.58 0 10-3.12 0h3.12z"></path>
                </svg>
              </div>
            </CustomToolTip>
          </div>
        </div>
      </div>
    );
  });
};

export default RecentActivityItem;
