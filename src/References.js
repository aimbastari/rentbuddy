import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
references information form
*/
class References extends Component {

  render() {

    const renderReferences = ({fields, meta: { touched, error, submitFailed }}) => (

      <ul>
        <li>
          <Button type="button" onClick={() => fields.push({})}>Add Reference</Button>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        <Segment>
        {fields.map((reference, index) =>
          <Segment key={index}>
          <li key={index}>
            <Button
              type="button"
              title="Remove Reference"
              onClick={() => fields.remove(index)}> Remove Reference </Button>
            Reference #{index + 1}

            <div>
              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor="name">Full Name</label>
                  <Field name={`${reference}.name`} placeholder="full name" component="input" type="text"/>
                </div>
                <div className="eight wide field">
                  <label htmlFor="address">Address</label>
                  <Field name={`${reference}.address`} placeholder="Address" component="input" type="text"/>
                </div>
              </div>

              <div className="fields">
                <div className="ten wide field">
                  <label htmlFor="relationship">Relationship</label>
                  <Field name={`${reference}.relationship`} component="select">
                    <option>friend</option>
                    <option>child</option>
                    <option>mother</option>
                    <option>father</option>
                    <option>husband</option>
                    <option>wife</option>
                    <option>husband</option>
                    <option>other</option>

                  </Field>
                </div>
                <div className="six wide field">
                  <label htmlFor="length">How long(yrs)?</label>
                  <Field name={`${reference}.length`}  component="select">
                    <option value="1">-1</option>
                    <option value="5">1-5</option>
                    <option value="10">5-10</option>
                    <option value="11">10+</option>
                  </Field>
                </div>
              </div>
            </div>

            <FieldArray name={`${reference}.phones`} component={renderPhones}/>

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
      <FieldArray name="references" component={renderReferences} />

    );
  }
}

export default References;
