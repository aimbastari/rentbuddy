import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button } from 'semantic-ui-react';

/*
Address information form
*/

class AddressInfo extends Component {

  handleSubmit(e, values){
    e.preventDefault();

    //dispatch an action creator to save data

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
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
