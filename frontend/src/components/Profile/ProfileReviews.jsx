import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProfileReviews.css";
import yelpReviewHero from "../../assets/yelp-review-hero.PNG";
import ReviewStars from "../ReviewStars/ReviewStars";

const ProfileReviews = ({ reviews }) => {
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

  if (reviews && reviews.length === 0) {
    return (
      <>
        <div className="profile-options-container">
          <div className="profile-options-header">Reviews</div>
          <div className="profile-options-placeholder-info">
            It's your turn — review everything from your favorite burger to your
            favorite root canal. Write reviews to contribute to the Yelp
            community and help your friends find all the local gems that you
            love.
          </div>
          <div className="options-hero-img-container">
            <img src={yelpReviewHero} alt="yelp-review-hero-img" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="profile-options-container">
          <div className="profile-options-header">Reviews</div>
          {reviews.map((review, i) => {
            let year = review.updatedAt.slice(0, 4);
            let month = review.updatedAt.slice(5, 7);
            let day = review.updatedAt.slice(8, 10);
            return (
              <div className="profile-review-container" key={i}>
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
  }
};

export default ProfileReviews;
