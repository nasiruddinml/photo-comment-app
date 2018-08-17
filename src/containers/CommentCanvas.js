import React from 'react';
import Comments from "../components/Comments";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";
import "./CommentCanvas.css";

class CommentCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.currentImage = this.props.currentImage; // Pick current Image from url
    this.state = {
      x: '',
      y: '',
    }
  }

  _onMouseMove = (e) => e.preventDefault(); //this.setState({ x: e.clientX, y: e.clientY });

  _handleClick = (e) => {
    e.preventDefault();

    // Check if there any open comment box present
    const isCommentOpen = this.props.commentOpen;
    if (isCommentOpen) {
      const currentId = this.state.currentImage.id;
      const Comments = this.props.comments;
      const currentImage = Comments.find(el => el.id === currentId);
      const currentBox = currentImage.commentBoxes.find(el => el.open === true);
      this.props.setCommentBoxClose(currentBox.id, currentId);
      if (currentBox.messages.length < 1) {
        this.props.removeNewBox(currentBox.id, currentId);
      }
    } else {
      this.props.addNewBox(this.props.currentImage.id, e.clientX, e.clientY);
    }
  };

  async componentWillMount() {
    await this.props.fetchData();
    console.log(this.props);
    if (!this.currentImage.id) {
      console.log('I have been called');
      this.props.history.push('/images');
    }
  }

  render() {
    const comments = this.props.data.comments.find(data => data.id === this.props.match.params.id);
    return (
      <div className="container-fluid">
        <div className="commentCanvas">
          {this.currentImage ? (
            <img src={this.currentImage.url} alt="" className="img-responsive" onMouseMove={this._onMouseMove} onClick={this._handleClick}/>
          ) : ''}
          <Comments commentBoxes={comments ? comments.commentBoxes : ''}/>
        </div>
        <button onClick={() => this.props.history.push('/images')} className="btn, btn-default, btn-primary btn-lg">back</button>
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

export default connect(mapStateToProps, actions)(CommentCanvas);