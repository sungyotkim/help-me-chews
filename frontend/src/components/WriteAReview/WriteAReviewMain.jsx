import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { createReview, updateReview } from "../../store/reviews";
import NextReviewStars from "../ReviewStars/NextReviewStars";
import "./WriteAReviewMain.css";

const WriteAReviewMain = ({
  business,
  currentRating,
  action,
  authorId,
  businessId,
  currentReview,
  reviewArr,
}) => {
  const placeHolderTextOptions = [
    "Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and a wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed.",
    "If you want to find the world's best street burrito, look no further. Whenver I'm craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There's so many things to try outside of burritos though. Better to place your order ahead of time to skip the line.",
  ];

  const [placeHolderText, setPlaceHolderText] = useState("");
  const [foodValue, setFoodValue] = useState("Select your food rating");
  const [foodValueSelected, setFoodValueSelected] = useState(false);
  const [serviceValue, setServiceValue] = useState(
    "Select your service rating"
  );
  const [serviceValueSelected, setServiceValueSelected] = useState(false);
  const [redirect, setRedirect] = useState(false);
  let starValues = [
    "",
    "Not good",
    "Could've been better",
    "OK",
    "Good",
    "Great",
  ];
  const [reviewText, setReviewText] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [files, setFiles] = useState([]);
  const [tooManyPhotos, setTooManyPhotos] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPlaceHolderText(placeHolderTextOptions[Math.floor(Math.random() * 2)]);

    if (currentRating) {
      setFoodValue(starValues[currentRating]);
      setServiceValue(starValues[currentRating]);
      setFoodValueSelected(starValues[currentRating]);
      setServiceValueSelected(starValues[currentRating]);
    }
    if (currentReview) {
      setReviewText(currentReview.text);
      setFoodValue(starValues[currentReview.foodRating]);
      setFoodValueSelected(starValues[currentReview.foodRating]);
      setServiceValue(starValues[currentReview.serviceRating]);
      setServiceValueSelected(starValues[currentReview.serviceRating]);
    }
  }, [business]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      text: reviewText,
      foodRating: starValues.indexOf(foodValueSelected),
      serviceRating: starValues.indexOf(serviceValueSelected),
      authorId: authorId,
      businessId: businessId,
    };
    const formData = new FormData();
    formData.append("review[text]", reviewText);
    formData.append(
      "review[foodRating]",
      starValues.indexOf(foodValueSelected)
    );
    formData.append(
      "review[serviceRating]",
      starValues.indexOf(serviceValueSelected)
    );
    formData.append("review[authorId]", authorId);
    formData.append("review[businessId]", businessId);
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("review[photos][]", file);
      });
    }

    setErrors([]);

    if (review.foodRating === -1) {
      setErrors(["Please fill out food rating"]);
      return;
    }
    if (review.serviceRating === -1) {
      setErrors(["Please fill out service rating"]);
      return;
    }

    if (action === "create") {
      return (
        dispatch(createReview(formData))
          .catch(async (res) => {
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          })
          // .then(setRedirect(true));
          .then(setLoading(true))
      );
    } else if (action === "edit") {
      return (
        dispatch(updateReview(formData, currentReview.id))
          .catch(async (res) => {
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          })
          // .then(setRedirect(true));
          .then(setLoading(true))
      );
    }
  };

  let msgOptions = [
    "Your review has been successfully created!",
    "Your review has been successfully updated!",
  ];
  let msg = msgOptions[0];

  useEffect(() => {
    let timer;
    if (loading) {
      switch (files.length) {
        case 0:
          timer = 200;
          break;
        case 1:
          timer = 1000;
          break;
        case 2:
          timer = 2000;
          break;
        case 3:
          timer = 3000;
          break;
        case 4:
          timer = 4000;
          break;
        default:
          timer = 200;
          break;
      }
      setTimeout(() => {
        setRedirect(true);
      }, timer);
    }
  }, [loading]);

  if (redirect) {
    if (action === "edit") {
      msg = msgOptions[1];
    }

    return (
      <Redirect
        to={{
          pathname: `/business/${business.id}`,
          state: {
            result: business,
            msg: msg,
            reviewArr: reviewArr,
          },
        }}
      />
    );
  }

  let currentFoodRating;
  let currentServiceRating;

  if (currentReview) {
    currentFoodRating = currentReview.foodRating;
    currentServiceRating = currentReview.serviceRating;
  }

  const handleCloseErrors = () => {
    setErrors([]);
  };

  const handleFile = () => {
    document.getElementById("upload-file").click();
  };

  const selectFile = () => {
    const currentFiles = document.getElementById("upload-file").files;
    const filesList = [];
    for (let i = 0; i < currentFiles.length; i++) {
      filesList.push(currentFiles[i]);
    }
    setFiles(filesList);
    if (filesList.length > 4) {
      setTooManyPhotos(true);
    } else {
      setTooManyPhotos(false);
    }
  };

  return (
    <>
      <div className="signup-alert-container">
        {errors.length > 0 && (
          <div className="login-errors">
            <div>{errors[0]}</div>
            <div className="close-login-errors" onClick={handleCloseErrors}>
              ×
            </div>
          </div>
        )}
      </div>
      <div className="write-a-review-main-header">{business.name}</div>
      <div className="write-a-review-main-form">
        <form id="review-form" onSubmit={handleSubmit}>
          <div className="top-form-container">
            <div className="food-star-container">
              Food rating:
              <NextReviewStars
                hideToolTip={true}
                foodValue={foodValue}
                setFoodValue={setFoodValue}
                foodValueSelected={foodValueSelected}
                setFoodValueSelected={setFoodValueSelected}
                currentRating={currentRating}
                currentReviewRating={currentFoodRating}
              />
              {foodValue}
            </div>
            <div className="service-star-container">
              Service rating:
              <NextReviewStars
                hideToolTip={true}
                serviceValue={serviceValue}
                setServiceValue={setServiceValue}
                serviceValueSelected={serviceValueSelected}
                setServiceValueSelected={setServiceValueSelected}
                blueStars={true}
                currentRating={currentRating}
                currentReviewRating={currentServiceRating}
              />
              {serviceValue}
            </div>
            <textarea
              name="review-text"
              form="review-form"
              placeholder={placeHolderText}
              className="review-text-container"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="attach-photo-container">
            <div className="attach-photo-header">Attach Photos (up to 4)</div>
            <div className="photo-input-container" onClick={handleFile}>
              <svg width={24} height={24}>
                <path d="M16 2a1 1 0 011 .68L17.72 5H20a3 3 0 013 3v11a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h2.28L7 2.68A1 1 0 018 2zm-.72 2H8.72L8 6.32A1 1 0 017 7H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-3a1 1 0 01-.95-.68L15.28 4zM12 9a1 1 0 011 1v2.5h2.5a1 1 0 110 2H13V17a1 1 0 11-2 0v-2.5H8.5a1 1 0 110-2H11V10a1 1 0 011-1z"></path>
              </svg>
            </div>
            {files.length > 0 && !tooManyPhotos && (
              <div className="file-name-container">
                {files.map((file, i) => {
                  return (
                    <div className="file-name" key={file.name}>
                      {i !== 0 ? ", " : ""} {file.name}
                    </div>
                  );
                })}
              </div>
            )}
            {tooManyPhotos && (
              <div className="file-name-container">
                <div className="file-name">Please select up to 4 photos</div>
              </div>
            )}
            <input
              type="file"
              id="upload-file"
              style={{ display: "none" }}
              onChange={selectFile}
              accept="image/png, image/jpg, image/jpeg"
              multiple
            />
          </div>
          <div className="post-review-btn-container">
            <input
              type="submit"
              value={loading ? "Submitting..." : "Post Review"}
              id="post-review-btn"
              disabled={tooManyPhotos ? true : false}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteAReviewMain;
