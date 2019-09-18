import React, { Component } from 'react';
import { timeout } from 'q';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


class LoginForm extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            'name': '',
            'password': ''
        }
        this.onEnterUserName = this.onEnterUserName.bind(this);
        this.onEnterPassword = this.onEnterPassword.bind(this);
        this.onSubmitAll = this.onSubmitAll.bind(this);
    }

    onEnterUserName(event){
      this.setState(
          {name: event.target.value}
      )
    }

    onEnterPassword(event){
        this.setState(
            {password: event.target.value}
        )
      }


    onSubmitAll(){
        console.log(this.state.name + ' ' + this.state.password);
    }
    
    
    render() { 
        return ( 
            <div className="container">

                <form onSubmit={this.onSubmitAll}>
                    <label>UserName
                    <input type="text" value={this.state.name} onChange={this.onEnterUserName} placeholder="Enter your UserName"/>
                    </label>
                    <label>Password
                    <input type="password" value={this.state.password} onChange={this.onEnterPassword} placeholder="Enter your UserName"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
          );
    }
}
 
export default LoginForm;