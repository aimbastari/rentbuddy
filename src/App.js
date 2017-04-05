import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';



class App extends Component {
  render() {
    return (
      <Container fluid>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        {this.props.children}

      </Container>
    );
  }
}

export default App;
