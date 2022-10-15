import { useState } from "react";
import NextReviewStars from "../Home/NextReviewStars";
import "./WriteAReviewMain.css";

const WriteAReviewMain = ({ business }) => {
  const placeHolderTextOptions = [
    "Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and a wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed.",
    "If you want to find the world's best street burrito, look no further. Whenver I'm craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There's so many things to try outside of burritos though. Better to place your order ahead of time to skip the line.",
  ];

  let placeHolderText = placeHolderTextOptions[Math.floor(Math.random() * 2)];
  const [foodValue, setFoodValue] = useState("Select your rating");
  const [foodValueSelected, setFoodValueSelected] = useState(false);
  const [serviceValue, setServiceValue] = useState("Select your rating");
  const [serviceValueSelected, setServiceValueSelected] = useState(false);

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
        </form>
      </div>
    </>
  );
};

export default WriteAReviewMain;
