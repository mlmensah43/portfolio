import React from 'react';
import '../css/base.scss'
import '../css/projects.scss'

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
        <div id="project">
            <div className="card" style={{width: "18rem"}}>

                <img className="card-img-top" style={{width: "18rem"}} alt="project" src={props.image}></img>
                
                <div className="card-body">
                    <p className="card-title">{props.title}</p>
                    
                    {/* <p className="card-text">{props.description}</p> */}

                    <div className="flex-container-row button-row">
                        {button1(props.link1,props.press1)}
                        <button className="btn button"><a className="link" href={props.link2}>{props.press2}</a></button>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default Project;