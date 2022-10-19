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

export const getBusinesses = (state) => {
  return Object.values(state.businesses);
};
export const getBusiness =
  (yelpId) =>
  ({ businesses }) => {
    return Object.values(businesses).filter((business) => {
      return business.yelpId === yelpId;
    })[0];
  };

export const createBusiness = (business) => async (dispatch) => {
  const res = await csrfFetch(`/api/businesses/`, {
    method: "POST",
    body: JSON.stringify(business),
  });
  const data = await res.json();
  dispatch(setBusiness(data));
  return data;
};

export const fetchBusinesses = () => async (dispatch) => {
  const res = await csrfFetch("/api/businesses");
  if (res.ok) {
    const data = await res.json();
    dispatch(setBusinesses(data));
    return data;
  }
};

const businessesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      return { ...state, ...action.payload };
    case SET_BUSINESS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default businessesReducer;
