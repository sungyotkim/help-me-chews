import Header from "../Header/Header";
import "./Profile.css";
import friendIconUrl from "../../assets/profile-friend-icon.PNG";
import reviewIconUrl from "../../assets/profile-review-icon.PNG";
import { useSelector } from "react-redux";
import addPhotoIconUrl from "../../assets/add_photo_icon.PNG";
import updateProfileIconUrl from "../../assets/update_profile_icon.PNG";
import findFriendsIconUrl from "../../assets/find_friends_icon.PNG";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import {
  RiUserReceivedLine,
  RiUserHeartLine,
  RiBookmark3Line,
  RiStarSmileLine,
} from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProfileOverview from "./ProfileOverview";
import ProfileFriends from "./ProfileFriends";
import ProfileReviews from "./ProfileReviews";
import ProfileBookmarks from "./ProfileBookmarks";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowing from "./ProfileFollowing";
import { useLocation } from "react-router-dom";
import { getUser } from "../../store/users";

const Profile = () => {
  const location = useLocation();
  const profileId = location.pathname.slice(9);
  const [userId, setUserId] = useState();
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [friendsSelected, setFriendsSelected] = useState(false);
  const [reviewsSelected, setReviewsSelected] = useState(false);
  const [bookmarksSelected, setBookmarksSelected] = useState(false);
  const [followingSelected, setFollowingSelected] = useState(false);
  const [followersSelected, setFollowersSelected] = useState(false);

  useEffect(() => {
    setUserId(profileId);
  }, [profileId]);

  const user = useSelector(getUser(userId));

  if (user) {
    const name = `${user.firstName} ${user.lastName.slice(0, 1)}.`;
    const profilePhotoUrl = (user.imageUrl ||=
      "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png");
    const friendCount = 0;
    const reviewCount = 0;
    const months = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const userMonth = months[parseInt(user.createdAt.slice(5, 7))];
    const userYear = user.createdAt.slice(0, 4);
    const reviews = user.reviews;
    console.log(reviews);

    const setOthersFalse = (selected) => {
      if (selected !== "overview") {
        if (overviewSelected) {
          setOverviewSelected(false);
        }
      }
      if (selected !== "friends") {
        if (friendsSelected) {
          setFriendsSelected(false);
        }
      }
      if (selected !== "reviews") {
        if (reviewsSelected) {
          setReviewsSelected(false);
        }
      }
      if (selected !== "bookmarks") {
        if (bookmarksSelected) {
          setBookmarksSelected(false);
        }
      }
      if (selected !== "following") {
        if (followingSelected) {
          setFollowingSelected(false);
        }
      }
      if (selected !== "followers") {
        if (followersSelected) {
          setFollowersSelected(false);
        }
      }
    };

    const handleNavClick = (e, getter, setter, value) => {
      e.preventDefault();
      if (!getter) {
        setter(true);
      }
      setOthersFalse(value);
    };
    return (
      <>
        <Header
          styleBlack={{ color: "black", fill: "black" }}
          fromSearch={{ fromSearch: false }}
          fromBusiness={{
            fromBusiness: false,
          }}
          sticky={{ position: "relative", top: 0 }}
        />
        <div className="profile-page-container">
          <div className="profile-banner-container">
            <div className="profile-header-container">
              <div className="profile-photo-container">
                <img src={profilePhotoUrl} alt={name} />
              </div>
              <div className="profile-info-container">
                <div className="profile-user-name">{name}</div>
                <div className="profile-user-location">
                  From {user.city}, {user.state}
                </div>
                <div className="profile-user-icons">
                  <div className="profile-friend-icon-container">
                    <img src={friendIconUrl} alt="yelp friend icon" />
                    <div className="profile-friend-count">{friendCount}</div>
                    <div>{friendCount === 1 ? "Friend" : "Friends"}</div>
                  </div>
                  <div className="profile-review-icon-container">
                    <img src={reviewIconUrl} alt="yelp review icon" />
                    <div className="profile-review-count">{reviewCount}</div>
                    <div>{reviewCount === 1 ? "Review" : "Reviews"}</div>
                  </div>
                </div>
              </div>
              {/* <div className="profile-actions-container">
                <div className="profile-actions-inner-container">
                  <div className="profile-action-btn">
                    <div className="profile-action-icon">
                      <img src={addPhotoIconUrl} alt="add profile photos" />
                    </div>
                    Add Profile Photos
                  </div>
                  <div className="profile-action-btn">
                    <div className="profile-action-icon">
                      <img
                        src={updateProfileIconUrl}
                        alt="update your profile"
                      />
                    </div>
                    Update Your Profile
                  </div>
                  <div className="profile-action-btn">
                    <div className="profile-action-icon">
                      <img src={findFriendsIconUrl} alt="find frinds" />
                    </div>
                    Find Friends
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="profile-content-wrapper">
            <div className="profile-content-container">
              <div className="profile-left-column">
                <div className="column-nav-header">
                  {user.firstName}'s Profile
                </div>
                <div
                  className={
                    overviewSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      overviewSelected,
                      setOverviewSelected,
                      "overview"
                    )
                  }
                >
                  <FaUserCircle className="column-nav-icon" /> Profile Overview
                </div>
                <div
                  className={
                    friendsSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      friendsSelected,
                      setFriendsSelected,
                      "friends"
                    )
                  }
                >
                  <Diversity1Icon className="column-nav-icon" /> Friends
                </div>
                <div
                  className={
                    reviewsSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      reviewsSelected,
                      setReviewsSelected,
                      "reviews"
                    )
                  }
                >
                  <RiStarSmileLine className="column-nav-icon" /> Reviews
                </div>
                {/* <div
                  className={
                    bookmarksSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      bookmarksSelected,
                      setBookmarksSelected,
                      "bookmarks"
                    )
                  }
                >
                  <RiBookmark3Line className="column-nav-icon" /> Bookmarks
                </div>
                <div
                  className={
                    followingSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      followingSelected,
                      setFollowingSelected,
                      "following"
                    )
                  }
                >
                  <RiUserHeartLine className="column-nav-icon" /> Following
                </div>
                <div
                  className={
                    followersSelected
                      ? "column-nav-row column-nav-selected"
                      : "column-nav-row"
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      followersSelected,
                      setFollowersSelected,
                      "followers"
                    )
                  }
                >
                  <RiUserReceivedLine className="column-nav-icon" /> Followers
                </div> */}
              </div>

              <div className="profile-center-column">
                {overviewSelected && <ProfileOverview />}
                {friendsSelected && <ProfileFriends />}
                {reviewsSelected && <ProfileReviews reviews={reviews} />}
                {/* {bookmarksSelected && <ProfileBookmarks />}
                {followingSelected && <ProfileFollowing />}
                {followersSelected && <ProfileFollowers />} */}
              </div>

              {overviewSelected && (
                <div className="profile-right-column">
                  <div className="side-column-header">About {name}</div>
                  <div className="side-column-row-header">Location</div>
                  <div className="side-column-row">
                    {user.city}, {user.state}
                  </div>
                  <div className="side-column-row-header">Helping since</div>
                  <div className="side-column-row">
                    {userMonth} {userYear}
                  </div>
                  <div className="side-column-row-header">Things I Love</div>
                  <div className="side-column-row">
                    Coding... though this part isn't coded yet!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else if (!user) {
    return (
      <>
        <Header
          styleBlack={{ color: "black", fill: "black" }}
          fromSearch={{ fromSearch: false }}
          fromBusiness={{
            fromBusiness: false,
          }}
          sticky={{ position: "relative", top: 0 }}
        />
        <div className="profile-page-container">
          <div className="profile-loading-container">Loading...</div>
        </div>
      </>
    );
  }
};

export default Profile;
