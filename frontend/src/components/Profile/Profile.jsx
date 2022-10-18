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

const Profile = () => {
  const user = useSelector((state) => state.session.user);
  const name = `${user.firstName} ${user.lastName.slice(0, 1)}.`;
  const profilePhotoUrl = (user.imageUrl ||=
    "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png");
  const friendCount = 0;
  const reviewCount = 0;
  console.log(user);
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
            <div className="profile-actions-container">
              <div className="profile-actions-inner-container">
                <div className="profile-action-btn">
                  <div className="profile-action-icon">
                    <img src={addPhotoIconUrl} alt="add profile photos" />
                  </div>
                  Add Profile Photos
                </div>
                <div className="profile-action-btn">
                  <div className="profile-action-icon">
                    <img src={updateProfileIconUrl} alt="update your profile" />
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
            </div>
          </div>
        </div>

        <div className="profile-content-wrapper">
          <div className="profile-content-container">
            <div className="profile-left-column">
              <div className="column-nav-header">
                {user.firstName}'s Profile
              </div>
              <div className="column-nav-row column-nav-selected">
                <FaUserCircle className="column-nav-icon" /> Profile Overview
              </div>
              <div className="column-nav-row">
                <Diversity1Icon className="column-nav-icon" /> Friends
              </div>
              <div className="column-nav-row">
                <RiStarSmileLine className="column-nav-icon" /> Reviews
              </div>
              <div className="column-nav-row">
                <RiBookmark3Line className="column-nav-icon" /> Bookmarks
              </div>
              <div className="column-nav-row">
                <RiUserHeartLine className="column-nav-icon" /> Following
              </div>
              <div className="column-nav-row">
                <RiUserReceivedLine className="column-nav-icon" /> Followers
              </div>
            </div>
            <div className="profile-center-column"></div>
            <div className="profile-right-column"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
