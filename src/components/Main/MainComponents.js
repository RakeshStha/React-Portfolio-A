import React, {Component} from 'react';
import {Home} from '../Home';
import {Contact} from '../Contact';
import {About} from '../About';
import {NoMatch} from '../NoMatch';

import {NavigationBar} from './NavigationBar';
import {Footer} from './FooterComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{
    render(){
      return(
        <React.Fragment>
          <NavigationBar/>
          <Router>
            <Switch>
              <Route exact path="/React-Portfolio-Website" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
          <Footer/>
        </React.Fragment>
        
  
      )
    }
  }
  
  export default Main;
