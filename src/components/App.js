import React from 'react';
import '../css/App.css';
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

class App extends React.Component {

  state={
    page: ""

  }

  name = (word) =>{
    this.setState({page: word});
  };

  dashes = () =>{
    if(this.state.page === "INTRO"){
      return(
        <div className="flex-container-column progress">
            <div className="dash-100"></div>
            <div className="dash-50"></div>
            <div className="dash-50"></div>
            <div className="dash-50"></div>
        </div>);}

    else if(this.state.page === "ABOUT"){
      return(
      <div className="flex-container-column progress">
          <div className="dash-50"></div>
          <div className="dash-100"></div>
          <div className="dash-50"></div>
          <div className="dash-50"></div>
      </div>);}

    else if(this.state.page === "PROJECTS"){
      return(
      <div className="flex-container-column progress">
          <div className="dash-50"></div>
          <div className="dash-50"></div>
          <div className="dash-100"></div>
          <div className="dash-50"></div>
      </div>);}

    else if(this.state.page === "CONTACT"){
      return(
      <div className="flex-container-column progress">
          <div className="dash-50"></div>
          <div className="dash-50"></div>
          <div className="dash-50"></div>
          <div className="dash-100"></div>
      </div>);} 

  }

  pageTitle = () =>{
    if(this.state.page === "INTRO"){
      return(
        <div className="page-name-background">
          {/* <img className="profile" alt="profile" src={require('../images/profile_image.png')}></img> */}
          <div className="page-title-intro page-title"> <a href="#intro" className="page-100">INTRO</a></div>
          <div className="page-title"><a href="#about" className="page-50">ABOUT</a></div>
          <div className="page-title"><a href="#projects" className="page-50">PROJECTS</a></div>
          <div className="page-title"><a href="#contact" className="page-50">CONTACT</a></div>
          <Footer></Footer>  
        </div>
      );
    }

    else if(this.state.page === "ABOUT"){
      return(
        <div className="page-name-background">
          {/* <img className="profile" alt="profile" src={require('../images/profile_image.png')}></img> */}
          <div className="page-title-intro page-title"> <a href="#intro" className="page-50">INTRO</a></div>
          <div className="page-title"><a href="#about" className=" page-100">ABOUT</a></div>
          <div className="page-title"><a href="#projects" className="page-50">PROJECTS</a></div>
          <div className="page-title"><a href="#contact" className="page-50">CONTACT</a></div>
          <Footer></Footer>   
        </div>
      );
    }

    else if(this.state.page === "PROJECTS"){
      return(
        <div className="page-name-background">
          <div className="page-title-intro page-title"> <a href="#intro" className="page-50">INTRO</a></div>
          <div className="page-title"><a href="#about" className="page-50">ABOUT</a></div>
          <div className="page-title"><a href="#projects" className="page-100">PROJECTS</a></div>
          <div className="page-title"><a href="#contact" className="page-50">CONTACT</a></div>
          <Footer></Footer> 
        </div>
      );
    }

    else if(this.state.page === "CONTACT"){
      return(
        <div className="page-name-background">
          <div className="page-title-intro page-title"> <a href="#intro" className="page-50">INTRO</a></div>
          <div className="page-title"><a href="#about" className="page-50">ABOUT</a></div>
          <div className="page-title"><a href="#projects" className="page-50">PROJECTS</a></div>
          <div className="page-title"><a href="#contact" className="page-100">CONTACT</a></div>
          <Footer></Footer>
        </div>
      );
    } 
  }
  

  render() {
    return(
        <div className="flex-container-row">
            

            {this.pageTitle()}

            <div className="flex-container-column">
                <Intro title={this.name}></Intro>
                <About title={this.name}></About>
                <Projects title={this.name}></Projects>
                <Contact title={this.name}></Contact>
            </div>
                
            {this.dashes()}
            
        </div>
    );
  }
};

export default App;
