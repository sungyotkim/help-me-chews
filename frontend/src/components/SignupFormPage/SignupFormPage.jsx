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

  const handleStateChange = (e) => {
    setState(e.target.value);
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
                  <form
                    onSubmit={handleSubmit}
                    className="signup-form"
                    id="signup-form"
                  >
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
                    <div>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="City e.g. Bayside"
                        id="signup-city-input"
                      />
                      <select
                        id="signup-state-input"
                        form="signup-form"
                        onChange={handleStateChange}
                      >
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AR">AR</option>
                        <option value="AZ">AZ</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WV">WV</option>
                        <option value="WY">WY</option>
                      </select>
                    </div>

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
