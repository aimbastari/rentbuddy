import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Occupants information form
*/
class OccupantsInfo extends Component {
  render() {

    const renderOccupants = ({fields, meta: { touched, error, submitFailed }}) => (

      <ul>
        <li>
          <Button type="button" onClick={() => fields.push({})}>Add Occupant</Button>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        <Segment>
        {fields.map((occupant, index) =>
          <Segment>
          <li key={index}>
            <Button
              type="button"
              title="Remove Occupant"
              onClick={() => fields.remove(index)}> Remove Occupant </Button>
            Occupant #{index + 1}

            <div>
              <div className="fields">
                <div className="seven wide field">
                  <label htmlFor="firstName">First Name</label>
                  <Field name={`${occupant}.firstName`} placeholder="first name" component="input" type="text"/>
                </div>
                <div className="four wide field">
                  <label htmlFor="middleName">Middle Name</label>
                  <Field name={`${occupant}.middleName`} placeholder="middle name" component="input" type="text"/>
                </div>
                <div className="five wide field">
                  <label htmlFor="lastName">Last Name</label>
                  <Field name={`${occupant}.lastName`} placeholder="last name" component="input" type="text"/>
                </div>
              </div>

              <div className="fields">
                <div className="ten wide field">
                  <label htmlFor="relationship">Relationship</label>
                  <Field name={`${occupant}.relationship`} component="select">
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
                  <Field name={`${occupant}.adult`} id="adult" component="input" type="checkbox"/>
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
      <FieldArray name="occupants" component={renderOccupants} />

    );
  }
}

export default OccupantsInfo;
