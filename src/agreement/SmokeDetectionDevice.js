import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const SmokeDetectionDevice = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              The premises are equipped with a smoke detection device(s), and: (a) the Resident acknowledges the smoke detector(s) was tested
              and its operation explained by management in the presence of the Resident at time of initial occupancy and the detector(s)
              in the unit was working properly at the time. (b) each Resident shall test the smoke detector at least once a week to determine 
              if the smoke detector(s) is operating and immediately inform LandLord, in writing, of any malfunction.
            </label>
            
            <div>
              <Label htmlFor="ackSmoke">Click to Acknowledge</Label>
              <div>
                <Field name="ackSmoke" id="ackSmoke" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default SmokeDetectionDevice;
