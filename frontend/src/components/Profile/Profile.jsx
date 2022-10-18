import Header from "../Header/Header";
import "./Profile.css";
import friendIconUrl from "../../assets/profile-friend-icon.PNG";
import reviewIconUrl from "../../assets/profile-review-icon.PNG";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.session.user);
  const name = `${user.firstName} ${user.lastName.slice(0, 1)}.`;
  const profilePhotoUrl = (user.imageUrl ||=
    "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png");
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
                <img src={friendIconUrl} alt="yelp friend icon" />
                <img src={reviewIconUrl} alt="yelp review icon" />
              </div>
            </div>
            <div className="profile-actions-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
