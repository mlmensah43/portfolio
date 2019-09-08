import React from 'react';
import '../css/App.css';
// import Home from './Home';
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class App extends React.Component {

  state={
    page: ""

  }

  name = (word, num) =>{
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

  smallDashes = () =>{
    if(this.state.page === "INTRO"){
      return(
        <div className="flex-container-column page-name">
            <div className="dash-0"></div>
            <div className="page-title">{this.state.page}</div>
            <div className="dash-50"></div>
        </div>);}

    else if(this.state.page === "CONTACT"){
      return(
      <div className="flex-container-column page-name">
          <div className="dash-50"></div>
          <div className="page-title">{this.state.page}</div>
          <div className="dash-0"></div>
      </div>);}

     else{
      return(
      <div className="flex-container-column page-name">
          <div className="dash-50"></div>
          <div className="page-title">{this.state.page}</div>
          <div className="dash-50"></div>
      </div>);} 
  }
  

  render() {
    return(
        <div className="flex-container-row">
            

            {this.smallDashes()}

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
