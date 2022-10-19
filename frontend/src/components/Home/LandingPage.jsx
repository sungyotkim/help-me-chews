import HeroContainer from "./Hero";
import RecentActivity from "./RecentActivity";
import YourNextReview from "./YourNextReview";
import { useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const businesses = useSelector((state) => getBusinesses(state));
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  if (sessionUser && businesses) {
    let firstThirty = businesses.slice(0, 30);
    return (
      <>
        <HeroContainer />
        <YourNextReview businesses={firstThirty} />
        <RecentActivity />
      </>
    );
  } else {
    return (
      <>
        <HeroContainer />
        <RecentActivity />
      </>
    );
  }
};

export default LandingPage;
