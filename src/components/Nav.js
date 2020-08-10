import React from 'react';
import '../css/nav.scss';


const Nav = (props) =>{
    
    return(
        // <div className="flex-container-row nav">
        <div id="nav" className="flex-container-row">
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