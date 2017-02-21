import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Personal information form
*/

class PersonalInfo extends Component {

  handleSubmit(e, values){
    e.preventDefault();

    //dispatch an action creator to save data
    this.props.submit(values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
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
            <label htmlFor="socialSecurity">Social Security</label>
            <Field name="socialSecurity" component="input" type="text"/>
          </div>
          <div className="six wide field">
            <label htmlFor="dateofBirth">Date of Birth</label>
            <Field name="dateOfBirth" component="input" type="text"/>
          </div>

        </div>

        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
        </div>
        <Segment basic textAlign="right">
          <Button type="submit">Submit</Button>
        </Segment>
      </form>
    );
  }
}

// Decorate the form component
PersonalInfo = reduxForm({
  form: 'personalInfo' // a unique name for this form
})(PersonalInfo);

export default PersonalInfo;
