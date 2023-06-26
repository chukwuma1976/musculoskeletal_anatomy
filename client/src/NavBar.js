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
            to="/muscles_"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Muscles
          </NavLink>
          <NavLink
            to="/bones_"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Bones
          </NavLink>
          <NavLink
            to="/add_muscle"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Add A Muscle
          </NavLink>
          <NavLink
            to="/add_bone"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Add A Bone
          </NavLink>
        </div>
      );
}

export default NavBar;