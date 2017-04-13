import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Segment, Button, Label } from 'semantic-ui-react';

/*
Employment History form
*/

class EmploymentHistory extends Component {



  render() {

    const renderEmployments = ({fields, meta: { touched, error, submitFailed }}) => (

      <ul>
        <li>
          <Button type="button" onClick={() => fields.push({})}>Add Employment </Button>
            <Label basic color='orange' pointing='left'>(most recent first) </Label>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        <Segment>
        {fields.map((employment, index) =>
          <Segment>
          <li key={index}>
            <Button
              type="button"
              title="Remove Employment"
              onClick={() => fields.remove(index)}> Remove Employment </Button>
            Employment #{index + 1}

            <div>
              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor="name">company</label>
                  <Field name={`${employment}.company`} placeholder="company" component="input" type="text"/>
                </div>
                <div className="eight wide field">
                  <label htmlFor="address">address</label>
                  <Field name={`${employment}.address`} placeholder="address" component="input" type="text"/>
                </div>
              </div>
            </div>

            <div>
              <div className="fields">
                <div className="twelve wide field">
                  <label htmlFor="position">position</label>
                  <Field name={`${employment}.position`} placeholder="position" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="address">length(yrs)</label>
                  <Field name={`${employment}.length`} placeholder="length" component="input" type="text"/>
                </div>
              </div>
            </div>

            <div>
              <div className="fields">
                <div className="twelve wide field">
                  <label htmlFor="supervisor">supervisor</label>
                  <Field name={`${employment}.supervisor`} placeholder="supervisor" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="email">email</label>
                  <Field name={`${employment}.email`} placeholder="email" component="input" type="text"/>
                </div>
              </div>
            </div>

            <FieldArray name={`${employment}.phones`} component={renderPhones}/>

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




    return (
      <div>
        <Segment raised className="fields">
          <div className="twelve wide field">
            <label htmlFor="grossIncome">Current Gross Income</label>
            <Field name="grossIncome" placeholder="gross income" component="input" type="text"/>

          </div>
          <div className="four wide field">
            <label>Pay Interval</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="week"/> week</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="month"/> month</label>
            <label><Field name="paymentInterval" component="input" type="radio" value="year"/> year</label>
          </div>

        </Segment>

        <FieldArray name="employments" component={renderEmployments} />

      </div>
    );
  }
}

export default EmploymentHistory;
