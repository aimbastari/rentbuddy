import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const AttorneyFeesAndCosts = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              In the event of a default by Resident hereunder, Resident shall pay to Landlord all costs reasonably incurred by 
              Landlord to remedy such default, including reasonable attorneys' fees incurred for consultation, preparation of 
              any notice or letter, or otherwise. whether or not an action is brought against Resident.  In the event of an unlawful detainer 
              or other action for the breach of this Agreement, the prevailing party to such action shall be entitled to recover
              its reasonable attorney's fees and cost incurred therein in addition to any other relief to which it may be entitled. 
            </label>
            
            <div>
              <Label htmlFor="ackAttorneysFee">Click to Acknowledge</Label>
              <div>
                <Field name="ackAttorneysFee" id="ackAttorneysFee" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default AttorneyFeesAndCosts;
