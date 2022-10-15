import "./SignupFormPage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link, Redirect, useLocation } from "react-router-dom";
import logoImg from "../../assets/help-logo.png";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState([]);
  const location = useLocation();

  let fromSearch;

  if (location.state.fromSearch) {
    fromSearch = location.state.fromSearch;
  }

  if (sessionUser) {
    if (fromSearch.fromSearch) {
      return <Redirect to="/search" />;
    } else {
      return <Redirect to="/" />;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signupUser({
          email,
          password,
          firstName,
          lastName,
          city,
          state,
        })
      ).catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const handleCloseErrors = (e) => {
    e.preventDefault();
    setErrors([]);
  };

  return (
    <>
      <div className="signup-nav">
        <Link to="/">
          <div className="signup-logo-container">
            <span className="logo-name">help me chews</span>
            <img src={logoImg} alt="help-app-logo" className="header-logo" />
          </div>
        </Link>
      </div>
      <div className="signup-main-container">
        <div className="signup-sub-container">
          <div className="signup-sub-container-top">
            <div className="signup-alert-container">
              {errors.length > 0 && (
                <div className="login-errors">
                  <div>{errors[0]}</div>
                  <div
                    className="close-login-errors"
                    onClick={(e) => handleCloseErrors(e)}
                  >
                    ×
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="signup-sub-container-bottom">
            <div className="signup-form-outer-container">
              <div className="signup-form-inner-container">
                <div className="signup-form-header">
                  <h2>Sign Up for Help Me Chews</h2>
                  <div>
                    <a
                      href="https://github.com/sungyotkim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Connect with a great programmer
                    </a>
                  </div>
                  <p>
                    By logging in, you agree to see the awesome Yelp Reviews
                    clone website: Help Me Chews
                  </p>
                </div>
                <div className="signup-form-demo-container">
                  <Link
                    to={{
                      pathname: "/login",
                      state: { fromDemoBtn: true, fromSearch },
                    }}
                  >
                    <div className="demo-user-signup-btn">
                      Continue as Demo User
                    </div>
                  </Link>
                </div>
                <fieldset className="signup-fieldset">
                  <legend align="center">OR</legend>
                </fieldset>
                <div className="signup-form-container">
                  <form onSubmit={handleSubmit} className="signup-form">
                    <div>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                        id="signup-name-input"
                      />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                        id="signup-name-input"
                      />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                    <input
                      type="password"
                      minLength={6}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm Password"
                    />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      placeholder="City e.g. Bayside"
                    />
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="State e.g. NY"
                      minLength={2}
                      maxLength={2}
                    />
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
                <div className="signup-form-footer">
                  <p>Already on Help Me Chews?</p>
                  <Link
                    to={{
                      pathname: "/login",
                      state: { fromSearch },
                    }}
                  >
                    <div className="second-signup-btn-from-signup">Log in</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="signup-image-container">
              <img
                src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
                alt="signup"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
