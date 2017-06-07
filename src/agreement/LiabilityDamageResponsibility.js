import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const LiabilityDamageResponsibility = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident agrees to hold Landlord harmless from all claims of loss or damage to property, and of injury or death to persons 
              caused by the intentional acts or negligence of Resident, Resident's guest or invitees, or ocurring on the premises rented for Resident's
              exclusive use. Resident expressly absolves Landlord from any and all liability for any loss or damage to Resident's property
              or effects arising out of water leakage, or breaking pipes, or theft, or other causes beyond the reasonable control of
              Landlord. This includes damage to Resident's or guest's vehicles while parked on the property.  In the event the premises
              are damaged by fire or other casualty not covered by insurance, Landlord shall have the option either to (1) repair such
              damage, this Agreement continuing in full force and effect, or (2) give notice to Resident terminating this Agreeement.
              Landlord shall not be required to repair or replace any property bought onto the premises by Resident.  Resident agrees
              to accept financial responsibility for any damage to the premises from fire, water or casusalty caused by Resident.
              Resident is encouraged to carry a standard renter's policy and acknowkedges that if Resident fails to do so, Resident
              will be financially responsible for any losses not covered by Landlord's fire and extended coverage insurance policy.  In no
              event shall Resident be entitled to compensation or damages due to any extra expense, annoyance, or inconvenience for loss
              of use due to a casualty that is beyond the control of the Landlord.
       
            </label>            
            <div>
              <Label htmlFor="ackLiability">Click to Acknowledge</Label>
              <div>
                <Field name="ackLiability" id="ackLiability" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default LiabilityDamageResponsibility;
