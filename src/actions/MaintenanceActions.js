import axios from 'axios';
import {GET_MAINTENANCE_REQUEST, GET_MAINTENANCE_REQUESTS, SAVE_MAINTENANCE_REQUEST, CREATE_NEW_MAINTENANCE_REQUEST } from './Types'
import {push} from 'connected-react-router';

import {
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

import { reducer as notifReducer, actions as notifActions, Notifs } from 'redux-notifications';

const { notifSend } = notifActions;


const API_URL = '/api';


export function saveMaintenanceRequest(maintenance){
    return function(dispatch){
        //start Spinner
        dispatch({
          type: SAVE_MAINTENANCE_REQUEST,
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });


        //Submit application to server
        axios.post(`${API_URL}/maintenance`,
            maintenance,
            {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
              //stop Spinner
              dispatch({
                type: SAVE_MAINTENANCE_REQUEST,
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
                type: SAVE_MAINTENANCE_REQUEST,
                [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                // Any additional key/values may be included here
              });


                //If request is bad...
//                dispatch(authError('Error saving application'));

                // <Redirect push to='/signin'/>
                dispatch(push('/maintenance'))

            });

    }
}

export function getMaintenanceRequest(id){
    return function(dispatch){
        axios.get(`${API_URL}/maintenance/${id}`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {

                dispatch({type: GET_MAINTENANCE_REQUEST, payload: response.data});

            })
            .catch((response) => {

              dispatch(notifSend({
                    message: 'Unable to fetch maintenance request',
                    kind: 'danger',
                    dismissAfter: 2000
                  }));


            });

    }
}


export function getMaintenanceRequests(){
    return function(dispatch){

        //start Spinner
        dispatch({
          type: GET_MAINTENANCE_REQUESTS,
          [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
          // Any additional key/values may be included here
        });

        //make api call
        axios.get(`${API_URL}/maintenances`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {

                //stop Spinner
              dispatch({
                type: GET_MAINTENANCE_REQUESTS,
                payload: response.data,
                [ pendingTask ]: end // Make sure you embrace `pendingTask` in brackets [] to evaluate it
                // Any additional key/values may be included here
              });

//                dispatch({type: GET_AGREEMENTS, payload: response.data});


            })
            .catch((response) => {

              dispatch(notifSend({
                    message: 'Unable to fetch maintenance requests',
                    kind: 'danger',
                    dismissAfter: 2000
                  }));


            });

    }
}
