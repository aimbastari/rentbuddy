import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import OccupantsInfo from './OccupantsInfo';
import PetsInfo from './PetsInfo';
import EmploymentHistory from './EmploymentHistory';

import * as actions from './actions/RentalApplicationActions';

import { connect } from 'react-redux';

class RentalApplication extends Component{

  handleSubmit = (values) => {


  }

  handleSubmitPersonal = (values) => {
    debugger;
    this.props.saveApplication(values)

  }

  handleSubmitAddress = (values) => {
    this.props.saveApplication({addresses : values})

  }

  handleSubmitPets = (values) => {
    debugger;
    this.props.saveApplication({pets : values})

  }



  render(){
    return (
      <div className='RentalApplication-header' >
        Rental Application
        <Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            Personal Info
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PersonalInfo onSubmit={this.handleSubmitPersonal}/>
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Address Info
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <AddressInfo onSubmit={this.handleSubmitAddress} />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Proposed Occupants
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <OccupantsInfo onSubmit={this.handleSubmit}/>
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Pets Information
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PetsInfo onSubmit={this.handleSubmitPets}/>
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Employment History
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <EmploymentHistory onSubmit={this.handleSubmit}/>
            </Segment>
          </Accordion.Content>


        </Accordion>

      </div>

    );
  }

}


export default connect(null, actions)(RentalApplication);
