import LandingPage from "./components/Home/LandingPage";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Business from "./components/Business/Business";
import WriteAReview from "./components/WriteAReview/WriteAReview";
import Profile from "./components/Profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users";
import { fetchReviews } from "./store/reviews";
import { fetchBusinesses } from "./store/businesses";
import WriteAReviewSuggestionPage from "./components/WriteAReview/WriteAReviewSuggestionPage";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchReviews());
    dispatch(fetchBusinesses());
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/writeareview">
          <WriteAReview />
        </Route>
        <Route path="/suggestedReviews">
          <WriteAReviewSuggestionPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
