import React, { Component } from 'react';
import NavBar from './NavBar';



const Form = (props)=> {
   return(
    <div>
    <NavBar />
    <form onSubmit={props.submitHandle}>
        <input type="text" name="recipeName"/>
        <button type="submit" >Search</button>
    </form>
    </div>
   )
}

export default Form;