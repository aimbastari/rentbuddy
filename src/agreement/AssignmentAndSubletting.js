import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const AssignmentAndSubletting = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              (a)By Resident: Resident may not assign or sublet the premises, nor assign any interest in this Agreement. (b)By Landlord:
              At any time Landlord may assign all its rights and delegate all of its duties under this Agreement to the new
              owner of the premises or to a new management company or agent.  Upon notice of such assignment, Resident agrees that the AssignmentAndSubletting
              is the new Landlord and all references in this Agreement to 'Landlord' shall refer to the designated assignee. The former Landlord
              shall have no further Liability to Resident hereunder from and after the effective date of any such assignment.
            </label>            
            <div>
              <Label htmlFor="ackSubletting">Click to Acknowledge</Label>
              <div>
                <Field name="ackSubletting" id="ackSubletting" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default AssignmentAndSubletting;
