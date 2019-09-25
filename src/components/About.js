import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/App.css'
import '../css/About.css'


class About extends React.Component{

    onEnterViewport = () =>{
        this.props.title("ABOUT");
    }

    render(){
    return (
        <ScrollTrigger id="about" className="page" throttleScroll={0} onEnter={this.onEnterViewport}>

                <div className="page-title-2">ABOUT</div>
                <div className="flex-container-column about-content">
                        <p className="about-sentences sentence college">
                            BS Computer Science<br/> Tennessee Technological University
                        </p>
                        <p className="about-spiel about-sentences sentence">
                            I recently graduated from Tennessee Tech Univeristy. During my time there I discovered the magic of
                            what the world of technology has to offer. In the past year, I have developed an intense love for front 
                            end development and design work. I am dedicated to finding an opportunity to learn and grow my skill set 
                            through being a valuable asset to a prospective company and development team. 
                        </p>
                </div>    
        </ScrollTrigger>
    );}

}

export default About;