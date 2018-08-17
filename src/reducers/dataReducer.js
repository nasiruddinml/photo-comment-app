import {
  ADD_IMAGE,
  ADD_MESSAGE,
  ADD_NEW_BOX,
  FETCH_DATA,
  REMOVE_NEW_BOX, SET_COMMENT_BOX_CLOSE, SET_COMMENT_BOX_OPEN
} from "../constants/action-types";
import {db} from "../firebase";
import shortid from "shortid";
import faker from "faker";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;

    case ADD_IMAGE:
      let { id, imageUrl, data } = action.payload;
      data.images.push({id, url: imageUrl});
      data.comments.push({id, commentBoxes:[]});
      db.update({
        images: data.images,
        comments: data.comments
      });
      return state;

    case ADD_NEW_BOX:
      let oldState = action.payload.data.comments;
      let currentImage = oldState.find(el => el.id === action.payload.id);
      currentImage.commentBoxes.push({id: shortid.generate(), x: action.payload.x, y: action.payload.y, open: true, messages: []});
      db.update({
        comments: oldState
      });
      return state;

    case REMOVE_NEW_BOX:
      oldState = action.payload.data.comments;
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      let currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      let currentIndex = currentImage.commentBoxes.indexOf(currentBox);
      currentImage.commentBoxes.splice(currentIndex, 1);
      db.update({
        comments: oldState
      });
      return state;

    case ADD_MESSAGE:
      oldState = action.payload.data.comments;
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      const currentCommentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentCommentBox.messages.push({name: faker.name.firstName(), date: 'On'+ new Date(), photo: faker.internet.avatar(), message: action.payload.message});
      db.update({
        comments: oldState
      });
      return state;

    case SET_COMMENT_BOX_CLOSE:
      oldState = action.payload.data.comments;
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentBox.open = false;
      db.update({
        comments: oldState
      });
      return state;

    case SET_COMMENT_BOX_OPEN:
      oldState = action.payload.data.comments;
      currentImage = oldState.find(el => el.id === action.payload.currentID);
      currentBox = currentImage.commentBoxes.find(el => el.id === action.payload.id);
      currentBox.open = true;
      db.update({
        comments: oldState
      });
      return state;

    default:
      return state;
  }
};