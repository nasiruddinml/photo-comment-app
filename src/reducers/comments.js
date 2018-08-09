import { Comments } from "../static-data";

import {
  ADD_MESSAGE,
  ADD_NEW_BOX,
  REMOVE_NEW_BOX,
  SET_COMMENT_BOX_CLOSE,
  SET_COMMENT_BOX_OPEN
} from "../constants/action-types";
import shortid from "shortid";
import faker from "faker";

export default function comments(state = Comments , action) {
  const oldState = state;

  switch (action.type) {

    case ADD_NEW_BOX:
      let currentImage = oldState.find(el => el.id === action.payload.id);
      currentImage.commentBoxes.push({id: shortid.generate(), x: action.payload.x, y: action.payload.y, open: true, messages: []});
      return oldState;

    case REMOVE_NEW_BOX:
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      let currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      let currentIndex = currentImage.commentBoxes.indexOf(currentBox);
      currentImage.commentBoxes.splice(currentIndex, 1);
      return oldState;

    case ADD_MESSAGE:
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      const currentCommentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentCommentBox.messages.push({name: faker.name.firstName(), date: 'On'+ new Date(), photo: faker.internet.avatar(), message: action.payload.message});
      return oldState;

    case SET_COMMENT_BOX_CLOSE:
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentBox.open = false;
      return oldState;

    case SET_COMMENT_BOX_OPEN:
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentBox.open = true;
      return oldState;

    default:
      return state;
  }
}