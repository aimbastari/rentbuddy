import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const VehiclesAndParking = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Landlord reserves the right to control the method of parking and to tow away, at Resident's expense, any vehicle 
              causing an unsafe/hazardous condition or parked in spaces not authorized by Landlord. No vehicle may be brought
              onto the premises unless such vehicle is operable, currently registered, free of any leaking fluids and in 
              compliance with governmental noise limitations.  
            </label>            
            <div>
              <Label htmlFor="ackVehiclesAndParking">Click to Acknowledge</Label>
              <div>
                <Field name="ackVehiclesAndParking" id="ackVehiclesAndParking" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default VehiclesAndParking;
