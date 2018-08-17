import { combineReducers } from "redux";

import data from "./dataReducer";
import commentOpen from "./commentOpen";
import currentImage from "./currentImage";

export default combineReducers({
  data,
  commentOpen,
  currentImage,
});