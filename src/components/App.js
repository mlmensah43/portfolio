import React from 'react';
import '../css/App.css';
import Nav from './Nav'
import About from './About'
// import Spinner from './Spinner'

class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <About/>
        {/* <Spinner /> */}
      </div>
        

        
    );
  }
};

export default App;
