import { Link, Redirect } from "react-router-dom";
import "./WriteAReviewHeader.css";
import logoImg from "../../assets/help-logo.png";
import HeaderLoggedIn from "../Header/HeaderLoggedIn";
import { useSelector } from "react-redux";

const WriteAReviewHeader = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="write-a-review-header-container">
      <Link to="/" className="review-header-container">
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
