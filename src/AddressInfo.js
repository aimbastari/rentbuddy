import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Address information form
*/

class AddressInfo extends Component {

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props;


    return (
      <form onSubmit={handleSubmit} className="ui form">
        <div className="fields">
          <div className="seven wide field">
            <label htmlFor="presentAddress">Present Address</label>
            <Field name="presentAddress" placeholder="present address" component="input" type="text"/>
          </div>
          <div className="four wide field">
            <label htmlFor="city">City</label>
            <Field name="city" placeholder="city" component="input" type="text"/>
          </div>
          <div className="two wide field">
            <label htmlFor="state">State</label>
            <Field name="state" placeholder="state" component="input" type="text"/>
          </div>
          <div className="three wide field">
            <label htmlFor="zipCode">Zip Code</label>
            <Field name="zipCode" placeholder="zip code" component="input" type="text"/>
          </div>
        </div>

        <div className="fields">
          <div className="eight wide field">
            <label htmlFor="landlord">landlord</label>
            <Field name="landlord" placeholder="landlord" component="input" type="text"/>
          </div>
          <div className="five wide field">
            <label htmlFor="phone">phone</label>
            <Field name="phone" placeholder="phone" component="input" type="text"/>
          </div>
          <div className="three wide field">
            <label htmlFor="years">years</label>
            <Field name="years" placeholder="years" component="input" type="text"/>
          </div>
        </div>


        <Segment basic textAlign="right">
          <Button type="submit">Submit</Button>
        </Segment>

      </form>
    );
  }
}

// Decorate the form component
AddressInfo = reduxForm({
  form: 'addressInfo' // a unique name for this form
})(AddressInfo);

export default AddressInfo;
