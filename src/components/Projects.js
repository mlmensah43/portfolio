import React from 'react';
import Project from './Project';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/base.scss';
import '../css/projects.scss';

let boxed_water = "E-commerce site";
let adoptem = "Pet adoption site.";
// let gallery = "Gallery is simplistic image gallery.";
// let mimir = "Mimir is my senior capstone project for Oak Ridge National Labratory. I designed and prototyped the entire front end of the project and implemented most of the front end. That includes the background navbar and sidebar, the welcome page and the dashboard. ";
let unison = "Community outreach site";
class Projects extends React.Component{

    


    onProgress = () =>{
        this.props.title("PROJECTS");
        console.log("ENTER: 3");
    }


    render(){
    return (
        <ScrollTrigger id="projects" className="page" throttleScroll={0} onProgress={this.onProgress}>

                <div className="flex-container-row project-row projects-center">
                    {/* <Project 
                        title="Boxed Water" 
                        image={require('../images/water-2.png')} 
                        description={boxed_water}
                        press1={"DEMO →"}
                        link1="https://mlmensah43.github.io/boxed_water/#/"
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/boxed_water"
                        >
                    </Project> */}

                    <Project 
                        title="Adoptem" 
                        image={require('../images/adoptem-2.png')} 
                        description={adoptem}
                        press1={"VISIT →"}
                        link1="https://adoptemportfolioproject.com/"
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/adoptem_two"
                        >
                    </Project>

                    <Project 
                        title="Unison" 
                        image={require('../images/unison-2.png')} 
                        description={unison}
                        link1=""
                        press2={"CODE →"}
                        link2="https://github.com/mlmensah43/drupal_project"
                        >
                    </Project>

                    {/* <Project 
                        title="Mimir" 
                        image={require('../images/mimir.png')} 
                        description={mimir}
                        link1=""
                        press2={"CODE →"}
                        link2="https://github.com/ORNL-AMO/Mimir"
                        >
                    </Project> */}


            </div>

        </ScrollTrigger>
        
    );}
};

export default Projects;