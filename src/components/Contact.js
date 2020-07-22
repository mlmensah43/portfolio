import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Footer from './Footer'
import '../css/base.scss'
import '../css/contact.scss'




class Contact extends React.Component{

    onEnterViewport = () =>{
        this.props.title("CONTACT");
    }
        
    
    // onExitViewport = () => {
    //     this.props.title("CONTACT");
    // }

    render(){
    return (
        <ScrollTrigger id="contact" className="page" throttleScroll={0} onEnter={this.onEnterViewport} onExit={this.onExitViewport}>

            {/* <div className="page-title-2">CONTACT</div> */}
            <div className="flex-container-column body-text">
                <p>mariahmensah01@gmail.com</p>
                <p>Please feel free to contact me and don't forget to check out <br/> my GitHub and Behance for some of my design work.</p> 
            </div>

            <div className="back-to"><a href="#top" className="back-to-top">Back to Top</a></div>
        </ScrollTrigger>
        
    );}
};

export default Contact;


