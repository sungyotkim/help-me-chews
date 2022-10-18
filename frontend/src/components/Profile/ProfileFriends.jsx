import "./ProfileFriends.css";
import friendHero from "../../assets/yelp-friend-hero.PNG";

const ProfileFriends = () => {
  return (
    <>
      <div className="profile-friends-container">
        <div className="profile-friends-header">Friends</div>
        <div className="profile-friends-placeholder-info">
          Did you know you can connect with friends to discover the businesses
          they love and show off your own great taste? Welcome to the clubhouse,
          where you can view your friends' profiles, read their reviews, and
          manage your friends list
        </div>
        <div className="friends-hero-img-container">
          <img src={friendHero} alt="yelp-friend-hero-img" />
        </div>
      </div>
    </>
  );
};

export default ProfileFriends;
