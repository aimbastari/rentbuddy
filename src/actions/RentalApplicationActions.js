import axios from 'axios';
import {GET_APPLICATION, SAVE_APPLICATION } from './Types'
import {push} from 'connected-react-router';

import {
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

import Notifications from 'react-notification-system-redux';


const API_URL = 'http://localhost:3090';


const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

export function saveApplication(application){
    return function(dispatch){
        //start Spinner
        dispatch({
          type: 'SAVE_APPLICATION',
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });


        //Submit application to server
        axios.post(`${API_URL}/application`,
            application,
            {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
              //stop Spinner
              dispatch({
                type: 'SAVE_APPLICATION',
                [ pendingTask ]: end, // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                payload: response.data
                // Any additional key/values may be included here
              });

              //Display success Message to user
{/*
              dispatch(
                Notifications.success(notificationOpts)
              );
*/}

            })
            .catch((err) => {
              //stop Spinner
              dispatch({
                type: 'SAVE_APPLICATION',
                [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                // Any additional key/values may be included here
              });


                //If request is bad...
//                dispatch(authError('Error saving application'));

                // <Redirect push to='/signin'/>
                dispatch(push('/application'))

            });

    }
}

export function getApplication(){
    return function(dispatch){
        axios.get(`${API_URL}/application`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
                dispatch({type: GET_APPLICATION, payload: response.data});

                //redirect to dashboard
//                dispatch(push('/application'))

            })
            .catch((response) => {
                //If request is bad...
                //Show error to the user
//                dispatch(authError(response.data.error));
//                dispatch(push('/application`'))

            });

    }
}
