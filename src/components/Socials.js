import React from 'react';
import '../css/Socials.css'

function Socials(){

    return (
        <div className="flex-container social-items">
            <img className="social-item" alt="LinkedIn" src={require('../images/LinkedIn.png')}/>
            <img className="social-item" alt="Github" src={require('../images/Github.png')}/>
            <img className="social-item" alt="Dribbble" src={require('../images/Dribbble.png')}/>
        </div>
    );
}

export default Socials;