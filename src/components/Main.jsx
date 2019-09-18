import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component= {LoginForm} />
          <Register path="/Register" component = {Register}/>
        </Switch>
      </Router>
    );
  }
}

export default Main;
