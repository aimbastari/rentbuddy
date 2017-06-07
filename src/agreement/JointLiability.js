import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const JointLiability = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              If more than one resident enters into this Agreement ("Roommates"), the obligations are joint and several;
              each such Resident is individually as well as jointly, liable for full performance of all agreed terms and
              payment of all sums required hereunder as long as any one of the Residents remain in possession of the 
              premises. Any breach or abandonment by any one or more of the Residents shall not terminate the Agreement
              nor shall it relieve the remaining Residents from fulfilling the terms of the Agreement.
              Should one or more of the Residents terminate their residency apart and separately from the other Residents,
              no right to substitute a person in their stead shall exist.  Changes in residents during the rental term
              must be approved in advance by the Landlord.
            </label>
            <div>
              <Label htmlFor="ackJointLiability">Click to Acknowledge</Label>
              <div>
                <Field name="ackJointLiability" id="ackJointLiability" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}


export default JointLiability;
