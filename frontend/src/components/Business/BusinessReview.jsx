import "./BusinessReview.css";

const BusinessReview = ({ review, location }) => {
  // console.log(review);

  let userProfilePhoto = (review.user.image_url ||=
    "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png");

  let userFriends = (review.user.friends ||= 0);
  let userReviews = (review.user.reviews ||= 0);

  if (review.user.location) {
    location = review.user.location;
  }

  return (
    <div className="review-main-container">
      <div className="review-header-container">
        <div className="review-header-info-container">
          <div className="review-user-profile-picture-container">
            <img src={userProfilePhoto} alt={review.user.name} />
          </div>
          <div className="review-user-info-container">
            <div className="review-user-info-top">
              <div className="review-user-name">{review.user.name}</div>
              <div className="review-user-location">{location}</div>
            </div>
            <div className="review-user-icons">
              <div className="user-icon-container">
                <svg width={16} height={16}>
                  <path d="M11.231 1.25H4.769A3.523 3.523 0 001.25 4.77v6.46a3.523 3.523 0 003.519 3.52h6.462a3.524 3.524 0 003.519-3.52V4.77a3.523 3.523 0 00-3.519-3.52zm-6.462 1.5h6.462a2.022 2.022 0 012.019 2.02v6.223a8.71 8.71 0 00-2.218-1.177c.164-.395.249-.819.25-1.247V7.562a3.281 3.281 0 10-6.563 0v1.007c0 .428.085.852.249 1.247-.792.283-1.54.68-2.218 1.177V4.77a2.022 2.022 0 012.019-2.02zm5.012 5.82a1.781 1.781 0 01-3.562 0V7.561a1.781 1.781 0 013.562 0v1.007zm1.45 4.68H4.769a2.007 2.007 0 01-1.49-.668.415.415 0 01.15-.237 7.259 7.259 0 012.498-1.254 3.21 3.21 0 004.144.002c.907.25 1.756.676 2.5 1.252.076.06.129.143.15.237a2.007 2.007 0 01-1.49.668z"></path>
                </svg>
                <div>{userFriends}</div>
              </div>
              <div className="user-icon-container">
                <svg width={16} height={16}>
                  <path d="M11.231 14.75H4.769a3.524 3.524 0 01-3.519-3.52V4.77a3.523 3.523 0 013.519-3.52h6.462a3.523 3.523 0 013.519 3.52v6.46a3.523 3.523 0 01-3.519 3.52zm-6.462-12A2.022 2.022 0 002.75 4.77v6.46a2.022 2.022 0 002.019 2.02h6.462a2.022 2.022 0 002.019-2.02V4.77a2.022 2.022 0 00-2.019-2.02H4.769z"></path>
                  <path d="M11.226 7.229a.5.5 0 00-.404-.341l-1.64-.239-.734-1.486a.522.522 0 00-.896 0L6.818 6.65l-1.64.239a.5.5 0 00-.277.853l1.187 1.156-.28 1.633a.5.5 0 00.725.528L8 10.286l1.467.772a.498.498 0 00.725-.528l-.28-1.633L11.1 7.741a.5.5 0 00.127-.512z"></path>
                </svg>
                <div>{userReviews}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-header-menu-container">
          <div className="review-header-menu-btn">
            <svg width={24} height={24}>
              <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessReview;
