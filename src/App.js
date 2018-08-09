import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Intro from "./components/Intro";
import CommentCanvas from "./containers/CommentCanvas";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Intro} />
            <Route path="/images/:id" component={CommentCanvas} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
