import React, { Component } from 'react';
import { Segment, Label } from 'semantic-ui-react';
import { Field } from 'redux-form';

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets/lib/localizers/moment'
import 'react-widgets/dist/css/react-widgets.css'


momentLocaliser(moment);




const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />


const Signature = () => (
  <div>
    <Segment>
      <Label>
        Applicant represent that all the above Rental Application entries are true and correct and
        hereby authorizes verification of the above items including, but not limited to the obtaining of
        a credit report and agrees to furnish additional credit references upon request. Applicant consents
        to allow owner/manager to disclose tenancy information to previous or subequent owner/managers.
      </Label>

      <div className="fields">
        <div className="ten wide field">
          <label htmlFor="ssn">Applicant Signature</label>
          <Field name="signature" component="input" type="text"/>
        </div>

        <div className="six wide field">
          <label htmlFor="signDate">date signed</label>
          <Field
            name="signDate"
            showTime={false}
            component={renderDateTimePicker}
          />
        </div>

      </div>

    </Segment>

  </div>
);


export default Signature;
