import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Pets information form
*/

class PetsInfo extends Component {
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

    const renderPets = ({fields, meta: { touched, error }}) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Pets</button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((pet, index) =>
          <li key={index}>
          <Segment >
            <Field
              name={`${pet}.description`}
              type="text"
              component={renderField}
              label="description" />
            <Field
              name={`${pet}.size`}
              type="text"
              component="select"
              label="size">
                <option></option>
                <option value="small">small -less 20 pounds</option>
                <option value="medium">medium -20 - 40 pounds</option>
                <option value="large">large greater 40 pounds</option>

            </Field>

            <Button
                type="button"
                title="Remove Pet"
                onClick={() => fields.remove(index)}>remove pet </Button>


          </Segment>
          </li>

        )}
      </ul>
    )


    return (
      <div>
        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="pets">pets</label>
            <FieldArray name="pets"  component={renderPets} />
          </div>
        </div>


     </div>
    );
  }
}


export default PetsInfo;
