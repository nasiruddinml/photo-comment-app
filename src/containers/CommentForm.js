import React from "react";
import store from "../store";
import { addMessage } from "../actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ''
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addMessage(this.props.commentBox.id, this.state.inputValue, store.getState().currentImage.id));
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

export default CommentForm;