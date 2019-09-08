import React from 'react';
import '../css/App.css'
import '../css/Projects.css'

function Project(props){

    return (
        <div>
            <div className="flex-container-row project-row">
                <div>
                    <img className="projects" alt="project" src={props.image}></img>
                </div>
                
                <div className="project-description">
                    <p className="project-title">{props.title}</p>
                    
                    <p>{props.description}</p>
                    <a className="link" href={props.link}>Visit the Site →</a>
                </div>
                
            </div>
        </div>
    );
}

export default Project;