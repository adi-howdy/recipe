import React, { Component } from "react";
import Recipe from './Recipe';
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';


const RecipeList = props => {
  return (
    <div>
      {props.data.map(name => (
      <div>
        <div className="image-box">
          <div className = "gallery-image">
          <img src={name.image_url} alt={name.title} />
          </div>
        <div className="transparent-box">
        <div className="caption">
          <p>{name.title}</p>
          </div>
          </div>
           
        </div>
        <button>
       <Link to={{pathname: `/RecipeDetails/${name.recipe_id}`, state: {recipeDetails: name}}}>View Recipe</Link>
       </button>
     </div>
      ))}
    </div>
  );
};


export default RecipeList;
