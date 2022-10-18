import "./ProfileReviews.css";
import yelpReviewHero from "../../assets/yelp-review-hero.PNG";

const ProfileReviews = () => {
  return (
    <>
      <div className="profile-options-container">
        <div className="profile-options-header">Reviews</div>
        <div className="profile-options-placeholder-info">
          It's your turn — review everything from your favorite burger to your
          favorite root canal. Write reviews to contribute to the Yelp community
          and help your friends find all the local gems that you love.
        </div>
        <div className="options-hero-img-container">
          <img src={yelpReviewHero} alt="yelp-review-hero-img" />
        </div>
      </div>
    </>
  );
};

export default ProfileReviews;
