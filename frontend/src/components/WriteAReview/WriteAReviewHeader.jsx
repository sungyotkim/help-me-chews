import { Link } from "react-router-dom";
import "./WriteAReviewHeader.css";
import logoImg from "../../assets/help-logo.png";
import HeaderLoggedIn from "../Header/HeaderLoggedIn";

const WriteAReviewHeader = () => {
  return (
    <div className="write-a-review-header-container">
      <Link to="/" className="write-a-review-header-inner-container">
        <span className="logo-name" style={{ color: "black", fill: "black" }}>
          help me chews
        </span>
        <img src={logoImg} alt="help-app-logo" className="header-logo" />
      </Link>
      <div className="user-profile">
        <HeaderLoggedIn
          styleBlack={{ color: "black", fill: "black" }}
          hideOptions={true}
        />
      </div>
    </div>
  );
};

export default WriteAReviewHeader;
