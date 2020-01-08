import React from 'react';
import '../css/Nav.css';


const Nav = (props) =>{
    
    return(
        // <div className="flex-container-row nav">
        <div className="flex-container-row nav">
            <div className="flex-container-column logo">
                <img className="logo-image" src={require('../images/logo.png')} alt="logo"></img>
           
             </div>
        </div>
            
            // 
            // <div>
            //     <ul className="nav-links">
            //         <li className="nav-link">about</li>
            //         <li className="nav-link">projects</li>
            //         <li className="nav-link">contact</li>
            //     </ul>

            // </div> 
        //</div>
        
    );
}

export default Nav;