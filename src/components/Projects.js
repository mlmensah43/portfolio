import React from 'react';
import Project from './Project';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/base.scss';
import '../css/projects.scss';

let boxed_water = "Boxed water is a e-commerce webpage I redesigned of the 'Boxed Water is Better' brand of water. (This is not for the official site and is simply for my portfolio.)";
let adoptem = "A pet adoption web page.";
let gallery = "Gallery is simplistic image gallery.";
let mimir = "Mimir is my senior capstone project for Oak Ridge National Labratory. I designed and prototyped the entire front end of the project and implemented most of the front end. That includes the background navbar and sidebar, the welcome page and the dashboard. ";

class Projects extends React.Component{

    


    onEnterViewport = () =>{
        this.props.title("PROJECTS");
    }


    render(){
    return (
        <ScrollTrigger id="projects" className="" throttleScroll={0} onEnter={this.onEnterViewport}>

                <div className="flex-container-column projects-center">
                    <Project 
                        title="Boxed Water" 
                        image={require('../images/water.png')} 
                        description={boxed_water}
                        press1={"DEMO →"}
                        link1="https://mlmensah43.github.io/boxed_water/#/"
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/boxed_water"
                        >
                    </Project>

                    <Project 
                        title="Adoptem" 
                        image={require('../images/adoptem.png')} 
                        description={adoptem}
                        press1={"DEMO →"}
                        link1="https://mlmensah43.github.io/adoptem/#/"
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/adoptem"
                        >
                    </Project>

                    <Project 
                        title="Gallery" 
                        image={require('../images/gallery.png')} 
                        description={gallery}
                        press1={"DEMO →"}
                        link1="https://mlmensah43.github.io/gallery/#/"
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/gallery"
                        >
                    </Project>

                    <Project 
                        title="Mimir" 
                        image={require('../images/mimir.png')} 
                        description={mimir}
                        link1=""
                        press2={"CODE →"}
                        link2="https://github.com/ORNL-AMO/Mimir"
                        >
                    </Project>
            </div>
        </ScrollTrigger>
        
    );}
};

export default Projects;