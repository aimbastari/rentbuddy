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
          <Segment>
          <li key={index}>
            <Button
              type="button"
              title="Remove Reference"
              onClick={() => fields.remove(index)}> Remove Reference </Button>
            Reference #{index + 1}

            <div>
              <div className="fields">
                <div className="seven wide field">
                  <label htmlFor="firstName">First Name</label>
                  <Field name={`${reference}.firstName`} placeholder="first name" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="middleName">Middle Name</label>
                  <Field name={`${reference}.middleName`} placeholder="middle name" component="input" type="text"/>
                </div>
                <div className="five wide field">
                  <label htmlFor="lastName">Last Name</label>
                  <Field name={`${reference}.lastName`} placeholder="last name" component="input" type="text"/>
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
                    <option>other</option>

                  </Field>
                </div>
                <div className="six wide field">
                  <label htmlFor="adult">18 or older</label>
                  <Field name={`${reference}.adult`} id="adult" component="input" type="checkbox"/>
                </div>

              </div>
            </div>

          </li>
          </Segment>

        )}
        </Segment>

      </ul>

    )


    return (
      <FieldArray name="references" component={renderReferences} />

    );
  }
}

export default References;
