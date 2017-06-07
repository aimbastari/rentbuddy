
import axios from 'axios';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './Types'
import {push} from 'connected-react-router';

import {
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

import { reducer as notifReducer, actions as notifActions, Notifs } from 'redux-notifications';

const { notifSend } = notifActions;
const API_URL = 'http://localhost:3090';


export function signinUser({email, password}){
    return function(dispatch){

        //start Spinner
        dispatch({
          type: AUTH_USER,  
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });


        //Submit email/password to the server
        axios.post(`${API_URL}/signin`, {email, password})
            .then(response => {
                //Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('roles', response.data.roles);

                //Update state to indicate user is authenticated
                dispatch({
                    type: AUTH_USER,
                    [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                });

                //redirect to
                dispatch(push('/dashboard'))

            })
            .catch((err) => {

                dispatch({
                    type: AUTH_ERROR,
                    [ pendingTask ]: end, // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                    payload : 'email / password do not match'
                });
                

              dispatch(notifSend({
                    message: 'Login Failed. Try again',
                    kind: 'danger',
                    dismissAfter: 2000
                  }));

                // <Redirect push to='/signin'/>
                dispatch(push('/signin'))

            });

    }
}

export function signupUser({email, password}){
    return function(dispatch){
        //Submit email/password to the server
        axios.post(`${API_URL}/signup`, {email, password})
            .then(response => {
                //If request is good...

                //Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('profile', response.data.profile);

                //Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});

                //redirect to dashboard
                dispatch(push('/dashboard'))

            })
            .catch((response) => {
                //If request is bad...
                //Show error to the user
                dispatch(authError(response.data.error));
                dispatch(push('/signup`'))

            });

    }
}


export function signoutUser(){
    return function(dispatch){
        localStorage.removeItem('token');

        //Update state to indicate user is unauthenticated
        dispatch({type: UNAUTH_USER});

    }
}


export function authError(error){
    return {
      type: AUTH_ERROR,
      payload: error
    };

}
