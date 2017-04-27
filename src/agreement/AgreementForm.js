import React, { Component } from 'react';
import './Agreement.css';

import { Accordion, Icon, Segment, Button } from 'semantic-ui-react';


import Occupants from './Occupants'
import BasicLeaseTerms from './BasicLeaseTerms'
import PossessionOfPremises from './PossessionOfPremises'
import Rent from './Rent'
import LateCharge from './LateCharge'
import SecurityDeposit from './SecurityDeposit'
import Utilities from './Utilities'
import Occupancy from './Occupancy'
import JointLiability from './JointLiability'
import AcceptanceOfPremises from './AcceptanceOfPremises'
import KeyAndRemoteControls from './KeyAndRemoteControls'
import UseOfPremises from './UseOfPremises'
import WaterFilledFurniture from './WaterFilledFurniture'
import Damage from './Damage'
import SmokeDetectionDevice from './SmokeDetectionDevice'
import CO2DetectionDevice from './CO2DetectionDevice'
import EntryByLandlord from './EntryByLandlord'
import VehiclesAndParking from './VehiclesAndParking'
import AssignmentAndSubletting from './AssignmentAndSubletting'
import LiabilityDamageResponsibility from './LiabilityDamageResponsibility'
import PreTerminationRepairs from './PreTerminationRepairs'
import Relocation from './Relocation'

import ExecutionAndSignatures from './ExecutionAndSignatures'



import * as actions from './../actions/AgreementActions';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


class AgreementForm extends Component{

  componentWillMount = () => {
    this.props.getAgreement();
  }



  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="ui form">
        <Accordion>

          <Accordion.Title>
            <Icon name='dropdown' />
            Occupants
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Occupants />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Basic Lease Terms
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <BasicLeaseTerms />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Possession of Premises
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PossessionOfPremises />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Rent
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Rent />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            LateCharge/DishonoredCheck
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <LateCharge />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            SecurityDeposit
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <SecurityDeposit />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Utilities
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Utilities />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Occupancy
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Occupancy />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Joint and Several Liability
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <JointLiability />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Acceptance Of Premises
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <AcceptanceOfPremises />
            </Segment>
          </Accordion.Content>


          <Accordion.Title>
            <Icon name='dropdown' />
            Keys and Remote Controls
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <KeyAndRemoteControls />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Use of Premises
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <UseOfPremises />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Water filled Furniture
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <WaterFilledFurniture />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Damage
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Damage />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Smoke Detection Device
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <SmokeDetectionDevice />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            CO2 Detection Device
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <CO2DetectionDevice />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Entry By Landlord
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <EntryByLandlord />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Vehicles And Parking
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <VehiclesAndParking />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Assignment And Subletting
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <AssignmentAndSubletting />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Liability Damage Responsibility
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <LiabilityDamageResponsibility />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            PreTermination Repairs
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PreTerminationRepairs />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Relocation In Event Of Needed Repairs
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Relocation />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Execution and Signatures
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <ExecutionAndSignatures />
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
AgreementForm = reduxForm({
  form: 'agreement' // a unique name for this form
})(AgreementForm);


// You have to connect() to any reducers that you wish to connect to yourself
AgreementForm = connect(
  state => ({
    enableReinitialize : true,
    keepDirtyOnReinitialize : true,
    initialValues: state.agreement.data // pull initial values from agreement reducer
  }),
   actions                // bind account loading action creator
)(AgreementForm)

export default AgreementForm;
