import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/base.scss'
import '../css/about.scss'


class About extends React.Component{

    onProgress= () =>{
        this.props.title("ABOUT");
        console.log("ENTER: 2");
    }

    render(){
    return (
        <ScrollTrigger id="about" className="page body-text" throttleScroll={0} onProgress={this.onProgress}>

                <div className="flex-container-column">
                        <p className="about-sentences">
                            BS Computer Science<br/> Tennessee Technological University
                        </p>
                        <p className="about-spiel">
                        Hi, my name is Mariah! I currently work as a Software Support Engineer at Recharge Payments. When I’m not working you can find me hanging out with my family, gaming, biking, and of course working on development projects. You can check out some of my projects below!
                        </p>
                </div>   
                 
        </ScrollTrigger>
    );}

}

export default About;