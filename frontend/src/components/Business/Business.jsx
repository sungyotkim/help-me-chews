import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import NextReviewStars from "../ReviewStars/NextReviewStars";
import ReviewStars from "../ReviewStars/ReviewStars";
import "./Business.css";
import BusinessReviewsDetail from "./BusinessReviewsDetail";
import BusinessReviewsOverallRatings from "./BusinessReviewsOverallRatings";
import BusinessReviewSort from "./BusinessReviewsSort";
import { fetchBusiness, getBusiness } from "../../store/businesses";
import { Link, useLocation } from "react-router-dom";

const Business = () => {
  const dispatch = useDispatch();
  const [showReviewTrustContainer, setShowReviewTrustContainer] =
    useState(true);
  const sessionUser = useSelector((state) => state.session.user);
  const location = useLocation();
  let yelpId = location.pathname.slice(10);
  const business = useSelector(getBusiness(yelpId));
  const currentYelpBusiness = location.state.result;
  const yelpBusinessReviews = (location.state.reviewArr ||= []);
  const [databaseReviews, setDatabaseReviews] = useState([]);

  useEffect(() => {
    dispatch(fetchBusiness(yelpId));
  }, [yelpId]);

  useEffect(() => {
    let yelpReviews = [];
    yelpBusinessReviews.forEach((review) => {
      review.foodRating = review.rating;
      review.serviceRating = review.rating;
      review.yelpReview = true;
      yelpReviews.push(review);
    });

    if (business) {
      setDatabaseReviews(business.reviews.reverse());
      setDatabaseReviews((databaseReviews) => [
        ...databaseReviews,
        ...yelpReviews,
      ]);
    }
  }, [business]);

  const [reviewSuccessMesssage, setReviewSuccessMesssage] = useState();

  useEffect(() => {
    setReviewSuccessMesssage(location.state.msg);

    let timeout = setTimeout(() => {
      setReviewSuccessMesssage();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (currentYelpBusiness) {
    let categories = [];
    let date = new Date();
    let dayIndex = date.getDay();
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let resultHours = {};
    let closedOnThisDay = [
      "Closed on Mondays",
      "Closed on Tuesdays",
      "Closed on Wednesdays",
      "Closed on Thursdays",
      "Closed on Fridays",
      "Closed on Saturdays",
      "Closed on Sundays",
    ];
    let today;
    if (dayIndex === 0) {
      today = days[6];
    } else {
      today = days[dayIndex - 1];
    }
    let openNow;

    if (currentYelpBusiness.hours) {
      if (currentYelpBusiness.hours[0].is_open_now) {
        openNow = true;
      }
      let businessHours = currentYelpBusiness.hours[0].open;
      if (businessHours) {
        businessHours.forEach((ele) => {
          if (ele.day === 0) {
            if (resultHours[days[6]]) {
              resultHours[days[6]].push([ele.start, ele.end]);
            } else {
              resultHours[days[6]] = [[ele.start, ele.end]];
            }
          } else {
            if (resultHours[days[ele.day - 1]]) {
              resultHours[days[ele.day - 1]].push([ele.start, ele.end]);
            } else {
              resultHours[days[ele.day - 1]] = [[ele.start, ele.end]];
            }
          }
        });
      }
    }

    for (let i = 0; i < 7; i++) {
      if (!resultHours[days[i]]) {
        resultHours[days[i]] = [[closedOnThisDay[i]]];
      }
    }

    currentYelpBusiness.categories.forEach((cat) => {
      categories.push(cat.title);
    });

    let openTime;
    let closeTime;

    const timeConverter = (startHours, endHours) => {
      let openTime;
      let closeTime;
      if (startHours === "0000") {
        openTime = "Midnight";
      } else if (parseInt(startHours) > 1200) {
        openTime = parseInt(startHours) - 1200;
        let openTimeString = openTime.toString();
        openTime =
          openTimeString.slice(0, openTimeString.length - 2) +
          ":" +
          openTimeString.slice(openTimeString.length - 2) +
          " PM";
      } else {
        openTime = parseInt(startHours);
        let openTimeString = openTime.toString();
        openTime =
          openTimeString.slice(0, openTimeString.length - 2) +
          ":" +
          openTimeString.slice(openTimeString.length - 2) +
          " AM";
      }
      if (endHours === "0000") {
        closeTime = "Midnight";
      } else if (parseInt(endHours) > 1200) {
        closeTime = parseInt(endHours) - 1200;
        let closeTimeString = closeTime.toString();
        closeTime =
          closeTimeString.slice(0, closeTimeString.length - 2) +
          ":" +
          closeTimeString.slice(closeTimeString.length - 2) +
          " PM";
      } else {
        closeTime = parseInt(endHours);
        let closeTimeString = closeTime.toString();
        closeTime =
          closeTimeString.slice(0, closeTimeString.length - 2) +
          ":" +
          closeTimeString.slice(closeTimeString.length - 2) +
          " AM";
      }
      return [openTime, closeTime];
    };

    if (resultHours[today].length === 1 && resultHours[today][0].length > 1) {
      let startHours = resultHours[today][0][0];
      let endHours = resultHours[today][0][1];
      let hoursToday = timeConverter(startHours, endHours);
      openTime = hoursToday[0];
      closeTime = hoursToday[1];
    }
    let monHours =
      resultHours["Monday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Monday"][0]);
    let tuesHours =
      resultHours["Tuesday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Tuesday"][0]);
    let wedHours =
      resultHours["Wednesday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Wednesday"][0]);
    let thursHours =
      resultHours["Thursday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Thursday"][0]);
    let friHours =
      resultHours["Friday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Friday"][0]);
    let satHours =
      resultHours["Saturday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Saturday"][0]);
    let sunHours =
      resultHours["Monday"][0].length === 1
        ? ["Closed "]
        : timeConverter(...resultHours["Sunday"][0]);

    const closeReviewTrustContainer = () => {
      setShowReviewTrustContainer(false);
    };

    let businessLocation = `${currentYelpBusiness.location.city}, ${currentYelpBusiness.location.state}`;

    let userProfilePhoto;
    let userLocation;
    let userFriends;
    let userReviews;
    if (sessionUser) {
      userProfilePhoto = sessionUser.image_url ||=
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png";
      userLocation = businessLocation;
      if (sessionUser.city && sessionUser.state) {
        userLocation = `${sessionUser.city}, ${sessionUser.state}`;
      }
      userFriends = sessionUser.friends ||= 0;
      userReviews = sessionUser.reviews ||= 0;
      sessionUser.name =
        sessionUser.firstName + " " + sessionUser.lastName.slice(0, 1) + ".";
    }

    return (
      <>
        <div className="business-page-container">
          {reviewSuccessMesssage && (
            <div className="message-container">{reviewSuccessMesssage}</div>
          )}
          <Header
            styleBlack={{ color: "black", fill: "black" }}
            fromSearch={{ fromSearch: false }}
            fromBusiness={{
              fromBusiness: true,
              result: currentYelpBusiness,
              reviewArr: yelpBusinessReviews,
            }}
            sticky={{ position: "relative", top: 0 }}
          />
          <div className="business-images-container">
            {currentYelpBusiness.photos.map((url, i) => {
              return (
                <div className="business-image-container" key={i}>
                  <img src={url} alt={url} />
                </div>
              );
            })}
            {currentYelpBusiness.photos.map((url, i) => {
              return (
                <div className="business-image-container" key={i}>
                  <img src={url} alt={url} />
                </div>
              );
            })}
            <div className="business-main-header-container">
              <div className="business-main-header-inner-container">
                <div className="business-header-name">
                  {currentYelpBusiness.name}
                </div>
                <div className="business-header-ratings">
                  <div>
                    <ReviewStars
                      starCount={currentYelpBusiness.rating}
                      size={32}
                    />
                  </div>
                  <div>{currentYelpBusiness.review_count} Yelp reviews</div>
                </div>
                <div className="business-header-details-container-one">
                  {currentYelpBusiness.is_claimed && (
                    <>
                      <div className="is-claimed">
                        <svg width={16} height={16}>
                          <path d="M8 1.25A6.75 6.75 0 1014.75 8 6.757 6.757 0 008 1.25zm3.406 5.48l-3.6 3.6a.75.75 0 01-1.06 0L5.099 8.684a.75.75 0 011.06-1.06l1.117 1.115 3.07-3.07a.75.75 0 011.06 1.061z"></path>
                        </svg>
                        Claimed
                      </div>
                    </>
                  )}
                  <div className="business-header-price">
                    {currentYelpBusiness.price}
                  </div>
                  <div className="business-header-categories">
                    {categories.join(", ")}
                  </div>
                </div>
                <div className="business-header-details-container-two">
                  {openNow && <div className="business-is-open">Open</div>}
                  {!openNow && <div className="business-is-closed">Closed</div>}
                  <div className="daily-hours">
                    {openTime && closeTime && (
                      <>
                        {openTime} - {closeTime}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="business-page-below-header">
            <div className="business-page-left-container">
              <div className="business-left-container-top-btns-container">
                <Link
                  to={{
                    pathname: `/writeareview/${currentYelpBusiness.id}`,
                    state: {
                      currentYelpBusiness: currentYelpBusiness,
                      action: "create",
                      business: business,
                      reviewArr: yelpBusinessReviews,
                    },
                  }}
                  className="write-a-review-btn"
                >
                  <div>
                    <svg width={24} height={24}>
                      <path d="M17.87 22a.93.93 0 01-.46-.12L12 19.08l-5.41 2.84a1 1 0 01-1-.08 1 1 0 01-.4-1l1-6-4.39-4.26a1 1 0 01.56-1.7L8.4 8l2.7-5.48a1 1 0 011.8 0L15.6 8l6 .88a1 1 0 01.56 1.7l-4.38 4.27 1 6a1 1 0 01-1 1.17l.09-.02zM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 01.29-.89l3.3-3.21-4.56-.72a1 1 0 01-.79-.54l-2-4.14-2 4.14a1 1 0 01-.75.54l-4.56.67L8 13.78a1 1 0 01.29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0112 17z"></path>
                    </svg>
                  </div>
                  <div>Write a review</div>
                </Link>
                <div className="save-business-btn">
                  <div>
                    <svg width={24} height={24}>
                      <path d="M19 22a.994.994 0 01-.581-.186L12 17.229l-6.419 4.585A1 1 0 014 21V5a3.003 3.003 0 013-3h10a3.003 3.003 0 013 3v16a1 1 0 01-1 1zm-7-7c.208 0 .412.065.581.187L18 19.056V5a1 1 0 00-1-1H7a1 1 0 00-1 1v14.057l5.419-3.87A.998.998 0 0112 15z"></path>
                    </svg>
                  </div>
                  <div>Save</div>
                </div>
              </div>

              <div className="location-and-hours-container">
                <div className="location-and-hours-title">Location & Hours</div>
                <div className="location-and-hours-details-container">
                  <div className="location-details-container">
                    <div className="business-map-container">
                      <img
                        src="https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&zoom=15&center=40.760990%2C-73.827853&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C40.760990%2C-73.827853&signature=LDLuyWIcYm0iJpInkEw-tTNsXe4="
                        alt="business-map"
                      />
                    </div>
                    <div className="business-directions-container">
                      <div>
                        <div className="first-address-line">
                          {currentYelpBusiness.location.display_address[0]}
                        </div>
                        <div className="second-address-line">
                          {currentYelpBusiness.location.display_address[1]}
                        </div>
                      </div>
                      <div className="get-directions-btn">Get directions</div>
                    </div>
                  </div>
                  <div className="hours-details-container">
                    <div>
                      <div className="hours-day">Mon</div>
                      <div className="hours-range">{monHours.join(" - ")}</div>
                      {today === "Monday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Monday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Tue</div>
                      <div className="hours-range">{tuesHours.join(" - ")}</div>
                      {today === "Tuesday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Tuesday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Wed</div>
                      <div className="hours-range">{wedHours.join(" - ")}</div>
                      {today === "Wednesday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Wednesday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Thu</div>
                      <div className="hours-range">
                        {thursHours.join(" - ")}
                      </div>
                      {today === "Thursday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Thursday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Fri</div>
                      <div className="hours-range">{friHours.join(" - ")}</div>
                      {today === "Friday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Friday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Sat</div>
                      <div className="hours-range">{satHours.join(" - ")}</div>
                      {today === "Saturday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Saturday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                    <div>
                      <div className="hours-day">Sun</div>
                      <div className="hours-range">{sunHours.join(" - ")}</div>
                      {today === "Sunday" && openNow && (
                        <div className="hours-open">Open now</div>
                      )}
                      {today === "Sunday" && !openNow && (
                        <div className="hours-closed">Closed now</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="business-reviews-container">
                <div className="recommended-reviews-container">
                  Recommended Reviews
                </div>

                {showReviewTrustContainer && (
                  <div className="review-trust-container">
                    <div className="review-trust-icon">
                      <svg width={24} height={24}>
                        <path d="M12 1c6.075 0 11 4.925 11 11a11 11 0 01-11 11C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 7.33a1 1 0 011 1V16a1 1 0 11-2 0v-4.67a1 1 0 011-1zm0-3.18a1 1 0 110 2 1 1 0 010-2z"></path>
                      </svg>
                    </div>
                    <div className="review-trust-phrase-container">
                      <span className="top-concern-bold">
                        Your trust is our top concern,{" "}
                      </span>
                      <span>
                        so businesses can't pay to alter or remove their
                        reviews.{" "}
                      </span>
                      <span className="review-trust-learn-more">
                        Learn more.
                      </span>
                    </div>
                    <div
                      className="review-trust-close-btn-container"
                      onClick={closeReviewTrustContainer}
                    >
                      <div className="review-trust-close-btn">
                        <svg width={24} height={24}>
                          <path d="M13.41 12l5.3-5.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-5.29-5.3a1.004 1.004 0 00-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 000 1.42 1 1 0 001.42 0l5.29-5.3 5.29 5.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 12z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {sessionUser && (
                  <>
                    <div className="user-to-review-container">
                      <div className="user-to-review-user-info">
                        <div className="review-user-profile-picture-container">
                          <img src={userProfilePhoto} alt={sessionUser.name} />
                        </div>
                        <div className="review-user-info-container">
                          <div className="user-to-review-top-info">
                            <div className="review-user-name">
                              {sessionUser.name}
                            </div>
                            <div className="review-user-location">
                              {userLocation}
                            </div>
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

                      <div className="user-to-review-rating-container">
                        <NextReviewStars
                          business={business}
                          currentYelpBusiness={currentYelpBusiness}
                          reviewArr={yelpBusinessReviews}
                        />
                        <div>
                          Start your review of{" "}
                          <strong>{currentYelpBusiness.name}.</strong>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <BusinessReviewsOverallRatings
                  databaseReviews={databaseReviews}
                />

                <BusinessReviewSort />

                <BusinessReviewsDetail
                  databaseReviews={databaseReviews}
                  location={businessLocation}
                  business={business}
                  currentYelpBusiness={currentYelpBusiness}
                  setDatabaseReviews={setDatabaseReviews}
                  yelpBusinessReviews={yelpBusinessReviews}
                />
              </div>
            </div>

            <div className="business-page-right-container">
              <div className="business-page-right-inner-container">
                <div className="business-website-container">
                  <div className="business-website">
                    {currentYelpBusiness.url}
                  </div>
                  <div>
                    <svg width={24} height={24}>
                      <path d="M20.47 3.07a.5.5 0 01.53.46v6a.5.5 0 01-.39.49.58.58 0 01-.19 0 .47.47 0 01-.35-.15L17.8 7.6l-5 5a1 1 0 01-1.41 0 1 1 0 010-1.41l5-5-2.27-2.27a.5.5 0 01.35-.85h6zM20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 010 2H5v14h14v-5a1 1 0 012 0v6a1 1 0 01-1 1z"></path>
                    </svg>
                  </div>
                </div>

                <div className="business-phone-container">
                  <div>{currentYelpBusiness.display_phone}</div>
                  <div>
                    <svg width={24} height={24}>
                      <path d="M13.59 23.07A7 7 0 018.64 21L3 15.36a7 7 0 010-9.9l1.39-1.41a1 1 0 011.42 0l5 5a1 1 0 010 1.41 2.001 2.001 0 002.83 2.83 1 1 0 011.41 0l4.95 5a1 1 0 010 1.42L18.54 21a7 7 0 01-4.95 2.07zM5.1 6.17l-.71.71a5 5 0 000 7.07l5.66 5.66a5 5 0 007.07 0l.71-.71-3.63-3.63a4 4 0 01-4.86-.61 4 4 0 01-.61-4.86L5.1 6.17zm12.78 5.95a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 6 6 0 016 6 1 1 0 01-1 1zm4.19 0a1 1 0 01-1-1 8.19 8.19 0 00-8.19-8.19 1 1 0 010-2c5.625.006 10.184 4.565 10.19 10.19a1 1 0 01-1 1z"></path>
                    </svg>
                  </div>
                </div>

                <div className="business-directions-container">
                  <div className="business-directions">
                    <div className="get-directions-header">Get Directions</div>
                    <div>
                      {currentYelpBusiness.location.display_address.join(" ")}
                    </div>
                  </div>
                  <div>
                    <svg width={24} height={24}>
                      <path d="M11 22a3 3 0 01-2.12-.88l-8-8a3 3 0 010-4.24l8-8a3 3 0 014.24 0l8 8a3 3 0 010 4.24l-8 8A3 3 0 0111 22zm0-20a1 1 0 00-.71.29l-8 8a1 1 0 000 1.42l8 8a1 1 0 001.42 0l8-8a1 1 0 000-1.42l-8-8A1 1 0 0011 2zm4.85 8.15a.48.48 0 010 .66l-3 3a.47.47 0 01-.35.15.43.43 0 01-.19 0 .5.5 0 01-.31-.46v-2.05a1 1 0 01-.25.05h-2a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a3 3 0 013-3h2a1 1 0 01.25.05V7.5a.5.5 0 01.31-.5.47.47 0 01.54.15l3 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Business;
