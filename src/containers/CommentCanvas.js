import React from 'react';
import store from "../store";
import Comments from "../components/Comments";
import {addNewBox, removeNewBox, setCommentBoxClose} from "../actions";

class CommentCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.currentImage = store.getState().images.find(el => el.id === this.props.match.params.id); // Pick current Image from url
    this.state = {
      x: '',
      y: '',
    }
  }

  _onMouseMove = (e) => e.preventDefault(); //this.setState({ x: e.clientX, y: e.clientY });

  _handleClick = (e) => {
    e.preventDefault();

    // Check if there any open comment box present
    const isCommentOpen = store.getState().commentOpen;
    if (isCommentOpen) {
      const currentId = store.getState().currentImage.id;
      const Comments = store.getState().comments;
      const currentImage = Comments.find(el => el.id === currentId);
      const currentBox = currentImage.commentBoxes.find(el => el.open === true);
      store.dispatch(setCommentBoxClose(currentBox.id, currentId));
      if (currentBox.messages.length < 1) {
        store.dispatch(removeNewBox(currentBox.id, currentId));
      }
    } else {
      store.dispatch(addNewBox(this.props.match.params.id, e.clientX, e.clientY));
    }
  };

  componentWillMount() {
    if (!this.currentImage) {
      this.props.history.push('/');
    }
  }

  render() {
    const comments = store.getState().comments.find(data => data.id === this.props.match.params.id);
    return (
      <div className="container-fluid">
        <div className="commentCanvas">
          {this.currentImage ? (
            <img src={this.currentImage.url} alt="" className="img-responsive" onMouseMove={this._onMouseMove} onClick={this._handleClick}/>
          ) : ''}
          <Comments commentBoxes={comments ? comments.commentBoxes : ''}/>
          <button onClick={() => this.props.history.push('/')} className="btn, btn-default, btn-primary btn-lg">back</button>
        </div>
      </div>
    )
  }
}

export default CommentCanvas