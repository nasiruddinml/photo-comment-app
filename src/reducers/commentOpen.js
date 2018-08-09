import {ADD_NEW_BOX, REMOVE_NEW_BOX, SET_COMMENT_BOX_CLOSE, SET_COMMENT_BOX_OPEN} from "../constants/action-types";

export default function commentOpen(state = false, action) {
  let oldState = state;

  switch (action.type) {

    case ADD_NEW_BOX:
      oldState = true
      return oldState

    case REMOVE_NEW_BOX:
      oldState = false
      return oldState

    case SET_COMMENT_BOX_CLOSE:
      oldState = false
      return oldState

    case SET_COMMENT_BOX_OPEN:
      oldState = true
      return oldState

    default:
      return state;
  }
}