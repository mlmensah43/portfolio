import React from 'react';
import {Link} from "react-router-dom";
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
            <nav class="navbar navbar-light ">
            <span class="navbar-brand mb-0 h1 name">Mariah Mensah</span>

            <div class="navbar-nav">
                <span id="nav-pages">
                    <Link to="/" className="nav-item">About</Link>
                    <Link to="/Projects" className="nav-item">Projects</Link>
                    <Link to="/" className="nav-item">Contact</Link>
                </span>
            </div>

            </nav>
        
    );
}

export default Nav;