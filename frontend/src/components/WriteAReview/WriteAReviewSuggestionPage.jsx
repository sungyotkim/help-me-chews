import { useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import Header from "../Header/Header";
import YourNextReview from "../Home/YourNextReview";

const WriteAReviewSuggestionPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const businesses = useSelector((state) => getBusinesses(state));

  if (sessionUser && businesses) {
    let firstThirty = businesses.slice(0, 30);
    return (
      <>
        <Header
          styleBlack={{ color: "black", fill: "black" }}
          fromSearch={{ fromSearch: false }}
          fromBusiness={{ fromBusiness: false }}
        />
        <YourNextReview businesses={firstThirty} suggested={true} />
      </>
    );
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
};

export default WriteAReviewSuggestionPage;
