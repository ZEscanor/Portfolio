
import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavElements';

const NavBar = () => {
  return(
    <>
    <Nav>
        <NavLink to="/">
         <h1>Home</h1>        
        </NavLink> 
        <Bars />
        <NavMenu>
        <NavLink to="about" activeStyle>About
         </NavLink>
        <NavLink to="/contact" activeStyle >Contact
        </NavLink>
        <NavLink to="/project/1"activeStyle>
                Projects
        </NavLink>
        </NavMenu>
    </Nav>
    </>
  );

};

export default NavBar;