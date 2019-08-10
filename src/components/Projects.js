import React from 'react';
import Nav from './Nav'
import Socials from './Socials'
import '../css/App.css'
import '../css/Projects.css'

function Project(){

    return (
        <div>
            <Nav></Nav>
            <h1 className="page-title animated slideInDown">projects</h1>
            
            <Socials></Socials>
            
        </div>
    );
};

export default Project;