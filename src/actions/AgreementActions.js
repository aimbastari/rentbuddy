import axios from 'axios';
import {GET_AGREEMENT, SAVE_AGREEMENT, GET_AGREEMENTS } from './Types'
import {push} from 'connected-react-router';

import {
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

import { reducer as notifReducer, actions as notifActions, Notifs } from 'redux-notifications';

const { notifSend } = notifActions;


const API_URL = '/api';



export function saveAgreement(agreement){
    return function(dispatch){
        //start Spinner
        dispatch({
          type: SAVE_AGREEMENT,
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
                type: SAVE_AGREEMENT,
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
                type: SAVE_AGREEMENT,
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

export function getAgreement(id){
    return function(dispatch){
        axios.get(`${API_URL}/agreement/${id}`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {

                dispatch({type: GET_AGREEMENT, payload: response.data});

            })
            .catch((response) => {

              dispatch(notifSend({
                    message: 'Unable to fetch agreement',
                    kind: 'danger',
                    dismissAfter: 2000
                  }));


            });

    }
}


export function getAgreements(){
    return function(dispatch){

        //start Spinner
        dispatch({
          type: GET_AGREEMENTS,
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });

        //make api call
        axios.get(`${API_URL}/agreement`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {

                //stop Spinner
              dispatch({
                type: GET_AGREEMENTS,
                payload: response.data,
                [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                // Any additional key/values may be included here
              });

//                dispatch({type: GET_AGREEMENTS, payload: response.data});


            })
            .catch((response) => {

              dispatch(notifSend({
                    message: 'Unable to fetch agreements',
                    kind: 'danger',
                    dismissAfter: 2000
                  }));


            });

    }
}
