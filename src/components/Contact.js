import React from 'react';
import Footer from './Footer';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/App.css'
import '../css/Contact.css'




class Contact extends React.Component{

    onEnterViewport = () =>{
        this.props.title("CONTACT");
    }
        
    
    // onExitViewport = () => {
    //     this.props.title("CONTACT");
    // }

    render(){
    return (
        <ScrollTrigger className="page" throttleScroll={0} onEnter={this.onEnterViewport} onExit={this.onExitViewport}>

            <div className="page-title-2">CONTACT</div>
            <div className="flex-container-column contact-content">
                <p className="sentence">mariahmensah01@gmail.com</p>
                <p className="sentence">Please feel free to contact me.</p>
            </div>

            <div className="back-to-top"><a href="#top" className="back-to-top">Back to Top</a></div>
            <Footer></Footer>
        </ScrollTrigger>
        
    );}
};

export default Contact;


