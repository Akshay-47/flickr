import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import moviesReducer from "./movies";
import scrollReducer from "./scroll";

const reducer = combineReducers({
  movies: moviesReducer,
  scroll_: scrollReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;
