import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RentalApplication from './RentalApplication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>

        <RentalApplication />

      </div>
    );
  }
}

export default App;
