import csrfFetch from "./csrf";

const GET_USERS = "users/getUsers";
const GET_USER = "users/getUser";

export const setUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const setUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export const getUsers = ({ users }) => (users ? Object.values(users) : []);
export const getUser =
  (userId) =>
  ({ users }) =>
    users ? users[userId] : null;

export const fetchUsers = () => async (dispatch) => {
  const res = await csrfFetch("/api/users");
  if (res.ok) {
    const data = await res.json();
    // dispatch(setUsers(data));
    dispatch(setUsers(data.users));
  }
};

export const fetchUser = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}`);
  if (res.ok) {
    const data = await res.json();
    // dispatch(setUser(data));
    dispatch(setUser(data.user));
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.payload };
    case GET_USER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default userReducer;
