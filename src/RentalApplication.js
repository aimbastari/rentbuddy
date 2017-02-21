import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import OccupantsInfo from './OccupantsInfo';


class RentalApplication extends Component{

  submitFormData(values){
    console.log("Form values:");
    console.log(values);

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
              <PersonalInfo submit={this.submitFormData()}/>
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Address Info
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <AddressInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Proposed Occupants
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <OccupantsInfo />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Pets Information
          </Accordion.Title>
          <Accordion.Content>
            List pets.
          </Accordion.Content>

        </Accordion>

      </div>

    );
  }

}



export default RentalApplication;
