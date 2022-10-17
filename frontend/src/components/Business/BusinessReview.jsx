import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReviewStars from "../ReviewStars/ReviewStars";
import "./BusinessReview.css";

const BusinessReview = ({ review, location, business, currentBusiness }) => {
  const [usefulBtnClicked, setUsefulBtnClicked] = useState(false);
  const [funnyBtnClicked, setFunnyBtnClicked] = useState(false);
  const [coolBtnClicked, setCoolBtnClicked] = useState(false);
  const [showReviewMenu, setShowReviewMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const node = useRef();

  let month = review.time_created
    ? review.time_created.slice(5, 7)
    : review.updatedAt.slice(5, 7);
  let day = review.time_created
    ? review.time_created.slice(8, 10)
    : review.updatedAt.slice(8, 10);
  let year = review.time_created
    ? review.time_created.slice(0, 4)
    : review.updatedAt.slice(0, 4);
  if (month[0] === "0") month = month[1];
  if (day[0] === "0") day = day[1];
  let date = month + "/" + day + "/" + year;

  let userProfilePhoto = (review.user.image_url ||=
    "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png");

  let userFriends = (review.user.friends ||= 0);
  let userReviews = (review.user.reviews ||= 0);

  if (review.user.location) {
    location = review.user.location;
  }

  const [useful, setUseful] = useState((review.useful ||= 0));
  const [funny, setFunny] = useState((review.funny ||= 0));
  const [cool, setCool] = useState((review.cool ||= 0));

  const handleUsefulBtnClicked = () => {
    if (usefulBtnClicked) {
      setUseful(useful - 1);
      setUsefulBtnClicked(false);
    } else {
      setUseful(useful + 1);
      setUsefulBtnClicked(true);
    }
  };

  const handleFunnyBtnClicked = () => {
    if (funnyBtnClicked) {
      setFunny(funny - 1);
      setFunnyBtnClicked(false);
    } else {
      setFunny(funny + 1);
      setFunnyBtnClicked(true);
    }
  };

  const handleCoolBtnClicked = () => {
    if (coolBtnClicked) {
      setCool(cool - 1);
      setCoolBtnClicked(false);
    } else {
      setCool(cool + 1);
      setCoolBtnClicked(true);
    }
  };

  const clickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowReviewMenu(false);
  };

  const handleMenuClick = () => {
    if (showReviewMenu) {
      setShowReviewMenu(false);
    } else {
      setShowReviewMenu(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [showReviewMenu]);

  review.user.name ||= `${review.user.firstName} ${review.user.lastName[0]}.`;
  let yelpReviewer = !review.user.notYelpUser;

  let userIsAuthor = false;
  if (review.user.id === sessionUser.id) {
    userIsAuthor = true;
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
              <div className="review-user-name">
                {review.user.name}{" "}
                {yelpReviewer && (
                  <div>(Yelp reviewer - blue stars are simulated)</div>
                )}
              </div>
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
          <div className="review-header-menu-btn" onClick={handleMenuClick}>
            <svg width={24} height={24}>
              <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </div>
          {showReviewMenu && !userIsAuthor && (
            <div className="review-header-menu-dropdown" ref={node}>
              <div className="review-header-menu-dropdown-option">
                Send Message
              </div>
              <div className="review-header-menu-dropdown-option">
                Follow {review.user.name}
              </div>
            </div>
          )}
          {showReviewMenu && userIsAuthor && (
            <div className="review-header-menu-dropdown" ref={node}>
              <Link
                className="review-header-menu-dropdown-option"
                to={{
                  pathname: `/writeareview/${currentBusiness.id}`,
                  state: {
                    currentBusiness: currentBusiness,
                    action: "edit",
                    business: business,
                    review: review,
                  },
                }}
              >
                Edit Review
              </Link>
              <Link
                className="review-header-menu-dropdown-option"
                to={{
                  pathname: `/writeareview/${currentBusiness.id}`,
                  state: {
                    currentBusiness: currentBusiness,
                    action: "create",
                    business: business,
                  },
                }}
              >
                Delete Review
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="user-review-stars-container">
        <div className="user-review-stars-row">
          <ReviewStars
            starCount={review.foodRating}
            size={20}
            starContainer="small-review-star-container"
            firstStar="small-first-star"
            secondStar="small-second-star"
            thirdStar="small-third-star"
            fourthStar="small-fourth-star"
            fifthStar="small-fifth-star"
          />
          <div>{date}</div>
        </div>
        <div className="user-review-stars-row">
          <ReviewStars
            starCount={review.serviceRating}
            size={20}
            blueStars={true}
            starContainer="small-review-star-container"
            firstStar="small-first-star"
            secondStar="small-second-star"
            thirdStar="small-third-star"
            fourthStar="small-fourth-star"
            fifthStar="small-fifth-star"
          />
          <div>{date}</div>
        </div>
      </div>
      <div className="user-review-text">{review.text}</div>
      {!review.yelpReview && (
        <div className="review-react-btns-container">
          <div
            className={
              usefulBtnClicked ? "useful-btn review-btn-clicked" : "useful-btn"
            }
            onClick={handleUsefulBtnClicked}
          >
            <svg width={16} height={16}>
              {usefulBtnClicked && (
                <>
                  <path d="M8 8.95a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"></path>
                  <path d="M8 1.25A6.75 6.75 0 1014.75 8 6.758 6.758 0 008 1.25zm1.75 8.68v.87a1.251 1.251 0 01-1.25 1.25h-1a1.251 1.251 0 01-1.25-1.25v-.87a3.25 3.25 0 113.5 0z"></path>
                </>
              )}
              {!usefulBtnClicked && (
                <>
                  <path d="M8 14.75A6.75 6.75 0 1114.75 8 6.758 6.758 0 018 14.75zm0-12A5.25 5.25 0 1013.25 8 5.256 5.256 0 008 2.75z"></path>
                  <path d="M11.25 7.2a3.25 3.25 0 10-5 2.73v.87a1.251 1.251 0 001.25 1.25h1a1.251 1.251 0 001.25-1.25v-.87a3.243 3.243 0 001.5-2.73zM8 8.95a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"></path>
                </>
              )}
            </svg>
            <div>Useful {useful ? useful : ""}</div>
          </div>
          <div
            className={
              funnyBtnClicked ? "funny-btn review-btn-clicked" : "funny-btn"
            }
            onClick={handleFunnyBtnClicked}
          >
            <svg width={16} height={16}>
              {funnyBtnClicked && (
                <path d="M8 1.25A6.75 6.75 0 1014.75 8 6.758 6.758 0 008 1.25zM9.806 6.3a1.1 1.1 0 011.1 1.1h-2.2a1.1 1.1 0 011.1-1.1zm-3.612 0a1.1 1.1 0 011.1 1.1h-2.2a1.1 1.1 0 011.1-1.1zM8 12.221a3.625 3.625 0 01-3.575-3.045A.151.151 0 014.572 9h6.856a.151.151 0 01.147.176A3.636 3.636 0 018 12.221z"></path>
              )}
              {!funnyBtnClicked && (
                <>
                  <path d="M8 14.75A6.75 6.75 0 1114.75 8 6.758 6.758 0 018 14.75zm0-12A5.25 5.25 0 1013.25 8 5.256 5.256 0 008 2.75zm.706 4.65a1.1 1.1 0 112.2 0m-5.812 0a1.1 1.1 0 112.2 0"></path>
                  <path d="M4.572 9a.151.151 0 00-.147.176 3.62 3.62 0 007.15 0A.151.151 0 0011.428 9H4.572z"></path>{" "}
                </>
              )}
            </svg>
            <div>Funny {funny ? funny : ""}</div>
          </div>
          <div
            className={
              coolBtnClicked ? "cool-btn review-btn-clicked" : "cool-btn"
            }
            onClick={handleCoolBtnClicked}
          >
            <svg width={16} height={16}>
              {coolBtnClicked && (
                <path d="M8 1.25A6.75 6.75 0 1014.75 8 6.758 6.758 0 008 1.25zm2.737 9.333A3.432 3.432 0 018 12.035a3.434 3.434 0 01-2.737-1.452.148.148 0 01.158-.234 9.75 9.75 0 005.158 0 .148.148 0 01.158.234zm1.75-3.603l-.506 1.518a1.773 1.773 0 01-3.363 0l-.17-.51a.473.473 0 00-.896 0l-.17.51a1.772 1.772 0 01-3.363 0L3.513 6.98a.256.256 0 01.243-.336h8.488a.255.255 0 01.243.336z"></path>
              )}
              {!coolBtnClicked && (
                <>
                  <path d="M8 14.75A6.75 6.75 0 1114.75 8 6.758 6.758 0 018 14.75zm0-12A5.25 5.25 0 1013.25 8 5.256 5.256 0 008 2.75z"></path>
                  <path d="M3.513 6.98l.506 1.518a1.772 1.772 0 003.363 0l.17-.51a.473.473 0 01.896 0l.17.51a1.772 1.772 0 003.363 0l.506-1.518a.256.256 0 00-.243-.336H3.756a.255.255 0 00-.243.336zm1.907 3.369a.149.149 0 00-.157.234A3.432 3.432 0 008 12.035a3.431 3.431 0 002.737-1.452.148.148 0 00-.158-.234 9.75 9.75 0 01-5.158 0z"></path>
                </>
              )}
            </svg>
            <div>Cool {cool ? cool : ""}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessReview;
