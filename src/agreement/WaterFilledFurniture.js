import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const WaterFilledFurniture = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident shall not use any water filled furniture without Landlords prior written consent. Any such consent shall be 
              conditioned upon Resident's compliance with all the requirements of CIVIL CODE 1940.5.  Furthermore, if the certificate
              of occupancy for the premises was issued prior to January 1, 1973, Landlord may refuse to consent to water-filled furniture.              
            </label>
            
            <div>
              <Label htmlFor="ackWaterFurniture">Click to Acknowledge</Label>
              <div>
                <Field name="ackWaterFurniture" id="ackWaterFurniture" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default WaterFilledFurniture;
