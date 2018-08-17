import React from "react";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ''
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.props.commentBox.id, this.state.inputValue, this.props.currentImage.id);
    this.setState({inputValue: ''})
  }

  _handleChange = (e) => {
      e.preventDefault();
      this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this._handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Your comments" value={this.state.inputValue} onChange={this._handleChange}/>
        </div>
        <div className="form-group">
          <button className="btn btn-default" type="submit">Add</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ data, currentImage }) => {
  return {
    data, currentImage
  };
};

export default connect(mapStateToProps, actions)(CommentForm);