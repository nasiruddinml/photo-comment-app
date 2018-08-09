import React from "react";
import "./Comments.css";
import Messages from "../containers/Messages";

const Comments = ({commentBoxes}) => {
  return (
    <div className="commentBoxes">
      {commentBoxes ? commentBoxes.map(el => { return <Messages commentBox={el} key={el.id} />}) : ''}
    </div>
  )
}
export default Comments;


