import { useEffect, useState } from "react";
import NextReviewStars from "../ReviewStars/NextReviewStars";
import "./WriteAReviewMain.css";

const WriteAReviewMain = ({ business, yelpId, currentRating }) => {
  const placeHolderTextOptions = [
    "Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and a wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed.",
    "If you want to find the world's best street burrito, look no further. Whenver I'm craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There's so many things to try outside of burritos though. Better to place your order ahead of time to skip the line.",
  ];

  const [placeHolderText, setPlaceHolderText] = useState("");
  const [foodValue, setFoodValue] = useState("Select your rating");
  const [foodValueSelected, setFoodValueSelected] = useState(false);
  const [serviceValue, setServiceValue] = useState("Select your rating");
  const [serviceValueSelected, setServiceValueSelected] = useState(false);
  let starValues = ["Not good", "Could've been better", "OK", "Good", "Great"];

  useEffect(() => {
    setPlaceHolderText(placeHolderTextOptions[Math.floor(Math.random() * 2)]);

    if (currentRating) {
      setFoodValue(starValues[currentRating - 1]);
      setServiceValue(starValues[currentRating - 1]);
      setFoodValueSelected(starValues[currentRating - 1]);
      setServiceValueSelected(starValues[currentRating - 1]);
    }
  }, [business]);

  return (
    <>
      <div className="write-a-review-main-header">{business.name}</div>
      <div className="write-a-review-main-form">
        <form id="review-form">
          <div className="top-form-container">
            <div className="food-star-container">
              <NextReviewStars
                hideToolTip={true}
                foodValue={foodValue}
                setFoodValue={setFoodValue}
                foodValueSelected={foodValueSelected}
                setFoodValueSelected={setFoodValueSelected}
                currentRating={currentRating}
              />
              {foodValue}
            </div>
            <div className="service-star-container">
              <NextReviewStars
                hideToolTip={true}
                serviceValue={serviceValue}
                setServiceValue={setServiceValue}
                serviceValueSelected={serviceValueSelected}
                setServiceValueSelected={setServiceValueSelected}
                blueStars={true}
                currentRating={currentRating}
              />
              {serviceValue}
            </div>
            <textarea
              name="review-text"
              form="review-form"
              placeholder={placeHolderText}
              className="review-text-container"
            ></textarea>
          </div>
          <div className="attach-photo-container">
            <div className="attach-photo-header">Attach Photos</div>
            <div className="photo-input-container">
              <svg width={24} height={24}>
                <path d="M16 2a1 1 0 011 .68L17.72 5H20a3 3 0 013 3v11a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h2.28L7 2.68A1 1 0 018 2zm-.72 2H8.72L8 6.32A1 1 0 017 7H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-3a1 1 0 01-.95-.68L15.28 4zM12 9a1 1 0 011 1v2.5h2.5a1 1 0 110 2H13V17a1 1 0 11-2 0v-2.5H8.5a1 1 0 110-2H11V10a1 1 0 011-1z"></path>
              </svg>
            </div>
          </div>
          <div className="post-review-btn-container">
            <input type="submit" value="Post Review" id="post-review-btn" />
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteAReviewMain;
