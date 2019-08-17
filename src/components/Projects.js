import React from 'react';
import '../css/App.css'
import '../css/Projects.css'

function Project(){

    return (
        <div>
            {/* <Nav></Nav> */}
            <h1 id="project" className="heading page-title animated slideInDown">projects</h1>
            <h3 className="sub-heading">Click on the image for the source code</h3>

            <div className="flex-container">
                <div>
                    <img className="projects" alt="donut" src={require('../images/donut.png')}></img>
                </div>
                
                <div className="project-description">
                    <p className="project-title">Donut<br/>Shop</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                        elit, sed do eiusmod tempor incididunt ut labore <br/>
                        et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                        quis nostrud exercitation ullamco laboris nisi ut 
                    </p>
                </div>
                
            </div>

            <div className="flex-container">
                <div>
                    <img className="projects" alt="calculator" src={require('../images/calc.png')}></img>
                </div>
                
                <div className="project-description">
                    <p className="project-title">Simple<br/>Calculator</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                        elit, sed do eiusmod tempor incididunt ut labore <br/>
                        et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                        quis nostrud exercitation ullamco laboris nisi ut 
                    </p>
                </div>
                
            </div>

            <div className="flex-container">
                <div>
                    <img className="projects" alt="calculator" src={require('../images/gallery.png')}></img>
                </div>
                
                <div className="project-description">
                    <p className="project-title">Gallery<br/></p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                        elit, sed do eiusmod tempor incididunt ut labore <br/>
                        et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                        quis nostrud exercitation ullamco laboris nisi ut 
                    </p>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default Project;