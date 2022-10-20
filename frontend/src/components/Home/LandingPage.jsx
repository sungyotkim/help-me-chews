import HeroContainer from "./Hero";
import RecentActivity from "./RecentActivity";
import YourNextReview from "./YourNextReview";
import { useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import { getReviews } from "../../store/reviews";

const LandingPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const businesses = useSelector((state) => getBusinesses(state));
  const allReviews = useSelector((state) => getReviews(state));
  const recentReviews = allReviews.reverse();

  if (sessionUser && businesses) {
    let firstThirty = businesses.slice(0, 30);
    return (
      <>
        <HeroContainer />
        <YourNextReview businesses={firstThirty} />
        <RecentActivity reviews={recentReviews} />
      </>
    );
  } else {
    return (
      <>
        <HeroContainer />
        <RecentActivity reviews={recentReviews} />
      </>
    );
  }
};

export default LandingPage;
