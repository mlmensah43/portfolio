import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Footer from './Footer'
import 'animate.css';
import '../css/App.css'
import '../css/Intro.css'




class Intro extends React.Component {


    onEnterViewport = () =>{
        this.props.title("INTRO",true);
    }
    

    // onExitViewport = () => {
    //     this.props.title("INTRO");
    //   }

    render(){
        return (
            <ScrollTrigger id="top" className="page" throttleScroll={0} onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
    
                    <div className="page-title-2">INTRO</div>
                    <div className="flex-container-column intro-content">
                        <div className="name intro-item">MARIAH MENSAH</div>
                        <div className="job-title intro-item">WEB DEVELOPER</div>
                        <p className="intro-item sentence">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                            sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                    </div>
    
                <Footer></Footer>
            </ScrollTrigger>
        );
    };
    

}

export default Intro;