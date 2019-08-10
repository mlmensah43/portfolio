import React from 'react';
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
        <nav class="navbar navbar-light ">
            <span class="navbar-brand mb-0 h1 name">Mariah Mensah</span>
            <div class="navbar-nav">
                <span id="nav-pages">
                    <a class="nav-item " href="./About">About</a>
                    <a class="nav-item " href="./About">Project</a>
                    <a class="nav-item " href="./About">Contact</a>
                </span>
            </div>
        </nav>
    );
}

export default Nav;