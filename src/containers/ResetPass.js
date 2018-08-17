import React from "react";

import './Login.css';
import firebase from "firebase";

class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
      .then(data => console.log(data))
      .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      this.setState({error: true});
      // ...
    });
  }

  _handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
..
  render() {
    return (
      <div className="login-container">
        <div className="loginmodal-container">
          <h1>Reset Your Password</h1><br />
          <form onSubmit={this._handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={this._handleChange} />
            <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
          </form>

          <div className="login-help">
            {this.state.error ? (
              <p className="text-danger">Your Email or Password is incorrect. Please try again</p>
            ) : ''}
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    )
  };
}
export default ResetPass;