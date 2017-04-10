import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';

import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';

import Dashboard from './Dashboard';
import RentalApplication from './RentalApplication';
import Agreement from './Agreement';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Container } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Container fluid>

        <div>
          <Header />
          <Switch>
            <Route exact path='/'   component={Home} />
            <Route path='/about'    component={About} />
            <Route path='/signin'   component={SignIn} />
            <Route path='/signout'  component={SignOut} />
            <Route path='/signup'   component={SignUp} />

            <Route path='/dashboard'    render={()=>(
                localStorage.getItem('token') ? <Dashboard /> :
                  <Redirect to='/signin' /> )}
            />
            <Route path='/application'  render={()=>(
                localStorage.getItem('token') ? <RentalApplication /> :
                  <Redirect to='/signin' /> )}
            />

            <Route path='/agreement'  render={()=>(
                localStorage.getItem('token') ? <Agreement /> :
                  <Redirect to='/signin' /> )}
            />

            <Route component={NoMatch}/>
          </Switch>
        </div>

      </Container>
    );
  }
}

export default App;
