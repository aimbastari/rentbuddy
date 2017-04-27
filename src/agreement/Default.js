import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Default = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              In the event of a default by Resident, Landlord may elect to (a) continue the lease in effect and enforce all
              his rights and remedies hereunder, including the right to recover the rent as it becomes due, or (b) at any time
              terminate all of Resident's rights hereunder and recover from Resident all damages Landlord may incur by reason 
              of the breach of the lease, including the cost of recovering the premises, and including the worth at the time
              of such termination, or at the time of an awar if suit is instituted to enforce this provision, of the amount by
              which the unpaid rent for the balance of the term exceeds the amopunt of such rental

              As required by law, Resident is hereby notified that a negative credit report reflecting on Resident's credit report may
              be submitted to a credit reporting agency if Resident fails to fulfill the terms of the credit obligation 
              under the terms of this Agreement.
            </label>
            
            <div>
              <Label htmlFor="ackDefault">Click to Acknowledge</Label>
              <div>
                <Field name="ackDefault" id="ackDefault" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Default;
