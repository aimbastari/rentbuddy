import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './Types'


const API_URL = 'http://localhost:3090';


export function signinUser({email, password}){
    return function(dispatch){
        //Submit email/password to the server
        axios.post(`${API_URL}/signin`, {email, password})
            .then(response => {
                //Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('roles', response.data.roles);


                //If request is good...
                //Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});

                //redirect to the route '/dashboard'
                <Redirect push to='/dashboard'/>
                // but you can use a location instead
                const location = {
                  pathname: '/dashboard',
                  state: { fromDashboard: true }
                }
                //createBrowserHistory.push(location);

            })
            .catch((err) => {
                //If request is bad...
                //Show error to the user
                console.log("Error: " );
                console.log(err );

                console.log("email / password do not match");
                dispatch(authError('email / password do not match'));

                <Redirect push to='/signin'/>

            });

    }
}

export function signupUser({email, password}){
    return function(dispatch){
        //Submit email/password to the server
        axios.post(`${API_URL}/signup`, {email, password})
            .then(response => {
                //If request is good...
                //Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});

                //Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('profile', response.data.profile);


                //redirect to the route '/dashboard'
                <Redirect to='/dashboard'/>

            })
            .catch((response) => {
                //If request is bad...
                //Show error to the user
                dispatch(authError(response.data.error));

                <Redirect to='/signup'/>

            });

    }
}


export function signoutUser(){
    localStorage.removeItem('token');

    return (
      {type : UNAUTH_USER}
    );

}

export function authError(error){
    return {
      type: AUTH_ERROR,
      payload: error
    };

}
