import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Bank Accounts form
*/

class BankAccounts extends Component {
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

    const renderBanks = ({fields, meta: { touched, error }}) => (
      <ul>
        <li>
          <Button color="orange" size="small" onClick={() => fields.push({})}>Add Bank</Button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((bank, index) =>
          <Segment>
          <li key={index}>
            <Button
              color = "red"
              size = "small"
              type="button"
              title="Remove Bank"
              onClick={() => fields.remove(index)}>Remove</Button>
            Bank #{index + 1}

          <div className="fields">
            <div className="six field wide">
              <label htmlFor="name">name</label>
              <Field
                name={`${bank}.name`}
                type="text"
                component={renderField}/>
            </div>
            <div className="ten field wide">
              <label htmlFor="address">address</label>
              <Field
                name={`${bank}.address`}
                type="text"
                component={renderField}/>

            </div>

          </div>
          <div className="fields">
            <div className="four field wide">
              <label htmlFor="type">type</label>
              <Field
                name={`${bank}.type`}
                type="text"
                component="select">
                  <option></option>
                  <option value="savings">savings</option>
                  <option value="checking">checking</option>
                  <option value="investment">investment</option>
              </Field>
            </div>
            <div className="eight field wide">
              <label htmlFor="number">account number</label>
              <Field
                name={`${bank}.number`}
                type="text"
                component={renderField}/>

            </div>
            <div className="four field wide">
              <label htmlFor="amount">amount</label>
              <Field
                name={`${bank}.amount`}
                type="text"
                component={renderField}/>

            </div>
          </div>
          </li>
          </Segment>

        )}
      </ul>
    )


    return (
      <div>
        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="bankAccounts">Describe Bank:</label>
            <FieldArray name="bankAccounts"  component={renderBanks} />
          </div>
        </div>


     </div>
    );
  }
}


export default BankAccounts;
