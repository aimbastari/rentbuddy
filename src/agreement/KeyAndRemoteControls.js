import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const KeyAndRemoteControls = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident is responsible for all keys and remote control devices given to Resident at the commencement of this tenancy.
              The cost of replacement of any lost or missing key or remote control device or any key or remote control deivce not
              returned at the termination of this tenancy, and the changing of any locks necessitated thereby, shall be paid by
              Resident.  Resident shall not be deeemed to have surrendered possession of the premises until all keys have been returned
              to Landlord or Resident has notified Landlord in writing of loss of such keys. 
            </label>
            
            <div>
              <Label htmlFor="ackKeys">Click to Acknowledge</Label>
              <div>
                <Field name="ackKeys" id="ackKeys" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default KeyAndRemoteControls;
