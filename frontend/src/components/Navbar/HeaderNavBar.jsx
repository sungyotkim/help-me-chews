import AutoServicesDropdown from "./AutoServicesDropdown";
import ContactMeDropdown from "./ContactMeDropDown";
import "./HeaderNavBar.css";
import HomeServicesDropdown from "./HomeServicesDropdown";
import RestaurantDropDown from "./RestaurantDropDown";

const HeaderNavBar = (props) => {
  const { styleBlack } = props;

  return (
    <div className="header-nav-bar">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <RestaurantDropDown styleBlack={styleBlack} />
        <HomeServicesDropdown styleBlack={styleBlack} />
        <AutoServicesDropdown styleBlack={styleBlack} />
        <ContactMeDropdown styleBlack={styleBlack} />
      </div>
    </div>
  );
};

export default HeaderNavBar;
