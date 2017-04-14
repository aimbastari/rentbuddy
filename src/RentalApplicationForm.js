import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment, Button } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import OccupantsInfo from './OccupantsInfo';
import PetsInfo from './PetsInfo';
import EmploymentHistory from './EmploymentHistory';

import EmergencyContacts from './EmergencyContacts';
import References from './References';
import Autos from './Autos';


import Signature from './Signature';



import * as actions from './actions/RentalApplicationActions';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


class RentalApplicationForm extends Component{




  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="ui form">
        <Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            Personal
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PersonalInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Adddress
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <AddressInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Occupants
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <OccupantsInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Pets
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PetsInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Employment
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <EmploymentHistory />
            </Segment>
          </Accordion.Content>



          <Accordion.Title>
            <Icon name='dropdown' />
            Emergency Contacts
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <EmergencyContacts />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            References
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <References />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Autos
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Autos />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Signature
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Signature />
            </Segment>
          </Accordion.Content>


        </Accordion>

        <Segment basic textAlign="right">
          <Button type="button" onClick={reset} disabled={pristine || submitting}>Reset</Button>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        </Segment>

      </form>
    );
  }

}

// Decorate the form component
RentalApplicationForm = reduxForm({
  form: 'application' // a unique name for this form
})(RentalApplicationForm);


// You have to connect() to any reducers that you wish to connect to yourself
RentalApplicationForm = connect(
  state => ({
    initialValues: state.application.data // pull initial values from account reducer
  }),
   actions                // bind account loading action creator
)(RentalApplicationForm)

export default RentalApplicationForm;
