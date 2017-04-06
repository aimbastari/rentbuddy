
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './UserReducer.js'
import auth from './AuthReducer.js'


const reducers = {
  user,
  auth,
  //..other reducers
  form: formReducer // Mount redux-from reducer as form
}

const reducer = combineReducers(reducers);

/*
function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message),
    };
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(
          action.index + 1, state.messages.length
        ),
      ],
    };
  } else {
    return state;
  }
}
*/

export default reducer;
