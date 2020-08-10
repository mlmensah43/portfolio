import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css';
import '../css/base.scss'
import '../css/intro.scss'
import Footer from './Footer';




class Intro extends React.Component {


    onProgress = () =>{
        this.props.title("INTRO");
        console.log("ENTER: 1");
    }

    render(){
        return (
            <ScrollTrigger id="intro" className="page" throttleScroll={0} onProgress={this.onProgress}>
    
                {/* <div className="page-title-2 intro-visible">INTRO</div> */}
                <div className="flex-container-column">
                    <div className="header name">mariah mensah</div>
                    <div className="subheader job-title">front end web developer</div>        
                </div>

                <div >
                    <Footer direction="horizontal"></Footer>
                </div>
                
            </ScrollTrigger>
        );
    };
    

}

export default Intro;