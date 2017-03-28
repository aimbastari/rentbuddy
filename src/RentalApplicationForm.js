import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class RentalApplicationForm extends Component {

  handleSubmit(e, values){
    e.preventDefault();

    //dispatch an action creator to save data

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="middleName">Middle Name</label>
          <Field name="middleName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="socialSecurity">Social Security</label>
          <Field name="socialSecurity" component="input" type="text"/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
RentalApplicationForm = reduxForm({
  form: 'rentalApplication' // a unique name for this form
})(RentalApplicationForm);


RentalApplicationForm = connect(
  state => ({
      initialValues: state.user.data
  }),
  {load : loadUser}
)(RentalApplicationForm)



export default RentalApplicationForm;
