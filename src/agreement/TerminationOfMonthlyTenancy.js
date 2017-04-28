import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const TerminationOfMonthlyTenancy = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              This paragraph applies only to Month-to-Month tenancies.  Resident may terminate this agreement at any time
              by giving to Landlord not less than thirty (30) days advance notice of Resident's intent to terminate. Once
              Resident has given notice of termination, Resident may not withdraw or cancel said notice without Landlords written consent.
              Landlord may terminate this Agreement at any time, and without cause, by giving to Resident not less than thirty (30) days
              advanced notice of termination, provided however that if the Resident has resided at the premises for more than one (1)   
              year, Landlord shall give the Resident no less than sixty (60) days notice of termination. Resident is responsible 
              for pro-rated rent through the termination date of the tenancy, and may not apply the security deposit towards the payment of the rent.
            </label>
            
            <div>
              <Label htmlFor="ackTerminationMonthToMonth">Click to Acknowledge</Label>
              <div>
                <Field name="ackTerminationMonthToMonth" id="ackTerminationMonthToMonth" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default TerminationOfMonthlyTenancy;
