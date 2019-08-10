import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
        <Router>
            <nav class="navbar navbar-light ">
            <span class="navbar-brand mb-0 h1 name">Mariah Mensah</span>

            <div class="navbar-nav">
                <span id="nav-pages">
                    <Link to="./About"  className="nav-item">About</Link>
                    <Link to="./About"  className="nav-item">Project</Link>
                    <Link to="./About"  className="nav-item">Contact</Link>
                </span>
            </div>

            </nav>
        </Router>
        
    );
}

export default Nav;