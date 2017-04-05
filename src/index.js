
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Welcome from './Welcome';

import './index.css';
import reducer from './reducer';

import 'semantic-ui-css/semantic.min.css';




const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
