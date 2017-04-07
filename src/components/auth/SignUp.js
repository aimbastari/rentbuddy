import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Auth';
import SignUpForm from './SignUpForm';

class SignUp extends Component{

    handleFormSubmit = (values) => {
      //dispatch call to action
      this.props.signupUser(values);

    }

    render(){
        return (
          <div id="signIn" className="ui center aligned grid">
            <div className="column">
              <h4 className="ui left aligned  grey header">
                Sign Up for a new account
              </h4>

              <SignUpForm onSubmit={this.handleFormSubmit}/>
            </div>
          </div>
        );

    }
}

export default connect(null, actions)(SignUp);
