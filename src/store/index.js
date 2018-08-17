import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import combineReducers from "../reducers";

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // For Dev tools
  applyMiddleware(reduxThunk)
);

export default store;