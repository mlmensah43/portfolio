import React from 'react';
import Project from './Project';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/App.css';
import '../css/Projects.css';

let boxed_water = "This is my third project";
let calculator = "This is my second project";
let gallery = "This is my first project";

class Projects extends React.Component{

    


    onEnterViewport = () =>{
        this.props.title("PROJECTS");
    }



    render(){
    return (
        <ScrollTrigger className="page-2" onEnter={this.onEnterViewport} onExit={this.onExitViewport}>

            <div className="page-title-2">PROJECTS</div>
                <div className="projects-center">
                    <Project 
                        title="Boxed Water" 
                        image={require('../images/donut.png')} 
                        description={boxed_water}
                        >
                    </Project>

                    <Project 
                        title="Simple Calculator" 
                        image={require('../images/calc.png')} 
                        description={calculator}
                        >
                    </Project>

                    <Project 
                        title="Gallery" 
                        image={require('../images/gallery.png')} 
                        description={gallery} 
                        link="https://mlmensah43.github.io/gallery/#/" >
                    </Project>
            </div>
        </ScrollTrigger>
        
    );}
};

export default Projects;