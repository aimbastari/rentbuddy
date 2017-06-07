import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const RenewalHoldingOver = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              This paragraph applies only to Fixed Term Leases. At the expiration of a fixed term lease, Resident may, at the option
              of Landlord, continue residency on a month-to-month basis or by an extension ot this lease for an additional Fixed
              term providing such extension is executed by both parties in advance of the lease expiration date. In the absence
              of written agreement to the contrary, any continued residency after the expiration of the initial lease term shall be
              deemed to be on a month-to-month basis.  Unless Landlord shall have served Resident with a notice specifying a 
              different rental amount, upon expiration of the initial term of this lease the holdover rental shall be an amount to
              110% of the amounts set forth in the BASIC LEASE TERM Section.
            </label>
            
            <div>
              <Label htmlFor="ackRenewal">Click to Acknowledge</Label>
              <div>
                <Field name="ackRenewal" id="ackRenewal" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default RenewalHoldingOver;
