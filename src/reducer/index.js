
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './UserReducer.js'
import auth from './AuthReducer.js'
import application from './ApplicationReducer.js'


const reducers = {
  user,
  auth,
  form: formReducer // Mount redux-from reducer as form
}

const reducer = combineReducers(reducers);

export default reducer;
