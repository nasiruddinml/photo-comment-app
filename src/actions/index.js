import { ADD_NEW_BOX, REMOVE_NEW_BOX, SET_COMMENT_BOX_OPEN, SET_COMMENT_BOX_CLOSE, ADD_MESSAGE, SET_CURRENT_IMAGE } from "../constants/action-types";

export const addNewBox = (id, x,y) => ({
  type: ADD_NEW_BOX,
  payload: {
    id,
    x,
    y
  }
});

export const removeNewBox = (id, currentID) => ({
  type: REMOVE_NEW_BOX,
  payload: {
    id,
    currentID
  }
});

export const setCommentBoxOpen = (id, currentID) => ({
  type: SET_COMMENT_BOX_OPEN,
  payload: {
    id,
    currentID
  }
})

export const setCommentBoxClose = (id, currentID) => ({
  type: SET_COMMENT_BOX_CLOSE,
  payload: {
    id,
    currentID
  }
})

export const addMessage = (id, message, currentID) => ({
  type: ADD_MESSAGE,
  payload: {
    id,
    message,
    currentID
  }
})

export const setCurrentImage = (id, images) => ({
  type: SET_CURRENT_IMAGE,
  payload: {
    id,
    images
  }
})

