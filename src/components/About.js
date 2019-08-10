import React from 'react';
import 'animate.css';
import Nav from './Nav'
import Socials from './Socials'
import '../css/App.css'
import '../css/About.css'

const About = () => {

    return (
        <div>
            <Nav></Nav>
            <h1 className="page-title animated slideInDown">about</h1>
            <img className="pic animated slideInUp" alt="ProfilePic" src={require('../images/profile_image.png')}/>
            <p className="pitch animated slideInUp">Hello, my name is Mariah Mensah. What it do boo. <br/>Check out my work and hit me up if you got the big bucks.</p>
            <Socials></Socials>
        </div>
    );

}

export default About;