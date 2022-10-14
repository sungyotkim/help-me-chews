import ReviewStars from "../ReviewStars/ReviewStars";
import "./BusinessReviewsOverallRatings.css";

const BusinessReviewsOverallRatings = ({ databaseReviews }) => {
  let ratingsTotal = databaseReviews.length;

  let foodRatingFive = 0;
  let foodRatingFour = 0;
  let foodRatingThree = 0;
  let foodRatingTwo = 0;
  let foodRatingOne = 0;

  let serviceRatingFive = 0;
  let serviceRatingFour = 0;
  let serviceRatingThree = 0;
  let serviceRatingTwo = 0;
  let serviceRatingOne = 0;

  databaseReviews.forEach((review) => {
    switch (review.foodRating) {
      case 5:
        foodRatingFive++;
        break;
      case 4:
        foodRatingFour++;
        break;
      case 3:
        foodRatingThree++;
        break;
      case 2:
        foodRatingTwo++;
        break;
      case 1:
        foodRatingOne++;
        break;
      default:
        break;
    }

    switch (review.serviceRating) {
      case 5:
        serviceRatingFive++;
        break;
      case 4:
        serviceRatingFour++;
        break;
      case 3:
        serviceRatingThree++;
        break;
      case 2:
        serviceRatingTwo++;
        break;
      case 1:
        serviceRatingOne++;
        break;
      default:
        break;
    }
  });

  let foodRatingFiveWidth = (foodRatingFive / ratingsTotal) * 100;
  let foodRatingFourWidth = (foodRatingFour / ratingsTotal) * 100;
  let foodRatingThreeWidth = (foodRatingThree / ratingsTotal) * 100;
  let foodRatingTwoWidth = (foodRatingTwo / ratingsTotal) * 100;
  let foodRatingOneWidth = (foodRatingOne / ratingsTotal) * 100;

  let serviceRatingFiveWidth = (serviceRatingFive / ratingsTotal) * 100;
  let serviceRatingFourWidth = (serviceRatingFour / ratingsTotal) * 100;
  let serviceRatingThreeWidth = (serviceRatingThree / ratingsTotal) * 100;
  let serviceRatingTwoWidth = (serviceRatingTwo / ratingsTotal) * 100;
  let serviceRatingOneWidth = (serviceRatingOne / ratingsTotal) * 100;

  foodRatingFourWidth = 75;
  foodRatingThreeWidth = 65;
  foodRatingTwoWidth = 10;
  foodRatingOneWidth = 30;
  serviceRatingFourWidth = 45;
  serviceRatingThreeWidth = 80;
  serviceRatingTwoWidth = 40;
  serviceRatingOneWidth = 10;

  let foodRatingAverage =
    (foodRatingFive * 5 +
      foodRatingFour * 4 +
      foodRatingThree * 3 +
      foodRatingTwo * 2 +
      foodRatingOne) /
    ratingsTotal;
  let serviceRatingAverage =
    (serviceRatingFive * 5 +
      serviceRatingFour * 4 +
      serviceRatingThree * 3 +
      serviceRatingTwo * 2 +
      serviceRatingOne) /
    ratingsTotal;

  return (
    <>
      <div className="business-review-rating-container">
        <div className="business-overall-rating-container">
          <div>Food rating</div>
          <ReviewStars starCount={foodRatingAverage} size={32} />
          <div className="review-total-count">{ratingsTotal} reviews</div>
        </div>
        <div className="business-review-breakdown-container">
          <div className="review-counter-display-container">
            <div className="display-star-container">5 stars</div>
            <div className="display-bar-container">
              <div
                className="food-five-star-bar"
                style={{ width: `${foodRatingFiveWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">4 stars</div>
            <div className="display-bar-container">
              <div
                className="food-four-star-bar"
                style={{ width: `${foodRatingFourWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">3 stars</div>
            <div className="display-bar-container">
              <div
                className="food-three-star-bar"
                style={{ width: `${foodRatingThreeWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">2 stars</div>
            <div className="display-bar-container">
              <div
                className="food-two-star-bar"
                style={{ width: `${foodRatingTwoWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">1 star</div>
            <div className="display-bar-container">
              <div
                className="food-one-star-bar"
                style={{ width: `${foodRatingOneWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="business-review-rating-container-2">
        <div className="business-overall-rating-container">
          <div>Service rating</div>
          <ReviewStars
            starCount={serviceRatingAverage}
            blueStars={true}
            size={32}
          />
          <div className="review-total-count">{ratingsTotal} reviews</div>
        </div>
        <div className="business-review-breakdown-container">
          <div className="review-counter-display-container">
            <div className="display-star-container">5 stars</div>
            <div className="display-bar-container">
              <div
                className="service-five-star-bar"
                style={{ width: `${serviceRatingFiveWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">4 stars</div>
            <div className="display-bar-container">
              <div
                className="service-four-star-bar"
                style={{ width: `${serviceRatingFourWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">3 stars</div>
            <div className="display-bar-container">
              <div
                className="service-three-star-bar"
                style={{ width: `${serviceRatingThreeWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">2 stars</div>
            <div className="display-bar-container">
              <div
                className="service-two-star-bar"
                style={{ width: `${serviceRatingTwoWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="review-counter-display-container">
            <div className="display-star-container">1 star</div>
            <div className="display-bar-container">
              <div
                className="service-one-star-bar"
                style={{ width: `${serviceRatingOneWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessReviewsOverallRatings;
