import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';
import { connect }  from 'react-redux';
import * as actions from './actions/RentalApplicationActions';

/*
Pets information form
*/

class PetsInfo extends Component {
  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

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
            <button
              type="button"
              title="Remove Pet"
              onClick={() => fields.remove(index)}/>
            <h4>Pet #{index + 1}</h4>
            <Field
              name={`${pet}.description`}
              type="text"
              component={renderField}
              label="description"/>
            <Field
              name={`${pet}.size`}
              type="text"
              component={renderField}
              label="size"/>
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

        <Segment basic textAlign="right">
          <Button type="button" onClick={reset} disabled={pristine || submitting}>Reset</Button>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        </Segment>
     </div>
    );
  }
}


export default PetsInfo;
