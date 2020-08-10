import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Footer from './Footer'
import '../css/base.scss'
import '../css/contact.scss'




class Contact extends React.Component{

    onProgress = () =>{
        this.props.title("LAST");
        console.log("ENTER: 4");
    }

    render(){
    return (
        <ScrollTrigger id="contact" className="page body-text" throttleScroll={0} onProgress={this.onProgress}>

            {/* <div className="page-title-2">CONTACT</div> */}
            <div className="flex-container-column">
      
                <div className="contact-text">
                    <p>mariahmensah01@gmail.com</p>
                    <p>Please feel free to contact me via email or LinkedIn. Also don't forget to check out my GitHub!</p> 
                </div>   
            

                <Footer direction="horizontal"></Footer>

                {/* #top */}
                <a href="/" className="body-text-bigger back">Back to Top</a>
            </div>
        </ScrollTrigger>
        
    );}
};

export default Contact;


