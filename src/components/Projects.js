import React from 'react';
import Project from './Project';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/App.css';
import '../css/Projects.css';

let boxed_water = "This is my third project";
let calculator = "This is my second project";
let gallery = "This is my first project";
let mimir = "Senior capstone project";

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
                        press={"Visit the Site →"}
                        link="https://mlmensah43.github.io/boxed_water/#/"
                        >
                    </Project>

                    <Project 
                        title="Simple Calculator" 
                        image={require('../images/calc.png')} 
                        description={calculator}
                        press={"Visit the Site →"}
                        link="https://mlmensah43.github.io/simple_calculator/#/"
                        >
                    </Project>

                    <Project 
                        title="Gallery" 
                        image={require('../images/gallery.png')} 
                        description={gallery}
                        press={"Visit the Site →"} 
                        link="https://mlmensah43.github.io/gallery/#/" >
                    </Project>

                    <Project 
                        title="Mimir" 
                        image={require('../images/mimir.png')} 
                        description={mimir}
                        press={"View Source Code →"}  
                        link="https://github.com/ORNL-AMO/Mimir">
                    </Project>
            </div>
        </ScrollTrigger>
        
    );}
};

export default Projects;