import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Label, Button } from 'semantic-ui-react';

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

    const renderPhones = ({ fields, meta: { error } }) => (
      <ul>
        <li>
          <Button size="tiny" color="orange" onClick={() => fields.push()}>Add Phone</Button>
        </li>
        {fields.map((phone, index) =>
          <Segment key={index}>
            <div className="fields">
                <div className="eight wide field">
                  <Field
                    name={`${phone}.number`}
                    type="text"
                    component="input"
                    label={`Phone #${index + 1}`}/>
                </div>
                <div className="four wide field">
                    <Field name={`${phone}.type`} component="select">
                      <option>cell</option>
                      <option>home</option>
                      <option>work</option>
                      <option>other</option>
                    </Field>
                </div>
                <div className="four wide field">
                  <Button
                    compact
                    size="mini"
                    title="Remove Phone"
                    color="red"
                    onClick={() => fields.remove(index)}>
                    remove
                  </Button>
                </div>
          </div>
        </Segment>
        )}
        {error && <li className="error">{error}</li>}
      </ul>
    )


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
          <div className="sixteen wide field">
            <label htmlFor="aliases">Aliases</label>
            <Field name="aliases" component="input" type="text"/>
          </div>
        </div>


        <div className="fields">
          <div className="four wide field">
            <label htmlFor="ssn">Social Security</label>
            <Field name="ssn" component="input" type="text"/>
          </div>

          <div className="four wide field">
            <label htmlFor="dateOfBirth">DOB</label>
            <Field
              name="birthDate"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>

          <div className="eight wide field">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>

        </div>

        <FieldArray name="phones" component={renderPhones}/>

        <Segment>
        <Label>ID</Label>
        <div className="fields">
          <div className="eight wide field">
            <label htmlFor="number">Drivers License number</label>
            <Field name="driversLicense.number" component="input" type="text"/>
          </div>

          <div className="four wide field">
            <label htmlFor="expiration">Expiration:</label>
            <Field
              name="driversLicense.expiration"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>

          <div className="four wide field">
            <label htmlFor="state">Email</label>
            <Field name="driversLicense.state" component="input" type="text"/>
          </div>
        </div>

        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="email">Other ID</label>
            <Field name="otherId" component="input" type="text"/>
          </div>
        </div>

        </Segment>

        <Segment>
        <Label>Check all that apply:</Label>
        <div className="fields">
        <div className="two wide field">
          <label htmlFor="liquidFurniture">Water bed</label>
          <Field name="liquidFurniture" id="liquidFurniture" component="input" type="checkbox"/>
        </div>

          <div className="two wide field">
            <label htmlFor="smoke">Smoke</label>
            <Field name="smoke" id="smoke" component="input" type="checkbox"/>
          </div>

          <div className="two wide field">
            <label htmlFor="medicalMarijuana">Medical Marijuana</label>
            <Field name="medicalMarijuana" id="medicalMarijuana" component="input" type="checkbox"/>
          </div>

          <div className="two wide field">
            <label htmlFor="needHandicapAccess">Need Handicap Access</label>
            <Field name="needHandicapAccess" id="needHandicapAccess" component="input" type="checkbox"/>
          </div>

          <div className="two wide field">
            <label htmlFor="drugConvictions">Drug Convictions</label>
            <Field name="drugConvictions" id="drugConvictions" component="input" type="checkbox"/>
          </div>

          <div className="two wide field">
            <label htmlFor="bankruptcies">Bankruptcies</label>
            <Field name="bankruptcies" id="bankruptcies" component="input" type="checkbox"/>
          </div>

          <div className="two wide field">
            <label htmlFor="evictions">Evictions</label>
            <Field name="evictions" id="evictions" component="input" type="checkbox"/>
          </div>

        </div>


        </Segment>


      </div>
    );
  }
}


export default PersonalInfo;
