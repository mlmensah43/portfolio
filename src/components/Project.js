import React from 'react';
import '../css/App.css'
import '../css/Projects.css'

function Project(props){

    return (
        <div>
            <div className="flex-container project-row">
                <div>
                    <img className="projects" alt="project" src={props.image}></img>
                </div>
                
                <div className="project-description">
                    <p className="project-title">Donut Shop</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                        elit, sed do eiusmod tempor incididunt ut labore <br/>
                        et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                        quis nostrud exercitation ullamco laboris nisi ut 
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Project;