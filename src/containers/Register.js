import React from "react";

import './Login.css';
import {auth} from "../firebase";
import {Link} from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.pass)
      .then(data => {console.log(data); this.props.history.push('/login')})
      .catch(error => {
      // // Handle Errors here.
      //   this.setState({error: true});
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // console.log(this.state);
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
          <h1>Create Your Account</h1><br />
          <form onSubmit={this._handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={this._handleChange} />
            <input type="password" name="pass" placeholder="Password" onChange={this._handleChange} />
            <input type="submit" name="register" className="login loginmodal-submit" value="Register" />
          </form>

          <div className="login-help">
            {this.state.error ? (
              <p className="text-danger">Error Happened</p>
            ) : ''}
            <Link to={"/login"}>
              <button className="btn btn-default">Login</button>
            </Link>
          </div>
        </div>
      </div>
    )
  };
}
export default Register;