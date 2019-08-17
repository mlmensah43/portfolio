import React from 'react';
import '../css/App.css'
import '../css/Contact.css'

function Contact(){

    return (
        <div>
            {/* <Nav></Nav> */}
            <div>
                <h1 className="heading page-title animated slideInDown">contact</h1>
                <h3 className="sub-heading">Please feel free to contact me!</h3>
            </div>

            <div className="flex-container contacts">
                <div className="flex-item">
                    <img className="contact-icon" alt="resume" src={require('../images/resume.png')}></img>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="linkedin" src={require('../images/linkedin.png')}></img>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="github" src={require('../images/github.png')}></img>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="dribbble" src={require('../images/dribbble.png')}></img>
                </div>
            </div>

            <div className="flex-container contacts">
                <span className="flex-item label">
                    Resume`
                </span>
                <span className="flex-item label">
                    LinkedIn
                </span>
                <span className="flex-item label">
                    GitHub
                </span>
                <span className="flex-item label">
                    Dribbble
                </span>
            </div>

            <div className="back-to-top">Back to Top</div>
        </div>
        
    );
};

export default Contact;


