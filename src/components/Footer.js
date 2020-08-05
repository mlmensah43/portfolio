import React from 'react';
import 'animate.css';
import '../css/base.scss'
import '../css/footer.scss'

function horizontal (direction) {
    if(direction === 'horizontal'){
        return (
            <div className="flex-container-row footer-horizontal">
                <a className="contact-icon" href="https://linkedin.com/in/mlmensah43">
                    <img className="contact-image" alt="linkedin" src={require('../images/linkedin.png')}></img>
                </a>

                <a className="contact-icon" href="https://github.com/mlmensah43">
                    <img className="contact-image" alt="github" src={require('../images/github.png')}></img>
                </a>
            
                {/* <a className="contact-icon behance" href="https://www.behance.net/mariahm207">
                    <b>Bē</b>
                </a> */}
                
            </div>
        );
    }
}

function vertical (direction) {
    if(direction === 'vertical'){
        return (
            <div className="flex-container-column footer-vertical">
                <a className="contact-icon" href="https://linkedin.com/in/mlmensah43">
                    <img className="contact-image" alt="linkedin" src={require('../images/linkedin.png')}></img>
                </a>

                <a className="contact-icon" href="https://github.com/mlmensah43">
                    <img className="contact-image" alt="github" src={require('../images/github.png')}></img>
                </a>
            
                {/* <a className="contact-icon behance" href="https://www.behance.net/mariahm207">
                    <b>Bē</b>
                </a> */}
                
            </div>
        );
    }
}


const Footer = (props) => {
    return(
        <div>
            {vertical(props.direction)}
            {horizontal(props.direction)}
        </div>
    );
    
    
}

export default Footer;