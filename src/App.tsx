import React, { Component } from 'react';
import './App.css';
import LoginScreen from './screens/LoginScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginScreen></LoginScreen>
      </div>
    );
  }
}

export default App;
