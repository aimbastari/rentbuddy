import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Proposition65 = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              This property contains chemicals known to the State of California to cause cancer, birth defects,
              and other reproductive harm.  These chemicas may be contained in some of the building materials and in
              some of the products and materials used to maintain the property, and in emissions, fumes and smoke from
              tenant and guest activities, including but not limited to the use of motor vehicles, barbecues, and 
              tobacco products. further information about Proposition 65 may be obtained by telephone from the Office
              of Environmental Health Hazard Assessment's Proposition 65 Implementation Office at (916)445-6900.
            </label>
            
            <div>
              <Label htmlFor="ackProp65">Click to Acknowledge</Label>
              <div>
                <Field name="ackProp65" id="ackProp65" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Proposition65;
