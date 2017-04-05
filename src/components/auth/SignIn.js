import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import SignInForm from '.SignInForm';

class Signin extends Component{

    handleFormSubmit({email, password}){
        //contact the backend auth server.
       this.props.signinUser({email, password});

    }


    render(){

        return (
          <div id="signIn" className="ui center aligned grid">
            <div className="column">
              <h4 className="ui left aligned  grey header">
                Sign-in to your account
              </h4>

              <SignInForm onSubmit={handleFormSubmit()}/>
            </div>
          </div>
        );
    }
}
