
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { pendingTasksReducer } from 'react-redux-spinner'; // The redux reducer

import {reducer as notifications} from 'react-notification-system-redux';



import user from './UserReducer.js'
import auth from './AuthReducer.js'
import application from './ApplicationReducer.js'
import agreement from './AgreementReducer.js'



const reducers = {
  user,
  auth,
  application,
  agreement,
  form: formReducer, // Mount redux-from reducer as form
  pendingTasks : pendingTasksReducer,
  notifications
}

const reducer = combineReducers(reducers);

export default reducer;
