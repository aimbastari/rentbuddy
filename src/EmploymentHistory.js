import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Employment History form
*/

class EmploymentHistory extends Component {
  render() {

    return (
      <div>
        <div classsName="fields">
          <div className="ten wide field ">
            <label htmlFor="grossIncome">Gross Income</label>
            <Field name="grossIncome" placeholder="gross income" component="input" type="text"/>

          </div>
          <div className="six wide field">
            <label>Pay Interval</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="week"/> week</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="month"/> month</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="year"/> year</label>
          </div>

        </div>

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
            <label htmlFor="relationship">Relationship</label>
            <Field name="relationship" component="select">
              <option>friend</option>
              <option>child</option>
              <option>mother</option>
              <option>father</option>
              <option>husband</option>
              <option>wife</option>
            </Field>
          </div>
          <div className="six wide field">
            <label htmlFor="howLong">How Long</label>
            <Field name="howLong" component="input" type="text"/>
          </div>

        </div>
      </div>
    );
  }
}

export default EmploymentHistory;
