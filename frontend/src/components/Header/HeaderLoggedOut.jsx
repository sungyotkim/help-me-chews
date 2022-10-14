import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLoggedOut.css";

const HeaderLoggedOut = ({ styleBlack, fromSearch }) => {
  return (
    <>
      <Link to={{ pathname: "/login", state: { fromSearch } }}>
        <div className="login-btn">
          <div id="login-btn-text" style={styleBlack}>
            Log In
          </div>
        </div>
      </Link>
      <Link to={{ pathname: "/signup", state: { fromSearch } }}>
        <div className="signup-btn">
          <div id="signup-btn-text">Sign Up</div>
        </div>
      </Link>
    </>
  );
};

export default HeaderLoggedOut;
