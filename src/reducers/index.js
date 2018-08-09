import { combineReducers } from "redux";

import images from "./images";
import comments from "./comments";
import commentOpen from "./commentOpen";
import currentImage from "./currentImage";

export default combineReducers({
  images,
  comments,
  commentOpen,
  currentImage,
});