import React from 'react';
import Project from './Project';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/App.css';
import '../css/Projects.css';

let boxed_water = "Boxed water is a e-commerce webpage I redesigned of the Boxed Water is Better brand of water";
let calculator = "This is a javascript calculator that is capable of doing simple calculations.";
let gallery = "Gallery is simplistic image gallery.";
let mimir = "Mimir is my senior capstone project for Oak Ridge National Labratory. I designed and prototyped the entire front end of the project and implemented most of the front end. That includes the background navbar and sidebar, the welcome page and the dashboard. ";

class Projects extends React.Component{

    


    onEnterViewport = () =>{
        this.props.title("PROJECTS");
    }


    render(){
    return (
        <ScrollTrigger id="projects" className="" throttleScroll={0} onEnter={this.onEnterViewport}>

            <div className="page-title-2">PROJECTS</div>
                <div className="flex-container-column projects-center">
                    <Project 
                        title="Boxed Water" 
                        image={require('../images/water.png')} 
                        description={boxed_water}
                        press1={"Visit the Site →"}
                        link1="https://mlmensah43.github.io/boxed_water/#/"
                        press2={"Source Code →"}
                        link2="https://github.com/mlmensah43/boxed_water"
                        >
                    </Project>

                    <Project 
                        title="Simple Calculator" 
                        image={require('../images/calc.png')} 
                        description={calculator}
                        press1={"Visit the Site →"}
                        link1="https://mlmensah43.github.io/simple_calculator/#/"
                        press2={"Source Code →"}
                        link2="https://github.com/mlmensah43/simple_calculator"
                        >
                    </Project>

                    <Project 
                        title="Gallery" 
                        image={require('../images/gallery.png')} 
                        description={gallery}
                        press1={"Visit the Site →"}
                        link1="https://mlmensah43.github.io/gallery/#/"
                        press2={"Source Code →"}
                        link2="https://github.com/mlmensah43/gallery"
                        >
                    </Project>

                    <Project 
                        title="Mimir" 
                        image={require('../images/mimir.png')} 
                        description={mimir}
                        link1=""
                        press2={"Source Code →"}
                        link2="https://github.com/ORNL-AMO/Mimir"
                        >
                    </Project>
            </div>
        </ScrollTrigger>
        
    );}
};

export default Projects;