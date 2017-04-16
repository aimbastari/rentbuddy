
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { pendingTasksReducer } from 'react-redux-spinner'; // The redux reducer

import user from './UserReducer.js'
import auth from './AuthReducer.js'
import application from './ApplicationReducer.js'


const reducers = {
  user,
  auth,
  application,
  form: formReducer, // Mount redux-from reducer as form
  pendingTasks : pendingTasksReducer
}

const reducer = combineReducers(reducers);

export default reducer;
