import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Relocation = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              In the event Landlord deems it necessary or appropriate to make any repairs to the premises or the
              building or apartment complex in which the premises are located which, in the Landlord's sole
              discretion, require or necessitate that Resident vacate the premises on a temporary basis, then
              Resident shall vacate the premises upon reasonable notie from Landlord to do so.  Three(3)
            </label>            
            <div>
              <Label htmlFor="ackRelocation">Click to Acknowledge</Label>
              <div>
                <Field name="ackRelocation" id="ackRelocation" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Relocation;
