import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/base.scss'
import '../css/about.scss'


class About extends React.Component{

    onEnterViewport = () =>{
        this.props.title("ABOUT");
    }

    onExitViewport = () => {
        this.props.title("INTRO");
    }

    render(){
    return (
        <ScrollTrigger id="about" className="page body-text" throttleScroll={0} onEnter={this.onEnterViewport} onExit={this.onExitViewport}>

                <div className="flex-container-column">
                        <p className="about-sentences">
                            BS Computer Science<br/> Tennessee Technological University
                        </p>
                        <p className="about-spiel">
                        I graduated last year from Tennessee Tech University with a bachelors in Computer Science. For the past four months I interned with Achieve Internet. I was to be hired on full time but due to the pandemic they had to reduce their workforce. Since then I have been working on personal projects and am actively searching for a full time web development position. Below are some of my most recent projects.
 
                        </p>
                </div>   
                 
        </ScrollTrigger>
    );}

}

export default About;