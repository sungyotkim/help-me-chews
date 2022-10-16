import csrfFetch from "./csrf";

const SET_BUSINESSES = "businesses/setBusinesses";
const SET_BUSINESS = "businesses/setBusiness";

export const setBusinesses = (businesses) => ({
  type: SET_BUSINESSES,
  payload: businesses,
});

export const setBusiness = (business) => ({
  type: SET_BUSINESS,
  payload: business,
});

export const getBusinesses = ({ businesses }) =>
  businesses ? Object.values(businesses) : [];
export const getBusiness =
  (businessId) =>
  ({ businesses }) =>
    businesses ? businesses(businessId) : null;

export const createBusiness = (business) => async (dispatch) => {
  const { yelpId } = business;
  const res = await csrfFetch("/api/businesses", {
    method: "POST",
    body: JSON.stringify(yelpId),
  });
  const data = await res.json();
  dispatch(setBusiness(data.buisness));
  return res;
};

export const fetchBusinesses = () => async (dispatch) => {
  const res = await csrfFetch("/api/businesses");
  if (res.ok) {
    const data = await res.json();
    dispatch(setBusinesses(data.businesses));
  }
};

export const fetchBusiness = (businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/businesses/${businessId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setBusiness(data.business));
  }
};

const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      return { ...state, ...action.payload };
    case SET_BUSINESS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default businessReducer;
