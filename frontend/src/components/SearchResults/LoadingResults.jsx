import { useState } from "react";
import { useEffect } from "react";
import "./LoadingResults.css";

const LoadingResults = ({ counter }) => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const noticeTimeout = setTimeout(() => {
      setTimedOut(true);
    }, 3000);

    return () => {
      clearTimeout(noticeTimeout);
    };
  }, [counter]);

  if (!timedOut) {
    return (
      <>
        {counter.map((number) => {
          return (
            <div className="loading-results-container" key={number}>
              <div className="loading-results-left-contaier">
                <div className="loading-image-placeholder"></div>
              </div>
              <div className="loading-results-right-container">
                <div className="loading-results-first-right-placeholder"></div>
                <div className="loading-results-second-right-placeholder"></div>
                <div className="loading-results-third-right-placeholder"></div>
                <div className="loading-results-fourth-right-placeholder"></div>
                <div className="loading-results-fifth-right-placeholder"></div>
                <div className="loading-results-sixth-right-placeholder"></div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else if (timedOut) {
    return (
      <>
        <div className="timed-out-container">
          Sorry, no results found. Please try a different search criteria.
        </div>
      </>
    );
  }
};

export default LoadingResults;
