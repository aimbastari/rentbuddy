import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Pets information form
*/

class Autos extends Component {
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

    const renderAutos = ({fields, meta: { touched, error }}) => (
      <ul>
        <li>
          <Button color="orange" size="small" onClick={() => fields.push({})}>Add Auto</Button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((auto, index) =>
          <li key={index}>
          <div className="fields">
            <div className="four field wide">
              <Field
                name={`${auto}.make`}
                type="text"
                component={renderField}/>
            </div>
            <div className="four field wide">
              <Field
                name={`${auto}.model`}
                type="text"
                component={renderField}/>

            </div>
            <div className="two field wide">
              <Field
                name={`${auto}.year`}
                type="text"
                component={renderField}/>
            </div>
            <div className="two field wide">
              <Field
                name={`${auto}.color`}
                type="text"
                component={renderField}/>
            </div>
            <div className="two field wide">
              <Field
                name={`${auto}.license`}
                type="text"
                component={renderField}/>
            </div>
            <div className="two field wide">
              <Button
                  color="red"
                  size="mini"
                  type="button"
                  title="Remove Auto"
                  onClick={() => fields.remove(index)}>remove</Button>
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
            <label htmlFor="autos">Describe auto:</label>
            <FieldArray name="autos"  component={renderAutos} />
          </div>
        </div>


     </div>
    );
  }
}


export default Autos;
