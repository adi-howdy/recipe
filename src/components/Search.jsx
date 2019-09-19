import React, { Component } from 'react';

const Form = (props)=> {
   return(
    <form onSubmit={props.submitHandle}>
        <input type="text" name="recipeName"/>
        <button type="submit" >Search</button>
    </form>
   )
}

export default Form;