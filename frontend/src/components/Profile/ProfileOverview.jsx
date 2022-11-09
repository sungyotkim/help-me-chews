import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ReviewStars from "../ReviewStars/ReviewStars";
import "./ProfileOverview.css";

const ProfileOverview = ({ reviews }) => {
  const [redirect, setRedirect] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState();
  const history = useHistory();

  const handleClick = (e, business) => {
    e.preventDefault();
    setRedirect(true);
    setSelectedBusiness(business);
  };

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
      history.push({
        pathname: `/business/${selectedBusiness.yelpInfo.id}`,
        state: {
          result: selectedBusiness.yelpInfo,
          reviewArr: selectedBusiness.yelpReviews,
          goToReviews: true,
        },
      });
    }

    return () => {
      setRedirect(true);
      setSelectedBusiness();
    };
  }, [redirect]);

  return (
    <>
      <div className="profile-overview-container">
        {/* <div className="profile-overview-header">Friend requests</div>
        <div className="profile-overview-header-content">
          No new friend requests at this time. (coming soon)
        </div> */}
        <div className="profile-recent-activity-header">Recent Activity</div>
        {reviews.length === 0 && (
          <div className="profile-recent-activity-content">
            We don't have any recent activity for you right now.
          </div>
        )}
        {reviews.length > 0 &&
          reviews.map((review, i) => {
            let year = review.updatedAt.slice(0, 4);
            let month = review.updatedAt.slice(5, 7);
            let day = review.updatedAt.slice(8, 10);
            return (
              <div className="profile-overview-review-container" key={i}>
                <div className="profile-review-header">
                  <img
                    src={review.business.photo}
                    alt={review.business.photo}
                  />
                  <div>
                    <div
                      className="review-business-name-container"
                      onClick={(e) => handleClick(e, review.business)}
                    >
                      {review.business.name}
                    </div>
                    <div className="profile-review-stars">
                      <ReviewStars
                        starCount={review.foodRating}
                        size={20}
                        starContainer={"tiny-review-star-container"}
                      />
                      <ReviewStars
                        starCount={review.serviceRating}
                        size={20}
                        starContainer={"tiny-review-star-container"}
                        blueStars={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-review-body">
                  <div>{`${month}/${day}/${year}`}</div>
                  <div>{review.text}</div>
                </div>
                {review.photos && review.photos.length < 3 && (
                  <div className="profile-review-photos-container">
                    {review.photos.map((photo) => {
                      return (
                        <div className="profile-review-photo" key={photo.url}>
                          <img src={photo.url} />
                        </div>
                      );
                    })}
                  </div>
                )}
                {review.photos && review.photos.length > 2 && (
                  <div className="profile-review-photos-container-small">
                    {review.photos.map((photo) => {
                      return (
                        <div
                          className="profile-review-photo-small"
                          key={photo.url}
                        >
                          <img src={photo.url} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProfileOverview;
