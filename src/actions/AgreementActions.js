import axios from 'axios';
import {GET_AGREEMENT, SAVE_AGREEMENT } from './Types'
import {push} from 'connected-react-router';

import {
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';


const API_URL = 'http://localhost:3090';



export function saveAgreement(agreement){
    return function(dispatch){
        //start Spinner
        dispatch({
          type: 'SAVE_AGREEMENT',
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });


        //Submit application to server
        axios.post(`${API_URL}/agreement`,
            agreement,
            {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
              //stop Spinner
              dispatch({
                type: 'SAVE_AGREEMENT',
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
                type: 'SAVE_AGREEMENT',
                [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                // Any additional key/values may be included here
              });


                //If request is bad...
//                dispatch(authError('Error saving application'));

                // <Redirect push to='/signin'/>
                dispatch(push('/agreement'))

            });

    }
}

export function getAgreement(){
    return function(dispatch){
        axios.get(`${API_URL}/agreement`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
                dispatch({type: GET_AGREEMENT, payload: response.data});

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
