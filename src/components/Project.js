import React from 'react';
import '../css/App.css'
import '../css/Projects.css'

function button1(word, name){
    if(word !== ""){
        return(
            <div>
                <button className="button"><a className="link" href={word}>{name}</a></button>
            </div>
        );
    }
}

function Project(props){

    return (
        <div>
            <div className="flex-container-row project-row">

                    <img className="project-image" alt="project" src={props.image}></img>
    
                
                
                <div className="project-description">
                    <p className="project-title">{props.title}</p>
                    
                    <p>{props.description}</p>

                    <div className="flex-container-row button-row">
                        {button1(props.link1,props.press1)}
                        <button className="button"><a className="link" href={props.link2}>{props.press2}</a></button>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default Project;