import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const PreTerminationRepairs = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              In the event Resident elects to make any repairs to the premises pursuant to Civil Code
              Section 1950.5, Resident acknowledges and agrees that all such repairs must be performed in a
              professional and workmanlike manner.  Any paint or other materials utilized by Resident in connection 
              with such repairs must meet the Landlord's specification for quality and color. Resident agrees to
              obtain from the residential manager Landlord's material specification prior to the commencement
              of any repairs.  Resident agrees to hire a licensed contractor, at Resident's sole expense, for any
              work requiring a contractor's license (such as plumbing or electrical repairs) or for any work that 
              Resident is not qualified to perform. Resident agrees to indemnify, defend and hold Landlord harmless
              with respect to the costs and expenses of any work performed by or for the benefit of the Resident, and
              with respect to any injury or damage toperson or property resulting from any such work performed by or 
              for the benefit of Resident. Resident acknowledges that any work which is not performed ina workmanlike manner 
              or which does not comply with Landlord's material specification may result in charges to Resident
              to remedy such deficiencies, which charges may be more than if Landlord had made the repairs in the first instance.

            </label>            
            <div>
              <Label htmlFor="ackPretermination">Click to Acknowledge</Label>
              <div>
                <Field name="ackPretermination" id="ackPretermination" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default PreTerminationRepairs;
