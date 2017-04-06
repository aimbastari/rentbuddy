
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


import Header from './Header'
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import Dashboard from './Dashboard';
import RentalApplication from './RentalApplication';

import './index.css';
import reducer from './reducer';

import {AUTH_USER} from './actions/Types';

import 'semantic-ui-css/semantic.min.css';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, promise, logger));


//If we have a token consider the user logged in
const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />

          <Route path='/dashboard' component={Dashboard} />
          <Route path='/application' component={RentalApplication} />

          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
