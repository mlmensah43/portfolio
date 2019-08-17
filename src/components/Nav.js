import React from 'react';
import {Link} from "react-router-dom";
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
            <nav class="navbar navbar-light ">
            <span class="h1 name">Web Developer</span>

            <div class="navbar-nav">
                <span id="nav-pages">
                    <Link to="/" className="nav-item">about</Link>
                    <Link to="/Projects" className="nav-item">projects</Link>
                    <Link to="/Contact" className="nav-item">contact</Link>
                </span>
            </div>

            </nav>
        
    );
}

export default Nav;