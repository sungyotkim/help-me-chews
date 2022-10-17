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

export const getReviews = ({ reviews }) =>
  reviews ? Object.values(reviews) : [];
export const getReview =
  (reviewId) =>
  ({ reviews }) =>
    reviews ? reviews(reviewId) : null;

export const createReview = (review) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(review),
  });
  const data = await res.json();
  dispatch(setReview(data.review));
  return res;
};

export const updateReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
  });
  const data = await res.json();
  dispatch(setReview(data.review));
  return res;
};

export const fetchReviews = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews");
  if (res.ok) {
    const data = await res.json();
    dispatch(setReviews(data.reviews));
  }
};

export const fetchReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setReview(data.review));
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  dispatch(removeReview(reviewId));
};

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, ...action.payload };
    case SET_REVIEW:
      return { ...state, ...action.payload };
    case REMOVE_REVIEW:
      const nextState = { ...state };
      delete nextState[action.payload];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;
