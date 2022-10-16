import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import businessesReducer from "./businesses";
import reviewsReducer from "./reviews";
import sessionReducer from "./session";
import usersReducer from "./users";

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessesReducer,
  users: usersReducer,
  reviews: reviewsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
