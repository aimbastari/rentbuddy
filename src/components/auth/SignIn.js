import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions';

import SignInForm from './SignInForm';

class SignIn extends Component{

    handleFormSubmit = (values) => {
      console.log(values);

      console.log(values);

      //dispatch call to action
      this.props.signinUser(values);
    }

    render(){

        return (
          <div id="signIn" className="ui center aligned grid">
            <div className="column">
              <h4 className="ui left aligned  grey header">
                Sign-in to your account
              </h4>

              <SignInForm onSubmit={this.handleFormSubmit}/>
            </div>
          </div>
        );
    }
}

export default connect(null, actions)(SignIn);
