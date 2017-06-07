import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Damage = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident shall promptly pay for any damages to the premises or the apartment community caused by Resident or his guests or 
              occupants. Drains, waste pipes and garbage disposals are acknowledged to have been clear and in good operating conditions
              at the commencement of this tenancy unless reported otherwise to Landlord within one week from the commencement of this 
              tenancy. Resident shall pay the cost of clearing any partial or complete stoppage or repairing any malfunction caused
              by Resident ocurring during this tenancy.
            </label>
            
            <div>
              <Label htmlFor="ackDamage">Click to Acknowledge</Label>
              <div>
                <Field name="ackDamage" id="ackDamage" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Damage;
