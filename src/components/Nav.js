import React from 'react';
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
            <nav class="navbar navbar-light ">
            <span id="top" class="h1 name">Web Developer</span>

            <div class="navbar-nav">
                <span id="nav-pages">
                    <a href="#about" className="nav-item">about</a>
                    <a href="#project" className="nav-item">projects</a>
                    <a href="#contact" className="nav-item">contact</a>
                </span>
            </div>

            </nav>
        
    );
}

export default Nav;