import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';


const Navbar =()=>{

     return(
       <>
        <nav className="navbar">
           <li className="nav-item">
        <div className="logo">
            <NavLink  to="/Home
            className="nav-links>
            LOGO 
             </NavLink></div>
           </li>
            <li className="nav-item">
      <NavLink to="/Login" className="nav-links">Login
       </NavLink>
       </li>
        <li className="nav-item">
        <NavLink  to="/Home"
       className="nav-links"
      >Home
       </NavLink>
       </li>
        <li className="nav-item">
        <NavLink  to="/Task"
       className="nav-links"
      >Task
       </NavLink>
       </li>
        <li className="nav-item">
        <NavLink  to="/User"
       className="nav-links"
      >User
       </NavLink>
       </li>
             </nav>
         </>
     )
}

export default Navbar;