import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Utilities = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
                Landlord shall provide only those utilities and services set forth in the Basic Lease Terms of the 
                Agreement. Resident shall pay for all other utilities and services supplied to the premises.
                Utility accounts that are to be paid by Resident shall be opened in the name of the Resident.
                Resident shall not waste or cause excessive use of any utility supplied and paid for by Landlord. 
                Landlord shall not be liable for any interruption or interference with utilities or services, whether provided by
                Landlord or Resident, caused by strike, riot, orders or acts of public authorities, vandalism, acts of other
                Residents or third persons, accidents, the making of necessary repairs to the complex, or any cause beyond 
                Landlord's reasonable control.     
            </label>
            
            <div>
              <Label htmlFor="ackUtilities">Click to Acknowledge</Label>
              <div>
                <Field name="ackUtilities" id="ackUtilities" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}


export default Utilities;
