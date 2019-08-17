import React from 'react';
import '../css/App.css'
import '../css/Contact.css'

function Contact(){

    return (
        <div>
            {/* <Nav></Nav> */}
            <div>
                <h1 id="contact" className="heading page-title animated slideInDown">contact</h1>
                <h3 className="sub-heading">Please feel free to contact me!</h3>
            </div>

            <div className="flex-container contacts">
                <div className="flex-item">
                    <img className="contact-icon" alt="resume" src={require('../images/resume.png')}></img>
                    <span className="label">
                        Resume`
                    </span>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="linkedin" src={require('../images/linkedin.png')}></img>
                    <span className="label">
                        LinkedIn
                    </span>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="github" src={require('../images/github.png')}></img>
                    <span className="label">
                        GitHub
                    </span>
                </div>
                <div className="flex-item">
                    <img className="contact-icon" alt="dribbble" src={require('../images/dribbble.png')}></img>
                    <span className="label">
                        Dribbble
                    </span>
                </div>
            </div>

            <div className="back-to-top"><a href="#top" className="back-to-top">Back to Top</a></div>
        </div>
        
    );
};

export default Contact;


