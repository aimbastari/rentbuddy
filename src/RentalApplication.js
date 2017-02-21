import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';


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
            List proposed occupants in addition to yourself.
          </Accordion.Content>

        </Accordion>

      </div>

    );
  }

}



export default RentalApplication;
