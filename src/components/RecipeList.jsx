import React, { Component } from "react";

const RecipeList = props => {
  return (
    <div>
      {props.data.map(name => (
        <div>
          <img src={name.image_url} alt={name.title} />
          <p>{name.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
