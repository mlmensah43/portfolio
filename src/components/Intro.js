import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/App.css'
import '../css/Intro.css'




class Intro extends React.Component {


    onEnterViewport = () =>{
        this.props.title("INTRO");
    }

    render(){
        return (
            <ScrollTrigger id="intro" className="page" throttleScroll={0} onEnter={this.onEnterViewport}>
    
                {/* <div className="page-title-2 intro-visible">INTRO</div> */}
                <div className="flex-container-column intro-content">
                    <div className="name intro-item">MARIAH MENSAH</div>
                    <div className="job-title intro-item">WEB DEVELOPER</div>
                    <p className="intro-item sentence">
                        Welcome to my portfolio! Below you will find some of the projects that I have worked < br/>
                        on and various points of contact. Thank you and hope to hear from you soon! 
                    </p>
                </div>
            </ScrollTrigger>
        );
    };
    

}

export default Intro;