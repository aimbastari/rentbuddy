import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Occupancy = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Occupants of the premises shall be restricted to Adult and Minor REsidents listed above and by no other persons.
              Any change in Occupancy must be approved in writing by Landlord and may be subject to the submission and approval of a rental application 
              by any proposed additional occupants.  Overnight guests may not stay more than (7) consecutive days nor more than and
              aggregate of fourteen (14) days in any six (6) month period without prior written consent of Landlord.
            </label>
            
            <div>
              <Label htmlFor="ackOccupancy">Click to Acknowledge</Label>
              <div>
                <Field name="ackOccupancy" id="ackOccupancy" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}


export default Occupancy;
