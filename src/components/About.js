import React from 'react';
import Nav from './Nav'
import Projects from './Projects';
import Contact from './Contact';
import 'animate.css';
import '../css/App.css'
import '../css/About.css'


const About = () => {

    return (
        <div id="about">
            <Nav></Nav>
            <h1 className="page-title animated slideInLeft">about</h1>
            <p className="description description-intro animated slideInRight"> Hi, my name is</p>
            <h1 className="description-name animated slideInRight">Mariah Mensah</h1>
            <p className="description animated slideInRight">
                I recently graduated from Tennessee Tech Univeristy with a BSCS(Bachelors of Science in Computer Science). 
                During my time there I discovered the magic of what the world of technology has to offer. 
                In the past year, I have developed an intense love for front end development and design work. 
                I am dedicated to finding an opportunity to learn and grow my skill set through
                being a valuable asset to a prospective company and development team. Below you will find some of the projects that I have and various points of contact. Thank you and hope to hear from you soon!
                <br/> 
            </p>

            <Projects hide="true"></Projects>
            <Contact hide="true"></Contact>
    
        </div>
    );

}

export default About;