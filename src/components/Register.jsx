import React, { Component } from "react";
import Form from "react-bootstrap/Form";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val)=> {
            val.length > 0 && (valid = false)
        }
    );
    return valid;
    
    }

class Register extends Component {
  
constructor(props){
    super(props)
    this.state={
        Name: null,
        Password: null,
        Email: null,
    
    errors : {
        Name: '',
        Password: '',
        Email: ''
    }
}
this.onSubmitHanle = this.onSubmitHanle.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

onSubmitHanle = (event)=> {
    event.preventDefault();
    const {name, value } = event.target;
    let errors = this.state.errors;
    const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


    switch(name){
        case 'Name':
            errors.Name = 
                value.length < 5 ? 'Name should be 5 character long' :  '';
            console.log('Name error : ' + errors.Name);
            break;
        case 'Password':
            errors.Password = value.length < 8 ? 'Password must contain 8 characaters' : '';
            break;
        case 'Email':
            errors.Email = emailRegex.test(value) ? '': 'Invalid Email Addres';
            break;
        default:
            break;
    }

    this.setState(
        {
            errors, 
            [name]: value
        }
        )
}

    

    handleSubmit = (event) => {
        event.preventDefault();
       if (validateForm(this.state.errors))
       {
         //pass it to db
       } 
       else {
           //Error
       }

    }




  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="Name">
            <Form.Label >Name</Form.Label>
            <Form.Control type="text" name="Name" onChange={this.onSubmitHanle}/>
          </Form.Group>
          {errors.Name.length > 0 && <span>{errors.Name}</span>}
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" name="Password" onChange={this.onSubmitHanle}/>
          </Form.Group>
          {errors.Password.length > 0 && <span>{errors.Password}</span>}
          <Form.Group controlId="Email">
            <Form.Label >Email</Form.Label>
            <Form.Control type="text" name="Email" onChange={this.onSubmitHanle}/>
          </Form.Group>
          {errors.Email.length > 0 && <span>{errors.Email}</span>}
          <button type="submit">Submit</button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Register;
