import React from 'react';
import Nav from './Nav'
import Projects from './Projects';
import Contact from './Contact';
import 'animate.css';
import '../css/App.css'
import '../css/About.css'


const About = () => {

    return (
        <div>
            <Nav></Nav>
            <h1 className="page-title animated slideInDown">about</h1>
            <p className="description description-intro animated slideInUp"> Hi, my name is</p>
            <h1 className="description-name animated slideInUp">Mariah<br/>Mensah</h1>
            <p className="description animated slideInUp">
                What it do boo. I ain't gone do alot of talking, you know what it is.
                <br/>Check out my work and hit me up if you got the big bucks.
            </p>

            <Projects hide="true"></Projects>
            <Contact hide="true"></Contact>
    
        </div>
    );

}

export default About;