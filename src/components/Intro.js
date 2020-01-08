import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/App.css'
import '../css/Intro.css'
import Footer from './Footer';




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
                    <div className="job-title intro-item">WEB-DEVELOPER  + DESIGNER</div>        
                </div>

                <div >
                    <Footer direction="horizontal"></Footer>
                </div>
                
            </ScrollTrigger>
        );
    };
    

}

export default Intro;