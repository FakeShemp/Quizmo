import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SelectPlaylistScreen from './screens/SelectPlaylistScreen';
import SelectSongScreen from './screens/SelectSongScreen';
import HamburgerComponent from './components/HamburgerComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HamburgerComponent></HamburgerComponent>
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/dashboard" component={DashboardScreen} />
            <Route exact path="/playlists" component={SelectPlaylistScreen} />
            <Route exact path="/songs" component={SelectSongScreen} />
            <Route path="/quiz/:quizid" component={LoginScreen} />
          </Switch>
        </Router >
      </div >
    );
  }
}

export default App;
