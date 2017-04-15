import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Bank Accounts form
*/

class Creditors extends Component {
  render() {

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    const renderCreditors = ({fields, meta: { touched, error }}) => (
      <ul>
        <li>
          <Button color="orange" size="small" onClick={() => fields.push({})}>Add Creditor</Button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((creditor, index) =>
          <Segment>
          <li key={index}>
            <Button
              color = "red"
              size = "small"
              type="button"
              title="Remove Creditor"
              onClick={() => fields.remove(index)}>Remove</Button>
            Bank #{index + 1}

          <div className="fields">
            <div className="six field wide">
              <label htmlFor="name">name</label>
              <Field
                name={`${creditor}.name`}
                type="text"
                component={renderField}/>
            </div>
            <div className="six field wide">
              <label htmlFor="address">address</label>
              <Field
                name={`${creditor}.address`}
                type="text"
                component={renderField}/>

            </div>
            <div className="four field wide">
              <label htmlFor="monthlyPayment">monthly payment(USD)</label>
              <Field
                name={`${creditor}.monthlyPayment`}
                type="text"
                component={renderField}/>

            </div>
          </div>

          <FieldArray name={`${creditor}.phones`} component={renderPhones}/>
          </li>
          </Segment>

        )}
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


    return (
      <div>
        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="creditors">Describe Your Creditors:</label>
            <FieldArray name="creditors"  component={renderCreditors} />
          </div>
        </div>


     </div>
    );
  }
}


export default Creditors;
