import React from 'react';
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
        <div className="flex-container-row nav">
            <div className="name">MARIAH MENSAH</div>
            <img src={require('../images/logo.svg')} alt="logo"></img>
            <div className="job-title">WEB DEVELOPER</div>
        </div>
        
    );
}

export default Nav;