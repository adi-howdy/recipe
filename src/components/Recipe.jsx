import React, { Component } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";

class Recipe extends Component {
  state = {
    data: []
  };

  submitHandle = e => {
    e.preventDefault();
    //console.log(e.target.elements.recipeName.value);

    fetch(
      "https://www.food2fork.com/api/search?key=b6e56580d86ae5aca0c37b4190583b63"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({ data: result.recipes });
        console.log(this.state.data);
      });

    /* const api_call = await  fetch("https://www.food2fork.com/api/search?key=b6e56580d86ae5aca0c37b4190583b63");
      const data = await api_call.json();
      console.log(data); */
  };

  render() {
    return (
      <React.Fragment>
        <h5 className="mainHeading">Recipe</h5>
        <hr />
        <Search submitHandle={this.submitHandle} />
        <RecipeList data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Recipe;
