import {
  ADD_NEW_BOX,
  REMOVE_NEW_BOX,
  SET_COMMENT_BOX_OPEN,
  SET_COMMENT_BOX_CLOSE,
  ADD_MESSAGE,
  SET_CURRENT_IMAGE,
  FETCH_DATA, ADD_IMAGE
} from "../constants/action-types";
import {db} from "../firebase"
import shortid from "shortid";

export const fetchData = () => async dispatch => {
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
};

export const imageUpload = (imageUrl) => async (dispatch, getState) => {
  dispatch({
    type: ADD_IMAGE,
    payload: {id: shortid.generate(), imageUrl, data: getState().data}
  });
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
};

export const setCurrentImage = (id, images) => ({
  type: SET_CURRENT_IMAGE,
  payload: {id, images}
});


export const addNewBox = (id, x,y) => async (dispatch, getState) => {
  dispatch({
    type: ADD_NEW_BOX,
    payload: {
      id,
      x,
      y,
      data: getState().data
    }
  })
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
};


export const removeNewBox = (id, currentID)  => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_NEW_BOX,
    payload: {
      id,
      currentID,
      data: getState().data
    }
  })
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
};

export const setCommentBoxOpen = (id, currentID)  => async (dispatch, getState) => {
  dispatch({
    type: SET_COMMENT_BOX_OPEN,
    payload: {
      id,
      currentID,
      data: getState().data
    }
  })
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
}

export const setCommentBoxClose = (id, currentID) => async (dispatch, getState) => {
  dispatch({
    type: SET_COMMENT_BOX_CLOSE,
    payload: {
      id,
      currentID,
      data: getState().data
    }
  })
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
}

export const addMessage = (id, message, currentID) => async (dispatch, getState) => {
  dispatch({
    type: ADD_MESSAGE,
    payload: {
      id,
      message,
      currentID,
      data: getState().data
    }
  })
  db.onSnapshot( snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.data()
    });
  });
}