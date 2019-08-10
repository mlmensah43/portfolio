import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../css/App.css';
import About from './About'
import Projects from './Projects'
// import Spinner from './Spinner'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Route path="/" exact component={About} />
        <Route path="/Projects" exact component={Projects} />
        {/* <Spinner /> */}
      </Router>
        
    );
  }
};

export default App;
