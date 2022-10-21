import ContactMeDropdown from "./ContactMeDropDown";
import "./HeaderNavBar.css";
import HomeServicesDropdown from "./HomeServicesDropdown";
import RestaurantDropDown from "./RestaurantDropDown";
import ReviewsDropDown from "./ReviewsDropDown";

const HeaderNavBar = (props) => {
  const { styleBlack } = props;

  return (
    <div className="header-nav-bar">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <RestaurantDropDown styleBlack={styleBlack} />
        {/* <ReviewsDropDown styleBlack={styleBlack} /> */}
        <HomeServicesDropdown styleBlack={styleBlack} />
        <ContactMeDropdown styleBlack={styleBlack} />
      </div>
    </div>
  );
};

export default HeaderNavBar;
