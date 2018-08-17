import React from "react";
import CommentForm from "./CommentForm";
import "./Messages.css";
import moment from "moment";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

class Messages extends React.Component {

  _handleClose = (e) => {
    e.preventDefault();
    const currentId = this.props.currentImage.id;
    this.props.setCommentBoxClose(this.props.commentBox.id, currentId);
    const Comments = this.props.data.comments;
    const currentImage = Comments.find(el => el.id === currentId);
    const currentBox = currentImage.commentBoxes.find(el => el.id === this.props.commentBox.id);
    if (currentBox.messages.length < 1) {
      this.props.removeNewBox(this.props.commentBox.id, currentId);
    }
  }

  _handleSwitchDot = (e) => {
    e.preventDefault();
    const currentId = this.props.currentImage.id;
    const Comments = this.props.data.comments;
    const currentImage = Comments.find(el => el.id === currentId);
    const currentBox = currentImage.commentBoxes.find(el => el.id === this.props.commentBox.id);
    if (currentBox.open) {
      this.props.setCommentBoxClose(this.props.commentBox.id, currentId);
    } else {
      this.props.setCommentBoxOpen(this.props.commentBox.id, currentId);
    }
  }

  render() {
    const { commentBox} = this.props;
    return (
      <div className="comments" style={{left: (commentBox.x - 10)+'px', top: (commentBox.y - 10)+'px'}} onClick={(e) => e.stopPropagation()}>
        <div className="dot" onClick={this._handleSwitchDot}></div>
        { commentBox.open ? (
          <div className="detailBox">
            <div className="titleBox">
              <label>Comments Box</label>
              <button type="button" className="close" aria-hidden="true" onClick={this._handleClose}>&times;</button>
            </div>
            <div className="actionBox">
              <ul className="commentList">
                {commentBox.messages.map((el, i) => {
                  return (<li key={i}>
                    <div className="commenterImage">
                      <img src={el.photo} alt=""/>
                      <span className="sub-text">{el.name}</span>
                    </div>
                    <div className="commentText">
                      <p className="message">{el.message}</p>
                      <p className="date sub-text">{moment(el.date).fromNow()}</p>
                    </div>
                  </li>)
                })}
              </ul>
              <CommentForm commentBox={commentBox}/>
            </div>
          </div>
        ) : ''}
      </div>
    )
  }
}

const mapStateToProps = ({ data, currentImage }) => {
  return {
    data,
    currentImage
  };
};

export default connect(mapStateToProps, actions)(Messages);


