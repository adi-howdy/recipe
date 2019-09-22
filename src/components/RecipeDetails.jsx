import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";



class RecipeDetails extends Component {
    state = {  }
    
    render() { 
        const recipe = this.props.location.state.recipeDetails;
       console.log(this.props);
       console.log(this.props.location.state.recipeDetails.title);
        return (
            
            <div className="container">
            <img src={recipe.image_url} />
            <p>{recipe.title}</p>
            </div>
          );
    }
}
 

export default RecipeDetails;