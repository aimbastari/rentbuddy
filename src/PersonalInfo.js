import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';

import * as actions from './actions/RentalApplicationActions';


/*
Personal information form
*/
class PersonalInfo extends Component {

  componentWillMount(){
    this.props.getApplication();

  }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className="ui form">
        <div className="fields">
          <div className="seven wide field">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="first name" component="input" type="text"/>
          </div>
          <div className="four wide field">
            <label htmlFor="middleName">Middle Name</label>
            <Field name="middleName" placeholder="middle name" component="input" type="text"/>
          </div>
          <div className="five wide field">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="last name" component="input" type="text"/>
          </div>
        </div>


        <div className="fields">
          <div className="ten wide field">
            <label htmlFor="ssn">Social Security</label>
            <Field name="ssn" component="input" type="text"/>
          </div>
          <div className="six wide field">
            <label htmlFor="dateofBirth">Date of Birth</label>
            <Field name="dateOfBirth" placeholder="date of birth" component="input" type="text" />
          </div>

        </div>

        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
        </div>
        <Segment basic textAlign="right">
          <Button type="button" onClick={reset} disabled={pristine || submitting}>Reset</Button>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        </Segment>
      </form>
    );
  }
}

// Decorate the form component
PersonalInfo = reduxForm({
  form: 'personalInfo' // a unique name for this form
})(PersonalInfo);


PersonalInfo = connect(
  state => ({
      initialValues: state.application.data
  }),
  actions
)(PersonalInfo)

export default PersonalInfo;
