import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const LateCharge = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              If Residents fail to pay the rent in full by the end of the third day after it is due or when a deficient check has 
              been tendered for rent payment, a late fee in the amount of 6% of the monthly rent as set forth in the Basic Lease Terms of 
              this Agreement shall be added as additional rent. Resident agrees that the late charge represents reasonable compensation
              to Landlord for damages Landlord will suffer in the event rent is not paid when due.  This provision does not extend the
              rental due date.  In addition to the late charge stated herein, Resident shall pay Landlord as additional rent a processing
              fee in the amount set forth in the Basic Lease Terms of this Agreement for any check which is dishonored for any 
              reason by Resident's bank. Any dishonored check must be replaced by a cashier's check or money order. 
            </label>

            <div>
              <Label htmlFor="ackLateChargeBadCheck">Click to Acknowledge</Label>
              <div>
                <Field name="ackLateChargeBadCheck" id="ackLateChargeBadCheck" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}



export default LateCharge;
