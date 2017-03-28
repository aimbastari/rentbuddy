import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import OccupantsInfo from './OccupantsInfo';
import PetsInfo from './PetsInfo';
import EmploymentHistory from './EmploymentHistory';


class RentalApplication extends Component{

  handleSubmit = (values) => {
    console.log("Form values:");
    console.log (values);
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
              <PersonalInfo onSubmit={this.handleSubmit}/>
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
              <OccupantsInfo onSubmit={this.handleSubmit}/>
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Pets Information
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PetsInfo onSubmit={this.handleSubmit}/>
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



export default RentalApplication;
