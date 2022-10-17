import HeroContainer from "./Hero";
import RecentActivity from "./RecentActivity";
import YourNextReview from "./YourNextReview";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  let nextReviews;

  if (sessionUser) {
    nextReviews = YourNextReview();
  }

  return (
    <>
      <HeroContainer />
      {/* {nextReviews} */}
      <RecentActivity />
      <h1>hi</h1>
    </>
  );
};

export default LandingPage;
