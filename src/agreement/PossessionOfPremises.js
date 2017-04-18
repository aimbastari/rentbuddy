import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const PossessionOfPremises = ({}) => {
  return (
    <Segment>
      <Label>
        In the event Landlord is unable to deliver possession of the premises to Resident for any reason not within
      Landlords control, including, but not limited to, failure of prior occupants to vacate as agreed or required
      by law, Landlord
      </Label>
      <div className="fields">
          <div className="three wide field">
            <div>
              <Label htmlFor="ackPossessionOfPremises">Click to Acknowledge</Label>
              <div>
                <Field name="ackPossessionOfPremises" id="ackPossessionOfPremises" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}



export default PossessionOfPremises;
