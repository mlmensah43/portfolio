import React from 'react';
import '../css/base.scss';
import Nav from './Nav'
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
          <div>
            <div className="flex-container-column progress-side">
                <div className="dash-100"></div>
                <div className="dash-50"></div>
                <div className="dash-50"></div>
                <div className="dash-50"></div>
            </div>
          </div>
        
        
        );
    }

    else if(this.state.page === "ABOUT"){
      return(
      <div className="flex-container-column progress-side">
          <div className="dash-50"></div>
          <div className="dash-100"></div>
          <div className="dash-50"></div>
          <div className="dash-50"></div>
      </div>);}

    else if(this.state.page === "PROJECTS"){
      return(
      <div className="flex-container-column progress-side">
          <div className="dash-50"></div>
          <div className="dash-50"></div>
          <div className="dash-100"></div>
          <div className="dash-50"></div>
      </div>);}
      else if(this.state.page === "LAST"){
        return(
          <div className="flex-container-column progress-side">
              <div className="dash-50"></div>
              <div className="dash-50"></div>
              <div className="dash-50"></div>
              <div className="dash-100"></div>
          </div>);}

  }
  

  render() {
    return(
        <div>
                <div className="flex-container-row">
                    <Nav></Nav>
                </div>


                <div className="flex-container-row">

                    <div className="flex-container-column">
                        <Footer direction="vertical"></Footer>
                    </div>
                    
                    <div className="flex-container-column ">
                    
                        <Intro title={this.name}></Intro>
                        <About title={this.name}></About>
                        <Projects title={this.name}></Projects>
                        <Contact title={this.name}></Contact>
                    </div>
                        
                    {this.dashes()}
                
                </div>

        </div>
        
    );
  }
};

export default App;
