import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import { db, auth } from "./firebase/"

import './App.css';
import Intro from "./components/Intro";
import CommentCanvas from "./containers/CommentCanvas";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ImageUpload from "./containers/ImageUpload";


class App extends Component {
  constructor(props) {
    super(props);
    this.user = auth.currentUser;
  }

  async componentWillMount() {
    await this.props.fetchData();
    await auth.onAuthStateChanged(user => {
      this.user = user;
      if (!this.user) {
        this.props.history.push('/register');
      } else {
        this.props.history.push('/images');
      }
    });
  }

  render() {
    return (
      <div className="App">
          <div>
            <Route exact path="/" component={Register} />
            <Route exact path="/images" component={Intro} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Register} />
            <Route exact path="/images/:id" component={CommentCanvas} />
            <Route path="/upload" component={ImageUpload} />
          </div>
      </div>
    );
  }
}
const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(App);


