import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router } from 'react-router-dom'
import DashboardScreen from './screens/DashboardScreen';
import HamburgerComponent from './components/HamburgerComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HamburgerComponent></HamburgerComponent>
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/dashboard" component={DashboardScreen} /> 
            <Route path="/quiz/:quizid" component={LoginScreen} />
          </Switch>
        </Router >
      </div >
    );
  }
}

export default App;
