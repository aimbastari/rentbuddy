import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';

import RentalApplication from './RentalApplication';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <RentalApplication />

      </Container>
    );
  }
}

export default App;
