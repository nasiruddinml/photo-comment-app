import {SET_CURRENT_IMAGE} from "../constants/action-types";

export default function currentImage(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_IMAGE:
      const { id, images } = action.payload
      let currentImage = images.find(el => el.id === id);
      return currentImage
    default:
      return state;
  }
}