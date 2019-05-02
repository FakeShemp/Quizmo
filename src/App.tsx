import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SelectPlaylistScreen from './screens/SelectPlaylistScreen';
import SelectSongScreen from './screens/SelectSongScreen';
import SelectAnswerScreen from './screens/SelectAnswerScreen';
import HamburgerComponent from './components/HamburgerComponent';
import InputQuestionScreen from './screens/InputQuestionScreen';
import QuizScreen from './screens/QuizScreen';

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
            <Route exact path="/answers" component={SelectAnswerScreen} />
            <Route exact path="/questionform" component={InputQuestionScreen} />
            <Route path="/quiz" component={QuizScreen} />
          </Switch>
        </Router >
      </div >
    );
  }
}

export default App;
