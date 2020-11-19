import React, {Component} from 'react';
import './App.css';

import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {About} from './components/About';
import {NoMatch} from './components/NoMatch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavigationBar} from './components/NavigationBar';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </React.Fragment>
      

    )
  }
}

export default App;
