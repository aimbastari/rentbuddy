import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Emergency Contacts Informatiion form
*/
class EmergencyContacts extends Component {

  render() {

    const renderContacts = ({fields, meta: { touched, error, submitFailed }}) => (

      <ul>
        <li>
          <Button type="button" onClick={() => fields.push({})}>Add Contact</Button>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        <Segment>
        {fields.map((contact, index) =>
          <Segment>
          <li key={index}>
            <Button
              type="button"
              title="Remove Contact"
              onClick={() => fields.remove(index)}> Remove Contact </Button>
            Contact #{index + 1}

            <div>
              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor="name">Full Name</label>
                  <Field name={`${contact}.name`} placeholder="full name" component="input" type="text"/>
                </div>
                <div className="eight wide field">
                  <label htmlFor="address">Address</label>
                  <Field name={`${contact}.address`} placeholder="Address" component="input" type="text"/>
                </div>
              </div>

            </div>

            <FieldArray name={`${contact}.phones`} component={renderPhones}/>

          </li>
          </Segment>

        )}
        </Segment>

      </ul>

    )


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

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )


    return (
      <FieldArray name="emergencyContacts" component={renderContacts} />

    );
  }
}

export default EmergencyContacts;
