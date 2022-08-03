
import React, {useEffect, useState} from 'react';


import { Nav, NavLink, Bars, NavMenu } from './NavElements';
import "./Nav.css";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [expand, setExpand] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
     setExpand(false);
  },[location])
  return(
    <>
    <Nav id={expand ? "open" : "close"}>
      
        <NavLink className="Links" to="/">
         <h1>Home</h1>        
        </NavLink> 
        {/* <Bars onClick={()=> {
          setExpand((prev)=> !prev);
          }} /> */}
        <NavMenu>
        <NavLink  className="Links" to="/experience" activeStyle>Experience
         </NavLink>
        <NavLink className="Links" to="/project/1"activeStyle>
                Projects
        </NavLink>
        </NavMenu>
    </Nav>
    </>
  );

};

export default NavBar;