import React from 'react';
import 'animate.css';
import '../css/App.css'
import '../css/Footer.css'


const Footer = () => {

    return (

            <div className="flex-container-row footer">
                <a className="contact-icon" href="https://github.com/mlmensah43">
                    <img className="contact-icon" alt="github" src={require('../images/github.png')}></img>
                </a>
                <a className="contact-icon" href="https://linkedin.com/in/mlmensah43">
                    <img className="contact-icon" alt="linkedin" src={require('../images/linkedin.png')}></img>
                </a>
                <a className="contact-icon behance" href="https://www.behance.net/mariahm20737c2">
                    <b>Bē</b>
                </a>
                
            </div>
    );

}

export default Footer;