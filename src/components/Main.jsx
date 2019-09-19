import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Recipe from "./Recipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component= {LoginForm} />
          <Register path="/Register" component = {Register}/>
          <Recipe path="/Recipe" component = {Recipe}/>
        </Switch>
      </Router>
    );
  }
}

export default Main;
