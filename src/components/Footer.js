import React from 'react';
import 'animate.css';
import '../css/base.scss'
import '../css/footer.scss'

function horizontal (direction) {
    if(direction === 'horizontal'){
        return (
            <div className="flex-container-row footer-horizontal">
                <a className="contact-icon" href="https://linkedin.com/in/mlmensah43" >
                    <img className="contact-image" alt="linkedin" src={require('../images/LinkedIn.png')}></img>
                </a>

                <a href="https://github.com/mlmensah43" className="contact-icon" >
                    <img className="contact-image" alt="github" src={require('../images/Github.png')}></img>
                </a>
            
                {/* <a className="contact-icon behance" href="https://www.behance.net/mariahm207" target="_blank">
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
                <a className="contact-icon" href="https://linkedin.com/in/mlmensah43" target="_blank" rel="noopener noreferrer">
                    <img className="contact-image" alt="linkedin" src={require('../images/LinkedIn.png')}></img>
                </a>

                <a className="contact-icon" href="https://github.com/mlmensah43" target="_blank"rel="noopener noreferrer">
                    <img className="contact-image" alt="github" src={require('../images/Github.png')}></img>
                </a>
            
                {/* <a className="contact-icon behance" href="https://www.behance.net/mariahm207" target="_blank">
                    <b>Bē</b>
                </a> */}
                
            </div>
        );
    }
}


const Footer = (props) => {
    return(
        <div className="section">
            {vertical(props.direction)}
            {horizontal(props.direction)}
        </div>
    );
    
    
}

export default Footer;