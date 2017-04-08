
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import createBrowserHistory from 'history/createBrowserHistory';

import{ connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';

import App from './App';
import reducer from './reducer';

import {AUTH_USER} from './actions/Types';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const logger = createLogger();

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      promise,
      logger
    )
  )
);




//If we have a token consider the user logged in
const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
