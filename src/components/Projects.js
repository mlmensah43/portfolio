import React from 'react';
import Project from './Project';
import '../css/App.css';
import '../css/Projects.css';

function Projects(){

    return (
        <div>
            
            <h1 id="project" className="heading page-title animated slideInLeft">projects</h1>
            <h3 className="sub-heading animated slideInLeft">Click on the image for the source code</h3>

            <Project image={require('../images/donut.png')} description=""></Project>
            <Project image={require('../images/calc.png')} ></Project>
            <Project image={require('../images/gallery.png')} ></Project>
            
        </div>
    );
};

export default Projects;