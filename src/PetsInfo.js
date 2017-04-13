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
          <Button  onClick={() => fields.push({})}>Add Pet</Button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((pet, index) =>
          <li key={index}>
          <div className="fields">
            <div className="eight field wide">
              <Field
                name={`${pet}.description`}
                type="text"
                component={renderField}/>
            </div>

            <div className="four field wide">
              <Field
                name={`${pet}.size`}
                type="text"
                component="select">
                  <option></option>
                  <option value="small">small -less 20 pounds</option>
                  <option value="medium">medium -20 - 40 pounds</option>
                  <option value="large">large greater 40 pounds</option>
              </Field>
            </div>

            <div className="four field wide">
              <Button
                  type="button"
                  title="Remove Pet"
                  onClick={() => fields.remove(index)}>remove pet </Button>
            </div>

            </div>
          </li>

        )}
      </ul>
    )


    return (
      <div>
        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor="pets">Describe pet:</label>
            <FieldArray name="pets"  component={renderPets} />
          </div>
        </div>


     </div>
    );
  }
}


export default PetsInfo;
