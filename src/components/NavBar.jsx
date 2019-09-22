import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap"; 


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
              <Navbar bg="light" expand="lg">
              <Nav className="mr-auto">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Recipe">Recipe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>  
          </Nav>
          </Navbar>
          </div>  
         );
    }
}
 
export default NavBar;