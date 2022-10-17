import "./LoginFormPage.css";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import logoImg from "../../assets/help-logo.png";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ email, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    const demoEmail = Array.from("demo@user.io");
    const demoPassword = Array.from("password");
    setEmail("");
    setPassword("");
    let tempEmail = "";
    let tempPassword = "";

    const loginDemoIntervalAnimation = () => {
      const interval = setInterval(() => {
        if (demoEmail.length > 0) {
          tempEmail += demoEmail.shift();
          setEmail(tempEmail);
        } else if (demoPassword.length > 0) {
          tempPassword += demoPassword.shift();
          setPassword(tempPassword);
        } else {
          clearInterval(interval);
          setEmail(tempEmail);
          setPassword(tempPassword);
          return dispatch(
            sessionActions.loginUser({
              email: tempEmail,
              password: tempPassword,
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
      }, 100);
    };

    loginDemoIntervalAnimation();
  };

  useEffect(() => {
    if (location.state.fromDemoBtn) {
      const demoEmail = Array.from("demo@user.io");
      const demoPassword = Array.from("password");
      setEmail("");
      setPassword("");
      let tempEmail = "";
      let tempPassword = "";

      const loginDemoIntervalAnimation = () => {
        const interval = setInterval(() => {
          if (demoEmail.length > 0) {
            tempEmail += demoEmail.shift();
            setEmail(tempEmail);
          } else if (demoPassword.length > 0) {
            tempPassword += demoPassword.shift();
            setPassword(tempPassword);
          } else {
            clearInterval(interval);
            setEmail(tempEmail);
            setPassword(tempPassword);
            return dispatch(
              sessionActions.loginUser({
                email: tempEmail,
                password: tempPassword,
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
        }, 100);
      };
      return loginDemoIntervalAnimation();
    }
  }, []);

  let fromSearch;
  let fromBusiness;

  if (location.state.fromSearch) {
    fromSearch = location.state.fromSearch;
  }
  if (location.state.fromBusiness) {
    fromBusiness = location.state.fromBusiness;
  }

  if (sessionUser) {
    if (fromSearch.fromSearch) {
      return <Redirect to="/search" />;
    } else if (fromBusiness.fromBusiness) {
      return <Redirect to={`/business/${fromBusiness.fromBusiness}`} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  const handleCloseErrors = (e) => {
    e.preventDefault();
    setErrors([]);
  };

  return (
    <>
      <div className="login-nav">
        <Link to="/">
          <div className="login-logo-container">
            <span className="logo-name">help me chews</span>
            <img src={logoImg} alt="help-app-logo" className="header-logo" />
          </div>
        </Link>
      </div>
      <div className="login-main-container">
        <div className="login-sub-container">
          <div className="login-sub-container-top">
            <div className="login-alert-container">
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

          <div className="login-sub-container-bottom">
            <div className="login-form-outer-container">
              <div className="login-form-inner-container">
                <div className="login-form-header">
                  <h2>Log in to Help Me Chews</h2>
                  <div>
                    <p>New to Help Me Chews?</p>
                    <Link
                      to={{
                        pathname: "/signup",
                        state: { fromSearch },
                      }}
                    >
                      <div className="signup-btn-from-login">Sign up</div>
                    </Link>
                  </div>
                  <p>
                    By logging in, you agree to see the awesome Yelp Reviews
                    clone website: Help Me Chews
                  </p>
                </div>
                <div className="login-form-demo-container">
                  <div
                    className="demo-user-login-btn"
                    onClick={handleDemoLogin}
                  >
                    Continue as Demo User
                  </div>
                </div>
                <fieldset className="login-fieldset">
                  <legend align="center">OR</legend>
                </fieldset>
                <div className="login-form-container">
                  <form onSubmit={handleSubmit} className="login-form">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                    <input
                      type="password"
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      required
                    />
                    <button type="submit">Log In</button>
                  </form>
                </div>
                <div className="login-form-footer">
                  <p>New to Help Me Chews?</p>
                  <Link
                    to={{
                      pathname: "/signup",
                      state: { fromSearch },
                    }}
                  >
                    <div className="second-signup-btn-from-login">Sign up</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="login-image-container">
              <img
                src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
