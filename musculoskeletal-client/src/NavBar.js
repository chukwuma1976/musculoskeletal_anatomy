import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
          <NavLink
            to="/"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Home Page
          </NavLink>
          <NavLink
            to="/muscles"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Muscles
          </NavLink>
          <NavLink
            to="/bones"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Bones
          </NavLink>
        </div>
      );
}

export default NavBar;