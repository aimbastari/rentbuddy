import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/AuthActions';

class SignOut extends Component {

    componentWillMount(){
        this.props.signoutUser();
    }

    render(){
        return (
          <div>
              Thanks for visiting RentBuddy!!
              <br/>
              Sign up for our new letter.

          </div>
        );
    }
}


export default connect(null, actions)(SignOut);
