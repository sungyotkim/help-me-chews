import csrfFetch from "./csrf";

const SET_REVIEWS = "reviews/setReviews";
const SET_REVIEW = "reviews/setReview";
const REMOVE_REVIEW = "reviews/removeReview";

export const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  payload: reviews,
});

export const setReview = (review) => ({
  type: SET_REVIEW,
  payload: review,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId,
});

export const getReviews = (state) => {
  return Object.values(state.reviews);
};
export const getReview =
  (reviewId) =>
  ({ reviews }) =>
    reviews ? reviews(reviewId) : null;
export const getReviewsByBusinessId =
  (businessId) =>
  ({ reviews }) => {
    return reviews.businessId === businessId ? reviews : null;
  };
export const getReviewsByAuthorId =
  (authorId) =>
  ({ reviews }) => {
    return Object.values(reviews).filter((review) => {
      return review.authorId === authorId;
    });
  };

export const createReview = (formData) => async (dispatch) => {
  const res = await fetch("/api/reviews", {
    headers: {
      "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token"),
    },
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  dispatch(setReview(data));
  return data;
};

export const updateReview = (formData, id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${id}`, {
    headers: {
      "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token"),
    },
    method: "PUT",
    body: formData,
  });
  const data = await res.json();
  dispatch(setReview(data));
  return data;
};

export const fetchReviews = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews");
  if (res.ok) {
    const data = await res.json();
    dispatch(setReviews(data));
  }
};

export const fetchReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.yelpId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setReview(data));
    return data;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  dispatch(removeReview(reviewId));
};

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, ...action.payload };
    case SET_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_REVIEW:
      const nextState = { ...state };
      delete nextState[action.payload];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;
