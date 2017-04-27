import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const CO2DetectionDevice = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              The premises are equipped with a CO2 detection device(s), and: (a) the Resident acknowledges the smoke detector(s) was tested
              and its operation explained by management in the presence of the Resident at time of initial occupancy and the detector(s)
              in the unit was working properly at the time. (b) each Resident shall test the CO2 detector at least once a week to determine 
              if the CO2 detector(s) is operating and immediately inform LandLord, in writing, of any malfunction.
            </label>
            
            <div>
              <Label htmlFor="ackCO2">Click to Acknowledge</Label>
              <div>
                <Field name="ackCO2" id="ackCO2" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default CO2DetectionDevice;
