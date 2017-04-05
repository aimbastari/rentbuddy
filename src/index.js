
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


import Header from './Header'
import Home from './Home';
import About from './About';
import SignIn from './components/auth/SignIn';
import RentalApplication from './RentalApplication';

import './index.css';
import reducer from './reducer';

import 'semantic-ui-css/semantic.min.css';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, promise, logger));


ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/signin' component={SignIn} />
          <Route path='/application' component={RentalApplication} />


      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
