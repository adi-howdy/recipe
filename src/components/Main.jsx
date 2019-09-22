import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Recipe from "./Recipe";
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component= {LoginForm} />
          <Route path="/Register" component = {Register}/>
          <Route path="/Recipe" component = {Recipe}/>
          <Route path="/RecipeDetails/:id" component = {RecipeDetails} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
