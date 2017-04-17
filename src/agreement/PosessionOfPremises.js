import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const PosessionOfPremises = ({}) => {
  return (
    <Segment>
      <Label>
        In the event Landlord is unable to deliver possession of the premises to Resident for any reason not within
      Landlords control, including, but not limited to, failure of prior occupants to vacate as agreed or required
      by law, Landlord
      </Label>
      <div className="fields">
          <div className="eight wide field">
            <label htmlFor="ackPosessionOfPremises">Click to Acknowledge</label>
            <div>
              <Field name="ackPosessionOfPremises" id="ackPosessionOfPremises" component="input" type="checkbox"/>
            </div>
          </div>
      </div>
    </Segment>

  );
}



export default PosessionOfPremises;
