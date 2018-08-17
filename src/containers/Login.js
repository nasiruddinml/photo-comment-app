import React from "react";

import './Login.css';
import firebase from "firebase";
import {auth} from "../firebase";
import {Link} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.user = auth.currentUser;
  }

  async componentWillMount() {
    await auth.onAuthStateChanged(user => {
      this.user = user;
      if (this.user) {
        this.props.history.push('/images');
      }
    });


  }

  _handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
      .then(data => {console.log(data); this.props.history.push('/images')})
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

  render() {
    return (
      <div className="login-container">
        <div className="loginmodal-container">
          <h1>Login to Your Account</h1><br />
          <form onSubmit={this._handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={this._handleChange} />
            <input type="password" name="pass" placeholder="Password" onChange={this._handleChange} />
            <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
          </form>

          <div className="login-help">
            {this.state.error ? (
              <p className="text-danger">Your Email or Password is incorrect. Please try again</p>
            ) : ''}
            <Link to={"/register"}><button className="btn btn-default">Register</button></Link> - <a className="btn btn-default">Forgot Password</a>
          </div>
        </div>
      </div>
    )
  };
}
export default Login;