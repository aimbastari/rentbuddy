import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Waiver = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              No failure by Landlord to enforce any term of this Agreement shall be deemed to be a waiver of Landlord's
              right to enforce such provision or any other provision on the same or any future occasion. Acceptance
              of rent with knowledge of any default by Resident shall not be deemed to be a waiver of such default, 
              nor shall it limit Landlord's rights and remedies, including the remedy of termination, arising by reason
              of such default.  Landlord's acceptance of a partial payment of rent shall not be deemed to be a waiver of 
              Landlord's right to demand payment of the full amount of rent then due. 
            </label>
            
            <div>
              <Label htmlFor="ackWaiver">Click to Acknowledge</Label>
              <div>
                <Field name="ackWaiver" id="ackWaiver" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Waiver;
