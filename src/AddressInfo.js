import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button, Label } from 'semantic-ui-react';

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets/lib/localizers/moment'
import 'react-widgets/dist/css/react-widgets.css'

/*
Address information form
*/
class AddressInfo extends Component {



  render() {

    const renderAddress = ({fields, meta: { touched, error, submitFailed }}) => (

      <ul>
        <li>
          <Button color="orange" onClick={() => fields.push({})}>Add Address </Button>
            <Label basic color='orange' pointing='left'>(current first) </Label>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        <Segment>
        {fields.map((address, index) =>
          <Segment>
          <li key={index}>
            <Button
              size="small"
              color="red"
              title="Remove Address"
              onClick={() => fields.remove(index)}> Remove Address </Button>
            <Label circular> Address #{index + 1} </Label>

              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor="name">name</label>
                  <Field name={`${address}.name`} placeholder="name" component="input" type="text"/>
                </div>

                <div className="four wide field">
                  <label htmlFor="dateIn">Date In</label>
                  <Field
                    name={`${address}.dateIn`}
                    showTime={false}
                    component={renderDateTimePicker}
                  />
                </div>

                <div className="four wide field">
                  <label htmlFor="dateOut">Date Out</label>
                  <Field
                    name={`${address}.dateOut`}
                    showTime={false}
                    component={renderDateTimePicker}
                  />
                </div>
              </div>

              <div className="fields">
                <div className="sixteen wide field">
                  <label htmlFor="address">address</label>
                  <Field name={`${address}.address`} placeholder="address" component="input" type="text"/>
                </div>
              </div>

              <div className="fields">
                <div className="twelve wide field">
                  <label htmlFor="manager">manager</label>
                  <Field name={`${address}.manager`} placeholder="nanager" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="email">email</label>
                  <Field name={`${address}.email`} placeholder="email" component="input" type="text"/>
                </div>
              </div>

            <FieldArray name={`${address}.phones`} component={renderPhones}/>


            <div className="fields">
              <div className="sixteen wide field">
                <label htmlFor="reason">Reason for leaving</label>
                <Field name={`${address}.reasonForLeaving`} placeholder="reason" component="textarea" type="text"/>
              </div>
            </div>

          </li>
          </Segment>



        )}
        </Segment>

      </ul>

    )


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
          <Segment>
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

        <FieldArray name="addresses" component={renderAddress} />

          {/**
            <div>
              <div className="fields">
                <div className="seven wide field">
                  <label htmlFor="presentAddress">Present Address</label>
                  <Field name="presentAddress" placeholder="present address" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="city">City</label>
                  <Field name="city" placeholder="city" component="input" type="text"/>
                </div>
                <div className="two wide field">
                  <label htmlFor="state">State</label>
                  <Field name="state" placeholder="state" component="input" type="text"/>
                </div>
                <div className="three wide field">
                  <label htmlFor="zipCode">Zip Code</label>
                  <Field name="zipCode" placeholder="zip code" component="input" type="text"/>
                </div>
              </div>

              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor="landlord">landlord</label>
                  <Field name="landlord" placeholder="landlord" component="input" type="text"/>
                </div>
                <div className="five wide field">
                  <label htmlFor="phone">phone</label>
                  <Field name="phone" placeholder="phone" component="input" type="text"/>
                </div>
                <div className="three wide field">
                  <label htmlFor="years">years</label>
                  <Field name="years" placeholder="years" component="input" type="text"/>
                </div>
              </div>

              <div className="fields">
                <div className="sixteen wide field">
                  <label htmlFor="reasonForLeaving">Reason for leaving</label>
                  <Field name="reasonForLeaving" placeholder="reason" component="textarea" type="text"/>
                </div>
              </div>

            </div>

          **/}



      </div>




    );
  }
}

export default AddressInfo;
