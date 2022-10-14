import LandingPage from "./components/Home/LandingPage";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Business from "./components/Business/Business";

function App() {
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
      </Switch>
    </>
  );
}

export default App;
