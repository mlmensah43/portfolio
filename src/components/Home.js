import React from 'react';
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import '../css/App.css'



class Home extends React.Component {



    render(){
    return (
        
            <div>
                <Intro name></Intro>
                <About></About>
                <Projects page="PROJECTS"></Projects>
                <Contact page="CONTACT"></Contact>
            </div>
    );};

}

export default Home;