import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Segment } from 'semantic-ui-react';

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets/lib/localizers/moment'
import 'react-widgets/dist/css/react-widgets.css'


momentLocaliser(moment);

/*
Personal information form
*/
class PersonalInfo extends Component {
  render() {


    const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
      <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />

    return (
      <div>
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
            <label htmlFor="dateOfBirth">DOB</label>
            <Field
              name="dateOfBirth"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>

        </div>

        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
        </div>

      </div>
    );
  }
}


export default PersonalInfo;
