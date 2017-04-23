import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const PossessionOfPremises = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
            In the event Landlord is unable to deliver possession of the premises to Resident for any reason not within
            Landlords control, including, but not limited to, failure of prior occupants to vacate as agreed or required
            by law, Landlord shall not be liable to Residents except for the return of all sums previously paid to Landlord
            in the event the Residents choose to terminate this Lease.
            </label>
            
            <div>
              <Label htmlFor="ackPossessionOfPremises">Click to Acknowledge</Label>
              <div>
                <Field name="ackPossessionOfPremises" id="ackPossessionOfPremises" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}



export default PossessionOfPremises;
