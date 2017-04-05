import React, { Component } from 'react';
import SignInForm from './SignInForm';

class SignIn extends Component{

    handleFormSubmit = (values) => {
      console.log(values);
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

export default SignIn;
