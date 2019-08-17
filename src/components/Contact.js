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
                    <a className="contact-icon" href="https://drive.google.com/file/d/1XSbMZ-PFd2B14R7Vk4at0o7q_uQ3Hjlo/view?usp=sharing">
                        <img className="contact-icon" alt="resume" src={require('../images/resume.png')}></img>
                    </a>
                    <span className="label">
                        Resume`
                    </span>
                </div>
                <div className="flex-item">
                    <a className="contact-icon" href="https://linkedin.com">
                        <img className="contact-icon" alt="linkedin" src={require('../images/linkedin.png')}></img>
                    </a>
                    <span className="label">
                        LinkedIn
                    </span>
                </div>
                <div className="flex-item">
                    <a className="contact-icon" href="https://github.com/mlmensah43">
                        <img className="contact-icon" alt="github" src={require('../images/github.png')}></img>
                    </a>
                    <span className="label">
                        GitHub
                    </span>
                </div>
                <div className="flex-item">
                    <a className="contact-icon" href="https://dribbble.com/mariahlm">
                        <img className="contact-icon" alt="dribbble" src={require('../images/dribbble.png')}></img>
                    </a>
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


