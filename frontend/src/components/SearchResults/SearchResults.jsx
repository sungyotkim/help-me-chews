import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import LoadingResults from "./LoadingResults";
import SearchResult from "./SearchResult";

const SearchResults = () => {
  const {
    businessResults,
    loading,
    setLoading,
    limit,
    currentBusinessResults,
    setCurrentBusinessResults,
    resultReviews,
    setResultReviews,
    setAllResultReviews,
    allResultReviews,
  } = useContext(BusinessSearchContext);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (
        businessResults.businesses &&
        businessResults.businesses.length === limit &&
        currentBusinessResults.length < limit
      ) {
        businessResults.businesses.forEach((result) => {
          fetchResult(result.id);
          fetchReviews(result.id);
        });
        setLoading(false);
      }
    }
  }, [businessResults.businesses]);

  const fetchResult = async (resultId) => {
    const res = await fetch(`/search/businesses/${resultId}`);
    const newResults = await res.json();
    setCurrentBusinessResults((oldResults) => [...oldResults, newResults]);
  };

  const fetchReviews = async (resultId) => {
    const res = await fetch(`/search/businesses/${resultId}/reviews`);
    const newReviews = await res.json();
    setResultReviews((oldReviews) => [
      ...oldReviews,
      newReviews.reviews[0].text,
    ]);
    setAllResultReviews((oldReviews) => [...oldReviews, newReviews.reviews]);
  };
  return (
    <>
      {loading && <LoadingResults counter={[1, 2, 3, 4, 5]} />}
      {!loading && currentBusinessResults.length === limit && (
        <>
          {currentBusinessResults.map((result, i) => {
            let reviewArr = allResultReviews[i];
            return (
              <SearchResult
                result={result}
                index={i}
                firstReview={resultReviews[i]}
                key={i}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default SearchResults;
