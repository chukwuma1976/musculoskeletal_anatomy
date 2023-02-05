import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <h1 className="title">Welcome to Musculoskeletal Anatomy for Exercise</h1>
            <h3>Here we take a detailed look at the muscles responsble for motion.</h3>
            <h3>We also look at the skeletal structure responsble for supporting all this muscle.</h3>
            <div className="home-navlink">
                <NavLink to="/muscles" style={{color: 'red'}}>
                    Click here to look at some muscles 
                </NavLink>
                <br/>
                <NavLink to="/bones" style={{color: 'red'}}>
                    Or click here to see some bones
                </NavLink>
                <br/>
                <NavLink to="/add_muscle" style={{color: 'red'}} >
                    Is there a muscle to add?  Click here to add a muscle.
                </NavLink>
                <br/>
                <NavLink to="/add_bone" style={{color: 'red'}}>
                    Or maybe there is a bone to add?  Click here to add a bone.
                </NavLink>
            </div>   
            <img 
                src="https://i.giphy.com/media/oYQApZ7o6x8hG/giphy.webp" 
                alt="muscle and bone"
            />
    </div>
    )
}

export default Home;