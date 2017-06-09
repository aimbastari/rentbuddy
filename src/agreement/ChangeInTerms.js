import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const ChangeInTerms = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Landlord may change any term or condition of a Month-To-Month Tenancy, including but not limited to the amount of rent, 
              by giving Resident thirty (30) days prior notice of such change.  Further, during the term of a Fixed Term Lease,
              Landlord may server Resident with a notice of rent increase or other change of terms to take effect upon expiration
              of the lease.
            </label>
            
            <div>
              <Label htmlFor="ackChangeInTerms">Click to Acknowledge</Label>
              <div>
                <Field name="ackChangeInTerms" id="ackChangeInTerms" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default ChangeInTerms;
